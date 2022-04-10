import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import "./styles/index.css";
import App from "./App";
import { MetamaskProvider } from "./contexts/Metamask";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Web3ReactProvider getLibrary={(provider) => new Web3(provider)}>
				<MetamaskProvider>
					<App />
				</MetamaskProvider>
			</Web3ReactProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
