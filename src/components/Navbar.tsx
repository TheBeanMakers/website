import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import OpenInNew from "@mui/icons-material/OpenInNewOutlined";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "../styles/navbar.module.css";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { Popover } from "@mui/material";

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
	setAnchorState: (ele: (EventTarget & HTMLButtonElement) | null) => void;
}) => (
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
	>
		This is some random text
	</Popover>
);

export function Navbar() {
	const currentPath = useLocation().pathname;
	const [activeTab, setActiveTab] = useState(
		currentPath === "/" ? "home" : currentPath.split("/")[1]
	);
	const [loginPopupAnchor, setLoginPopUpAnchor] = useState<
		(EventTarget & HTMLButtonElement) | null
	>(null);

	const { activateBrowserWallet, account } = useEthers();
	const etherBalance = useEtherBalance(account);

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
			<Button
				className={styles.navbar__btn}
				disableRipple
				href="mail:contact@thebeanmakers.com"
				target="_blank"
			>
				Contact
				<div className={styles.navbar__btn__slider}></div>
			</Button>
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
				<>
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
					{/* <LoginPopup
						anchorEl={loginPopupAnchor}
						setAnchorState={setLoginPopUpAnchor}
					/> */}
				</>
			))}
		</Box>
	);
}
