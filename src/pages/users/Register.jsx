import React from 'react';
import RegisterLogin from '../../components/RegisterLogin/RegisterLogin';
import './Register.css';

const Register = () => {
  return (
    <div className='Register'>
      <h1 className='MainTitle'>Register</h1>;
      <RegisterLogin />
    </div>
  );
};

export default Register;
