import AppFeatures from "@/components/influencer/AppFeatures";
import DownloadApp from "@/components/influencer/DownloadApp";
import HeroInfluencerPage from "@/components/influencer/HeroInfluencerPage";
import StudioForInfluencer from "@/components/influencer/StudioForInfluencer";
import React from "react";
import AppFeaturesWhite from "@/components/influencer/AppFeaturesWhite";
import AppFeaturesBlack from "@/components/influencer/AppFeaturesBlack";
import BlackTestimonials from "@/components/common/BlackTestimonials";

export default function influencer() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroInfluencerPage />
			<AppFeatures />
			<AppFeaturesWhite />
			{/* <AppFeaturesBlack /> */}
			<DownloadApp />
			<StudioForInfluencer />
			<BlackTestimonials />
		</main>
	);
}
