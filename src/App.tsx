import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { RouterView } from "./router";

export default function App() {
	return (
		<>
			<Navbar />
			<RouterView />
			<Footer />
		</>
	);
}
