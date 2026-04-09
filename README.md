# Class-Connect - A Group Study Platform

Class-Connect is a collaborative learning hub designed to facilitate peer mentoring, group discussions, and centralized resource management. It provides a premium, real-time environment for students to collaborate effectively.

## 🚀 Features

- **Collaborative Dashboard**: High-level overview of active study groups and progress.
- **Real-time Group Chat**: Instant messaging powered by Socket.io for seamless discussion.
- **Video Conferencing UI**: A modern interface for remote video collaboration and peer mentoring.
- **Resource Management**: A centralized library for uploading and downloading study materials.
- **User Authentication**: Secure signup and login system using JWT and Bcrypt.
- **Premium Design System**: A glassmorphic, dark-mode UI built with modern CSS techniques.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Vanilla CSS, Lucide-React, Socket.io-client.
- **Backend**: Node.js, Express, Socket.io, Mongoose, JWT.
- **Database**: MongoDB.

## 📂 Project Structure

```text
class-connect/
├── backend/            # Express server & Socket.io logic
│   ├── index.js        # Server entry point
│   ├── models/         # Mongoose schemas
│   ├── middleware/     # Auth and other middleware
│   └── package.json    # Backend dependencies
├── frontend/           # React application (Vite)
│   ├── src/            # Components, styles, and hooks
│   ├── index.html      # App entry point
│   └── package.json    # Frontend dependencies
└── README.md           # Project documentation
```

## 🚥 Getting Started

### Prerequisites
- **Node.js**: v18 or higher.
- **MongoDB**: Ensure MongoDB is installed and running locally on port `27017`.

### 1. Setup Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your configuration:
   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/class-connect
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server (with auto-reload):
   ```bash
   npm run dev
   ```
   *Server will run on `http://localhost:3001`*

### 2. Setup Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *Frontend will be available at `http://localhost:5173`*

