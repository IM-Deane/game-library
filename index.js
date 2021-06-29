import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Add routes
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => res.send("Hello from the homepage!"));

app.listen(PORT, () => {
	console.log(`Server listening on port http://localhost:${PORT}`);
});
