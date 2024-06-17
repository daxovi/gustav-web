import React from 'react'
import "./TextPage.css";

import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import End from '../components/End';

const TextPage = ({ children }) => {
    return (
        <div className='web-single'>
            <Header />
            <Menu className="web-single--menu" />
            <div className='content'>
                {children}
            </div>
            <Footer />
            <End />
        </div>
    )
}

export default TextPage