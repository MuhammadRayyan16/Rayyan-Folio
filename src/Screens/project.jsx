import React from 'react';
import './project.css';
import carimage from "../assets/project1.png";
import gymimage from "../assets/project2.png";
import business from "../assets/project3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function Project() {
    const handleClick = () => {
        window.location.href = 'https://carconnektdev.netlify.app/';
    };
    const handleClick2 = () => {
        window.location.href = 'https://gymweb78.netlify.app/';
    };
    const handleClick3 = () => {
        window.location.href = 'https://businessdev.netlify.app/';
    };

    useGSAP(() => {
        gsap.from('.project-text', {
            y: -65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.project-text',
                scroller: "body",
                start: 'top 85%',
            }
        })
        gsap.from('.pro1', {
            y: 65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.pro1',
                scroller: "body",
                stanggers: true,
                start: 'top 85%',
            }
        })
        gsap.from('.pro2', {
            y: 65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.pro2',
                scroller: "body",
                stanggers: true,
                start: 'top 85%',

            }
        })
        gsap.from('.pro3', {
            y: 65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.pro3',
                scroller: "body",
                stanggers: true,
                start: 'top 85%',

            }
        })
    })


    return (
        <div id="Project" className="project-container">
            <div className="project-text">
                <h1>Projects</h1>
                <span></span>
            </div>
            <div className="project-content">
                <div className="project-one pro1">
                    <div className="one-description">
                        <h1>Parapantest</h1>
                        <p>Quizzes and exam simulation for
                            paragliding pilots.</p>
                        <button>Html</button>
                        <button>Css</button>
                        <button>Javascrip</button>
                        <button>Vs code</button>
                        <div className="check-btn">
                            <button onClick={handleClick}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                        </div>
                    </div>
                    <div className="project-image">
                        <img src={carimage} alt="Project 1" />
                    </div>
                </div>
            </div>
            {/* PROJECT 2 */}
            <div className="project-content">
                <div className="project-one pro2">
                    <div className="one-description">
                        <h1>Parapantest</h1>
                        <p>Quizzes and exam simulation for
                            paragliding pilots.</p>
                        <button>Html</button>
                        <button>Css</button>
                        <button>Javascrip</button>
                        <button>Vs code</button>
                        <div className="check-btn">
                            <button onClick={handleClick2}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                        </div>
                    </div>
                    <div className="project-image">
                        <img src={gymimage} alt="Project 2" />
                    </div>
                </div>
            </div>
            {/* PROJECT 3 */}
            <div className="project-content">
                <div className="project-one pro3">
                    <div className="one-description">
                        <h1>Parapantest</h1>
                        <p>Quizzes and exam simulation for
                            paragliding pilots.</p>
                        <button>Html</button>
                        <button>Css</button>
                        <button>Javascrip</button>
                        <button>Vs code</button>
                        <div className="check-btn">
                            <button onClick={handleClick3}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                        </div>
                    </div>
                    <div className="project-image">
                        <img src={business} alt="Project 3" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Project;