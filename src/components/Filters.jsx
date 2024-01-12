import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Filters({
  showEvents,
  setShowEvents,
  filters,
  setFilters,
  getEvents,
}) {
  console.log(filters);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleRadioChange = e => {
    const { value } = e.target;
    setFilters({ ...filters, eventType: value });
  };

  const handleFilter = () => {
    const filtered = showEvents.filter(event => {
      const matchesCountry =
        !filters.geoCountryIso2 ||
        event.geoCountryIso2 === filters.geoCountryIso2;
      const matchesArtist =
        !filters.artistName ||
        event.artistName
          .toLowerCase()
          .includes(filters.artistName.toLowerCase());
      const matchesEventType =
        !filters.eventType ||
        (event['@type'] && event['@type'] === filters.eventType);
      const matchesDateRange =
        !startDate ||
        !endDate ||
        (event.date >= startDate && event.date <= endDate);
      const matchesGenre =
        !filters.genreSlug || event.genreSlug === filters.genreSlug;

      return (
        matchesCountry &&
        matchesArtist &&
        matchesEventType &&
        matchesDateRange &&
        matchesGenre
      );
    });
    // console.log('Filtered Events', filtered);
    setFilters({ ...filters, eventDateFrom: startDate, eventDateTo: endDate });
    setShowEvents(filtered);
  };

  return (
    <div>
      <h3>Filter</h3>

      <label>
        Country:
        <select
          name='geoCountryIso2'
          value={filters.geoCountryIso2}
          onChange={handleInputChange}
        >
          <option value=''>Select Country</option>
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
        </select>
      </label>

      <label>
        Artist Name:
        <input
          type='text'
          name='artistName'
          value={filters.artistName}
          onChange={handleInputChange}
          placeholder='Enter artist name'
        />
      </label>

      <label>
        Date Range:
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </label>

      <label>
        Type of event:
        <label>
          <input
            type='radio'
            name='eventType'
            value='festival'
            checked={filters.eventType === 'festival'}
            onChange={handleRadioChange}
          />
          Festival
        </label>
        <label>
          <input
            type='radio'
            name='eventType'
            value='concert'
            checked={filters.eventType === 'concert'}
            onChange={handleRadioChange}
          />
          Concert
        </label>
      </label>

      <label>
        Genre:
        <select
          name='genreSlug'
          value={filters.genreSlug}
          onChange={handleInputChange}
        >
          <option value=''>Select Genre</option>
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
        </select>
      </label>

      <button
        type='button'
        onClick={() => {
          getEvents();
          // alert(6);
        }}
      >
        Apply
      </button>
    </div>
  );
}

export default Filters;
