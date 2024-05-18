import TestimonialsTopToBottom from "@/components/TestimonialsTopToBottom";
import AgencyAppFeatures from "@/components/agency/AgencyAppFeatures";
import HeroAgencyPage from "@/components/agency/HeroAgencyPage";
import BlackFooter from "@/components/common/BlackFooter";
import React from "react";

export default function agency() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroAgencyPage />
			<AgencyAppFeatures />
			<TestimonialsTopToBottom />
			<BlackFooter />
		</main>
	);
}
