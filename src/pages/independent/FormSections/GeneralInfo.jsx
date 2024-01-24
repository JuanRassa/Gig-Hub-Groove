import React, { useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { Flex, Text, Heading, Box } from '@chakra-ui/layout';
import { Input, Textarea } from '@chakra-ui/react';

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
    <Flex flexDirection='column' align='center' mt='8'>
      <fieldset>
        <Heading size='xl' color='#FDF8F2' mt='2'>
          Creat an event
        </Heading>
        <Text fontWeight='600' color='#FDF8F2' mt='4'>
          General Information
        </Text>
        <Box>
          <Text
            htmlFor='event_name'
            fontSize='14px'
            fontWeight='600'
            color='#FDF8F2'
            mt='4'
          >
            Event's Name:
            <Input
              type='text'
              name='event_name'
              id='event_name'
              value={event_name}
              onChange={e => {
                event_name_funk(e);
              }}
            />
          </Text>
        </Box>

        <Box>
          <div className='CreateEvent_inputContainer'>
            <Text
              htmlFor='event_start-date'
              fontWeight='600'
              color='#FDF8F2'
              mt='4'
            >
              Start Date:
              <Input
                type='date'
                name='event_start-date'
                id='event_start-date'
                value={event_start_date}
                onChange={e => {
                  event_start_date_funk(e);
                }}
              />
            </Text>

            <Text
              htmlFor='event_end-date'
              fontWeight='600'
              color='#FDF8F2'
              mt='4'
            >
              End Date:
              <Input
                type='date'
                name='event_end-date'
                id='event_end-date'
                value={event_end_date}
                onChange={e => {
                  event_end_date_funk(e);
                }}
              />
            </Text>
          </div>
        </Box>

        <Box>
          <Text htmlFor='event_image' fontWeight='600' color='#FDF8F2' mt='4'>
            Image URL:
            <Input
              type='url'
              name='event_image'
              id='event_image'
              value={event_image_url}
              onChange={e => {
                event_image_url_funk(e);
              }}
            />
          </Text>
        </Box>

        <Box>
          <Text
            htmlFor='event_description'
            fontWeight='600'
            color='#FDF8F2'
            mt='4'
          >
            Description:
            <Textarea
              name='event_description'
              id='event_description'
              cols='30'
              rows='10'
              value={event_event_description}
              onChange={e => {
                event_event_description_funk(e);
              }}
            />
          </Text>
        </Box>
      </fieldset>
    </Flex>
  );
};

export default GeneralInfo;
