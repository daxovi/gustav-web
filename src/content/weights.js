import React from 'react';

import addbtn from "../img/features/addbtn.svg";
import appstore from "../img/features/appstore.svg";
import custombg from "../img/features/custombg.svg";
import noadnocash from "../img/features/noadsnocash.svg";
import skipbtn from "../img/features/skipbtn.svg";
import trybeforeyoubuy from "../img/features/trybeforeyoubuy.svg";

import iconImage from "../img/icons/weights.png";

const handleClickGA = (eventLabel) => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'Links',
        'event_label': eventLabel,
        'value': 1
      });
    }
  }

export const icon = (
    <img src={iconImage} alt="Gustav Weights icon"/>
)

export const header = "gustav weights";

export const firstCol = (
    <p>
        Gustav Weights is your ultimate workout companion! Track your exercises, record weights lifted, and monitor your progress seamlessly. Achieve your fitness goals by setting personal records and witnessing your improvement journey. Whether you're a novice or a fitness enthusiast, Gustav Weights is tailored to help you reach your peak performance.
    </p>
)

export const secondCol = (
    <p>
        <strong>FEATURE LIST</strong>
    <ul>
        <li>Adding your own exercises</li>
        <li>Simple entry of the weight lifted</li>
        <li>Modern user interface</li>
        <li>Detailed logbook</li>
    </ul>
    </p>
)

export const appStoreLink = "https://apps.apple.com/us/app/gustav-weights/id6483001116";

export const features = (
    <div>
        <a href={appStoreLink} target="_blank" onClick={() => { handleClickGA(`appstore_${header}`) }}><img src={appstore} alt="" srcset="" /></a>
        <img className="app-detail--features-hidden" src={noadnocash} alt="" srcset="" />
        <img className="app-detail--features-hidden" src={addbtn} alt="" srcset="" />
    </div>
)