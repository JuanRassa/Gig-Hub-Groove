import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const API_URL =
  'https://www.jambase.com/jb-api/v1/artists?apikey=34602fe4-774f-4365-8a0d-ca7139ae2e76&artistName=Billie Eilish';

function AllConcerts() {
  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return <div>AllConcerts</div>;
}

export default AllConcerts;
