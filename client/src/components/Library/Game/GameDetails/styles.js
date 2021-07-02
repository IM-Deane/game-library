import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../../../images/rose-petals-bg.svg";
export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundImage: `url("${backgroundImg}")`,
		minHeight: "100%",
		height: "1000px",
		width: "100%",
		padding: "30px",
	},
	paper: {
		backgroundColor: theme.palette.background.dark,
		width: "310px",
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
		width: "100%",
		height: "800px",
		display: "flex",
		flexDirection: "column",
		color: theme.palette.text.light,
		backgroundColor: theme.palette.background.dark,
	},

	cardMedia: {
		minWidth: "100%",
		height: "100%",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	},
	cardContent: {
		width: "100%",
		padding: "24px",
		position: "relative",
	},
	edit: {
		position: "absolute",
		top: "20px",
		right: "8px",
	},
	cardActions: {
		paddingTop: "20px",
	},
	divider: {
		backgroundColor: "white",
		marginTop: "1px",
	},
	alert: {
		width: "100%",
		height: "100%",
	},
}));
