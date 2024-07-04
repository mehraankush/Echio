"use client";
import React, { useEffect } from "react";
import {
	mobileCards,
	redbull,
	booyah,
	wings,
	sadar,
	qlan,
	loco,
} from "@/public/index";
import { MultiCards } from "../others/MultiCards";
import { Button } from "../others/Button";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


export default function BrandComponent() {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div
			className="h-[100vh]"
			style={{
				backgroundImage: `linear-gradient(180deg, #000 0%, #252525 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<div className="w-auto">

				<marquee behavior="alternate" direction="" className='w-auto' scrollamount='10'>

					<div className="hidden md:flex  justify-evenly items-center ">
						<Image src={booyah} alt="logo" />
						<Image src={redbull} alt="logo" />
						<Image src={wings} alt="logo" />
						<Image src={booyah} alt="logo" />
						<Image src={sadar} alt="logo" />
						<Image src={qlan} alt="logo" />
						<Image src={loco} alt="logo" />
					</div>
				</marquee>
			</div>
			<div className="block md:flex flex-row-reverse justify-center items-center gap-14 my-[5rem] lg:my-[5rem] lg:mx-[3.5rem] mx-[2.5rem]">
				<div className="flex flex-start flex-col mt-[-80px]">
					<h1 className="text-transparent text-[2rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
						Brand
					</h1>
					<p className="text-lg font-syne text-let md:max-w-[30rem] mb-10 text-white">
						Automate your  marketing journey from day zero with the
						magic of data and AI, creating impact for your brand, tracking
						performance and achieving results.
					</p>
					<div className="md:hidden">
						{" "}
						{/* Hide on md and larger screens */}
						<Image
							src={mobileCards}
							alt="mobile-image"
							data-aos="fade-up-right"
						/>
					</div>
					<div className="flex flex-col md:flex-row gap-4">
						<Button
							button="default"
							className="![border-image:unset] !bg-white !text-black"
							rectangleClassName="!bg-neutral-white-lite"
							text="Brand Login"
						/>
						<button
							className={`font-inter flex justify-center items-center text-white border border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] px-6 py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-none`}
						>
							More Details
						</button>
					</div>
				</div>
				<div className="hidden md:block">
					{" "}
					<MultiCards />
				</div>
			</div>


		</div>
	);
}
