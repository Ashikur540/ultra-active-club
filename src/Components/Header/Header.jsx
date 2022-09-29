import React from 'react';
import logo from '../../Img/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="nav">
            <img src={logo} alt="" className="logo" />
           <h2> <span className="name">ShapUp </span> Fitness Club</h2>
        </div>
    );
};

export default Header;