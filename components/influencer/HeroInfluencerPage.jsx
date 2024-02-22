import Image from "next/image";
import React from "react";
import { influencerHeroImage } from "@/public/index";
import Navbar from "../Navbar";

export default function HeroInfluencerPage() {
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
				<span className="text-center text-[#43DEF3] font-syne mb-6">
					Influencer
				</span>{" "}
			</div>
			<div className="m-4 lg:flex flex-col justify-center items-center lg:mx-20 lg:my-[3rem] lg:gap-16">
				<div className="lg:pt-11">
					<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[5.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
						Exclusive Community
					</h1>
					<p className="font-syne font-bold lg:text-[4rem] text-transparent bg-gradient-to-b from-[#D9D9D9] to-transparent text-center bg-clip-text">
						For
					</p>
					<h1 className="text-center text-transparent font-syne text-[2rem] leading-none lg:text-[7.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
						Influencers
					</h1>
				</div>
				<div className="">
					<Image src={influencerHeroImage} alt="mobile-view-asset" />
				</div>
			</div>
		</div>
	);
}
