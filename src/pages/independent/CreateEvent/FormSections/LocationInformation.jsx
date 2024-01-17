import React, { useContext } from 'react';
import { CreateFormContext } from '../../../../context/CreateFormContext';
import { countriesList } from '../../../../components/helpers/countriesList';

const LocationInformation = () => {
  const {
    states: {
      // Location Info:
      event_event_geoCountryIso2_ctx: [event_event_geoCountryIso2],
      event_event_geoCityName_ctx: [event_event_geoCityName],
      event_event_venueName_ctx: [event_event_venueName],
      event_event_venueType_ctx: [event_event_venueType],
      event_event_venueCapacity_ctx: [event_event_venueCapacity],
      event_event_venuePostalCode_ctx: [event_event_venuePostalCode],
    },
    funks: {
      // Location Info:
      event_event_geoCountryIso2_funk_ctx: event_event_geoCountryIso2_funk,
      event_event_geoCityName_funk_ctx: event_event_geoCityName_funk,
      event_event_venueName_funk_ctx: event_event_venueName_funk,
      event_event_venueType_funk_ctx: event_event_venueType_funk,
      event_event_venueCapacity_funk_ctx: event_event_venueCapacity_funk,
      event_event_venuePostalCode_funk_ctx: event_event_venuePostalCode_funk,
    },
  } = useContext(CreateFormContext);
  return (
    <fieldset className='CreateEvent_location'>
      <legend>Location Information</legend>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_geoCountryIso2'>
          Country:
          <select
            name='event_geoCountryIso2'
            id='event_geoCountryIso2'
            value={event_event_geoCountryIso2}
            onChange={e => {
              event_event_geoCountryIso2_funk(e);
            }}>
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
          <input
            type='text'
            name='event_geoCityName'
            id='event_geoCityName'
            value={event_event_geoCityName}
            onChange={e => {
              event_event_geoCityName_funk(e);
            }}
          />
        </label>
      </div>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_venueName'>
          Venue's Name:
          <input
            type='text'
            name='event_venueName'
            id='event_venueName'
            value={event_event_venueName}
            onChange={e => {
              event_event_venueName_funk(e);
            }}
          />
        </label>
      </div>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_venueType'>
          Venue's Type:
          <input
            type='text'
            name='event_venueType'
            id='event_venueType'
            value={event_event_venueType}
            onChange={e => {
              event_event_venueType_funk(e);
            }}
          />
        </label>
      </div>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_venueCapacity'>
          Venue's Capacity:
          <input
            type='text'
            name='event_venueCapacity'
            id='event_venueCapacity'
            value={event_event_venueCapacity}
            onChange={e => {
              event_event_venueCapacity_funk(e);
            }}
          />
        </label>
      </div>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_venuePostalCode'>
          Venue's Postal Code:
          <input
            type='text'
            name='event_venuePostalCode'
            id='event_venuePostalCode'
            value={event_event_venuePostalCode}
            onChange={e => {
              event_event_venuePostalCode_funk(e);
            }}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default LocationInformation;
