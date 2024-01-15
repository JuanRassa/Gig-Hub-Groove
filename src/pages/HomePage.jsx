import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { Container } from '@mui/system';

function HomePage() {
  return (
    <div className='backgroundColor'>
      <h1 className='headerHome'>Music is for everyone one if for music</h1>

      <Container>
        <div className='trendyPack'>
          <Link to='/allconcerts'>
            <h3 className='mainTopics'>Trendy Concerts</h3>
          </Link>
          <p>Check out the most trendy concerts neer you!</p>
        </div>

        <div className='independentPack'>
          <Link to='/independent'>
            <h3 className='mainTopics'>Independent</h3>
          </Link>
          <p>Want to know some new artist?! Check out our independent list</p>
        </div>
      </Container>

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
          fill='#A6348E'
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
          fillOpacity={0.5}
          d='
        M0,192
        C220,100,440,100,660,192
        C880,290,1100,290,1320,192
        L1320 500
        L0 500
        '
          fill='#AFD74B'
        />

        <path
          fillOpacity={0.9}
          d='
        M0,192
        C220,100,440,100,660,192
        C880,290,1100,290,1320,192
        L1320 500
        L0 500
        '
          fill='#F76320'
        />
      </svg>
    </div>
  );
}

export default HomePage;
