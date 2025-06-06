# Express Crash Course

This is a repository for learing and experimenting with Express.js, a back end framework for building RESTful APIs with Node.js.

## Getting Started

### Installing Express.js from scratch

In order to install Express.js in your own project run the following:

```bash
npm install express
```

### Working with this repository

To work with this repository follow these steps:

1. Clone the repository"

```bash
git clone https://github.com/ericstober/express-crash-course.git
cd express-crash-course
```

2. Install dependencies:

```bash
npm install
```

3. Run the local server:

```bash
npm run dev
```

Vist localhost:5000 in the browser.

## Files Explained

### server.js

The JavaScript file sets up an Express.js server that serves static files, handles API routes under `/api/posts`, and included middleware for logging, error handling, and parsing request bodies. It uses custom middleware for 404 and general error responses. The server listens on a specified port, defaulting to 5000.

### middleware/error.js

This JavaScript files defines a custom Express error handling middleware. It sends a JSON response with the error message and uses the provided status code if available, defaulting to 500 otherwise. The middleware is exported as the default module.

### middleware/logger.js

This JavaScript file defines a logging middleware for Express that logs incomming HTTP requests with color-coded methods using the colors package. Each HTTP method is displayed in a different color for easier readability in the console. The middleware is exported as the default module.

### middleware/notFound.js

This JavaScript file defines middleware for handling 404 errors with Express. It creates an error with the message "Not Found" and a 404 status code, then passes it to the next error handling middleware. The function is exported as the default module.

### controllers/postControllers.js

This JavaScript file defines a set of Express route handlers for a mock posts API, enabling basic CRUD operations. It allows clients to retrieve all posts, fetch a single post by ID, create a new post, update an exisiting post, and delete a post. Each handler includes appropriate error handling and returns JSON responses.

### routes/posts.js

This JavaScript file defines an Express router for handling post related API routes. It maps HTTP methods and endpoints to corresponding controller functions for retrieving, creating, updating, and deleting posts. The router is exported for use in the main server setup.

### public/js/main.js

This JavaScript file handles client side interaction for displaying and adding posts. It fetches and displays posts from the backend API when a button is clicked and allows users to submit new posts through a form, updating the view accordingly. Event listeners are set up for actions to trigger the corresponding asynchronous functions.
