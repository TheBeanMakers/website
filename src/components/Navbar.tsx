import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import BrushOutlined from "@mui/icons-material/BrushOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import styles from "../styles/navbar.module.css";
import { NavBtn } from "./NavBtn";
import { LoginPopup } from "./LoginPopup";

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

	const [navBarOpen, setNavBarOpen] = useState(false);

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
			zIndex="10"
		>
			<Drawer
				open={navBarOpen}
				className={styles["navbar-mobile__drawer"]}
				PaperProps={{
					className: styles["navbar-mobile__drawer-paper"],
				}}
				BackdropProps={{
					onClick: () => setNavBarOpen(false),
				}}
			>
				<IconButton
					className={styles["navbar-mobile__drawer__back-btn"]}
					onClick={() => setNavBarOpen(false)}
				>
					<ChevronLeftOutlined
						className={styles["navbar-mobile__drawer__back-icon"]}
					/>
				</IconButton>
				<Divider />
				<List>
					{[
						{ name: "Home", icon: HomeOutlined },
						{ name: "About", icon: InfoOutlined },
						{ name: "Gallery", icon: BrushOutlined },
						{ name: "Merch", icon: ShoppingBagOutlined },
					].map(({ name, icon: Icon }, i) => (
						<ListItem
							className={styles["navbar-mobile__drawer__list-item"]}
							disablePadding
							alignItems="center"
							key={i + 1}
						>
							<Button
								className={styles["navbar-mobile__drawer__list-item__btn"]}
								onClick={() => {
									setNavBarOpen(false);
									window.location.href =
										name === "Home" ? "/" : `/${name.toLowerCase()}`;
								}}
								endIcon={
									<Icon
										className={styles["navbar-mobile__drawer__list-item__icon"]}
									/>
								}
							>
								{name}
							</Button>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box className={styles["navbar-mobile__btn"]}>
				<IconButton
					disableRipple
					sx={{ color: "whitesmoke" }}
					onClick={() => setNavBarOpen(true)}
				>
					<MenuOutlined />
				</IconButton>
			</Box>
			<Box className={styles["navbar-mobile__spacer"]} flexGrow={1}></Box>
			<Box
				className={styles["navbar__logo"]}
				component="img"
				width="78px"
				src="https://cdn.thebeanmakers.com/assets/logo.webp"
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
						["home", "about", "gallery"].includes(activeTab)
							? activeTab
							: "coming-soon"
					}_wrapper-1`
				)}
				anchorEl={loginPopupAnchor}
				setAnchorState={setLoginPopUpAnchor}
			/>
			<Button
				className={styles.navbar__btn}
				disableRipple
				href="https://discord.thebeanmakers.com"
				target="_blank"
			>
				Discord
				<div className={styles.navbar__btn__slider}></div>
			</Button>
			<Box flexGrow={1}></Box>
			{[
				{ icon: AccountCircleOutlined },
				{ link: "/cart", icon: ShoppingCartOutlined },
			].map(({ icon: Icon, ...x }, i) => (
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
					<Icon sx={{ fontSize: "1.85rem" }} />
				</IconButton>
			))}
		</Box>
	);
}
