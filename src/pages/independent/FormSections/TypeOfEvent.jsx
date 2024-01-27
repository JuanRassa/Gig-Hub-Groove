import React, { useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { Flex, Text } from '@chakra-ui/layout';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

const TypeOfEvent = () => {
  const {
    states: {
      event_type_ctx: [event_type_value, set_Event_type_value],
      event_performer_array_ctx: [event_performer_array],
    },
    funks: {
      event_type_concert_funk_ctx: event_type_concert_funk,
      event_type_festival_funk_ctx: event_type_festival_funk,
      event_ADD_performer_array_funk_ctx: event_ADD_performer_array_funk,
    },
  } = useContext(CreateFormContext);
  return (
    <Flex flexDirection='column' align='center' mt='8'>
      <fieldset>
        <Text fontWeight='600' color='#FDF8F2' mt='2' textAlign='center'>
          Type of Event
        </Text>

        <RadioGroup>
          <Stack spacing={4} direction='row'>
            <Radio
              type='radio'
              name='event_type_concert'
              id='event_concert'
              checked={event_type_value === 'concert' ? true : false}
              value='concert'
              onChange={e => {
                event_type_concert_funk(e);
                if (event_performer_array.length === 0) event_ADD_performer_array_funk();
              }}>
              <Text htmlFor='event_concert' fontWeight='600' color='#FDF8F2'>
                Concert
              </Text>
            </Radio>

            <Radio
              type='radio'
              name='event_type_concert'
              id='event_festival'
              value='festival'
              checked={event_type_value === 'festival'}
              onChange={e => {
                event_type_festival_funk(e);
                if (event_performer_array.length === 0) event_ADD_performer_array_funk();
              }}>
              <Text htmlFor='event_festival' fontWeight='600' color='#FDF8F2'>
                Festival
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </fieldset>
    </Flex>
  );
};

export default TypeOfEvent;
