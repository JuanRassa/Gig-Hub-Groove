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

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allconcerts' element={<AllConcerts />} />
        <Route path='/allconcerts/:eventId' element={<EventDetails />} />
        <Route path='/independent' element={<HomeIndependent />} />
        <Route path='/independent/:eventId' element={<EventDetailsIndependent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
