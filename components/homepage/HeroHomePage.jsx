"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	circle,
	redbull,
	booyah,
	wings,
	sadar,
	qlan,
	loco,
} from "@/public/index";
import Navbar from "../Navbar";
import { Button } from "../others/Button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function HeroHomePage() {

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.container',
				start: '-35px 0%',
				end: 'bottom 0%',
				pin: true,
				// markers: true, 
				// pinSpacing: false,
				scrub: true,

			}
		})

		gsap.to('.ring-light', {

			scrollTrigger: {
				trigger: '.ring-light',
				start: 'top 0%',
				end: 'bottom 50%',
				pin: true,
				// markers: true,

				scrub: true

			},
		})

		tl.to('.ring-image', {
			scale: 2,
			opacity:0
		})





	}, [])


	return (
		<div
			className="relative"
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>

			<motion.div
				className="flex min-h-screen flex-col justify-end py-10 items-center ring-light gap-28"
			>
				

				<Image src={circle} alt="circle" className="lg:h-screen w-auto scale-0 ring-image" />
				

	
			<marquee behavior="alternate" direction="" className='' scrollamount='10'>

				<div className="hidden md:flex  justify-evenly items-center overflow-clip">
					<Image src={booyah} alt="logo" />
					<Image src={redbull} alt="logo" />
					<Image src={wings} alt="logo" />
					<Image src={booyah} alt="logo" />
					<Image src={sadar} alt="logo" />
					<Image src={qlan} alt="logo" />
					<Image src={loco} alt="logo" />
				</div>
			</marquee>
			</motion.div>

			<div className="min-h-screen  container absolute top-9 ">
				<Navbar />
				<div className="ml-6 mb-3.5 block md:hidden">
					Home /{" "}
					<span className="text-center text-[#43DEF3] font-syne mb-6">
						Homepage
					</span>{" "}
				</div>
				<div>
					<h1 className="text-center text-transparent font-syne text-[2rem] md:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
						Makes You{" "}
						<span className="inline md:hidden text-center text-transparent font-syne text-[2rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
							Viral.
						</span>
					</h1>
					<h1 className="hidden md:block text-center text-transparent font-syne text-[2rem] md:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text ">
						Viral.
					</h1>





				</div>


				<div className="self-start md:mx-[8rem] max-w-auto md:max-w-[21.75rem] gap-8 flex flex-col items-center justify-center text-center">
					<p className="text-[#eee] font-syne text-lg leading-8 mt-6 lg:mt-0 text-center">
						Dive into Echio’s AI-driven ecosystem and explore the intriguing
						possibilities lying with redefined influencer experience for all.
					</p>
					<div className="w-full px-10 mb-10 md:mb-0">
						<Button
							button="default"
							className="![border-image:unset] !bg-white !text-black w-full md:w-fit"
							rectangleClassName="!bg-neutral-white-lite"
							text="Get Started"
						/>
					</div>
				</div>



			</div>
		</div>
	);
}
