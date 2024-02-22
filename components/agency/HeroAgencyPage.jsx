import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import {
	brandHero,
	agencyMonetization,
	monetizationWhite,
	agencyLower,
} from "@/public/index";

export default function HeroAgencyPage() {
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
					Agency
				</span>{" "}
			</div>
			<div className="lg:flex flex-col justify-center items-center m-4">
				<h1 className="lg:max-w-7xl text-center text-transparent font-syne text-[2rem] lg:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					Influencer Marketing Agency
				</h1>
				<p className="text-transparent text-center font-syne text-base lg:text-[2rem] font-bold bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					As
				</p>
				<h1 className="text-transparent font-syne text-center text-[2rem] lg:text-[6.25rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
					Echio’s Partner
				</h1>
				<p className="text-[#eee] m-4 lg:max-w-5xl lg:text-center font-medium font-inter text-xl">
					Grow your agency&apos;s impact - Partner with @Echio and unlock a
					world of unparalleled growth opportunities for you, your influencers
					and your brand partners
				</p>
				<div className="m-4 lg:mt-10 lg:mx-20 lg:mb-[12.5rem] lg:flex justify-center items-center">
					<div className="lg:w-[80rem] lg:h-[51.25rem] rounded-lg border border-opacity-60 bg-[#d9d9d9] bg-opacity-25">
						<Image src={brandHero} alt="hero-image-brand" />
					</div>
				</div>
			</div>
			<div className="my-10 lg:my-0">
				<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-10">
					App Features
				</h1>
				<div className="lg:mb-24 lg:pb-28">
					<div className="lg:flex justify-center items-center gap-14 lg:my-10 lg:ml-20 lg:mr-[6.5rem]">
						<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
							<Image src={agencyMonetization} alt="mobile-image" />
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={monetizationWhite} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col m-8 lg:px-10 lg:py-20">
							<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
								Register your influencer and get access of tools to manage them
								and track their progress.
							</p>
						</div>
					</div>
					<div className="lg:flex flex-row-reverse justify-center items-center gap-32 lg:my-10 lg:ml-20 lg:mr-[6.5rem]">
						<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
							<Image src={agencyLower} alt="mobile-image" />
							<div className="hidden md:block relative left-[176px] bottom-[87px]">
								<Image src={monetizationWhite} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col m-8 lg:px-10 lg:py-20">
							<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
								Earn commissions when you influencers deliver work for brands
								not associated with you
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
