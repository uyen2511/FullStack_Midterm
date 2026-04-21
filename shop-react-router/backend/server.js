import express from 'express';
import cors from 'cors';
import { products } from './data/products.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET /api/products?category=...&sort=...
app.get('/api/products', (req, res) => {
  let { category, sort } = req.query;
  let result = [...products];
  if (category) result = result.filter(p => p.category === category);
  if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
  else if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
  res.json(result);
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  product ? res.json(product) : res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));