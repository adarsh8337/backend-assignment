# Backend Developer Assignment – Task Management API

## Overview

This project is a **RESTful backend API with authentication and role-based access control** built using **Node.js, Express.js, and MongoDB**.

The application allows users to:

* Register and log in securely
* Authenticate using JWT tokens
* Perform CRUD operations on tasks
* Access protected routes using middleware

A simple **frontend interface** is included to demonstrate how the APIs work.

---

# Features

## Authentication

* User Registration
* User Login
* Password hashing using **bcrypt**
* Secure authentication using **JWT tokens**

## Role-Based Access

* Default role: **user**
* Roles stored in database
* Middleware protects restricted routes

## Task Management (CRUD)

Users can:

* Create tasks
* View tasks
* Update tasks
* Delete tasks

## Security

* Password hashing
* JWT authentication
* Protected API routes
* Middleware validation

## Frontend

Basic HTML frontend to demonstrate API usage:

* Register users
* Login users
* Create tasks
* View tasks

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs

## Frontend

* HTML
* JavaScript
* Fetch API

## Tools

* Postman (API testing)
* GitHub (version control)

---

# Project Structure

backend-assignment
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── taskController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   └── Task.js
│
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── frontend
│   └── index.html
│
├── server.js
├── package.json
└── README.md

---

# Installation

## 1. Clone the repository

git clone https://github.com/yourusername/backend-assignment.git

## 2. Navigate to the project folder

cd backend-assignment

## 3. Install dependencies

npm install

---

# Running the Application

Start the server:

node server.js

Server runs at:

http://localhost:5000

---

# Database

This project uses **MongoDB**.

Local connection example:

mongodb://localhost:27017/backendTask

---

# API Endpoints

## Authentication

### Register User

POST /api/auth/register

Body:

{
"name": "Adarsh",
"email": "[adarsh@test.com](mailto:adarsh@test.com)",
"password": "123456"
}

Response:

{
"message": "User registered successfully"
}

---

### Login User

POST /api/auth/login

Body:

{
"email": "[adarsh@test.com](mailto:adarsh@test.com)",
"password": "123456"
}

Response:

{
"token": "JWT_TOKEN"
}

---

# Protected Routes (Tasks)

JWT token must be included in request headers:

Authorization: Bearer TOKEN

---

## Create Task

POST /api/tasks

Body:

{
"title": "First Task",
"description": "Testing API"
}

---

## Get Tasks

GET /api/tasks

Returns all tasks for the authenticated user.

---

## Update Task

PUT /api/tasks/:id

Body:

{
"title": "Updated Task"
}

---

## Delete Task

DELETE /api/tasks/:id

---

# Frontend

A simple frontend interface is included:

frontend/index.html

This page allows users to:

* Register
* Login
* Create tasks
* View tasks

The frontend communicates with the backend using the **Fetch API**.

---

# API Testing

All APIs were tested using **Postman**.

Example request:

POST http://localhost:5000/api/auth/register

---

# Security Practices

* Password hashing using bcrypt
* JWT authentication
* Protected routes using middleware
* Basic input validation

---

# Scalability Considerations

Future improvements for scalability:

* Microservices architecture
* Redis caching for frequently accessed data
* Load balancing using Nginx
* Containerization using Docker
* Horizontal scaling using Kubernetes

---

# Author

Adarsh A

Backend Developer Internship Assignment
