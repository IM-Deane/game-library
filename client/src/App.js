import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

// Routes
import Home from "./components/Home/Home.js";
import Library from "./components/Library/Library.js";
import Game from "./components/Library/Game/GameDetails";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/games" component={Library} />
				<Route exact path="/games/:id" component={Game} />
				<Redirect to="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
