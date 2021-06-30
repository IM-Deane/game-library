import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
	Card,
	CardActionArea,
	CardAction,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";

// Get single game details
import { getGame } from "../../../../api/index";

// File uploader
import FileBase from "react-file-base64";
// Goal of this page is to display more info about the game
// and allow user to edit its settings

const GameDetails = () => {
	const [game, setGame] = useState({
		title: "",
		coverArt: "",
		description: "",
		releaseDate: "",
	});
	const [editMode, setEditMode] = useState(false);
	const { id } = useParams();

	const getGameDetails = async () => {
		const { data } = await getGame(id);

		await setGame(data);
	};

	const handleFileInput = (file) => {
		// Supported image formats
		const types = ["image/jpeg", "image/jpg", "image/png"];

		console.log(file);

		// Handle empty files
		if (!file) return alert("Detected an empty file input. Please try again.");

		// Check if file format is supported
		// if (!types.forEach((type) => file.search(type)))
		// 	return alert(
		// 		"File type not supported! Please upload an image in jpeg, jpg, or png format."
		// 	);

		setGame({ ...game, coverArt: file });
	};

	// Fetch game from DB
	useEffect(() => {
		if (id) {
			getGameDetails();
		}
	}, []);

	return (
		<Card>
			<h2>{editMode ? "Editing Game" : "Game details"}</h2>
			<button onClick={() => setEditMode(!editMode)}>Toggle Edit mode</button>

			<Link style={{ color: "blue", textDecoration: "underline" }} to="/games">
				Go back to library
			</Link>

			<p>{game.title}</p>

			{/* Toggle Edit mode  */}

			{editMode ? (
				<div>
					<form>Edit form</form>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) => handleFileInput(base64)}
					/>
				</div>
			) : (
				<div>
					<img src={game.coverArt} alt={game.title} />
					<h3>{game.title}</h3>
					<p>{game.description}</p>
					<small style={{ color: "grey" }}>{game.releaseDate}</small>
				</div>
			)}
		</Card>
	);
};

export default GameDetails;
