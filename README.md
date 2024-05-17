# Authentication Project

## Overview

This project is a full-stack authentication system built with React for the frontend and Node.js with Express for the backend. It includes user registration, login, and protected routes to demonstrate authentication and authorization concepts.

## Features

- **User Registration**: Users can create an account by providing a username, email, and password.
- **User Login**: Registered users can log in using their credentials.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **Protected Routes**: Certain routes are accessible only to authenticated users.
- **User Sessions**: Maintain user sessions with token-based authentication.
- **Password Encryption**: User passwords are securely stored using bcrypt.

## Tech Stack

- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express, MongoDB (with Mongoose for ORM)
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Environment**: Node.js, npm, dotenv

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/authentication-project.git
   cd authentication-project
   ```

2. **Install backend dependencies**:
   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:
   ```sh
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the `backend` directory and add the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Application

1. **Start the backend server**:
   ```sh
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:5000`.

2. **Start the frontend development server**:
   ```sh
   cd ../frontend
   npm start
   ```

   The frontend development server will run on `http://localhost:3000`.

### Directory Structure

```
authentication-project/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── LoginForm.js
    │   │   ├── RegisterForm.js
    │   │   └── ProtectedRoute.js
    │   ├── contexts/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── Login.js
    │   │   └── Register.js
    │   ├── services/
    │   │   └── authService.js
    │   ├── App.js
    │   ├── index.js
    │   └── package.json
```

### API Endpoints

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login a user
- **GET /api/auth/protected**: Access a protected route (requires JWT)

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

### Contact

For any questions or issues, please contact [your-email@example.com](mailto:your-email@example.com).

---

Feel free to use and modify this template according to your project's specific needs. Happy coding!
