import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../../../images/rose-petals-bg.svg";
export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundImage: `url("${backgroundImg}")`,
		height: "100vh",
		width: "100vw",
		padding: "30px",
	},
	paper: {
		backgroundColor: theme.palette.background.dark,
		width: "960px",
		height: "600px",
		margin: "0 auto",
	},
	title: {
		color: theme.palette.text.light,
	},
	backLink: {
		fontSize: "1rem",
		display: "flex",
		alignItems: "center",
	},
	card: {
		width: "400px",
		height: "600px",
		display: "flex",
		flexDirection: "column",
		color: theme.palette.text.light,
		backgroundColor: theme.palette.background.dark,
	},
	cardMedia: {
		// paddingTop: "56.32%", // 16:9 ratio
		width: "100%",
		height: "400px",
	},
	cardContent: {
		flexGrow: 1,
		padding: "24px",
	},
	cardActions: {
		paddingTop: "20px",
	},
	divider: {
		backgroundColor: "white",
		margin: "10px 0",
	},
}));
