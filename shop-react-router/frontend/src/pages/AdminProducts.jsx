import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>Product Inventory</h2>
        <button className="secondary" onClick={() => navigate('/admin')}>
          ← Back to Dashboard
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>#{p.id}</td>
                <td style={{ fontWeight: '500' }}>{p.name}</td>
                <td style={{ color: 'var(--primary-dark)', fontWeight: '600' }}>${p.price}</td>
                <td>
                  <span style={{ background: 'var(--secondary)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', textTransform: 'capitalize' }}>
                    {p.category}
                  </span>
                </td>
                <td>
                  <button style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => navigate(`/products/${p.id}`)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p style={{ marginTop: '1.5rem', color: '#888', fontSize: '0.85rem', fontStyle: 'italic' }}>
        * Note: This is an Administrative interface with nested routing.
      </p>
    </div>
  );
}