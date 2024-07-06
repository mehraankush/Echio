"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { chat, chatPointer, connectWithOthers, profile, profilePointer } from "@/public/index";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Parallax from "../Animation/Parallax";
import SmoothScroll from "../Animation/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function AppFeaturesWhite() {
	const container = useRef();

	useGSAP(() => {

		gsap.to(container.current, {
			scrollTrigger: {
				trigger: container.current,
				start: 'top 20%',
				end: 'top 10%',
				scrub: true,
				// markers: true,
				pinSpacing: false,

			},
			opacity: 1,
			backgroundColor: 'white'
		});
	}, [])


	return (

		<div className="  text-[#090B0B] -z-[10]  " ref={container}>
			{/* <Parallax>
				<div className="lg:flex justify-center items-center gap-10 h-screen ">
					<div
						className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]"
						data-aos="fade-up-right"
					>
						<Image src={profile} alt="mobile-image"  className="h-[89%] w-auto object-contain"/>
						<div className="hidden md:block relative left-[176px] bottom-[87px]">
							<Image src={profilePointer} alt="mobile-image" />
						</div>
					</div>
					<div className="lg:flex flex-col m-8 lg:px-10 lg:py-20 ">

						<div className="font-syne flex flex-col text-[2rem] font-bold mb-8 max-w-xs md:max-w-[36rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
							Create your Work Portfolio
						</div>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							Make Your Business Profile and a Premium Portfolio to get brand deals
						</p>
					</div>
				</div>
			</Parallax> */}

			<Parallax>
				<div className="lg:flex flex-row-reverse justify-center items-center gap-10 h-screen ">
					<div
						className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]"
						data-aos="fade-up-right"
					>
						<Image src={chat} alt="mobile-image" className="h-[80%] w-auto object-contain" />
						<div className="hidden lg:block relative left-[176px] bottom-[87px]">
							<Image src={connectWithOthers} alt="mobile-image" />
						</div>
					</div>
					<div className="lg:flex flex-col m-8 lg:px-10 lg:py-20 ">

						<div className="font-syne flex flex-col text-[2rem] font-bold mb-8 max-w-xs md:max-w-[36rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
							Other services for influencers
						</div>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							Content Solutions to have creative content ideas and hacks to
							optimize the quality of the content
						</p>
					</div>
				</div>
			</Parallax>

		</div>

	);
}
