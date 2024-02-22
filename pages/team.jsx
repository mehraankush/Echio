import Footer from "@/components/Footer";
import HeroTeamPage from "@/components/team/HeroTeamPage";
import OurInvestor from "@/components/team/OurInvestor";
import Partners from "@/components/team/Partners";
import React from "react";

export default function team() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroTeamPage />
			<OurInvestor />
			<Partners />
			<Footer />
		</main>
	);
}
