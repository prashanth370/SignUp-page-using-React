import React from 'react';
import './Signup.css';

import user_icon from '../Asstes/user.png'
import email_icon from '../Asstes/mail.png'
import password_icon from '../Asstes/password.png'

const Signup = ({onSwitch}) => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Username' />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="text" placeholder='email'/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='password'/>
        </div>
      </div>

      <div className="forgot-password">Already have an account?
        <span onClick={onSwitch}>  Sign In</span></div>

        <div className="submit-container">
          <div className="submit">Sign Up</div>
        </div>
    </div>

  );
};

export default Signup