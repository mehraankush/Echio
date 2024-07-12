import Image from "next/image";
import React from "react";
import { call, mail, location } from "@/public/index";
import Form from "./Form";
import Navbar from "../Navbar";
import { Star } from "lucide-react";

export default function ContactPage() {
	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div className="ml-6 block md:hidden">
				Home /{" "}
				<span className="text-center text-[#43DEF3] font-syne mb-6">
					Contact Us
				</span>{" "}
			</div>
			<div className="mx-4 my-8 lg:ml-20 lg:mt-14 lg:mb-6">
				<h1 className="text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
					Contact Us
				</h1>
				<p className="text-[#eee] font-medium font-inter text-xl max-w-sm lg:max-w-xl mb-6 lg:mb-10">
					Reach out to us via the contact below to supercharge your influence
					with us.
				</p>
				<div className="md:flex justify-start items-center lg:gap-8 font-inter text-[#eee]">
					<div className="flex justify-start lg:justify-center items-center gap-2 mb-4">
						<Image src={call} alt="phone-image" />
						<p>Phone Number: +91-9667525010</p>
					</div>
					<div className="flex justify-start lg:justify-center items-center gap-2 mb-4">
						<Image src={mail} alt="phone-image" />
						<p>Email: support@echio.in</p>
					</div>
					<div className="flex justify-start lg:justify-center items-center gap-2 mb-4">
						<Image src={location} alt="phone-image" />
						<p>
							Address: 303, Tower B, Logix Technova, Sector 132, Noida-201301
						</p>
					</div>
				</div>
			</div>
			<div className="mt-10 mb-[7.5rem]">
				<Form />
			</div>
		</div>
	);
}
