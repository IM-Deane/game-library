import { makeStyles } from "@material-ui/core/styles";

import backgroundImg from "../../images/rose-petals-bg.svg";

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundImage: `url("${backgroundImg}")`,
		height: "100vh",
		width: "100vw",
		paddingTop: "50px",
	},
	header: {
		padding: "20px",
		margin: "0 auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	avatarSmall: {
		marginLeft: "10px",
		width: theme.spacing(3),
		height: theme.spacing(3),
		color: theme.palette.text.light,
		backgroundColor: theme.palette.primary.main,
	},
	avatarLarge: {
		marginLeft: "10px",
		width: theme.spacing(7),
		height: theme.spacing(7),
		color: theme.palette.text.light,
		backgroundColor: theme.palette.secondary.main,
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	list: {
		background: "transparent",
		color: "white",
	},
	heading: {
		color: "white",
		marginBottom: "30px",
	},
}));
