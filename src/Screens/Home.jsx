import React from 'react';
import './Home.css';
// import 'animate.css';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-scroll';

function Home() {
    const boxRef = useRef(null);
    const buttonRef = useRef(null);

    useGSAP(() => {
        gsap.from(boxRef.current, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            delay: 0.2
        });
    });

    return (
        <div className="home-container">
            <div className="background-image-filter"></div>
            <div className="home" ref={boxRef}>
                <h1>Ĥey, I'm Răyyăn!</h1>
                <p>Experienced web developer who <span id='text1'>enjoys</span> building <span id='text1'>fast </span>and <span id='text1'>accessible</span> digital products.</p>
                <button> <Link to="about" smooth={true} duration={1000}>About me</Link></button>
            </div>
        </div>
    );
}

export default Home;