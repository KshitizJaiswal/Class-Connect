import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import VideoConference from './components/VideoConference';
import Resources from './components/Resources';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import LandingPage from './components/LandingPage';
import { useAuth } from './context/AuthContext';
import { Home, MessageSquare, Video, FileText, Settings, LogOut } from 'lucide-react';

import MainLayout from './components/MainLayout';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'chat': return <Chat />;
      case 'video': return <VideoConference />;
      case 'resources': return <Resources />;
      default: return <Dashboard />;
    }
  };

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
      <Route 
        path="/" 
        element={user ? <MainLayout user={user} logout={logout} activeTab={activeTab} setActiveTab={setActiveTab} renderContent={renderContent} /> : <LandingPage />} 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
