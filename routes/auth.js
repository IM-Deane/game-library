import express from "express";
const router = express.Router();

// Handle login attempts
export default router.post("/", (req, res) => {
	const { username, password } = req.body;

	try {
		// Validate attempt
		if (
			username !== process.env.USERNAME ||
			password !== process.env.USER_PASSWORD
		)
			return res
				.status(403)
				.send(
					"Login Attempt has failed. Your email or password are incorrect."
				);
		// User valid, send token
		res.status(200).json({ token: "valid123" });
	} catch (error) {
		console.log(error);
		res.status(403).json({ message: error });
	}
});
