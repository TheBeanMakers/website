import Button from "@mui/material/Button";
import styles from "../styles/navbar.module.css";

export function NavBtn(props: { text: string; active: boolean }) {
	return (
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
}
