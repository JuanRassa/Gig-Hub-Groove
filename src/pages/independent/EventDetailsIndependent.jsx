import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Flex, Heading, Text, Divider, Button, Box, Image } from '@chakra-ui/react';
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
    <Flex flexDirection='column' align='center' mt='8' pb='20'>
      {event ? (
        <Box key={event.identifier} w='80%' maxW='1200px'>
          <Flex>
            <Image className='eventDetail_img' src={event.image} alt={event.name} maxW='50%' mr='4' />

            <Box>
              <Heading size='xl' color='#FDF8F2'>
                {event.name}
              </Heading>

              <Text fontSize='lg' color='#FDF8F2'>
                {event.location && event.location.name}
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
                <strong>{event['start-date']}</strong>
              </Text>
              <Text fontWeight='600' color='#FDF8F2' mt='4'>
                End Date:
              </Text>
              <Text color='#FDF8F2'>
                <strong>{event['end-date']}</strong>
              </Text>

              <Text fontWeight='600' color='#FDF8F2' paddingTop='20px'>
                Location:
              </Text>
              <Text fontSize='md' color='#FDF8F2'>
                {event.geoCityName}, {event.geoCountryIso2} - {event.location && event.location.postalAdress && event.location.postalAdress}
              </Text>

              <Text fontSize='md' color='#FDF8F2'></Text>
            </Box>
          </Flex>

          <Divider my='4' />

          <Box>
            <Text fontWeight='600' color='#FDF8F2'>
              Genres:
            </Text>
            {(event['@type'] === 'Concert' || event['@type'] === 'Festival') && (
              <Text color='#FDF8F2'>
                {event.performer &&
                  Array.isArray(event.performer) &&
                  (() => {
                    const uniqueGenres = new Set();
                    event.performer.forEach(performer => {
                      if (performer.genre && Array.isArray(performer.genre)) {
                        performer.genre.forEach(genre => {
                          if (typeof genre === 'string' && genre.trim() !== '') {
                            uniqueGenres.add(genre.trim());
                          }
                        });
                      } else if (typeof performer.genre === 'string' && performer.genre.trim() !== '') {
                        uniqueGenres.add(performer.genre.trim());
                      }
                    });

                    const filteredGenres = Array.from(uniqueGenres);

                    return filteredGenres.length > 0 ? filteredGenres.join(',') : '';
                  })()}
              </Text>
            )}

            <Box>
              <Text fontWeight='600' color='#FDF8F2' mt='4'>
                Performers:
              </Text>
              <Flex flexWrap='wrap'>
                {event.performer &&
                  Array.isArray(event.performer) &&
                  event.performer.map((performer, index) => (
                    <Box key={index} width={['50%', '50%']} mb='2' flexShrink={0}>
                      <Text color='#FDF8F2'>{performer.name}</Text>
                    </Box>
                  ))}
              </Flex>
            </Box>
          </Box>

          <Button
            mt='4'
            bgColor='#A6348E'
            color='#FDF8F2'
            _hover={{
              bgColor: '#FDF8F2',
              color: '#292A2A',
            }}>
            <a href='https://volleybomb.netlify.app/' target='_blank'>
              Have some fun!
            </a>
          </Button>
        </Box>
      ) : (
        <Spinner size='xl' color='#FDF8F2' />
      )}
    </Flex>
  );
}

export default EventDetailsIndependent;
