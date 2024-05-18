import Image from "next/image";
import React from "react";
import {
	HimanshuMishra,
	NishantMishra,
	AkhilChoudhary,
	DhruvSapra,
	KomaliAvadhani,
} from "@/public/index";

export default function OurInvestor() {
	const cardDetails = [
		{
			id: 0,
			image: HimanshuMishra,
			heading: "Himanshu Mishra",
			position: "Founder, Forethought Integrated Infotech Private Limited",
		},
		{
			id: 2,
			image: NishantMishra,
			heading: "Nishant Mishra",
			position: "Founder, The Higher Pitch Digital Consulting Private Limited",
		},
		{
			id: 3,
			image: AkhilChoudhary,
			heading: "Akhil Choudhary",
			position: "Founder and Chairman, Binary Semantics Limited.",
		},
		{
			id: 4,
			image: DhruvSapra,
			heading: "Dhruv Sapra",
			position: "Founder, Aurora Digital Media ",
		},
		{
			id: 5,
			image: KomaliAvadhani,
			heading: "Komali Avadhani",
			position: "Angel Investor",
		},
	];

	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(360deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
				Our Investors
			</h1>
			<p className="text-[#eee] text-center font-medium font-inter text-xl">
				People who have invested in our company
			</p>
			<div className="m-8 lg:mx-20 lg:mb-24 lg:mt-28 text-[#eee]">
				{/* top 3 */}
				<div className="lg:mx-20 lg:my-36 lg:flex grid justify-center gap-[8rem] lg:gap-10 items-center">
					{cardDetails.slice(0, 3).map((item) => (
						<div
							key={item.id}
							className="h-[18rem] max-w-sm bg-[#1c1c1c] hover:border hover:border-gray-200 rounded-lg mb- px-10"
						>
							<div className="flex justify-center items-center relative bottom-[86px]">
								<Image src={item.image} alt="random" />
							</div>
							<div className="relative bottom-[65px] font-syne text-center">
								<h5 className="mb-2 text-2xl font-bold">{item.heading}</h5>
								<p className="mb-5 font-normal">{item.position}</p>
							</div>
						</div>
					))}
				</div>
				<div className="block md:hidden h-[8rem]" />
				{/* bottom 2 */}
				<div className="lg:mx-20 lg:my-10 lg:flex grid justify-center gap-[8rem] lg:gap-10 items-center">
					{cardDetails.slice(3, 5).map((item) => (
						<div
							key={item.id}
							className="lg:h-[18rem] lg:w-[26rem] bg-[#1c1c1c] hover:border hover:border-gray-200 rounded-lg px-10"
						>
							<div className="flex justify-center items-center relative bottom-[86px]">
								<Image src={item.image} alt="random" />
							</div>
							<div className="relative bottom-[65px] font-syne text-center">
								<h5 className="mb-2 text-2xl font-bold">{item.heading}</h5>
								<p className="mb-5 font-normal">{item.position}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
