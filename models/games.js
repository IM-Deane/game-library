import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	coverArt: { type: String, required: true },
	releaseDate: { type: String, required: true },
	createdAt: { type: Date, required: true },
});

export default mongoose.model("Games", gameSchema);
