import React from 'react'
import { useState, useEffect } from 'react';
import './TimerDemo.css';

const TimerDemo = () => {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (seconds > 0 && running) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      // Vyčištění intervalu při odmountování komponenty nebo když seconds dosáhne 0
      return () => clearInterval(intervalId);
    } else if (seconds <= 0 && running) {
      setSeconds(60)
    }
  }, [seconds, running]);

  const startStop = () => { 
    setRunning(!running)
   }

   const reset = () => { 
    setSeconds(60);
    setRunning(false)
    }

  return (
    <div className="timer--demo">
      <div className='timer'>
        <div id={seconds < 10 ? 'timer--onedigit' : ''}>
        {seconds}
        </div>
        </div>
      <div className="controls">
        <button onClick={startStop} className="controls--button" id={running ? 'stop' : 'start'}>{running ? 'stop' : 'start'}</button>
        <button onClick={reset} className="controls--button" id='reset'>reset</button>
      </div>
    </div>
  )
}

export default TimerDemo