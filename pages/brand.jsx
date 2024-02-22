import BrandAndProductShoot from "@/components/brand/BrandAndProductShoot";
import HeroBrandPage from "@/components/brand/HeroBrandPage";
import React from "react";
import TestimonailsFooterBlack from "@/components/others/TestimonailsFooterBlack";

export default function Brand() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroBrandPage />
			<BrandAndProductShoot />
			<TestimonailsFooterBlack />
		</main>
	);
}
