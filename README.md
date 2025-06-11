# ChatAI

ChatAI is a web-based chat application built with React. It provides a simple interface for users to interact with an AI-powered chat server.

## Features

- Modern React frontend
- Real-time chat interface
- Easy to set up and run locally

## Project Structure

```
chatai/
├── public/               # Static assets (HTML, icons, manifest)
├── src/
│   ├── App.js            # Main React app
│   ├── Components/       # React components
│   ├── api/server.js     # API handler
│   └── ...               # Other source files
├── package.json          # Project metadata and scripts
└── README.md             # Project documentation
```

## Prerequisites

- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mfadlika/GymAI-Web.git
   cd chatai
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

### Start the Frontend (React App)

- In terminal, run:
  ```sh
  npm start
  ```
  This starts the React development server. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

- You can customize the chat UI in `src/Components/Chat.js` and `src/Components/chat.css`.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
