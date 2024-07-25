import React from 'react';
import './about.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

function About() {

    useGSAP(() => {
        gsap.from('.About-getnow', {
            x: -105,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.About-getnow',
                scroller: "body",
                start: 'top 85%',
            }
        })
        gsap.from('.About-mytool', {
            y: -80,
            opacity: 0,
            duration: 1.1,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.About-mytool',
                scroller: "body",
                start: 'top 85%',
            }
        })
        gsap.from('.About-text', {
            y: -100,
            opacity: 0,
            duration: 1.1,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.About-text',
                scroller: "body",
                start: 'top 85%',
            }
        })
    })

    return (
        <Element name="about">
            <div className="About-container" >
                <div className="About-text">
                    <h1>About me</h1>
                    <span className='green-div'></span>
                    <i>Creating exceptional websites with <span id='green-color'>1</span> years of web <span id='green-color'>development</span> experience.</i>
                </div>
                <div className="About-content">
                    <div className="About-getnow">
                        <h2>Get to know me!</h2>
                        <p id='text-one'>I'm a software developer proficient in JavaScript
                            and the web. I'm passionate about web performance, accessibility, mentoring, user & developer experience.</p>
                        <p>I follow a digital minimalism mindset, using
                            technology to improve people's lives and provide value for businesses.</p>
                        <p>In my free time, I build side projects and like
                            exploring new technologies. You can see some of my work in the projects section below.</p>
                        <p>I'm open to collaboration opportunities where I can
                            contribute, learn and grow. Don't hesitate to reach
                            out if you think my skills and experience are a good fit for your next project.</p>
                        <button> <Link to="project" smooth={true} duration={1000}>project</Link></button>
                    </div>
                    <div className="About-mytool">
                        <h2>My  toolkit</h2>
                        <div className="mytool-btns">
                            <button>JavaScript</button>
                            <button>Node.js</button>
                            <button>React Native</button>
                            <button>CSS</button>
                            <button>SASS</button>
                            <button>React</button>
                            <button>Next.js</button>
                            <button>GSAP</button>
                            <button>Vite</button>
                            <button>Expo</button>
                            <button>Git</button>
                            <button>Github</button>
                            <button>Vercel</button>
                            <button>Figma</button>
                            <button>awwwards</button>
                            <button>Tailwind</button>
                            <button>Bootstrap</button>
                            <button>Netlify</button>
                            <button>Vercel</button>
                            <button>Firebase</button>
                            <button>Vs code</button>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About;