
import React, { useRef } from "react";
import Image from "next/image";
import {
	searchPointer,
	networkWithOthersPointer,
	search,
	networkWithOthers,
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

	useGSAP(() => {
		let tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: '.feature1',
					start: 'top 0%',
					end: 'bottom 0%',
					scrub: true,
					// markers: true,
					pin: true,
					pinSpacing: false
				}
			});
		tl1.to('.feature1',{
			opacity: 0
		});


	}, { scope: container })

	return (
		<SmoothScroll>

			<div
				className="pt-20"
				style={{
					backgroundImage: `linear-gradient(360deg, #252525 0%, #000 100%)`,
					backgroundSize: "cover",
					backgroundPosition: "top",
				}}
			>
				<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
					App Features
				</h1>
				<div className="lg:mb-24 lg:pb-28" ref={container}>
					<div className="flex flex-col lg:flex-row justify-center items-center gap-10 h-screen feature1 lg:mx-[9.5rem]">
						<div className="px-8 lg:px-0  lg:h-[70vh]">
							<Image src={search} alt="mobile-image"  className="h-full w-auto" />
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={searchPointer} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col m-8 lg:px-10 lg:py-20">
							<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
								Connect with other influencers directly for mentorship and
								collaboration
							</p>
						</div>
					</div>

					<Parallax>

					<div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10 h-screen lg:mx-[9.5rem]">
						<div className="px-8  lg:px-0   lg:h-[70vh]">
							<Image src={networkWithOthers} alt="mobile-image" className="h-full w-auto" />
							<div className="hidden md:block relative left-[126px] bottom-[87px]">
								<Image src={networkWithOthersPointer} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col m-8 lg:px-10 lg:py-20">
							<p className="text-2xl text-left font-syne font-medium">
								Help the community to grow in their journey as a content creators
							</p>
						</div>
					</div>
					</Parallax>
				</div>
			</div>
		</SmoothScroll>

	);
}
