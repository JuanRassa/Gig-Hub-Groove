import React, { useState, useContext } from 'react';
import { CreateFormContext } from '../../../context/CreateFormContext';
import { Text, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/react';

const LineUpInformation = () => {
  const {
    states: {
      event_type_ctx: [event_type_value],
      event_performer_array_ctx: [event_performer_array, set_Event_performer_array],
    },
    funks: { event_ADD_performer_array_funk_ctx: event_ADD_performer_array_funk, handleChange_ctx: handleChange },
  } = useContext(CreateFormContext);

  // console.log(event_type_value);

  const festival_type_view_JSX = () => {
    return (
      <Flex flexDirection='column' align='center' mt='8' gap='8'>
        <fieldset>
          <Text fontWeight='600' color='#FDF8F2' mt='2'>
            Lineup Information
          </Text>
          {event_performer_array.length > 0 &&
            event_performer_array.map((performer, index) => (
              <div key={index} className='CreateEvent_inputContainer'>
                <Text htmlFor='event_performer_name' fontWeight='600' color='#FDF8F2' mt='4'>
                  Performer's Name:
                  <Input
                    type='text'
                    required
                    // name='event_performer_name'
                    // id='event_performer_name'
                    name={`name`}
                    id={`event_performer_name${index}`}
                    placeholder={`Performer Nº ${index + 1}`}
                    value={performer.name}
                    onChange={e => {
                      handleChange(index, e);
                    }}
                  />
                </Text>
                <Text htmlFor={`event_performer_genre_${index}`} fontWeight='600' color='#FDF8F2' mt='4'>
                  Genre:
                  <Select
                    name='genre'
                    id={`genre${index}`}
                    value={performer.genre}
                    defaultValue=''
                    required
                    onChange={e => {
                      handleChange(index, e);
                    }}>
                    <option disabled value=''>
                      Choose a genre
                    </option>
                    <option value='bluegrass'>Bluegrass</option>
                    <option value='blues'>Blues</option>
                    <option value='christian'>Christian</option>
                    <option value='classical'>Classical</option>
                    <option value='country-music'>Country Music</option>
                    <option value='edm'>EDM</option>
                    <option value='folk'>Folk</option>
                    <option value='hip-hop-rap'>Hip Hop - Rap</option>
                    <option value='indie'>Indie</option>
                    <option value='jamband'>Jamband</option>
                    <option value='jazz'>Jazz</option>
                    <option value='latin'>Latin</option>
                    <option value='metal'>Metal</option>
                    <option value='pop'>Pop</option>
                    <option value='punk'>Punk</option>
                    <option value='reggae'>Reggae</option>
                    <option value='rhythm-and-blues-soul'>R&B</option>
                    <option value='rock'>Rock</option>
                  </Select>
                  {/* <Input
                    type='text'
                    name='genre'
                    id={`event_performer_genre_${index}`}
                    placeholder={`Input ${index + 1}`}
                    value={performer.genre}
                    onChange={e => {
                      handleChange(index, 'genre', e);
                    }}
                  /> */}
                </Text>
              </div>
            ))}
        </fieldset>
        <Button
          className='addPerformer_btn'
          onClick={e => {
            e.preventDefault();
            event_ADD_performer_array_funk();
          }}>
          Add Perfomer
        </Button>
      </Flex>
    );
  };
  const concert_type_view_JSX = () => {
    return (
      <Flex flexDirection='column' align='center' mt='8'>
        <fieldset>
          {event_performer_array.length > 0 &&
            event_performer_array.map((performer, index) => (
              <div key={index} className='CreateEvent_inputContainer'>
                <Text htmlFor={`event_performer_name_${index}`} fontWeight='600' color='#FDF8F2' mt='4'>
                  Performer's Name:
                </Text>
                <Input
                  type='text'
                  name='name'
                  id='event_performer_name-solo'
                  placeholder={`"Your artist...`}
                  value={performer.value}
                  onChange={e => {
                    handleChange(index, e);
                  }}
                />
                <Text htmlFor={`event_performer_genre_${index}`} fontWeight='600' color='#FDF8F2' mt='4'>
                  Genre:
                  <Select
                    name='genre'
                    id={`genre${index}`}
                    value={performer.genre}
                    onChange={e => {
                      handleChange(index, e);
                    }}>
                    <option value='bluegrass'>Bluegrass</option>
                    <option value='blues'>Blues</option>
                    <option value='christian'>Christian</option>
                    <option value='classical'>Classical</option>
                    <option value='country-music'>Country Music</option>
                    <option value='edm'>EDM</option>
                    <option value='folk'>Folk</option>
                    <option value='hip-hop-rap'>Hip Hop - Rap</option>
                    <option value='indie'>Indie</option>
                    <option value='jamband'>Jamband</option>
                    <option value='jazz'>Jazz</option>
                    <option value='latin'>Latin</option>
                    <option value='metal'>Metal</option>
                    <option value='pop'>Pop</option>
                    <option value='punk'>Punk</option>
                    <option value='reggae'>Reggae</option>
                    <option value='rhythm-and-blues-soul'>R&B</option>
                    <option value='rock'>Rock</option>
                  </Select>
                  {/* <Input
                    type='text'
                    name='genre'
                    id={`event_performer_genre_${index}`}
                    placeholder={`Input ${index + 1}`}
                    value={performer.genre}
                    onChange={e => {
                      handleChange(index, 'genre', e);
                    }}
                  /> */}
                </Text>
                {/* <Text htmlFor={`event_performer_genre_${index}`} fontWeight='600' color='#FDF8F2' mt='4'>
                  Origen:
                  <Input
                    type='text'
                    name={`event_performer_geoCountryIso2_${index}`}
                    id={`event_performer_geoCountryIso2_${index}`}
                    placeholder={`Input ${index + 1}`}
                    value={performer.geoCountryIso2}
                    onChange={e => {
                      handleChange(index, 'geoCountryIso2', e);
                    }}
                  />
                </Text>
                <Text htmlFor={`event_image_url_${index}`} fontWeight='600' color='#FDF8F2' mt='4'>
                  Image URL:
                  <Input
                    type='text'
                    name={`event_performer_image_${index}`}
                    id={`event_performer_image_${index}`}
                    placeholder={`Image URL ${index + 1}`}
                    value={performer.image}
                    onChange={e => {
                      handleChange(index, 'image', e);
                    }}
                  />
                </Text>
                <Text htmlFor={`event_performer_url_${index}`} fontWeight='600' color='#FDF8F2' mt='4'>
                  Artist URL:
                  <Input
                    type='text'
                    name={`event_performer_url_${index}`}
                    id={`event_performer_url_${index}`}
                    placeholder={`URL ${index + 1}`}
                    value={performer.url}
                    onChange={e => {
                      handleChange(index, 'url', e);
                    }}
                  />
                </Text> */}
              </div>
            ))}
        </fieldset>
      </Flex>
    );
  };

  return (
    <>
      {event_type_value === 'festival' && festival_type_view_JSX()}
      {event_type_value === 'concert' && concert_type_view_JSX()}
    </>
  );
};

export default LineUpInformation;
