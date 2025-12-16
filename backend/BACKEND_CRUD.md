# Backend – Express & Knex

This backend module is built for educational purposes and focuses on teaching core backend concepts using Express, Knex, and Postman on a local development environment.

---

## Learning Goal

The main goal of this backend is to teach HTTP methods and API contracts by building a simple REST API and testing it via "Postman" on localhost.

---

## Technologies Used

- Node.js
- Express.js
- Knex.js
- SQLite
- Postman

---

## Concepts Covered

This backend demonstrates the following HTTP methods:

- GET – Retrieve data from the database
- POST – Create new records
- PUT – Fully update existing records
- PATCH – Partially update existing records

Each method is implemented using Express routes and connected to the database using Knex.

---

## Data Flow Overview

```
Postman → Express Routes → Knex → SQLite Database
```

- Requests are sent from Postman
- Express handles routing and validation
- Knex builds database queries
- SQLite stores and returns data

---

## How to Run the Backend

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm run dev
# or
node index.js
```

3. Server will run on:

```
http://localhost:3000
```

---

## Testing with Postman

All endpoints are tested using Postman with the local server running.

Example:

- GET /recipes
- POST /recipes
- PUT /recipes/:id
- PATCH /recipes/:id

These requests demonstrate how clients communicate with the backend through well-defined API contracts.

---

## Purpose of This Module

This backend is part of a learning project that teaches:

- Backend fundamentals
- REST API design
- Database interaction
- HTTP methods in practice
- Real-world backend workflow

---

## Status

- Express server set up
- Knex connected to SQLite
- HTTP methods implemented
- Endpoints tested via Postman
