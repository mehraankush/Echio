"use client";
import React, { useRef } from "react";
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
	founder,
	rightArrow
} from "@/public/index";
import BlackFooter from "./BlackFooter";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { testimonilas } from "@/data/testimonials";



const BlackTestimonials = () => {
	const scrollableContainer = useRef();

	return (
		<div
			className="transition-opacity duration-500 ease-in-out relative overflow-hidden"
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div className="w-full overflow-x-auto example" ref={scrollableContainer}>

				<div className="flex flex-nowrap transition-transform  duration-500  ease-in-out">
					<div className="pt-24 mb-[7.5rem] w-full overflow-hidden">
						<h1 className="hidden md:block text-center font-medium font-syne text-[2rem] text-white mb-8">
							Proudly Used by
						</h1>
						<div className="hidden lg:flex justify-around items-center mb-[2rem] mx-[28rem]">
							<Image src={linkedinBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300' />
							<Image src={instagramBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300' />
							<Image src={quoraBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300' />
							<Image src={redditBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300' />
							<Image src={tumblerBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300' />
						</div>
						<div className="flex justify-between items-center mx-[28rem]">
							<Image src={solidCubeTestimonials} alt="random" className="mt-20" />
							<Image src={grayBorderCubeTestimonials} alt="random" className="mb-8" />
						</div>


						<Carousel className="w-11/12 "
							plugins={[
								Autoplay({
									delay: 2000,
								}),
							]}
						>
							<CarouselContent>
								{testimonilas.map((item, index) => (
									<CarouselItem key={index} className="w-full">
										<div className="flex justify-around items-center">
											<div className="flex-grow border-t border-[#FFF]" />
											<div className="relative p-16 max-w-[52rem] text-center font-syne text-2xl">
												<span className="text-[3rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent leading-8">
													&ldquo;
												</span>
												{item.message}{""}
												<span className="relative top-[10px] left-[10px] text-[3rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
													&rdquo;
												</span>
												<div className="absolute top-[100%] left-[90%] overflow-x-hidden">
													<Image src={semiCircleTestimonials} alt="random" />
												</div>
											</div>
											<div className="flex-grow border-t border-[#FFF]" />
										</div>

										<div className="flex justify-center items-center gap-8">
											<div className="">
												<Image src={founder} alt="investor-image" />
											</div>
											<div className="inline-block text-center">
												<h1 className="font-inter font-bold text-2xl text-white">{item.name}</h1>
												<p className="font-inter text-lg text-white">{item.position}</p>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							{/* <CarouselPrevious />+
							<CarouselNext /> */}
						</Carousel>

					</div>

				</div>

			</div>
			<BlackFooter />
		</div>
	);
}

export default BlackTestimonials