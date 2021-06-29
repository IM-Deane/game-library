import express from "express";
import {
	getAllGames,
	getGame,
	addGame,
	updateGame,
	deleteGame,
} from "../controllers/games.js";

const router = express.Router();

// Game routes
router.get("/", getAllGames);
router.get("/:id", getGame);
router.post("/", addGame);
router.patch("/:id", updateGame);
router.delete("/:id", deleteGame);

export default router;
