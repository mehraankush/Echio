import FooterBlackInverted from "@/components/FooterBlackInverted";
import Testimonials from "@/components/Testimonials";
import HeroStudioPage from "@/components/studio/HeroStudioPage";
import StudioForCreators from "@/components/studio/StudioForCreators";
import React from "react";

export default function studio() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroStudioPage />
			<StudioForCreators />
			<Testimonials />
			<FooterBlackInverted />
		</main>
	);
}
