import React from 'react'
import { useState, useEffect } from 'react';
import './TimerDemo.css';

const TimerDemo = () => {

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      // Vyčištění intervalu při odmountování komponenty nebo když seconds dosáhne 0
      return () => clearInterval(intervalId);
    } else {
      setSeconds(60);
    }
  }, [seconds]);

  return (
    <div className="demo">
      <div className='timer'>{seconds}</div>
      <div className="controls">
        <button className="controls--button" id='start'>start</button>
        <button className="controls--button" id='reset'>reset</button>
      </div>
    </div>
  )
}

export default TimerDemo