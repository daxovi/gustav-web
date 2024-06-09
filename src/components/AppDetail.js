import React from 'react'
import "./AppDetail.css";
import appStore from "../img/appstore.svg";
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
      <h2>{content.header}</h2>
      <div className="columns">
        <div className="firstCol">
          {content.firstCol}
        </div>
        <div className="secondCol">
          {content.secondCol}
        </div>
      </div>
      <div className="app-detail--download">
      <a href="http://"><img src={appStore} alt="" srcset="" /></a>
      </div>
    </div>
  )
}

export default AppDetail