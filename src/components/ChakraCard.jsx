import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react';

import './styles.css';

const ChakraCard = ({ events, isInWishList, removeEventWishList, addEventWishList }) => {
  const {
    isLoggedCtx: [isLogged],
    triggerIndependentGetCtx: [, setTriggerIndependentGet],
  } = useContext(LoginContext);
  console.log(events);
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
    <Card maxW='sm' bgColor='#FDF8F2' className={`cardDisplay ${pathname === '/independent' ? 'cardDisplayIndependent' : ''}`}>
      <CardBody>
        <img src={events.image} alt='{events.name}' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{events.name}</Heading>
        </Stack>
        <Text paddingTop='10px'>{events.location.name}</Text>
        <Text>{events.endDate}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
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
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ChakraCard;
