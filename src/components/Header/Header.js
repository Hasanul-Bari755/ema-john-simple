import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/Contact">Contact</a>
                    <a href="/about">about</a>
                    <a href="/info">Info</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;