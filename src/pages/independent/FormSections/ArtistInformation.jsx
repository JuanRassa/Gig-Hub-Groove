import React, { useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { countriesList } from '../../../components/helpers/countriesList';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Select, Input } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';

function ArtistInformation() {
  const {
    states: {
      // Artist Info:
      event_event_performerName_ctx: [event_event_performerName],
      event_event_performerGenre_ctx: [event_event_performerGenre],
      event_event_performerImage_ctx: [event_event_performerImage],
      event_event_performergeoCountryIso2_ctx: [
        event_event_performergeoCountryIso2,
      ],
      event_event_performerURL_ctx: [event_evet_performerURL],
    },
    funks: {
      // Artist Info:
      event_event_performerName_funk_ctx: event_event_performerName_funk_ctx,
      event_event_performerGenre_funk_ctx: event_event_performerGenre_funk_ctx,
      event_event_performerImage_funk_ctx: event_event_performerImage_funk_ctx,
      event_event_performergeoCountryIso2_funk_ctx:
        event_event_performergeoCountryIso2_funk_ctx,
      event_event_performerURL_funk_ctx: event_event_performerURL_funk_ctx,
    },
  } = useContext(CreateFormContext);
  return (
    <Flex flexDirection='column' align='center' mt='8'>
      <fieldset>
        <Text fontWeight='600' color='#FDF8F2' mt='4'>
          Artist Information
        </Text>

        <Box>
          <Text
            htmlFor='event_performerName'
            fontWeight='600'
            color='#FDF8F2'
            mt='4'
          >
            Name:
            <Input
              type='text'
              name='event_performerName'
              id='event_performerName'
              value={event_event_performerName}
              onChange={e => {
                event_event_performerName_funk_(e);
              }}
            />
          </Text>
        </Box>

        <Box>
          <Text
            htmlFor='event_performergeoCountryIso2'
            fontWeight='600'
            color='#FDF8F2'
            mt='4'
          >
            Nationality:
            <Select
              name='event_performergeoCountryIso2'
              id='event_performergeoCountryIso2'
              value={event_event_performergeoCountryIso2}
              onChange={e => {
                event_event_performergeoCountryIso2_funk(e);
              }}
            >
              {countriesList.length > 0 &&
                countriesList.map(country => (
                  <option
                    key={country.geoCountryIso2}
                    value={country.geoCountryIso2}
                  >
                    {country.countryName}
                  </option>
                ))}
            </Select>
          </Text>
        </Box>

        <Box>
          <Text
            htmlFor='event_performerImage'
            fontWeight='600'
            color='#FDF8F2'
            mt='4'
          >
            Image URL:
            <Input
              type='text'
              name='event_performerImage'
              id='event_performerImage'
              value={event_event_performerImage}
              onChange={e => {
                event_event_performerImage_funk(e);
              }}
            />
          </Text>
        </Box>

        <Box>
          <Text
            htmlFor='event_performerGenre'
            fontWeight='600'
            color='#FDF8F2'
            mt='4'
          >
            Genre:
            <Input
              type='text'
              name='event_performerGenre'
              id='event_performerGenre'
              value={event_event_performerGenre}
              onChange={e => {
                event_event_performerGenre_funk(e);
              }}
            />
          </Text>
        </Box>

        <Box>
          <Text
            htmlFor='event_performerURL'
            fontWeight='600'
            color='#FDF8F2'
            mt='4'
          >
            URL:
            <Input
              type='text'
              name='event_performerURL'
              id='event_performerURL'
              value={event_event_performerURL}
              onChange={e => {
                event_event_performerURL_funk(e);
              }}
            />
          </Text>
        </Box>
      </fieldset>
    </Flex>
  );
}

export default ArtistInformation;
