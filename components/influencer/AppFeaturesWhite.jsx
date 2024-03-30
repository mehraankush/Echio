"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { chat, chatPointer, connectWithOthers } from "@/public/index";

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
		<SmoothScroll>

		<div className="bg-white"
		>
			<div className=" bg-black bg-transparent text-[#090B0B]" ref={container}>
				<Parallax>
					<div className="flex flex-col lg:flex-row justify-center items-center  h-screen lg:mx-[9.5rem]">
						<div className="px-8 lg:px-0  lg:h-[70vh]">
							<Image src={chat} alt="mobile-image" className="h-full w-auto"/>
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={chatPointer} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col m-8 lg:px-10 lg:py-20">
							<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
								Growth Consultations of your channel and understanding how it can be
								improved and to make it happen
							</p>
						</div>
					</div>
				</Parallax>

				<Parallax>
					<div className="flex flex-col  lg:flex-row-reverse justify-center items-center gap-10 h-screen lg:mr-[9.5rem] ">
						<div className="px-8 lg:px-0  lg:h-[70vh]">
							<Image src={chat} alt="mobile-image" className="h-full w-auto"/>
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={connectWithOthers} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col m-8 lg:px-5 lg:py-20">
							<p className="text-2xl text-right font-syne font-medium max-w-[42.25rem]">
								Content Solutions to have creative content ideas and hacks to
								optimize the quality of the content
							</p>
						</div>
					</div>
				</Parallax>

			</div>
		</div>
		</SmoothScroll>

	);
}
