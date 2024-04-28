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
	footerBlackLogo,
	facebook,
	instagram,
	linkedin,
	twitter,
	yt,
} from "@/public/index";

const AngelInvestor = () => {
	return (
		<div className="pt-24 mb-[7.5rem] w-full" >
			<h1 className="hidden md:block text-center font-medium font-syne text-[2rem] text-white mb-8">
				Proudly Used by
			</h1>
			<div className="hidden lg:flex justify-around items-center mb-[2rem] mx-[28rem]">
				<Image src={linkedinBlue} alt="logo" className=' hover:cursor-pointer shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={instagramBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={quoraBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={redditBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
				<Image src={tumblerBlue} alt="logo" className=' hover:cursor-pointer  shadow-[0px_0px_20px_0px] hover:shadow-white rounded-full transition-all ease-in-out duration-300'/>
			</div>
			<div className="flex justify-between items-center mx-[28rem]">
				<Image src={solidCubeTestimonials} alt="random" className="mt-20" />
				<Image src={grayBorderCubeTestimonials} alt="random" className="mb-8" />
			</div>
			<div className="flex justify-around items-center">
				<div className="flex-grow border-t border-[#FFF]" />
				<div className="relative p-16 max-w-[52rem] text-center font-syne text-2xl">
					<span className="text-[3rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent leading-8">
						&ldquo;
					</span>
					Echio has been instrumental in helping us find influencers who
					authentically connect with our brand, resulting in a significant boost
					in product visibility and sales.{""}
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
					<Image src={angelInvestor} alt="investor-image" />
				</div>
				<div className="inline-block text-center">
					<h1 className="font-inter font-bold text-2xl text-white">John Doe</h1>
					<p className="font-inter text-lg text-white">Angel Investor</p>
				</div>
			</div>
		</div>
	);
};

const Founder = () => {
	return (
		<div className="pt-24 mb-[7.5rem] w-full">
			<h1 className="hidden md:block text-center font-medium font-syne text-[2rem] text-white mb-8">
				Proudly Used by
			</h1>
			<div className="hidden lg:flex justify-around items-center mb-[2rem] mx-[28rem]">
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
			<div className="flex justify-around items-center">
				<div className="flex-grow border-t border-[#FFF]" />
				<div className="relative p-16 max-w-[52rem] text-center font-syne text-2xl">
					<span className="text-[3rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent leading-8">
						&ldquo;
					</span>
					Echio has been instrumental in helping us find influencers who
					authentically connect with our brand, resulting in a significant boost
					in product visibility and sales.{""}
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
					<h1 className="font-inter font-bold text-2xl text-white">Antonio</h1>
					<p className="font-inter text-lg text-white">CEO - Founder</p>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<style>
				{`
    .border-gradient {
      border-image: linear-gradient(to right, #C8F8FF, #19C2D9);
      border-image-slice: 1;
    }

    .text-gradient {
			background:linear-gradient(to right, #C8F8FF, #19C2D9);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  `}
			</style>
			<div className="">
				<div className="lg:mx-20 lg:mt-[8.75rem] lg:mb-20 lg:px-20 lg:py-12">
					<div className="flex flex-row justify-between items-center mb-16 mx-4">
						<Image src={footerBlackLogo} alt="footer-logo" />
						<button
							className={`font-inter flex justify-center items-center border text-xl text-gradient border-gradient font-medium rounded-[0.25rem] px-6 py-4 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
						>
							Stay in Touch
						</button>
					</div>
					<div className="md:hidden mx-4 my-6 lg:max-w-[20rem] text-[#EEE]">
						<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
							Disclaimer
						</h1>
						<p className="text-base text-left">
							Echiofy Private Limited is an unlisted private company
							incorporated on 25 March 2022. It is classified as a private
							limited company and is located in Delhi. The Corporate
							Identification Number (CIN) of Echiofy Private Limited is
							U72900DL2022PTC395579.
							<br />
							<br />
							The registered office of Echiofy Private Limited is at 303, Tower
							B, Logix Technova, Sector 132, Noida- 201301.
							<br />
						</p>
					</div>
					<div className="mx-4 grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row justify-between items-start gap-14 mb-14">
						<div className="hidden md:block lg:max-w-[20rem] text-[#EEE]">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Disclaimer
							</h1>
							<p className="text-base text-left">
								Echiofy Private Limited is an unlisted private company
								incorporated on 25 March 2022. It is classified as a private
								limited company and is located in Delhi. The Corporate
								Identification Number (CIN) of Echiofy Private Limited is
								U72900DL2022PTC395579.
								<br />
								<br />
								The registered office of Echiofy Private Limited is at 303,
								Tower B, Logix Technova, Sector 132, Noida- 201301.
								<br />
							</p>
						</div>
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Company
							</h1>
							<p>Blogs</p>
							<p>Team</p>
							<p>About</p>
							<p>Partner With Us</p>
							<p>Our Case Study</p>
							<p>Our Journey</p>
						</div>
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Features
							</h1>
							<p>Brands</p>
							<p>Influencers</p>
							<p>Studio</p>
							<p>Agency</p>
							<p>Our Services</p>
						</div>
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Policy
							</h1>
							<p>Privacy Policy</p>
							<p>Terms & Conditions</p>
						</div>
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Contact Us
							</h1>
							<p>Call Us</p>
							<p>Email Us</p>
							<p>Bangalore, India</p>
						</div>
					</div>
					<div className="m-4 lg:flex lg:flex-row justify-between items-center">
						<div className="lg:flex justify-center items-center">
							<p className="lg:text-center max-w-xs md:max-w-none">
								201301. &copy; Copyright {currentYear} Echiofy Private Limited.
								All Rights Reserved.
							</p>
						</div>
						<div className="flex flex-col">
							<p className="my-3 lg:mb-3">Follow Us On</p>
							<div className="flex gap-x-6">
								<Image
									src={facebook}
									alt="social-icon"
									className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
								/>
								<Image
									src={instagram}
									alt="social-icon"
									className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
								/>
								<Image
									src={linkedin}
									alt="social-icon"
									className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
								/>
								<Image
									src={twitter}
									alt="social-icon"
									className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
								/>
								<Image
									src={yt}
									alt="social-icon"
									className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default function TestimonailsFooterBlack() {
	const [currentImageIndex, setCurrentImageIndex] = useState(1);
	const scrollableContainer = useRef();
	const components = [<AngelInvestor key={1}/>, <Founder key={2}/>]


	useEffect(() => {
		const intervalId = setInterval(() => {
		  setCurrentImageIndex(prevIndex => (prevIndex + 1) % 2); // Cycle through 3 images
		}, 5000); // 2 seconds interval
	
		return () => clearInterval(intervalId);
	  }, []);




	return (
		<div
			className="transition-opacity duration-500 ease-in-out relative"
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
			}}
		>
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
			<Footer />
		</div>
	);
}