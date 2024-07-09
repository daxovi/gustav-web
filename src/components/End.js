import React from 'react';
import "./End.css";
import logodj from "../img/logodj.svg";
import instagram from "../img/social/instagram.svg";

const End = () => {
  return (
    <div className='end'>
      <a href="https://www.instagram.com/gustavtraining/" target='_blank'><img className='social' src={instagram} alt="" srcset=""/></a>
                      <a href="http://www.daliborjanecek.cz" target='_blank'><img src={logodj} alt="" srcset="" /></a>
    </div>
  )
}

export default End