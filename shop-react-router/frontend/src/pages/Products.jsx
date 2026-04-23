import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, ArrowUpDown, Eye, RotateCcw } from 'lucide-react';

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
    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }} className="products-layout">
      {/* Filter Sidebar */}
      <aside style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={18} /> Filters
          </h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Search</label>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Product name..." 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2.2rem' }}
              />
              <Search size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </form>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Category</label>
            <select value={category} onChange={handleCategoryChange} style={{ width: '100%' }}>
              <option value="">All Categories</option>
              <option value="phone">Phones</option>
              <option value="laptop">Laptops</option>
              <option value="accessory">Accessories</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              <ArrowUpDown size={14} style={{ marginRight: '0.25rem' }} /> Sort By
            </label>
            <select value={sort} onChange={handleSortChange} style={{ width: '100%' }}>
              <option value="">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>

          <button className="secondary" onClick={resetFilters} style={{ width: '100%', justifyContent: 'center' }}>
            <RotateCcw size={16} /> Reset Filters
          </button>
        </div>
      </aside>

      {/* Product List */}
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1>
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}s` : 'All Products'}
            <span style={{ fontSize: '1rem', color: 'var(--text-muted)', marginLeft: '1rem', fontWeight: '400' }}>
              ({products.length} items)
            </span>
          </h1>
        </div>

        {products.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              No products match your current filters.
            </p>
            <button onClick={resetFilters} style={{ marginTop: '1rem' }}>
              <RotateCcw size={16} /> Clear all filters
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {products.map(p => (
              <div key={p.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#f8fafc', height: '180px', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                  {p.category === 'phone' ? '📱' : p.category === 'laptop' ? '💻' : '🎧'}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{p.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.25rem' }}>
                    ${p.price}
                  </span>
                  <Link to={`/products/${p.id}`} style={{ textDecoration: 'none' }}>
                    <button style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                      <Eye size={16} /> Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>

  );
}
