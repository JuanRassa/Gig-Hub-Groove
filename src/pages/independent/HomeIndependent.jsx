import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard';
import axios from 'axios';
import './styles.css';
import { LoginContext } from '../../context/LoginContext';

const API_URL = 'https://gig-hub-independent.adaptable.app/events';

const HomeIndependent = () => {
  const [allIndependent, setAllIndependent] = useState([]);
  const {
    isLoggedCtx: [isLogged],
  } = useContext(LoginContext);

  const getAllIndependent = async () => {
    const response = await axios.get(API_URL);

    const data = response.data;
    setAllIndependent(data);
  };

  useEffect(() => {
    getAllIndependent();
  }, []);

  return (
    <div className='HomeIndependent'>
      <h1 className='MainTitle'>Independent Events</h1>
      <Link to={isLogged ? '/create-event' : '/login'}>Create new events</Link>
      <div className='AllIndependent__container'>
        {allIndependent.map(event => {
          return <EventCard key={event.id} events={event} />;
        })}
      </div>
    </div>
  );
};

export default HomeIndependent;
