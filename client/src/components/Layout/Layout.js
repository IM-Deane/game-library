import React, { useState, useEffect } from "react";
import { Link as NavLink, useHistory } from "react-router-dom";

import { addGame } from "../../api/index";

// Classname utility for creating conditional classes
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	TextField,
	Button,
	Menu,
	MenuItem,
} from "@material-ui/core";

import { Alert, AlertTitle } from "@material-ui/lab";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CancelIcon from "@material-ui/icons/Cancel";

import { useStyles } from "./styles";

import Library from "../Library/Library";

const Layout = ({ Content }) => {
	const classes = useStyles();
	const history = useHistory();

	const [newGame, setNewGame] = useState({
		title: "",
		description: "",
		coverArt: "",
		releaseDate: "",
	});

	// Handle account menu functionality
	const [accountMenu, setAccountMenu] = useState(null);
	const openAccountMenu = (e) => {
		setAccountMenu(e.currentTarget);
	};

	const closeAccountMenu = () => {
		setAccountMenu(null);
	};

	// Handle game upload menu
	const [uploadForm, setUploadForm] = useState(false);
	const toggleUploadForm = () => setUploadForm(!uploadForm);

	// Handle user logout
	const logout = () => {
		history.push("/");
		// Remove token from storage
		localStorage.clear();
	};

	// Handle Navbar
	const [open, setOpen] = useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	// Store the current size of viewport window
	const [width, setWidth] = useState(window.innerWidth);

	const handleWidthChange = () => {
		setWidth(window.innerWidth);
	};

	const handleFormChange = async (e) => {
		// If exists, encode the file to base64
		if (e.target.files) {
			const file = e.target.files[0];
			const base64 = await convertToBase64(file);

			setNewGame({ ...newGame, [e.target.name]: base64 });
			return;
		}

		setNewGame({ ...newGame, [e.target.name]: e.target.value });
	};

	const convertToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleNewGame = async (e) => {
		e.preventDefault();

		const res = await addGame(newGame);
		console.log(res.status);

		// Clear input fields
		setNewGame({
			title: "",
			description: "",
			coverArt: "",
			releaseDate: "",
		});

		// Close Dialog box
		setAlertStatus(res.status);
		toggleConfirmationDialog();
		toggleUploadForm();
	};

	// Handle form confirmation
	const [alertStatus, setAlertStatus] = useState(200);
	const [confirmation, setConfirmation] = useState(false);
	const toggleConfirmationDialog = () => setConfirmation(!confirmation);

	// Reload page after successful game upload
	const confirmationClose = () => {
		toggleConfirmationDialog();
		window.location.reload();
	};

	// Display a confirmation alert after user submits form
	const confirmationAlert = (status) => {
		switch (status) {
			case 201:
				return (
					<Alert
						className={classes.alert}
						severity="success"
						variant="filled"
						onClose={() => confirmationClose()}
					>
						<AlertTitle>Success</AlertTitle>
						Game has been uploaded!
					</Alert>
				);
			// Handle errors
			case 500:
			case 403:
			case 404:
			case 405:
			case 409:
			case 410:
				return (
					<Alert
						className={classes.alert}
						severity="error"
						variant="filled"
						onClose={() => toggleConfirmationDialog()}
					>
						<AlertTitle>Error</AlertTitle>
						Something went wrong! Please check your inputs and try again.
					</Alert>
				);
			default:
				return (
					<Alert
						className={classes.alert}
						severity="success"
						variant="filled"
						onClose={() => confirmationClose()}
					>
						<AlertTitle>Success</AlertTitle>
						Game has been uploaded!
					</Alert>
				);
		}
	};

	useEffect(() => {
		document.title = "Library | Game Manager";
	}, []);

	// Watch for changes to the viewport
	useEffect(() => {
		window.addEventListener("resize", handleWidthChange);
		// Toggle viewport on smaller screens
		if (width <= 768) {
			handleDrawerClose();
		} else {
			handleDrawerOpen();
		}

		return () => window.removeEventListener("resize", handleWidthChange);
	}, [width]);

	return (
		<div className={classes.root}>
			{/* Top nav */}
			<AppBar
				position="absolute"
				className={clsx(classes.appBar, open && classes.appBarShift)}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden
						)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="h1" className={classes.title}>
						Game Library
					</Typography>
					<Button
						variant="contained"
						onClick={openAccountMenu}
						color="secondary"
						className={classes.button}
						startIcon={<SportsEsportsIcon />}
					>
						My Account
					</Button>
					{/* **** USER ACCOUNT ***** */}
					<Menu
						id="simple-menu"
						anchorEl={accountMenu}
						keepMounted
						open={Boolean(accountMenu)}
						onClose={closeAccountMenu}
					>
						<MenuItem onClick={closeAccountMenu}>Profile</MenuItem>
						<MenuItem onClick={logout}>
							Logout <ExitToAppIcon />
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
			{/* Sidenav */}
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				{/* Main menu list */}
				<List>
					<ListItem
						button
						style={{ paddingLeft: "18px" }}
						onClick={toggleUploadForm}
					>
						<ListItemIcon>
							{/* Upload game */}
							<CloudUploadIcon color="primary" style={{ fontSize: "2.2rem" }} />
						</ListItemIcon>
						<ListItemText primary="Upload new game" />
					</ListItem>
				</List>
				<Divider />
				{/* Account/Settings */}
				<List>
					<ListItem button component={NavLink} to="/account">
						<ListItemIcon>
							{/* User avatar */}
							<Avatar className={classes.avatar}>
								<SportsEsportsIcon />{" "}
							</Avatar>
						</ListItemIcon>
						<ListItemText primary="My Account" />
					</ListItem>
				</List>
			</Drawer>
			{/* Content of page */}
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="xl" className={classes.container}>
					{/* Render the passed component */}
					<Library />
				</Container>
			</main>
			{/* *********** GAME UPLOAD FORM ************ */}
			<Dialog open={uploadForm} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add New Game:</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Use the inputs below to add a new game to the library.
					</DialogContentText>
					<form>
						{/* Title */}
						<TextField
							autoFocus
							margin="dense"
							name="title"
							id="title"
							label="Game Title"
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
						onClick={toggleUploadForm}
						color="primary"
						variant="outlined"
						startIcon={<CancelIcon />}
					>
						Cancel
					</Button>
					<Button
						onClick={handleNewGame}
						color="primary"
						variant="contained"
						startIcon={<CloudUploadIcon />}
					>
						Save Game
					</Button>
				</DialogActions>
			</Dialog>
			{/* Form Confirmation dialog */}
			<Dialog open={confirmation} aria-describedby="alert-dialog-description">
				<DialogContent style={{ padding: "0" }}>
					{confirmation && confirmationAlert(alertStatus)}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Layout;
