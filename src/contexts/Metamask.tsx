import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

export const MetamaskContext = createContext<
	Partial<{
		isActive: boolean;
		account: string | null;
		library: Web3;
		connect: () => Promise<void>;
		disconnect: () => void;
	}>
>({});

export const Injected = new InjectedConnector({ supportedChainIds: [1, 3] });

export function MetamaskProvider(props: { children: React.ReactNode }) {
	const { activate, deactivate, account, active, library } = useWeb3React();
	const [isActive, setIsActive] = useState(false);

	const handleIsActive = useCallback(() => {
		setIsActive(active);
	}, [active]);

	useEffect(() => {
		handleIsActive();
	}, [handleIsActive]);

	const connect = async () => {
		await activate(Injected);
		setIsActive(true);
	};

	const disconnect = () => {
		deactivate();
	};

	const values = useMemo(
		() => ({
			isActive,
			account,
			library,
			connect,
			disconnect,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isActive]
	);

	return (
		<MetamaskContext.Provider value={values}>
			{props.children}
		</MetamaskContext.Provider>
	);
}

export function useMetamask() {
	const context = useContext(MetamaskContext);
	return context;
}
