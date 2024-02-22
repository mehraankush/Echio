"use client";
import React from "react";
import Image from "next/image";
import {
	himanshuOne,
	himanshuTwo,
	himanshuThree,
	himanshuFour,
	rightArrow,
} from "@/public/index";
import Navbar from "../Navbar";

export default function HeroTeamPage() {
	const cardDetails = [
		{
			id: 0,
			image: himanshuOne,
			name: "Himanshu Singh",
			post: "Founder And CEO",
		},
		{
			id: 2,
			image: himanshuTwo,
			name: "Piyush Kr. Vikram",
			post: "Co-founder and COO",
		},
		{
			id: 3,
			image: himanshuThree,
			name: "Pankaj",
			post: "Co-Founder and CTO",
		},
		{
			id: 4,
			image: himanshuFour,
			name: "Abhishek Bisht",
			post: "CMO",
		},
	];

	return (
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
				<span className="text-center text-[#43DEF3] font-syne mb-6">Team</span>{" "}
			</div>
			<div className="m-8 lg:mb-[7.5rem]">
				<h1 className="text-left lg:text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
					Team
				</h1>
				<p className="text-[#eee] text-left lg:text-center font-medium font-inter text-xl mb-10">
					Meet Echio’s Expert Team Members
				</p>
				<div className="flex items-center justify-center">
					<div className="hidden md:flex justify-center gap-10 items-center">
						{cardDetails.slice(0, 3).map((item) => (
							<div
								key={item.id}
								className="max-w-sm bg-[#3E3E3E] hover:border hover:border-gray-200 rounded-lg shadow mb-8"
							>
								<Image
									src={item.image}
									alt="random"
									className="w-fit h-fit overflow-y-clip"
								/>
								<div className="p-5">
									<h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
										{item.name}
									</h5>
									<p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
										{item.post}
									</p>
									<span className="flex justify-end">
										<Image src={rightArrow} alt="arrow" />
									</span>
								</div>
							</div>
						))}
					</div>
					<div className="hidden lg:flex justify-center items-center">
						{cardDetails.slice(3, 4).map((item) => (
							<div
								key={item.id}
								className="static lg:relative max-w-sm bg-[#3E3E3E] hover:border hover:border-gray-200 rounded-xl shadow my-0 mx-10 bottom-[15px]"
							>
								<Image
									src={item.image}
									alt="random"
									className="w-[400px] h-fit overflow-clip"
								/>
								<div className="p-5">
									<h5 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
										{item.name}
									</h5>
									<p className="mb-3.5 font-normal text-gray-700 dark:text-gray-400">
										{item.post}
									</p>
									<span className="flex justify-end">
										<Image src={rightArrow} alt="arrow" />
									</span>
								</div>
							</div>
						))}
					</div>
					<div className="grid md:hidden justify-center gap-10 items-center">
						{cardDetails.map((item) => (
							<div
								key={item.id}
								className="max-w-sm bg-[#3E3E3E] hover:border hover:border-gray-200 rounded-lg shadow mb-8"
							>
								<Image
									src={item.image}
									alt="random"
									className="w-fit h-fit overflow-y-clip"
								/>
								<div className="p-5">
									<h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
										{item.name}
									</h5>
									<p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
										{item.post}
									</p>
									<span className="flex justify-end">
										<Image src={rightArrow} alt="arrow" />
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
