import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import EventCard from '../../components/EventCard';
import Filters from '../../components/Filters';
import './styles.css';

let API_KEY = import.meta.env.VITE_API_KEY;

function AllConcerts() {
  const [showEvents, setShowEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    geoCountryIso2: '',
    artistName: '',
    eventType: '',
    eventDateFrom: '',
    eventDateTo: '',
    genreSlug: '',
  });

  const [currentPage, setCurrentPage] = useState(1);

  let API_URL = `https://www.jambase.com/jb-api/v1/events?apikey=${API_KEY}&geoCountryIso2=${filters.geoCountryIso2}&eventDateFrom=${filters.eventDateFrom}&eventDateTo=${filters.eventDateTo}&genreSlug=${filters.genreSlug}&eventType=${filters.eventType}&artistName=${filters.artistName}&page=${currentPage}&perPage=12`;

  const getEvents = () => {
    setLoading(true);

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
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePrevClick = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  useEffect(() => {
    getEvents();
  }, [currentPage]);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h1 className='mainTitle'>Trendy Concerts</h1>

      <Filters showEvents={showEvents} setShowEvents={setShowEvents} filters={filters} setFilters={setFilters} getEvents={getEvents} />
      <div className='AllConcerts_container'>
        {loading && <p>Loading...</p>}
        {!loading && showEvents.map(event => <EventCard key={event.identifier} events={event} />)}
      </div>

      <div>
        <button onClick={handlePrevClick}>Return</button>
        {currentPage}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default AllConcerts;
