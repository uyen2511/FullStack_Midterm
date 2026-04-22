import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
      <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</NavLink>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name}>
             {' / '}
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
    // Programmatic Navigation after logout
    navigate('/');
  };

  return (
    <>
      <nav>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          {isAuth ? (
            <button className="secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
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