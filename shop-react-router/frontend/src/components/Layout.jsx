import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}