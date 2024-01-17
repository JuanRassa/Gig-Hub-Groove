import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CreateFormContext } from '../../../context/CreateFormContext';

import GeneralInfo from './FormSections/GeneralInfo';
import LocationInformation from './FormSections/LocationInformation';
import TypeOfEvent from './FormSections/TypeOfEvent';
import LineUpInformation from './FormSections/LineUpInformation';

const CreateEvent = () => {
  const API_URL = `https://gig-hub-independent.adaptable.app/events`;
  const navigate = useNavigate();
  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
  /* *** *** *** *** *** *** States *** *** *** *** *** *** *** ***  */
  // General Info:
  const [event_name, set_Event_name] = useState('');
  const [event_start_date, set_Event_start_date] = useState('');
  const [event_end_date, set_Event_end_date] = useState('');
  const [event_image_url, set_Event_image_url] = useState('');
  const [event_event_description, set_Event_event_description] = useState('');
  // Location Info:
  const [event_event_geoCountryIso2, set_Event_geoCountryIso2] = useState('');
  const [event_event_geoCityName, set_Event_geoCityName] = useState('');
  const [event_event_venueName, set_Event_venueName] = useState('');
  const [event_event_venueType, set_Event_venueType] = useState('');
  const [event_event_venueCapacity, set_Event_venueCapacity] = useState('');
  const [event_event_venuePostalCode, set_Event_venuePostalCode] = useState('');
  // Type of Event:
  const [event_type_value, set_Event_type_value] = useState('concert');
  // LineUp Info:

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
  /* *** *** *** *** *** Input Handlers Funks *** *** *** *** *** ***  */
  // General Info:
  const event_name_funk = e => {
    set_Event_name(e.target.value);
  };
  const event_start_date_funk = e => {
    set_Event_start_date(e.target.value);
  };
  const event_end_date_funk = e => {
    set_Event_end_date(e.target.value);
  };
  const event_image_url_funk = e => {
    set_Event_image_url(e.target.value);
  };
  const event_event_description_funk = e => {
    set_Event_event_description(e.target.value);
  };
  // Location Info:
  const event_event_geoCountryIso2_funk = e => {
    set_Event_geoCountryIso2(e.target.value);
  };
  const event_event_geoCityName_funk = e => {
    set_Event_geoCityName(e.target.value);
  };
  const event_event_venueName_funk = e => {
    set_Event_venueName(e.target.value);
  };
  const event_event_venueType_funk = e => {
    set_Event_venueType(e.target.value);
  };
  const event_event_venueCapacity_funk = e => {
    set_Event_venueCapacity(e.target.value);
  };
  const event_event_venuePostalCode_funk = e => {
    set_Event_venuePostalCode(e.target.value);
  };
  // Type of Event
  const event_type_concert_funk = e => {
    if (e.target.checked) {
      set_Event_type_value('concert');
    }
  };
  const event_type_festival_funk = e => {
    if (e.target.checked) {
      set_Event_type_value('festival');
    }
  };
  // LineUp Info:

  // Submit:
  const handleSubmit = e => {
    e.preventDefault();
    createNewEvent_POST();
  };
  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
  const createNewEvent_body = {
    type: event_type_value || null,
    name: event_name || null,
    geoCountryIso2: event_event_geoCountryIso2 || null,
    geoCityName: event_event_geoCityName || null,
    'start-date': event_start_date || null,
    'end-date': event_end_date || null,
    location: {
      type: event_event_venueType || null,
      name: event_event_venueName || null,
      capacity: event_event_venueCapacity || null,
      postalAdress: event_event_venuePostalCode || null,
    },
    performer: [],
    image: event_image_url || null,
    description: event_event_description || null,
  };
  const createNewEvent_POST = async () => {
    try {
      const response = await axios.post(API_URL, createNewEvent_body);
      if (response.status === 201) {
        alert('Event Created succesfuly');
        return navigate('/independent');
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log('Log do Juan: ', createNewEvent_body);

  return (
    <div className='CreateEvent'>
      <h2>Create a new event</h2>
      <CreateFormContext.Provider
        value={{
          states: {
            // General Info:
            event_name_ctx: [event_name],
            event_type_ctx: [event_type_value],
            event_start_date_ctx: [event_start_date],
            event_end_date_ctx: [event_end_date],
            event_image_url_ctx: [event_image_url],
            event_event_description_ctx: [event_event_description],
            // Location Info:
            event_event_geoCountryIso2_ctx: [event_event_geoCountryIso2],
            event_event_geoCityName_ctx: [event_event_geoCityName],
            event_event_venueName_ctx: [event_event_venueName],
            event_event_venueType_ctx: [event_event_venueType],
            event_event_venueCapacity_ctx: [event_event_venueCapacity],
            event_event_venuePostalCode_ctx: [event_event_venuePostalCode],
          },
          funks: {
            // General Info:
            event_name_funk_ctx: event_name_funk,
            event_type_concert_funk_ctx: event_type_concert_funk,
            event_type_festival_funk_ctx: event_type_festival_funk,
            event_start_date_funk_ctx: event_start_date_funk,
            event_end_date_funk_ctx: event_end_date_funk,
            event_image_url_funk_ctx: event_image_url_funk,
            event_event_description_funk_ctx: event_event_description_funk,
            // Location Info:
            event_event_geoCountryIso2_funk_ctx: event_event_geoCountryIso2_funk,
            event_event_geoCityName_funk_ctx: event_event_geoCityName_funk,
            event_event_venueName_funk_ctx: event_event_venueName_funk,
            event_event_venueType_funk_ctx: event_event_venueType_funk,
            event_event_venueCapacity_funk_ctx: event_event_venueCapacity_funk,
            event_event_venuePostalCode_funk_ctx: event_event_venuePostalCode_funk,
          },
        }}>
        <form onSubmit={handleSubmit}>
          <GeneralInfo />
          <LocationInformation />
          <TypeOfEvent />
          <LineUpInformation />
          <button type='submit'>Create</button>
        </form>
      </CreateFormContext.Provider>
    </div>
  );
};

export default CreateEvent;
