import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
	container: {
		marginTop: "25px",
	},
	card: {
		backgroundColor: "red",
		color: (props) => props.color,
	},
});
