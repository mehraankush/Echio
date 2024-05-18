"use client"
import React from "react";
import Image from "next/image";

import {
    footerBlackLogo,
    facebook,
    instagram,
    linkedin,
    twitter,
    yt,
} from "@/public/index";


const BlackFooter = () => {
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
            <div className="bg-black">
                <div className="lg:mx-20 lg:px-20 lg:py-12">
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

export default BlackFooter