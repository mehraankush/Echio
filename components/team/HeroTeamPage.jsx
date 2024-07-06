"use client";
import React from "react";
import Image from "next/image";
import {
	rightArrow
} from "@/public/index";
import Navbar from "../Navbar";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cardDetails } from "@/data/teamMembers";

export default function HeroTeamPage() {


	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div className="ml-6 mb-3.5 block md:hidden">
				Home /{" "}
				<span className="text-center text-[#43DEF3] font-syne mb-6">Team</span>{" "}
			</div>
			<div className="m-8 lg:mb-[7.5rem]">
				<h1 className="text-left lg:text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
					Team
				</h1>
				<p className="text-[#eee] text-left lg:text-center font-medium font-inter text-xl mb-10">
					Meet Echio’s Expert Team Members
				</p>
				<div className="flex justify-center items-center">
					<Carousel className="w-11/12 "
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
					>
						<CarouselContent>
							{cardDetails.map((item, index) => (
								<CarouselItem key={index} className="max-w-sm">
									<div
										key={item.id}
										className=" bg-[#3E3E3E] border border-transparent hover:border-gray-200 rounded-lg shadow duration-300 ease-in-out"
									>
										<div>
											<Image
												src={item.image}
												alt="Team members"
												height={1000}
												width={1000}
												className=" h-[25rem] object-cover rounded-lg"
											/>
										</div>
										<div className="p-5">
											<h5 className="mb-2 text-2xl font-bold text-white">
												{item.name}
											</h5>
											<p className="mb-5 font-normal text-white opacity-80">
												{item.post}
											</p>
											<span className="flex justify-end cursor-pointer">
												<Image src={rightArrow} alt="arrow" />
											</span>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</div>
	);
}
