import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	footerLogo,
	facebook,
	instagram,
	linkedin,
	twitter,
	yt,
	footerWhiteLogo,
} from "@/public/index";

export default function WhiteFooter() {
	const currentYear = new Date().getFullYear();
	return (
		<>
	<style>
				{`
    .border-gradient {
      border-image: linear-gradient(to right, #00C5D4, #000);
      border-image-slice: 1;
    }

    .text-gradient {
      background: linear-gradient(to right, #00C5D4, #000);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .button-gradient {
      transition: background 300ms ease-in-out;
    }

    .button-gradient:hover {
      background: linear-gradient(to bottom, #00D4F1, #00CFEB, #00B6CF);
      color: black; /* Change text color to black on hover */
      border: none; /* Hide border on hover */
    }
  `}
			</style>
			<div className="text-black bg-white border-t ">
				{/* bg-white */}
				<div className="mx-4 md:mx-20  md:px-20 py-12">
					<div className="w-full flex flex-row md:justify-between justify-around items-center mb-16">
						<Image
							src={footerWhiteLogo}
							alt="footer-logo"
						// className="w-1/2 md:w-[18rem] h-16"
						/>
						<button
							className={`font-inter flex justify-center items-center border text-xl text-gradient border-gradient font-medium rounded-[0.25rem] px-6 py-3.5 button-gradient`}
						>
							Stay in Touch
						</button>
					</div>
					<div className="md:hidden mx-4 my-6 lg:max-w-[20rem]">
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
						<div className="hidden md:block lg:max-w-[20rem]">
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
						<div className="text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Company
							</h1>
							<p>Blogs</p>
							<Link href="/team" className=" text-blue-400 hover:underline">
							<p>Team</p>
							</Link>
							<p>About</p>
							<p>Partner With Us</p>
							<p>Our Case Study</p>
							<p>Our Journey</p>
						</div>
						<div className="text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Features
							</h1>
							<Link href="/brand" className=" text-blue-400 hover:underline">
							<p>Brands</p>
							</Link>

							<Link href="/influencer" className=" text-blue-400 hover:underline">
							<p>Influencers</p>
							</Link>

							<Link href="/studio" className=" text-blue-400 hover:underline">
							<p>Studio</p>
							</Link>

							<Link href="/agency" className=" text-blue-400 hover:underline">
							<p>Agency</p>
							</Link>

							<Link href="/service" className=" text-blue-400 hover:underline">
							<p>Our Services</p>
							</Link>
						</div>
						<div className="text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Policy
							</h1>
							<Link href="/privacy-policy" className=" text-blue-400 hover:underline">
							<p>Privacy Policy</p>
							</Link>
							<p>Terms & Conditions</p>
						</div>
						<div className="text-xl">
							<h1 className="font-syne text-2xl lg:text-4xl font-medium mb-[1.5rem]">
								Contact Us
							</h1>
							<Link href="/contact" className=" text-blue-400 hover:underline">
							<p>Call Us</p>
							</Link>
							<Link href="/contact" className=" text-blue-400 hover:underline">
							<p>Email Us</p>
							</Link>
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
}
