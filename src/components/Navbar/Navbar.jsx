import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import cymaticTrendy1 from './../../assets/cymatycSpin.png';
import cymaticTrendy3 from './../../assets/cymaticSpin3.png';
import cymaticTrendy5 from './../../assets/cymaticSpin5.png';
import AboutPage from '../../pages/AboutPage';
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  const {
    isLoggedCtx: [isLogged, setIsLogged],
    usernameAuthCtx: [usernameAuth, setUsernameAuth],
    userIdAuthCtx: [userIdAuth, setUserIdAuth],
  } = useContext(LoginContext);

  const showAboutLink = pathname === '/';

  return (
    <nav className='Navbar'>
      <div className='Navbar_logoHome'>
        <Link className='Navbar_homeLogo_link Navbar_btn' to='/'>
          <img src={cymaticTrendy5} alt='cymatics' />
          Ágora
        </Link>
      </div>
      {pathname !== '/' && (
        <div className='Navbar_section Navbar_trendyIndependent'>
          <Link
            className={`Navbar_btn Navbar_trendy_link ${
              pathname === '/allconcerts' ? 'activePage' : ''
            }`}
            to='/allconcerts'
          >
            Trendy
            <img src={cymaticTrendy1} alt='cymatic' />
          </Link>
          <Link
            className={`Navbar_btn Navbar_independent_link ${
              pathname === '/independent' ? 'activePage' : ''
            }`}
            to='/independent'
          >
            Independent
            <img src={cymaticTrendy3} alt='cymatic' />
          </Link>
        </div>
      )}
      <div className='Navbar_section Navbar_loginRegister'>
        {showAboutLink && (
          <div className='Navbar_section Navbar_aboutLink'>
            <Link className='Navbar_btn Navbar_about_link' to='/about'>
              About
            </Link>
          </div>
        )}
        {!isLogged && (
          <Link className='Navbar_btn Navbar_loginRegister_login' to='/login'>
            Login
          </Link>
        )}
        {!isLogged && (
          <Link
            className='Navbar_btn Navbar_loginRegister_register'
            to='/register'
          >
            Register
          </Link>
        )}
        {isLogged && (
          <Link
            className='Navbar_loginRegister_login Navbar_btn Navbar_logged_message'
            to='my-favorites'
          >
            Hi {usernameAuth}!
          </Link>
        )}
        {isLogged && (
          <button
            className='Navbar_btn Navbar_logged_logOut Navbar_loginRegister_register'
            onClick={() => {
              setIsLogged(false);
              setUsernameAuth('');
              setUserIdAuth('');
              window.sessionStorage.setItem('is_logged', false);
              window.sessionStorage.setItem('logged_username', '');
              window.sessionStorage.setItem('logged_id', '');
            }}
            color='inherit'
          >
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
