import React, { useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { countriesList } from '../../../components/helpers/countriesList';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Select, Input } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';

const LocationInformation = () => {
  const {
    states: {
      // Location Info:
      event_event_geoCountryIso2_ctx: [event_event_geoCountryIso2],
      event_event_geoCityName_ctx: [event_event_geoCityName],
      event_event_venueName_ctx: [event_event_venueName],
      event_event_venueType_ctx: [event_event_venueType],
      event_event_venueCapacity_ctx: [event_event_venueCapacity],
      event_event_venuePostalCode_ctx: [event_event_venuePostalCode],
    },
    funks: {
      // Location Info:
      event_event_geoCountryIso2_funk_ctx: event_event_geoCountryIso2_funk,
      event_event_geoCityName_funk_ctx: event_event_geoCityName_funk,
      event_event_venueName_funk_ctx: event_event_venueName_funk,
      event_event_venueType_funk_ctx: event_event_venueType_funk,
      event_event_venueCapacity_funk_ctx: event_event_venueCapacity_funk,
      event_event_venuePostalCode_funk_ctx: event_event_venuePostalCode_funk,
    },
  } = useContext(CreateFormContext);
  return (
    <Flex flexDirection='column' align='center' mt='8'>
      <fieldset>
        <Text fontWeight='600' color='#FDF8F2' mt='4'>
          Location Information
        </Text>

        <Box>
          <Text htmlFor='event_geoCountryIso2' fontWeight='600' color='#FDF8F2' mt='4'>
            Country:
            <Select
              name='event_geoCountryIso2'
              id='event_geoCountryIso2'
              value={event_event_geoCountryIso2}
              onChange={e => {
                event_event_geoCountryIso2_funk(e);
              }}>
              {countriesList.length > 0 &&
                countriesList.map(country => (
                  <option key={country.geoCountryIso2} value={country.geoCountryIso2}>
                    {country.countryName}
                  </option>
                ))}
            </Select>
          </Text>
        </Box>

        <Box>
          <Text htmlFor='event_geoCityName' fontWeight='600' color='#FDF8F2' mt='4'>
            City:
            <Input
              type='text'
              name='event_geoCityName'
              id='event_geoCityName'
              value={event_event_geoCityName}
              onChange={e => {
                event_event_geoCityName_funk(e);
              }}
            />
          </Text>
        </Box>

        <Box>
          <Text htmlFor='event_venueName' fontWeight='600' color='#FDF8F2' mt='4'>
            Venue's Name:
            <Input
              type='text'
              name='event_venueName'
              id='event_venueName'
              value={event_event_venueName}
              onChange={e => {
                event_event_venueName_funk(e);
              }}
            />
          </Text>
        </Box>

        <Box>
          <Text htmlFor='event_venuePostalCode' fontWeight='600' color='#FDF8F2' mt='4'>
            Venue's Postal Code:
            <Input
              type='text'
              name='event_venuePostalCode'
              id='event_venuePostalCode'
              value={event_event_venuePostalCode}
              onChange={e => {
                event_event_venuePostalCode_funk(e);
              }}
            />
          </Text>
        </Box>
      </fieldset>
    </Flex>
  );
};

export default LocationInformation;
