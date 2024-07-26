import React, { useState, useEffect } from 'react';
import './navbar.css';
import 'remixicon/fonts/remixicon.css';
import Profile from '../assets/profile.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${show ? 'navbar-show' : 'navbar-hide'}`}>
            <img src={Profile} alt="Avatar" />
            <h1>Muhămmăḏ Răyyăn</h1>
            <div className="nav-links">
                <Link to="about" smooth={true} duration={1000}>About</Link>
                <Link to="project" smooth={true} duration={1500}>Project</Link>
                <Link to="contact" smooth={true} duration={1600}>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;










