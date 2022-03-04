import React from 'react';
import logo from '../image/logo.gif';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header className="header row">
        <Link to='/'>
            <div className="logo_image">
                <div className = 'logo'>
                    <img src={logo} title="logo" alt="logo" />
                </div>
            </div>
        </Link>    
        <div className="header-list">
            <Link to='/'>
                <i className="header-list-item">Главная</i>
            </Link>  
            <Link to='/artists/'>
                <i className="header-list-item">Исполнители</i>
            </Link>  
            <Link to='/songs/'>
                <i className="header-list-item">Песни</i>
            </Link>  
        </div>
    </header>   
       
    );
};

export default Header;