// Vercel Serverless Function for SQL Query Execution
module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }

  const { query } = req.body || {};
  const sql = (query || "").trim().toUpperCase();

  // Preset responses for cloud Vercel demo mode
  let columns = ["cliente_id", "nombre", "ciudad", "edad", "tipo_cliente"];
  let rows = [
    ["1", "Julieth Galvis", "Bogotá", "24", "Premium"],
    ["2", "Carlos Mendoza", "Medellín", "35", "Nuevo"],
    ["3", "Andrea Ospina", "Cali", "29", "Recurrente"],
    ["4", "Felipe Gómez", "Bogotá", "41", "Corporativo"],
    ["5", "Mariana Torres", "Ibagué", "27", "Premium"]
  ];

  if (sql.includes("COUNT") || sql.includes("GROUP BY")) {
    columns = ["resultado", "total_llamadas", "duracion_promedio_seg"];
    rows = [
      ["Resuelta", "24500", "280"],
      ["Venta", "12300", "410"],
      ["Transferida", "6200", "190"],
      ["No Resuelta", "7000", "340"]
    ];
  } else if (sql.includes("JOIN") || sql.includes("VENTAS")) {
    columns = ["venta_id", "cliente", "producto", "valor_total"];
    rows = [
      ["101", "Julieth Galvis", "Internet 600M", "85000.00"],
      ["102", "Carlos Mendoza", "Plan Premium", "85000.00"],
      ["103", "Mariana Torres", "Fibra Hogar", "95000.00"]
    ];
  }

  return res.status(200).json({
    success: true,
    columns: columns,
    rows: rows,
    count: rows.length,
    note: "Vercel Mode: Para conectarte a tu SQL Server LuchoX12 local, ejecuta python server.py en tu computadora."
  });
};
