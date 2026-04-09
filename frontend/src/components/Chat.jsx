import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { Send, Smile } from 'lucide-react';

const socket = io('http://localhost:3001');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [user] = useState('Me'); // Placeholder for user system
  const scrollRef = useRef();

  useEffect(() => {
    socket.on('initial_messages', (data) => setMessages(data));
    socket.on('receive_message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('initial_messages');
      socket.off('receive_message');
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('send_message', { text: input, user });
      setInput('');
    }
  };

  return (
    <div className="glass-card animate-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1.2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)' }}></div>
        <h3 style={{ fontSize: '1.1rem' }}>Global Study Group</h3>
      </header>

      <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: msg.user === user ? 'flex-end' : 'flex-start',
            marginBottom: '1rem' 
          }}>
            <div style={{ 
              padding: '10px 16px', 
              borderRadius: '16px', 
              maxWidth: '70%',
              background: msg.user === user ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
              color: msg.user === user ? '#fff' : 'var(--text-main)',
              border: msg.user === user ? 'none' : '1px solid var(--glass-border)',
              fontSize: '0.95rem',
              lineHeight: '1.5'
            }}>
              {msg.text}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              {msg.user} • {msg.time}
            </span>
          </div>
        ))}
        <div ref={scrollRef}></div>
      </div>

      <form onSubmit={sendMessage} style={{ padding: '1.2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '12px' }}>
        <button type="button" style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
          <Smile size={20} />
        </button>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ 
            flex: 1, 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--glass-border)', 
            borderRadius: '8px', 
            padding: '10px 14px',
            color: 'var(--text-main)',
            outline: 'none'
          }}
        />
        <button type="submit" className="btn-primary" style={{ padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
