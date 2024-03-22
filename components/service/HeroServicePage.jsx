import Image from "next/image";
import React from "react";
import {
	serviceHeroMockup,
	serviceChat,
	monetizationWhite,
	monetizationWhiteMobile,
} from "@/public/index";
import Navbar from "../Navbar";

export default function HeroServicePage() {
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
			<div className="p-4 lg:flex flex-col justify-center items-center">
				<h1 className="block md:hidden text-left text-transparent text-[1.5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
					Echio For Service Provider
				</h1>
				<h1 className="hidden md:block text-center text-transparent font-syne text-[2rem] lg:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					Echio
				</h1>
				<p className="hidden md:block text-base lg:text-3xl bg-gradient-to-b from-[#D9D9D9] to-transparent text-center bg-clip-text">
					For
				</p>
				<h1 className="hidden md:block text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
					Service Provider
				</h1>
				<div className="px-8 my-6 lg:px-0 lg:my-0 lg:mt-[8rem] lg:mx-20 lg:mb-[10.5rem] md:hidden flex justify-center items-center overflow-hidden">
					<Image src={serviceHeroMockup} alt="app-image" />
				</div>
				<p className="m-4 text-[#eee] max-w-5xl lg:text-center font-medium font-inter text-xl">
					Elevate your craft and expand your reach as a creative service
					provider on our platform, unlocking new opportunities for growth and
					recognition.
				</p>
				<div className="lg:mt-[10rem] lg:mx-20 lg:mb-[12.5rem] hidden md:flex justify-center items-center overflow-hidden">
					<div className="">
						<Image src={serviceHeroMockup} alt="app-image" />
					</div>
				</div>
			</div>
			<div className="flex md:hidden flex-col justify-center items-center lg:mx-[5rem] lg:mt-[9.75rem]">
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