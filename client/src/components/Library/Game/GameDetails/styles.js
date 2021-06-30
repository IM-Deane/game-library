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
		width: "100%",
		display: "flex",
		flexDirection: "column",
		color: theme.palette.text.light,
		backgroundColor: theme.palette.background.dark,
	},
	cardMedia: {
		paddingTop: "56.32%", // 16:9 ratio
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
