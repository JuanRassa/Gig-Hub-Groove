import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EventDetailsIndependent() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`https://gig-hub-independent.adaptable.app/events/?id=${eventId}`)
      .then(response => {
        // console.log('API Response:', response.data);
        const eventFromApi = response.data[0];
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
            <p>
              {event.geoCityName}, {event.geoCountryIso2}
            </p>
            <p>{event.location && event.location.address && event.location.address.addressLocality}</p>
            <p>{event.location && event.location.address && event.location.address.streetAddress}</p>
          </div>
          <div>
            <h3>{event.type}</h3>
            <p>
              <strong>{event.startDate}</strong>
            </p>
          </div>
          <div>
            <p>
              {event.performer &&
                Array.isArray(event.performer) &&
                event.performer
                  .slice(0, 10)
                  .map(performer => performer.name)
                  .join(', ')}{' '}
              and much more!
            </p>
          </div>
          <p>{event.url}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EventDetailsIndependent;
