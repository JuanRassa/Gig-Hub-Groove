import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.jambase.com/jb-api/v1/events/id/${eventId}?apikey=34602fe4-774f-4365-8a0d-ca7139ae2e76`)
      .then(response => {
        // console.log('API Response:', response.data);
        const eventFromApi = response.data.event;
        // console.log('Event from API:', eventFromApi);
        setEvent(eventFromApi);
      })
      .catch(error => {
        console.log(error);
      });
  }, [eventId]);

  // console.log('Event:', event);

  return (
    <div>
      {event ? (
        <div key={event.identifier}>
          {/* {console.log('Event:', event)} */}
          <img src={event.image} alt={event.name} style={{ maxWidth: 250 }} />
          <div>
            <h2>{event.name}</h2>
            <h3>{event.location && event.location.name}</h3>
            <p>{event.location && event.location.address && event.location.address.addressLocality}</p>
            <p>{event.location && event.location.address && event.location.address.addressCountry.name}</p>
            {event.location && event.location.address && event.location.address.addressCountry.identifier}
            <p>{event.location && event.location.address && event.location.address.streetAddress}</p>
          </div>
          <div>
            <h3>{event['@type']}</h3>
            <p>
              <strong>{event.startDate}</strong>
            </p>
          </div>
          <div>
            <p>{event.performer && Array.isArray(event.performer) && event.performer.map(performer => performer.name).join(', ')} </p>
            {(event['@type'] === 'Concert' || event['@type'] === 'Festival') && (
              <p>
                {event.performer &&
                  Array.isArray(event.performer) &&
                  (() => {
                    const uniqueGenres = [];
                    event.performer.forEach(performer => {
                      if (performer.genre && !uniqueGenres.includes(performer.genre)) {
                        uniqueGenres.push(performer.genre);
                      }
                    });
                    return uniqueGenres.length > 0 ? uniqueGenres.join(', ') : '';
                  })()}
              </p>
            )}
          </div>
          <p>Buy your ticket at:</p>
          <p>{event.offers && Array.isArray(event.offers) && event.offers.map(offers => offers.url)}</p>
          <iframe
            width='600'
            height='450'
            style={{ border: 0 }}
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            src='https://www.google.com/maps/embed/v1/place?key=
    &q=Space+Needle,Seattle+WA'></iframe>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EventDetails;
