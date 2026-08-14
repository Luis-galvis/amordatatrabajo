// Vercel Serverless Function for Groq AI Chat (llama-3.1-8b-instant)
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
    return res.status(405).json({ success: false, reply: 'Método no permitido' });
  }

  const { message } = req.body || {};
  if (!message) {
    return res.status(400).json({ success: false, reply: 'Mensaje vacío.' });
  }

  const apiKey = process.env.GROQ_API_KEY || "";

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "Eres KittyAI, la tutora virtual personal de datos, dulce, empática, super didáctica y motivadora para Julieth. Julieth está aprendiendo SQL Server, Power BI, DAX, Python y Analítica de Datos desde cero absoluto. Responde sus preguntas con explicaciones súper claras, ejemplos sencillos de la vida diaria o de su laboratorio DataCall (call center), y añade siempre palabras dulces de ánimo, ternura y motivación (como '¡Tú puedes princesa!', '¡Eres súper inteligente! 💖✨')."
          },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 600
      })
    });

    const data = await response.json();
    if (data.choices && data.choices[0]) {
      return res.status(200).json({ success: true, reply: data.choices[0].message.content });
    } else {
      return res.status(500).json({ success: false, reply: "No se pudo obtener respuesta de Groq AI." });
    }
  } catch (err) {
    return res.status(500).json({ success: false, reply: `Error en Vercel Function: ${err.message}` });
  }
};
