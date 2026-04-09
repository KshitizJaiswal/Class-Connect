import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Zap, Globe } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="logo">ClassConnect</div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/login')} className="nav-btn-link">Sign In</button>
          <button onClick={() => navigate('/signup')} className="nav-btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="hero-content">
          <div className="badge animate-fade-in-down">
            <Sparkles size={16} /> <span>The Future of Learning</span>
          </div>
          <h1 className="animate-fade-in">
            Collaborate, Learn, and <br />
            <span className="text-gradient">Succeed Together</span>
          </h1>
          <p className="hero-description animate-fade-in-up">
            Join thousands of students in the most advanced collaborative learning hub. 
            Real-time chat, video conferences, and shared resources at your fingertips.
          </p>
          
          <div className="hero-actions animate-fade-in-up">
            <button onClick={() => navigate('/signup')} className="cta-btn">
              Create Your Space <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate('/login')} className="secondary-btn">
              View Demo
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          <div className="feature-card animate-float">
            <div className="feature-icon zap"><Zap size={24} /></div>
            <h3>Real-time Sync</h3>
            <p>Collaborate instantly with zero latency.</p>
          </div>
          <div className="feature-card animate-float-delayed">
            <div className="feature-icon shield"><Shield size={24} /></div>
            <h3>Secure Hub</h3>
            <p>Your data is protected with enterprise-grade security.</p>
          </div>
          <div className="feature-card animate-float">
            <div className="feature-icon globe"><Globe size={24} /></div>
            <h3>Global Network</h3>
            <p>Connect with peers from around the world.</p>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="landing-footer">
        <p>© 2026 ClassConnect. Elevating Education.</p>
      </div>
    </div>
  );
};

export default LandingPage;
