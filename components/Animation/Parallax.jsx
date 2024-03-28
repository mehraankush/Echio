"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollToPlugin);

const Parallax = ({ children }) => {

    const container = useRef();

    useGSAP(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 160px',
                end: 'top 50px',
                scrub: true,
                // markers: true,
                
                
            }
        })
        tl.to(container.current,
            {
                opacity: 1,
            });


        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 50px',
                end: 'bottom 50px',
                scrub: true,
                // markers: true,
                pin: true,
                pinSpacing: false
            }
        })
        tl2.to(container.current,
            {
                opacity: 0,
            });

    }, { scope: container })
    return (
        <div ref={container} className='opacity-0'>
            {children}
        </div>
    )
}
export default Parallax
