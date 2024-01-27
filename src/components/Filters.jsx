import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@chakra-ui/react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
// import './styles.css';

function Filters({ showEvents, setShowEvents, filters, setFilters, getEvents }) {
  console.log(filters);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleRadioChange = e => {
    const { value } = e.target;
    setFilters({ ...filters, eventType: value });
  };

  const handleStartDateChange = e => {
    const { value } = e.target;
    setFilters({ ...filters, eventDateFrom: value });
  };

  const handleEndDateChange = e => {
    const { value } = e.target;
    setFilters({ ...filters, eventDateTo: value });
  };

  const handleFilter = () => {
    const filtered = showEvents.filter(event => {
      const matchesCountry = !filters.geoCountryIso2 || event.geoCountryIso2 === filters.geoCountryIso2;
      const matchesArtist = !filters.artistName || event.artistName.toLowerCase().includes(filters.artistName.toLowerCase());
      const matchesEventType = !filters.eventType || (event['@type'] && event['@type'] === filters.eventType);
      const matchesDateRange = !startDate || !endDate || (event.date >= startDate && event.date <= endDate);
      const matchesGenre = !filters.genreSlug || event.genreSlug === filters.genreSlug;

      return matchesCountry && matchesArtist && matchesEventType && matchesDateRange && matchesGenre;
    });
    // console.log('Filtered Events', filtered);
    setFilters({ ...filters, eventDateFrom: startDate, eventDateTo: endDate });
    setShowEvents(filtered);
  };

  return (
    <div className='filters-container'>
      <Box>
        <Flex
          flexWrap='wrap'
          flexDirection='row'
          justifyContent='space-between'
          alignContent='space-around'
          gap='8px'
          border='1px'
          borderColor='gray.200'
          padding='20px'
          margin='10px 30px 30px 30px'
          bgColor='rgba(41,42,42,0.1)'
          borderRadius='5px'>
          <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center' gap='2'>
            <Text fontSize='14px' fontWeight='600' color='#FDF8F2'>
              Country:
            </Text>
            <Select
              name='geoCountryIso2'
              placeholder='Select option'
              value={filters.geoCountryIso2}
              onChange={handleInputChange}
              border='1px'
              borderColor='#FDF8F2'
              color='#FDF8F2'>
              <option value=''>All Countries</option>
              <option value='AD'>Andorra</option>
              <option value='AO'>Angola</option>
              <option value='AR'>Argentina</option>
              <option value='AT'>Austria</option>
              <option value='AU'>Australia</option>
              <option value='AZ'>Azerbaijan</option>
              <option value='BE'>Belgium</option>
              <option value='BG'>Bulgaria</option>
              <option value='BO'>Bolivia</option>
              <option value='BR'>Brazil</option>
              <option value='CA'>Canada</option>
              <option value='CL'>Chile</option>
              <option value='CO'>Colombia</option>
              <option value='HR'>Croatia</option>
              <option value='CZ'>Czechia</option>
              <option value='DK'>Denmark</option>
              <option value='EC'>Ecuardor</option>
              <option value='FI'>Finland</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
              <option value='GB'>Great Britain</option>
              <option value='GR'>Greece</option>
              <option value='HU'>Hungary</option>
              <option value='IS'>Iceland</option>
              <option value='IE'>Ireland</option>
              <option value='IT'>Italy</option>
              <option value='LT'>Lithuania</option>
              <option value='MT'>Malta</option>
              <option value='MX'>Mexico</option>
              <option value='NP'>Nepal</option>
              <option value='NL'>Netherlands</option>
              <option value='NO'>Norway</option>
              <option value='PY'>Paraguay</option>
              <option value='PE'>Peru</option>
              <option value='PO'>Poland</option>
              <option value='PT'>Portugal</option>
              <option value='RO'>Romania</option>
              <option value='RU'>Russia</option>
              <option value='RS'>Serbia</option>
              <option value='SK'>Slovakia</option>
              <option value='SI'>Slovenia</option>
              <option value='ES'>Spain</option>
              <option value='SE'>Sweden</option>
              <option value='SW'>Switzerland</option>
              <option value='UA'>Ukraine</option>
              <option value='US'>United States</option>
              <option value='UY'>Uruguay</option>
              <option value='VE'>Venezuela</option>
            </Select>
          </Box>

          <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center' gap='2'>
            <Text fontSize='14px' fontWeight='600' color='#FDF8F2'>
              Artist Name:
            </Text>
            <Input
              placeholder='Enter artist name'
              type='text'
              name='artistName'
              border='1px'
              color='#FDF8F2'
              borderColor='#FDF8F2'
              value={filters.artistName}
              onChange={handleInputChange}
            />
          </Box>

          <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center' gap='2'>
            <Text fontSize='14px' fontWeight='600' color='#FDF8F2'>
              Date Range:
            </Text>
            <Input
              className='filter-datepicker'
              type='date'
              name='eventDateFrom'
              value={filters.eventDateFrom}
              onChange={handleInputChange}
              marginBottom='5px'
            />
            <Input className='filter-datepicker' type='date' name='eventDateTo' value={filters.eventDateTo} onChange={handleInputChange} />
          </Box>

          <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center' gap='2'>
            <Text fontSize='14px' fontWeight='600' color='#FDF8F2'>
              Type of event:
            </Text>
            <RadioGroup>
              <Stack spacing={4} direction='row'>
                <Radio
                  value='festival'
                  checked={filters.eventType === 'festival'}
                  onChange={handleRadioChange}
                  border='2px'
                  borderColor='#FDF8F2'
                  color='#FDF8F2'>
                  <Text color='#FDF8F2'>Festival</Text>
                </Radio>
                <Radio
                  value='concert'
                  checked={filters.eventType === 'concert'}
                  onChange={handleRadioChange}
                  border='2px'
                  borderColor='#FDF8F2'
                  color='#FDF8F2'>
                  <Text color='#FDF8F2'>Concert</Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center' gap='2'>
            <Text fontSize='14px' fontWeight='600' color='#FDF8F2'>
              Genre:
            </Text>
            <Select
              placeholder='Select option'
              name='genreSlug'
              value={filters.genreSlug}
              onChange={handleInputChange}
              border='1px'
              borderColor='#FDF8F2'
              color='#FDF8F2'>
              <option value=''>All Genres</option>
              <option value='bluegrass'>Bluegrass</option>
              <option value='blues'>Blues</option>
              <option value='christian'>Christian</option>
              <option value='classical'>Classical</option>
              <option value='country-music'>Country Music</option>
              <option value='edm'>Edm</option>
              <option value='folk'>Folk</option>
              <option value='hip-hop-rap'>Hip Hop Rap</option>
              <option value='indie'>Indie</option>
              <option value='jamband'>Jamband</option>
              <option value='jazz'>Jazz</option>
              <option value='latin'>Latin</option>
              <option value='metal'>Metal</option>
              <option value='pop'>Pop</option>
              <option value='punk'>Punk</option>
              <option value='reggae'>Reggae</option>
              <option value='rhytm-and-blues-soul'>Rhytm and Blues Soul</option>
              <option value='rock'>Rock</option>
            </Select>
          </Box>

          <Box display='flex' justifyContent='center' alignItems='center' w='100%' mt='4'>
            <Button
              w='30%'
              bgColor='#292A2A'
              variant='outline'
              _hover={{
                bgColor: '#A6348E',
              }}
              onClick={() => {
                getEvents();
              }}>
              <Text color='white'>Apply Filters</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Filters;
