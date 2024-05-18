"use client"
import React, { useRef } from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import {
	brandHero,
	agencyMonetization,
	monetizationWhite,
	agencyLower,
} from "@/public/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SmoothScroll from "../Animation/SmoothScroll";
import Parallax from "../Animation/Parallax";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeroAgencyPage() {
	const container = useRef()
	useGSAP(() => {
		let tlhero = gsap.timeline({
			scrollTrigger: {
				trigger: '.hero-container',
				start: 'top 70%',
				end: 'bottom 100%',
				scrub: true,
				// markers: true,

			}

		})
		tlhero.to('.hero-image-brand', {
			transform: 'rotateX(0deg)',
			transformOrigin: 'bottom',
		})

	}, [])

	useGSAP(() => {
		gsap.to('.feature1', {
			scrollTrigger: {
				trigger: '.feature1',
				start: 'top 0%',
				end: 'bottom 0%',
				scrub: true,
				// markers: true,
				pin: true,
				pinSpacing: false

			},
			opacity: 0
		})
	}, { scope: container })
	return (
		<SmoothScroll>

			<div
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
						Agency
					</span>{" "}
				</div>

				<div className="lg:flex flex-col justify-center items-center">

					<div className="space-y-[-1rem]">
						<h1 className="flex flex-col  text-center text-transparent font-syne text-[2rem] lg:text-[6rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
							Influencer Marketing
							<span className="md:mt-[-2rem]"> Agency</span>
						</h1>
						<p className="text-transparent text-center font-syne text-base lg:text-[2rem] font-bold bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
							As
						</p>
						<h1 className="text-transparent font-syne text-center text-[2rem] lg:text-[6.25rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
							Echio’s Partner
						</h1>
					</div>

					<div className="text-[#eee] m-4 lg:text-center font-medium font-inter text-xl">
						<p >
							Grow your agency&apos;s impact - Partner with @Echio and unlock a
							world of unparalleled growth
						</p>
						<p>
							opportunities for you, your influencers
							and your brand partners
						</p>
					</div>

					<div className="mx-4 my-6 lg:mt-10 lg:mx-20 lg:mb-[12.5rem] flex justify-center items-center hero-container " style={{
						transformStyle: "preserve-3d",
						perspective: '5000px'
					}}>
						<div className="lg:w-[80rem] lg:h-screen rounded-lg border border-[#C8F8FF] bg-[#d9d9d9] bg-opacity-25 hero-image-brand origin-bottom " style={{ transform: 'rotateX(45deg) scale(0.9)' }}>
							<Image src={brandHero} alt="hero-image-brand" className="h-full w-full" />
						</div>
					</div>
				</div>

				<div className="my-10 lg:my-0">
					<h1 className="text-center text-transparent font-syne text-[2rem] lg:text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text ">
						App Features
					</h1>
					<div className="" ref={container}>
						<div className="flex flex-col lg:flex-row justify-center items-center gap-10 h-screen feature1">
							<div className="px-8 lg:w-[36.25rem] lg:h-[70vh]">
								<Image src={agencyMonetization} alt="mobile-image" className="h-[89%] object-contain w-auto" />
								<div className="hidden md:block relative left-[176px] bottom-[87px]">
									<Image src={monetizationWhite} alt="mobile-image" />
								</div>
							</div>
							<div className="flex flex-col m-8 lg:px-10 lg:py-20">
								<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
									Register your influencer and get access of tools to manage them
									and track their progress.
								</p>
							</div>
						</div>

						<Parallax>

							<div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10 h-screen">
								<div className="px-8 lg:w-[36.25rem] lg:h-[70vh]">
									<Image src={agencyLower} alt="mobile-image" className="h-full w-auto" />
									<div className="hidden md:block relative left-[176px] bottom-[87px]">
										<Image src={monetizationWhite} alt="mobile-image" />
									</div>
								</div>
								<div className="flex flex-col m-8 lg:px-10 lg:py-20">
									<p className="text-2xl lg:text-right font-syne font-medium max-w-[39.25rem]">
										Earn commissions when you influencers deliver work for brands
										not associated with you
									</p>
								</div>
							</div>
						</Parallax>
					</div>
				</div>
			</div>
		</SmoothScroll>
	);
}
