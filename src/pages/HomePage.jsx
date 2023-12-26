import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Music is for everyone one if for music</h1>
      <Link to='/allconcerts'>
        <h3>Trendy Concerts</h3>
      </Link>
      <p>Check out the most trendy concerts neer you!</p>
      <Link to='/independent'>
        <h3>Independent</h3>
      </Link>
      <p>Want to know some new artist?! Check out our independent list</p>
    </div>
  );
}

export default HomePage;
