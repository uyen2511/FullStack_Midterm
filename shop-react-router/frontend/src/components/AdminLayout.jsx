import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ArrowLeft } from 'lucide-react';

export default function AdminLayout() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Administrator Panel</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your shop inventory and settings.</p>
      </div>
      
      <div className="admin-sidebar">
        <NavLink to="/admin" end style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <LayoutDashboard size={18} /> Dashboard Overview
        </NavLink>
        <NavLink to="/admin/products" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Package size={18} /> Inventory Management
        </NavLink>
      </div>
      
      <div className="card" style={{ padding: '2rem' }}>
        <Outlet />
      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <NavLink to="/" style={{ color: 'var(--primary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Return to Customer View
        </NavLink>
      </div>
    </div>
  );
}