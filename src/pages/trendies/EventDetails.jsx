import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
import axios from 'axios';

let API_KEY = import.meta.env.VITE_API_KEY;

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.jambase.com/jb-api/v1/events/id/${eventId}?apikey=${API_KEY}`
      )
      .then(response => {
        // console.log('API Response:', response.data);
        const eventFromApi = response.data.event;
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
                {event.location && event.location.name}
              </Text>

              <Text fontWeight='600' color='#FDF8F2' mt='4'>
                Event Type:
              </Text>
              <Text fontSize='14px' color='#FDF8F2'>
                {event['@type']}
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
                  event.location.address.addressCountry.name}{' '}
                -{' '}
                {event.location &&
                  event.location.address &&
                  event.location.address.addressCountry.identifier}
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
            <Text fontWeight='600' color='#FDF8F2'>
              Genres:
            </Text>
            {(event['@type'] === 'Concert' ||
              event['@type'] === 'Festival') && (
              <Text color='#FDF8F2'>
                {event.performer &&
                  Array.isArray(event.performer) &&
                  (() => {
                    const uniqueGenres = new Set();
                    event.performer.forEach(performer => {
                      if (performer.genre && Array.isArray(performer.genre)) {
                        performer.genre.forEach(genre => {
                          if (
                            typeof genre === 'string' &&
                            genre.trim() !== ''
                          ) {
                            uniqueGenres.add(genre.trim());
                          }
                        });
                      } else if (
                        typeof performer.genre === 'string' &&
                        performer.genre.trim() !== ''
                      ) {
                        uniqueGenres.add(performer.genre.trim());
                      }
                    });

                    const filteredGenres = Array.from(uniqueGenres);

                    return filteredGenres.length > 0
                      ? filteredGenres
                          .map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(', ')
                      : '';
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
                    <Box
                      key={index}
                      width={['50%', '50%']}
                      mb='2'
                      flexShrink={0}
                    >
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
            }}
          >
            {' '}
            Buy tickets
            {event.offers &&
              Array.isArray(event.offers) &&
              event.offers.map((offers, index) => (
                <Link key={index} to={offers.url}></Link>
              ))}
          </Button>

          <Divider my='4' />

          <iframe
            width='600'
            height='450'
            style={{ border: 0 }}
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            src='https://www.google.com/maps/embed/v1/place?key=
    &q=Space+Needle,Seattle+WA'
          ></iframe>
        </Box>
      ) : (
        <Spinner size='xl' color='#FDF8F2' />
      )}
    </Flex>
  );
}

export default EventDetails;
