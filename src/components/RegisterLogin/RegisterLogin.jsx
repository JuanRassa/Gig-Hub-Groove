import React, { useState, useContext } from 'react';
import axios from 'axios';

import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';

import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';

import './styles.css';

const RegisterLogin = () => {
  const {
    isLoggedCtx: [, setIsLogged],
    usernameAuthCtx: [, setUsernameAuth],
    userIdAuthCtx: [, setUserIdAuth],
  } = useContext(LoginContext);

  const API_URL = `https://gig-hub-independent.adaptable.app/users`;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const loginRegisterFunk = async () => {
    try {
      if (pathname === '/login') {
        const response = await axios.get(API_URL);
        const usersList = response.data;
        const userFound = usersList.find(user => user.username === username);
        if (userFound && userFound.password === password) {
          setIsLogged(true);
          setUsernameAuth(userFound.username);
          setUserIdAuth(userFound.id);
          window.sessionStorage.setItem('is_logged', true);
          window.sessionStorage.setItem('logged_username', userFound.username);
          window.sessionStorage.setItem('logged_id', userFound.id);
          if (window.sessionStorage.getItem('triedToCreateOrEdit') === 'yes') {
            window.sessionStorage.setItem('triedToCreateOrEdit', 'no');
            return navigate('/create-event');
          } else {
            return navigate('/');
          }
        }
        console.log(usersList);
        console.log('userFound:', userFound);
      } else {
        const response = await axios.post(API_URL, {
          username: username,
          password: password,
          favorites: [],
        });

        if (response.status === 201) {
          return navigate('/login');
        }
        console.log(response.status);
        console.log(typeof response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='RegisterLogin'>
      <form
        className='RegisterLoginForm'
        onSubmit={e => {
          e.preventDefault();
          loginRegisterFunk();
        }}>
        <div className='InputWrapper'>
          <Input
            value={username}
            onChange={e => {
              handleUsernameInput(e);
            }}
            variant='filled'
            placeholder='Username'
          />
        </div>
        <div className='InputWrapper'>
          <InputGroup size='md'>
            <Input
              value={password}
              onChange={e => {
                handlePasswordInput(e);
              }}
              variant='filled'
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <button className='Submit_LoginRegister' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterLogin;
