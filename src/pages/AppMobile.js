import React from 'react';
import TextPage from '../components/TextPage'
import "./AppMobile.css";
import mobilesstimer from "../img/mobile/mobilesstimer.png";
import mobilessweights from "../img/mobile/mobilessweights.png";

/* MARK: CONTENT
*/
import * as timerContent from "../content/timer";
import * as weightsContent from "../content/weights";

const AppMobile = () => {
  return (
    <TextPage>
        <section className='mobile--App'>
        <div className="mobile--app-screenshots">
            <img src={mobilesstimer} alt="" srcset="" />
        </div>
        <h2>{timerContent.header}</h2>
       
        {timerContent.firstCol}
        <div className="mobile--app-features">
            {timerContent.features}
        </div>

        </section>
        <section className='mobile--App'>
        <div className="mobile--app-screenshots">
            <img src={mobilessweights} alt="" srcset="" />
        </div>
        <h2>{weightsContent.header}</h2>
        
        {weightsContent.firstCol}
        <div className="mobile--app-features">
            {weightsContent.features}
        </div>

        </section>

    </TextPage>
  )
}

export default AppMobile