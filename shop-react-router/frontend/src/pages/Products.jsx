import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  // Route Query String: reading 'category', 'sort', and 'search' from URL
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const search = searchParams.get('search') || '';

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (sort) params.append('sort', sort);
      
      try {
        const res = await fetch(`${API_BASE}/products?${params.toString()}`);
        let data = await res.json();
        
        // Client-side search filtering (or could be backend)
        if (search) {
          data = data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        }
        
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, sort, search]);

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput) searchParams.set('search', searchInput);
    else searchParams.delete('search');
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setSearchParams({});
    setSearchInput('');
  };

  if (loading) return (
    <div className="container" style={{textAlign: 'center', marginTop: '4rem'}}>
      <p>Loading products...</p>
    </div>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1>Browse Products</h1>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" style={{ padding: '0.6rem 1rem' }}>Search</button>
          </form>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="phone">Phones</option>
            <option value="laptop">Laptops</option>
            <option value="accessory">Accessories</option>
          </select>
          <select value={sort} onChange={handleSortChange}>
            <option value="">Default Order</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
          <button className="secondary" onClick={resetFilters}>Reset</button>
        </div>
      </div>

      {products.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
          No products found. Try adjusting your filters.
        </p>
      ) : (
        <div className="product-grid">
          {products.map(p => (
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p style={{ color: 'var(--primary-dark)', fontWeight: '600', fontSize: '1.2rem', marginBottom: '1rem' }}>
                ${p.price}
              </p>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'capitalize' }}>
                Category: {p.category}
              </p>
              <Link to={`/products/${p.id}`} style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', justifyContent: 'center' }}>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}