# ExploreVista Full Stack Application

Welcome to the ExploreVista full stack application repository! ExploreVista is a web application designed to serve as your personalized city travel guide all over the world. This README file provides a detailed overview of both the frontend and backend repositories, including project structure, setup instructions, available scripts, testing procedures, contributing guidelines, and licensing information.

## Table of Contents
1. [ExploreVista Frontend](#exploreVista-frontend)
2. [ExploreVista Backend](#exploreVista-backend)
3. [Setup Instructions](#setup-instructions)
4. [Available Scripts](#available-scripts)
5. [Testing](#testing)
6. [Contributing](#contributing)
7. [License](#license)

## ExploreVista Frontend

### Overview
ExploreVista frontend is built using React.js, a popular JavaScript library for building user interfaces. It provides a responsive and intuitive user interface for users to explore recommended places, create accounts, log in, leave feedback, and more. The frontend interacts with the ExploreVista backend API to fetch and display data dynamically.

### Project Structure
The frontend project structure is organized with components for different pages and functionalities. Key components include the Navbar, Footer, Signup, Loginpage, Home, Crud, CreateUser, UpdateUser, Contact, Feedback, and PrintFeedback.

### Setup Instructions
To set up the ExploreVista frontend locally:
1. Clone the frontend repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.
5. Access the application in your browser at `http://localhost:3000`.

### Available Scripts
In the project directory, you can run the following scripts:
- `npm start` or `yarn start`: Starts the development server.
- `npm test` or `yarn test`: Launches the test runner in interactive watch mode.
- `npm run build` or `yarn build`: Builds the app for production to the `build` folder.

### Testing
ExploreVista frontend includes test scripts to ensure the reliability and functionality of the application. You can run the tests using the `npm test` or `yarn test` command. The tests cover various components and functionality of the frontend.

## ExploreVista Backend

### Overview
ExploreVista backend is built using Node.js and Express.js, providing RESTful API endpoints to handle user authentication, data retrieval, and storage. It interacts with a MongoDB database to store user information, recommended places, and user feedback.

### Project Structure
The backend project structure is organized with routes, controllers, models, middleware, and database configuration files. Key components include user routes, authentication middleware, user controller, place model, and feedback controller.

### Setup Instructions
To set up the ExploreVista backend locally:
1. Clone the backend repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Configure the environment variables for MongoDB connection and JWT secret.
5. Start the server using `npm start`.
6. The backend server will run on `http://localhost:3001` by default.

### Available Scripts
In the project directory, you can run the following scripts:
- `npm start`: Starts the Express server.
- `npm test`: Runs the test suite.

### Testing
ExploreVista backend includes test scripts to ensure the reliability and functionality of the API endpoints. You can run the tests using the `npm test` command. The tests cover various routes, controllers, and middleware of the backend.

## Contributing
Contributions to ExploreVista frontend and backend are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request with your changes. Make sure to follow the contribution guidelines outlined in the respective repositories.

## License
This project is licensed under the [MIT License](LICENSE).

Thank you for using ExploreVista! Happy exploring!
