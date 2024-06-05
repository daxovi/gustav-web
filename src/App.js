import './App.css';
import PhoneDemo from './components/PhoneDemo';
import TimerDemo from './components/TimerDemo';
import { useEffect, useState } from 'react';

function App() {

  const [xPosition, setXPosition] = useState(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const offsetX = (clientX / innerWidth - 0.5) * 20; // Adjust the 20 to control sensitivity
    const offsetY = (clientY / innerHeight - 0.5) * 20;

    setXPosition(offsetX);
    console.log({ x: offsetX, y: offsetY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div>
      <div className={xPosition < -2 ? "web web--animate-timer" : "web"}>
        <div className="web--header">
          Header
        </div>
        <div></div>
        <div className="web--menu">
          Menu
        </div>
        <div className="web--content web--timer">
          timer
        </div>
        <div className="web--demo">
          <PhoneDemo />
          <div className="web--download">
            Download on appstore
          </div>
        </div>
        <div className="web--content web--weights">
          weights
        </div>
        <div className="web--footer">
          Footer
        </div>
        <div></div>
        <div className="web--end">End</div>
      </div>
      <div className="app">
        <TimerDemo />
      </div>
    </div>

  );
}

export default App;
