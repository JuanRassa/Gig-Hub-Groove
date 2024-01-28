import React from 'react';
import { Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { List, ListItem, UnorderedList } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import '../index.css';

function AboutPage() {
  return (
    <Flex
      flexDirection='column'
      align='left'
      m='30px 350px 5px 350px'
      color='#FDF8F2'
    >
      <Heading size='xl' mt='20px'>
        About
      </Heading>

      <Text mt='30px' size='14px'>
        Welcome to Ágora, the ultimate event hub designed to meet your diverse
        entertainment needs. Our platform helps users to:
      </Text>

      <List mt='10px' size='14px'>
        <UnorderedList>
          <ListItem>Explore and discover exciting events around you.</ListItem>
          <ListItem>Showcase and promote your concerts online.</ListItem>
          <ListItem>Uncover new and emerging artists or bands.</ListItem>
        </UnorderedList>
      </List>

      <Text mt='10px' size='14px'>
        At Ágora, we've curated a unique experience with two distinct sections:
      </Text>

      <List mt='10px'>
        <UnorderedList>
          <ListItem>
            <strong>Trendy Concerts:</strong> Dive into the world of grand
            performances by globally renowned artists. Our Trendy Concerts
            feature big events from celebrated artists around the world, brought
            to you through the Jambase API.
          </ListItem>
          <ListItem mt='10px'>
            <strong>Independent Showcase:</strong> Immerse yourself in the realm
            of independent music on our Independent Showcase page. Here, users
            can explore upcoming concerts and festivals featuring talented
            independent artists, all curated through our mock backend.
          </ListItem>
        </UnorderedList>
      </List>

      <Text mt='10px' size='14px'>
        Join us at Ágora and embark on a journey of musical discovery, where
        every event is an opportunity to create unforgettable memories.
      </Text>

      <Divider my='4' />

      <Heading size='md' mb='10px'>
        Created by:
      </Heading>
      <Flex
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='space-around'
        alignItems='center'
      >
        <Text mt='5px' size='22px'>
          Juan Rassa
        </Text>
        <Text mt='5px' size='22px'>
          Yane Ully
        </Text>
      </Flex>
      <Flex
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='space-around'
        alignItems='center'
      >
        <Button
          mt='5px'
          mb='50px'
          bgColor='#F76320'
          color='#FDF8F2'
          _hover={{
            bgColor: '#FDF8F2',
            color: '#292A2A',
          }}
        >
          <a href='https://github.com/JuanRassa' target='_blank'>
            GitHub
          </a>
        </Button>
        <Button
          mt='5px'
          mb='50px'
          bgColor='#F76320'
          color='#FDF8F2'
          _hover={{
            bgColor: '#FDF8F2',
            color: '#292A2A',
          }}
        >
          <a href='https://github.com/YaneUlly' target='_blank'>
            GitHub
          </a>
        </Button>
      </Flex>
    </Flex>
  );
}

export default AboutPage;
