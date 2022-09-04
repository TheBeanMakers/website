import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import CopyOutlined from "@mui/icons-material/ContentCopyOutlined";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";

import EthereumIcon from "./icons/Ethereum";
import { useMetamask } from "../contexts/Metamask";
import styles from "../styles/navbar.module.css";

export function LoginPopup(props: {
	anchorEl: (EventTarget & HTMLButtonElement) | null;
	container: HTMLElement | null;
	setAnchorState: (ele: (EventTarget & HTMLButtonElement) | null) => void;
}) {
	const { connect, disconnect, isActive, account, library } = useMetamask();
	const [balance, setBalance] = useState("0.000");

	useEffect(() => {
		if (account && library) {
			library.eth
				.getBalance(account)
				.then((bal) =>
					setBalance(parseFloat(library.utils.fromWei(bal)).toFixed(3))
				)
				.catch(console.error);
		}
	}, [account, library]);

	return (
		<Popover
			open={Boolean(props.anchorEl)}
			anchorEl={props.anchorEl}
			onClose={() => props.setAnchorState(null)}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			PaperProps={{
				sx: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "2%",
					minWidth: "18rem",
					minHeight: "6rem",
					backgroundColor: "#101820ff",
				},
			}}
			container={props.container}
		>
			{isActive && account ? (
				<Box
					className={styles["navbar__account-info"]}
					position="relative"
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexWrap="wrap"
					maxHeight="13rem"
					maxWidth="18rem"
					padding="1rem"
				>
					<EthereumIcon
						sx={{
							height: "5rem",
							width: "5rem",
							color: "#f2aa4cff",
							marginTop: "1.2rem",
						}}
					/>
					<Box width="100%" height="0px" />
					<Typography
						textAlign="center"
						width="fit-content"
						fontSize="1.4rem"
						color="whitesmoke"
						marginY="1rem"
					>
						{balance} ETH
					</Typography>
					<Box width="100%" height="0px" />
					<Box
						className={styles["navbar__account-info__wallet"]}
						textOverflow="clip"
						textAlign="center"
					>
						<Typography fontSize="1.15rem" fontFamily="Source Sans Pro">
							{`${account.slice(0, 12)}...${account.slice(-4)}`}
							<IconButton
								className={styles["navbar__account-info__wallet__copy"]}
								onClick={() => navigator.clipboard.writeText(account)}
							>
								<CopyOutlined />
							</IconButton>
						</Typography>
					</Box>
					<IconButton
						className={styles["navbar__account-info__logout"]}
						disableRipple
						onClick={disconnect}
					>
						<LogoutOutlined />
					</IconButton>
				</Box>
			) : (
				<Button
					className={styles["navbar__account-info__login"]}
					onClick={connect}
					disableRipple
				>
					<EthereumIcon sx={{ marginRight: "8px" }} /> Login To Your Wallet
				</Button>
			)}
		</Popover>
	);
}
