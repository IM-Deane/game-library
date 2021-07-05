import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { signin } from "../../api/index";

import {
	Grid,
	Paper,
	Avatar,
	Typography,
	TextField,
	Button,
} from "@material-ui/core";

import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import { useStyles } from "./styles";

const Home = () => {
	const classes = useStyles();
	const [signIn, setSignIn] = useState({
		username: "GamerGuy16",
		password: "",
	});
	const [showHint, setShowHint] = useState(false);

	const history = useHistory();

	// Handle sign in
	const handleFormChange = (e) => {
		setSignIn({ ...signIn, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data } = await signin(signIn);

		if (!data.token)
			return alert("Sorry, your username or password is incorrect.");

		const token = data.token;

		localStorage.setItem("token", token);
		history.push("/games");
	};

	useEffect(() => {
		document.title = "Sign In | Game Manager";
	}, []);

	return (
		<Grid container component="main" className={classes.root}>
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<SportsEsportsIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} noValidate onSubmit={handleSubmit}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							defaultValue="GamerGuy16"
							autoComplete="username"
							type="text"
							autoFocus
							onChange={handleFormChange}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleFormChange}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link
									to="#"
									variant="body2"
									onClick={() => setShowHint(!showHint)}
								>
									{"Forgot your password?"}
								</Link>
								<div style={{ display: `${showHint ? "block" : "none"}` }}>
									<p>Username: GamerGuy16</p>
									<p>Password: gameManager123</p>
								</div>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

export default Home;
