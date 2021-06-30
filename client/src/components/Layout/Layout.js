import React, { useState, useEffect } from "react";
import { Link as NavLink, useHistory } from "react-router-dom";

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
import { Link } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GamesIcon from "@material-ui/icons/Games";

import { useStyles } from "./styles";

import Library from "../Library/Library";

const Layout = ({ Content }) => {
	const classes = useStyles();
	const history = useHistory();

	// Handle user logout
	const logout = () => {
		history.push("/");
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

	// Watch for changes to the viewport
	useEffect(() => {
		window.addEventListener("resize", handleWidthChange);
		// Toggle viewport on smaller screens
		if (width <= 650) {
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

					<IconButton color="inherit" onClick={() => logout()}>
						<ExitToAppIcon />
						<Typography variant="body2">Sign Out</Typography>
					</IconButton>
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
					<ListItem>
						<ListItemIcon>
							{/* User avatar */}
							<GamesIcon />
						</ListItemIcon>
						<ListItemText primary="Games" />
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
				<Container maxWidth="lg" className={classes.container}>
					{/* Render the passed component */}
					<Grid container spacing={4}>
						<Grid item sm={12}>
							<Library />
						</Grid>
					</Grid>
				</Container>
			</main>
		</div>
	);
};

export default Layout;
