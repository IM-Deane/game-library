import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
	Card,
	CardActionArea,
	CardAction,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";

const Game = ({ game }) => {
	const classes = useStyles();
	const { id, title, coverArt, description, releaseDate } = game;

	return (
		<Card>
			<Link to={`/games/${id}`}>
				<img src={coverArt} alt={coverArt} />
				<h2 style={{ fontSize: "2rem" }}>{title}</h2>
				<p style={{ margin: "10px 0" }}>{description}</p>
				<small style={{ color: "grey" }}>{releaseDate}</small>
			</Link>
		</Card>
	);
};

export default Game;
