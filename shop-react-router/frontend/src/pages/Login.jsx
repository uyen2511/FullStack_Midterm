import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogIn, User, Lock, AlertCircle } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';

  // Practical Scenario: If already logged in, don't show login page
  useEffect(() => {
    if (isAuth) {
      navigate('/admin', { replace: true });
    }
  }, [isAuth, navigate]);

  const from = location.state?.from?.pathname || "/admin";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('isAuthenticated', 'true');
      // Practical Scenario: Redirect to intended page with 'replace'
      navigate(from, { replace: true });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '4rem auto' }}>
      <div className="card" style={{ padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--primary)' }}>
            <LogIn size={32} />
          </div>
          <h2>Admin Access</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Please sign in to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Username</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Your name" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', paddingLeft: '2.5rem' }}
                required
              />
              <User size={18} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password" 
                placeholder="••••••••" 
                style={{ width: '100%', paddingLeft: '2.5rem' }}
                required
              />
              <Lock size={18} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>
          <button type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            Sign In
          </button>
        </form>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '0.8rem' }}>
          <AlertCircle size={14} />
          <span>Demo mode: No real credentials needed.</span>
        </div>
      </div>
    </div>
  );
}

