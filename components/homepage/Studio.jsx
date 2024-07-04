import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { studio, studioHomeImageOne, studioHomeImageTwo } from "@/public/index";

const Studio = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			// Sequence of animations
			controls.start({
				scale: [1, 0.8, 1], // Scale down, then back to original
				transition: { duration: 1.5, ease: "easeInOut" },
			});
		}
	}, [controls, inView]);

	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed", // Fixed background attachment
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div>
				<div className="md:mt-[20rem] mx-4 my-10 md:mx-20 md:mb-[6.18rem]">
					<div className="md:flex flex-col justify-center items-center gap-8 mb-10">
						<h1 className="text-transparent text-[2rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
							Studio
						</h1>
						<p className="text-[1.25rem] max-w-[50rem] text-white">
							A place for executing what&apos;s possible, our studio is ready to
							meet every requirement of the content creation journey along with
							special catering to brand’s advertising requirements
						</p>
					</div>
					<motion.div
						data-aos="zoom-in-up"
						ref={ref}
						animate={controls}
						initial={{ scale: 1 }}
						className="hidden md:block"
					>
						<Image src={studio} alt="studio-image" />
					</motion.div>
					<div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-20">
						<Image
							src={studioHomeImageOne}
							alt="circle"
							className="block md:hidden"
							data-aos="fade-left"
						/>
						<Image
							src={studioHomeImageTwo}
							alt="circle"
							className="block md:hidden"
							data-aos="fade-right"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Studio;
