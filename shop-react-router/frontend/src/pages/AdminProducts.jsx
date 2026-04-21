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
    <div className="card">
      <h2>Manage Products</h2>
      <button onClick={() => navigate('/admin')}>← Back to Dashboard</button>
      <table border="1" cellPadding="8" style={{ marginTop: '1rem', width: '100%' }}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Price</th><th>Category</th></tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.name}</td><td>${p.price}</td><td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><em>Demo: full CRUD có thể mở rộng</em></p>
    </div>
  );
}