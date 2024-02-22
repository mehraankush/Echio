import Navbar from "@/components/Navbar";
import HeroHomePage from "@/components/homepage/HeroHomePage";
import Influencers from "@/components/homepage/Influencers";
import Studio from "@/components/homepage/Studio";
import Agency from "@/components/homepage/Agency";
import Footer from "@/components/Footer";
import BrandComponent from "@/components/homepage/BrandComponent";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			<HeroHomePage />
			<BrandComponent />
			<Influencers />
			<Studio />
			<Agency />
			<Footer />
		</main>
	);
}
