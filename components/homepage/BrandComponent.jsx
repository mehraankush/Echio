import React from "react";
import { mobileCards } from "@/public/index";
import { MultiCards } from "../others/MultiCards";
import { Button } from "../others/Button";
import Image from "next/image";

export default function BrandComponent() {
	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(180deg, #000 0%, #252525 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<div className="block md:flex flex-row-reverse justify-center items-center gap-14 my-10 lg:my-[9.75rem] lg:mx-[3.5rem] mx-[2.5rem]">
				<div className="flex flex-start flex-col">
					<h1 className="text-transparent text-[2rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
						Brand
					</h1>
					<p className="text-lg font-syne text-let md:max-w-[30rem] mb-10">
						Automate your influencer marketing journey from day zero with the
						magic of data and AI, creating impact for your brand, tracking
						performance and achieving results.
					</p>
					<div className="md:hidden">
						{" "}
						{/* Hide on md and larger screens */}
						<Image src={mobileCards} alt="mobile-image" />
					</div>
					<div className="flex flex-col md:flex-row gap-6">
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
					<MultiCards
						collage="default"
						divClassName="!border-[unset] !rounded-[unset] ![border-image:unset] !border-[unset] !bg-[unset]"
						divClassNameOverride="!border-[unset] !rounded-[unset] ![border-image:unset] !border-[unset] !bg-[unset]"
						rectangleClassName="!h-[333px] !rounded-[unset] !object-cover !left-[124px] !bg-[unset] !w-[410px] !top-[36px]"
						rectangleClassNameOverride="!border-[unset] !rounded-[unset] !object-cover ![border-image:unset] !border-[unset] !bg-[unset]"
					/>
				</div>
			</div>
		</div>
	);
}
