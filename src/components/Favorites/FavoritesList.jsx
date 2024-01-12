import React, { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

const FavoritesList = () => {
  const {
    isLoggedCtx: [isLogged, setIsLogged],
    usernameAuthCtx: [usernameAuth, setUsernameAuth],
  } = useContext(LoginContext);

  return <div>FavoritesBtn</div>;
};

export default FavoritesList;
