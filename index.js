import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

// Add routes
import usersRoutes from "./routes/users.js";
import gameRoutes from "./routes/games.js";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());

// Middleware
app.use("/users", usersRoutes);
app.use("/games", gameRoutes);
app.use(cors());

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
