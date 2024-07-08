import './App.css';
import PhoneDemo from './components/PhoneDemo';
import TimerDemo from './components/TimerDemo';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import End from './components/End';
import BoldAppName from './components/BoldAppName';
import AppDetail from './components/AppDetail';
import AppMobile from './pages/AppMobile';

/* MARK: CONTENT
*/
import * as timerContent from "./content/timer";
import * as weightsContent from "./content/weights";

/* MARK: CONFIG
*/
import animationConfig from './config/animationConfig';
import behaviorConfig from './config/behaviorConfig';

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
      if (xPosition < -behaviorConfig.distanceToStart) {
        setSelectedSection(-1)
        return "web web--animate-timer";
      } else if (xPosition > behaviorConfig.distanceToStart) {
        setSelectedSection(1)
        return "web web--animate-weights";
      } else {
        return "web";
      }
    } else if (selectedSection == -1) {
      if (xPosition > behaviorConfig.distanceToSwitch) {
        setSelectedSection(1)
        return "web web--animate-weights";
      } else {
        return "web web--animate-timer";
      }
    } else if (selectedSection == 1) {
      if (xPosition < -behaviorConfig.distanceToSwitch) {
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
    <div 
    style={{
      '--transition-duration': animationConfig.transitionDuration,
      '--fade-duration': animationConfig.fadeDuration,
      '--transition-easing': animationConfig.easing
    }}>
      <div className={animateClassName()}>
        <Header />
        <div></div>
        <Menu/>
        <div className={ selectedSection == -1 ? "timerBG" : "timerBG invisibleBG" } ></div>
        <div className="web--content web--timer" id={selectedSection == -1 ? "" : "bold"}>
          { selectedSection == -1 ? <AppDetail content={timerContent} /> : <BoldAppName appName="timer" /> }
        </div>
        <div className="web--demo">
          <PhoneDemo selectedSection={selectedSection} />
        </div>
        <div className={ selectedSection == 1 ? "weightsBG" : "weightsBG invisibleBG" }></div>
        <div className="web--content web--weights" id={selectedSection == 1 ? "" : "bold"}>
        { selectedSection == 1 ? <AppDetail content={weightsContent} /> : <BoldAppName appName="weights" /> }
        </div>
        <Footer />
        <div></div>
        <End />
      </div>
      <div className="app">
        <AppMobile />
      </div>
    </div>
  );
}

export default App;
