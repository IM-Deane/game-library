import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";

import {
	Container,
	Grid,
	Paper,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Button,
	Typography,
	Link,
} from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Get single game details
import { getGame } from "../../../../api/index";

import { useStyles } from "./styles";

const GameDetails = () => {
	const classes = useStyles();
	const { id } = useParams();
	const [game, setGame] = useState({
		title: "",
		coverArt: "",
		description: "",
		releaseDate: "",
	});

	const getGameDetails = async () => {
		const { data } = await getGame(id);

		await setGame(data);
	};

	// Fetch game from DB or localstorage on page reload
	useEffect(() => {
		if (id) {
			getGameDetails();
		}
	}, [id]);

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Paper elevation={7} component="main" className={classes.paper}>
					<Card className={classes.card}>
						<CardMedia
							className={classes.cardMedia}
							image={game?.coverArt}
							title={game?.title}
						/>
						<CardContent className={classes.cardContent}>
							<Typography variant="h4" component="h2">
								{game?.title}
							</Typography>
							<Typography gutterBottom variant="subtitle2" component="p">
								Release Date: {game?.releaseDate}
							</Typography>
							<Divider className={classes.divider} />
							<Typography component="p">{game?.description}</Typography>
							{/* Rate game? */}

							<CardActions className={classes.cardActions}>
								<Link
									component={RouterLink}
									color="primary"
									underline="hover"
									className={classes.backLink}
									to="/games"
								>
									<ArrowBackIcon /> Go back to library
								</Link>
							</CardActions>
						</CardContent>
					</Card>
				</Paper>
			</Container>
		</div>
	);
};

export default GameDetails;
