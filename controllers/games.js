import { v4 as uuidv4 } from "uuid";

// Temp user "database"
let games = [
	{
		title: "Halo 4",
		coverArt: "Cool Image",
		description:
			"Halo 4 is a 2012 first-person shooter video game developed by 343 Industries and published by Microsoft Studios for the Xbox 360 video game console. The fourth mainline installment and seventh overall in the Halo franchise.",
		releaseDate: "Novemeber 06, 2012",
		id: uuidv4(),
	},
	{
		title: "Halo 3",
		coverArt: "Cool Image",
		description:
			"Halo 3 is a 2007 first-person shooter game developed by Bungie for the Xbox 360 console. The third installment in the Halo franchise, the game concludes the story arc begun in 2001's Halo: Combat Evolved and continued in 2004's Halo 2",
		releaseDate: "September 25, 2007",
		id: uuidv4(),
	},
];

// All games
export const getAllGames = (req, res) => {
	try {
		res.status(200).send(games);
	} catch (error) {
		console.log(error);
		res.status(404).send("Games were not found!");
	}
};

// Specified game
export const getGame = (req, res) => {
	const { id } = req.params;
	try {
		console.log(`Get game with id of ${id}`);

		const game = games.find((game) => game.id === id);

		res.status(203).send(game);
	} catch (error) {
		console.log(error);
	}
};

// Add game
export const addGame = (req, res) => {
	const { title, coverArt, description, releaseDate } = req.body;

	try {
		games.push({
			title,
			coverArt,
			description,
			releaseDate,
			id: uuidv4(),
		});

		res.status(201).send("Game successfully added.");
	} catch (error) {
		console.log(error);
	}
};

// Update game
export const updateGame = (req, res) => {
	const { id } = req.params;
	const { title, coverArt, description, releaseDate } = req.body;

	try {
		console.log(`Game with id of ${id} has been found.`);
		const updatedGame = games.find((game) => game.id === id);

		if (title) {
			updatedGame.title = title;
		}
		if (coverArt) {
			updatedGame.cover = cover;
		}
		if (description) {
			updatedGame.description = description;
		}
		if (releaseDate) {
			updatedGame.releaseDate = releaseDate;
		}

		res.status(200).send(updatedGame);
	} catch (error) {
		console.log(error);
	}
};

// Delete game
export const deleteGame = (req, res) => {
	const { id } = req.params;

	try {
		// Check if game exists
		if (!games.find((game) => game.id === id))
			return res.status(404).send("Game not found.");

		// Remove game from database
		games = games.filter((game) => game.id !== id);

		res.status(202).send("Game has been deleted from the library.");
	} catch (error) {
		console.log(error);
	}
};
