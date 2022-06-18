import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Telegram from "@mui/icons-material/Telegram";
import Reddit from "@mui/icons-material/Reddit";
import Pinterest from "@mui/icons-material/Pinterest";
import FavouriteOutlined from "@mui/icons-material/FavoriteOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import IconButton from "@mui/material/IconButton";

import Discord from "./icons/Discord";
import Patreon from "./icons/Patreon";
import styles from "../styles/footer.module.css";

export function Footer() {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			minHeight="35vh"
			borderTop="2px solid #fff"
			textAlign="center"
			flexWrap="wrap"
			sx={{ background: "#101820ff" }}
		>
			<Box>
				<Box
					className={styles["footer__btn-group"]}
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexWrap="wrap"
					width="100%"
				>
					{[
						{
							link: "https://instagram.com/beanmakersofficial",
							icon: Instagram,
						},
						{ link: "https://twitter.com/beanmakers", icon: Twitter },
						{ link: "https://discord.gg/SAfv4gk8hn", icon: Discord },
						{ link: "https://t.me/thebeantalk", icon: Telegram },
						{ link: null, icon: null },
						{ link: "https://www.patreon.com/thebeanmakers", icon: Patreon },
						{
							link: "https://www.reddit.com/r/thebeanmakersofficial",
							icon: Reddit,
						},
						{ link: "https://pin.it/4fnZzeV", icon: Pinterest },
					].map(({ link, icon: Icon }, i) =>
						link === null && Icon === null ? (
							<Box className={styles["footer__icon-break"]} key={i + 1} />
						) : (
							<IconButton
								className={styles["footer-btn"]}
								key={i + 1}
								href={link}
								target="_blank"
								disableRipple
							>
								<Icon className={styles["footer-icon"]} />
							</IconButton>
						)
					)}
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					flexWrap="wrap"
					marginTop="20px"
					textAlign="center"
				>
					<Typography
						className={styles["footer-text"]}
						width="100%"
						display="flex"
						fontFamily="Source Sans Pro"
						alignItems="center"
						justifyContent="center"
						color="whitesmoke"
					>
						<EmailOutlined sx={{ marginRight: "10px", color: "#fee715ff" }} />
						support@thebeanmakers.com
					</Typography>
					<Typography
						className={`${styles["footer-text"]} ${styles["footer-text__pride"]}`}
						fontFamily="Source Sans Pro"
						width="fit-content"
						marginTop="20px"
						fontWeight="600"
						letterSpacing="0.5px"
					>
						#StandWithPride
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
