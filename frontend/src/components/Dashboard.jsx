import React from 'react';
import { BookOpen, Users, Bell, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Welcome back, Student!</h2>
          <p style={{ color: 'var(--text-dim)' }}>Ready for your study marathon?</p>
        </div>
        <button className="glass-card" style={{ padding: '10px', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
          <Bell size={20} />
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>
              <Users size={24} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Active Groups</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>12</p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>+3 since yesterday</p>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '10px', borderRadius: '12px', color: 'var(--accent)' }}>
              <BookOpen size={24} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Study Hours</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>48.5h</p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>This week's progress</p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Upcoming Sessions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { title: 'Calculus III Study Group', time: 'Today, 4:00 PM', members: 4 },
            { title: 'Peer Mentoring: Python Basics', time: 'Tomorrow, 10:00 AM', members: 2 },
          ].map((session, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
              <div>
                <h4 style={{ fontWeight: 600 }}>{session.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{session.time}</p>
              </div>
              <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                Join Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
