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
import { Alert, AlertTitle } from "@material-ui/lab";

import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import { useStyles } from "./styles";

const Home = () => {
	// Hooks
	const classes = useStyles();
	const history = useHistory();

	// State
	const [signIn, setSignIn] = useState({
		username: "GamerGuy16",
		password: "",
		error: false,
		errorMessage: {},
	});
	const [showHint, setShowHint] = useState(false);
	const [confirmation, setConfirmation] = useState(false);

	// Handle alert box
	const toggleConfirmationDialog = () => setConfirmation(!confirmation);

	// Handle sign in
	const handleFormChange = (e) => {
		setSignIn({ ...signIn, [e.target.name]: e.target.value });
	};

	const validateSignIn = (data) => {
		let isError = false;

		// Username is incorrect
		if (data.username) {
			isError = true;
			setSignIn({
				...signIn,
				error: true,
				errorMessage: {
					username: data.message,
				},
			});
			// Password is incorrect
		} else if (data.password) {
			isError = true;
			setSignIn({
				...signIn,
				error: true,
				errorMessage: {
					password: data.message,
				},
			});
		}

		// Handle other errors
		else if (data.message) {
			isError = true;
			return (
				<Alert
					className={classes.alert}
					severity="error"
					variant="filled"
					onClose={() => toggleConfirmationDialog()}
				>
					<AlertTitle>Error</AlertTitle>
					{data.message}
				</Alert>
			);
		}

		return isError;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data } = await signin(signIn);
		const isError = validateSignIn(data);
		// Throw errors
		if (isError) return;

		// if (!data.token)
		// 	return alert("Sorry, your username or password is incorrect.");

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
						Welcome to the Game Library Manager!
					</Typography>
					<Typography component="h2" variant="subtitle1">
						Please sign in to continue.
					</Typography>
					<form className={classes.form} noValidate onSubmit={handleSubmit}>
						<TextField
							error={!!signIn.errorMessage.username}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							helperText={
								signIn.errorMessage.username && signIn.errorMessage.username
							}
							defaultValue="GamerGuy16"
							autoComplete="username"
							type="text"
							onChange={handleFormChange}
						/>
						<TextField
							error={!!signIn.errorMessage.password}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							helperText={
								signIn.errorMessage.password && signIn.errorMessage.password
							}
							type="password"
							id="password"
							autoComplete="current-password"
							autoFocus
							onChange={handleFormChange}
						/>
						<Button
							disabled={
								signIn.username.length === 0 || signIn.password.length === 0
							}
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
									{showHint
										? "Here are your credentials:"
										: "Forgot your password?"}
								</Link>
								<div
									style={{
										display: `${showHint ? "block" : "none"}`,
									}}
								>
									<p>
										Username: <span style={{ color: "blue" }}>GamerGuy16</span>
									</p>
									<p>
										Password:{" "}
										<span style={{ color: "blue" }}>gameManager123</span>
									</p>
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
