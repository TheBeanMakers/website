import Box from "@mui/material/Box";

import styles from "../styles/gallery.module.css";

export function Gallery() {
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
				id="gallery_wrapper-1"
				className={styles["wrapper-1"]}
				display="flex"
				flexWrap="wrap"
				minHeight="100vh"
				maxWidth="90vw"
				justifyContent="center"
				paddingTop="6rem"
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
