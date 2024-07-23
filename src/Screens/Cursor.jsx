import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const handleMouseMove = (event) => {
            gsap.to(cursor, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.2,
                ease: 'power2.out',
            });
        };
        const handleMouseEnter = () => {
            // gsap.to(cursor, {
            //     // scale: ,
            //     // backgroundColor: "#242424",
            //     duration: 0.2,
            //     ease: 'power2.out',
            // });
        };
        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 2,
                backgroundColor: "#70e660",
                ease: 'power2.out',
            });
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('a, button, img').forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a, button, img').forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div className='custom-cursor' ref={cursorRef}></div>;
};

export default Cursor;