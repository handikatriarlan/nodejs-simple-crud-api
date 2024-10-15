# Node.js Simple CRUD API

This is a simple CRUD API built using Node.js, Express, and MySQL.

## Features
- Create, Read, Update, Delete (CRUD) operations for users.
- RESTful API structure.
- MySQL database integration.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/handikatriarlan/nodejs-simple-crud-api.git
```

### 2. Navigate to the project directory
```bash
cd nodejs-simple-crud-api
```

### 3. Install dependencies
```bash
npm install
```

### 4. Set up environment variables
Open a `config/db.js` file and set your MySQL database configuration:
```bash
host: "localhost",
user: "root",
password: "YOURPASSWORD",
database: "nodejs_api_db",
```

### 5. Run the server
```bash
nodemon app.js
```
The server will run on `http://localhost:3000`.

## Endpoints
Users
- `GET /users` - Get all users.
- `GET /users/:id` - Get user by ID.
- `POST /users` - Create a new user.
- `PUT /users/:id` - Update a user by ID.
- `DELETE /users/:id` - Delete a user by ID.

## Testing the API
Use [Postman](https://www.postman.com/) or any API testing tool to test the endpoints.