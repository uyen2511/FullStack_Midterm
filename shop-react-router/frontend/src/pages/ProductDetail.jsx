import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

export default function ProductDetail() {
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

  if (error) return <h2>Product not found</h2>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="card">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => navigate(-1)}>← Go Back (history)</button>
      <button onClick={() => navigate('/products')}>All Products (push)</button>
    </div>
  );
}