import React from "react";
import Image from "next/image";
import {
	studioForInfluencer,
	arrowRightWhite,
	studioForBrands,
} from "@/public/index";

export default function StudioForCreators() {
	return (
		<div className="bg-white text-black">
			<div className="lg:flex justify-center items-center gap-x-16 lg:mx-20 lg:mb-16 lg:mt-[10rem]">
				<div className="hidden md:block lg:w-[39.25rem] lg:h-[39.25rem]">
					<Image src={studioForInfluencer} alt="content-image" />
				</div>
				<div className="m-8 lg:flex flex-start flex-col">

					<div className="lg:max-w-xl text-transparent text-[2rem] lg:text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00c5d4] to-[#000] bg-clip-text flex flex-col space-y-[-2rem]">

						<span>Studio for</span>
						<span>Influencers</span>

					</div>
					<div className="block md:hidden px-6 my-6 lg:px-0 lg:my-0 lg:w-[39.25rem] lg:h-[39.25rem]">
						<Image src={studioForInfluencer} alt="content-image" />
					</div>
					<p className="text-lg font-syne text-let lg:max-w-[40rem] mb-10">
						The perfect space for creativity: Our studio caters to both brands
						and content creators and has something for everybody, providing a
						versatile environment for collaborative success.
					</p>
					<div className="lg:flex">
						<button
							className={`font-inter flex justify-center items-center bg-black text-white text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
						>
							Contact
							<span className="">
								<Image src={arrowRightWhite} alt="logo" />
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className="lg:flex flex-row-reverse justify-center items-center gap-x-16 lg:mx-20 ">
				<div className="hidden md:block lg:w-[39.25rem] lg:h-[39.25rem]">
					<Image src={studioForBrands} alt="content-image" />
				</div>
				<div className="m-8 lg:flex flex-start flex-col">
					<div className="lg:max-w-xl text-transparent text-[2rem] lg:text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00c5d4] to-[#000] bg-clip-text flex flex-col space-y-[-2rem]">

						<span>Studio for</span>
						<span>Brands</span>

					</div>
			
					<div className="block md:hidden px-6 my-6 lg:px-0 lg:my-0 lg:w-[39.25rem] lg:h-[39.25rem]">
						<Image src={studioForBrands} alt="content-image" />
					</div>
					<p className="text-lg font-syne text-let max-w-[40rem] mb-10">
						The perfect space for creativity: Our studio caters to both brands
						and content creators and has something for everybody, providing a
						versatile environment for collaborative success.
					</p>
					<div className="lg:flex">
						<button
							className={`font-inter flex justify-center items-center bg-black text-white text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
						>
							Contact
							<span className="">
								<Image src={arrowRightWhite} alt="logo" />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
