import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'default';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {};
        if (category !== 'all') params.category = category;
        if (sort !== 'default') params.sort = sort;
        const res = await axios.get('http://localhost:5000/api/products', { params });
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, sort]);

  const updateCategory = (newCat) => {
    setSearchParams({ category: newCat, sort });
  };

  const updateSort = (newSort) => {
    setSearchParams({ category, sort: newSort });
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>📦 Danh sách sản phẩm (từ database)</h1>
      <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h3>🔍 Bộ lọc</h3>
        <div>
          <strong>Danh mục:</strong>{' '}
          <button onClick={() => updateCategory('all')}>Tất cả</button>
          <button onClick={() => updateCategory('electronics')}>Điện tử</button>
          <button onClick={() => updateCategory('fashion')}>Thời trang</button>
          <button onClick={() => updateCategory('books')}>Sách</button>
        </div>
        <div>
          <strong>Sắp xếp:</strong>{' '}
          <button onClick={() => updateSort('default')}>Mặc định</button>
          <button onClick={() => updateSort('price_asc')}>Giá tăng dần</button>
          <button onClick={() => updateSort('price_desc')}>Giá giảm dần</button>
        </div>
      </div>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem' }}>
            <h3>{product.name}</h3>
            <p>💰 Giá: ${product.price}</p>
            <p>📂 Danh mục: {product.category}</p>
            <Link to={`/products/${product.id}`}>🔍 Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;