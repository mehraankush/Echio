import React from "react";
import Image from "next/image";
import {
	downloadApp,
	googlePlay,
	googlePlayImage,
	appStore,
} from "@/public/index";

export default function DownloadApp() {
	return (
		<div className="bg-white text-black ">
			<div className="lg:mx-[5rem] lg:mt-[12.5rem] lg:flex flex-col justify-center items-center">
				<div className=" lg:m-0 lg:flex justify-around items-center gap-[8rem] w-full">
					
					<div className="px-8 lg:flex flex-col">
						<h1 className="text-transparent text-[2rem] lg:text-[4rem] mb-6 lg:mb-0 font-syne font-bold bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text">
							Download App
						</h1>
						<p className="text-lg font-syne text-let max-w-[30rem] mb-10">
							Signup- join our exclusive influencer marketing app and unlock
							refined opportunities for collaboration and growth Login-log in
							now to the influencer marketing app and continue shaping your
							impactful journey.
						</p>
						<div className="px-8 my-6 md:hidden">
							<Image src={downloadApp} alt="mobile-image" />
						</div>
						<div className="flex gap-10">
							<Image src={googlePlayImage} alt="download-from-google-play " className="hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"/>
							<Image src={appStore} alt="download-from-app-store" className="hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"/>
						</div>
					</div>

					<div className="hidden md:block h-[52rem]">
						<Image src={downloadApp} alt="mobile-image" />
					</div>

				</div>
			</div>
		</div>
	);
}
