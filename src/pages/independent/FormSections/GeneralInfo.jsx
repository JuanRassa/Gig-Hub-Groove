import React, { useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { Flex, Text, Heading, Box } from '@chakra-ui/layout';
import { Input, Textarea } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

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
    <Flex flexDirection='column' align='center' mt=''>
      <fieldset>
        <Heading size='xl' color='#FDF8F2' mt='2'>
          Creat an event
        </Heading>

        <Accordion allowToggle margin='30px 0px 30px 0px'>
          <AccordionItem>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontSize='18px' fontWeight='600' color='#FDF8F2'>
                  General Information
                </Text>
              </Box>
              <AccordionIcon color='#FDF8F2' />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <FormControl isRequired>
                <Box>
                  <FormLabel htmlFor='event_name' fontSize='14px' fontWeight='600' color='#FDF8F2' mt='4'>
                    Event's Name:
                  </FormLabel>
                  <Input
                    color='#FDF8F2'
                    type='text'
                    name='event_name'
                    id='event_name'
                    value={event_name}
                    onChange={e => {
                      event_name_funk(e);
                    }}
                  />
                </Box>
              </FormControl>

              <FormControl isRequired>
                <Box>
                  <FormLabel htmlFor='event_start-date' fontWeight='600' color='#FDF8F2' mt='4'>
                    Start Date:
                  </FormLabel>
                  <Input
                    color='#FDF8F2'
                    type='date'
                    name='event_start-date'
                    id='event_start-date'
                    value={event_start_date}
                    onChange={e => {
                      event_start_date_funk(e);
                    }}
                  />

                  <FormLabel htmlFor='event_end-date' fontWeight='600' color='#FDF8F2' mt='4'>
                    End Date:
                  </FormLabel>
                  <Input
                    color='#FDF8F2'
                    type='date'
                    name='event_end-date'
                    id='event_end-date'
                    value={event_end_date}
                    onChange={e => {
                      event_end_date_funk(e);
                    }}
                  />
                </Box>
              </FormControl>

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
                <Text htmlFor='event_description' fontWeight='600' color='#FDF8F2' mt='4'>
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </fieldset>
    </Flex>
  );
};

export default GeneralInfo;
