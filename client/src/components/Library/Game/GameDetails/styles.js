import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../../../images/rose-petals-bg.svg";
export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundImage: `url("${backgroundImg}")`,
		minHeight: "100%",
		height: "1000px",
		width: "100%",
		padding: "40px",
	},
	paper: {
		backgroundColor: "transparent",
		width: "650px",
		height: "450px",
		margin: "30px auto 0",
		[theme.breakpoints.down("sm")]: {
			width: "350px",
			height: "700px",
		},
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
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.text.light,
		background: "transparent",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "initial",
			justifyContent: "initial",
		},
	},

	cardMedia: {
		minWidth: "50%",
		minHeight: "100%",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		[theme.breakpoints.down("sm")]: {
			minWidth: "100%",
			minHeight: "45%",
		},
	},
	cardContent: {
		flexGrow: 1,
		minWidth: "50%",
		minHeight: "100%",
		padding: "24px",
		backgroundColor: theme.palette.background.dark,
		[theme.breakpoints.down("sm")]: {
			minWidth: "100%",
			minHeight: "55%",
			overflowY: "scroll",
		},
	},
	edit: {
		position: "absolute",
		bottom: "0",
		right: "8px",
	},
	cardActions: {
		paddingTop: "20px",
		position: "relative",
	},
	divider: {
		backgroundColor: "white",
		margin: "20px 0",
	},
	alert: {
		width: "100%",
		height: "100%",
	},
}));
