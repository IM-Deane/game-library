import React, { useState, useEffect } from "react";
import { getAllGames } from "../../api/index";
import Game from "./Game/Game.js";

import { Paper, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const Library = () => {
	const classes = useStyles();
	const [games, setGames] = useState([]);

	const handleGames = async () => {
		const { data } = await getAllGames();

		await setGames(data);
	};

	useEffect(() => {
		handleGames();
	}, []);

	return (
		<Grid container className={classes.container}>
			<Paper elevation={6}>
				<Grid container>
					<Grid item>
						<Typography variant="h3">My Game Library</Typography>
					</Grid>
					{/* Games section */}
					<Grid item>
						{games &&
							games.map((game, index) => <Game key={index} game={game} />)}
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default Library;
