import React, { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import {
	Grid,
	Card,
	Link,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";

// File decoder
import base64 from "base-64";

import { useStyles } from "./styles";

const Game = ({ game }) => {
	const classes = useStyles();
	const { id, title, coverArt } = game;

	const [showEditForm, setShowEditForm] = useState(false);

	const handleEditForm = () => {
		setShowEditForm(!showEditForm);
	};

	return (
		<>
			<Grid item xs={12} sm={6} md={4} xl={6}>
				<Link
					component={RouterLink}
					to={`/games/${id}`}
					className={classes.cardLink}
				>
					<Card className={classes.card}>
						<CardMedia
							className={classes.cardMedia}
							image={coverArt ? coverArt : "https://source.unsplash.com/random"}
							title={title}
						/>
					</Card>
				</Link>
			</Grid>
		</>
	);
};

export default Game;
