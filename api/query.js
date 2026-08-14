// Vercel Serverless Function for SQL Query Execution
// MODO DEMO: Devuelve datos de ejemplo realistas sobre DataCall.
// Para usar datos REALES de LuchoX12, ejecuta python server.py en tu computador local.
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }

  const { query } = req.body || {};
  const sql = (query || "").trim().toUpperCase();

  let columns, rows;

  // --- Detección inteligente de la consulta ---

  // COUNT / GROUP BY -> Resumen por resultado de llamada
  if (sql.includes("GROUP BY") || (sql.includes("COUNT") && sql.includes("RESULTADO"))) {
    columns = ["resultado", "total_llamadas", "duracion_promedio_seg"];
    rows = [
      ["Resuelta",     "24500", "280"],
      ["Venta",        "12300", "410"],
      ["Transferida",   "6200", "190"],
      ["No Resuelta",   "7000", "340"]
    ];

  // COUNT simple sobre cualquier tabla
  } else if (sql.includes("COUNT")) {
    const table = sql.includes("FACT_LLAMADAS") ? "fact_llamadas"
                : sql.includes("FACT_VENTAS")   ? "fact_ventas"
                : sql.includes("FACT_ENCUESTAS")? "fact_encuestas"
                : sql.includes("DIM_CLIENTE")   ? "dim_cliente"
                : sql.includes("DIM_AGENTE")    ? "dim_agente"
                : "tabla";
    columns = [`COUNT(*)`];
    const counts = { fact_llamadas: "50000", fact_ventas: "15300", fact_encuestas: "31200", dim_cliente: "15000", dim_agente: "85" };
    rows = [[counts[table] || "12500"]];

  // JOIN / VENTAS -> Tabla de ventas con producto
  } else if (sql.includes("JOIN") || sql.includes("VENTAS") || sql.includes("FACT_VENTAS")) {
    columns = ["venta_id", "cliente", "ciudad", "producto", "valor_total"];
    rows = [
      ["101", "Julieth Galvis",  "Bogotá",   "Internet 600M",  "85000"],
      ["102", "Carlos Mendoza",  "Medellín",  "Plan Premium",   "85000"],
      ["103", "Mariana Torres",  "Cali",      "Fibra Hogar",    "95000"],
      ["104", "Felipe Gómez",    "Bogotá",    "TV + Internet",  "120000"],
      ["105", "Andrea Ospina",   "Ibagué",    "Internet 300M",  "65000"]
    ];

  // AGENTE / DIM_AGENTE
  } else if (sql.includes("AGENTE") || sql.includes("DIM_AGENTE")) {
    columns = ["agente_id", "nombre", "turno", "nivel", "fecha_ingreso"];
    rows = [
      ["A001", "Sandra Ríos",      "Mañana", "Senior",   "2021-03-15"],
      ["A002", "Tomás Herrera",    "Tarde",  "Medio",    "2022-07-01"],
      ["A003", "Diana Castillo",   "Noche",  "Junior",   "2023-01-10"],
      ["A004", "Miguel Parra",     "Mañana", "Senior",   "2020-11-20"],
      ["A005", "Laura Vásquez",    "Tarde",  "Medio",    "2022-03-08"]
    ];

  // ENCUESTAS / FACT_ENCUESTAS
  } else if (sql.includes("ENCUESTA") || sql.includes("FACT_ENCUESTAS") || sql.includes("SATISFACCION")) {
    columns = ["encuesta_id", "cliente_id", "satisfaccion", "nps", "comentario"];
    rows = [
      ["E001", "C1001", "5", "9",  "Excelente servicio, muy rápido"],
      ["E002", "C1002", "2", "3",  "Espera muy larga, no resolvieron"],
      ["E003", "C1003", "4", "8",  "Bien, aunque podría mejorar"],
      ["E004", "C1004", "1", "2",  "Pésimo, llamé 3 veces sin solución"],
      ["E005", "C1005", "5", "10", "El agente fue muy amable y resolutivo"]
    ];

  // LLAMADAS / FACT_LLAMADAS
  } else if (sql.includes("LLAMADA") || sql.includes("FACT_LLAMADAS")) {
    columns = ["llamada_id", "cliente_id", "agente_id", "canal", "duracion_segundos", "tiempo_espera_segundos", "resultado"];
    rows = [
      ["L10001", "C1001", "A001", "Telefónico", "320", "45",  "Resuelta"],
      ["L10002", "C1002", "A002", "Chat",        "190", "15",  "Venta"],
      ["L10003", "C1003", "A003", "WhatsApp",    "410", "290", "No Resuelta"],
      ["L10004", "C1004", "A001", "Telefónico",  "280", "62",  "Transferida"],
      ["L10005", "C1005", "A002", "Chat",        "150", "8",   "Resuelta"]
    ];

  // PRODUCTO / DIM_PRODUCTO
  } else if (sql.includes("PRODUCTO") || sql.includes("DIM_PRODUCTO")) {
    columns = ["producto_id", "producto", "categoria", "precio_mes"];
    rows = [
      ["P001", "Internet 300M",  "Internet",  "65000"],
      ["P002", "Internet 600M",  "Internet",  "85000"],
      ["P003", "Plan Premium",   "Convergente","150000"],
      ["P004", "TV + Internet",  "Convergente","120000"],
      ["P005", "Fibra Hogar",    "Internet",  "95000"]
    ];

  // DEFAULT: Clientes / DIM_CLIENTE
  } else {
    columns = ["cliente_id", "nombre", "ciudad", "edad", "tipo_cliente"];
    rows = [
      ["C1001", "Julieth Galvis",  "Bogotá",   "24", "Premium"],
      ["C1002", "Carlos Mendoza",  "Medellín",  "35", "Nuevo"],
      ["C1003", "Andrea Ospina",   "Cali",      "29", "Recurrente"],
      ["C1004", "Felipe Gómez",    "Bogotá",    "41", "Corporativo"],
      ["C1005", "Mariana Torres",  "Ibagué",    "27", "Premium"],
      ["C1006", "Camila Ruiz",     "Barranquilla","32","Nuevo"],
      ["C1007", "Sebastián Mora",  "Pereira",   "38", "Recurrente"]
    ];
  }

  return res.status(200).json({
    success: true,
    columns,
    rows,
    count: rows.length,
    demo: true,
    note: "🎀 Modo Demo Vercel: Los datos son ejemplos reales de DataCall. Para ejecutar contra tu SQL Server LuchoX12, usa python server.py en tu computador."
  });
};
