import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import styles from "../styles/about.module.css";
import images from "../assets/images.json";

export function About() {
	const [slideShowImage, setSlideShowImage] = useState("");

	const handleSlideShowImage = () => {
		setSlideShowImage(images[0]);
		images.push(images.shift() || "");
		setTimeout(handleSlideShowImage, 2200);
	};

	useEffect(() => {
		handleSlideShowImage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
					flexWrap="wrap"
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
						component="img"
						src={slideShowImage}
						height="320px"
						width="320px"
						borderRadius="5%"
						marginLeft="5rem"
						boxShadow="rgba(0, 0, 0, 0.45) 0px 12px 28px 0px, rgba(0, 0, 0, 0.35) 0px 2px 4px 0px, rgba(255, 255, 255, 0.3) 0px 0px 0px 1px inset"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				className={styles["wrapper-2"]}
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
					sx={{ backgroundColor: "rgba(73, 34, 141, 0.5)" }}
					className={styles["bg-overlay"]}
				/>
				<Box
					className={styles["container-2"]}
					display="flex"
					alignSelf="center"
					justifyContent="center"
					alignItems="start"
					flexWrap="wrap"
					zIndex="1"
				>
					<Typography
						fontSize="3rem"
						fontFamily="Oswald"
						fontWeight="600"
						color="whitesmoke"
					>
						Welcome to the Guild
					</Typography>
					<Box height="4px" width="65%" sx={{ background: "#f2aa4cff" }}></Box>
				</Box>
			</Box>
		</>
	);
}
