import React from "react";
import Image from "next/image";
import {
	cameraWhite,
	soundWhite,
	computerWhite,
	wallWhite,
	penWhite,
	laptopWhite,
	studioForInfluencer,
	studiotwo,
} from "@/public/index";

export default function ServicesWeOffer() {
	const cardComponents = [
		{
			id: 0,
			image: cameraWhite,
			heading: "Content Shoot",
		},
		{
			id: 1,
			image: soundWhite,
			heading: "Podcast Area",
		},
		{
			id: 2,
			image: computerWhite,
			heading: "Video Editing",
		},
		{
			id: 3,
			image: computerWhite,
			heading: "Product Shoot",
		},
		{
			id: 4,
			image: wallWhite,
			heading: "Green Screen Video",
		},
		{
			id: 5,
			image: penWhite,
			heading: "Graphic Designing",
		},
		{
			id: 6,
			image: laptopWhite,
			heading: "Channel Management",
		},
	];

	return (
		<>
			<style>
				{`
          .border-gradient {
            border-image: linear-gradient(to right, #19C2D9, #C8F8FF);
            border-image-slice: 1;
        }`}
			</style>
			<div className="mt-[0rem] mx-20 mb-10">
				<div className="flex flex-col justify-center items-center gap-8 mb-10">
					<h1 className="text-transparent capitalize text-[5rem] font-syne font-bold bg-gradient-to-b from-[#19C2D9] to-[#C8F8FF] bg-clip-text">
						Services We Offer
					</h1>
				</div>
				<div className="flex justify-center items-center gap-20">
					<Image
						src={studioForInfluencer}
						alt="studio-image-1"
						className="w-[40rem] h-[41.75rem]"
					/>
					<Image
						src={studiotwo}
						alt="studio-image-2"
						className="w-[40rem] h-[41.75rem]"
					/>
				</div>
			</div>
			<div className="mx-64 grid grid-cols-4 grid-rows-2 items-center gap-6 mb-[8rem]">
				{cardComponents.map((index) => (
					<div
						key={index.id}
						className="px-4 py-6 border-b-2 border-gradient max-w-[18.875rem]"
					>
						<Image src={index.image} alt="image" className="mb-3" />
						<h1 className="font-syne text-2xl font-medium">{index.heading}</h1>
						<p className="text-base font-syne text-[#090B0Bd]">
							Unleash your creativity and turn concepts into captivating content
							effortlessly
						</p>
					</div>
				))}
			</div>
		</>
	);
}
