import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';

import './styles.css';

const RegisterLogin = () => {
  const {
    isLoggedCtx: [, setIsLogged],
    usernameAuthCtx: [, setUsernameAuth],
  } = useContext(LoginContext);

  const API_URL = `https://gig-hub-independent.adaptable.app/users`;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
          window.sessionStorage.setItem('is_logged', true);
          window.sessionStorage.setItem('logged_username', userFound.username);
          return navigate('/');
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
          <label htmlFor='username'>Username</label>
          <input
            onChange={e => {
              handleUsernameInput(e);
            }}
            value={username}
            className='UsernameInput'
            type='text'
            name='username'
            id='username'
            placeholder='Username'
          />
        </div>
        <div className='InputWrapper'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={e => {
              handlePasswordInput(e);
            }}
            value={password}
            className='PasswordInput'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default RegisterLogin;
