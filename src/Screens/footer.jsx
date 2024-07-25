import React from 'react';
import './footer.css';
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useGSAP(() => {
        gsap.from('.footer-section', {
            y: -65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.footer-section',
                scroller: "body",
                start: 'top 85%',
            }
        });
        gsap.from('.footer-line', {
            y: -65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.footer-line',
                scroller: "body",
                start: 'top 85%',
            }
        });
    });

    return (
        <>
            <div className="footer-line"></div>
            <div className="footer">
                <div className="footer-section">
                    <h3>Muhammad Rayyan</h3>
                    <p>
                        Experienced web developer who <span className="highlight">enjoys</span> building
                        <span className="highlight"> fast</span> and
                        <span className="highlight"> accessible</span> digital products.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Design</h3>
                    <p>
                        Inspired by <a href="https://catalinonutu.com/" target="_blank" rel="noopener noreferrer">Catalin Onutu</a>'s website.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Social</h3>
                    <div className="social-icons">
                        <a href="https://github.com/MuhammadRayyan16" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-r-8a6213316/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
