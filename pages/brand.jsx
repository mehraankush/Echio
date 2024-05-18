import BrandAndProductShoot from "@/components/brand/BrandAndProductShoot";
import HeroBrandPage from "@/components/brand/HeroBrandPage";
import React from "react";
import BlackTestimonials from "@/components/common/BlackTestimonials";

export default function Brand() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroBrandPage />
			<BrandAndProductShoot />
			<BlackTestimonials />
		</main>
	);
}
