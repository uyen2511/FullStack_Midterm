import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mở database (file .db sẽ được tạo trong thư mục server)
export async function openDb() {
  return open({
    filename: path.join(__dirname, 'ecommerce.db'),
    driver: sqlite3.Database
  });
}

// Hàm khởi tạo bảng và dữ liệu mẫu
export async function initDatabase() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      category TEXT NOT NULL,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Kiểm tra nếu bảng rỗng thì insert dữ liệu mẫu
  const count = await db.get('SELECT COUNT(*) as count FROM products');
  if (count.count === 0) {
    await db.run(`
      INSERT INTO products (name, price, category, description) VALUES
      ('iPhone 15', 1000, 'electronics', 'Điện thoại Apple mới nhất, cổng USB-C.'),
      ('Samsung Galaxy S24', 900, 'electronics', 'Màn hình đẹp, AI thông minh.'),
      ('Nike Air Max', 120, 'fashion', 'Giày thể thao thoải mái.'),
      ('Adidas Ultraboost', 140, 'fashion', 'Công nghệ đế năng lượng.'),
      ('Sách React Router', 30, 'books', 'Học routing trong React.');
    `);
  }
  await db.close();
}