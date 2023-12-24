import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL =
  'https://www.jambase.com/jb-api/v1/events?apikey=34602fe4-774f-4365-8a0d-ca7139ae2e76';

function AllConcerts() {
  const [showEvents, setShowEvents] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        if (response.data && Array.isArray(response.data.events)) {
          console.log(response.data.events);
          setShowEvents(response.data.events);
        } else {
          console.error(error);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Trendy Concerts</h1>

      {showEvents.map(events => {
        return (
          <div key={events.identifier}>
            <img
              src={events.image}
              alt='event-img'
              style={{ height: 100, width: 200 }}
            />
            <h3>{events.name}</h3>
            <h4>{events.startDate}</h4>
            <p>{events.location.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllConcerts;
