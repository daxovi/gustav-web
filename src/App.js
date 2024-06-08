import './App.css';
import PhoneDemo from './components/PhoneDemo';
import TimerDemo from './components/TimerDemo';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import BoldAppName from './components/BoldAppName';
import AppDetail from './components/AppDetail';
import * as timerContent from "./content/timer";
import * as weightsContent from "./content/weights";

function App() {

  const [xPosition, setXPosition] = useState(0);
  const [selectedSection, setSelectedSection] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const offsetX = (clientX / innerWidth - 0.5) * 20; // Adjust the 20 to control sensitivity
    const offsetY = (clientY / innerHeight - 0.5) * 20;
    setXPosition(offsetX);
  };

  const animateClassName = () => {
    if (selectedSection == 0) {
      if (xPosition < -3) {
        setSelectedSection(-1)
        return "web web--animate-timer";
      } else if (xPosition > 3) {
        setSelectedSection(1)
        return "web web--animate-weights";
      } else {
        return "web";
      }
    } else if (selectedSection == -1) {
      if (xPosition > 8) {
        setSelectedSection(1)
        return "web web--animate-weights";
      } else {
        return "web web--animate-timer";
      }
    } else if (selectedSection == 1) {
      if (xPosition < -8) {
        setSelectedSection(-1)
        return "web web--animate-timer";
      } else {
        return "web web--animate-weights";
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <div className={animateClassName()}>
        <Header />
        <div></div>
        <div className="web--menu">
          Menu
        </div>
        <div className="web--content web--timer" id={selectedSection == -1 ? "" : "bold"}>
          { selectedSection == -1 ? <AppDetail content={timerContent} /> : <BoldAppName appName="timer" /> }
        </div>
        <div className="web--demo">
          <PhoneDemo selectedSection={selectedSection} />
        </div>
        <div className="web--content web--weights" id={selectedSection == 1 ? "" : "bold"}>
        { selectedSection == 1 ? <AppDetail content={weightsContent} /> : <BoldAppName appName="weights" /> }
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
