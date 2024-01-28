import { useState, useEffect } from 'react';
import { LoginContext } from './context/LoginContext';
import './App.css';
import AllConcerts from './pages/trendies/AllConcerts';
import HomeIndependent from './pages/independent/HomeIndependent';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import EventDetails from './pages/trendies/EventDetails';
import EventDetailsIndependent from './pages/independent/EventDetailsIndependent';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Favorites from './pages/users/Favorites';
import CreateEvent from './pages/independent/CreateEvent/CreateEvent';
import EditEvent from './pages/independent/EditEvent/EditEvent';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage';
import { ChakraProvider } from '@chakra-ui/react';
import { Popup } from './components/Popup/Popup';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [usernameAuth, setUsernameAuth] = useState('');
  const [userIdAuth, setUserIdAuth] = useState('');
  const [triggerIndependentGet, setTriggerIndependentGet] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

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
        <LoginContext.Provider
          value={{
            isLoggedCtx: [isLogged, setIsLogged],
            usernameAuthCtx: [usernameAuth, setUsernameAuth],
            userIdAuthCtx: [userIdAuth, setUserIdAuth],
            triggerIndependentGetCtx: [
              triggerIndependentGet,
              setTriggerIndependentGet,
            ],
            isPopupOpenCtx: [isPopupOpen, setIsPopupOpen],
            popupMessageCtx: [popupMessage, setPopupMessage],
          }}
        >
          <Popup />
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/allconcerts' element={<AllConcerts />} />
            <Route path='/allconcerts/:eventId' element={<EventDetails />} />

            <Route path='/independent' element={<HomeIndependent />} />
            <Route
              path='/independent/:eventId'
              element={<EventDetailsIndependent />}
            />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/my-favorites' element={<Favorites />} />
            <Route path='/create-event' element={<CreateEvent />} />
            <Route
              path='/independent/edit-event/:eventId'
              element={<EditEvent />}
            />
          </Routes>
        </LoginContext.Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
