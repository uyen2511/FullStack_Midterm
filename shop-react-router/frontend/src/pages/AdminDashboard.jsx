import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Dashboard Overview</h2>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div className="card" style={{ flex: '1', minWidth: '200px', background: 'var(--primary)', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--text-muted)' }}>Total Products</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>24</p>
        </div>
        <div className="card" style={{ flex: '1', minWidth: '200px', background: 'var(--secondary)', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--primary-dark)' }}>Monthly Sales</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>$12,450</p>
        </div>
        <div className="card" style={{ flex: '1', minWidth: '200px', background: 'white', textAlign: 'center' }}>
          <h4 style={{ color: '#888' }}>Active Users</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1,204</p>
        </div>
      </div>

      <div className="card" style={{ background: '#fff', border: '1px dashed var(--primary-dark)' }}>
        <h3>Navigation Shortcuts</h3>
        <p style={{ marginBottom: '1.5rem', color: '#666' }}>Quickly access different administrative modules.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => navigate('/admin/products')}>
            Manage Inventory (Push)
          </button>
          <button className="secondary" onClick={() => navigate('/products')}>
            Public Storefront
          </button>
        </div>
      </div>
    </div>
  );
}