import React from 'react';
import banner1 from '../../images/logo1.gif';
import banner2 from '../../images/topBanner.png';
import cricketBall from '../../images/1-2-cricket-ball-png-clipart.png';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="top-banner d-flex">
                <div className="banner-img">
                    <img src={banner1} alt="banner" />
                </div>
                <div className="banner-img">
                    <img src={banner2} alt="banner" />
                </div>
            </div>
            <div className="title-bar d-flex justify-content-center">
                <div>
                    <span>Player Auction Website</span>
                </div>
                <div>
                    <img className="App-logo" src={cricketBall} alt="ball logo" />
                </div>
                <div>
                    <span style={{marginLeft:"15px"}}>Dedcicated to MASH-02</span>
                </div>
            </div>
        </div>
    );
};

export default Header;