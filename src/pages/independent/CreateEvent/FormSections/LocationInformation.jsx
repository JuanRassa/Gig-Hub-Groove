import React, { useContext } from 'react';
import { countriesList } from '../../../../components/helpers/countriesList';

const LocationInformation = () => {
  return (
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
  );
};

export default LocationInformation;
