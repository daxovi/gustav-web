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
  
  return (
    <div className={`app-detail ${visible ? 'visible' : ''}`}>

      <h2>
        {content.icon}{content.header}

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