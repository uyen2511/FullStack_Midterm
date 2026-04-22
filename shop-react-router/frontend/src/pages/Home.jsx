import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="card" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, white 0%, var(--secondary) 100%)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>TechShop <span style={{ color: 'var(--primary-dark)' }}>Pro</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          A premium React application demonstrating advanced routing techniques with React Router v7.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => navigate('/products')}>Explore Shop</button>
          <button className="secondary" onClick={() => navigate('/admin')}>Admin Panel</button>
        </div>
      </div>

      <div className="product-grid" style={{ marginTop: '3rem' }}>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛣️</div>
          <h3>SPA Routing</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Seamless page transitions using <code>&lt;Routes&gt;</code> and <code>&lt;NavLink&gt;</code>.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🆔</div>
          <h3>Dynamic Params</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Fetching specific data using <code>useParams()</code> for product details.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
          <h3>Query Strings</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Persistent state management in URLs using <code>useSearchParams()</code>.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📦</div>
          <h3>Nested Routes</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Modular layout systems using <code>&lt;Outlet /&gt;</code> for Admin/User areas.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
          <h3>Route Guards</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Protected access and programmatic redirects for authorized users.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          <h3>Browser History</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Managing navigation stack with <code>push</code>, <code>replace</code>, and <code>history.back</code>.
          </p>
        </div>
      </div>
    </div>
  );
}