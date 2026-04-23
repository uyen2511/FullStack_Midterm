import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, LayoutDashboard, LogIn, LogOut, ChevronRight } from 'lucide-react';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <Home size={14} /> Home
      </NavLink>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ChevronRight size={14} />
            {isLast ? (
              <span style={{ fontWeight: '600', color: 'var(--text-main)', textTransform: 'capitalize' }}>{name}</span>
            ) : (
              <NavLink to={routeTo} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'capitalize' }}>{name}</NavLink>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default function Layout() {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/', { replace: true }); // Programmatic: using replace for logout
  };

  return (
    <>
      <nav>
        <NavLink to="/" className="logo">Orange Caramel Shop</NavLink>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <NavLink to="/" end style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Home size={18} /> Home
          </NavLink>
          <NavLink to="/products" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={18} /> Products
          </NavLink>
          <NavLink to="/admin" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LayoutDashboard size={18} /> Admin
          </NavLink>
          {isAuth ? (
            <button className="secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', marginLeft: '1rem' }} onClick={handleLogout}>
              <LogOut size={16} /> Logout
            </button>
          ) : (
            <NavLink to="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LogIn size={18} /> Login
            </NavLink>
          )}
        </div>
      </nav>
      <div className="container">
        <Breadcrumbs />
        <Outlet />
      </div>
    </>
  );
}