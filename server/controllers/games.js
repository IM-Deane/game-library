import mongoose from "mongoose";
import Games from "../models/games.js";

// All games
export const getAllGames = async (req, res) => {
	try {
		// Fetch games & sort by most recently added
		const games = await Games.find();
		res.status(200).send(games);
	} catch (error) {
		console.log(error);
		res.json({ message: error });
	}
};

// Specified game
export const getGame = async (req, res) => {
	const { id } = req.params;

	try {
		const game = await Games.findById(id);

		res.status(203).send(game);
	} catch (error) {
		console.log(error);
	}
};

// Add game
export const addGame = async (req, res) => {
	const game = req.body;

	// Create new game object
	const newGame = new Games({
		...game,
		createdAt: new Date().toISOString(),
	});

	try {
		// Add game to DB
		await newGame.save();
		res.status(201).send("Game successfully added.");
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// Update game
export const updateGame = async (req, res) => {
	const { id } = req.params;
	const game = req.body;

	try {
		// Handle 404
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).send("No games with that id!");
		// Find game and update the specified fields
		const updatedGame = await Games.findByIdAndUpdate(
			id,
			{ ...game, id },
			{ new: true }
		);

		// const updatedGame = games.find((game) => game.id === id);
		res.status(200).json(updatedGame);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error });
	}
};

// Delete game
export const deleteGame = async (req, res) => {
	const { id } = req.params;

	try {
		// Check if game exists
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).send("No games with that id!");

		// Remove game from database
		await Games.findByIdAndRemove(id);

		res
			.status(202)
			.json({ message: "Game has been deleted from the library." });
	} catch (error) {
		console.log(error);
		res.json({ message: error });
	}
};
