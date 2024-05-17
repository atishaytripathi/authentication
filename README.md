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

- **Frontend**: React, React Router
- **Backend**: Node.js, Express, MongoDB (with Mongoose for ORM)
- **Authentication**: JSON Web Tokens (JWT), Joi
- **Environment**: Node.js, npm, dotenv

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

### Installation

1. **Clone the repository**:
   ```sh
   git clone [https://github.com/atishaytripathi/authentication.git](https://github.com/atishaytripathi/authentication.git)
   cd authentication
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


### API Endpoints

- **POST /api/signup**: Register a new user
- **POST /api/signin**: Login a user

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

### Contact

For any questions or issues, please contact [atishay1922@gmail.com](mailto:atishay1922@gmail.com).

---

Feel free to use and modify this template according to your project's specific needs. Happy coding!
