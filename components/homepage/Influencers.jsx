"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	arrowRightWhite,
	influencerone,
	influencerTwoNew,
	brandImageHome,
} from "@/public/index";
import AOS from "aos";
import "aos/dist/aos.css";


// const imageVariants = {
// 	hover: {
// 		rotate: 360,
// 		transition: { duration: 1.5, ease: "easeInOut" },
// 	},
// 	whileNotHover: {
// 		scale: 1, // Reset the scale when not hovering
// 		rotate: 0, // Reset the rotate when not hovering
// 		transition: { duration: 1.5, ease: "easeInOut" },
// 	},
// 	exit: {
// 		opacity: 0,
// 		transition: { duration: 0.5 },
// 	},
// 	scrollRotate: {
// 		rotate: [0, 0, 360], // Rotate 360 degrees on scroll
// 		transition: { duration: 2, ease: "easeInOut" },
// 	},
// };

const buttonVariants = {
	hover: {
		scale: 1.1,
		transition: { duration: 0.3 },
	},
};

export default function Influencers() {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className="bg-white text-black flex flex-col ">
			<div className="relative mx-6  md:mx-[5rem] h-screen flex flex-col justify-center items-center feature z-[1]">
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
					<div className="flex flex-col">
						<h1 className="text-transparent text-[2rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00C5D4] to-[#000] bg-clip-text">
							Influencers
						</h1>
						<div
							className="md:hidden p-5 mx-auto md:w-[34.25rem] md:h-[36.1875rem]"
							data-aos="flip-up"
						>
							<motion.div
								// variants={imageVariants}
								whileHover="hover"
								whileTap="hover"
								whileNotHover="whileNotHover"
								exit="exit"
								initial="whileNotHover"
								animate="whileNotHover"
								className="group"
							>
								<Image src={influencerone}  alt="mobile-image" />
							</motion.div>
						</div>
						<p className="text-lg font-syne text-left max-w-[30rem] mb-10">
							Automate your influencer marketing journey from day zero with the
							magic of data and AI, creating impact for your brand, tracking
							performance and achieving results.
						</p>
						<div className="flex flex-col md:flex-row gap-6">
							<motion.button
								variants={buttonVariants}
								whileHover="hover"
								className={`font-inter flex justify-center items-center bg-black text-white text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
							>
								View Services
								<span className="">
									<Image src={arrowRightWhite} alt="logo" />
								</span>
							</motion.button>
							<motion.button
								variants={buttonVariants}
								whileHover="hover"
								className={`font-inter flex justify-center items-center text-black border border-[#090B0B] text-xl font-medium rounded-[0.25rem] px-6 py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
							>
								More Details
							</motion.button>
						</div>
					</div>
					<div
						className="hidden md:flex md:w-[34.25rem] md:h-fit"
						data-aos="fade-up"
					>
						<motion.div
							// variants={imageVariants}
							whileHover="hover"
							whileTap="hover"
							whileNotHover="whileNotHover"
							exit="exit"
							initial="whileNotHover"
							animate="whileNotHover"
							className="group"
						>
							<Image src={influencerone} alt="mobile-image" />
						</motion.div>
					</div>
				</div>
			</div>

			<div className= "relative  mx-6 md:mx-[5rem] h-screen flex flex-col justify-center items-center z-[2] bg-white">
				<div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 md:gap-20">
					<div className="flex flex-col">
						<h1 className="text-transparent text-[2rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00C5D4] to-[#000] bg-clip-text">
							 Brand
						</h1>
						<div className="md:hidden mx-auto m-4">
							<motion.div
								// variants={imageVariants}
								whileHover="hover"
								whileTap="hover"
								whileNotHover="whileNotHover"
								exit="exit"
								initial="whileNotHover"
								animate="whileNotHover"
								className="group"
							>
								<Image src={influencerTwoNew} alt="mobile-image" />
							</motion.div>
						</div>
						<p className="text-lg font-syne text-let max-w-[30rem] mb-10">
							The right exposure to your pinpoint audience, funneling bright
							opportunities directly to you, where it matters the most.
						</p>
						<div className="flex flex-col md:flex-row gap-6">
							<motion.button
								variants={buttonVariants}
								whileHover="hover"
								className={`font-inter flex justify-center items-center bg-black text-white text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
							>
								View Services
								<span className="">
									<Image src={arrowRightWhite} alt="logo" />
								</span>
							</motion.button>
							<motion.button
								variants={buttonVariants}
								whileHover="hover"
								className={`font-inter flex justify-center items-center text-black border border-[#090B0B] text-xl font-medium rounded-[0.25rem] px-6 py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
							>
								More Details
							</motion.button>
						</div>
					</div>
					<div
						className="hidden md:block md:w-[34.25rem] md:h-[36.1875rem]"
						data-aos="fade-up"
					>
						<motion.div
							// variants={imageVariants}
							whileHover="hover"
							whileTap="hover"
							whileNotHover="whileNotHover"
							exit="exit"
							initial="whileNotHover"
							animate="whileNotHover"
							className="group"
						>
							<Image src={brandImageHome} alt="mobile-image" />
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
