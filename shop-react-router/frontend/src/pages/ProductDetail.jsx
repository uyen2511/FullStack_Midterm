import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

export default function ProductDetail() {
  // Reading :id from URL (Requirement: Route Parameters)
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setProduct)
      .catch(() => setError(true));
  }, [id]);

  if (error) return (
    <div className="card" style={{textAlign: 'center'}}>
      <h2>Product not found</h2>
      <button onClick={() => navigate('/products')}>Return to Shop</button>
    </div>
  );
  
  if (!product) return <p style={{textAlign: 'center'}}>Loading product details...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        <div style={{ background: 'var(--secondary)', width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
          🏷️
        </div>
        <h1>{product.name}</h1>
        <p style={{ color: 'var(--primary-dark)', fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
          ${product.price}
        </p>
        <p style={{ color: '#666', textTransform: 'capitalize', marginBottom: '2rem' }}>
          Category: {product.category}
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {/* Programmatic Navigation: Using navigate(-1) for Go Back */}
          <button className="secondary" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
          
          {/* Programmatic Navigation: Using navigate(path) */}
          <button onClick={() => navigate('/products')}>
            All Products
          </button>
        </div>
      </div>
    </div>
  );
}