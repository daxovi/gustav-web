import './App.css';
import PhoneDemo from './components/PhoneDemo';
import TimerDemo from './components/TimerDemo';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import BoldAppName from './components/BoldAppName';
import AppDetail from './components/AppDetail';

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
        <Header/>
        <div></div>
        <div className="web--menu">
          Menu
        </div>
        <div className="web--content web--timer" id={selectedSection == -1 ? "" : "bold"}>
          {
            selectedSection == -1 ?
              <AppDetail>
                <h2>gustav timer</h2>
                <p>The Gustav Workout Timer app is offering the flexibility to set various intervals with audible alerts. It features a sports-themed interface, making it an ideal companion for athletes and fitness enthusiasts looking to customize their training sessions. With its user-friendly design, users can easily adjust their workout durations and rest periods, ensuring a personalized exercise routine. Whether you're into high-intensity interval training, yoga, or any other form of workout, this app provides the necessary tools to keep you motivated and on track with your fitness goals.</p>
              </AppDetail>
              :
              <BoldAppName appName="timer" />
          }
        </div>
        <div className="web--demo">
          <PhoneDemo selectedSection={selectedSection} />

        </div>
        <div className="web--content web--weights" id={selectedSection == 1 ? "" : "bold"}>
          {
            selectedSection == 1 ?
              <AppDetail>
                <h2>gustav weights</h2>
                <p>Gustav Weights is your ultimate workout companion! Track your exercises, record weights lifted, and monitor your progress seamlessly. Achieve your fitness goals by setting personal records and witnessing your improvement journey. Whether you're a novice or a fitness enthusiast, Gustav Weights is tailored to help you reach your peak performance.</p>
              </AppDetail>
              :
              <BoldAppName appName="weights" />
          }
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
