import './App.css';
import AllConcerts from './pages/trendies/AllConcerts';
import HomeIndependent from './pages/independent/HomeIndependent';
import DrawerAppBar from './components/DrawerAppBar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import EventDetails from './pages/trendies/EventDetails';

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allconcerts' element={<AllConcerts />} />
        <Route path='/independent' element={<HomeIndependent />} />
        <Route path='/allconcerts/:eventId' element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
