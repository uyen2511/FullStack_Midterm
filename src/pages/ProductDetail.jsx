import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <h2>❌ Không tìm thấy sản phẩm</h2>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Quay lại</button>
      <button onClick={() => navigate('/products')}>📋 Danh sách sản phẩm</button>
      <div style={{ marginTop: '1rem' }}>
        <h1>{product.name}</h1>
        <p><strong>Giá:</strong> ${product.price}</p>
        <p><strong>Danh mục:</strong> {product.category}</p>
        <p><strong>Mô tả:</strong> {product.description}</p>
      </div>
    </div>
  );
}
export default ProductDetail;