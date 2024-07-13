import React from 'react';
import "./End.css";
import logodj from "../img/logodj.svg";
import instagram from "../img/social/instagram.svg";

const End = () => {

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
    <div className='end'>
      <a href="https://www.instagram.com/gustavtraining/" target='_blank'><img className='social' src={instagram} alt="" srcset=""  onClick={() => { handleClickGA(`instagram`) }}/></a>
      <a href="http://www.daliborjanecek.cz" target='_blank'><img src={logodj} alt="" srcset="" onClick={() => { handleClickGA(`dj`) }} /></a>
    </div>
  )
}

export default End