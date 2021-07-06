import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

// Add routes
import authRoutes from "./routes/auth.js";
import gameRoutes from "./routes/games.js";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Middleware
app.use("/", authRoutes);
app.use("/games", gameRoutes);

// Routes
app.get("/", (req, res) => res.send("Hello from the homepage!"));

// Connect to database
mongoose
	.connect(process.env.DB_CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
