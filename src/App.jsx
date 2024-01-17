import { useState, useEffect } from 'react';
import { LoginContext } from './context/LoginContext';
import './App.css';
import AllConcerts from './pages/trendies/AllConcerts';
import HomeIndependent from './pages/independent/HomeIndependent';
import DrawerAppBar from './components/DrawerAppBar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import EventDetails from './pages/trendies/EventDetails';
import EventDetailsIndependent from './pages/independent/EventDetailsIndependent';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Favorites from './pages/users/Favorites';
import CreateEvent from './pages/independent/CreateEvent/CreateEvent';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [usernameAuth, setUsernameAuth] = useState('');

  useEffect(() => {
    const is_logged = window.sessionStorage.getItem('is_logged');

    if (is_logged === 'true') {
      setIsLogged(is_logged);
      setUsernameAuth(window.sessionStorage.getItem('logged_username'));
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <div>
      <LoginContext.Provider
        value={{
          isLoggedCtx: [isLogged, setIsLogged],
          usernameAuthCtx: [usernameAuth, setUsernameAuth],
        }}>
        <DrawerAppBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/allconcerts' element={<AllConcerts />} />
          <Route path='/allconcerts/:eventId' element={<EventDetails />} />
          <Route path='/independent' element={<HomeIndependent />} />
          <Route path='/independent/:eventId' element={<EventDetailsIndependent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/my-favorites' element={<Favorites />} />
          <Route path='/create-event' element={<CreateEvent />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
