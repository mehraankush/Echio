import React from "react";
import Image from "next/image";
import {
	camera,
	pen,
	computer,
	laptop,
	studioForInfluencer,
	studiotwo,
} from "@/public/index";

export default function StudioForInfluencer() {
	const cardComponents = [
		{
			id: 0,
			image: camera,
			heading: "Create Content",
		},
		{
			id: 1,
			image: pen,
			heading: "Graphic Design",
		},
		{
			id: 2,
			image: computer,
			heading: "Video Editing",
		},
		{
			id: 3,
			image: laptop,
			heading: "Channel Management",
		},
	];

	return (
		<>
			<style>
				{`
          .border-gradient {
            border-image: linear-gradient(to right, #00C5D4, #000);
            border-image-slice: 1;
        }`}
			</style>
			<div className="bg-white text-black">
				{/* download app */}
				<div className="m-6 lg:mt-5 lg:mx-20 lg:mb-10">
					<div className="lg:flex flex-col justify-center items-center gap-8 mb-10">
						<h1 className="text-transparent text-[2rem] lg:text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text">
							Studio for Influencers
						</h1>
					</div>
					<div className="lg:flex justify-evenly items-center gap-20">
						<Image
							src={studioForInfluencer}
							alt="studio-image-1"
							className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[40rem] lg:h-[41.75rem]"
						/>
						<div className="inline-block">
							{cardComponents.slice(0, 2).map((index) => (
								<div
									key={index.id}
									className="mx-6 lg:mx-0 px-4 py-6 border-b-2 border-gradient lg:max-w-[18.875rem]"
								>
									<Image src={index.image} alt="image" className="mb-3" />
									<div className="hover:scale-110 transition-all duration-500 ease-in-out">
										<h1 className="font-syne text-2xl font-medium">
											{index.heading}
										</h1>
										<p className="text-base font-syne text-[#090B0Bd]">
											Unleash your creativity and turn concepts into captivating
											content effortlessly
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="lg:flex flex-row-reverse justify-evenly items-center gap-6 lg:mb-[8rem] mb-10">
					<Image
						src={studiotwo}
						alt="studio-image-2"
						className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[40rem] lg:h-[41.75rem]"
					/>
					<div className="inline-block">
						{cardComponents.slice(2, 4).map((index) => (
							<div
								key={index.id}
								className="mx-6 lg:mx-0 px-4 py-6 border-b-2 border-gradient lg:max-w-[18.875rem]"
							>
								<Image src={index.image} alt="image" className="mb-3" />
								<div className="hover:scale-110 transition-all duration-500 ease-in-out">
									<h1 className="font-syne text-2xl font-medium">
										{index.heading}
									</h1>
									<p className="text-base font-syne text-[#090B0Bd]">
										Unleash your creativity and turn concepts into captivating
										content effortlessly
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
