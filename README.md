# Project: Game Library Manager

TODO: Add project image

TODO: Add link to a live demo

**Current Version:** 0.1.12

## Expanded Version Description:

This project began as a simple backend express application. The goal was to
practice building a RESTful API.

However, after completing the API I've decided to make the app more interesting.
The next version will feature a client side interface that allows users to
manage a small game library.

The app will come populated with 10 games that will be rendered as a list. The
user can add new games to the library as well edit and delete existing titles.

The expected outcome of this new version is a small but fully functional MERN
application.

After it's completion, I will have hopefully solidified my understanding of this
development stack.

### Stack:

- HTML5
- Material-UI
- REACT
- MONGO DB
- EXPRESS/NODE

## Previous Version:

~~The goal of this project is to practice building a RESTful API.~~

Although i've built one before, I thought it would be good practice to create
another one.

So, I intend to create a small javascript project that utilizes node.js and
express as its backend.

**Note:** Postman was used to test the routing of this application.

If you're new to the backend, Postman is a great little application that enables
developers to make test requests to their server.

To get started with Postman, you can visit their site and download it.

[https://www.postman.com/downloads/](https://www.postman.com/downloads/).

### Why do we need an Postman to make test requests?

Well the address bar of your browser (ie. Google chrome) only allows you to make
GET requests. This is great when you simply need to fetch information **from**
your server.

However, when you want to test other CRUD functionality, you will need to make
other types of requests. This is what's great about the Postman application.

As I said earlier, it allows your to make other types of requests to your
server.

Thanks Postman.

### Development Stack:

- HTML5
- CSS3
- Javascript
- Node.js
- Express.js

## Version History:

**Version 0.1.12:**

Added two main lists to the libary page: Recently Added and All Games.

Implemented collapsible containers for each of the lists.

They now allow a user to quickly hide the lists that they're not interested in.

**Version 0.1.11:**

Updated the layout breakpoints of the library. I've also reduced the size of the
game cards to about 180px by 250px. This has allowed full cover art to be
displayed and enabled more cards per row.

For the overall design of the site, i've decided to base it off of the Steam
game library page.

**Version 0.1.10:**

Updated the styling of the confirmation alerts. They are now consistent across
the site.

I've also added confirmation visuals that are triggered when the user performs a
CRUD action.

For new games, the page is refreshed to simulate the app getting the new data
from the database.

For game deletions, the user is redirected back to the library upon the game's
successful removal.

For updates to the game's data, I've made a new fetch request to the database
once the user clicks the alert's close button.

These visual features should provide the user with a better experience.

**Version 0.1.9:**

Implemented a basic signin feature.

Currently, the user must enter the correct username and password.

The credentials are stored in env variables.

If they're stuck, I've included the correct credentials as a hint tha's
displayed once they click the "Forgot your Password?" link.

**Version 0.1.8:**

_Major:_ Implemented the update and delete game functions for the game
management screen.

With the addition of these features, the game manager now possesses core CRUD
functionality.

The next few updates will focus on the styling of the application.

After this is complete, I will be comfortable launching the app.

Once the application is live, I will think about adding additional features such
as a search function and perhaps a simple rating system.

_Minor:_

Modified the styling of the game card details page. It now renders game cover
art properly.

I've also added a floating edit button for the card. Users must click this
button if they would like to update/delete the game.

**Version 0.1.7:**

Fixed an issues with the id of the games. The games weren't being fetched from
the database because the wrong id was being supplied.

I've removed the id attribute from the database schema and updated the logic to
pass the proper id value (\_id) instead.

**Version 0.1.6:**

Made minor style adjustment to the game cards. The title has been removed and
i've added a small hover animation.

**Version 0.1.5:**

Updated the server controller logic to reflect the newly implemented MongoDB
database.

Althought the logic is present and posts are being added and fetched from the
DB, further testing is needed.

**Version 0.1.4:**

Officially connected the server to the MongoDB database.

When a user opts to upload a game to the library, it is now saved in the
database.

The next few versions will be focused on converting the server routes to post
and fetch data to the database.

**Version 0.1.3:**

Created an upload feature for the game library. When the upload button in the
sidebar is clicked, it will open a game creation form.

This form will enable users to add a new game entry and "upload" it to the
library.

All the fields are required.

**Version 0.1.2:**

Began modifying the layout of the site to accommodate a toolbar.

I would like to experiment with having a toolbar that will display information
about the game library.

I have also modifed the library cards to only display the coverart and title.
After researching the dashboards of xbox and steam, I found that they both opted
to let the coverart tell the user which game they were looking at.

This will also make the game details screen less redundant as it currently
displays the same info to the user.

**Version 0.1.1:**

Styled the game details page. It is currently a vertical card that takes up a
majority of the viewport.

**Version 0.1.0:**

Implemented a custom site color theme, login page, library page, and game edit
modal.

_Login page:_

Since the application's primary goal is to practice working with API's, I
decided to use a login form
[template](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side).

As the app will not have true authentication or profiles, the form simply
simulates the login feature.

_Library:_ The library constitutes the main view of the application. It will
render a list of cards which contain details about the games.

The current card images are randomly fetched from unsplash.com.

Eventually, I will implement the cover art as the source images.

_Edit Modal:_ The edit modal allows the user to edit the game without switching
to a new page.

Currently, this feature displays a material-ui dialog box when the user clicks
the edit button.

In the next few updates, I will implement a save changes button and a delete
button.

The card details page simply provides them with a full view of the game details.

**Version 0.0.9:**

Decided to change the CSS framework from Tailwindcss to Material-ui.

I made this decision to speed up the applications development. I am currently
still learning both M-Ui and Styled-Components. So I felt like it wasn't a great
idea to add a 3rd library to the mix.

This change should enable me to finish the app's main design within the next few
versions/commits.

After that, I intend to implement the MongoDB database.

**Version 0.0.8:**

Added a game details page.

This page will present the user with a full page view of the game details. It
will also allow them to edit and delete the game.

In a future update I may add buttons that will allow the user to update/delete
the game without navigating to this page.

In which case, the page would serve more as a general details screen.

**Version 0.0.7:**

Implemented client navigation and super ugly login form.

Currently the form simply navigates to the library when the user clicks the
button.

I may added authentication at a later stage or remove the login feature.

**Version 0.0.6:**

Created client side API routes.

Also fixed a minor bug which was causing a cross origin request error. I had
placed the cors middleware in the wrong section of server/index.js

**Version 0.0.5:**

Implemented new server-side routing that will handle the CRUD functions of the
game library app.

Currently the app's "database" is an array of javascript objects stored in the
controllers folder.

After the client routing/api is ready, I will create a populated mongodb
database.

**Version 0.0.4:**

Created client side boilerplate using creat-react-app and tailwindcss.

**Version 0.0.3:**

Removed the CRUD logic from the routes module and inserted it into a controllers
module.

Separating the logic from the routes makes the app easier to manage in my
opinion.

I believe this is also "best practice" for medium sized to large scale projects.

**Version 0.0.2:**

Created routes that will handle the CRUD requests.

**Version 0.0.1:**

Created an express server as the basic backend of the site.
