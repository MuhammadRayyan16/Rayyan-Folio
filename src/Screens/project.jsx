import React from 'react';
import '../Screens/Css/project.css';
import shophub from "../assets/shophub.png";
import Bloodbank from "../assets/bloodbank.png";
import Solarsaver from "../assets/solarsaver.png";
import Carconnekt from "../assets/carconnekt.png";
import Quiz from "../assets/quiz.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Element } from 'react-scroll';


gsap.registerPlugin(ScrollTrigger);


function Project() {
    const Project1 = () => {
        window.location.href = 'https://shophub-dev.netlify.app/';
    };
    const Project2 = () => {
        window.location.href = 'https://blood-bankdev.netlify.app/';
    };
    const Project3 = () => {
        window.location.href = 'https://solarsaver.vercel.app/';
    };
    const Project4 = () => {
        window.location.href = 'https://carconnektdev.netlify.app/';
    };
    const Project5 = () => {
        window.location.href = 'https://quizfolio.netlify.app/';
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
        <Element name="project">
            <div id="Project" className="project-container">
                <div className="project-text">
                    <h1>Projects</h1>
                    <span></span>
                </div>
                <div className="p-main">
                    {/* Project1 */}
                    <div className="p-card pro1">
                        <div className="left">
                            <div className="container">
                                <h1>ShopHub</h1>
                                <p>ShopHub: Fast, easy, and reliable shopping for quality products.</p>
                                <span>
                                    <button>React Vite</button>
                                    <button>Gsap</button>
                                    <button>Firebase</button>
                                    <button>Netlify</button>
                                </span>
                                <div>
                                    <button onClick={Project1}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={shophub} alt="Project 1" />
                        </div>
                    </div>
                    {/* Project2 */}
                    <div className="p-card pro2">
                        <div className="left">
                            <div className="container">
                                <h1>BloodBank</h1>
                                <p>BloodBank: Quick, reliable blood donation and availability platform.</p>
                                <span>
                                    <button>React Vite</button>
                                    <button>Firebase</button>
                                    <button>React Dom</button>
                                    <button>Netlify</button>
                                </span>
                                <div>
                                    <button onClick={Project2}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={Bloodbank} alt="Project 1" />
                        </div>
                    </div>
                    {/* Project3 */}
                    <div className="p-card pro2">
                        <div className="left">
                            <div className="container">
                                <h1>Solar Saver</h1>
                                <p>Get top-quality solar panel installations for your home.</p>
                                <span>
                                    <button>React Vite</button>
                                    <button>Gsap</button>
                                    <button>React Scroll</button>
                                    <button>Vercel</button>
                                </span>
                                <div>
                                    <button onClick={Project3}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={Solarsaver} alt="Project 1" />
                        </div>
                    </div>
                    {/* Project4 */}
                    <div className="p-card pro2">
                        <div className="left">
                            <div className="container">
                                <h1>CarConnekt</h1>
                                <p>CarConnekt: Your hub for seamless car buying, selling, and connections.</p>
                                <span>
                                    <button>Html</button>
                                    <button>Css</button>
                                    <button>Javascript</button>
                                    <button>Netlify</button>
                                </span>
                                <div>
                                    <button onClick={Project4}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={Carconnekt} alt="Project 1" />
                        </div>
                    </div>
                    {/* Project5 */}
                    <div className="p-card pro3">
                        <div className="left">
                            <div className="container">
                                <h1>QuizMaster</h1>
                                <p>QuizMaster: Fun, engaging, and challenging quizzes for everyone!</p>
                                <span>
                                    <button>Next.js</button>
                                    <button>Javascript</button>
                                    <button>Netlify</button>
                                </span>
                                <div>
                                    <button onClick={Project5}>Check it  <i className="fa-solid fa-arrow-up-right-from-square"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={Quiz} alt="Project 5" />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Project;













