import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (sort) params.append('sort', sort);
      const res = await fetch(`${API_BASE}/products?${params.toString()}`);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, [category, sort]);

  const handleCategoryChange = (e) => {
    const val = e.target.value;
    if (val) searchParams.set('category', val);
    else searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    if (val) searchParams.set('sort', val);
    else searchParams.delete('sort');
    setSearchParams(searchParams);
  };

  const resetFilters = () => setSearchParams({});

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      <div style={{ marginBottom: '1rem' }}>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="accessory">Accessory</option>
        </select>
        <select value={sort} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
        <button onClick={resetFilters}>Reset</button>
      </div>
      {products.map(p => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>Price: ${p.price}</p>
          <Link to={`/products/${p.id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
}