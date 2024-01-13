import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import './styles.css';

const API_URL = 'https://gig-hub-independent.adaptable.app/events';

const HomeIndependent = () => {
  const [allIndependent, setAllIndependent] = useState([]);
  const [showIndependent, setShowIndependent] = useState([]);

  // console.log(showIndependent);

  const getAllIndependent = async () => {
    const response = await axios.get(API_URL);

    const data = response.data;
    setAllIndependent(data);
    setShowIndependent(data);
  };

  useEffect(() => {
    getAllIndependent();
  }, []);

  return (
    <div className='HomeIndependent'>
      <h1 className='MainTitle'>Independent Events</h1>

      <SearchBar
        allIndependent={allIndependent}
        setShowIndependent={setShowIndependent}
      />
      <Link to='/login'>Access the edition panel</Link>
      <div className='AllIndependent__container'>
        {showIndependent.map(event => {
          return <EventCard key={event.id} events={event} />;
        })}
      </div>
    </div>
  );
};

export default HomeIndependent;
