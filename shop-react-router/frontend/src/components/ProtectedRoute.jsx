import { Navigate } from 'react-router-dom';

// Thay đổi thành false để kiểm tra redirect
const isAdmin = true;

export default function ProtectedRoute({ children }) {
  if (!isAdmin) {
    // Dùng replace để không lưu vào history stack
    return <Navigate to="/" replace />;
  }
  return children;
}