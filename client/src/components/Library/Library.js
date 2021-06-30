import React, { useState, useEffect } from "react";

import { getAllGames } from "../../api/index";

import Game from "./Game/Game.js";

const Library = () => {
	const [games, setGames] = useState([]);

	const handleGames = async () => {
		const { data } = await getAllGames();

		await setGames(data);
	};

	useEffect(() => {
		handleGames();
	}, []);

	return (
		<div>
			<header>
				<h2>My Game Library</h2>
			</header>
			{/* Games section */}
			<section
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{games && games.map((game, index) => <Game key={index} game={game} />)}
			</section>
		</div>
	);
};

export default Library;
