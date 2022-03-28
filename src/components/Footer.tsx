import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Telegram from "@mui/icons-material/Telegram";
import Reddit from "@mui/icons-material/Reddit";
import Pinterest from "@mui/icons-material/Pinterest";
import FavouriteOutlined from "@mui/icons-material/FavoriteOutlined";
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
			minHeight="30vh"
			borderTop="2px solid #fff"
			textAlign="center"
			flexWrap="wrap"
			sx={{ background: "#101820ff" }}
		>
			<Box>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					width="100%"
				>
					{[
						{
							link: "https://instagram.com/beanmakersofficial",
							icon: Instagram,
						},
						{ link: "https://twitter.com/beanmakers", icon: Twitter },
						{ link: "https://discord.gg/SAfv4gk8hn", icon: Discord },
						{ link: "", icon: Telegram },
						{ link: "", icon: Patreon },
						{ link: "https://www.reddit.com/u/thebeanmakers", icon: Reddit },
						{ link: "https://pin.it/4fnZzeV", icon: Pinterest },
					].map(({ link, icon: Icon }, i) => (
						<IconButton
							className={styles["footer-icon"]}
							key={i + 1}
							href={link}
							target="_blank"
							disableRipple
						>
							<Icon sx={{ width: "32px", height: "32px" }} />
						</IconButton>
					))}
				</Box>
				<Box
					display="flex"
					marginTop="30px"
					alignItems="center"
					justifyContent="center"
				>
					<Typography
						fontFamily="Source Sans Pro"
						fontSize="1.2rem"
						color="#FFD700"
					>
						#StandWithUkraine
					</Typography>
					<FavouriteOutlined
						height="1.2rem"
						sx={{ marginLeft: "5px", color: "#0057B8" }}
					/>
				</Box>
			</Box>
		</Box>
	);
}
