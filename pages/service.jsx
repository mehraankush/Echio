import TestimonailsFooterBlack from "@/components/others/TestimonailsFooterBlack";
import HeroServicePage from "@/components/service/HeroServicePage";
import ServiceApp from "@/components/service/ServiceApp";
import React from "react";

export default function service() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroServicePage />
			<ServiceApp />
			<TestimonailsFooterBlack/>
		</main>
	);
}
