import React, { useState } from 'react';
import { countriesList } from '../../../components/helpers/countriesList';
import { CreateFormContext } from '../../../context/CreateFormContext';

const CreateEvent = () => {
  // States:
  const [event_type_value, set_Event_type_value] = useState('concert');

  console.log('Log do Juan: ', [{ event_type_value: event_type_value }]);

  // Input Handlers:
  const event_type_concert_funk = e => {
    console.log('event_type_concert_funk', e.target.checked);
    if (e.target.checked) {
      set_Event_type_value('concert');
    }
  };
  const event_type_festival_funk = e => {
    if (e.target.checked) {
      set_Event_type_value('festival');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert('NEW');
  };
  return (
    <div className='CreateEvent'>
      <h2>Create a new event</h2>
      <CreateFormContext.Provider value=''>
        <form onSubmit={handleSubmit}>
          <fieldset className='CreateEvent_generalInfo'>
            <legend>General Information</legend>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_start-date'>
                Start Date:
                <input type='date' name='event_start-date' id='event_start-date' />
              </label>
              <label htmlFor='event_end-date'>
                End Date:
                <input type='date' name='event_end-date' id='event_end-date' />
              </label>
            </div>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_description'>
                Description:
                <textarea name='event_description' id='event_description' cols='30' rows='10'></textarea>
              </label>
            </div>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_image'>
                Image URL:
                <input type='url' name='event_image' id='event_image' />
              </label>
            </div>
          </fieldset>
          <fieldset className='CreateEvent_location'>
            <legend>Location Information</legend>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_geoCountryIso2'>
                Country:
                <select name='event_geoCountryIso2' id='event_geoCountryIso2'>
                  {countriesList.length > 0 &&
                    countriesList.map(country => (
                      <option key={country.geoCountryIso2} value={country.geoCountryIso2}>
                        {country.countryName}
                      </option>
                    ))}
                </select>
              </label>
            </div>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_geoCityName'>
                City:
                <input type='text' name='event_geoCityName' id='event_geoCityName' />
              </label>
            </div>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_venueName'>
                Venue's Name:
                <input type='text' name='event_venueName' id='event_venueName' />
              </label>
            </div>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_venueType'>
                Venue's Type:
                <input type='text' name='event_venueType' id='event_venueType' />
              </label>
            </div>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_venueCapacity'>
                Venue's Capacity:
                <input type='text' name='event_venueCapacity' id='event_venueCapacity' />
              </label>
            </div>
            <div className='CreateEvent_inputContainer'>
              <label htmlFor='event_venuePostalCode'>
                Venue's Postal Code:
                <input type='text' name='event_venuePostalCode' id='event_venuePostalCode' />
              </label>
            </div>
          </fieldset>
          <fieldset className='CreateEvent_artistsInfo'>
            <legend>Type of Event</legend>
            <label htmlFor='event_concert'>
              Concert
              <input
                type='radio'
                name='event_type_concert'
                id='event_concert'
                defaultChecked
                value='concert'
                onChange={e => {
                  event_type_concert_funk(e);
                }}
              />
            </label>
            <label htmlFor='event_festival'>
              Festival
              <input
                type='radio'
                name='event_type_concert'
                id='event_festival'
                value='festival'
                onChange={e => {
                  event_type_festival_funk(e);
                }}
              />
            </label>
          </fieldset>
          <fieldset className='CreateEvent_artistsInfo'>
            <legend>Lineup Information</legend>
          </fieldset>
          <button type='submit'>Create</button>
        </form>
      </CreateFormContext.Provider>
    </div>
  );
};

export default CreateEvent;
