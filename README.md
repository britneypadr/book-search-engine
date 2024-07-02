# Google Books Search Engine

This project is a full-stack web application that allows users to search for books using the Google Books API. Users can sign up, log in, search for books, and save them to their profile.

## Features

- **User Authentication:** Users can sign up, log in, and log out securely.
- **Book Search:** Utilizes the Google Books API to fetch books based on user queries.
- **Save Books:** Logged-in users can save books to their profile for later reference.
- **View Saved Books:** Users can view their saved books and manage their collections.

## Technologies Used

- **Frontend:** React, React Router, Bootstrap, Axios
- **Backend:** Node.js, Express.js, MongoDB (with Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** Heroku for backend, Heroku for frontend (with static build)
- **Development Tools:** Git, npm, ESLint, Concurrently (for running backend and frontend concurrently during development)

## Installation and Usage

### Prerequisites

- Node.js installed on your local machine
- MongoDB Atlas account or local MongoDB server running

### Installation

1. Clone the repository:

   ```bash
   git clone <[repository-url>](https://github.com/britneypadr/book-search-engine.git)
   cd solid-broccoli 
   
2. Install dependencies for both server and client

   ```bash
   cd server
   npm install
   cd ../client
   npm install

3. Set up environment variables:

   -Create a .env file in the server directory and define your environment variables (e.g., MongoDB connection URI, JWT secret).

4. Start the development server (concurrently runs both server and client):

   ```bash
   npm run develop

5. Open your web browser and navigate to http://localhost:3000 to view the application.

## Deployment

Deploy the backend to Heroku:

git push heroku main

Deploy the frontend (React build) to Heroku as a static app.

(Unable to deploy)

## Folder Structure 

- 'server/': Contains backend Node.js and Express server files.
- 'client/': Contains frontend React application files.

## License

This project is licensed under the MIT License
