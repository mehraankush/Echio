"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { echioNav, hamburger, close } from "@/public/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./others/Button";

const Navbar = () => {
	const navbarItems = [
		{ id: 0, href: "/", tag: "Home" },
		{ id: 1, href: "/brand", tag: "Brands" },
		{ id: 2, href: "/influencer", tag: "Influencers" },
		{ id: 3, href: "/agency", tag: "Agency" },
		// { id: 4, href: "/service", tag: "Services" },
		{ id: 5, href: "/studio", tag: "Studio" },
		{ id: 6, href: "/team", tag: "Team" },
		{ id: 7, href: "/contact", tag: "Contact Us" },
	];

	const [nav, setNav] = useState(false);
	const [activeTag, setActiveTag] = useState("Home");
	const router = useRouter();

	useEffect(() => {
		const currentPath = router.asPath;
		const initialActiveTag =
			navbarItems.find((item) => item.href === currentPath)?.tag || "Home";
		setActiveTag(initialActiveTag);
	}, []);

	const handleTagClick = (tag) => {
		setNav(false);
		setActiveTag(tag);
	};

	const toggleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="flex text-white justify-between items-center h-16 mx-4 py-6 md:mx-[5rem] p-2 md:pt-[2rem] md:mb-14">
			<span className="lg:px-2 md:px-2 py-3 mx-3">
				<Image src={echioNav} alt="logo" className="" />
			</span>
			<div
				className="md:hidden cursor-pointer flex justify-between items-center"
				onClick={() => setNav(!nav)}
			>
				{nav ? (
					<div className="fixed top-7 right-7 z-50 bg-white rounded">
						<Image src={close} alt="cross-icon" />
					</div>
				) : (
					<Image src={hamburger} alt="menu-icon" />
				)}
			</div>
			<ul className="hidden md:flex text-lg font-inter">
				{navbarItems.map((item) => (
					<li
						key={item.id}
						className={`p-2 lg:p-4 cursor-pointer ${activeTag === item.tag ? "text-[#5AEBFF]" : "hover:text-[#5AEBFF]"
							}`}
						onClick={() => handleTagClick(item.tag)}
					>
						<Link href={item.href} className="no-word-wrap">
							{item.tag}
						</Link>
					</li>
				))}
			</ul>
			{nav && (

				<div className="md:hidden absolute inset-0 bg-[#1c1c1c] z-40">
					<ul className="text-white text-center bg-[#1c1c1c]">
						{navbarItems.map((item) => (
							<li
								key={item.id}
								className={`m-8 p-3 cursor-pointer ${activeTag === item.tag
										? "text-[#5AEBFF]"
										: "hover:text-[#5AEBFF]"
									}`}
								onClick={() => handleTagClick(item.tag)}
							>
								<Link href={item.href} className="">
									{item.tag}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
			<Link href={'https://brand.echio.in/login'}>
				<Button
					button="default"
					className="hidden md:flex ![border-image:unset] !bg-white !text-black no-word-wrap"
					rectangleClassName="!bg-neutral-white-lite"
					text="Login Now"
				/>
			</Link>
		</div>
	);
};

export default Navbar;
