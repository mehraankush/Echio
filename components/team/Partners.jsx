import React from "react";
import Image from "next/image";
import { GrooveNexus, Affinzy, DexoMedia } from "@/public/index";

export default function Partners() {
	return (
		<div className="bg-white text-black">
			<div className="lg:flex flex-col justify-center items-center m-8 lg:m-0 py-5">
				<h1 className="text-left lg:text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-r from-[#00C5D4] to-[#000000] bg-clip-text mb-6">
					Our Partners
				</h1>
				<p className="text-center font-medium font-inter text-xl">
					People and companies who are partner with us
				</p>
				<div className="flex justify-center items-center gap-10">
					<Image
						src={GrooveNexus}
						alt="partners-logo"
						className="w-[30%] h-fit"
					/>
					<Image src={Affinzy} alt="partners-logo" className="w-[30%] h-fit" />
					<Image
						src={DexoMedia}
						alt="partners-logo"
						className="w-[30%] h-fit"
					/>
				</div>
			</div>
		</div>
	);
}
