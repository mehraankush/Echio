"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import {
	serviceHeroMockup,
	serviceChat,
	monetizationWhite,
	monetizationWhiteMobile,
} from "@/public/index";
import Navbar from "../Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroServicePage() {
	useEffect(() => {
		AOS.init();
	}, []);
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
				<span className="text-center text-[#43DEF3] font-syne mb-6">
					Service Provider
				</span>{" "}
			</div>
			<div className="p-4 pt-0 lg:flex flex-col justify-center items-center">
				<h1 className="hidden block md:hidden text-left pl-6 pt-5 text-transparent text-[1.5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
					Echio For Service Provider
				</h1>
				{/* <div className="space-y-[-2rem]">
					<h1 className="hidden md:block text-center text-transparent font-syne text-[2rem] lg:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
						Echio
					</h1>
					<p className="hidden md:block text-transparent text-center font-syne text-base lg:text-[2rem] pt-2 bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
						For
					</p>
					<h1 className="hidden md:block text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
						Service Provider
					</h1>
				</div> */}
					<div className="mt-[0.5rem] lg:pt-11 -space-y-4 lg:mt-[-2.3rem] ">
					<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
						Echio
					</h1>
					<p className="p-3 lg:p-0 font-syne font-bold lg:text-[4rem] text-transparent bg-gradient-to-b from-[#D9D9D9] to-transparent text-center bg-clip-text">
						For
					</p>
					<h1 className="pt-1 text-center text-transparent font-syne text-[2rem] leading-none lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
					Service Provider
					</h1>
				</div>

				<div className="px-8 my-6 lg:px-0 lg:my-0 lg:mt-[8rem] lg:mx-20 lg:mb-[10.5rem] md:hidden flex justify-center items-center overflow-hidden">
					<Image src={serviceHeroMockup} alt="app-image" />
<<<<<<< Updated upstream
=======
				</div> */}
				<div className="h-[800px] mt-[4rem] px-8">
					<Image src='/influencerHeroImage2.png' width={1000} height={1000}
					 className="h-4/5 w-auto"
					 alt="image"
					/>
>>>>>>> Stashed changes
				</div>

				{/* <div className="m-4 text-[#eee] max-w-5xl lg:text-center font-medium font-inter text-xl">
					<p >
						Elevate your craft and expand your reach as a creative service
						provider on our platform, unlocking
					</p>
					<p>
						new opportunities for growth and
						recognition.
					</p>
				</div> */}

				<div className="lg:mt-[10rem] lg:mx-20 lg:mb-[12.5rem] hidden md:flex justify-center items-center overflow-hidden " data-aos='fade-right' data-aos-duration='1000'>
					<div className="" >
						<Image src={serviceHeroMockup} alt="app-image" />
					</div>
				</div>
			</div>
			<div className="flex md:hidden mt-[-10rem] flex-col justify-center items-center lg:mx-[5rem] lg:mt-[9.75rem]">
				<div className="m-8 lg:m-0 lg:flex flex-row-reverse justify-center items-center gap-20">
					<div className="lg:flex flex-col">
						<h1 className="text-transparent text-[2rem] my-5 lg:my-0 lg:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00C5D4] to-[#000] bg-clip-text">
							App features
						</h1>
						<p className="text-xl font-syne mb-10">
							Get work directly from influencers with zero commission
						</p>
					</div>
					<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={serviceChat} alt="mobile-image" />
						<div className="hidden md:block relative left-[176px] bottom-[30px]">
							<Image src={monetizationWhite} alt="mobile-image" />
						</div>
						<div className="relative left-[116px] bottom-[30px]">
							<Image src={monetizationWhiteMobile} alt="mobile-image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
