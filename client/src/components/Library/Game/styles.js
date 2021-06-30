import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		color: theme.palette.text.light,
		backgroundColor: theme.palette.background.dark,
		"&:hover": {
			backgroundColor: theme.palette.background.light,
			color: theme.palette.text.dark,
		},
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	cardLink: {
		"&:hover": {
			textDecoration: "none",
		},
	},
}));
