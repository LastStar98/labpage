# main.py
import http.server
import socketserver

PORT = 8000  # 원하는 포트 번호 지정
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"서버 실행 중: http://127.0.0.1:{PORT}")
    httpd.serve_forever()
