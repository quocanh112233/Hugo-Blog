---
id: "f6fcbbad-4cda-451d-93bc-90151c8e6aee"
title: "ChatBot Dân Sự là một dự án chatbot tư vấn pháp luật chuyên sâu về Bộ Luật Dân Sự 2015 của Việt Nam, được xây dựng với công nghệ hiện đại, đảm bảo tính chính xác, bảo mật và trải nghiệm mượt mà. "
date: 2026-03-24T15:50:08.665031+00:00
author: "Anh Trần"
avatar: "https://lh3.googleusercontent.com/a/ACg8ocLKMUd_iFCYXPbXzY2FOvF8mDF-mB8nrRmHxiFLwpoUjCWVAw=s96-c"
draft: false
---

Giới thiệu dự án
Tên dự án: ChatBot Dân Sự – Trợ Lý Luật Sư Ảo
Mục tiêu: Hỗ trợ người dân, sinh viên luật, và chuyên gia pháp lý tra cứu, tham khảo Bộ Luật Dân Sự 2015 một cách tiện lợi.
Công nghệ chính:
RAG (Retrieval-Augmented Generation): Kết hợp tìm kiếm ngữ nghĩa và sinh văn bản.
LLM Qwen 2.5 (3B parameters): Chạy cục bộ bằng Ollama, không gửi dữ liệu ra Internet.
Frontend: ReactJS + TailwindCSS.
Backend: Python (FastAPI), Postgres Database.
Triển khai: Docker Compose.
Tính năng nổi bật
Tra cứu luật chính xác: Tìm kiếm vector để xác định đúng điều luật liên quan.
Hoạt động offline 100%: Không phụ thuộc Internet, đảm bảo riêng tư.
Bảo mật dữ liệu: Niêm phong dữ liệu bằng SHA-256 Hash, chống thay đổi trái phép.
Chống spam/DDoS: Giới hạn 5 câu hỏi/phút mỗi IP.
Trải nghiệm mượt mà: Hỗ trợ trả lời dạng streaming (hiển thị theo thời gian thực).
Giao diện hiện đại: Web app trực quan, dễ sử dụng.
Yêu cầu hệ thống
OS: Windows / Linux / macOS
RAM: Tối thiểu 8GB (khuyến nghị 16GB)
Phần mềm cần cài đặt:
Docker Desktop (khuyến nghị để chạy nhanh nhất)
Ollama (bắt buộc để chạy AI)
Hướng dẫn cài đặt nhanh (Docker)
1.Chuẩn bị AI:
oCài Ollama, tải model: ollama pull qwen2.5:3b
2.Cấu hình:
ocd backend → cp .env.example .env
3.Khởi động hệ thống:
docker-compose up --build
Truy cập:
Frontend: http://localhost:5173
Backend Docs: http://localhost:3000/docs
Database: Port 5433
Nạp dữ liệu luật
Lần đầu chạy, cần nạp dữ liệu từ file PDF vào database.
Có thể thực hiện trong Docker container hoặc bằng Python venv.
Hệ thống sẽ kiểm tra SHA-256 hash để đảm bảo dữ liệu không bị chỉnh sửa trái phép.
Tác giả & liên hệ
Phát triển bởi: Trần Nguyễn Quốc Anh
Email: trannguyenquocanh2004@gmail.com

