import './App.css';
import PhoneDemo from './components/PhoneDemo';
import TimerDemo from './components/TimerDemo';
import { useEffect, useState } from 'react';
import appstore from "./img/appstore.svg";
import QRCode from "react-qr-code";

function App() {

  const [xPosition, setXPosition] = useState(0);
  const [selectedSection, setSelectedSection] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const offsetX = (clientX / innerWidth - 0.5) * 20; // Adjust the 20 to control sensitivity
    const offsetY = (clientY / innerHeight - 0.5) * 20;

    setXPosition(offsetX);
    console.log(offsetX);
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
          <PhoneDemo selectedSection={selectedSection} />
          <div className="web--download">
            <a href="http://"><img src={appstore} alt="" srcset="" /></a>
            <div className="web--download-qr">
              <QRCode size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value="seznam.cz"
    viewBox={`0 0 256 256`} />
            </div>
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
