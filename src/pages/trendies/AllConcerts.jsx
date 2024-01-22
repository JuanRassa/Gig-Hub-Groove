import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ChakraCard from '../../components/ChakraCard';
import Filters from '../../components/Filters';
import { Box, Flex } from '@chakra-ui/react';
import { Text, Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

let API_KEY = import.meta.env.VITE_API_KEY;

function AllConcerts() {
  const [showEvents, setShowEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    geoCountryIso2: '',
    artistName: '',
    eventType: '',
    eventDateFrom: '',
    eventDateTo: '',
    genreSlug: '',
  });

  const [currentPage, setCurrentPage] = useState(1);

  let API_URL = `https://www.jambase.com/jb-api/v1/events?apikey=${API_KEY}&geoCountryIso2=${filters.geoCountryIso2}&eventDateFrom=${filters.eventDateFrom}&eventDateTo=${filters.eventDateTo}&genreSlug=${filters.genreSlug}&eventType=${filters.eventType}&artistName=${filters.artistName}&page=${currentPage}&perPage=12`;

  const getEvents = () => {
    setLoading(true);

    axios
      .get(API_URL)
      .then(response => {
        if (response.data && Array.isArray(response.data.events)) {
          // const eventsWithWishlistInfo = response.data.events.map(event => ({
          //   ...event,
          //   isInWishlist: isEventInWishList(event.id),
          // }));
          // console.log(response.data.events);
          // setShowEvents(eventsWithWishlistInfo);
          setShowEvents(response.data.events);
        } else {
          console.error(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePrevClick = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  useEffect(() => {
    getEvents();
  }, [currentPage]);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Box bg='#292A2A'>
      <Text
        fontSize='28px'
        fontWeight='600'
        align='center'
        color='#FDF8F2'
        paddingBottom='20px'
        paddingTop='20px'
      >
        Trendy Concerts
      </Text>

      <Accordion allowToggle margin='10px 30px 10px 30px'>
        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <Text fontSize='18px' fontWeight='600' color='#FDF8F2'>
                Filters
              </Text>
            </Box>
            <AccordionIcon color='#FDF8F2' />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Filters
              showEvents={showEvents}
              setShowEvents={setShowEvents}
              filters={filters}
              setFilters={setFilters}
              getEvents={getEvents}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex
        flexWrap='wrap'
        justifyContent='space-evenly'
        gap='16px'
        paddingTop='30px'
      >
        {loading && <Spinner size='xl' color='#FDF8F2' />}
        {!loading &&
          showEvents.map(event => (
            <ChakraCard key={event.identifier} events={event} />
          ))}
      </Flex>

      <Flex
        flexDirection='row'
        justifyContent='center'
        gap='15px'
        alignItems='center'
        paddingTop='50px'
        paddingBottom='50px'
      >
        {currentPage > 1 && (
          <Button
            bgColor='#A6348E'
            variant='outline'
            _hover={{
              bgColor: '#292A2A',
            }}
            color='#FDF8F2'
            onClick={handlePrevClick}
          >
            Return
          </Button>
        )}
        <Text color='#FDF8F2' fontSize='18px' fontWeight='600'>
          Page {currentPage}
        </Text>
        <Button
          bgColor='#A6348E'
          variant='outline'
          _hover={{
            bgColor: '#292A2A',
          }}
          onClick={handleNextClick}
          color='#FDF8F2'
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default AllConcerts;
