import React, { useState, useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { Text, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';

const LineUpInformation = () => {
  const {
    states: {
      event_type_ctx: [event_type_value],
      event_performer_array_ctx: [
        event_performer_array,
        set_Event_performer_array,
      ],
    },
    funks: {
      event_ADD_performer_array_funk_ctx: event_ADD_performer_array_funk,
      handleChange_ctx: handleChange,
    },
  } = useContext(CreateFormContext);

  console.log(event_type_value);

  const festival_type_view_JSX = () => {
    return (
      <Flex flexDirection='column' align='center' mt='8'>
        <fieldset>
          <Text fontWeight='600' color='#FDF8F2' mt='2'>
            Lineup Information
          </Text>
          <Button
            onClick={e => {
              e.preventDefault();
              event_ADD_performer_array_funk();
            }}
          >
            Add Perfomer
          </Button>
          {event_performer_array.length > 0 &&
            event_performer_array.map((performer, index) => (
              <div key={index} className='CreateEvent_inputContainer'>
                <Text
                  htmlFor='event_performer_name'
                  fontWeight='600'
                  color='#FDF8F2'
                  mt='4'
                >
                  Performer's Name:
                  <Input
                    type='text'
                    name='event_performer_name'
                    id='event_performer_name'
                    placeholder={`Input ${index + 1}`}
                    value={performer.value}
                    onChange={e => {
                      handleChange(index, e);
                    }}
                  />
                </Text>
              </div>
            ))}
        </fieldset>
      </Flex>
    );
  };
  const concert_type_view_JSX = () => {
    return (
      <Flex flexDirection='column' align='center' mt='8'>
        <Text
          className='CreateEvent_lineUpInfo'
          fontWeight='600'
          color='#FDF8F2'
          mt='4'
        >
          <legend>Artist Information</legend>
        </Text>
      </Flex>
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
