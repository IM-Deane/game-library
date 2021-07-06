import React from "react";

import {
	Divider,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	TextField,
	Button,
} from "@material-ui/core";

// Icons
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CancelIcon from "@material-ui/icons/Cancel";

function GameForm({
	isNewGame = false,
	isFormOpen,
	toggleForm,
	handleFormChange,
	game = null,
	handleGame,
	handleDeleteGame,
}) {
	return (
		<>
			<Dialog open={isFormOpen} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">
					{isNewGame ? "Add New Game:" : "Manage Game:"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{isNewGame
							? "Use the inputs below to add a new game to the library."
							: "Use the inputs below to edit the game. When you're finished, press the save button to upload the changes to the library."}
					</DialogContentText>
					<Divider variant="middle" style={{ marginBottom: "10px" }} />
					<form>
						{/* Title */}
						<TextField
							autoFocus
							margin="dense"
							name="title"
							id="title"
							label="Game Title"
							defaultValue={isNewGame ? "" : game.title}
							type="text"
							onChange={handleFormChange}
							fullWidth
							required
						/>
						{/* Description */}
						<TextField
							margin="dense"
							name="description"
							id="description"
							label="Description"
							defaultValue={isNewGame ? "" : game.description}
							type="text"
							onChange={handleFormChange}
							fullWidth
							required
						/>
						{/* Release Date */}
						<TextField
							margin="dense"
							name="releaseDate"
							id="releaseDate"
							label="Release Date"
							defaultValue={isNewGame ? "" : game.releaseDate}
							type="text"
							onChange={handleFormChange}
							helperText="Format: June 30, 2021"
							fullWidth
							required
						/>
						{/* Cover Art */}
						<input
							accept="image/*"
							name="coverArt"
							id="coverArt"
							onChange={handleFormChange}
							type="file"
							required
							style={{ display: "none" }}
						/>
						<label htmlFor="coverArt">
							<Button
								style={{ marginTop: "20px" }}
								variant="contained"
								color="secondary"
								component="span"
								startIcon={<CloudUploadIcon />}
							>
								Upload Cover Art
							</Button>
						</label>
					</form>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={toggleForm}
						color="primary"
						variant="outlined"
						startIcon={<CancelIcon />}
					>
						Cancel
					</Button>
					{!isNewGame && (
						<Button
							onClick={handleDeleteGame}
							color="secondary"
							variant="contained"
							startIcon={<DeleteForeverIcon />}
						>
							Delete Game
						</Button>
					)}
					<Button
						onClick={handleGame}
						color="primary"
						variant="contained"
						startIcon={<CloudUploadIcon />}
					>
						Save Game
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default GameForm;
