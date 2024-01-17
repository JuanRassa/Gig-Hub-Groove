import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import './styles.css';
import { LoginContext } from '../../context/LoginContext';

const API_URL = 'https://gig-hub-independent.adaptable.app/events';

const HomeIndependent = () => {
  const [allIndependent, setAllIndependent] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    isLoggedCtx: [isLogged],
  } = useContext(LoginContext);

  const [showIndependent, setShowIndependent] = useState([]);

  // console.log(showIndependent);

  const getAllIndependent = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      setAllIndependent(data);
      setShowIndependent(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllIndependent();
  }, []);

  return (
    <div className='HomeIndependent'>
      <h1 className='MainTitle'>Independent Events</h1>
      <Link
        to={isLogged ? '/create-event' : '/login'}
        onClick={() => {
          window.sessionStorage.setItem('triedToCreateOrEdit', 'yes');
        }}>
        Create new events
      </Link>
      <SearchBar allIndependent={allIndependent} setShowIndependent={setShowIndependent} />
      {loading ? (
        <p>Loanding...</p>
      ) : (
        <div className='AllIndependent__container'>
          {showIndependent.map(event => {
            return <EventCard key={event.id} events={event} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomeIndependent;
