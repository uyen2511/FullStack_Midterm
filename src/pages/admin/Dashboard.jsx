import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div>
      <h3>📊 Dashboard</h3>
      <p>Chào mừng bạn đến với khu vực quản trị.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={() => navigate('/admin/products')}>
          ➡️ Đi đến Quản lý sản phẩm (push)
        </button>
        <button onClick={() => navigate('/admin/products', { replace: true })}>
          🔄 Đi đến Quản lý sản phẩm (replace)
        </button>
        <button onClick={() => navigate(-1)}>
          ⬅️ Quay lại (lịch sử)
        </button>
      </div>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#ecf0f1', borderRadius: '8px' }}>
        <h4>🧠 Giải thích programmatic navigation</h4>
        <ul>
          <li><strong>push (mặc định)</strong>: thêm một entry mới vào stack lịch sử → nút "Quay lại" hoạt động bình thường.</li>
          <li><strong>replace</strong>: thay thế entry hiện tại, không thể quay lại trang dashboard bằng nút Back.</li>
          <li><strong>navigate(-1)</strong>: quay lại trang trước đó trong stack.</li>
        </ul>
      </div>
    </div>
  )
}
export default Dashboard