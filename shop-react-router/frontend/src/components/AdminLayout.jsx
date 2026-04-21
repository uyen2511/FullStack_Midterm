import { Outlet, NavLink } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <NavLink to="/admin" end>Dashboard</NavLink>
        <NavLink to="/admin/products">Manage Products</NavLink>
      </div>
      <Outlet />
    </div>
  );
}