import React from 'react';
import { NavLink } from 'react-router-dom';

import addbtn from "../img/features/addbtn.svg";
import appstore from "../img/features/appstore.svg";
import custombg from "../img/features/custombg.svg";
import noadnocash from "../img/features/noadsnocash.svg";
import skipbtn from "../img/features/skipbtn.svg";
import trybeforeyoubuy from "../img/features/trybeforeyoubuy.svg";

export const header = "gustav timer";

export const firstCol = (
    <p>
        The Gustav Timer app is available for free on the App Store for iOS users, offering the flexibility to set various intervals with audible alerts. It features a sports-themed interface, making it an ideal companion for athletes and fitness enthusiasts looking to customize their training sessions. With its user-friendly design, users can easily adjust their workout durations and rest periods, ensuring a personalized exercise routine. Whether you're into high-intensity interval training, yoga, or any other form of workout, this app provides the necessary tools to keep you motivated and on track with your fitness goals.
    </p>
)

export const secondCol = (
    <p>
    <strong>FEATURE LIST</strong>
    <ul>
        <li>Multiple interval timing customization</li>
        <li>Audible alerts for interval changes</li>
        <li>Large and bold digits for easy visibility</li>
        <li>Selection of sports-themed backgrounds</li>
        <li>Always-on display feature for continuous access</li>
        <li>Quick skip to the next interval option</li>
    </ul>
    </p>
)

export const features = (
    <div>
        <a href="https://apps.apple.com/us/app/gustav-workout-timer/id6478176431" target="_blank"><img src={appstore} alt="" srcset="" /></a>
        <img className="app-detail--features-hidden" src={noadnocash} alt="" srcset="" />
        <img className="app-detail--features-hidden" src={skipbtn} alt="" srcset="" />
        <NavLink to="/demo" activeClassName="active">
        <img className="app-detail--features-hidden" src={trybeforeyoubuy} alt="" srcset="" />
      </NavLink>
        <img className="app-detail--features-hidden" src={custombg} alt="" srcset="" />
    </div>
)