import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Flex,
  Heading,
  Text,
  Divider,
  Button,
  Box,
  Image,
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

function EventDetailsIndependent() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`https://gig-hub-independent.adaptable.app/events/?id=${eventId}`)
      .then(response => {
        // console.log('API Response:', response.data);
        const eventFromApi = response.data[0];
        // console.log('Event from API:', eventFromApi);
        setEvent(eventFromApi);
      })
      .catch(error => {
        console.log(error);
      });
  }, [eventId]);

  // console.log('Event:', event);

  return (
    <Flex flexDirection='column' align='center' mt='8'>
      {event ? (
        <Box key={event.identifier} w='80%' maxW='1200px'>
          <Flex>
            <Image src={event.image} alt={event.name} maxW='50%' mr='4' />

            <Box>
              <Heading size='xl' color='#FDF8F2'>
                {event.name}
              </Heading>

              <Text fontSize='lg' color='#FDF8F2'>
                {event.geoCityName}, {event.geoCountryIso2}
              </Text>

              <Text fontWeight='600' color='#FDF8F2' mt='4'>
                Event Type:
              </Text>
              <Text fontSize='14px' color='#FDF8F2'>
                {event.type}
              </Text>

              <Text fontWeight='600' color='#FDF8F2' mt='4'>
                Start Date:
              </Text>
              <Text color='#FDF8F2'>
                <strong>{event.startDate}</strong>
              </Text>

              <Text fontWeight='600' color='#FDF8F2' paddingTop='20px'>
                Location Address:
              </Text>
              <Text fontSize='md' color='#FDF8F2'>
                {event.location &&
                  event.location.address &&
                  event.location.address.addressLocality}
              </Text>

              <Text fontSize='md' color='#FDF8F2'>
                {event.location &&
                  event.location.address &&
                  event.location.address.streetAddress}
              </Text>
            </Box>
          </Flex>

          <Divider my='4' />

          <Box>
            <Text fontWeight='600' color='#FDF8F2' mt='4'>
              Performers:
            </Text>
            <Text color='#FDF8F2'>
              {event.performer &&
                Array.isArray(event.performer) &&
                event.performer
                  .slice(0, 10)
                  .map(performer => performer.name)
                  .join(', ')}{' '}
              and much more!
            </Text>
          </Box>

          <Button
            mt='4'
            bgColor='#A6348E'
            color='#FDF8F2'
            _hover={{
              bgColor: '#FDF8F2',
              color: '#292A2A',
            }}
          >
            Buy tickets
          </Button>
        </Box>
      ) : (
        <Spinner size='xl' color='#FDF8F2' />
      )}
    </Flex>
  );
}

export default EventDetailsIndependent;
