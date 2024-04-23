import React, { useEffect } from "react";
import Image from "next/image";
import { agencyPage } from "@/public/index";
import { Button } from "../others/Button";

export default function Agency() {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #000 0%, #252525 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div className="flex flex-col md:flex-row justify-center items-center gap-24 mx-4 my-8 md:my-[16rem] ">
				<div
					className="hidden lg:flex justify-center items-center overflow-hidden px-4 my-6 lg:px-0 lg:my-0 "
					data-aos="fade-up-right"
				>
					<Image src={agencyPage} alt="graph" width={1000} height={1000} className="lg:w-[36.25rem] lg:h-[22rem]" />
				</div>

				<div className="flex flex-start justify-around flex-col  lg:h-[22rem] space-y-[2rem]">
					<h1 className="text-transparent text-[2rem] lg:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
						Agency
					</h1>
					<div className="block md:hidden justify-center items-center overflow-hidden mb-4">
						<Image src={agencyPage} alt="graph" className="" />
					</div>
					<p className="text-lg font-syne text-left max-w-[40rem] mb-10">
						Echio believes in Promoting partnerships, which goes on to define us
						and our community approach. We believe in building mutually
						beneficial relationships with agencies, supporting each other and
						delivering the best output.
					</p>
					<div className="flex flex-col md:flex-row gap-10">
						<Button
							button="default"
							className="![border-image:unset] !bg-white !text-black"
							rectangleClassName="!bg-neutral-white-lite"
							text="Agency Login"
						/>
						<button
							className={`font-inter hover:text-black flex justify-center items-center text-white border border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] px-6 py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
						>
							More Details
						</button>
					</div>
				</div>
				
			</div>
		</div>
	);
}
