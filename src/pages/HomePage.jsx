import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../styles.scss';
import { Heading, Text } from '@chakra-ui/react';
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
      <Heading
        color='#FDF8F2'
        textAlign='center'
        paddingTop='100px'
        fontFamily='Josefin Sans'
        size='2xl'
      >
        Music is for everyone is for music
      </Heading>
      <div className={`waveContainer ${waveColor ? 'waveColored' : ''}`}>
        <div className='homepage'></div>
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
              <Heading
                size='lg'
                color='#FDF8F2'
                textAlign='center'
                fontFamily='Josefin Sans'
              >
                Trendy Concerts
              </Heading>
              <Text fontSize='lg' fontFamily='Josefin Sans'>
                Check out the most trendy concerts neer you!
              </Text>
            </Link>
          </div>

          <div className='independentPack'>
            <Link
              to='/independent'
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <Heading
                size='lg'
                color='#FDF8F2'
                textAlign='center'
                fontFamily='Josefin Sans'
              >
                Independent
              </Heading>
              <Text fontSize='lg' fontFamily='Josefin Sans'>
                Want to know some new artist?! Check out our independent list
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
