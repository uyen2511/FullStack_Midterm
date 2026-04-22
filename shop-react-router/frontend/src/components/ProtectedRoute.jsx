import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  const location = useLocation();

  if (!isAuth) {
    // Requirements: Redirect (Navigate) + State (preserving location) + Replace history
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}