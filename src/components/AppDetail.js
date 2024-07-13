import React from 'react'
import "./AppDetail.css";
import { useEffect, useState } from 'react';
import animationConfig from '../config/animationConfig';

const AppDetail = ({ content }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, animationConfig.delay);
  
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const handleClickGA = (eventLabel) => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'Links',
        'event_label': eventLabel,
        'value': 1
      });
    }
  }
  
  return (
    <div className={`app-detail ${visible ? 'visible' : ''}`}>

      <h2>
        <a href={content.appStoreLink} target='_blank' onClick={() => { handleClickGA(`h2_${content.header}`) }}>
        {content.icon}{content.header}
        </a>
        </h2>

      <div className="columns">
        <div className="firstCol">
          {content.firstCol}
        </div>
        <div className="secondCol">
          {content.secondCol}
        </div>
      </div>
      <div className="app-detail--features">
      {content.features}
      </div>
    </div>
  )
}

export default AppDetail