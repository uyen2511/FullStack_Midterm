import { Outlet, NavLink } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <div style={{ backgroundColor: '#2c3e50', color: 'white', padding: '0.5rem 1rem' }}>
        <h2>👑 Admin Panel</h2>
        <nav>
          <NavLink to="/admin" style={{ color: 'white', marginRight: '1rem' }}>Dashboard</NavLink>
          <NavLink to="/admin/products" style={{ color: 'white' }}>Quản lý sản phẩm</NavLink>
        </nav>
      </div>
      <div style={{ padding: '1rem' }}>
        <Outlet />   {/* Dashboard hoặc AdminProducts sẽ render tại đây */}
      </div>
    </div>
  )
}
export default AdminLayout