# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

Run `$ npm run` to see the list of commands available. To see what each command does, look at `package.json`.

The app uses a basic Express file structure, and includes SQL files to set up the schema and import data.

```sh
src/
  albums.sql          # seed album data
  database.js         # database connection and queries
  package.json        # npm standard
  public/             # static assets go here
  README.md           # you are here
  schema.sql          # define database schema here
  server.js           # web server
  views/              # html templates go here
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `vinyl`: `$ npm run db:create`
1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `albums.sql`: `$ npm run db:seed`

## General

- [ ] __10:__ Solution is in a public repository called `phase-4-challenge`.
- [ ] __10:__ All dependencies are declared in a `package.json` file.
- [x] __10:__ Express is used for the web server.
- [x] __10:__ PostgreSQL is used for the database.
- [x] __10:__ Database is seeded with at least 4 albums (check out the [sample data](#sample-data)).

## Site Header

Content in the header varies based on the user's authentication state.

#### Requirements

Users can:

- [ ] __20:__ See the name of the website in the site-wide header.
- [ ] __20:__ See links to "Sign Up" and "Sign In" when logged out.
- [ ] __20:__ See links to "Profile" and "Sign Out" when logged in.

Layout:

- [ ] __20:__ The layout of the header matches the wireframes.

## Home

Displays various album-related information.

Routing:

- [X] __20:__ Navigating to `/` loads the home page.

Users can:

- [x] __20:__ View all albums on the home page (under the "Records" heading).
- [ ] __20:__ View only the _**3 most recent**_ reviews on the home page sorted by newest first.
- [ ] __20:__ Click on an album title to go to the album page (e.g. `/albums/<ALBUM ID>`).

Layout:

- [ ] __10:__ The site-wide header is visible on the home page.
- [ ] __20:__ The layout of the home page matches the wireframes.

## Sign Up

Users are able to sign up for a new account.

#### Requirements

Routing:

- [ ] __20:__ Navigating to `/sign-up` loads the sign up page.

Users can:

- [ ] __20:__ Sign up for an account with name, email, and password.
- [ ] __20:__ Be redirected to their profile page (e.g. `/users/<USER ID>`) after signing up.

Users CANNOT:

- [ ] __30:__ Sign up without a name value.
- [ ] __30:__ Sign up without an email address value.
- [ ] __30:__ Sign up with an email that is already in use.

Layout:

- [ ] __10:__ The site-wide header is visible on the sign up page.
- [ ] __20:__ The layout of the sign up page matches the wireframes.

## Sign In

Users are able to sign in to an account.

#### Requirements

Routing:

- [ ] __20:__ Navigating to `/sign-in` loads the sign in page.

Users can:

- [ ] __20:__ Sign in to an existing account with an email address and password.
- [ ] __20:__ Be redirected to their profile page (e.g. `/users/<USER ID>`) after signing in.

Users CANNOT:

- [ ] __30:__ Sign in with an invalid email address and password combination.

Layout:

- [ ] __10:__ The site-wide header is visible on the sign in page.
- [ ] __20:__ The layout of the sign in page matches the wireframes.

## Sign Out

Users are able to sign out.

#### Requirements

Users can:

- [ ] __20:__ Be redirected to the home page (e.g. `/`) after signing out by clicking the Sign Out button.

Users CANNOT:

- [ ] __20:__ Perform any actions that require a user to be signed in after signing out.

## User Profile

Displays user details and submitted album reviews.

#### Requirements

Routing:

- [ ] __20:__ Navigating to `/users/<USER ID>` loads the user profile page.

Users can:

- [ ] __20:__ View their name, email, and join date.
- [ ] __20:__ View only their submitted reviews sorted by newest first.
- [ ] __20:__ View "trash can" delete icons only next to reviews submitted by users.
- [ ] __20:__ View a pop-up with a Cancel button, a Confirm button, and a message that reads, "Are you sure you want to delete this review?" after clicking the delete icon next to a review.
- [ ] __20:__ Have the pop-up dismissed after clicking Cancel.
- [ ] __20:__ Have the review deleted from the database and removed from the user profile page after clicking Confirm.

Layout:

- [ ] __10:__ The site-wide header is visible on the user profile page.
- [ ] __20:__ The layout of the user profile page matches the wireframes.

## Album Details

Displays album details and reviews.

#### Requirements

Routing:

- [X] __20:__ Navigating to `/albums/<ALBUM ID>` loads the album page.

Users can:

- [ ] __20:__ View the name of the album on the album page.
- [ ] __20:__ View all reviews for the album on album page sorted by newest first.
- [ ] __20:__ View "trash can" delete icons next to reviews the user can delete.
- [ ] __20:__ View a pop-up with a Cancel button, a Confirm button, and a message that reads, "Are you sure you want to delete this review?" after clicking the trash can icon next to a review.
- [ ] __20:__ Have the pop-up dismissed after clicking Cancel.
- [ ] __20:__ Have the review deleted from the database and removed from the album page after clicking Confirm.
- [ ] __20:__ View a button with the label "Add Review".
- [ ] __20:__ Be redirected to the new review page (e.g. `/albums/<ALBUM ID>/reviews/new`) the after clicking the "Add Review" button.

Users CANNOT:

- [ ] __20:__ Delete a review when not logged in.
- [ ] __20:__ Delete another user's review.

Layout:

- [ ] __10:__ The site-wide header is visible on the album page.
- [ ] __20:__ The layout of the album page matches the wireframes.

## New Review

Displays a form that allows users to submit album reviews.

#### Requirements

Routing:

- [ ] __20:__ Navigating to `/albums/<ALBUM ID>/reviews/new` loads the new review page.

Users can:

- [ ] __20:__ Enter multi-line text in the text field.
- [ ] __20:__ Click the Submit button to submit the review.
- [ ] __20:__ Be redirected to the album page (e.g. `/albums/<ALBUM ID>`) after submitting the review.

Users CANNOT:

- [ ] __20:__ Submit a review when not logged in.
- [ ] __20:__ Submit an empty review.

Layout:

- [ ] __10:__ The site-wide header is visible on the new review page.
- [ ] __20:__ The layout of the new review page matches the wireframes.
