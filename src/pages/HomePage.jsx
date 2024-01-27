import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cymaticTrendy1 from './../assets/cymatycSpin.png';
import cymaticTrendy3 from './../assets/cymaticSpin3.png';
import cymaticTrendy5 from './../assets/cymaticSpin5.png';
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
    <div className='HomePage'>
      <div className='linkContainer'>
        <div className='trendyPack'>
          <Link
            className='trendyPack_link'
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
              Check out the most trendy concerts near you!
            </Text>
          </Link>
        </div>
        <div className='trendyCurtain'></div>

        <div className='independentPack'>
          <Link
            className='independentPack_link'
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
        <div className='independentCurtain'></div>
        <img
          className='cymaticSpin cymaticSpin1'
          src={cymaticTrendy1}
          alt='cymatics'
        />
        <img
          className='cymaticSpin cymaticSpin3'
          src={cymaticTrendy3}
          alt='cymatics'
        />
        <img
          className='cymaticSpin cymaticSpin5'
          src={cymaticTrendy5}
          alt='cymatics'
        />
      </div>
    </div>
  );
}

export default HomePage;
