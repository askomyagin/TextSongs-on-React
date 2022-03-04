import React from 'react';
import logo from '../image/logo.gif';
import fb from '../image/ico-fb.png';
import tw from '../image/ico-tw.png';
import vk from '../image/ico-vk.png';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return(
        <footer className="footer row">
                <Link to='/'>
                    <div className="logo_image">
                        <img src={logo} alt="Heartleys" />
                    </div>
                </Link>

                <div className="footer-social-list">
                    <Link to={'/vk'} target={"_blank"}>
                        <img className="footer-list-item btn-social btn-social-vk" src={vk} alt="vk" />
                    </Link>
                    <Link to={'/facebook'} target={"_blank"}>
                        <img className='footer-list-item btn-social btn-social-fb' src={fb} alt="fb"/>
                    </Link>
                    <Link to={'/tw'} target={"_blank"}>
                        <img className="footer-list-item btn-social btn-social-fb" src={tw} alt="tw"/>
                    </Link>
                </div>
        </footer>
    );
};

export default Footer;