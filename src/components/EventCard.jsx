import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

function EventCard({ events }) {
  // console.log(events);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Card sx={{ maxWidth: 345 }} className='eventCard'>
      <CardMedia
        component='img'
        alt='event image'
        height='140'
        image={events.image}
      />
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
        <Button size='small'>Share</Button>
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
