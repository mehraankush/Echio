"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import {
	brandProductandShoot,
	brandProductOne,
	brandProductTwo,
	influencerOne,
	influencertwo,
	monetization,
} from "@/public/index";
import { Button } from "../others/Button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SmoothScroll from "../Animation/SmoothScroll";
import Parallax from "../Animation/Parallax";
gsap.registerPlugin(ScrollTrigger);



export default function BrandAndProductShoot() {
	const controlsOne = useAnimation();
	const container = useRef();

	const [refOne, inViewOne] = useInView({
		triggerOnce: true,
		rootMargin: "0px", // Adjust the rootMargin as needed
	});

	useEffect(() => {
		if (inViewOne) {
			controlsOne.start({
				scale: [1.25, 0.7, 0.9], // Scale down, then back to original
				transition: { duration: 1.5, ease: "easeInOut" },
			});
		}


	}, [controlsOne, inViewOne]);

	useEffect(() => {
		AOS.init();
	}, []);

	useGSAP(() => {
		gsap.to(container.current, {
			scrollTrigger: {
				trigger: container.current,
				start: 'top 160px',
				end: 'top 80px',
				scrub: true,
				// markers: true,
				pinSpacing: false,

			},
			opacity: 1,
			backgroundColor: 'white'
		})
	})


	return (
		<SmoothScroll>




			<div className="text-black bg-black " ref={container}>
				<Parallax>

					<div className="lg:flex justify-center items-center gap-10 h-screen ">
						<div
							className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]"
							data-aos="fade-up-right"
						>
							<Image src={influencerOne} alt="mobile-image" />
							<div className="hidden lg:block relative left-[176px] bottom-[87px]">
								<Image src={monetization} alt="mobile-image" />
							</div>
						</div>
						<div className="lg:flex flex-col m-8 lg:px-10 lg:py-20 ">

							<div className="font-syne flex flex-col text-[2rem] font-bold mb-8 max-w-xs md:max-w-[36rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
								Campaign Management
							</div>
							<p className="text-xl font-syne font-medium max-w-[34.25rem]">
								legitimate and active creators to reach out with amazing audience
								targeting, with help of precise detailing and filtering with our
								tech.
							</p>
						</div>
					</div>
				</Parallax>



				<div className="lg:flex flex-row-reverse justify-center items-center gap-10 h-screen bg-white ">
					<div
						className="px-8 py-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem] bg-white"
						data-aos="fade-up-left"
					>
						<Image src={influencertwo} alt="mobile-image" />
						<div className="hidden lg:block relative left-[176px] bottom-[87px]">
							<Image src={monetization} alt="mobile-image" />
						</div>
					</div>
					<div className="lg:flex flex-col m-8 lg:px-10 lg:py-20">
						<div className="font-syne flex flex-col text-[2rem]  font-bold mb-8 max-w-xs md:max-w-[36rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
							campaign analysis
						</div>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							legitimate and active creators to reach out with amazing audience
							targeting, with help of precise detailing and filtering with our
							tech.
						</p>
					</div>
				</div>


			</div>

			<div className="lg:flex  gap-7 justify-center items-center bg-white lg:bg-[#090B0B] text-white p-8">
				<Button
					button="default"
					className="w-full ![border-image:unset] !bg-white !text-black lg:w-[12.25rem] h-[3.75rem]"
					rectangleClassName="!bg-neutral-white-lite"
					text="Sign In"
				/>
				<button
					className={`font-inter flex justify-center items-center text-black lg:text-white border border-black mt-6 lg:mt-0 lg:border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] w-full lg:w-[12.25rem] py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
				>
					Login
				</button>
			</div>
			<div className="px-4 py-8 lg:pt-[5.25rem] lg:px-20 lg:pb-[10rem] bg-white">
				<div className="lg:flex flex-col justify-center items-center lg:mb-10 ">
					<h1 className="text-transparent text-[2rem] lg:text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text">
						Brand & Product Shoot
					</h1>
					<p className="text-[1.25rem] text-center text-[#090B0B] max-w-[50rem] mb-6">
						Explore our influencer marketing studio for unmatched creative
						excellence for your product shoots, branding and content creation
						needs.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20">
					<motion.div
						data-aos="zoom-in-up"
						ref={refOne}
						animate={controlsOne}
						initial={{ scale: 1 }}
						className="hidden md:block"
					>
						<Image src={brandProductandShoot} alt="studio-image-1" />
					</motion.div>
					<Image
						src={brandProductOne}
						alt="studio-image-1"
						className="block md:hidden"
					/>
					<Image
						src={brandProductTwo}
						alt="studio-image-1"
						className="block md:hidden"
					/>
				</div>
			</div>

		</SmoothScroll>


	);
}
