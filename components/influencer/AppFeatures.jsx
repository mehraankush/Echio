
import React, { useRef } from "react";
import Image from "next/image";
import {
	searchPointer,
	networkWithOthersPointer,
	search,
	networkWithOthers,
	campaigns,
	brandDeals,
	profile,
	profilePointer,
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
		tl1.to('.feature1', {
			opacity: 0
		});


	}, { scope: container })

	return (
		<SmoothScroll>

			<div
				className="mt-[-5rem]"
				style={{
					backgroundImage: `linear-gradient(360deg, #252525 0%, #000 100%)`,
					backgroundSize: "cover",
					backgroundPosition: "top",
				}}
			>
				<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
					App Features
				</h1>
				<div className="mt-5 lg:mb-24 lg:pb-28" ref={container}>
					<div className="flex flex-col lg:flex-row justify-center items-center gap-10 h-screen feature1 lg:mx-[9.5rem]">
						<div className="px-8 lg:px-0  lg:h-[70vh]">
							<Image src={networkWithOthers} alt="mobile-image" className="h-[89%] w-auto object-contain" />
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={searchPointer} alt="mobile-image" />
							</div>
						</div>
						<div className="lg:flex flex-col m-4 lg:px-10 lg:py-20">
							<h1 className="font-syne text-[2.5rem] font-bold mb-2 bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text text-transparent">
								Connect  and Collaborate <br />with Fellow Influencers
							</h1>
							<div className="text-xl font-syne font-medium lg:max-w-[35rem] text-white">
								<p>
									Connect and Collaborate with Fellow Influencers
								</p>
							</div>
						</div>
					</div>

					<Parallax>
						<div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10 h-screen lg:mx-[9.5rem]">
							<div className="px-8  lg:px-0   lg:h-[70vh]">
								<Image src={search} alt="mobile-image" className="h-[89%] w-auto object-contain" />
								<div className="hidden md:block relative left-[126px] bottom-[87px]">
									<Image src={networkWithOthersPointer} alt="mobile-image" />
								</div>
							</div>
							<div className="lg:flex flex-col m-4 lg:px-10 lg:py-20">
								<h1 className="font-syne text-[2.5rem] font-bold mb-2 bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text text-transparent">
									Exclusive Social Media Community
								</h1>
								<div className="text-xl font-syne font-medium lg:max-w-[35rem] text-white">
									<p>
										Help the community to grow in their journey as a content creators
									</p>
								</div>
							</div>
						</div>
					</Parallax>

					<Parallax>
						<div className="flex flex-col lg:flex-row justify-center items-center gap-10 h-screen lg:mx-[9.5rem]">
							<div className="px-8  lg:px-0   lg:h-[70vh]">
								<Image src={campaigns} alt="mobile-image" className="h-[89%] w-auto object-contain" />
								<div className="hidden md:block relative left-[126px] bottom-[87px]">
									<Image src={brandDeals} alt="mobile-image" />
								</div>
							</div>
							<div className="lg:flex flex-col m-4 lg:px-10 lg:py-20">
								<h1 className="font-syne text-[2.5rem] font-bold mb-2 bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text text-transparent">
									Monetization
								</h1>
								<div className="text-xl font-syne font-medium lg:max-w-[35rem] text-white">
									<p>
										Connect and Collaborate with Fellow Influencers
									</p>
								</div>
							</div>
						</div>
					</Parallax>

					<Parallax>
						<div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10 h-screen lg:mx-[9.5rem]">
							<div className="px-8  lg:px-0   lg:h-[70vh]">
								<Image src={profile} alt="mobile-image" className="h-[89%] w-auto object-contain" />
								<div className="hidden md:block relative left-[126px] bottom-[87px]">
									<Image src={profilePointer} alt="mobile-image" />
								</div>
							</div>
							<div className="lg:flex flex-col m-4 lg:px-10 lg:py-20">
								<h1 className="font-syne text-[2.5rem] font-bold mb-2 bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text text-transparent">
									Create your Work Portfolio
								</h1>
								<div className="text-xl font-syne font-medium lg:max-w-[35rem] text-white">
									<p>
										Connect and Collaborate with Fellow Influencers
									</p>
								</div>
							</div>
						</div>
					</Parallax>


				</div>
			</div>
		</SmoothScroll>

	);
}
