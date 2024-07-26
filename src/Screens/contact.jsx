import React from 'react'
import './contact.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from 'react-scroll';
gsap.registerPlugin(ScrollTrigger);


function Contact() {

    useGSAP(() => {
        gsap.from('.contact-2', {
            y: -65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.contact-2',
                scroller: "body",
                start: 'top 85%',
            }
        })
        gsap.from('.form-group', {
            y: -65,
            delay: 0.5,
            opacity: 0,
            duration: 1.1,
            scrollTrigger: {
                trigger: '.form-group',
                scroller: "body",
                start: 'top 85%',
            }
        })
        gsap.from('.submit-button', {
            y: -25,
            delay: 0.3,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: '.submit-button',
                scroller: "body",
                start: 'top 85%',
            }
        })
    })


    return (
        <Element name="contact">
            <section className="contact-section">
                <div className="contact-2">
                    <h2>Contact me</h2>
                    <div className="underline"></div>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <p>Title</p>
                        <span>
                            <input type="text" placeholder="What you're writing about?" />
                        </span>
                    </div>
                    <div className="form-group">
                        <p>Message</p>
                        <span>
                            <textarea placeholder="Full message comes here..."></textarea>
                        </span>
                    </div>
                    <button className="submit-button">Submit</button>
                </form>
            </section>
        </Element>
    )
}

export default Contact;