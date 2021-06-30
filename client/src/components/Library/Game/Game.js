import React, { useState } from "react";

import { Link } from "react-router-dom";

const Game = ({ game }) => {
	const { id, title, coverArt, description, releaseDate } = game;

	return (
		<article
			style={{
				width: "50%",
				border: "2px solid black",
				borderRadius: "8px",
				margin: "20px 10px",
				padding: "10px",
			}}
		>
			<Link to={`/games/${id}`}>
				<img src={coverArt} alt={coverArt} />
				<hr />
				<h2 style={{ fontSize: "2rem" }}>{title}</h2>
				<p style={{ margin: "10px 0" }}>{description}</p>
				<small style={{ color: "grey" }}>{releaseDate}</small>
			</Link>
		</article>
	);
};

export default Game;
