Đây là ứng dụng demo các khái niệm routing trong React (React Router) kết hợp với backend API và database SQLite thật.  
Bao gồm 3 bài tập chính:
1. **Routing cơ bản** – Home, Products, ProductDetail (với route parameter `:id`)
2. **Query string** – Lọc theo category & sắp xếp theo giá (giữ trạng thái khi reload)
3. **Nested routes & Programmatic Navigation** – Khu vực `/admin` có dashboard và quản lý sản phẩm (CRUD thật)

## 🛠 Công nghệ sử dụng
- **Frontend**: React 18 + Vite + React Router DOM + Axios
- **Backend**: Node.js + Express + SQLite3
- **Chạy đồng thời**: concurrently (chỉ một lệnh `npm run dev`)

## 📦 Cài đặt và chạy dự án

### 1. Yêu cầu
- Node.js (phiên bản 18 trở lên)
- npm (đi kèm Node.js)
### 2. Cài đặt dependencies
Thư mục gốc: 
`npm install`

Thư mục server: 
`cd server`
`npm install`
`cd ..`

### 3. Chạy ứng dụng
`npm run dev`

Sau khi lệnh chạy thành công, bạn sẽ thấy:
Backend chạy tại http://localhost:5000
Frontend chạy tại http://localhost:5173

🧪 Kiểm thử nhanh
Bài 1	/products	Click vào sản phẩm bất kỳ → chuyển sang /products/:id hiển thị chi tiết
Bài 2	/products   Chọn bộ lọc danh mục / sắp xếp giá → URL thay đổi query string → reload lại trang, bộ lọc vẫn giữ nguyên
Bài 3	/admin  Từ dashboard, dùng nút "push" hoặc "replace" để chuyển sang /admin/products; thử nút "Quay lại" trên trình duyệt để thấy sự khác biệt. Trang /admin/products cho phép thêm/sửa/xoá sản phẩm thật trong database.
