import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SkeletonLoader from "react-loading-skeleton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "../styles/about.module.css";
import DiscordIcon from "../components/icons/Discord";

export function About() {
	const [loading, setLoading] = useState(false);
	const [images, setImages] = useState<string[]>();
	const [slideShowImage, setSlideShowImage] = useState(-1);

	const handleSlideShowImage = () => {
		setSlideShowImage(
			slideShowImage === (images || []).length - 1 ? 0 : slideShowImage + 1
		);
	};

	useEffect(() => {
		setLoading(true);
		fetch("https://api.thebeanmakers.com/assets?type=about-slideshow")
			.then((data) => data.json())
			.then((data) => {
				setImages(data.images);
				setSlideShowImage(0);
				setLoading(false);
			})
			.catch(() => console.log("Error in fetching slideshow images"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!loading) setTimeout(handleSlideShowImage, 2200);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading, slideShowImage]);

	return (
		<>
			<Box
				id="about_wrapper-1"
				className={styles["wrapper-1"]}
				display="flex"
				position="relative"
				minHeight="100vh"
				justifyContent="center"
			>
				<Box
					position="absolute"
					top="0"
					left="0"
					minWidth="100%"
					minHeight="100vh"
					sx={{ backgroundColor: "rgba(21, 61, 89, 0.58)" }}
					className={styles["bg-overlay"]}
				/>
				<Box
					className={styles["container-1"]}
					display="flex"
					alignSelf="center"
					justifyContent="flex-start"
					alignItems="center"
					flexWrap="wrap-reverse"
					paddingTop="2rem"
					zIndex="1"
				>
					<Box
						className={styles["container-1__text-container"]}
						width="50%"
						marginRight="5rem"
						padding="2.5rem 3rem"
						borderRadius="0 15px 15px 0"
					>
						<Typography
							className={styles["container-1__text"]}
							fontWeight="600"
							fontSize="1.45rem"
							color="whitesmoke"
						>
							All our Beans are stored as tokens in a Smart Contract using a
							custom implementation of the ERC-721 standard, on the Ethereum
							Blockchain. At the Bean Factory, all the beans are programatically
							generated and have random traits. Some traits might just be rarer
							than others.
							<br />
							All the the beans have a floor price of 0.07 ETH. Happy bean
							hunting!
						</Typography>
					</Box>
					<Box
						className={styles["container-1__img"]}
						height="320px"
						width="320px"
						borderRadius="5%"
						marginLeft="5rem"
						boxShadow="rgba(0, 0, 0, 0.45) 0px 12px 28px 0px, rgba(0, 0, 0, 0.35) 0px 2px 4px 0px, rgba(255, 255, 255, 0.3) 0px 0px 0px 1px inset"
						{...(loading
							? {
									component: SkeletonLoader,
									baseColor: "#f2aa4cff",
									highlightColor: "rgba(255, 255, 255, 0.3)",
							  }
							: { component: "img", src: (images || [])[slideShowImage] })}
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				className={styles["wrapper-2"]}
				position="relative"
				minHeight="100vh"
				justifyContent="center"
				alignItems="start"
			>
				<Box
					position="absolute"
					top="0"
					left="0"
					minWidth="100%"
					minHeight="100%"
					sx={{ backgroundColor: "rgba(73, 34, 141, 0.5)" }}
					className={styles["bg-overlay"]}
				/>
				<Box
					className={styles["container-2"]}
					display="flex"
					justifyContent="center"
					flexWrap="wrap"
					zIndex="1"
					marginTop="3rem"
				>
					<Box
						className={styles["container-2__welcome"]}
						display="flex"
						justifyContent="center"
						flexWrap="wrap"
						height="fit-content"
					>
						<Typography
							className={styles["container-2__welcome-title"]}
							fontSize="3rem"
							fontFamily="Oswald"
							fontWeight="600"
							color="whitesmoke"
						>
							Welcome to the Guild
						</Typography>
						<Box
							height="4px"
							width="65%"
							sx={{ background: "#f2aa4cff" }}
						></Box>
					</Box>
					<Box
						className={styles["container-2__body"]}
						display="flex"
						justifyContent="center"
						alignItems="center"
						width="100%"
						marginTop="5rem"
					>
						<Box
							className={styles["container-2__body-img"]}
							component="img"
							src="https://cdn.thebeanmakers.com/assets/gamebanner.webp"
							height="320px"
							width="320px"
						></Box>
						<Box
							className={styles["container-2__body-break"]}
							height="0"
							width="100%"
						></Box>
						<Box
							className={styles["container-2__body-text-container"]}
							padding="2rem"
							width="45%"
							sx={{ background: "#101820ff" }}
						>
							<Typography
								fontSize="2.4rem"
								fontFamily="Oswald"
								fontWeight="600"
								color="#f2aa4cff"
							>
								GAME LAUNCHING SOON!
							</Typography>
							<Box
								height="2px"
								width="40%"
								marginY="10px"
								sx={{ background: "white" }}
							></Box>
							<Typography
								fontSize="1.7rem"
								fontFamily="Oswald"
								fontWeight="600"
								color="whitesmoke"
							>
								Come back to this page for news about the perks and rewards you
								get for being a member of the Guild. They will be launched as
								the NFT sales are going on and beyond the sale period as well!
								Join our Discord to find out about these quicker!
							</Typography>
							<Button
								className={styles["container-2__body-discord"]}
								disableRipple
								href="https://discord.thebeanmakers.com"
								target="_blank"
								startIcon={<DiscordIcon />}
							>
								Join Now!
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}
