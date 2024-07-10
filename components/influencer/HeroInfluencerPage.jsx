"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import { influencerHeroImage2 } from "@/public/index";
import Navbar from "../Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function HeroInfluencerPage() {
	useEffect(() => {
		AOS.init();
	}, []);

	useGSAP(()=>{
		gsap.to('.img-rotate',{
			scrollTrigger: {
				trigger: '.img-rotate',
				start: '-70% 0%',
				end: '-10% 0%',
				// markers: true,
				scrub: true
				
			},
			transform: 'rotateY(90deg)',
		
		})

	},[]);



	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div className="ml-6 block md:hidden">
				Home /{" "}
				<span className="text-center text-[#43DEF3] font-syne mb-10">
					Influencer
				</span>{" "}
			</div>
			<div className="mt-[3.3rem] lg:flex flex-col justify-center items-center lg:mx-20 lg:my-[3rem] lg:gap-16">
				<div className="lg:pt-11 -space-y-4">
					<h1 className="pt-5 text-center text-transparent font-syne text-[2rem] lg:text-[7rem] mt-[-60px] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text ">
						Exclusive Community
					</h1>
					<p className="p-3 lg:p-0 font-syne font-bold lg:text-[4rem] text-transparent bg-gradient-to-b from-[#D9D9D9] to-transparent text-center bg-clip-text">
						For
					</p>
					<h1 className="text-center text-transparent font-syne text-[2rem] leading-none lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
						Influencers
					</h1>
				</div>
				<div className="h-[800px] px-8 py-6 ml-3">
					<Image src='/influencerHeroImage2.png' width={1000} height={1000}
					 className="h-4/5 w-auto"
					 alt="image"
					/>
				</div>
			</div>
		</div>
	);
}
