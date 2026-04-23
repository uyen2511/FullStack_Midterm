import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ShieldCheck } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="card" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, white 0%, var(--secondary) 100%)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Orange Caramel Shop</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Welcome to Orange Caramel Shop, your destination for premium gadgets and state-of-the-art technology.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => navigate('/products')}>
            <ShoppingBag size={20} /> Explore Shop
          </button>
          <button className="secondary" onClick={() => navigate('/admin')}>
            <ShieldCheck size={20} /> Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
}