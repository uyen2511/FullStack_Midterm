import { useNavigate } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <AlertCircle size={80} color="var(--accent)" style={{ marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '4rem', color: 'var(--text-main)', marginBottom: '0' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Oops! Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
        The page you are looking for doesn't exist or has been moved to another universe.
      </p>
      <button onClick={() => navigate('/')}>
        <Home size={18} /> Return to Homepage
      </button>
    </div>
  );
}

