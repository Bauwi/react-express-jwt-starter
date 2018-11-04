# React - Express - JWT Starter

Basic Starter built with React and Express

Includes React, Redux, React-router, JWT auth, styled-components and antd

## [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#getting-started)Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#prerequisites)Prerequisites

- Having a node 7.6 or later version installed on your machine.

- Having MongoDB installed on your machine.

### [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#installing)Installing

After cloning the repo:

install node modules in the root directory AND in the client directory:

```
npm install
```

Run the local MongoDB specifying the dbPath for mongod to use as a data directory

```
./mongod --dbpath ~/DATA_DIRECTORY_PATH
```

Start the webpack development server and the Express server with this single command. From the root directory :

```
npm run dev
```

## [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#deployment)Deployment

You can build your bundle before deploying using :

```
npm run build
```

You will need to set a JWT_SECRET and MONGODB_URI env variables for your prod server.

## [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#deployment)Remove Antd

To get rid of antd :

```
npm uninstall antd react-app-rewired react-app-rewire-less
```

Remove the config-overrides.js file in the client directory.
Remove css import in index.css

## [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#built-with)Built With

- [React](https://reactjs.org/) - 16.6.0 - The web framework used

- [Redux](https://redux.js.org/) - 5.0.6 - Predictable state container for JavaScript apps

- [Express](http://expressjs.com/) - 4.15.4 - Web framework for Node.js

- [React-router](https://reacttraining.com/react-router/core/guides/philosophy) - 4.3.1 - Client-side routing

- [Antd](https://ant.design/docs/spec/introduce) - 3.1.3 - Components Library

## [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#contributing)Contributing

welcomed.

## [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#authors)Authors

**Bauwi**

## [](https://github.com/Bauwi/react-express-jwt-starter/blob/master/readme.md#license)License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Bauwi/node-redux-chat-app/blob/master/LICENSE.md) file for details
