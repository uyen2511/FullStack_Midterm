import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Admin area – protected route.</p>
      <button onClick={() => navigate('/admin/products')}>
        → Go to Manage Products (programmatic)
      </button>
      <button onClick={() => navigate(-1)}>← Back (history)</button>
    </div>
  );
}