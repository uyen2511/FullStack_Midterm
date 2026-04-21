export default function Home() {
  return (
    <div className="card">
      <h1>Tech Shop</h1>
      <p>Welcome to the routing demo with React Router.</p>
      <h3>Demo features:</h3>
      <ul>
        <li><strong>Route params</strong> – click product → /products/:id</li>
        <li><strong>Query string</strong> – filter & sort, preserved on refresh</li>
        <li><strong>Nested routes</strong> – /admin (dashboard + products)</li>
        <li><strong>Programmatic navigation</strong> – buttons with useNavigate</li>
        <li><strong>Route guard</strong> – protected /admin (change isAdmin in code)</li>
        <li><strong>Browser history</strong> – back button, replace vs push</li>
      </ul>
    </div>
  );
}