import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { LoginContext } from '../../../context/LoginContext';

import GeneralInfo from './../FormSections/GeneralInfo';
import LocationInformation from './../FormSections/LocationInformation';
import TypeOfEvent from './../FormSections/TypeOfEvent';
import LineUpInformation from './../FormSections/LineUpInformation';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';

const CreateEvent = () => {
  const API_URL = `https://gig-hub-independent.adaptable.app/events`;
  const navigate = useNavigate();
  const {
    isPopupOpenCtx: [, setIsPopupOpen],
    popupMessageCtx: [, setPopupMessage],
  } = useContext(LoginContext);
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
  // Performers Info:
  const [event_performer_array, set_Event_performer_array] = useState([]);

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
  // Performers Info:
  const event_ADD_performer_array_funk = () => {
    set_Event_performer_array(prev => [...prev, { name: '' }]);
  };
  const handleChange = (index, event) => {
    const newInputFields = [...event_performer_array];
    const { name, value } = event.target;
    if (name === 'name') {
      newInputFields[index][name] = value;
    } else {
      newInputFields[index][name] = [value];
    }
    set_Event_performer_array(newInputFields);
  };

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
    performer: event_performer_array,
    image: event_image_url || null,
    description: event_event_description || null,
  };
  const createNewEvent_POST = async () => {
    try {
      const response = await axios.post(API_URL, createNewEvent_body);
      if (response.status === 201) {
        // alert('Event Created succesfuly');
        setIsPopupOpen(true);
        setPopupMessage('The event was created succesfully.');
        setTimeout(() => {
          navigate('/independent');
          return setIsPopupOpen(false);
        }, 1800);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log('Log do Juan: ', createNewEvent_body);

  return (
    <div className='CreateEvent'>
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
            // LineUp Info:
            event_performer_array_ctx: [event_performer_array, set_Event_performer_array],
          },
          funks: {
            // Performers Info:
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
            // Performers Info:
            event_ADD_performer_array_funk_ctx: event_ADD_performer_array_funk,
            handleChange_ctx: handleChange,
          },
        }}>
        <form onSubmit={handleSubmit}>
          <GeneralInfo />
          <LocationInformation />
          <TypeOfEvent />
          <LineUpInformation />
          <Flex flexDirection='column' align='center' mt='8' paddingBottom='30px'>
            <Button
              className='submitEditBtn'
              type='submit'
              bgColor='#AFD74B'
              variant='outline'
              _hover={{
                bgColor: '#292A2A',
                color: '#FDF8F2',
              }}>
              Create
            </Button>
          </Flex>
        </form>
      </CreateFormContext.Provider>
    </div>
  );
};

export default CreateEvent;
