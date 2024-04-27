"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
	linkedinBlue,
	instagramBlue,
	quoraBlue,
	redditBlue,
	tumblerBlue,
	grayBorderCubeTestimonials,
	solidCubeTestimonials,
	semiCircleTestimonials,
	angelInvestor,
	founder,
} from "@/public/index";

const AngelInvestor = () => {
	return (
		<div 
			className="pt-24 pb-[7.5rem]"
			style={{
				backgroundImage: `linear-gradient(360deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				color: "#FFF",
			}}
		>
			<h1 className="text-center font-medium font-syne text-[2rem] text-[#eee] mb-8">
				Proudly Used by
			</h1>
			<div className="flex justify-around items-center mb-[2rem] mx-[28rem]">
				<Image src={linkedinBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={instagramBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={quoraBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={redditBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={tumblerBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
			</div>
			<div className="flex justify-between items-center mx-[28rem]">
				<Image src={solidCubeTestimonials} alt="random" className="mt-20" />
				<Image src={grayBorderCubeTestimonials} alt="random" className="mb-8" />
			</div>
			<div className="flex justify-around items-center mb-[10rem]">
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="p-16 max-w-[52rem] text-center font-syne text-2xl">
					<span className="text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&ldquo;
					</span>
					Echio has been instrumental in helping us find influencers who
					authentically connect with our brand, resulting in a significant boost
					in product visibility and sales.{""}
					<span className="align-text-bottom text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&rdquo;
					</span>
				</div>
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="relative top-[153px] right-[372px] overflow-x-hidden">
					<Image src={semiCircleTestimonials} alt="random" />
				</div>
			</div>
			<div className="flex justify-center items-center gap-8">
				<div className="">
					<Image src={angelInvestor} alt="investor-image" />
				</div>
				<div className="inline-block text-center">
					<h1 className="font-inter font-bold text-2xl text-[#eee]">
						John Doe
					</h1>
					<p className="font-inter text-lg text-[#eee]">Angel Investor</p>
				</div>
			</div>
		</div>
	);
};

const Founder = () => {
	return (
		<div 
			className="pt-24 pb-[7.5rem]"
			style={{
				backgroundImage: `linear-gradient(360deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				color: "#FFF",
			}}
		>
			<h1 className="text-center font-medium font-syne text-[2rem] text-[#eee] mb-8">
				Proudly Used by
			</h1>
			<div className="flex justify-around items-center mb-[2rem] mx-[28rem]">
				<Image src={linkedinBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={instagramBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={quoraBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={redditBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={tumblerBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
			</div>
			<div className="flex justify-between items-center mx-[28rem]">
				<Image src={solidCubeTestimonials} alt="random" className="mt-20" />
				<Image src={grayBorderCubeTestimonials} alt="random" className="mb-8" />
			</div>
			<div className="flex justify-around items-center mb-[10rem]">
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="p-16 max-w-[52rem] text-center font-syne text-2xl">
					<span className="text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&ldquo;
					</span>
					Echio&apos;s dedication to finding influencers who align with our
					brand message has resulted in a more engaged audience and increased
					brand loyalty. {""}
					<span className="align-text-bottom text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&rdquo;
					</span>
				</div>
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="relative top-[153px] right-[372px] overflow-x-hidden">
					<Image src={semiCircleTestimonials} alt="random" />
				</div>
			</div>
			<div className="flex justify-center items-center gap-8">
				<div className="">
					<Image src={founder} alt="founder-image" />
				</div>
				<div className="inline-block text-center">
					<h1 className="font-inter font-bold text-2xl text-[#eee]">Antonio</h1>
					<p className="font-inter text-lg text-[#eee]">Ceo - Founder</p>
				</div>
			</div>
		</div>
	);
};

export default function TestimonialsBottomToTop() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const scrollableContainer = useRef();
	const components = [<AngelInvestor key={1}/>, <Founder key={2}/>]


	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex(prevIndex => (prevIndex + 1) % 2); // Cycle through 3 images
		}, 5000); // 2 seconds interval

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="transition-opacity duration-500 ease-in-out">
			<div className="w-full overflow-x-auto example" ref={scrollableContainer}>
				<div className="flex flex-nowrap transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>

					{
						components.map((component, index) => (
							<div id={`target-${index}`} key={index}>
								<div className="w-[100vw]">
									{component}
								</div>
							</div>
						))
					}


				</div>

			</div>
		</div>
	);
}


