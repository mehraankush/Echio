"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Image from "next/image";
import {
	arrowRight,
	brandImage,
	influencerOne,
	influencerTwo,
	monetization,
	monetizationWhite,
	brandHero,
} from "@/public/index";

export default function HeroBrandPage() {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div className="m-4 block md:hidden">
				Home /{" "}
				<span className="text-center text-[#43DEF3] font-syne mb-6">Brand</span>{" "}
			</div>
			<div className="">
				<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					AI Driven
				</h1>
				<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
					Market Place
				</h1>
				<p className="text-[#eee] text-center font-medium font-inter text-xl m-4">
					Taking care of your requirements by driving it with AI
				</p>
				<div className="mx-4 my-6 lg:mt-10 lg:mx-20 lg:mb-[12.5rem] flex justify-center items-center">
					<div className="lg:w-[80rem] lg:h-[51.25rem] rounded-lg border border-[#C8F8FF] bg-[#d9d9d9] bg-opacity-25">
						<Image src={brandHero} alt="hero-image-brand" />
					</div>
				</div>
			</div>
			<div className="">
				<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-10">
					Our Top Features
				</h1>
				<div className="px-8 my-6 md:hidden">
					<Image src={influencerOne} alt="brand-image" />
				</div>
				<div className="lg:mb-20">
					<div className="flex justify-center items-center gap-10 mx-4 my-10 lg:mx-0 lg:ml-20 lg:mr-[6.5rem]">
						<div className="hidden lg:block" data-aos="fade-up-right">
							<Image src={influencerOne} alt="brand-image" />
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={monetizationWhite} alt="mobile-image" />
							</div>
						</div>
						<div className="lg:flex flex-col m-4 lg:px-10 lg:py-20">
							<h1 className="font-syne text-[2.5rem] font-bold mb-2 bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text text-transparent">
								Consultation
							</h1>
							<p className="text-xl font-syne font-medium lg:max-w-[39.25rem]">
								legitimate and active creators to reach out with amazing
								audience targeting, with help of precise detailing and filtering
								with our tech
							</p>
						</div>
					</div>
					<div className="lg:flex flex-row-reverse justify-center items-center gap-10 mx-4 my-10 lg:mx-0 lg:ml-20 lg:mr-[6.5rem]">
						<div
							className="lg:w-[34.25rem] lg:h-[36.1875rem]"
							data-aos="fade-up-left"
						>
							<Image src={influencerTwo} alt="mobile-image" />
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={monetizationWhite} alt="mobile-image" />
							</div>
						</div>
						<div className="lg:flex flex-col mx-4 my-8 lg:px-10 lg:py-20">
							<h1 className="font-syne text-[2.5rem] font-bold mb-2 bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text text-transparent">
								Campaign Management
							</h1>
							<p className="text-xl font-syne font-medium max-w-[39.25rem]">
								legitimate and active creators to reach out with amazing
								audience targeting, with help of precise detailing and filtering
								with our tech
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
