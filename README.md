# Class-Connect - A Group Study Platform

Class-Connect is a collaborative learning hub designed to facilitate peer mentoring, group discussions, and centralized resource management. It provides a premium, real-time environment for students to collaborate effectively.

## 🚀 Features

- **Collaborative Dashboard**: High-level overview of active study groups and progress.
- **Real-time Group Chat**: Instant messaging powered by Socket.io for seamless discussion.
- **Video Conferencing UI**: A modern interface for remote video collaboration and peer mentoring.
- **Resource Management**: A centralized library for uploading and downloading study materials.
- **Premium Design System**: A glassmorphic, dark-mode UI built with modern CSS techniques.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Vanilla CSS, Lucide-React, Socket.io-client.
- **Backend**: Node.js, Express, Socket.io, CORS.

## 📂 Project Structure

```text
class-connect/
├── backend/            # Express server & Socket.io logic
│   ├── index.js        # Server entry point
│   └── package.json    # Backend dependencies
├── frontend/           # React application (Vite)
│   ├── src/            # Components, styles, and assets
│   ├── index.html      # App entry point
│   ├── package.json    # Frontend dependencies
│   └── vite.config.js  # Vite configuration
└── README.md           # Project documentation
```

## 🚥 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### 1. Setup Backend
```bash
cd backend
npm install
node index.js
```
*Server will run on `http://localhost:3001`*

### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
*Frontend will be available at `http://localhost:5173`*

## 📸 Screenshots

Detailed screenshots and a project walkthrough can be found in the `brain/` directory of the workspace artifacts.

---
Created with ❤️ by Antigravity
