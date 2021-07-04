import React, { useState, useEffect } from "react";
import { getAllGames } from "../../api/index";
import Game from "./Game/Game.js";

import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Grid,
	Typography,
} from "@material-ui/core";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Custom styles
import { useStyles } from "./styles";

const Library = () => {
	const classes = useStyles();
	const [games, setGames] = useState([]);
	const [recentGames, setRecentGames] = useState([]);

	const getMostRecentGames = (list) => {
		// Copy data and reverse (doesn't modify original list)
		const recent = [...list].reverse();
		setRecentGames(recent.slice(0, 6));
	};

	const handleGames = async () => {
		const { data } = await getAllGames();

		await setGames(data);
		await getMostRecentGames(data);
	};

	useEffect(() => {
		handleGames();
	}, []);

	return (
		<div>
			{/* Recently Added (limit 6) */}
			<Accordion
				defaultExpanded={true}
				className={classes.list}
				style={{ marginTop: "60px" }}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
					aria-controls="recent-games"
					id="recent-games"
				>
					<Typography className={classes.heading} component="h2">
						Recently Added
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container spacing={6} justify="center">
						{recentGames &&
							recentGames.map((game, index) => (
								<Game key={index} game={game} />
							))}
					</Grid>
				</AccordionDetails>
			</Accordion>

			{/* All Games */}
			<Accordion
				defaultExpanded={true}
				className={classes.list}
				style={{
					marginTop: "40px",
					marginBottom: "30px",
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
					aria-controls="all-games"
					id="all-games"
				>
					<Typography className={classes.heading} component="h2">
						All Games <span style={{ color: "grey" }}>({games.length})</span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container spacing={6} justify="center">
						{games &&
							games.map((game, index) => <Game key={index} game={game} />)}
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Library;
