import React from "react";
import Image from "next/image";
import {
	serviceChat,
	downloadAppNew,
	appStore,
	googlePlayImage,
	downloadApp,
	influencertwo,
	monetization,
} from "@/public/index";

export default function ServiceApp() {
	return (
		<div className="bg-white text-black">
			<div className="hidden md:flex flex-col justify-center items-center mx-[5rem] mt-[9.75rem]">
				<div className="flex flex-row-reverse justify-center items-center gap-20">
					<div className="flex flex-col">
						<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00C5D4] to-[#C8F8FF] bg-clip-text">
							App features
						</h1>
						<p className="text-xl font-syne mb-10">
							Get work directly from influencers with zero commission
						</p>
					</div>
					<div className="w-[34.25rem] h-[36.1875rem]">
						<Image src={serviceChat} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[30px]">
							<Image src={monetization} alt="mobile-image" />
						</div>
					</div>
				</div>
			</div>
			<div className="lg:mx-[5rem] lg:my-[18.5rem] lg:flex flex-col justify-center items-center">
				<div className=" lg:m-0 lg:flex justify-around items-center w-full">
					<div className="lg:flex flex-col">
						<h1 className="text-transparent text-[2rem] my-5 lg:my-0 lg:text-[4rem] font-syne font-bold bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text">
							Download App
						</h1>
						<p className="text-lg font-syne lg:max-w-[30rem] mb-10">
							Download now to access exclusive opportunities and provide your
							services to our influencers.
						</p>
						<div className="px-8 my-6 md:hidden">
							<Image src={downloadAppNew} alt="mobile-image" />
						</div>
						<div className="flex justify-center items-center lg:justify-normal lg:items-baseline gap-10">
							<Image src={googlePlayImage} alt="download-from-google-play" />
							<Image src={appStore} alt="download-from-app-store" />
						</div>
					</div>
					<div className="hidden md:block h-[52rem]">
						<Image src={downloadAppNew} alt="mobile-image" />
					</div>
				</div>
			</div>
		</div>
	);
}
