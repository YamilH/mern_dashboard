# Trade Tracker

## Overview

Trade Tracker is a MERN (MongoDB, Express.js, React.js, Node.js) application designed to create a solid link between the client and the server, utilizing MongoDB as the database. The goal of this project is to provide a seamless trading experience for users by allowing them to track their trades and manage their trading activities effectively.


## Project Structure

The project follows a specific directory structure to organize the client-side and server-side code. Here's an overview of the directory structure:

```.
├── client
│     ├── public
│     ├── src
│     │    ├── assets
│     │    ├── components
│     │    ├── scenes
│     │    ├── state
│     │    ├── App.js
│     │    ├── index.css
│     │    ├── index.js
│     │    └── theme.js
│     ├── jsconfig.json
│     ├── package-lock.json
│     └── package.json
└── server
      ├── controllers
      ├── data
      ├── models
      ├── routes
      ├── index.js
      ├── package-lock.json
      └── package.json
```

### Client

The `client` directory contains the front-end code of the application. It has the following subdirectories:

- `public`: This directory holds static files that are served by the client.
- `src`: This directory contains the main source code of the client application.
  - `assets`: This directory stores static assets such as images or fonts.
  - `components`: This directory contains reusable React components used throughout the application.
  - `scenes`: This directory contains the different scenes or pages of the application.
  - `state`: This directory includes state management-related files such as Redux reducers, actions, and store configuration.
  - `App.js`: The main entry point of the React application.
  - `index.css`: The global CSS file for styling the application.
  - `index.js`: The main JavaScript file responsible for rendering the React application.
  - `theme.js`: This file defines the theme and styling variables for the application.
- `jsconfig.json`: This file specifies the configuration options for the JavaScript language service used by the client code.
- `package-lock.json` and `package.json`: These files contain the dependencies and configuration details for the client-side packages used in the application.

### Server

The `server` directory contains the back-end code of the application. It has the following subdirectories:

- `controllers`: This directory holds the controllers responsible for handling the business logic of the application.
- `data`: This directory contains any data files required by the server.
- `models`: This directory includes the database models or schemas used by the server.
- `routes`: This directory defines the API routes and their associated handlers.
- `index.js`: The main entry point of the server application, responsible for setting up the server and connecting to the database.
- `package-lock.json` and `package.json`: These files contain the dependencies and configuration details for the server-side packages used in the application.


## Deployment

The deploy is made in a free layer of Render.com, it may take time to load the data from MongoDB
https://admin-frontend-21hu.onrender.com/


## Conclusion

Trade Tracker was an invaluable project that provided me with clairvoyance on how to seamlessly integrate a MERN (MongoDB, Express.js, React.js, Node.js) application, while also equipping me with new tools and skills to further enhance my growth as a software developer.





