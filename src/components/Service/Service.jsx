import React, { useEffect, useRef } from 'react';
import './Service.css';
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';

function Service() {
    const titlesRef = useRef([]);

    useEffect(() => {
        const titles = titlesRef.current;

        const tl = gsap.timeline({ repeat: -1 });

        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);

            tl.from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: 0.02,
            }, "<")
            .to(splitTitle.chars, {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: 0.02,
            }, "<1");
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div>
            <div className="service-container">
                <div className='text-wrapper'>
                    <h1 ref={el => titlesRef.current.push(el)}>FRONTEND DEV</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>UI/UX DESIGN</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>MOTION GRAPHICS</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>LOGO DESIGN</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>DRIFTER</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>IDENTITY GURU</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>SWIFTPEEK</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>DEVGURU</h1>
                    <h1 ref={el => titlesRef.current.push(el)}>FRONTENDER</h1>
                </div>
            </div>
        </div>
    );
}

export default Service;
