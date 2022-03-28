import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { RouterView } from "./router";

// navbar
// intro (home)
// about
// team
// gallery (???????????)

export default function App() {
	return (
		<>
			<Navbar />
			<RouterView />
			<Footer />
		</>
	);
}
