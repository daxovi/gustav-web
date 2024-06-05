import './App.css';
import PhoneDemo from './components/PhoneDemo';
import TimerDemo from './components/TimerDemo';

function App() {
  return (
    <div>
      <div className="web">
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
      </div>
      <div className="app">
        <TimerDemo />
      </div>
    </div>

  );
}

export default App;
