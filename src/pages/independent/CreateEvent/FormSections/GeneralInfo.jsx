import React, { useContext } from 'react';
import { CreateFormContext } from '../../../../context/CreateFormContext';

const GeneralInfo = () => {
  const {
    states: {
      event_name_ctx: [event_name],
      event_start_date_ctx: [event_start_date],
      event_end_date_ctx: [event_end_date],
      event_image_url_ctx: [event_image_url],
      event_event_description_ctx: [event_event_description],
    },
    funks: {
      event_name_funk_ctx: event_name_funk,
      event_start_date_funk_ctx: event_start_date_funk,
      event_end_date_funk_ctx: event_end_date_funk,
      event_image_url_funk_ctx: event_image_url_funk,
      event_event_description_funk_ctx: event_event_description_funk,
    },
  } = useContext(CreateFormContext);
  return (
    <fieldset className='CreateEvent_generalInfo'>
      <legend>General Information</legend>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_name'>
          Event's Name:
          <input
            type='text'
            name='event_name'
            id='event_name'
            value={event_name}
            onChange={e => {
              event_name_funk(e);
            }}
          />
        </label>
      </div>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_start-date'>
          Start Date:
          <input
            type='date'
            name='event_start-date'
            id='event_start-date'
            value={event_start_date}
            onChange={e => {
              event_start_date_funk(e);
            }}
          />
        </label>
        <label htmlFor='event_end-date'>
          End Date:
          <input
            type='date'
            name='event_end-date'
            id='event_end-date'
            value={event_end_date}
            onChange={e => {
              event_end_date_funk(e);
            }}
          />
        </label>
      </div>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_image'>
          Image URL:
          <input
            type='url'
            name='event_image'
            id='event_image'
            value={event_image_url}
            onChange={e => {
              event_image_url_funk(e);
            }}
          />
        </label>
      </div>
      <div className='CreateEvent_inputContainer'>
        <label htmlFor='event_description'>
          Description:
          <textarea
            name='event_description'
            id='event_description'
            cols='30'
            rows='10'
            value={event_event_description}
            onChange={e => {
              event_event_description_funk(e);
            }}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default GeneralInfo;
