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
gsap.registerPlugin(ScrollTrigger);

export default function AppFeatures() {
	const container = useRef();

	useGSAP(() => {
		let tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: '.feature1',
					start: 'top 10%',
					end: 'bottom 10%',
					scrub: true,
					// markers: true,
					pin: true,
					pinSpacing: false
				}
			});
		tl1.to('.feature1',{
			opacity: 0
		});

		gsap.to('.feature2',{
			scrollTrigger: {
				trigger: '.feature2',
				start: 'top 20%',
				end: 'top 10%',
				scrub: true,
				// markers: true,
				pinSpacing: false,
				
			},
			opacity: 1,
		});

		let tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.feature2',
				start: 'top 10%',
				end: '140% 10%',
				scrub: true,
				// markers: true,
				pin: true,
				pinSpacing: false
			} 
		})
		tl2.to(".feature2",
			{
				opacity: 0,
			});

	}, { scope: container })

	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(360deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text lg:mb-10">
				App Features
			</h1>
			<div className="lg:mb-24 lg:pb-28" ref={container}>
				<div className="lg:flex justify-center items-center gap-14 lg:my-10 lg:ml-20 lg:mr-[6.5rem] feature1">
					<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={search} alt="mobile-image" />
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
				<div className="lg:flex flex-row-reverse justify-center items-center gap-14 lg:my-10 lg:ml-20 lg:mr-[6.5rem] feature2 opacity-0">
					<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={networkWithOthers} alt="mobile-image" />
						<div className="hidden md:block relative left-[126px] bottom-[87px]">
							<Image src={networkWithOthersPointer} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col m-8 lg:px-10 lg:py-20">
						<p className="text-2xl font-syne font-medium">
							Help the community to grow in their journey as a content creators
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
