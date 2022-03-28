import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function ComingSoon() {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			minHeight="100vh"
			sx={{ background: "#101820ff" }}
		>
			<Typography color="#f2aa4cff" fontFamily="Oswald" fontSize="6rem">
				COMING SOON
			</Typography>
		</Box>
	);
}
