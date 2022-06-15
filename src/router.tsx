import { Route, Routes } from "react-router-dom";
import { About } from "./views/About";
import { ComingSoon } from "./views/ComingSoon";
import { Gallery } from "./views/Gallery";
import { Home } from "./views/Home";

export function RouterView() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/cart" element={<ComingSoon />} />
			<Route path="/merch" element={<ComingSoon />} />
		</Routes>
	);
}
