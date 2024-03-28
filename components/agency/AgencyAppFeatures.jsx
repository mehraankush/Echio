"use client"
import React from "react";
import Image from "next/image";
import { agencyMonetization, agencyLower, monetization } from "@/public/index";
import Parallax from "../Animation/Parallax";
import SmoothScroll from "../Animation/SmoothScroll";

export default function AgencyAppFeatures() {
	return (
		<SmoothScroll>

		<div className="lg:pt-24 lg:pb-28 text-[#090B0B]">
			<Parallax>

			<div className="lg:flex justify-center items-center gap-28 lg:py-10 lg:ml-20 lg:mr-[6.5rem]">
				<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
					<Image src={agencyMonetization} alt="mobile-image" />
					<div className="hidden md:block relative left-[176px] bottom-[87px]">
						<Image src={monetization} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col m-6 lg:px-10 lg:py-20">
					<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
						Manage your billings and financials
					</p>
				</div>
			</div>
			</Parallax>
			<div className="lg:flex flex-row-reverse justify-center items-center gap-28 lg:py-10 lg:ml-20 lg:mr-[6.5rem]">
				<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
					<Image src={agencyLower} alt="mobile-image" />
					<div className="hidden md:block relative left-[176px] bottom-[87px]">
						<Image src={monetization} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col m-6 lg:px-10 lg:py-20">
					<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
						Use our influencer pool to fulfil your client’s requirement
					</p>
				</div>
			</div>
		</div>
		</SmoothScroll>
	);
}
