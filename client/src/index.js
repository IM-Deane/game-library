import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById("root")
);
