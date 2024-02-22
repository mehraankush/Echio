import React from "react";
import Image from "next/image";
import { chat, chatPointer, connectWithOthers } from "@/public/index";

export default function AppFeaturesWhite() {
	return (
		<div className="lg:mt-24 lg:pb-28 text-[#090B0B]">
			<div className="lg:flex justify-center items-center gap-14 lg:my-10 lg:ml-20 lg:mr-[6.5rem]">
				<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
					<Image src={chat} alt="mobile-image" />
					<div className="hidden md:block relative left-[176px] bottom-[87px]">
						<Image src={chatPointer} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col m-8 lg:px-10 lg:py-20">
					<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
						Growth Consultations of your channel and understanding how it can be
						improved and to make it happen
					</p>
				</div>
			</div>
			<div className="lg:flex flex-row-reverse justify-center items-center gap-24 lg:my-10 lg:ml-20 lg:mr-[6.5rem]">
				<div className="px-8 my-6 lg:px-0 lg:my-0 lg:w-[36.25rem] lg:h-[36.1875rem]">
					<Image src={chat} alt="mobile-image" />
					<div className="hidden md:block relative left-[176px] bottom-[87px]">
						<Image src={connectWithOthers} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col m-8 lg:px-5 lg:py-20">
					<p className="text-2xl font-syne font-medium max-w-[42.25rem]">
						Content Solutions to have creative content ideas and hacks to
						optimize the quality of the content
					</p>
				</div>
			</div>
		</div>
	);
}
