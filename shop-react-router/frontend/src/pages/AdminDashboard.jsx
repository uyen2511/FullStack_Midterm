import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Users, DollarSign, Store, ArrowLeft } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <LayoutDashboard size={24} className="text-primary" /> Dashboard Overview
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Package size={16} /> Total Products
          </h4>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>24</p>
        </div>
        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <DollarSign size={16} /> Monthly Sales
          </h4>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>$12.4k</p>
        </div>
        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid #10b981' }}>
          <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Users size={16} /> Active Users
          </h4>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>1.2k</p>
        </div>
      </div>

      <div className="card" style={{ background: 'linear-gradient(to right, white, #f8fafc)' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Navigation Shortcuts</h3>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Quickly access different administrative modules and storefront.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/admin/products')}>
            <Package size={18} /> Manage Inventory
          </button>
          <button className="secondary" onClick={() => navigate('/products')}>
            <Store size={18} /> Public Storefront
          </button>
          <button className="secondary" onClick={() => navigate(-1)} style={{ marginLeft: 'auto' }}>
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}