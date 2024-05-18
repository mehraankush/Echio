import Navbar from "@/components/Navbar";
import BlackFooter from "@/components/common/BlackFooter";
import ContactPage from "@/components/contact/ContactPage";
import React from "react";

export default function contact() {
	return (
		<main className={`flex min-h-screen flex-col overflow-hidden`}>
			{/* <Navbar /> */}
			<ContactPage />
			<BlackFooter />
		</main>
	);
}
