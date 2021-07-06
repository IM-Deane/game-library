import axios from "axios";

// Production
const API = axios.create({
	baseURL: "https://mern-game-library-manager.herokuapp.com/",
});

// Development
// const API = axios.create({ baseURL: "http://localhost:5000" });

// ***** AUTH *****
export const signin = (attempt) => API.post("/", attempt);

// ***** GAMES *****

// Get games
export const getAllGames = () => API.get("/games");

// Get specified game
export const getGame = (id) => API.get(`/games/${id}`);

// Add new game
export const addGame = (newGame) => API.post("/games", newGame);
// Edit Game data
export const updateGame = (updatedGame, id) =>
	API.patch(`/games/${id}`, updatedGame);

// Delete game
export const deleteGame = (id) => API.delete(`/games/${id}`);

// Rate game?
