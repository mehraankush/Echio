"use client"
import React, { useRef } from "react";
import Image from "next/image";
import {
	profile,
	profilePointer,
	services,
	servicesPointer,
	campaigns,
	brandDeals,
} from "@/public/index";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Parallax from "../Animation/Parallax";
import SmoothScroll from "../Animation/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function AppFeatures() {

	const container = useRef();

	useGSAP(()=>{
		gsap.to(container.current,{
			scrollTrigger: {
				trigger: container.current,
				start: 'top 20%',
				end: 'top 10%',
				scrub: true,
				// markers: true,
				pinSpacing: false,
	
			},
			opacity: 1,
			backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
			backgroundSize: "cover",
			backgroundPosition: "top",
		});
	},[])

	return (
		
		<SmoothScroll>

		<div ref={container}
			className="bg-white opacity-0"
			
		>
			<div className="lg:mt-24 lg:pb-28">
			<Parallax>

				<div className="lg:flex justify-center items-center gap-14 lg:py-10 lg:ml-20 lg:mr-[6.5rem] ">
					<div className="flex md:hidden flex-col m-8 lg:px-10 lg:py-20">
						<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
							Make Your Business Profile and a Premium Portfolio to get brand
							deals
						</p>
					</div>
					<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={profile} alt="mobile-image" />
						<div className="hidden md:block relative left-[176px] bottom-[87px]">
							<Image src={profilePointer} alt="mobile-image" />
						</div>
					</div>
					<div className="hidden md:flex flex-col m-8 lg:px-10 lg:py-20">
						<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
							Make Your Business Profile and a Premium Portfolio to get brand
							deals
						</p>
					</div>
				</div>
			</Parallax>

			<Parallax>

				<div className="lg:flex flex-row-reverse justify-center items-center gap-14 lg:py-10 lg:ml-20 lg:mr-[6.5rem]">
					<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={services} alt="mobile-image" />
						<div className="hidden md:block relative left-[176px] bottom-[87px]">
							<Image src={servicesPointer} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col m-8 lg:px-10 lg:py-20">
						<p className="text-2xl font-syne font-medium">
							Access to everyday services to enable smooth content creation
						</p>
					</div>
				</div>
			</Parallax>

			<Parallax>
				<div className="lg:grid grid-cols-2 items-center gap-x-[25rem] lg:py-10 lg:mx-[9.5rem]">
					<div className="flex md:hidden flex-col m-8 lg:px-10 lg:py-20">
						<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
							Monetization
						</p>
					</div>
					<div className="px-8 my-8 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={campaigns} alt="mobile-image" />
						<div className="hidden md:block relative left-[176px] bottom-[87px]">
							<Image src={brandDeals} alt="mobile-image" />
						</div>
					</div>
					<div className="hidden md:flex flex-col m-8 lg:px-10 lg:py-20">
						<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
							Monetization
						</p>
					</div>
				</div>
			</Parallax>
			</div>
		</div>
		</SmoothScroll>
		
	);
}
