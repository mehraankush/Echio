"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	collageOne,
	collageTwo,
	collageTwo2,
	collageThree,
	collageBG,
	collage2,
	collage3,
	collage4,
} from "@/public/index";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SmoothScroll from "../Animation/SmoothScroll";
gsap.registerPlugin(ScrollTrigger);

const imageVariants = {
	hover: {
		scale: 1.1, // adjust the scale factor as needed
		transition: { duration: 0.3 },
	},
};

export const MultiCards = () => {
	const container = useRef();
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useGSAP(()=>{
		gsap.to(container.current, {
			scrollTrigger:{
				trigger: container.current,
				start: 'top 90%',
				end: 'top 30%',
				// markers: true,
				scrub: true

			},
			scale: 1
		})

	},[])

	return (
		<SmoothScroll>

		<div
			className="w-[729px] h-[582px] "
			style={{
				scale: '0.6'
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={container}
		>
			<motion.div
				className={`left-[40px] top-[91px] relative w-[703px] h-[400px] ${
					isHovered ? "scale-up" : ""
				}`}
				// variants={imageVariants}
				// whileHover="hover"
			>
				<motion.div className="group">
					<motion.div
						className={`${isHovered? 'blur-sm hover:blur-0 hover:scale-110':''} rounded-[4px] bg-[#ffffff14] absolute w-[500px]  top-[60px]     transition-all ease-in-out duration-500`}
						// variants={imageVariants}
					>
						<Image src={collageTwo2} alt="collage-bg" className="object-contain" />
					</motion.div>
					{/* <motion.div
						className={`${isHovered? 'blur-sm hover:blur-0 hover:scale-110':''} border border-solid border-transparent left-0 top-[110px] rounded-[4px] bg-[#ffffff29]   absolute transition-all duration-500 ease-in-out w-[265px] h-[180px]`}
						// variants={imageVariants}
					>
						<div className="flex items-center h-full">
						<Image src={collage2} alt="collage-one" />
						</div>
					</motion.div> */}
					{/* <motion.div
						className={`${isHovered? 'blur-sm hover:blur-0 hover:scale-110':''} border border-solid border-transparent left-[438px] top-0 rounded-[4px] bg-[#ffffff29]    absolute transition-all  duration-500 ease-in-out w-[265px] h-[180px]`}
						// variants={imageVariants}
					>
						<Image src={collage3} alt="collage-two" className=" overflow-hidden object-contain  w-[265px] h-[180px]"/>
					</motion.div>
					<motion.div
						className={`${isHovered? 'blur-sm hover:blur-0 hover:scale-110':''} border border-solid border-transparent left-[438px] top-[220px] rounded-[4px] bg-[#ffffff29]      absolute transition-all duration-500 ease-in-out w-[265px] h-[180px]`}
						// variants={imageVariants}
					>
						<Image src={collage4} alt="collage-two" className="object-contain w-[265px] h-[180px]"/>
					</motion.div> */}
				</motion.div>
			</motion.div>
		</div>
		</SmoothScroll>
	);
};
