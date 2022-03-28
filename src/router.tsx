import { Route, Routes } from "react-router-dom";
import { Gallery } from "./views/Gallery";
import { Home } from "./views/Home";

export function RouterView() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/gallery" element={<Gallery />} />
		</Routes>
	);
}
