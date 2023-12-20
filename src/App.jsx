import './App.css';
import AllConcerts from './pages/trendies/AllConcerts';
import DrawerAppBar from './components/DrawerAppBar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allconcerts' element={<AllConcerts />} />
      </Routes>
    </div>
  );
}

export default App;
