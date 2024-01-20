import React, { useContext } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { LoginContext } from '../context/LoginContext';

function EventCard({ events, isInWishList, removeEventWishList, addEventWishList }) {
  const {
    isLoggedCtx: [isLogged],
    triggerIndependentGetCtx: [, setTriggerIndependentGet],
  } = useContext(LoginContext);
  // console.log(events);
  console.log(isInWishList);
  const { pathname } = useLocation();

  // const isEventInFavorites = isInWishList(events.id);

  // const handleToggleWishlist = () => {
  //   if (isEventInFavorites(events.id)) {
  //     removeEventWishList(events.id);
  //   } else {
  //     addEventWishList(events.id);
  //   }
  // };

  const deleteEventIdependent = async id => {
    try {
      const response = await axios.delete(`https://gig-hub-independent.adaptable.app/events/${id}`);
      if (response.status === 200) {
        setTriggerIndependentGet(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='eventCard'>
      <CardMedia component='img' alt='event image' height='140' image={events.image} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {events.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {pathname === '/allconcerts' ? events.startDate : events['start-date']}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {events.location.name}
        </Typography>
      </CardContent>
      <CardActions>
        {/* {isEventInFavorites ? (
          <FavoriteIcon
            className='favorite_filled'
            onClick={handleToggleWishlist}
          />
        ) : (
          <FavoriteBorderIcon
            className='favorite_empty'
            onClick={handleToggleWishlist}
          />
        )} */}

        <FavoriteBorderIcon className='favorite_empty' />
        <FavoriteIcon className='favorite_filled' />
        {pathname === '/independent' && (
          <button
            style={{ pointerEvents: !isLogged ? 'none' : 'all' }}
            className={`${!isLogged ? 'disabled' : ''}`}
            onClick={() => {
              deleteEventIdependent(events.id);
            }}>
            Delete {events.id}
          </button>
        )}
        {pathname === '/independent' && (
          <Link
            to={`/independent/edit-event/${events.id}`}
            style={{ pointerEvents: !isLogged ? 'none' : 'all' }}
            className={`${!isLogged ? 'disabled' : ''}`}>
            Edit {events.id}
          </Link>
        )}
        {pathname === '/allconcerts' && (
          <Link to={`/allconcerts/${events.identifier}`} size='small'>
            Learn More
          </Link>
        )}
        {pathname === '/independent' && (
          <Link to={`/independent/${events.id}`} size='small'>
            Learn More
          </Link>
        )}
      </CardActions>
    </Card>
  );
}

export default EventCard;
