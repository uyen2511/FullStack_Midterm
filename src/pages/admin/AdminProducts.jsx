import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', category: 'electronics', description: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/products/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/api/products', form);
    }
    setForm({ name: '', price: '', category: 'electronics', description: '' });
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({ name: product.name, price: product.price, category: product.category, description: product.description });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Xoá sản phẩm này?')) {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    }
  };

  return (
    <div>
      <h3>📋 Quản lý sản phẩm (Admin)</h3>
      <button onClick={() => navigate('/admin')}>← Về Dashboard</button>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
        <input placeholder="Tên sản phẩm" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input placeholder="Giá" type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
        <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
          <option value="electronics">Điện tử</option>
          <option value="fashion">Thời trang</option>
          <option value="books">Sách</option>
        </select>
        <input placeholder="Mô tả" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <button type="submit">{editingId ? 'Cập nhật' : 'Thêm sản phẩm'}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', price: '', category: 'electronics', description: '' }); }}>Hủy</button>}
      </form>

      <table border="1" cellPadding="8" style={{ width: '100%', marginTop: '1rem' }}>
        <thead><tr><th>ID</th><th>Tên</th><th>Giá</th><th>Danh mục</th><th>Thao tác</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.name}</td><td>${p.price}</td><td>{p.category}</td>
              <td><button onClick={() => handleEdit(p)}>Sửa</button> <button onClick={() => handleDelete(p.id)}>Xóa</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AdminProducts;