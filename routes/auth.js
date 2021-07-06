import express from "express";
const router = express.Router();

// Handle login attempts
export default router.post("/", (req, res) => {
	const { username, password } = req.body;

	try {
		// Validate signin attempt
		if (username !== process.env.USERNAME)
			return res.send({ message: "Username is incorrect", username });
		if (password !== process.env.USER_PASSWORD)
			return res.send({
				message:
					"Password is incorrect...Try clicking 'Forgot your password' ; )",
				password,
			});

		// User valid, send token
		res.status(200).json({ token: "valid123" });
	} catch (error) {
		console.log(error);
		res.json({ message: error });
	}
});
