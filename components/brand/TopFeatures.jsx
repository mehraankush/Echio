import React from "react";
import Image from "next/image";
import { arrowRight, brandImage } from "@/public/index";

export default function TopFeatures() {
	return (
		<div className="">
			<h1 className="text-center text-transparent font-syne text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-10">
				Our Top Features
			</h1>
			<div className="mb-20">
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<h1 className="font-syne text-[2rem] font-bold mb-2">
							Consultation
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							legitimate and active creators to reach out with amazing audience
							targeting, with help of precise detailing and filtering with our
							tech
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<h1 className="font-syne text-[2rem] font-bold mb-2 max-w-[34.25rem]">
							Intelligent Campaign Planning and recommender systems
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							working as an assistant, suggesting you the right mix of
							influencers to help you reach your goal along with tools to
							understand and analyse the possibilities, handpicking perfection
							for you.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<h1 className="font-syne text-[2rem] font-bold mb-2">
							Campaign Management
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							legitimate and active creators to reach out with amazing audience
							targeting, with help of precise detailing and filtering with our
							tech.
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<h1 className="font-syne text-[2rem] font-bold mb-2 max-w-[34.25rem]">
							Intelligent Campaign Planning and recommender systems
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							working as an assistant, suggesting you the right mix of
							influencers to help you reach your goal along with tools to
							understand and analyse the possibilities, handpicking perfection
							for you.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<h1 className="font-syne text-[2rem] font-bold mb-2">
							Consultation
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							legitimate and active creators to reach out with amazing audience
							targeting, with help of precise detailing and filtering with our
							tech
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center gap-10 mb-[12.5rem]">
				<button
					className={`font-inter flex justify-center items-center bg-gradient-to-r from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] text-black text-xl font-medium rounded-[0.25rem] px-16 py-4 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
				>
					Sign In
					<span className="">
						<Image src={arrowRight} alt="logo" />
					</span>
				</button>
				<button
					className={`font-inter flex justify-center items-center text-white border border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] px-16 py-4 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
				>
					Login
				</button>
			</div>
		</div>
	);
}
