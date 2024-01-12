import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import EventCard from '../../components/EventCard';
import Filters from '../../components/Filters';
import SearchBar from '../../components/SearchBar';
import './styles.css';

function AllConcerts() {
  const [showEvents, setShowEvents] = useState([]);
  const [filters, setFilters] = useState({
    geoCountryIso2: '',
    artistName: '',
    eventType: '',
    eventDateFrom: '',
    eventDateTo: '',
    genreSlug: '',
  });

  let API_URL = `https://www.jambase.com/jb-api/v1/events?apikey=34602fe4-774f-4365-8a0d-ca7139ae2e76&geoCountryIso2=${filters.geoCountryIso2}&eventDateFrom=${filters.eventDateFrom}&eventDateTo=${filters.eventDateTo}&genreSlug=${filters.genreSlug}&eventType=${filters.eventType}&artistName=${filters.artistName}`;

  const getEvents = () => {
    axios
      .get(API_URL)
      .then(response => {
        if (response.data && Array.isArray(response.data.events)) {
          // console.log(response.data.events);
          setShowEvents(response.data.events);
        } else {
          console.error(error);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h1 className='mainTitle'>Trendy Concerts</h1>
      <Filters
        showEvents={showEvents}
        setShowEvents={setShowEvents}
        filters={filters}
        setFilters={setFilters}
        getEvents={getEvents}
      />
      <div className='AllConcerts_container'>
        {showEvents.map(event => (
          <EventCard key={event.identifier} events={event} />
        ))}
      </div>
    </div>
  );
}

export default AllConcerts;
