import Image from "next/image";
import React from "react";
import {
	studioHeroImage,
	cameraWhite,
	soundWhite,
	computerWhite,
	wallWhite,
	penWhite,
	laptopWhite,
	studioForInfluencer,
	serviceNewFirst,
	serviceNewSecond,
	studioForBrands,
	serviceMobile,
} from "@/public/index";
import Navbar from "../Navbar";

export default function HeroStudioPage() {
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
			<div
				style={{
					backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
					backgroundSize: "cover",
					backgroundPosition: "top",
				}}
			>
				<Navbar />
				<div className="ml-8 mb-3.5 block md:hidden">
					Home /{" "}
					<span className="text-center text-[#43DEF3] font-syne mb-6">
						Studio
					</span>{" "}
				</div>
				<div className="mx-8 lg:m-0">
					<h1 className="text-left lg:text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
						Our Studio
					</h1>
					<p className="text-left mb-5 text-[#eee] lg:text-center font-medium font-inter text-xl">
						At Mayur Vihar Phase-1, Delhi-NCR
					</p>
					<div className="lg:flex justify-center items-center lg:mt-10 lg:mx-20 lg:mb-[12.5rem]">
						<div className="rounded-lg border border-[#C8F8FF] bg-[#d9d9d9] bg-opacity-25">
							<Image src={studioHeroImage} alt="hero-image" />
						</div>
					</div>
				</div>
				<style>
					{`
          .border-gradient {
            border-image: linear-gradient(to right, #19C2D9, #C8F8FF);
            border-image-slice: 1;
        }`}
				</style>
				<div className="m-6 lg:m-0 lg:mt-[6.15rem] lg:mx-20 lg:mb-10">
					<div className="lg:flex flex-col justify-center items-center gap-8 lg:mb-10">
						<h1 className="text-transparent text-[2rem] lg:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#19C2D9] to-[#C8F8FF] bg-clip-text">
							Services we offer
						</h1>
					</div>
					<div className="lg:flex justify-evenly items-center gap-20">
						<Image
							src={serviceNewFirst}
							alt="studio-image-1"
							className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[40rem] lg:h-[41.75rem]"
						/>
						<div className="inline-block">
							{cardComponents.slice(0, 3).map((index) => (
								<div
									key={index.id}
									className="mx-6 lg:mx-0 px-4 py-6 border-b-2 border-gradient lg:max-w-[18.875rem]"
								>
									<Image src={index.image} alt="image" className="mb-3" />
									<h1 className="font-syne text-2xl font-medium">
										{index.heading}
									</h1>
									<p className="text-base font-syne text-[#090B0Bd]">
										Unleash your creativity and turn concepts into captivating
										content effortlessly
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="m-8 lg:m-0 lg:flex flex-row-reverse justify-evenly items-center gap-6 mb-10 lg:mb-[8rem]">
					<Image
						src={serviceNewSecond}
						alt="studio-image-2"
						className="hidden md:block px-8 my-6 lg:px-0 lg:my-0 lg:w-[40rem] lg:h-[41.75rem]"
					/>
					<Image
						src={serviceMobile}
						alt="studio-image-2"
						className="block w-full h-full md:hidden"
					/>
					<div className="inline-block">
						{cardComponents.slice(4, 7).map((index) => (
							<div
								key={index.id}
								className="mx-6 lg:mx-0 px-4 py-6 border-b-2 border-gradient lg:max-w-[18.875rem]"
							>
								<Image src={index.image} alt="image" className="mb-3" />
								<h1 className="font-syne text-2xl font-medium">
									{index.heading}
								</h1>
								<p className="text-base font-syne text-[#090B0Bd]">
									Unleash your creativity and turn concepts into captivating
									content effortlessly
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}