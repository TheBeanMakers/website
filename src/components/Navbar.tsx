import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import OpenInNew from "@mui/icons-material/OpenInNewOutlined";
import CopyOutlined from "@mui/icons-material/ContentCopyOutlined";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";

import styles from "../styles/navbar.module.css";
import EthereumIcon from "./icons/Ethereum";
import { useMetamask } from "../contexts/Metamask";

const NavBtn = (props: { text: string; active: boolean }) => (
	<Button
		className={`${styles.navbar__btn}${
			props.active ? ` ${styles["navbar__btn-active"]}` : ""
		}`}
		href={props.text === "Home" ? "/" : `/${props.text.toLowerCase()}`}
		disableRipple
	>
		{props.text}
		<div className={styles.navbar__btn__slider}></div>
	</Button>
);

const LoginPopup = (props: {
	anchorEl: (EventTarget & HTMLButtonElement) | null;
	container: HTMLElement | null;
	setAnchorState: (ele: (EventTarget & HTMLButtonElement) | null) => void;
}) => {
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
};

export function Navbar() {
	const currentPath = useLocation().pathname;
	const [activeTab, setActiveTab] = useState(
		currentPath === "/" ? "home" : currentPath.split("/")[1]
	);
	const [loginPopupAnchor, setLoginPopUpAnchor] = useState<
		(EventTarget & HTMLButtonElement) | null
	>(null);

	useEffect(() => {
		setActiveTab(currentPath === "/" ? "home" : currentPath.split("/")[1]);
	}, [currentPath]);

	return (
		<Box
			className={styles.navbar}
			top="0"
			position="absolute"
			display="flex"
			width="78%"
			height="6rem"
			color="white"
			alignItems="center"
			left="50%"
			zIndex="1"
		>
			<Box
				component="img"
				width="78px"
				src="https://cdn.discordapp.com/attachments/957337496847519754/957388265596551188/logo.webp"
				alt="Logo"
			/>
			<Typography fontFamily="Oswald" fontSize="2rem" fontWeight={600}>
				The Bean Factory
			</Typography>
			<Box flexGrow={1}></Box>
			{["Home", "About", "Gallery", "Merch"].map((x, i) => (
				<NavBtn text={x} active={x.toLowerCase() === activeTab} key={i + 1} />
			))}
			<LoginPopup
				container={document.getElementById(
					`${
						["home", "about"].includes(activeTab) ? activeTab : "coming-soon"
					}_wrapper-1`
				)}
				anchorEl={loginPopupAnchor}
				setAnchorState={setLoginPopUpAnchor}
			/>
			<Button
				className={styles.navbar__btn}
				disableRipple
				href="https://www.reddit.com/r/thebeanmakersofficial/"
				target="_blank"
			>
				Forum <OpenInNew sx={{ marginLeft: "5px" }} />
				<div className={styles.navbar__btn__slider}></div>
			</Button>
			<Box flexGrow={1}></Box>
			{[
				{ icon: AccountCircleOutlined },
				{ link: "/cart", icon: ShoppingCartOutlined },
			].map(({ icon: Ele, ...x }, i) => (
				<IconButton
					className={styles["nav__btn-icon"]}
					key={i + 1}
					disableRipple
					{...(x.link
						? { href: x.link }
						: {
								onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
									setLoginPopUpAnchor(event.currentTarget);
								},
						  })}
				>
					<Ele sx={{ fontSize: "1.85rem" }} />
				</IconButton>
			))}
		</Box>
	);
}
