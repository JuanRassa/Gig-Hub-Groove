import React, { useState, useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';

const LineUpInformation = () => {
  const {
    states: {
      event_type_ctx: [event_type_value],
      event_performer_array_ctx: [event_performer_array, set_Event_performer_array],
    },
    funks: { event_ADD_performer_array_funk_ctx: event_ADD_performer_array_funk, handleChange_ctx: handleChange },
  } = useContext(CreateFormContext);

  console.log(event_type_value);

  const festival_type_view_JSX = () => {
    return (
      <fieldset className='CreateEvent_lineUpInfo'>
        <legend>Lineup Information</legend>
        <button
          onClick={e => {
            e.preventDefault();
            event_ADD_performer_array_funk();
          }}>
          Add Perfomer
        </button>
        {event_performer_array.length > 0 &&
          event_performer_array.map((performer, index) => (
            <div key={index} className='CreateEvent_inputContainer'>
              <label htmlFor='event_performer_name'>
                Performer's Name:
                <input
                  type='text'
                  name='event_performer_name'
                  id='event_performer_name'
                  placeholder={`Input ${index + 1}`}
                  value={performer.value}
                  onChange={e => {
                    handleChange(index, e);
                  }}
                />
              </label>
            </div>
          ))}
      </fieldset>
    );
  };
  const concert_type_view_JSX = () => {
    return (
      <fieldset className='CreateEvent_lineUpInfo'>
        <legend>Artist Information</legend>
      </fieldset>
    );
  };

  return (
    <>
      {event_type_value === 'festival' && festival_type_view_JSX()}
      {event_type_value === 'concert' && concert_type_view_JSX()}
    </>
  );
};

export default LineUpInformation;
