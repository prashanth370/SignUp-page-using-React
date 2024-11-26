import React from 'react'

import './Signin.css'

import email_icon from '../Asstes/mail.png'
import password_icon from '../Asstes/password.png'

const Signin = ({onSwitch}) => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign In</div>
        </div>

        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="text" placeholder='Email' />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>

        <div className="forgot-password">
            Don't have an account? <span onClick={onSwitch}>Sign Up</span>
        </div>

        <div className="submit-container">
            <div className="submit">Sign In</div>
        </div>
    </div>
  )
}

export default Signin
