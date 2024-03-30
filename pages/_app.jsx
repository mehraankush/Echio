import SmoothScroll from "@/components/Animation/SmoothScroll";
import CardsSmall from "@/components/others/CardsSmall";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	// CardsSmall();
	return (
		<SmoothScroll>
			<Component {...pageProps} />
		</SmoothScroll>
	)
}
