import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
	card: {
		backgroundColor: "red",
		color: (props) => props.color,
	},
});
