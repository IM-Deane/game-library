import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#c80398",
		},
		secondary: {
			main: "#7E6890",
			alt: "#708FC0",
		},
		background: {
			default: "#F2ECEB",
			light: "#F2ECEB",
			dark: "#031021",
		},
		text: {
			default: "#031021",
			light: "#F2ECEB",
			dark: "#031021",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			smed: 750,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

export default theme;
