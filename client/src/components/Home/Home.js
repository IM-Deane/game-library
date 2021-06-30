import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

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
	const [showHint, setShowHint] = useState(false);

	const history = useHistory();

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
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
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
						/>
						{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={() => history.push("/games")}
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
										? "Pssst... you can just click the button to login!"
										: "Forgot your password?"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

export default Home;
