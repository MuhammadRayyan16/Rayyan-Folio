import React, { useState, useEffect } from 'react';
import './navbar.css';
import 'remixicon/fonts/remixicon.css';
import Profile from '../assets/profile.png';

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
                <a href="#About">About</a>
                <a href="#Project">Project</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;