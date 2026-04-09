import React from 'react';
import { Home, MessageSquare, Video, FileText, Settings, LogOut } from 'lucide-react';

const MainLayout = ({ user, logout, activeTab, setActiveTab, renderContent }) => (
  <div className="app-layout" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    {/* Sidebar */}
    <aside className="sidebar glass-card" style={{ width: '280px', margin: '1rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
        <h1 className="logo">ClassConnect</h1>
        {user && <p className="user-welcome">Welcome, {user.username}</p>}
      </div>
      
      <nav style={{ flex: 1, padding: '1rem' }}>
        {[
          { id: 'dashboard', icon: <Home size={20} />, label: 'Dashboard' },
          { id: 'chat', icon: <MessageSquare size={20} />, label: 'Live Chat' },
          { id: 'video', icon: <Video size={20} />, label: 'Video Call' },
          { id: 'resources', icon: <FileText size={20} />, label: 'Resources' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              padding: '12px 16px',
              marginBottom: '8px',
              background: activeTab === item.id ? 'var(--primary)' : 'transparent',
              color: activeTab === item.id ? '#fff' : 'var(--text-dim)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontWeight: '500'
            }}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button style={{ 
          display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '10px', 
          background: 'transparent', color: 'var(--text-dim)', border: 'none', cursor: 'pointer' 
        }}>
          <Settings size={18} /> Settings
        </button>
        <button onClick={logout} className="logout-btn">
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </aside>

    {/* Main Content */}
    <main style={{ flex: 1, overflowY: 'auto', padding: '1rem 2rem 1rem 1rem' }}>
      {renderContent()}
    </main>
  </div>
);

export default MainLayout;
