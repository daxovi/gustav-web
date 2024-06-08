import React from 'react'
import "./AppDetail.css";
import appStore from "../img/appstore.svg";

const AppDetail = ({ content }) => {
  return (
    <div className='app-detail'>
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