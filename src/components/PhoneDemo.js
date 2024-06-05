import React from 'react';
import TimerDemo from './TimerDemo';
import './PhoneDemo.css';

const PhoneDemo = () => {
  return (
    <div className='phonedemo--timer'>
      <div className="phonedemo--display">
      <TimerDemo /> 
      </div>
    </div>
  )
}

export default PhoneDemo