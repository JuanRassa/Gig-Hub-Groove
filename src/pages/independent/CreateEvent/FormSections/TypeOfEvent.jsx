import React, { useContext } from 'react';
import { CreateFormContext } from '../../../../context/CreateFormContext';

const TypeOfEvent = () => {
  const {
    states: {
      event_type_ctx: [event_type_value, set_Event_type_value],
    },
    funks: { event_type_concert_funk_ctx: event_type_concert_funk, event_type_festival_funk_ctx: event_type_festival_funk },
  } = useContext(CreateFormContext);
  return (
    <fieldset className='CreateEvent_typeOfEvent'>
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
  );
};

export default TypeOfEvent;
