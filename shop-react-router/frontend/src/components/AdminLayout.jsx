import { Outlet, NavLink } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Administrator Panel</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your shop inventory and settings.</p>
      </div>
      
      <div className="admin-sidebar">
        <NavLink to="/admin" end>Dashboard Overview</NavLink>
        <NavLink to="/admin/products">Inventory Management</NavLink>
      </div>
      
      <div className="card" style={{ padding: '2rem' }}>
        <Outlet />
      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <NavLink to="/" style={{ color: 'var(--primary-dark)', fontSize: '0.9rem' }}>Return to Customer View</NavLink>
      </div>
    </div>
  );
}