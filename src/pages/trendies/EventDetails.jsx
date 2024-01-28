import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Flex, Heading, Text, Divider, Button, Box, Image } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import axios from 'axios';
import './styles.css';
import pinMap from '../../assets/cymaticSpin5-removebg.png';

let API_KEY = import.meta.env.VITE_API_KEY;
let GM_KEY = import.meta.env.GM_KEY;

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    axios
      .get(`https://www.jambase.com/jb-api/v1/events/id/${eventId}?apikey=${API_KEY}`)
      .then(response => {
        // console.log('API Response:', response.data);
        const eventFromApi = response.data.event;
        setEvent(eventFromApi);
      })
      .catch(error => {
        console.log(error);
      });
  }, [eventId]);

  useEffect(() => {
    if (event) {
      // Initialize and add the map
      let map;

      async function initMap() {
        // The location of Uluru
        // const position = { lat: -25.344, lng: 131.031 };
        // const position = { lat: 26.0537, lng: -80.2095 };
        const position = { lat: event?.location?.geo?.latitude, lng: event?.location?.geo?.longitude };
        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary('maps');
        const { AdvancedMarkerView } = await google.maps.importLibrary('marker');

        // The map, centered at Uluru
        map = new Map(document.getElementById('map'), {
          zoom: 4,
          center: position,
          mapId: 'DEMO_MAP_ID',
        });

        const icon = {
          url: pinMap, // url
          scaledSize: new google.maps.Size(50, 50), // scaled size
        };
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          map: map,
          position: position,
          title: 'Ágora Event',
          icon: icon,
        });
      }

      initMap();
    }
  }, [event]);

  // console.log('Event:', event);

  return (
    <Flex flexDirection='column' align='center' mt='8'>
      <Helmet>
        <script>{`
        (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = 'https://maps.googleapis.com/maps/api/js?' + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
        ({ key: ${GM_KEY}, v: "beta" });
        `}</script>
      </Helmet>
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
                {event['@type']}
              </Text>

              <Text fontWeight='600' color='#FDF8F2' mt='4'>
                Start Date:
              </Text>
              <Text color='#FDF8F2'>
                <strong>{event.startDate}</strong>
              </Text>
              <Text fontWeight='600' color='#FDF8F2' mt='4'>
                End Date:
              </Text>
              <Text color='#FDF8F2'>
                <strong>{event.endDate}</strong>
              </Text>

              <Text fontWeight='600' color='#FDF8F2' paddingTop='20px'>
                Location Address:
              </Text>
              <Text fontSize='md' color='#FDF8F2'>
                {event.location && event.location.address && event.location.address.addressLocality}
              </Text>
              <Text fontSize='md' color='#FDF8F2'>
                {event.location && event.location.address && event.location.address.addressCountry.name} -{' '}
                {event.location && event.location.address && event.location.address.addressCountry.identifier}
              </Text>

              <Text fontSize='md' color='#FDF8F2'>
                {event.location && event.location.address && event.location.address.streetAddress}
              </Text>
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

                    return filteredGenres.length > 0 ? filteredGenres.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ') : '';
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
            {' '}
            {event.offers && Array.isArray(event.offers) && event.offers.length > 0 && (
              <a className='buyTicketsBtn' href={event.offers[0].url} target='_blank'>
                Buy tickets
              </a>
            )}
            {event.offers.length === 0 && 'Sold Out!'}
          </Button>

          <Divider my='4' />

          <div id='map'></div>
        </Box>
      ) : (
        <Spinner size='xl' color='#FDF8F2' />
      )}
    </Flex>
  );
}

export default EventDetails;
