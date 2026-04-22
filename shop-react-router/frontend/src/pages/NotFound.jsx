import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--primary-dark)' }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button onClick={() => navigate('/')}>Return to Homepage</button>
    </div>
  );
}
