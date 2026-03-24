## Hướng dẫn chạy
1. **Clone repository:**
   ```bash
   git clone [Link-repo]
   cd Hugo-Blog
   ```
2. **Cài đặt thư viện Node.js:**
   ```bash
   npm install
   ```
3. **Cấu hình biến môi trường:**
   Tạo file `.env` ở thư mục gốc và thêm API Keys từ dự án Supabase:
   ```env
   SUPABASE_URL=your_url
   SUPABASE_ANON_KEY=your_anon_key
   ```
4. **Kéo dữ liệu bài viết mới nhất:**
   ```bash
   node fetch-posts.js
   ```
5. **Khởi động Hugo Server:**
   ```bash
   hugo server -D
   ```
   Truy cập `http://localhost:1313` để xem kết quả.