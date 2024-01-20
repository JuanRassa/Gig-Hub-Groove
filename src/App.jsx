import { useState, useEffect } from 'react';
import { LoginContext } from './context/LoginContext';
import './App.css';
import AllConcerts from './pages/trendies/AllConcerts';
import HomeIndependent from './pages/independent/HomeIndependent';
import DrawerAppBar from './components/DrawerAppBar';
import HomePage from './pages/HomePage';
import { Route, Routes, Link } from 'react-router-dom';
import EventDetails from './pages/trendies/EventDetails';
import EventDetailsIndependent from './pages/independent/EventDetailsIndependent';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Favorites from './pages/users/Favorites';
import CreateEvent from './pages/independent/CreateEvent/CreateEvent';
import EditEvent from './pages/independent/EditEvent/EditEvent';

import { ChakraProvider, ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [usernameAuth, setUsernameAuth] = useState('');
  const [userIdAuth, setUserIdAuth] = useState('');
  const [triggerIndependentGet, setTriggerIndependentGet] = useState(false);

  useEffect(() => {
    const is_logged = window.sessionStorage.getItem('is_logged');
    console.log(typeof is_logged);

    if (is_logged === 'true') {
      setIsLogged(true);
      setUsernameAuth(window.sessionStorage.getItem('logged_username'));
      setUserIdAuth(window.sessionStorage.getItem('logged_id'));
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <div>
      <ChakraProvider>
        <h3>HOLA</h3>
        <CircularProgress isIndeterminate color='green.300' />
        <LoginContext.Provider
          value={{
            isLoggedCtx: [isLogged, setIsLogged],
            usernameAuthCtx: [usernameAuth, setUsernameAuth],
            userIdAuthCtx: [userIdAuth, setUserIdAuth],
            triggerIndependentGetCtx: [triggerIndependentGet, setTriggerIndependentGet],
          }}>
          <nav>
            <Link to='/'>Gig Hub Groove</Link>
            {!isLogged && <Link to='/login'>Login</Link>}
            {!isLogged && <Link to='/register'>Register</Link>}
            {isLogged && (
              <Link to='my-favorites'>
                Hi {userIdAuth}-{usernameAuth}
              </Link>
            )}
            {isLogged && (
              <button
                onClick={() => {
                  setIsLogged(false);
                  window.sessionStorage.setItem('is_logged', false);
                  window.sessionStorage.setItem('logged_username', '');
                  window.sessionStorage.setItem('logged_id', '');
                }}
                color='inherit'>
                Log out
              </button>
            )}
          </nav>
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
            <Route path='/independent/edit-event/:eventId' element={<EditEvent />} />
          </Routes>
        </LoginContext.Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
