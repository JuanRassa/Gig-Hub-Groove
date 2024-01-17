import React, { useState } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';

import GeneralInfo from './FormSections/GeneralInfo';
import LocationInformation from './FormSections/LocationInformation';
import TypeOfEvent from './FormSections/TypeOfEvent';
import LineUpInformation from './FormSections/LineUpInformation';

const CreateEvent = () => {
  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
  /* *** *** *** *** *** *** States *** *** *** *** *** *** *** ***  */
  // General Info:
  const [event_name, set_Event_name] = useState('');
  const [event_start_date, set_Event_start_date] = useState('');
  const [event_end_date, set_Event_end_date] = useState('');
  const [event_image_url, set_Event_image_url] = useState('');
  const [event_event_description, set_Event_event_description] = useState('');

  // Location Info:
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
  // Type of Event
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
  // LineUp Info:

  // Submit:
  const handleSubmit = e => {
    e.preventDefault();
    alert('NEW');
  };
  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */

  const createNewEvent_body = {
    type: event_type_value || null,
    name: event_name || null,
    geoCountryIso2: '' || null,
    geoCityName: '' || null,
    'start-date': event_start_date || null,
    'end-date': event_end_date || null,
    location: {
      type: '' || null,
      name: '' || null,
      capacity: '' || null,
      postalAdress: '' || null,
    },
    performer: [],
    image: event_image_url || null,
    description: event_event_description || null,
  };

  console.log('Log do Juan: ', createNewEvent_body);

  return (
    <div className='CreateEvent'>
      <h2>Create a new event</h2>
      <CreateFormContext.Provider
        value={{
          states: {
            event_name_ctx: [event_name],
            event_type_ctx: [event_type_value],
            event_start_date_ctx: [event_start_date],
            event_end_date_ctx: [event_end_date],
            event_image_url_ctx: [event_image_url],
            event_event_description_ctx: [event_event_description],
          },
          funks: {
            event_name_funk_ctx: event_name_funk,
            event_type_concert_funk_ctx: event_type_concert_funk,
            event_type_festival_funk_ctx: event_type_festival_funk,
            event_start_date_funk_ctx: event_start_date_funk,
            event_end_date_funk_ctx: event_end_date_funk,
            event_image_url_funk_ctx: event_image_url_funk,
            event_event_description_funk_ctx: event_event_description_funk,
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
