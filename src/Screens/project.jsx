import React from 'react';
// import './project.css';
import './project-new.css';
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

    // useGSAP(() => {
    //     gsap.from('.project-text', {
    //         y: -65,
    //         delay: 0.5,
    //         opacity: 0,
    //         duration: 1.1,
    //         scrollTrigger: {
    //             trigger: '.project-text',
    //             scroller: "body",
    //             start: 'top 85%',
    //         }
    //     })
    //     gsap.from('.pro1', {
    //         y: 65,
    //         delay: 0.5,
    //         opacity: 0,
    //         duration: 1.1,
    //         scrollTrigger: {
    //             trigger: '.pro1',
    //             scroller: "body",
    //             stanggers: true,
    //             start: 'top 85%',
    //         }
    //     })
    //     gsap.from('.pro2', {
    //         y: 65,
    //         delay: 0.5,
    //         opacity: 0,
    //         duration: 1.1,
    //         scrollTrigger: {
    //             trigger: '.pro2',
    //             scroller: "body",
    //             stanggers: true,
    //             start: 'top 85%',
    //         }
    //     })
    //     gsap.from('.pro3', {
    //         y: 65,
    //         delay: 0.5,
    //         opacity: 0,
    //         duration: 1.1,
    //         scrollTrigger: {
    //             trigger: '.pro3',
    //             scroller: "body",
    //             stanggers: true,
    //             start: 'top 85%',
    //         }
    //     })
    // })


    return (
        <div id="Project" className="project-container">
            <div className="project-text">
                <h1>Projects</h1>
                <span></span>
            </div>
            <div className="p-main">
                <div className="p-card">
                    <div className="left">
                        <div className="container">
                            <h1>Parapantest</h1>
                            <p>Quizzes and exam simulation for paragliding pilots.</p>
                            <span>
                                <button>Html</button>
                                <button>Css</button>
                                <button>Javascript</button>
                                <button>Vs code</button>
                            </span>
                            <div>
                                <button onClick={handleClick}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={carimage} alt="Project 1" />
                    </div>
                </div>
                <div className="p-card">
                    <div className="left">
                        <div className="container">
                            <h1>Parapantest</h1>
                            <p>Quizzes and exam simulation for paragliding pilots.</p>
                            <span>
                                <button>Html</button>
                                <button>Css</button>
                                <button>Javascript</button>
                                <button>Vs code</button>
                            </span>
                            <div>
                                <button onClick={handleClick}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={gymimage} alt="Project 1" />
                    </div>
                </div>
                <div className="p-card">
                    <div className="left">
                        <div className="container">
                            <h1>Parapantest</h1>
                            <p>Quizzes and exam simulation for paragliding pilots.</p>
                            <span>
                                <button>Html</button>
                                <button>Css</button>
                                <button>Javascript</button>
                                <button>Vs code</button>
                            </span>
                            <div>
                                <button onClick={handleClick}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={business} alt="Project 1" />
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Project;