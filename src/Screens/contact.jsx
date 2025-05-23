// import React, { useState } from 'react';
// import '../Screens/Css/contact.css';
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Element } from 'react-scroll';
// import Swal from 'sweetalert2';

// gsap.registerPlugin(ScrollTrigger);

// function Contact() {
//     useGSAP(() => {
//         gsap.from('.contact-2', {
//             y: -65,
//             delay: 0.5,
//             opacity: 0,
//             duration: 1.1,
//             scrollTrigger: {
//                 trigger: '.contact-2',
//                 scroller: "body",
//                 start: 'top 85%',
//             }
//         });
//         gsap.from('.form-group', {
//             y: -65,
//             delay: 0.5,
//             opacity: 0,
//             duration: 1.1,
//             scrollTrigger: {
//                 trigger: '.form-group',
//                 scroller: "body",
//                 start: 'top 85%',
//             }
//         });
//         gsap.from('.submit-button', {
//             y: -25,
//             delay: 0.3,
//             opacity: 0,
//             duration: 0.6,
//             scrollTrigger: {
//                 trigger: '.submit-button',
//                 scroller: "body",
//                 start: 'top 85%',
//             }
//         });
//     });

//     const [formData, setFormData] = useState({
//         title: '',
//         message: ''
//     });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const { title, message } = formData;

//         if (!title || !message) {
//             Swal.fire("Error", "Please fill out all fields.", "error");
//             return;
//         }

//         setLoading(true);

//         setTimeout(() => {
//             Swal.fire("Success", "Message sent successfully!", "success");
//             setFormData({ title: '', message: '' });
//             setLoading(false);
//         }, 2000);
//     };

//     return (
//         <Element name="contact">
//             <section className="contact-section">
//                 <div className="contact-2">
//                     <h2>Contact me</h2>
//                     <div className="underline"></div>
//                 </div>
//                 <form className="contact-form" onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <p>Title</p>
//                         <span>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 placeholder="What you're writing about?"
//                                 value={formData.title}
//                                 onChange={handleChange}
//                             />
//                         </span>
//                     </div>
//                     <div className="form-group">
//                         <p>Message</p>
//                         <span>
//                             <textarea
//                                 name="message"
//                                 placeholder="Full message comes here..."
//                                 value={formData.message}
//                                 onChange={handleChange}
//                             ></textarea>
//                         </span>
//                     </div>
//                     <button className="submit-button" type="submit" disabled={loading}>
//                         {loading ? (
//                             <>
//                                 <span className="spinner-hireme"></span>
//                                 <p> Sending</p>
//                             </>
//                         ) : (
//                             "Submit"
//                         )}
//                     </button>
//                 </form>
//             </section>
//         </Element>
//     );
// }

// export default Contact;























import React, { useState } from 'react';
import '../Screens/Css/contact.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from 'react-scroll';
import Swal from 'sweetalert2';

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
        });
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
        });
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
        });
    });

    const [formData, setFormData] = useState({
        title: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, message } = formData;

        if (!title || !message) {
            Swal.fire("Error", "Please fill out all fields.", "error");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            Swal.fire("Success", "Message sent successfully!", "success");
            setFormData({ title: '', message: '' });
            setLoading(false);
        }, 2000);
    };

    return (
        <Element name="contact">
            <section className="contact-section">
                <div className="contact-2">
                    <h2>Contact me</h2>
                    <div className="underline"></div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>Title</p>
                        <span>
                            <input
                                type="text"
                                name="title"
                                placeholder="What you're writing about?"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </span>
                    </div>
                    <div className="form-group">
                        <p>Message</p>
                        <span>
                            <textarea
                                name="message"
                                placeholder="Full message comes here..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </span>
                    </div>
                    <button className="submit-button" type="submit" disabled={loading}>
                        {loading ? (
                            <>
                                <span className="spinner-hireme"></span>
                                <p> Sending</p>
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </section>
        </Element>
    );
}

export default Contact;
