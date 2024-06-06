import React from 'react';
import TimerDemo from './TimerDemo';
import './PhoneDemo.css';

const PhoneDemo = ({selectedSection}) => {
  return (
    <div className='phonedemo--timer'>
      <div className={selectedSection == 1 ? "phonedemo--display phonedemo--display-hidden" : "phonedemo--display"}>
      <TimerDemo /> 
      </div>
    </div>
  )
}

export default PhoneDemo