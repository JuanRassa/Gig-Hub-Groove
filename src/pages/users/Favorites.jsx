import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import axios from 'axios';
import ChakraCard from '../../components/ChakraCard';

let API_KEY = import.meta.env.VITE_API_KEY;

const Favorites = () => {
  const [wishList, setWishList] = useState([]); // stored liked events
  const [wishlistInfo, setWishlistInfo] = useState([]);

  const {
    isLoggedCtx: [isLogged],
    usernameAuthCtx: [usernameAuth],
  } = useContext(LoginContext);
  // console.log('isLogged', isLogged);
  // console.log('usernameAuth', usernameAuth);

  // const [isLogged, setIsLogged] = useContext(LoginContext);
  // const [usernameAuth, setUsernameAuth] = useContext(LoginContext);
  // checked if user is logged

  // if the user is logged, fetch his wishlist
  useEffect(() => {
    if (isLogged) {
      fetchUserWishList();
    }
  }, [isLogged]);

  // add an event to the wishlist
  const addEventWishList = event => {
    setWishList(prevWishList => [...prevWishList, event]);
    updateUserWishList([...prevWishList, event]);
  };

  // remove event from the wishlist
  const removeEventWishList = eventId => {
    setWishList(prevWishList => prevWishList.filter(event => event.id !== eventId));
    updateUserWishList(newWishList);
  };

  // check if the event is in the wish list or not
  const isEventInWishList = eventId => {
    return wishList.some(id => {
      id == eventId;
    });
  };

  // fetch the user wish list
  const fetchUserWishList = async () => {
    try {
      const response = await axios.get(`https://gig-hub-independent.adaptable.app/users/?id=1`);
      setWishList(response.data[0].favorites);
      getEventsInfo(response.data[0].favorites);
      return response.data[0].favorites;
    } catch (error) {
      console.error(error);
    }
  };

  const getIndependentId = async id => {
    try {
      const response = await axios.get(`https://gig-hub-independent.adaptable.app/events/?id=${id}`);
      // console.log(response.data[0]);
      setWishlistInfo(prev => [...prev, response.data[0]]);
    } catch (error) {
      console.log(error);
    }
  };
  const getJambaseId = async identifier => {
    try {
      // const response = await axios.get(`https://www.jambase.com/jb-api/v1/events/id/jambase:11133542?apikey=${API_KEY}`)
      const response = await axios.get(`https://www.jambase.com/jb-api/v1/events/id/${identifier}?apikey=${API_KEY}`);
      // console.log(response);
      setWishlistInfo(prev => [...prev, response.data.event]);
    } catch (error) {
      console.log(error);
    }
  };

  const getEventsInfo = async arrayOfIds => {
    try {
      arrayOfIds.forEach((id, index) => {
        if (id.includes('jambase')) {
          getJambaseId(id);
        } else {
          getIndependentId(id);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log('wishList', wishList);

  return (
    <div>
      <h1>Hello {usernameAuth}</h1>
      {wishlistInfo.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        <div className='AllConcerts_container'>
          {wishlistInfo.map(event => (
            <ChakraCard
              key={event.id}
              events={event}
              isInWishList={isEventInWishList(event.id)}
              removeEventWishList={removeEventWishList}
              addEventWishList={addEventWishList}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
