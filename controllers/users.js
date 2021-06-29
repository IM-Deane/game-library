import { v4 as uuidv4 } from "uuid";

// Temp user "database"
let users = [];

// Fetch a single user
export const getUser = (req, res) => res.send(users);

// Fetch all users
export const getAllUsers = (req, res) => {
	// Get user id
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);

	res.send(foundUser);
};

// Add a new user
export const createUser = (req, res) => {
	// Add a user to the database
	const user = req.body;

	// Create a user with a unique id and add to DB
	users.push({ ...user, id: uuidv4() });

	res.send(
		`The user: ${user.firstName} ${user.lastName} was added to the database.`
	);
};

// Update an existing user
export const updateUser = (req, res) => {
	const { id } = req.params;
	//
	const { firstName, lastName, age } = req.body;

	// Find the user to update
	const user = users.find((user) => user.id === id);

	// Check the following conditions and update accordingly
	if (firstName) user.firstName = firstName;

	if (lastName) user.lastName = lastName;

	if (age) user.age = age;

	res.send(`User with the id of ${id} has been updated.`);
};

// Delete a specified user
export const deleteUser = (req, res) => {
	const { id } = req.params;

	// Remove the specified user from the database
	users = users.filter((user) => user.id !== id);

	res.send(`User with the id ${id} deleted from database.`);
};
