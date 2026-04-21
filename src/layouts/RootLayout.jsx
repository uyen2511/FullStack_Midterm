import { Outlet, NavLink } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0 }}>
          <li><NavLink to="/" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}>Home</NavLink></li>
          <li><NavLink to="/products" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}>Products</NavLink></li>
          <li><NavLink to="/admin" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}>Admin</NavLink></li>
        </ul>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />  {/* Các route con sẽ render ở đây */}
      </main>
    </div>
  )
}

export default RootLayout