import React from "react";
import Image from "next/image";
import { studio, studioHomeImageOne, studioHomeImageTwo } from "@/public/index";

export default function Studio() {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div className="md:mt-[6.15rem] mx-4 my-10 md:mx-20 md:mb-[6.18rem]">
				<div className="md:flex flex-col justify-center items-center gap-8 mb-10">
					<h1 className="text-transparent text-[2rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
						Studio
					</h1>
					<p className="text-[1.25rem] max-w-[50rem]">
						A place for executing what&apos; possible, our studio is ready to
						meet every requirement of the content creation journey along with
						special catering to brand’s advertising requirements
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-20">
					<Image src={studio} alt="studio-image" className="hidden md:block" />
					<Image
						src={studioHomeImageOne}
						alt="circle"
						className="block md:hidden"
					/>
					<Image
						src={studioHomeImageTwo}
						alt="circle"
						className="block md:hidden"
					/>
				</div>
			</div>
		</div>
	);
}
