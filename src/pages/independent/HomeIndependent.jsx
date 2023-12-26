import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://gig-hub-independent.adaptable.app/events';

const HomeIndependent = () => {
  const [allIndependent, setAllIndependent] = useState([]);

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
      <div className='AllIndependent__container'>
        {allIndependent.map(event => {
          return (
            <Link>
              <h2>{event.name}</h2>
              <img src={event.image} alt={event.name} />
              <p>Type: {event.type}</p>
              <p>City: {event.geoCityName} </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeIndependent;
