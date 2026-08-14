import http.server
import json
import os
import urllib.parse
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from groq import Groq

load_dotenv()

PORT = 3000
SERVER = os.getenv("SQL_SERVER", "LuchoX12")
DATABASE = os.getenv("SQL_DATABASE", "DataCareer")
DRIVER = os.getenv("SQL_DRIVER", "ODBC Driver 18 for SQL Server")
GROQ_KEY = os.getenv("GROQ_API_KEY", "")

# Connection to SQL Server
DB_URL = f"mssql+pyodbc://@{SERVER}/{DATABASE}?driver={urllib.parse.quote_plus(DRIVER)}&trusted_connection=yes&TrustServerCertificate=yes"
engine = None
try:
    engine = create_engine(DB_URL, fast_executemany=True)
    print(f"[OK] Servidor backend conectado a SQL Server: {SERVER} -> {DATABASE}")
except Exception as e:
    print(f"[WARN] No se pudo conectar a SQL Server: {e}")

# Groq Client
groq_client = None
if GROQ_KEY:
    try:
        groq_client = Groq(api_key=GROQ_KEY)
        print("[OK] Cliente Groq AI inicializado con llama-3.1-8b-instant")
    except Exception as e:
        print(f"[WARN] Error inicializando Groq: {e}")


class DataCareerHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/api/query":
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                sql_query = payload.get("query", "").strip()

                if not sql_query:
                    self._send_json({"success": False, "error": "Consulta SQL vacía."})
                    return

                if not engine:
                    self._send_json({"success": False, "error": "No hay conexión con SQL Server."})
                    return

                with engine.connect() as conn:
                    result = conn.execute(text(sql_query))
                    if result.returns_rows:
                        columns = list(result.keys())
                        rows = [list(row) for row in result.fetchall()]
                        # Format datetime / bytes for JSON serialization
                        formatted_rows = []
                        for row in rows:
                            formatted_row = [str(item) if item is not None else "NULL" for item in row]
                            formatted_rows.append(formatted_row)

                        self._send_json({
                            "success": True,
                            "columns": columns,
                            "rows": formatted_rows,
                            "count": len(formatted_rows)
                        })
                    else:
                        self._send_json({
                            "success": True,
                            "columns": ["Mensaje"],
                            "rows": [["Consulta ejecutada con éxito (Sin filas retornadas)."]],
                            "count": 0
                        })

            except Exception as ex:
                self._send_json({"success": False, "error": str(ex)})

        elif self.path == "/api/chat":
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                user_msg = payload.get("message", "").strip()

                if not groq_client:
                    self._send_json({"success": False, "reply": "El servicio de IA no está disponible en este momento."})
                    return

                system_prompt = (
                    "Eres KittyAI, la tutora virtual personal de datos, dulce, empática, super didáctica y motivadora para Julieth. "
                    "Julieth está aprendiendo SQL Server, Power BI, DAX, Python y Analítica de Datos desde cero absoluto. "
                    "Responde sus preguntas con explicaciones súper claras, ejemplos sencillos de la vida diaria o de su laboratorio DataCall (call center), "
                    "y añade siempre palabras dulces de ánimo, ternura y motivación (como '¡Tú puedes princesa!', '¡Eres súper inteligente! 💖✨')."
                )

                response = groq_client.chat.completions.create(
                    model="llama-3.1-8b-instant",
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_msg}
                    ],
                    temperature=0.7,
                    max_tokens=600
                )

                reply = response.choices[0].message.content
                self._send_json({"success": True, "reply": reply})

            except Exception as ex:
                self._send_json({"success": False, "reply": f"Error procesando IA: {str(ex)}"})
        else:
            self.send_error(404, "Endpoint no encontrado")

    def _send_json(self, data):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))


if __name__ == "__main__":
    print(f"Servidor DataCareer Academy corriendo en http://localhost:{PORT}")
    server = http.server.HTTPServer(('0.0.0.0', PORT), DataCareerHandler)
    server.serve_forever()
