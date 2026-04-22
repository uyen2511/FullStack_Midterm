import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // If user was redirected here from a protected route, save that location
  const from = location.state?.from?.pathname || "/admin";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      // Save "auth" state in localStorage for demo purposes
      localStorage.setItem('isAuthenticated', 'true');
      
      // Programmatic Navigation: Redirect with 'replace' so user can't go back to login
      navigate(from, { replace: true });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '4rem auto' }}>
      <div className="card" style={{ padding: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Username</label>
            <input 
              type="text" 
              placeholder="Enter any name..." 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%' }}
              required
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              style={{ width: '100%' }}
              required
            />
          </div>
          <button type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            Login to Admin
          </button>
        </form>
        <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#888' }}>
          * Demo login: No real password required.
        </p>
      </div>
    </div>
  );
}
