import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#7B5D75",
		},
		secondary: {
			main: "#848B8E",
			alt: "#83838C",
		},
		background: {
			default: "#19171C",
			light: "#F7F6F6",
			dark: "#19171C",
		},
		text: {
			default: "#F7F6F6",
			light: "#F7F6F6",
			dark: "#19171C",
		},
	},
});

export default theme;
