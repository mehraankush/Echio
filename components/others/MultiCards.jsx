import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	collageOne,
	collageTwo,
	collageThree,
	collageBG,
} from "@/public/index";

const imageVariants = {
	hover: {
		scale: 1.1, // adjust the scale factor as needed
		transition: { duration: 0.3 },
	},
};

export const MultiCards = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			className="w-[729px] h-[582px]"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<motion.div
				className={`left-[40px] top-[91px] relative w-[703px] h-[400px] ${
					isHovered ? "scale-up" : ""
				}`}
				variants={imageVariants}
				whileHover="hover"
			>
				<motion.div className="group">
					<motion.div
						className="rounded-[4px] bg-[#ffffff14] absolute w-[402px] left-[128px] top-[40px] h-[325px]"
						variants={imageVariants}
					>
						<Image src={collageTwo} alt="collage-bg" />
					</motion.div>
					<motion.div
						className="border border-solid border-transparent left-0 top-[110px] rounded-[4px] bg-[#ffffff29] absolute transition delay-100 duration-100 ease-out w-[265px] h-[180px]"
						variants={imageVariants}
					>
						<Image src={collageOne} alt="collage-one" />
					</motion.div>
					<motion.div
						className="border border-solid border-transparent left-[438px] top-0 rounded-[4px] bg-[#ffffff29] absolute transition delay-100 duration-100 ease-out w-[265px] h-[180px]"
						variants={imageVariants}
					>
						<Image src={collageThree} alt="collage-two" />
					</motion.div>
					<motion.div
						className="border border-solid border-transparent left-[438px] top-[220px] rounded-[4px] bg-[#ffffff29] absolute transition delay-100 duration-100 ease-out w-[265px] h-[180px]"
						variants={imageVariants}
					>
						<Image src={collageBG} alt="collage-two" />
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};
