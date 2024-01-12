import React from 'react';

const CreateEvent = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('NEW');
  };
  return (
    <div>
      <h2>Create a new event</h2>
      <fieldset>
        <legend>General Information</legend>
        <div>
          <h3>Type of Event</h3>
          <label htmlFor='event_festival'>
            Festival
            <input type='radio' name='event_type' id='event_festival' value='festival' />
          </label>
          <label htmlFor='event_concert'>
            Concert
            <input type='radio' name='event_type' id='event_concert' value='concert' />
          </label>
          <label htmlFor='event_name'>
            <input type='text' name='event_name' id='event_name' />
          </label>
          <label htmlFor='event_geoCountryIso2'>
            <input type='text' name='event_' id='event_' />
          </label>
          <label htmlFor='event_geoCityName'>
            <input type='text' name='event_' id='event_' />
          </label>
        </div>
      </fieldset>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default CreateEvent;
