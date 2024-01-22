import React from 'react';
import RegisterLogin from '../../components/RegisterLogin/RegisterLogin';

import './Login.css';

const Login = () => {
  return (
    <div className='Login'>
      <h1 className='MainTitle'>Login</h1>
      <RegisterLogin />
    </div>
  );
};

export default Login;
