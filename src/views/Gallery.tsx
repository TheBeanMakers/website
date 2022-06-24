import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

import styles from "../styles/gallery.module.css";

export function Gallery() {
	const scroll = (type: "top" | "bottom") =>
		window.scrollTo(0, type === "top" ? 0 : document.body.scrollHeight);

	return (
		<Box
			id="gallery_wrapper-1"
			display="flex"
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			minHeight="100vh"
			sx={{ background: "#101820ff" }}
		>
			<Box
				className={styles.scroll_items}
				position="fixed"
				top="50%"
				right="0"
				display="flex"
				justifyContent="center"
				alignItems="center"
				textAlign="center"
				flexWrap="wrap"
			>
				<IconButton
					className={styles["arrow-up"]}
					onClick={() => scroll("top")}
					disableRipple
				>
					<ArrowUpward />
				</IconButton>
				<Box height="0" width="100%"></Box>
				<Typography className={styles.text} fontSize="1.05rem">
					Scroll
				</Typography>
				<Box height="0" width="100%"></Box>
				<IconButton
					className={styles["arrow-down"]}
					onClick={() => scroll("bottom")}
					disableRipple
				>
					<ArrowDownward />
				</IconButton>
			</Box>
			<Box
				className={styles["container-1"]}
				display="flex"
				flexWrap="wrap"
				minHeight="100vh"
				maxWidth="90vw"
				justifyContent="center"
				paddingTop="6rem"
				marginBottom="2rem"
			>
				{Array.from({ length: 10000 }, (_x, i) => (
					<Box
						className={styles["question-mark"]}
						component="img"
						src="https://thatanonyg-personal.s3.ap-south-1.amazonaws.com/beanmakers/question_mark.webp"
						alt="Reveal Question Mark"
						key={i + 1}
					/>
				))}
			</Box>
		</Box>
	);
}
