import React from "react";
import Image from "next/image";
import {
	brandProductandShoot,
	influencerOne,
	influencerTwo,
	monetization,
} from "@/public/index";
import { Button } from "../others/Button";

export default function BrandAndProductShoot() {
	return (
		<div className="bg-white text-black">
			<div className="mt-20">
				<div className="lg:flex justify-center items-center gap-10 lg:my-10 lg:ml-20 lg:mr-[6.5rem]">
					<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={influencerOne} alt="mobile-image" />
						<div className="hidden lg:block relative left-[176px] bottom-[87px]">
							<Image src={monetization} alt="mobile-image" />
						</div>
					</div>
					<div className="lg:flex flex-col m-8 lg:px-10 lg:py-20">
						<h1 className="font-syne text-[2rem] lg:text-[2.5rem] font-bold mb-8 max-w-xs md:max-w-[34.25rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
							Intelligent Campaign Planning and recommender systems
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							legitimate and active creators to reach out with amazing audience
							targeting, with help of precise detailing and filtering with our
							tech.
						</p>
					</div>
				</div>
				<div className="lg:flex flex-row-reverse justify-center items-center gap-10 lg:my-10 lg:ml-20 lg:mr-[6.5rem]">
					<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
						<Image src={influencerTwo} alt="mobile-image" />
						<div className="hidden lg:block relative left-[176px] bottom-[87px]">
							<Image src={monetization} alt="mobile-image" />
						</div>
					</div>
					<div className="lg:flex flex-col m-8 lg:px-10 lg:py-20">
						<h1 className="font-syne text-[2rem] lg:text-[2.5rem] font-bold mb-8 max-w-xs lg:max-w-[34.25rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
							Intelligent Campaign Planning and recommender systems
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							legitimate and active creators to reach out with amazing audience
							targeting, with help of precise detailing and filtering with our
							tech.
						</p>
					</div>
				</div>
			</div>
			<div className="lg:flex justify-center items-center gap-10 lg:mb-[5.25rem] lg:mt-[4.75rem] lg:bg-[#090B0B] text-white p-8">
				<Button
					button="default"
					className="w-full ![border-image:unset] !bg-white !text-black lg:w-[12.25rem] h-[3.75rem]"
					rectangleClassName="!bg-neutral-white-lite"
					text="Sign In"
				/>
				<button
					className={`font-inter flex justify-center items-center text-black lg:text-white border border-black mt-6 lg:mt-0 lg:border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] w-full lg:w-[12.25rem] py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
				>
					Login
				</button>
			</div>
			<div className="mx-4 my-8 lg:mt-[5.25rem] lg:mx-20 lg:mb-[10rem]">
				<div className="lg:flex flex-col justify-center items-center gap-8 lg:mb-10">
					<h1 className="text-transparent text-[2rem] lg:text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text">
						Brand & Product Shoot
					</h1>
					<p className="text-[1.25rem] text-[#090B0B] max-w-[50rem] mb-6">
						Explore our influencer marketing studio for unmatched creative
						excellence for your product shoots, branding and content creation
						needs.
					</p>
				</div>
				<div className="lg:flex justify-center items-center gap-20">
					<Image src={brandProductandShoot} alt="studio-image-1" />
				</div>
			</div>
		</div>
	);
}
