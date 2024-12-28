# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications. The problem arises from improper placement or configuration of the `express.json()` middleware.

## Bug Description

The provided Express.js server is intended to receive and process JSON data submitted via a POST request to the `/data` endpoint.  However, due to a configuration error, the server fails to properly parse the JSON body, resulting in `req.body` being empty or undefined.

## Bug Solution

The solution involves ensuring that the `express.json()` middleware is correctly placed in the middleware stack *before* any routes that expect JSON data. This allows Express to parse the request body before the route handler attempts to access it.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the required packages.
3. Run `node bug.js` to start the server.
4. Send a POST request to `http://localhost:3000/data` with a JSON payload (e.g., using curl or Postman).  Observe that `req.body` will be empty.
5. Run `node bugSolution.js` to start the server with the corrected middleware.
6. Repeat step 4; now `req.body` should contain the JSON data.
