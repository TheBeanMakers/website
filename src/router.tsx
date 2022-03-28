import { Route, Routes } from "react-router-dom";
import { ComingSoon } from "./views/ComingSoon";
import { Home } from "./views/Home";

export function RouterView() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/gallery" element={<ComingSoon />} />
			<Route path="/cart" element={<ComingSoon />} />
			<Route path="/merch" element={<ComingSoon />} />
		</Routes>
	);
}
