import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackGroundEffect from '../components/BackGroundEffect';
import '../index.css';

function HomePage() {
  const [waveColor, setWaveColor] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const handleLinkHover = () => {
    setIsLinkHovered(true);
    setWaveColor(true);
    console.log(isLinkHovered);
  };

  const handleLinkLeave = () => {
    setIsLinkHovered(false);
    setWaveColor(false);
    console.log(isLinkHovered);
  };

  return (
    <div className='backgroundColor'>
      <h1 className='headerHome'>Music is for everyone one if for music</h1>
      <div className={`waveContainer ${waveColor ? 'waveColored' : ''}`}>
        <div className='homepage'>
          <BackGroundEffect />
        </div>
        <svg viewBox='0 0 1320 500'>
          <path
            fillOpacity={0.5}
            d='
        M0,192
        C220,100,440,100,660,192
        C880,290,1100,290,1320,192
        L1320 500
        L0 500
        '
            fill='#827e7d'
          />

          <path
            fillOpacity={0.5}
            d='
        M0,192
        C220,100,440,100,660,192
        C880,290,1100,290,1320,192
        L1320 500
        L0 500
        '
            fill='#fff'
          />

          <path
            fillOpacity={1}
            d='
        M0,192
        C220,100,440,100,660,192
        C880,290,1100,290,1320,192
        L1320 500
        L0 500
        '
            fill='#dcddda'
          />

          <path
            fillOpacity={1}
            d='
        M0,192
        C220,100,440,100,660,192
        C880,290,1100,290,1320,192
        L1320 500
        L0 500
        '
            fill='#433d3b'
          />
        </svg>
        <div
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        ></div>

        <div className='linkContainer'>
          <div className='trendyPack'>
            <Link
              to='/allconcerts'
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <h3 className='mainTopics'>Trendy Concerts</h3>
            </Link>
            <p>Check out the most trendy concerts neer you!</p>
          </div>

          <div className='independentPack'>
            <Link
              to='/independent'
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <h3 className='mainTopics'>Independent</h3>
            </Link>
            <p>Want to know some new artist?! Check out our independent list</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
