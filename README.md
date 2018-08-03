# Strings
Strings is a simple web app for posting strings to a database, and viewing the contents of that database.

Strings has two pages:
- The Home page, where you can view all the strings in the database
- The Submit page, where you can submit strings to the database

## Set Up
1. This project is built to interact with a Postgres database. Download Postgres by following the instructions found here: https://www.postgresql.org/download/
<br><br>
Once installed, run the following commands from your terminal:
- `createdb Strings;` 
- `psql Strings;`
- `CREATE TABLE Strings(string text);`
- `ctrl + Z`
2. Clone the repository locally<br>
`git clone https://github.com/prigoose/strings.git`
2. Navigate into the newly cloned directory<br>
`cd strings`
3. Install dependencies<br>
`npm install`
4. Start the application<br>
`npm start`
5. Navigate to http://localhost:3000/
 
 ## Tests
To run tests from the command line, install Jest globally via `npm install jest -g`. <br>This may require root access, e.g. `sudo npm install jest -g`.

I wrote tests for the Home Page container component.
<br>To run the tests that I built (as opposed to tests that come pre-built with React Boilerplate), use `npm run test:priya`.

## Requirements
- React Router.
(See `containers/App/index.js`)
- Redux.
(Used throughout application)
- Redux Saga.
(See all files named `saga.js`)
- Reselect.
(See all files named `selectors.js`)
- Styled Components.
(See `components/Input/index.js`, and others)
- Unit Tests for one container. 
(See `containers/HomePage/tests`)
