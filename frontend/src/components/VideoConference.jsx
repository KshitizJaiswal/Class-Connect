import React, { useEffect, useRef } from 'react';
import { Mic, Video as VideoIcon, PhoneOff, Settings, Maximize, User } from 'lucide-react';

const VideoConference = () => {
  const localVideoRef = useRef();

  useEffect(() => {
    async function startVideo() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    }
    startVideo();
  }, []);

  return (
    <div className="animate-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1rem', padding: '0.5rem' }}>
        {/* Local Stream */}
        <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
          <video 
            ref={localVideoRef} 
            autoPlay 
            playsInline 
            muted 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
          />
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', padding: '6px 12px', background: 'rgba(0,0,0,0.5)', borderRadius: '6px', fontSize: '0.85rem' }}>
            Me (Host)
          </div>
        </div>

        {/* Placeholder for Peer */}
        <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <User size={40} color="#64748b" />
            </div>
            <p style={{ color: 'var(--text-dim)' }}>Waiting for Peer...</p>
          </div>
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', padding: '6px 12px', background: 'rgba(0,0,0,0.5)', borderRadius: '6px', fontSize: '0.85rem' }}>
            Alex Rivera
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="glass-card" style={{ margin: '1rem 0', padding: '1rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
        <button style={{ padding: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer' }}>
          <Mic size={24} />
        </button>
        <button style={{ padding: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer' }}>
          <VideoIcon size={24} />
        </button>
        <button style={{ padding: '12px 24px', borderRadius: '30px', background: '#ef4444', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
          <PhoneOff size={24} /> Leave Call
        </button>
        <button style={{ padding: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer' }}>
          <Settings size={24} />
        </button>
        <button style={{ padding: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer' }}>
          <Maximize size={24} />
        </button>
      </div>
    </div>
  );
};

export default VideoConference;
