import express from 'express';
import cors from 'cors';
import { openDb, initDatabase } from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

// Khởi tạo database khi server start
await initDatabase();

// API lấy danh sách sản phẩm (có thể lọc theo category, sort)
app.get('/api/products', async (req, res) => {
  const { category, sort } = req.query;
  const db = await openDb();
  let sql = 'SELECT * FROM products';
  const params = [];

  if (category && category !== 'all') {
    sql += ' WHERE category = ?';
    params.push(category);
  }

  if (sort === 'price_asc') {
    sql += ' ORDER BY price ASC';
  } else if (sort === 'price_desc') {
    sql += ' ORDER BY price DESC';
  } else {
    sql += ' ORDER BY id ASC';
  }

  const products = await db.all(sql, params);
  await db.close();
  res.json(products);
});

// API lấy chi tiết sản phẩm theo id
app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const db = await openDb();
  const product = await db.get('SELECT * FROM products WHERE id = ?', id);
  await db.close();
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// API thêm sản phẩm (cho admin)
app.post('/api/products', async (req, res) => {
  const { name, price, category, description } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const db = await openDb();
  const result = await db.run(
    'INSERT INTO products (name, price, category, description) VALUES (?, ?, ?, ?)',
    [name, price, category, description || '']
  );
  await db.close();
  res.status(201).json({ id: result.lastID, name, price, category, description });
});

// API cập nhật sản phẩm
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description } = req.body;
  const db = await openDb();
  await db.run(
    'UPDATE products SET name = ?, price = ?, category = ?, description = ? WHERE id = ?',
    [name, price, category, description, id]
  );
  await db.close();
  res.json({ message: 'Updated' });
});

// API xoá sản phẩm
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const db = await openDb();
  await db.run('DELETE FROM products WHERE id = ?', id);
  await db.close();
  res.json({ message: 'Deleted' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});