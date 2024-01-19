import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import axios from 'axios';
import EventCard from '../../components/EventCard';

let API_KEY = import.meta.env.VITE_API_KEY;

const Favorites = () => {
  const [wishList, setWishList] = useState([]); // stored liked events
  const [isLogged, setIsLogged] = useContext(LoginContext);
  const [usernameAuth, setUsernameAuth] = useContext(LoginContext);
  // checked if user is logged

  // if the user is logged, fetch his wishlist
  useEffect(() => {
    if (isLogged) {
      const userWishList = fetchUserWishList();
      setWishList(userWishList);
    }
  }, [isLogged]);

  // add an event to the wishlist
  const addEventWishList = event => {
    setWishList(prevWishList => [...prevWishList, event]);
    updateUserWishList([...prevWishList, event]);
  };

  // remove event from the wishlist
  const removeEventWishList = eventId => {
    setWishList(prevWishList =>
      prevWishList.filter(event => event.id !== eventId)
    );
    updateUserWishList(newWishList);
  };

  // check if the event is in the wish list or not
  const isEventInWishList = eventId => {
    return wishList.some(event => event.id === eventId);
  };

  // fetch the user wish list
  const fetchUserWishList = async () => {
    try {
      const response = await axios.get(
        `https://www.jambase.com/jb-api/v1/events?apikey=${API_KEY}/user/my-favorites`
      );
      setWishList(response.data.wishlist);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Hello {usernameAuth}</h1>
      {wishList.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        wishList.map(event => (
          <EventCard
            key={event.id}
            event={event}
            isInWishList={isEventInWishList(event.id)}
            removeEventWishList={removeEventWishList}
            addEventWishList={addEventWishList}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
