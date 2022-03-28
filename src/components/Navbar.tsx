import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "../styles/navbar.module.css";

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

export function Navbar() {
	const currentPath = useLocation().pathname;
	const [activeTab, setActiveTab] = useState(
		currentPath === "/" ? "home" : currentPath.split("/")[1]
	);

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
			{["Home", "ABout", "Gallery", "Contact", "Forums", "Merch"].map(
				(x, i) => (
					<NavBtn text={x} active={x.toLowerCase() === activeTab} key={i + 1} />
				)
			)}
			<Box flexGrow={1}></Box>
			{[AccountCircleOutlined, ShoppingCartOutlined].map((Ele, i) => (
				<IconButton
					className={styles["nav__btn-icon"]}
					key={i + 1}
					disableRipple
				>
					<Ele sx={{ fontSize: "1.85rem" }} />
				</IconButton>
			))}
		</Box>
	);
}
