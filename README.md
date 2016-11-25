# Samwise - Frontend

This repository contains the front end code for Samwise's staff faceing application. That is the dashboard for those manageing a e-commerece storefront through Samwise. It is built off of React and Redux and developed to be launched on a simple file server as it is simply a static interface with the Samwise backend.

## Hot Reloaded

This project takes advantage of React Hot Loading to create a fast response cycle. It maintains production code cleanlyness though by placing all of the hot loading relavent code into the `/dev` folder. 

- The `npm run dev` command will spin up a hot-loaded dev server that can then be accessed at `localhost:3000`.
- The `npm run build` command will webpack a minified js file for production that cuts out all of the unnecessary hot-loading code.
- The `npm run prod` command will start a production web server that can be used to test the minified file setup.