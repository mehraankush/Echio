import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	circle,
	redbull,
	booyah,
	wings,
	sadar,
	qlan,
	loco,
} from "@/public/index";
import Navbar from "../Navbar";
import { Button } from "../others/Button";

export default function HeroHomePage() {
	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div className="ml-6 mb-3.5 block md:hidden">
				Home /{" "}
				<span className="text-center text-[#43DEF3] font-syne mb-6">
					Homepage
				</span>{" "}
			</div>
			<div>
				<h1 className="text-center text-transparent font-syne text-[2rem] md:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					Makes You{" "}
					<span className="inline md:hidden text-center text-transparent font-syne text-[2rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
						Viral.
					</span>
				</h1>
				<h1 className="hidden md:block text-center text-transparent font-syne text-[2rem] md:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text ">
					Viral.
				</h1>
				<motion.div
					initial={{ scale: 1.25, rotateY: 0 }}
					animate={{ scale: 1.25, rotateY: 360 }}
					transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
					className="flex md:flex-row justify-center items-center"
				>
					<Image src={circle} alt="circle" className="" />
				</motion.div>
				<div className="mx-4 lg:relative bottom-[423px] left-[130px] max-w-[21.75rem] gap-8 flex flex-col items-center justify-center text-center">
					<p className="text-[#eee] font-syne text-lg leading-8 mt-6 lg:mt-0 text-center">
						Dive into Echio’s AI-driven ecosystem and explore the intriguing
						possibilities lying with redefined influencer experience for all.
					</p>
					<div className="w-full md:px-10 mb-10 md:mb-0">
						<Button
							button="default"
							className="![border-image:unset] !bg-white !text-black w-full md:w-fit"
							rectangleClassName="!bg-neutral-white-lite"
							text="Get Started"
						/>
					</div>
				</div>
				<div className="hidden md:flex justify-evenly items-center overflow-clip">
					<Image src={booyah} alt="logo" />
					<Image src={redbull} alt="logo" />
					<Image src={wings} alt="logo" />
					<Image src={booyah} alt="logo" />
					<Image src={sadar} alt="logo" />
					<Image src={qlan} alt="logo" />
					<Image src={loco} alt="logo" />
				</div>
			</div>
		</div>
	);
}