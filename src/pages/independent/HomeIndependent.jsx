import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ChakraCard from '../../components/ChakraCard';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Spinner } from '@chakra-ui/spinner';
import { Heading } from '@chakra-ui/layout';
import './styles.css';
import { LoginContext } from '../../context/LoginContext';

const API_URL = 'https://gig-hub-independent.adaptable.app/events';

const HomeIndependent = () => {
  const [allIndependent, setAllIndependent] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    isLoggedCtx: [isLogged],
    triggerIndependentGetCtx: [triggerIndependentGet, setTriggerIndependentGet],
  } = useContext(LoginContext);

  const [showIndependent, setShowIndependent] = useState([]);

  // console.log(showIndependent);

  const getAllIndependent = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      // const eventsWithWishlistInfo = data.map(event => ({
      //   ...event,
      //   isInWishlist: isEventInWishList(event.id),
      // }));
      setAllIndependent(data);
      setShowIndependent(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllIndependent();
  }, []);
  useEffect(() => {
    if (triggerIndependentGet) {
      setShowIndependent([]);
      setTriggerIndependentGet(false);
      getAllIndependent();
    }
  }, [triggerIndependentGet]);

  return (
    <div className='HomeIndependent'>
      <Heading
        size='xl'
        fontWeight='600'
        align='center'
        color='#FDF8F2'
        paddingBottom='20px'
        mt='40px'
      >
        Independent Concerts
      </Heading>

      <Text color='#FDF8F2' m='20px 150px 20px 150px' align='center'>
        Discover the vibrant world of our Independent Showcase page, where you
        have the opportunity to discover upcoming concerts and festivals
        showcasing the talents of independent artists. You can actively
        contribute to this dynamic community by showcasing and promoting your
        own concerts. Simply <strong>register</strong> on our page and join us
        in celebrating the diversity of independent music.
      </Text>

      <SearchBar
        allIndependent={allIndependent}
        setShowIndependent={setShowIndependent}
      />

      <Flex justifyContent='center'>
        <Button
          className='createEvent'
          as={Link}
          // bgColor='#AFD74B'
          to={isLogged ? '/create-event' : '/login'}
          onClick={() => {
            window.sessionStorage.setItem('triedToCreateOrEdit', 'yes');
          }}
          _hover={{
            bgColor: '#292A2A',
            color: '#FDF8F2',
            border: '1px solid #FDF8F2',
          }}
        >
          Create new events
        </Button>
      </Flex>

      <Flex
        flexWrap='wrap'
        justifyContent='space-evenly'
        gap='16px'
        paddingTop='30px'
      >
        {loading ? (
          <Spinner size='xl' color='#FDF8F2' />
        ) : (
          <div className='AllIndependent__container'>
            {showIndependent.map(event => {
              return (
                <ChakraCard
                  key={event.id}
                  events={event}
                  defaultColor='#FDF8F2'
                  hoverColor='#AFD74B'
                />
              );
            })}
          </div>
        )}
      </Flex>
    </div>
  );
};

export default HomeIndependent;
