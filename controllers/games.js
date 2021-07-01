import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
import Games from "../models/games.js";

// Temp user "database"
let games = [
	{
		title: "Halo: Combat Evolved",
		coverArt: "Cover art",
		description:
			"Halo: Combat Evolved, also known as Halo: CE, is a first-person shooter game developed by Bungie and published by Microsoft Game Studios. It was released as a launch game for Microsoft's Xbox video game console on November 15, 2001. Microsoft released versions of the game for Windows and Mac OS X in 2003.",
		releaseDate: "November 15, 2001",
		id: uuidv4(),
	},
	{
		title: "Halo 2",
		coverArt: "Cover art",
		description:
			"Halo 2 is a 2004 first-person shooter game developed by Bungie and published by Microsoft Game Studios for the Xbox console. Halo 2 is the second installment in the Halo franchise and the sequel to 2001's critically acclaimed Halo: Combat Evolved.",
		releaseDate: "November 09, 2004",
		id: uuidv4(),
	},
	{
		title: "Halo 4",
		coverArt: "Cover art",
		description:
			"Halo 4 is a 2012 first-person shooter video game developed by 343 Industries and published by Microsoft Studios for the Xbox 360 video game console. The fourth mainline installment and seventh overall in the Halo franchise.",
		releaseDate: "November 06, 2012",
		id: uuidv4(),
	},
	{
		title: "Halo 3",
		coverArt: "Cover art",
		description:
			"Halo 3 is a 2007 first-person shooter game developed by Bungie for the Xbox 360 console. The third installment in the Halo franchise, the game concludes the story arc begun in 2001's Halo: Combat Evolved and continued in 2004's Halo 2.",
		releaseDate: "September 25, 2007",
		id: uuidv4(),
	},
	{
		title: "The Elder Scrolls IV: Oblivion",
		coverArt: "Cover art",
		description:
			"The Elder Scrolls IV: Oblivion is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks and the Take-Two Interactive division 2K Games.",
		releaseDate: "March 20, 2006",
		id: uuidv4(),
	},
	{
		title: "Mass Effect 2",
		coverArt: "Cover art",
		description:
			"Mass Effect 2 is an action role-playing video game developed by BioWare and published by Electronic Arts for Microsoft Windows and Xbox 360 in 2010, and for PlayStation 3 in 2011. It is the second installment in the Mass Effect series and a sequel to the original Mass Effect.",
		releaseDate: "January 26, 2010",
		id: uuidv4(),
	},
	{
		title: "Star Wars: Knights of the Old Republic",
		coverArt: "Cover art",
		description:
			"It is four thousand years before the Galactic Empire and hundreds of Jedi Knights have fallen in battle against the ruthless Sith. You are the last hope of the Jedi Order. Can you master the awesome power of the Force on your quest to save the Republic? Or will you fall to the lure of the dark side?",
		releaseDate: "November 19, 2003",
		id: uuidv4(),
	},
	{
		title: "God of War",
		coverArt: "Cover art",
		description:
			"God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 video game console, and has become a flagship title for the PlayStation brand, consisting of eight games across multiple platforms with a ninth currently in development.",
		releaseDate: "March 22, 2005",
		id: uuidv4(),
	},
	{
		title: "Fallout 3",
		coverArt: "Cover art",
		description:
			"Fallout 3 is a 2008 post-apocalyptic action role-playing open world video game developed by Bethesda Game Studios and published by Bethesda Softworks. The third major installment in the Fallout series, it is the first game to be created by Bethesda since it bought the franchise from Interplay Entertainment.",
		releaseDate: "October 28, 2008",
		id: uuidv4(),
	},
	{
		title: "Skyrim",
		coverArt: "Cover art",
		description:
			"The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011.",
		releaseDate: "November 11, 2011",
		id: uuidv4(),
	},
	{
		title: "The Witcher 3: Wild Hunt",
		coverArt: "Cover art",
		description:
			"The Witcher 3: Wild Hunt is an action role-playing game developed and published by Polish developer CD Projekt Red and is based on The Witcher series of fantasy novels written by Andrzej Sapkowski.",
		releaseDate: "May 19, 2015",
		id: uuidv4(),
	},
	{
		title: "Cyberpunk 2077",
		coverArt: "Cover art",
		description:
			"Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.",
		releaseDate: "December 10, 2020",
		id: uuidv4(),
	},
];

// All games
export const getAllGames = async (req, res) => {
	try {
		// Fetch games & sort by most recently added
		games = await Games.find().sort("-1");
		res.status(200).send(games);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error });
	}
};

// Specified game
export const getGame = async (req, res) => {
	const { id } = req.params;

	try {
		const game = await Games.findById(id);

		// const game = games.find((game) => game.id === id);

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
		_id: uuidv4(),
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
	}
};
