/* ==========================================================================
   DataCareer Academy — Master Application Engine (app.js)
   Ruta Completa Cero Absoluto ➔ Junior Data Analyst (Fases 0 a 16 + English for Data)
   ========================================================================== */

// --- MOBILE SIDEBAR TOGGLE ---
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

// --- DATASET COMPLETO: 17 FASES (FASES 0 A 16) ---
const MODULES_DATA = [
  // ==========================================
  // FASE 0 — FUNDAMENTOS DE TECNOLOGÍA (0.1 a 0.19)
  // ==========================================
  {
    id: "m0_01_tech",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.1: ¿Qué es la Tecnología y el Análisis de Datos?",
    summary: "Descubre qué es la tecnología sin rodeos y por qué los datos son el petróleo del siglo XXI.",
    icon: "fa-laptop-code",
    purpose: "🎯 Propósito: Perderle el miedo a la tecnología y comprender cómo los datos ayudan a las empresas a tomar decisiones.",
    deliverable: "🏁 Entregable: Mapa mental conceptual de Tecnología vs Datos creado en tus apuntes.",
    analogy: "💡 Analogía: La tecnología es como los electrodomésticos de la cocina; los datos son los ingredientes que transformas en una cena deliciosa.",
    step1_theory: `¿Qué es la Tecnología?
Es cualquier herramienta creada por el ser humano para resolver problemas de forma más rápida y automática.

¿Qué es un Dato?
Es una unidad básica de información. Ejemplo: Tu nombre ('Julieth'), tu edad (24), o si llamaste al call center hoy ('Sí').

¿Qué es el Análisis de Datos?
Es examinar miles de datos guardados para descubrir patrones. Ejemplo: Descubrir a qué hora del día llaman más clientes para poner más personal de atención.`,
    step2_business: "En DataCall, recibimos 50,000 llamadas al mes. El analista de datos no contesta el teléfono; el analista estudia los registros para que los clientes esperen menos tiempo en línea.",
    step3_code: `-- Concepto fundamental:
DATO ➔ INFORMACIÓN ➔ CONOCIMIENTO ➔ DECISIÓN DE NEGOCIO`,
    step4_guided: [
      "1. Reflexiona sobre 3 tecnologías que usas a diario (WhatsApp, Cajero Automático, Spotify).",
      "2. Identifica qué datos le entregas a Spotify (canción escuchada, hora, me gusta).",
      "3. Comprende por qué Spotify te recomienda música usando analítica de datos."
    ],
    step5_individual: "Escribe 2 ejemplos de datos que genera un trabajador de call center durante su turno.",
    solution_individual: "Ejemplo 1: Duración de la llamada en segundos (300s). Ejemplo 2: Motivo de la consulta ('Facturación').",
    quiz_question: "¿Cuál es el objetivo principal del Análisis de Datos en una empresa?",
    quiz_options: ["Tomar decisiones basadas en evidencias y patrones", "Reparar computadores dañados", "Crear redes sociales", "Vender teléfonos"],
    quiz_answer: 0,
    challenge: "Identificar 3 métricas numéricas en tu vida cotidiana.",
    commonErrors: "Pensar que para ser analista de datos necesitas saber reparar computadores.",
    english_vocab: [
      { term: "Data", trans: "Datos", ex: "Data is very valuable." },
      { term: "Insight", trans: "Hallazgo / Descubrimiento", ex: "We found a key business insight." },
      { term: "Data Analyst", trans: "Analista de Datos", ex: "Julieth is a Data Analyst." }
    ],
    prereqs: []
  },
  {
    id: "m0_02_hw_sw",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.2: Hardware vs Software — Las dos caras del computador",
    summary: "Diferencia claramente lo físico (Hardware) de los programas (Software).",
    icon: "fa-hard-drive",
    purpose: "🎯 Propósito: Entender en qué parte del equipo se procesan y almacenan los datos.",
    deliverable: "🏁 Entregable: Lista de componentes físicos y virtuales de tu estación de trabajo.",
    analogy: "💡 Analogía: El Hardware es el cuerpo humano (músculos, ojos); el Software es la mente y tus pensamientos.",
    step1_theory: `Hardware (Lo que puedes tocar):
- Pantalla, Teclado, Ratón, Memoria RAM, Disco Duro, Procesador.

Software (Lo que solo puedes ver):
- Sistema Operativo (Windows), Navegador (Chrome), SQL Server, Excel, Power BI, Python.`,
    step2_business: "Cuando trabajas en DataCall, el Hardware es la diadema y el computador; el Software son las herramientas donde registras y analizas las llamadas.",
    step3_code: `HARDWARE = Computador / Servidor LuchoX12
SOFTWARE = SQL Server Management Studio (SSMS)`,
    step4_guided: [
      "1. Presiona Ctrl + Shift + Esc en tu teclado para abrir el Administrador de Tareas.",
      "2. Observa el uso de Procesador (CPU) y Memoria RAM (Hardware).",
      "3. Mira la lista de Aplicaciones abiertas (Software)."
    ],
    step5_individual: "Clasifica los siguientes elementos en HW o SW: Teclado, Excel, Memoria RAM, Windows 11.",
    solution_individual: "Hardware: Teclado, Memoria RAM. Software: Excel, Windows 11.",
    quiz_question: "¿A qué categoría pertenece SQL Server Management Studio?",
    quiz_options: ["Software", "Hardware", "Periférico", "Componente físico"],
    quiz_answer: 0,
    challenge: "Ver cuánta memoria RAM tiene tu computador.",
    commonErrors: "Confundir el disco duro con la memoria RAM.",
    english_vocab: [
      { term: "Hardware", trans: "Componentes Físicos", ex: "The server has fast hardware." },
      { term: "Software", trans: "Programas y Aplicaciones", ex: "We install data software." },
      { term: "RAM Memory", trans: "Memoria RAM", ex: "Power BI requires 8GB of RAM." }
    ],
    prereqs: ["m0_01_tech"]
  },
  {
    id: "m0_03_os",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.3: ¿Qué es un Sistema Operativo? (Windows, macOS, Linux)",
    summary: "Conoce el director de orquesta que administra los recursos de tu computador.",
    icon: "fa-desktop",
    purpose: "🎯 Propósito: Aprender cómo el sistema operativo permite ejecutar SQL Server y herramientas analíticas.",
    deliverable: "🏁 Entregable: Configuración del entorno de trabajo optimizado en Windows.",
    analogy: "💡 Analogía: El Sistema Operativo es el director del hotel que le asigna habitación a cada huésped.",
    step1_theory: `El Sistema Operativo (SO) es el software principal que controla el computador.
- Windows: El más usado en las empresas para SQL Server y Power BI Desktop.
- macOS: Usado en diseño y desarrollo.
- Linux: El rey de los servidores en la nube.`,
    step2_business: "En la empresa, SQL Server se ejecuta sobre servidores Windows Server para almacenar la información del call center.",
    step3_code: `SISTEMA OPERATIVO = Administrador del Hardware para tus Apps de Data`,
    step4_guided: [
      "1. Presiona la tecla Windows + R.",
      "2. Escribe 'winver' y presiona Enter.",
      "3. Observa la versión de Windows instalada."
    ],
    step5_individual: "Investiga cuál es el sistema operativo líder en servidores empresariales.",
    solution_individual: "Linux domina los servidores cloud, mientras Windows domina las estaciones de trabajo analíticas.",
    quiz_question: "¿Cuál es el sistema operativo principal donde corre Power BI Desktop nativamente?",
    quiz_options: ["Windows", "Android", "iOS", "PlayStation OS"],
    quiz_answer: 0,
    challenge: "Aprender los atajos de teclado Windows + E y Windows + D.",
    commonErrors: "Confundir el navegador de internet con el sistema operativo.",
    english_vocab: [
      { term: "Operating System", trans: "Sistema Operativo", ex: "Windows is our operating system." },
      { term: "File System", trans: "Sistema de Archivos", ex: "Organize your data file system." }
    ],
    prereqs: ["m0_02_hw_sw"]
  },
  {
    id: "m0_04_files",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.4: Archivos, Carpetas y Extensiones (.csv, .xlsx, .pbix, .sql, .py)",
    summary: "Domina la organización de archivos de datos y sus extensiones fundamentales.",
    icon: "fa-folder-open",
    purpose: "🎯 Propósito: Reconocer instantáneamente el tipo de archivo de datos por su extensión.",
    deliverable: "🏁 Entregable: Estructura de carpetas del proyecto 'DataCall_Analytics' creada.",
    analogy: "💡 Analogía: Las carpetas son los cajones de un archivador; la extensión del archivo es la etiqueta de color.",
    step1_theory: `Principales Extensiones en Analítica de Datos:
- .csv: Archivo de texto plano separado por comas (universal e liviano).
- .xlsx: Libro de trabajo de Microsoft Excel.
- .pbix: Informe visual de Power BI Desktop.
- .sql: Script con consultas de bases de datos.
- .py: Código fuente de script de Python.
- .ipynb: Cuaderno interactivo de Jupyter Notebook.`,
    step2_business: "En DataCall, las extracciones diarias se descargan como archivos .csv o .xlsx para luego cargarlas a SQL Server.",
    step3_code: `ESTRUTURA PROFESIONAL DE PROYECTO:
DataCall_Analytics/
  ├── 01_SQL/ (.sql)
  ├── 02_PowerBI/ (.pbix)
  ├── 03_Python/ (.py, .ipynb)
  └── 04_Data/ (.csv, .xlsx)`,
    step4_guided: [
      "1. Abre el Explorador de Archivos (Windows + E).",
      "2. Ve a la pestaña 'Vista' u 'Opciones' y activa la casilla 'Extensiones de nombre de archivo'.",
      "3. Crea la carpeta 'DataCall_Analytics' con las subcarpetas 01_SQL, 02_PowerBI, 03_Python y 04_Data."
    ],
    step5_individual: "Identifica la extensión del archivo 'ventas_2025.csv'.",
    solution_individual: "La extensión es .csv (Comma-Separated Values).",
    quiz_question: "¿Qué extensión le pertenece a un archivo de proyecto de Power BI Desktop?",
    quiz_options: [".pbix", ".xlsx", ".docx", ".pdf"],
    quiz_answer: 0,
    challenge: "Crear una estructura de carpetas organizada para tus tareas.",
    commonErrors: "Ocultar las extensiones de archivos en Windows.",
    english_vocab: [
      { term: "File Extension", trans: "Extensión de Archivo", ex: "Check the CSV file extension." },
      { term: "Folder", trans: "Carpeta", ex: "Save reports in the output folder." }
    ],
    prereqs: ["m0_03_os"]
  },
  {
    id: "m0_05_apps",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.5: Programas y Aplicaciones del Data Analyst",
    summary: "Conoce el paquete completo de herramientas que utiliza un analista junior día a día.",
    icon: "fa-cubes",
    purpose: "🎯 Propósito: Mapear las 5 herramientas esenciales del perfil de analista de datos.",
    deliverable: "🏁 Entregable: Verificación de software instalado en tu equipo.",
    analogy: "💡 Analogía: La caja de herramientas del mecánico (llaves, destornilladores = SSMS, Excel, Power BI, Python).",
    step1_theory: `El Stack del Data Analyst Junior:
1. SQL Server SSMS: Consultar la base de datos relacional.
2. Microsoft Excel: Limpieza rápida y tablas dinámicas.
3. Power BI Desktop: Dashboards ejecutivos interactivos.
4. VS Code + Python: Automatización de tareas y estadística.
5. Git & GitHub: Guardar y publicar el portafolio en internet.`,
    step2_business: "Un día típico de Julieth: 9 AM consulta SQL en SSMS, 11 AM actualiza Power BI, 3 PM crea un script en Python.",
    step3_code: `STACK DE HERRAMIENTAS:
[SSMS] ➔ [EXCEL] ➔ [POWER BI] ➔ [PYTHON] ➔ [GITHUB]`,
    step4_guided: [
      "1. Revisa qué herramientas tienes instaladas en tu equipo.",
      "2. Confirma que tienes acceso a SSMS y VS Code."
    ],
    step5_individual: "Nombra las 3 herramientas principales de visualización y consulta de datos.",
    solution_individual: "SQL Server SSMS (consulta), Power BI (visualización), Excel (análisis rápido).",
    quiz_question: "¿Cuál es la herramienta principal para crear dashboards ejecutivos interactivos?",
    quiz_options: ["Power BI Desktop", "Bloc de Notas", "Paint", "Calculator"],
    quiz_answer: 0,
    challenge: "Familiarizarte con los íconos de SSMS, Power BI y VS Code.",
    commonErrors: "Pensar que un analista solo usa Excel.",
    english_vocab: [
      { term: "Tool stack", trans: "Conjunto de herramientas", ex: "My tool stack includes SQL and Power BI." }
    ],
    prereqs: ["m0_04_files"]
  },
  {
    id: "m0_06_internet",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.6: Internet, Navegadores y Protocolo HTTP",
    summary: "Entiende cómo viajan los datos por la red entre la web y tu computador.",
    icon: "fa-globe",
    purpose: "🎯 Propósito: Comprender la infraestructura por donde se consumen APIs e información web.",
    deliverable: "🏁 Entregable: Inspección de peticiones de red en las herramientas de desarrollador.",
    analogy: "💡 Analogía: El navegador es un mensajero en bicicleta que va a la oficina central (Servidor) a pedir una carta (Página Web) y te la trae.",
    step1_theory: `¿Qué es Internet? Una red global de computadores conectados.
¿Qué es un Navegador? Un programa (Chrome, Edge) que interpreta código web (HTML/CSS/JS).
Protocolo HTTP/HTTPS: Las reglas de conversación en internet (GET = Dame datos, POST = Guarda datos).`,
    step2_business: "Los clientes de DataCall realizan compras a través de la página web que envía peticiones HTTP a la base de datos.",
    step3_code: `PETICIÓN HTTP: GET /api/ventas ➔ RESPUESTA: 200 OK [Datos de Ventas]`,
    step4_guided: [
      "1. Abre Google Chrome y presiona F12 (Herramientas de Desarrollador).",
      "2. Ve a la pestaña 'Red' (Network).",
      "3. Recarga la página y observa las solicitudes HTTP cargando."
    ],
    step5_individual: "¿Qué significa que una petición responda con código 200 vs 404?",
    solution_individual: "200 significa éxito (OK); 404 significa que la página o recurso no fue encontrado.",
    quiz_question: "¿Qué método HTTP se usa habitualmente para solicitar/consultar información?",
    quiz_options: ["GET", "POST", "DELETE", "UPDATE"],
    quiz_answer: 0,
    challenge: "Abrir la consola de desarrollador F12 en tu navegador.",
    commonErrors: "Confundir la red Wi-Fi local con Internet global.",
    english_vocab: [
      { term: "Browser", trans: "Navegador Web", ex: "Open Chrome browser." },
      { term: "Request", trans: "Petición / Solicitud", ex: "Send an HTTP request." }
    ],
    prereqs: ["m0_05_apps"]
  },
  {
    id: "m0_07_client_server",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.7: Arquitectura Cliente y Servidor",
    summary: "Comprende la relación entre la computadora que pide datos (Cliente) y el equipo potente que responde (Servidor).",
    icon: "fa-network-wired",
    purpose: "🎯 Propósito: Entender por qué SSMS (Cliente) se conecta al servidor `LuchoX12` para traer datos.",
    deliverable: "🏁 Entregable: Diagrama de conexión Cliente-Servidor en SSMS.",
    analogy: "💡 Analogía: En un restaurante, tú eres el Cliente que pide la orden; la cocina central es el Servidor que prepara la comida.",
    step1_theory: `Cliente: Tu computador personal corriendo SSMS, Power BI o VS Code.
Servidor: Un computador potente encendido 24/7 (ej: LuchoX12) que guarda las bases de datos masivas.`,
    step2_business: "El servidor de DataCall guarda 50,000 llamadas. Tu computador (cliente) no necesita almacenar toda la base; solo pide los resultados que necesitas.",
    step3_code: `CLIENTE (SSMS en tu PC) ─── Petición SQL (F5) ───► SERVIDOR (LuchoX12)
CLIENTE (SSMS en tu PC) ◄─── Resultados Tabla ──── SERVIDOR (LuchoX12)`,
    step4_guided: [
      "1. Entiende que cuando presionas F5 en SSMS, tu cliente le habla al servidor LuchoX12.",
      "2. El servidor procesa la consulta en milisegundos y devuelve la tabla a tu pantalla."
    ],
    step5_individual: "¿Quién procesa la consulta SQL, el computador del analista o el servidor?",
    solution_individual: "El servidor procesa los datos y devuelve únicamente el resultado al cliente.",
    quiz_question: "En nuestro laboratorio, ¿qué función cumple el equipo llamado `LuchoX12`?",
    quiz_options: ["Servidor de Base de Datos SQL", "Pantalla de cliente", "Teclado", "Impresora"],
    quiz_answer: 0,
    challenge: "Explicar el modelo cliente-servidor a un compañero.",
    commonErrors: "Pensar que la base de datos completa está físicamente dentro del programa SSMS.",
    english_vocab: [
      { term: "Server", trans: "Servidor", ex: "Connect to the database server." },
      { term: "Client", trans: "Cliente", ex: "SSMS is our SQL client." }
    ],
    prereqs: ["m0_06_internet"]
  },
  {
    id: "m0_08_db_intro",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.8: ¿Qué es una Base de Datos y un SGBD?",
    summary: "Conoce qué es un Sistema Gestor de Bases de Datos (SGBD) como SQL Server.",
    icon: "fa-database",
    purpose: "🎯 Propósito: Entender la diferencia entre un archivo de Excel suelto y un Sistema de Base de Datos Relacional.",
    deliverable: "🏁 Entregable: Lista de ventajas de una Base de Datos frente a hojas de cálculo sueltas.",
    analogy: "💡 Analogía: Una hoja de Excel es un cuaderno de notas; una Base de Datos es una biblioteca gigante organizada con archivadores automáticos.",
    step1_theory: `¿Qué es una Base de Datos? Un almacén organizado de datos estructurados.
¿Qué es un SGBD (DBMS)? El software encargado de gestionar la seguridad, rapidez y acceso multiusuario (Ejemplo: Microsoft SQL Server, PostgreSQL, MySQL).`,
    step2_business: "Si 100 agentes de call center intentan abrir el mismo archivo de Excel al mismo tiempo, se bloquea. Con SQL Server, 1,000 agentes registran llamadas simultáneamente sin problemas.",
    step3_code: `SGBD (SQL Server) ➔ Administra la Base de Datos 'DataCareer'`,
    step4_guided: [
      "1. Comprende las 3 ventajas clave: Seguridad, Velocidad con millones de datos, Multiusuario."
    ],
    step5_individual: "Menciona 2 motores de base de datos relacionales populares además de SQL Server.",
    solution_individual: "PostgreSQL, MySQL, Oracle, SQLite.",
    quiz_question: "¿Por qué una empresa usa SQL Server en lugar de guardar todo en archivos de Excel?",
    quiz_options: ["Permite millones de datos, acceso simultáneo y seguridad avanzada", "Porque Excel es muy caro", "Porque Excel no tiene colores", "Por ninguna razón"],
    quiz_answer: 0,
    challenge: "Identificar los nombres de las bases de datos en tu entorno SSMS.",
    commonErrors: "Confundir el motor de base de datos con el programa de hojas de cálculo.",
    english_vocab: [
      { term: "Database", trans: "Base de Datos", ex: "DataCareer is our main database." },
      { term: "DBMS", trans: "Sistema Gestor de Base de Datos", ex: "SQL Server is a relational DBMS." }
    ],
    prereqs: ["m0_07_client_server"]
  },
  {
    id: "m0_09_table_intro",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.9: ¿Qué es una Tabla, Filas y Columnas?",
    summary: "Aprende la estructura rectangular básica donde se guardan los datos.",
    icon: "fa-table-cells",
    purpose: "🎯 Propósito: Dominar los conceptos de Filas (Registros) y Columnas (Campos).",
    deliverable: "🏁 Entregable: Reconocimiento de la tabla `analytics.dim_cliente`.",
    analogy: "💡 Analogía: Una tabla es como una lista de asistencia; cada renglón horizontal es una persona, cada columna vertical es un dato (Nombre, Asistencia).",
    step1_theory: `Estructura de una Tabla:
- Columna (Campo): Atributo vertical fijo (Ej: Nombre, Ciudad, Edad).
- Fila (Registro): Evento o individuo horizontal (Ej: Cliente ID 104, Julieth Galvis, Bogotá, 24).`,
    step2_business: "En DataCall, la tabla `fact_llamadas` tiene 50,000 filas (cada una es una llamada) y 10 columnas (duración, fecha, agente, cliente, etc.).",
    step3_code: `TABLA: analytics.dim_cliente
| cliente_id | nombre         | ciudad |
|------------|----------------|--------|
| 1          | Julieth Galvis | Bogotá |`,
    step4_guided: [
      "1. Abre SSMS y expande las tablas del esquema analytics.",
      "2. Distingue visualmente la cuadrícula de filas y columnas."
    ],
    step5_individual: "Si una tabla tiene 500 clientes, ¿cuántas filas tiene la tabla?",
    solution_individual: "Tiene 500 filas (registros).",
    quiz_question: "¿Qué representa una fila (registro) en una tabla de llamadas?",
    quiz_options: ["Una llamada individual realizada", "El nombre de la columna", "El título de la base de datos", "El total de llamadas"],
    quiz_answer: 0,
    challenge: "Contar cuántas columnas tiene la tabla `analytics.dim_agente`.",
    commonErrors: "Confundir las columnas (verticales) con las filas (horizontales).",
    english_vocab: [
      { term: "Table", trans: "Tabla", ex: "Query the customer table." },
      { term: "Row / Record", trans: "Fila / Registro", ex: "The table contains 50,000 rows." },
      { term: "Column / Field", trans: "Columna / Campo", ex: "Select the city column." }
    ],
    prereqs: ["m0_08_db_intro"]
  },
  {
    id: "m0_10_api_intro",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.10: Repaso — ¿Qué es una API? (Interfaz de Programación)",
    summary: "Repasa cómo las APIs permiten que dos sistemas se comuniquen sin compartir su código interno.",
    icon: "fa-plug",
    purpose: "🎯 Propósito: Reforzar el concepto de API que ya aprendiste e integrarlo al flujo de datos.",
    deliverable: "🏁 Entregable: Comprensión del consumo de la API de Groq AI en la plataforma.",
    analogy: "💡 Analogía: El mesero de un restaurante; lleva tu pedido a la cocina y te trae el plato listo sin que tú entres a cocinar.",
    step1_theory: `¿Qué es una API (Application Programming Interface)?
Es un conjunto de definiciones y protocolos que permite a dos aplicaciones comunicarse entre sí.
Ejemplo: Nuestra plataforma le envía un mensaje a la API de Groq y Groq nos devuelve la respuesta de la IA.`,
    step2_business: "En DataCall, una API conecta el sistema telefónico con la base de datos SQL Server en tiempo real.",
    step3_code: `NUESTRA APP ─── Request API (Pregunta) ───► GROQ AI API (Llama 3)
NUESTRA APP ◄─── Response JSON (Respuesta) ── GROQ AI API (Llama 3)`,
    step4_guided: [
      "1. Recuerda la pestaña 'Tutor IA KittyAI'.",
      "2. Cuando escribes un mensaje, la app usa la API de Groq para responderte."
    ],
    step5_individual: "¿Cuál es el formato de datos más común para intercambiar información en una API web?",
    solution_individual: "El formato JSON (JavaScript Object Notation).",
    quiz_question: "¿Cuál es la función principal de una API?",
    quiz_options: ["Permitir la comunicación e intercambio de datos entre dos sistemas", "Diseñar logotipos", "Crear presentaciones de PowerPoint", "Limpiar teclados"],
    quiz_answer: 0,
    challenge: "Enviar una pregunta a KittyAI y observar cómo la API responde.",
    commonErrors: "Creer que una API es una página web visual para usuarios finales.",
    english_vocab: [
      { term: "API", trans: "Interfaz de Programación de Aplicaciones", ex: "Fetch data from the REST API." },
      { term: "Endpoint", trans: "Punto de Acceso de API", ex: "Call the /api/chat endpoint." }
    ],
    prereqs: ["m0_09_table_intro"]
  },
  {
    id: "m0_11_json",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.11: ¿Qué es el formato JSON?",
    summary: "Conoce el estándar universal de texto para estructurar información en la web.",
    icon: "fa-code",
    purpose: "🎯 Propósito: Leer y entender la estructura de clave-valor en datos tipo JSON.",
    deliverable: "🏁 Entregable: Objeto JSON escrito para representar un cliente.",
    analogy: "💡 Analogía: Una ficha bibliográfica donde pones 'Etiqueta': 'Valor' (Ej: Nombre: Julieth).",
    step1_theory: `JSON (JavaScript Object Notation):
Es un formato de texto super liviano basado en pares de Clave: Valor.

Ejemplo:
{
  "cliente_id": 1,
  "nombre": "Julieth Galvis",
  "ciudad": "Bogotá",
  "activo": true
}`,
    step2_business: "Las encuestas de satisfacción de DataCall llegan desde la app móvil en formato JSON a la base de datos.",
    step3_code: `{
  "llamada_id": 501,
  "duracion_segundos": 240,
  "resultado": "Resuelta"
}`,
    step4_guided: [
      "1. Observa cómo las llaves { } encierran el objeto.",
      "2. Observa cómo los textos llevan comillas dobles y los números van sueltos."
    ],
    step5_individual: "Crea un JSON para un producto con las claves: producto_id, nombre, precio.",
    solution_individual: '{"producto_id": 10, "nombre": "Diadema USB", "precio": 150000}',
    quiz_question: "¿Cómo se estructuran los datos dentro de un objeto JSON?",
    quiz_options: ["En pares de Clave : Valor", "En párrafos de texto libre", "En tablas de Excel", "En columnas de imagen"],
    quiz_answer: 0,
    challenge: "Validar la sintaxis de un JSON sencillo.",
    commonErrors: "Olvidar cerrar las comillas o las comas entre atributos.",
    english_vocab: [
      { term: "Key-Value pair", trans: "Par Clave-Valor", ex: "JSON uses key-value pairs." }
    ],
    prereqs: ["m0_10_api_intro"]
  },
  {
    id: "m0_12_ide",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.12: Repaso — ¿Qué es un IDE y un Editor de Código?",
    summary: "Repasa la diferencia entre redactar texto en Word y escribir código profesional en un IDE o editor como VS Code.",
    icon: "fa-laptop-code",
    purpose: "🎯 Propósito: Entender el entorno de trabajo donde los desarrolladores y analistas escriben código.",
    deliverable: "🏁 Entregable: VS Code configurado con la extensión de Python.",
    analogy: "💡 Analogía: Word es un cuaderno para cartas; un IDE es una libreta inteligente para arquitectos que te marca errores y te sugiere líneas rectas automáticamente.",
    step1_theory: `IDE (Integrated Development Environment) / Editor de Código:
Es un programa diseñado para escribir código con ayuda visual: resaltado de colores, autocompletado y detección de errores de sintaxis (Ejemplos: VS Code, SSMS, PyCharm).`,
    step2_business: "Usamos VS Code para escribir scripts de Python que se conectan a SQL Server y procesan encuestas.",
    step3_code: `# En un IDE, el código se resalta con colores según su tipo:
nombre = "Julieth"  # Texto en verde
edad = 24           # Número en azul`,
    step4_guided: [
      "1. Abre VS Code en tu computador.",
      "2. Observa la barra lateral con archivos, buscador y extensiones."
    ],
    step5_individual: "¿Por qué no se debe usar Microsoft Word para escribir programas o consultas SQL?",
    solution_individual: "Porque Word agrega formatos ocultos (negritas, comillas curvas) que rompen la ejecución del código.",
    quiz_question: "¿Cuál es una ventaja principal de usar VS Code o SSMS sobre un bloc de notas?",
    quiz_options: ["Resalta errores de sintaxis y autocompleta código", "Es más bonito", "Viene con música", "Hace la tarea solo"],
    quiz_answer: 0,
    challenge: "Instalar la extensión de español en VS Code.",
    commonErrors: "Guardar archivos de código con extensión .txt en lugar de .sql o .py.",
    english_vocab: [
      { term: "IDE", trans: "Entorno de Desarrollo Integrado", ex: "VS Code is a lightweight IDE." },
      { term: "Syntax Highlighting", trans: "Resaltado de Sintaxis", ex: "Syntax highlighting helps spot errors." }
    ],
    prereqs: ["m0_11_json"]
  },
  {
    id: "m0_13_terminal",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.13: ¿Qué es una Terminal o Línea de Comandos?",
    summary: "Aprende a comunicarte con tu computador mediante comandos escritos sin usar el ratón.",
    icon: "fa-terminal",
    purpose: "🎯 Propósito: Ejecutar comandos fundamentales en la Consola / Terminal de Windows (PowerShell / CMD).",
    deliverable: "🏁 Entregable: Comando `dir` y `python --version` ejecutado con éxito en terminal.",
    analogy: "💡 Analogía: En lugar de hacer doble clic con el ratón en una carpeta, le escribes una carta formal al computador diciendo 'Abre la carpeta Data'.",
    step1_theory: `¿Qué es la Terminal / Consola?
Es una interfaz basada en texto para darle órdenes directas al sistema operativo.
- Comandos básicos en Windows:
  dir: Listar archivos de la carpeta actual.
  cd nombre: Entrar a una carpeta.
  cls: Limpiar la pantalla.`,
    step2_business: "Los analistas usan la terminal para instalar librerías de Python (`pip install pandas`) y ejecutar automatizaciones.",
    step3_code: `# Comandos de terminal:
dir
python --version
pip list`,
    step4_guided: [
      "1. Presiona Windows + R, escribe 'cmd' y presiona Enter.",
      "2. Escribe `dir` y presiona Enter para ver los archivos.",
      "3. Escribe `cls` para limpiar la terminal."
    ],
    step5_individual: "¿Cuál comando muestra la versión de Python instalada en la terminal?",
    solution_individual: "El comando es `python --version` (o `python -V`).",
    quiz_question: "¿Para qué se usa el comando `dir` en la consola de comandos de Windows?",
    quiz_options: ["Para listar las carpetas y archivos del directorio actual", "Para borrar la pantalla", "Para apagar el equipo", "Para cambiar la hora"],
    quiz_answer: 0,
    challenge: "Navegar entre carpetas con el comando `cd`.",
    commonErrors: "Tener le temor a la pantalla negra de la consola.",
    english_vocab: [
      { term: "Terminal / Command Line", trans: "Terminal / Línea de Comandos", ex: "Open the terminal in VS Code." },
      { term: "Directory", trans: "Directorio / Carpeta", ex: "List the current directory." }
    ],
    prereqs: ["m0_12_ide"]
  },
  {
    id: "m0_14_git_intro",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.14: ¿Qué es Git y GitHub? (Concepto Inicial)",
    summary: "Entiende qué es la red social del código y el sistema de control de versiones.",
    icon: "fa-code-branch",
    purpose: "🎯 Propósito: Comprender la diferencia entre el programa local (Git) y la nube pública (GitHub).",
    deliverable: "🏁 Entregable: Cuenta registrada en GitHub.com.",
    analogy: "💡 Analogía: Git es la cámara fotográfica que toma capturas de tu proyecto; GitHub es Google Photos donde subes tus fotos a la nube para mostrarlas.",
    step1_theory: `Git: Herramienta en tu PC que guarda el historial de cambios de tu código.
GitHub: Sitio web donde publicas tus repositorios para que las empresas y reclutadores vean tu trabajo.`,
    step2_business: "Al finalizar el programa, Julieth subirá el proyecto DataCall a GitHub para que los seleccionadores vean sus consultas SQL y dashboards.",
    step3_code: `GIT (Local en tu PC) ─── git push ───► GITHUB (Nube Pública para Reclutadores)`,
    step4_guided: [
      "1. Entra a https://github.com en tu navegador.",
      "2. Crea tu cuenta gratuita con tu correo profesional."
    ],
    step5_individual: "¿Cuál es la función principal de GitHub en tu carrera de analista?",
    solution_individual: "Servir como tu portafolio público de proyectos demostrables para conseguir empleo.",
    quiz_question: "¿Qué es GitHub?",
    quiz_options: ["Una plataforma web para alojar y mostrar proyectos de código y datos", "Un antivirus", "Un buscador de películas", "Una base de datos de Excel"],
    quiz_answer: 0,
    challenge: "Elegir un nombre de usuario profesional en GitHub (ej: JuliethGalvisData).",
    commonErrors: "Usar apodos no profesionales en tu cuenta de GitHub.",
    english_vocab: [
      { term: "Repository (Repo)", trans: "Repositorio", ex: "Create a public GitHub repository." },
      { term: "Commit", trans: "Guardar Cambios", ex: "Save your progress with a commit." }
    ],
    prereqs: ["m0_13_terminal"]
  },
  {
    id: "m0_15_cloud",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.15: ¿Qué es la Nube? (Cloud Computing - Azure, AWS)",
    summary: "Descubre qué significa guardar e procesar datos en la nube.",
    icon: "fa-cloud",
    purpose: "🎯 Propósito: Conocer dónde viven los servidores modernos de las grandes empresas.",
    deliverable: "🏁 Entregable: Comprensión de los servicios de nube de Microsoft Azure y AWS.",
    analogy: "💡 Analogía: Alquilar un locker seguro en un centro comercial en lugar de cargar todos tus bolsos pesados en la mano.",
    step1_theory: `Cloud Computing (Computación en la Nube):
Alquilar servidores, almacenamiento y bases de datos por internet en lugar de comprar computadores físicos caros para la empresa.
- Proveedores líderes: Microsoft Azure, Amazon Web Services (AWS), Google Cloud.`,
    step2_business: "DataCall aloja su infraestructura en Microsoft Azure para que el sistema nunca se caiga durante picos de llamadas.",
    step3_code: `BASE DE DATOS EN LA NUBE (Azure SQL Database) ◄─── Conexión remota por internet`,
    step4_guided: [
      "1. Comprende las 3 ventajas de la Nube: Escalabilidad, Seguridad y Acceso remoto desde cualquier lugar."
    ],
    step5_individual: "¿Cuál es la nube oficial de Microsoft integrada con Power BI y SQL Server?",
    solution_individual: "Microsoft Azure.",
    quiz_question: "¿Qué ventaja principal ofrece la nube a una empresa en crecimiento?",
    quiz_options: ["Permite escalar servidores y recursos instantáneamente por internet", "Regala computadores físicos", "Hace que el internet sea gratis", "No requiere electricidad"],
    quiz_answer: 0,
    challenge: "Identificar qué empresas conocidas usan la nube de Azure o AWS.",
    commonErrors: "Pensar que la nube es literalmente el clima en el cielo.",
    english_vocab: [
      { term: "Cloud Computing", trans: "Computación en la Nube", ex: "We deploy databases to the cloud." }
    ],
    prereqs: ["m0_14_git_intro"]
  },
  {
    id: "m0_16_role_analyst",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.16: ¿Qué hace exactamente un Junior Data Analyst?",
    summary: "Visualiza el día a día, las responsabilidades y el impacto de tu futuro rol profesional.",
    icon: "fa-user-tie",
    purpose: "🎯 Propósito: Tener claridad absoluta sobre las tareas reales del puesto de trabajo al que aspiras.",
    deliverable: "🏁 Entregable: Descripción personal de tu rol ideal como Junior Data Analyst.",
    analogy: "💡 Analogía: El analista de datos es como el médico general de una empresa; examina los exámenes de laboratorio (datos), diagnostica problemas (esperas altas) y prescribe tratamientos (decisiones).",
    step1_theory: `Funciones de un Junior Data Analyst:
1. Extraer datos de SQL Server o archivos.
2. Limpiar y transformar datos en Excel/Power Query/Pandas.
3. Construir dashboards interactivos en Power BI.
4. Responder preguntas de negocio de gerencia.
5. Comunicar hallazgos de forma clara (Storytelling).`,
    step2_business: "En DataCall, Julieth no toma llamadas de clientes; ayuda al gerente a entender por qué los clientes están satisfechos o insatisfechos.",
    step3_code: `FLUJO DEL DATA ANALYST:
[DATOS CRUDOS] ➔ [LIMPIEZA] ➔ [ANÁLISIS] ➔ [DASHBOARD] ➔ [DECISIÓN DE NEGOCIO]`,
    step4_guided: [
      "1. Interioriza los 4 pasos del valor analítico: Recolectar ➔ Limpiar ➔ Analizar ➔ Presentar."
    ],
    step5_individual: "Escribe la diferencia entre un programador de software y un analista de datos.",
    solution_individual: "El programador crea aplicaciones para usuarios; el analista examina los datos generados para guiar decisiones de negocio.",
    quiz_question: "¿Cuál es el producto final más común que entrega un Data Analyst a la gerencia?",
    quiz_options: ["Un dashboard o reporte interactivo con recomendaciones de negocio", "Un cable de red", "Una llamada de ventas", "Un teclado nuevo"],
    quiz_answer: 0,
    challenge: "Visualizarte trabajando en tu primer empleo como Data Analyst.",
    commonErrors: "Pensar que un analista pasa todo el día haciendo llamadas de soporte.",
    english_vocab: [
      { term: "Data-driven", trans: "Basado en datos", ex: "We make data-driven decisions." },
      { term: "Stakeholder", trans: "Interesado / Gerente", ex: "Present dashboard to stakeholders." }
    ],
    prereqs: ["m0_15_cloud"]
  },
  {
    id: "m0_17_etl_intro",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.17: Repaso — ¿Qué es el proceso ETL? (Extract, Transform, Load)",
    summary: "Repasa los 3 pasos sagrados de la ingeniería y análisis de datos.",
    icon: "fa-filter-circle-dollar",
    purpose: "🎯 Propósito: Comprender el ciclo completo de vida de los datos antes de analizarlos.",
    deliverable: "🏁 Entregable: Diagrama del proceso ETL de DataCall.",
    analogy: "💡 Analogía: Cocinar una sopa: Extraer las verduras de la huerta (Extract), Lavar y picar las verduras (Transform), Servir la sopa en la mesa (Load).",
    step1_theory: `Proceso ETL:
1. Extract (Extraer): Traer datos desde SQL Server, Excel o APIs.
2. Transform (Transformar): Limpiar nulos, cambiar formatos, filtrar errores.
3. Load (Cargar): Guardar los datos limpios en el Data Warehouse o Power BI.`,
    step2_business: "En DataCall, extraemos 50,000 llamadas brutas, eliminamos llamadas de prueba de 0 segundos y cargamos el resumen a Power BI.",
    step3_code: `E (Extraer llamadas) ➔ T (Filtrar errores) ➔ L (Cargar a Power BI)`,
    step4_guided: [
      "1. Recuerda los 3 pasos: E ➔ T ➔ L.",
      "2. Identifica en qué herramienta se hace la T en Power BI (Power Query)."
    ],
    step5_individual: "¿En qué etapa del ETL se corrigen las fechas mal escritas o casillas vacías?",
    solution_individual: "En la etapa de Transformación (T).",
    quiz_question: "¿Qué significan las siglas ETL?",
    quiz_options: ["Extract, Transform, Load (Extraer, Transformar, Cargar)", "Excel, Table, Logic", "Error, Test, List", "Execution, Time, Limit"],
    quiz_answer: 0,
    challenge: "Identificar la etapa de Transformación en un reporte sencillo.",
    commonErrors: "Intentar graficar datos crudos sin pasar por la etapa de Transformación.",
    english_vocab: [
      { term: "ETL Process", trans: "Proceso ETL", ex: "Run the daily ETL process." },
      { term: "Data Pipeline", trans: "Tubería de Datos", ex: "The data pipeline extracts CRM records." }
    ],
    prereqs: ["m0_16_role_analyst"]
  },
  {
    id: "m0_18_warehouse",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.18: Data Lake vs Data Warehouse",
    summary: "Aprende dónde se guardan los datos crudos (Lake) vs los datos limpios y organizados (Warehouse).",
    icon: "fa-warehouse",
    purpose: "🎯 Propósito: Distinguir los dos grandes depósitos de información empresariales.",
    deliverable: "🏁 Entregable: Cuadro comparativo entre Data Lake y Data Warehouse.",
    analogy: "💡 Analogía: El Data Lake es un lago natural con peces, agua y barro revuelto; el Data Warehouse es una piscina limpia de agua filtrada lista para nadar.",
    step1_theory: `Data Lake: Almacena datos masivos en su estado crudo original (imágenes, archivos de texto, logs).
Data Warehouse (DW): Depósito estructurado y super limpio optimizado para consultas analíticas rápidas de negocio.`,
    step2_business: "DataCall guarda las grabaciones de voz en un Data Lake; la base `DataCareer` en SQL Server es nuestro Data Warehouse estructurado.",
    step3_code: `DATA LAKE (Datos crudos sin filtrar) ─── Proceso ETL ───► DATA WAREHOUSE (Tablas SQL organizadas)`,
    step4_guided: [
      "1. Recuerda que como analista de datos consultarás principalmente el Data Warehouse estructurado."
    ],
    step5_individual: "¿Dónde prefieres hacer tus consultas para reportes ejecutivos, en el Data Lake o Data Warehouse?",
    solution_individual: "En el Data Warehouse, porque los datos ya están estructurados, limpios y optimizados.",
    quiz_question: "¿Cuál es la característica principal de un Data Warehouse?",
    quiz_options: ["Guarda datos estructurados, limpios y preparados para análisis de negocio", "Guarda solo archivos de música", "Es un programa de chat", "No tiene tablas"],
    quiz_answer: 0,
    challenge: "Explicar la diferencia entre lago y bodega de datos.",
    commonErrors: "Confundir un Data Lake desorganizado con una base de datos relacional limpia.",
    english_vocab: [
      { term: "Data Warehouse", trans: "Bodega / Almacén de Datos", ex: "Query the enterprise Data Warehouse." },
      { term: "Data Lake", trans: "Lago de Datos", ex: "Raw logs are stored in the Data Lake." }
    ],
    prereqs: ["m0_17_etl_intro"]
  },
  {
    id: "m0_19_medallion",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Módulo 0.19: Arquitectura Medallón (Bronze / Silver / Gold)",
    summary: "Repasa los 3 niveles de calidad de datos en la industria moderna.",
    icon: "fa-layer-group",
    purpose: "🎯 Propósito: Conocer los estándares de calidad de datos desde el origen hasta el reporte final.",
    deliverable: "🏁 Entregable: Clasificación de capas de datos de DataCall.",
    analogy: "💡 Analogía: Las medallas olímpicas: Bronce (materia prima sin pulir), Plata (limpio y pulido), Oro (la copa de campeón lista para exhibir).",
    step1_theory: `Arquitectura Medallón:
- Capa Bronze (Bronce): Datos crudos tal cual se extrajeron de los sistemas de origen.
- Capa Silver (Plata): Datos limpios, sin duplicados ni nulos, consolidados.
- Capa Gold (Oro): Datos agregados en KPIs y modelos estrella listos para dashboards gerenciales.`,
    step2_business: "Nuestra base `DataCareer` representa la Capa Silver/Gold de DataCall, lista para alimentar Power BI.",
    step3_code: `BRONZE (Extraído) ➔ SILVER (Limpio y Validado) ➔ GOLD (KPIs Gerenciales)`,
    step4_guided: [
      "1. Visualiza los 3 pasos de maduración de la información."
    ],
    step5_individual: "¿En qué capa se ubica un tablero de control publicado en Power BI?",
    solution_individual: "En la Capa Gold (Oro).",
    quiz_question: "¿Qué capa de la arquitectura medallón contiene los datos filtrados y validados sin duplicados?",
    quiz_options: ["Capa Silver (Plata)", "Capa Bronze (Bronce)", "Capa Madera", "Capa Papel"],
    quiz_answer: 0,
    challenge: "Identificar la capa de origen de tus consultas SQL.",
    commonErrors: "Intentar crear indicadores de negocio directamente en la Capa Bronze sin limpiar.",
    english_vocab: [
      { term: "Raw data", trans: "Datos Crudos (Bronze)", ex: "Ingest raw data into Bronze layer." },
      { term: "Curated data", trans: "Datos Curados (Gold)", ex: "Gold layer provides curated metrics." }
    ],
    prereqs: ["m0_18_warehouse"]
  },

  // ==========================================
  // FASE 1 — PENSAMIENTO LÓGICO Y FUNDAMENTOS DE DATOS (1.1 a 1.13)
  // ==========================================
  {
    id: "m1_01_data_def",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.1: ¿Qué es un dato realmente?",
    summary: "Comprende la diferencia entre un dato suelto y la información con sentido.",
    icon: "fa-shapes",
    purpose: "🎯 Propósito: Entender cómo los datos individuales se transforman en conocimiento de negocio.",
    deliverable: "🏁 Entregable: Ejercicio de transformación de datos en información.",
    analogy: "💡 Analogía: Las letras individuales (D, A, T, O) son datos; la palabra 'DATO' es información; entender el significado es conocimiento.",
    step1_theory: `Un Dato es un valor crudo sin contexto. Ejemplo: 120.
Información es el dato con contexto. Ejemplo: 120 segundos de tiempo de espera en llamadas.
Conocimiento es entender la implicación. Ejemplo: 120s es el doble del objetivo permitido.`,
    step2_business: "En DataCall, ver el número '5' no dice nada. Ver 'Satisfacción de cliente: 5 sobre 5' indica excelencia en la atención.",
    step3_code: `Dato: 5 ➔ Información: Satisfacción = 5 ➔ Conocimiento: Excelente atención del agente`,
    step4_guided: ["1. Toma 3 números al azar.", "2. Agrégales contexto de negocio de call center."],
    step5_individual: "Transforma el dato '300' en información útil de llamadas.",
    solution_individual: "Información: 'Duración de la llamada: 300 segundos (5 minutos)'.",
    quiz_question: "¿Cuál es la diferencia entre un dato y la información?",
    quiz_options: ["La información es el dato al que se le agrega contexto y significado", "Son exactamente lo mismo", "El dato es más largo que la información", "No tienen relación"],
    quiz_answer: 0,
    challenge: "Dar contexto a 5 números de tu día a día.",
    commonErrors: "Entregar reportes con números sueltos sin etiquetas descriptivas.",
    english_vocab: [
      { term: "Raw value", trans: "Valor Crudo", ex: "A raw value needs context." }
    ],
    prereqs: ["m0_19_medallion"]
  },
  {
    id: "m1_02_rows_cols",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.2: Pensar en Filas y Columnas",
    summary: "Desarrolla la estructura mental matricial para leer cualquier tabla.",
    icon: "fa-border-all",
    purpose: "🎯 Propósito: Organizar cualquier problema de la vida real en una tabla de doble entrada.",
    deliverable: "🏁 Entregable: Matriz de datos diseñada en papel.",
    analogy: "💡 Analogía: El tablero del juego Batalla Naval; ubicas cada barco en la intersección de una Letra (Columna) y un Número (Fila).",
    step1_theory: `Pensamiento Matricial:
Cualquier evento se compone de Atributos (Columnas) y Ocurrencias (Filas).
Ejemplo: Gastos del Mes.
Columnas: Fecha, Concepto, Valor.
Filas: (2025-08-01, Arriendo, $800.000), (2025-08-02, Mercado, $200.000).`,
    step2_business: "Toda la base de DataCall está organizada en tablas de filas y columnas bien definidas.",
    step3_code: `MATRIZ:
| Fecha      | Concepto | Valor   |
|------------|----------|---------|
| 2025-08-01 | Arriendo | 800000  |`,
    step4_guided: ["1. Dibuja una tabla de 3 filas y 3 columnas sobre tu rutina de estudio."],
    step5_individual: "Diseña la estructura de columnas para registrar los turnos de trabajo de agentes.",
    solution_individual: "Columnas recomendadas: agente_id, nombre, fecha, hora_inicio, hora_fin, turno.",
    quiz_question: "¿Qué representa una intersección entre una fila y una columna?",
    quiz_options: ["Una Celda con un valor específico", "Una tabla nueva", "Un error", "Un título"],
    quiz_answer: 0,
    challenge: "Estructurar tus gastos semanales en filas y columnas.",
    commonErrors: "Mezclar diferentes conceptos en una sola columna.",
    english_vocab: [
      { term: "Grid / Matrix", trans: "Cuadrícula / Matriz", ex: "Data is structured in a grid." }
    ],
    prereqs: ["m1_01_data_def"]
  },
  {
    id: "m1_03_data_types",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.3: Tipos de Datos — Texto, Números y Fechas",
    summary: "Aprende por qué la computadora debe saber qué tipo de valor hay en cada casilla.",
    icon: "fa-font",
    purpose: "🎯 Propósito: Evitar errores de cálculo identificando el tipo de dato correcto.",
    deliverable: "🏁 Entregable: Clasificación de tipos de datos de un formulario de cliente.",
    analogy: "💡 Analogía: Clasificar la ropa para lavar: no mezclas camisas blancas con prendas de color; en datos no sumas palabras con fechas.",
    step1_theory: `Tipos de Datos Universales:
1. Texto (String / VARCHAR): Palabras o letras. Ej: 'Julieth', 'Bogotá'.
2. Entero (Integer / INT): Números enteros sin decimales. Ej: 24, 100.
3. Decimal (Float / DECIMAL): Números con decimales. Ej: 99.50, 4.5.
4. Fecha (Date / Datetime): Momentos en el tiempo. Ej: '2025-08-19'.
5. Booleano (Boolean): Verdadero o Falso (True/False).`,
    step2_business: "Si guardas la edad como texto ('24'), no podrás calcular el promedio de edad en SQL o Power BI.",
    step3_code: `TEXTO = "Julieth" | NUMERO = 24 | FECHA = 2025-08-19 | BOOLEANO = True`,
    step4_guided: ["1. Identifica el tipo de dato de: 'Calle 100', 4500.50, '2025-01-01', 15."],
    step5_individual: "¿De qué tipo de dato debe ser la columna `duracion_segundos`?",
    solution_individual: "De tipo Número Entero (INT).",
    quiz_question: "¿Qué sucede si intentas sumar un número con una palabra de texto?",
    quiz_options: ["Se genera un error de tipo de datos (Type Error)", "Se calcula automáticamente", "Se borra la tabla", "Se apaga la PC"],
    quiz_answer: 0,
    challenge: "Identificar 4 tipos de datos en la cédula de ciudadanía.",
    commonErrors: "Guardar números telefónicos como enteros si empiezan con ceros a la izquierda.",
    english_vocab: [
      { term: "Data Type", trans: "Tipo de Dato", ex: "Select the correct data type." },
      { term: "String", trans: "Cadena de Texto", ex: "Customer name is a string." }
    ],
    prereqs: ["m1_02_rows_cols"]
  },
  {
    id: "m1_04_null_concept",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.4: El Concepto de NULL (La Ausencia de Dato)",
    summary: "Comprende qué significa la casilla vacía (NULL) y por qué NO es igual a cero ni a espacio en blanco.",
    icon: "fa-ban",
    purpose: "🎯 Propósito: Tratar correctamente las casillas sin información sin alterar promedios ni conteos.",
    deliverable: "🏁 Entregable: Ejercicio de interpretación de nulos en encuestas.",
    analogy: "💡 Analogía: El número 0 es tener $0 en la billetera; NULL es no tener la billetera a la mano para revisar.",
    step1_theory: `NULL = Ausencia total de dato (Desconocido / No respondido).
- NULL NO es igual a cero (0).
- NULL NO es igual a un texto vacío ('').
- Si sumas 100 + NULL, el resultado es NULL (desconocido).`,
    step2_business: "Si un cliente no responde la encuesta de satisfacción en DataCall, la columna `satisfaccion` queda como NULL.",
    step3_code: `PROMEDIO con NULL:
Fila 1: 5 | Fila 2: 5 | Fila 3: NULL ➔ Promedio de respuestas = (5 + 5) / 2 = 5.0`,
    step4_guided: ["1. Diferencia entre tener 0 llamadas y no haber registrado el dato (NULL)."],
    step5_individual: "¿Cómo afecta un valor NULL a la función de promedio en una base de datos?",
    solution_individual: "Las funciones de agregación como AVG() ignoran los registros NULL en su cálculo.",
    quiz_question: "¿Qué significa el valor NULL en una casilla de base de datos?",
    quiz_options: ["Que el valor es desconocido o no fue proporcionado", "Que es igual al número cero", "Que hay un error grave de sistema", "Que el valor es texto 'NULL'"],
    quiz_answer: 0,
    challenge: "Explicar la diferencia entre 0 y NULL.",
    commonErrors: "Reemplazar nulos por ceros sin analizar si altera la estadística.",
    english_vocab: [
      { term: "Missing value", trans: "Valor Faltante / Ausente", ex: "Handle missing values in SQL." }
    ],
    prereqs: ["m1_03_data_types"]
  },
  {
    id: "m1_05_identifiers",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.5: Identificadores Únicos (IDs y Claves)",
    summary: "Aprende por qué cada fila necesita una huella digital única (ID).",
    icon: "fa-fingerprint",
    purpose: "🎯 Propósito: Evitar confusiones entre registros con nombres duplicados.",
    deliverable: "🏁 Entregable: Identificación de claves únicas en tablas relacionales.",
    analogy: "💡 Analogía: En Colombia existen miles de personas llamadas 'Carlos Rodríguez', pero solo una tiene tu número de Cédula de Ciudadanía.",
    step1_theory: `Identificador Único (ID):
Una columna especial que asigna un código numérico irrepetible a cada fila.
Ejemplos: cliente_id, llamada_id, agente_id.`,
    step2_business: "En DataCall hay 3 agentes llamados 'Juan Pérez'. El campo `agente_id` (101, 102, 103) permite saber exactamente a cuál premiar.",
    step3_code: `| cliente_id (ID Único) | nombre       |
|-----------------------|--------------|
| 1001                  | Carlos Gómez |
| 1002                  | Carlos Gómez |`,
    step4_guided: ["1. Observa cómo los IDs permiten diferenciar filas idénticas en todo lo demás."],
    step5_individual: "Si no existiera el campo `llamada_id`, ¿cómo identificarías una llamada específica?",
    solution_individual: "Sería casi imposible o muy lento tener que buscar por fecha, hora, cliente y duración al mismo tiempo.",
    quiz_question: "¿Cuál es la función principal de una columna de ID en una tabla?",
    quiz_options: ["Identificar de forma única e irrepetible cada registro", "Hacer la tabla más larga", "Poner números bonitos", "Ninguna"],
    quiz_answer: 0,
    challenge: "Crear un esquema de IDs para una tienda de ropa.",
    commonErrors: "Usar nombres de personas como claves primarias.",
    english_vocab: [
      { term: "Unique Identifier", trans: "Identificador Único", ex: "Each row has a unique identifier." }
    ],
    prereqs: ["m1_04_null_concept"]
  },
  {
    id: "m1_06_comparisons",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.6: Comparaciones Lógicas (=, >, <, >=, <=, <>)",
    summary: "Domina los operadores matemáticos de comparación que alimentan los filtros.",
    icon: "fa-equals",
    purpose: "🎯 Propósito: Evaluar condiciones verdaderas o falsas sobre los datos.",
    deliverable: "🏁 Entregable: Respuestas de evaluación lógica de comparaciones.",
    analogy: "💡 Analogía: El semáforo de velocidad; si tu velocidad es > 60 km/h, se enciende la fotomulta (Verdadero).",
    step1_theory: `Operadores de Comparación:
- Igual a: =
- Mayor que: >
- Menor que: <
- Mayor o igual a: >=
- Menor o igual a: <=
- Diferente de: <> (o !=)`,
    step2_business: "En DataCall buscamos llamadas donde `tiempo_espera_segundos > 120` para enviar una alerta al supervisor.",
    step3_code: `EVALUACIÓN LÓGICA:
duracion = 300 ➔ (duracion > 120) ➔ VERDADERO (True)
edad = 24 ➔ (edad >= 30) ➔ FALSO (False)`,
    step4_guided: ["1. Evalúa si 150 > 200 (Falso).", "2. Evalúa si 'Bogotá' = 'Bogotá' (Verdadero)."],
    step5_individual: "Escribe la condición lógica para encontrar llamadas que duraron menos de 60 segundos.",
    solution_individual: "La condición es: `duracion_segundos < 60`.",
    quiz_question: "¿Qué operador representa 'Diferente de' en la mayoría de bases de datos SQL?",
    quiz_options: ["<>", "==", "??", "&&"],
    quiz_answer: 0,
    challenge: "Resolver 5 ejercicios de lógica de mayor/menor.",
    commonErrors: "Confundir el signo de mayor que (>) con menor que (<).",
    english_vocab: [
      { term: "Comparison Operator", trans: "Operador de Comparación", ex: "Use comparison operators in filtering." }
    ],
    prereqs: ["m1_05_identifiers"]
  },
  {
    id: "m1_07_conditions_and_or",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.7: Pensamiento Lógico con AND, OR y NOT",
    summary: "Combina múltiples reglas de negocio con los tres conectores lógicos principales.",
    icon: "fa-diagram-project",
    purpose: "🎯 Propósito: Construir filtros complejos combinando múltiples criterios de análisis.",
    deliverable: "🏁 Entregable: Tabla de verdad aplicada a casos del Call Center.",
    analogy: "💡 Analogía: Salir de fiesta: Entras si eres mayor de edad (18) AND llevas cédula. En cambio, tomas taxi si llueve OR está muy oscuro.",
    step1_theory: `Operadores Lógicos:
- AND (Y): Ambas condiciones deben ser VERDADERAS.
- OR (O): Al menos UNA condición debe ser VERDADERA.
- NOT (NO): Invierte el resultado (Verdadero se vuelve Falso).`,
    step2_business: "Buscamos clientes VIP en DataCall: `ciudad = 'Bogotá' AND tipo_cliente = 'Premium'`.",
    step3_code: `REGLAS DE NEGOCIO:
(ciudad = 'Bogotá' AND edad > 25) ➔ Requiere CUMPLIR AMBAS.
(ciudad = 'Bogotá' OR ciudad = 'Cali') ➔ CUMPLE SI ES BOGOTÁ O CALI.`,
    step4_guided: [
      "1. Evalúa: (Verdadero AND Falso) ➔ FALSO.",
      "2. Evalúa: (Verdadero OR Falso) ➔ VERDADERO."
    ],
    step5_individual: "Escribe la regla lógica para llamadas de turno 'Noche' con espera mayor a 180 segundos.",
    solution_individual: "La regla es: `turno = 'Noche' AND tiempo_espera_segundos > 180`.",
    quiz_question: "Si usamos el operador AND entre dos condiciones, ¿cuándo se cumple el resultado?",
    quiz_options: ["Solo cuando AMBAS condiciones son Verdaderas", "Cuando al menos una se cumple", "Nunca se cumple", "Cuando ambas son Falsas"],
    quiz_answer: 0,
    challenge: "Crear una tabla de verdad sencilla en papel.",
    commonErrors: "Usar OR cuando de verdad querías exigir que se cumplieran ambas reglas (AND).",
    english_vocab: [
      { term: "Logical Operator", trans: "Operador Lógico", ex: "Combine filters with AND/OR." }
    ],
    prereqs: ["m1_06_comparisons"]
  },
  {
    id: "m1_08_metrics_kpis",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.8: ¿Qué es una Métrica y un KPI?",
    summary: "Diferencia un número simple de un Indicador Clave de Rendimiento (KPI).",
    icon: "fa-chart-line",
    purpose: "🎯 Propósito: Aprender a medir el éxito de un negocio mediante indicadores gerenciales.",
    deliverable: "🏁 Entregable: Lista de 3 KPIs estratégicos para DataCall.",
    analogy: "💡 Analogía: Una Métrica es tu temperatura corporal (37°C); un KPI es saber si tienes fiebre porque sobrepasó el límite normal (38.5°C).",
    step1_theory: `Métrica: Cualquier medida numérica cuantitativa (Ej: Total de llamadas = 50,000).
KPI (Key Performance Indicator / Indicador Clave de Rendimiento): Una métrica crítica comparada contra una meta u objetivo de negocio (Ej: Tasa de Abandono de Llamadas < 5%).`,
    step2_business: "En DataCall, la meta gerencial (KPI) es que el tiempo de espera promedio sea menor a 45 segundos.",
    step3_code: `MÉTRICA = Conteo total de llamadas (50,000)
KPI = Tasa de satisfacción (% de notas 5/5 contra la meta del 90%)`,
    step4_guided: ["1. Distingue entre contar cosas (Métrica) y evaluar el desempeño contra una meta (KPI)."],
    step5_individual: "Propón un KPI de eficiencia para los agentes del call center.",
    solution_individual: "KPI: Tiempo Promedio de Operación (AHT) < 300 segundos por llamada.",
    quiz_question: "¿Qué convierte a una métrica cualquiera en un KPI?",
    quiz_options: ["Estar vinculada a un objetivo estratégico y meta de negocio", "Ser un número muy grande", "Estar escrita en verde", "No tener decimales"],
    quiz_answer: 0,
    challenge: "Identificar 2 KPIs que medirían el éxito de una tienda de café.",
    commonErrors: "Llamar KPI a cualquier número suelto sin objetivo definido.",
    english_vocab: [
      { term: "KPI", trans: "Indicador Clave de Rendimiento", ex: "Track weekly business KPIs." },
      { term: "Metric", trans: "Métrica", ex: "Measure call volume metrics." }
    ],
    prereqs: ["m1_07_conditions_and_or"]
  },
  {
    id: "m1_09_logic_problem_solving",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Módulo 1.9: Resolver Problemas Cotidianos con Lógica de Datos",
    summary: "Aplica la metodología del analista para descomponer cualquier problema en preguntas de datos.",
    icon: "fa-lightbulb",
    purpose: "🎯 Propósito: Desarrollar la mentalidad analítica orientada a la solución de problemas reales.",
    deliverable: "🏁 Entregable: Caso práctico cotidiano resuelto con pasos analíticos.",
    analogy: "💡 Analogía: El detective Sherlock Holmes; observa las pistas en la escena del crimen (datos) para deducir quién es el responsable.",
    step1_theory: `Pasos del Pensamiento Analítico:
1. Definir el problema claro (Ej: Los clientes están cancelando sus suscripciones).
2. Formular preguntas (Ej: ¿En qué ciudad ocurren más cancelaciones? ¿Qué tiempo de espera tuvieron?).
3. Buscar las tablas de datos necesarias.
4. Aplicar filtros y agregaciones.
5. Proponer una solución basada en datos.`,
    step2_business: "Caso DataCall: 'Las encuestas bajaron un 10%'. Julieth desglosa por ciudad, horario y tiempo de espera para encontrar la causa raíz.",
    step3_code: `PROBLEMA ➔ PREGUNTAS DE DATOS ➔ FILTROS DE TABLAS ➔ HALLAZGO ➔ SOLUCIÓN`,
    step4_guided: ["1. Aplica los 5 pasos a un problema cotidiano (llegar tarde al trabajo)."],
    step5_individual: "Diseña 2 preguntas de datos para investigar por qué las ventas cayeron los domingos.",
    solution_individual: "Pregunta 1: ¿Cuántos agentes trabajaron el domingo? Pregunta 2: ¿Cuál fue la tasa de llamadas no contestadas?",
    quiz_question: "¿Cuál es el primer paso metodológico antes de escribir cualquier consulta SQL o gráfica?",
    quiz_options: ["Definir claramente el problema de negocio y la pregunta a responder", "Abrir Power BI a ciegas", "Borrar la base de datos", "Graficar sin pensar"],
    quiz_answer: 0,
    challenge: "Resolver un caso hipotético de insatisfacción usando lógica.",
    commonErrors: "Saltar a hacer gráficos bonitos sin entender el problema de negocio primero.",
    english_vocab: [
      { term: "Problem solving", trans: "Resolución de Problemas", ex: "Analytical problem solving skills." }
    ],
    prereqs: ["m1_08_metrics_kpis"]
  },

  // ==========================================
  // FASES 2 A 16 (RE-MAPEADAS Y AMPLIADAS CON LA ESTRUCTURA COMPLETA)
  // ==========================================
  {
    id: "m2_01_ssms_intro",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.1: Primer día en SQL Server Management Studio (SSMS)",
    summary: "Conéctate al servidor LuchoX12, selecciona DataCareer y ejecuta F5.",
    icon: "fa-database",
    purpose: "🎯 Propósito: Dominar el entorno de trabajo oficial de Microsoft para consultar bases de datos.",
    deliverable: "🏁 Entregable: Primera consulta ejecutada con F5 en SSMS.",
    analogy: "💡 Analogía: Abrir la aplicación de tu banco para consultar tu saldo.",
    step1_theory: `SSMS es el cliente oficial para administrar SQL Server.
- F5 ejecuta la consulta seleccionada.
- USE DataCareer; fija la base de datos sobre la cual trabajaremos.`,
    step2_business: "Todos los reportes de DataCall inician abriendo SSMS y conectándote a LuchoX12.",
    step3_code: `USE DataCareer;
SELECT '¡Hola SSMS! Soy Julieth y seré Data Analyst' AS Saludo;`,
    step4_guided: ["1. Abre SSMS.", "2. Conéctate a LuchoX12.", "3. Escribe USE DataCareer; y presiona F5."],
    step5_individual: "Selecciona el nombre de la base de datos actual con SELECT DB_NAME();",
    solution_individual: "SELECT DB_NAME() AS Base_Actual; (presiona F5).",
    quiz_question: "¿Cuál tecla ejecuta las consultas SQL en SSMS?",
    quiz_options: ["F5", "F12", "Enter", "Espacio"],
    quiz_answer: 0,
    challenge: "Usar el atajo Ctrl + N para abrir nueva consulta.",
    commonErrors: "Ejecutar consultas teniendo seleccionada la base 'master'.",
    english_vocab: [
      { term: "Query", trans: "Consulta SQL", ex: "Run the SQL query with F5." }
    ],
    prereqs: ["m1_09_logic_problem_solving"]
  },
  {
    id: "m2_02_tables_types",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.2: Tablas y Tipos de Datos en SQL Server",
    summary: "Revisa las tablas de DataCareer y sus columnas VARCHAR, INT y DATE.",
    icon: "fa-table",
    purpose: "🎯 Propósito: Entender la estructura del esquema analytics en SQL Server.",
    deliverable: "🏁 Entregable: Inspección de columnas de analytics.dim_cliente.",
    analogy: "💡 Analogía: Consultar la libreta de contactos por columnas etiquetadas.",
    step1_theory: `Tipos en SQL Server:
- VARCHAR(n): Texto de hasta n caracteres.
- INT: Enteros.
- DATE / DATETIME: Fechas y horas.`,
    step2_business: "Inspeccionar las columnas de clientes para saber cómo filtrar en el futuro.",
    step3_code: `USE DataCareer;
SELECT cliente_id, nombre, ciudad, fecha_registro FROM analytics.dim_cliente;`,
    step4_guided: ["1. Pega la consulta en SSMS.", "2. Presiona F5."],
    step5_individual: "Inspecciona los primeros registros de la tabla analytics.dim_agente.",
    solution_individual: "SELECT TOP 10 * FROM analytics.dim_agente;",
    quiz_question: "¿Qué tipo de dato guarda nombres en SQL Server?",
    quiz_options: ["VARCHAR", "INT", "DATE", "FLOAT"],
    quiz_answer: 0,
    challenge: "Identificar 3 columnas VARCHAR en dim_cliente.",
    commonErrors: "Confundir tipos de texto con números.",
    english_vocab: [
      { term: "Schema", trans: "Esquema de BD", ex: "The table belongs to analytics schema." }
    ],
    prereqs: ["m2_01_ssms_intro"]
  },
  {
    id: "m2_03_select_from",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.3: Estructura Fundamental SELECT y FROM",
    summary: "Domina las dos palabras clave obligatorias de cualquier consulta SQL.",
    icon: "fa-eye",
    purpose: "🎯 Propósito: Extraer exactamente las columnas que el negocio requiere.",
    deliverable: "🏁 Entregable: Consulta personalizada de 3 columnas en SSMS.",
    analogy: "💡 Analogía: Pedir los ingredientes que quieres (SELECT) sacados de la nevera (FROM).",
    step1_theory: `Sintaxis:
SELECT columna1, columna2 FROM esquema.tabla;
El asterisco (*) trae TODAS las columnas.`,
    step2_business: "Solicitar solo las 3 columnas necesarias ahorra memoria y acelera la respuesta 10 veces.",
    step3_code: `USE DataCareer;
SELECT cliente_id, nombre, ciudad FROM analytics.dim_cliente;`,
    step4_guided: ["1. Escribe la consulta en SSMS.", "2. Ejecuta F5."],
    step5_individual: "Selecciona el nombre, turno y nivel de la tabla analytics.dim_agente.",
    solution_individual: "SELECT nombre, turno, nivel FROM analytics.dim_agente;",
    quiz_question: "¿Qué hace la instrucción SELECT * en SQL?",
    quiz_options: ["Trae todas las columnas de la tabla", "Multiplica las filas", "Borra datos", "Filtra errores"],
    quiz_answer: 0,
    challenge: "Escribir una consulta limpia sin usar el asterisco *.",
    commonErrors: "Olvidar poner comas entre los nombres de columnas.",
    english_vocab: [
      { term: "Select statement", trans: "Sentencia SELECT", ex: "Write a clean SELECT statement." }
    ],
    prereqs: ["m2_02_tables_types"]
  },
  {
    id: "m2_04_distinct_top",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.4: Eliminando Duplicados (DISTINCT) y Muestras (TOP)",
    summary: "Descubre valores únicos con DISTINCT y limita filas devueltas con TOP.",
    icon: "fa-list-ol",
    purpose: "🎯 Propósito: Obtener catalogos únicos y explorar muestras de tablas masivas.",
    deliverable: "🏁 Entregable: Lista de ciudades únicas donde habitan los clientes.",
    analogy: "💡 Analogía: Preguntar en qué ciudades tienes amigos sin que te repitan Bogotá 50 veces.",
    step1_theory: `SELECT DISTINCT columna FROM tabla; -> Valores sin repetir.
SELECT TOP 10 * FROM tabla; -> Muestra las primeras 10 filas.`,
    step2_business: "Saber exactamente en cuántas ciudades diferentes opera DataCall.",
    step3_code: `USE DataCareer;
SELECT DISTINCT ciudad FROM analytics.dim_cliente;
SELECT TOP 5 * FROM analytics.fact_llamadas;`,
    step4_guided: ["1. Ejecuta DISTINCT ciudad en SSMS.", "2. Cuenta las ciudades devueltas."],
    step5_individual: "Obtén los turnos de trabajo únicos que existen en dim_agente.",
    solution_individual: "SELECT DISTINCT turno FROM analytics.dim_agente;",
    quiz_question: "¿Qué hace DISTINCT en una consulta SQL?",
    quiz_options: ["Elimina los valores duplicados del resultado", "Ordena de mayor a menor", "Suma los valores", "Borra filas"],
    quiz_answer: 0,
    challenge: "Usar TOP 20 en la tabla de ventas.",
    commonErrors: "Pensar que DISTINCT borra datos de la base física.",
    english_vocab: [
      { term: "Distinct values", trans: "Valores Únicos / Sin Repetir", ex: "Fetch distinct city names." }
    ],
    prereqs: ["m2_03_select_from"]
  },
  {
    id: "m2_05_where_basic",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.5: Filtrando Filas con WHERE y Operadores",
    summary: "Filtra la información para analizar solo los registros que cumplen reglas.",
    icon: "fa-filter",
    purpose: "🎯 Propósito: Filtrar información estratégica en SQL Server.",
    deliverable: "🏁 Entregable: Reporte de clientes pertenecientes a la ciudad de Bogotá.",
    analogy: "💡 Analogía: Usar el filtro de búsquedas en MercadoLibre por precio y marca.",
    step1_theory: `Sintaxis:
SELECT * FROM tabla WHERE columna = 'Valor';
Textos con comillas simples ('Bogotá'), números sin comillas.`,
    step2_business: "Filtrar solo las llamadas con tiempo de espera crítico > 120 segundos.",
    step3_code: `USE DataCareer;
SELECT * FROM analytics.fact_llamadas WHERE tiempo_espera_segundos > 120;`,
    step4_guided: ["1. Pega la consulta en SSMS.", "2. Verifica que todas las esperas sean > 120."],
    step5_individual: "Filtra los clientes cuyo tipo de cliente sea 'Premium'.",
    solution_individual: "SELECT * FROM analytics.dim_cliente WHERE tipo_cliente = 'Premium';",
    quiz_question: "¿Cómo deben escribirse los valores de texto dentro de la cláusula WHERE?",
    quiz_options: ["Entre comillas simples ('Texto')", "Sin comillas", "Entre corchetes", "Con signo $"],
    quiz_answer: 0,
    challenge: "Filtrar por clientes de edad >= 30.",
    commonErrors: "Olvidar las comillas simples al buscar textos en WHERE.",
    english_vocab: [
      { term: "Where clause", trans: "Cláusula WHERE", ex: "Filter rows using WHERE clause." }
    ],
    prereqs: ["m2_04_distinct_top"]
  },
  {
    id: "m2_06_operators_advanced",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.6: Operadores Especiales — IN, BETWEEN y LIKE",
    summary: "Simplifica listas con IN, rangos con BETWEEN y búsquedas de texto parcial con LIKE.",
    icon: "fa-magnifying-glass",
    purpose: "🎯 Propósito: Filtrar datos avanzados sin escribir múltiples OR repetitivos.",
    deliverable: "🏁 Entregable: Búsqueda de clientes por patrón de nombre con LIKE.",
    analogy: "💡 Analogía: Buscar personas cuyo apellido empiece por 'G' en el directorio.",
    step1_theory: `Operadores:
- IN ('Bogotá', 'Cali', 'Medellín'): En una lista de valores.
- BETWEEN 20 AND 30: En un rango inclusivo.
- LIKE 'Jul%': Textos que empiezan por 'Jul' (% es el comodín).`,
    step2_business: "Encontrar todas las llamadas atendidas en las 3 ciudades principales de DataCall.",
    step3_code: `USE DataCareer;
SELECT * FROM analytics.dim_cliente WHERE ciudad IN ('Bogotá', 'Medellín');
SELECT * FROM analytics.dim_cliente WHERE nombre LIKE 'J%';`,
    step4_guided: ["1. Prueba la consulta LIKE 'J%' en SSMS.", "2. Observa cómo trae todos los nombres con J."],
    step5_individual: "Busca llamadas con duración entre 100 y 300 segundos usando BETWEEN.",
    solution_individual: "SELECT * FROM analytics.fact_llamadas WHERE duracion_segundos BETWEEN 100 AND 300;",
    quiz_question: "¿Qué comodín se usa en el operador LIKE para representar cualquier secuencia de caracteres?",
    quiz_options: ["%", "*", "$", "#"],
    quiz_answer: 0,
    challenge: "Buscar clientes cuyo correo termine en '@gmail.com'.",
    commonErrors: "Usar BETWEEN sin especificar el límite menor primero.",
    english_vocab: [
      { term: "Wildcard", trans: "Comodín (% / _)", ex: "The percent sign is a wildcard." }
    ],
    prereqs: ["m2_05_where_basic"]
  },
  {
    id: "m2_07_null_sql",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.7: Evaluando Nulos en SQL — IS NULL / IS NOT NULL",
    summary: "Aprende la forma correcta de consultar casillas vacías en SQL Server.",
    icon: "fa-circle-question",
    purpose: "🎯 Propósito: Detectar datos faltantes o encuestas sin responder en las tablas.",
    deliverable: "🏁 Entregable: Consulta de llamadas que no recibieron encuesta (IS NULL).",
    analogy: "💡 Analogía: Revisar la lista de alumnos para ver quiénes no entregaron la tarea.",
    step1_theory: `En SQL NUNCA se usa: WHERE columna = NULL.
La forma correcta es:
- WHERE columna IS NULL (está vacío).
- WHERE columna IS NOT NULL (tiene dato).`,
    step2_business: "Identificar encuestas donde el cliente no dejó comentario escrito para hacerle seguimiento.",
    step3_code: `USE DataCareer;
SELECT * FROM analytics.fact_encuestas WHERE comentario IS NULL;`,
    step4_guided: ["1. Ejecuta la consulta IS NULL en SSMS.", "2. Verifica que las casillas digan NULL en amarillo."],
    step5_individual: "Consulta las encuestas que SÍ tienen comentario registrado (IS NOT NULL).",
    solution_individual: "SELECT * FROM analytics.fact_encuestas WHERE comentario IS NOT NULL;",
    quiz_question: "¿Cuál es la sintaxis correcta para buscar filas con casillas vacías en SQL?",
    quiz_options: ["WHERE columna IS NULL", "WHERE columna = NULL", "WHERE columna == NULL", "WHERE columna IS EMPTY"],
    quiz_answer: 0,
    challenge: "Contar cuántas encuestas no tienen comentario.",
    commonErrors: "Usar el operador signo igual (= NULL) en lugar de IS NULL.",
    english_vocab: [
      { term: "Null check", trans: "Verificación de Nulos", ex: "Perform a null check using IS NULL." }
    ],
    prereqs: ["m2_06_operators_advanced"]
  },
  {
    id: "m2_08_orderby",
    phase: "Fase 2: SQL Básico",
    cat: "sql",
    title: "Módulo 2.8: Ordenando Resultados con ORDER BY (ASC y DESC)",
    summary: "Organiza las tablas de menor a mayor o de mayor a menor para presentación ejecutiva.",
    icon: "fa-arrow-down-short-wide",
    purpose: "🎯 Propósito: Presentar los resultados ordenados por prioridad de negocio.",
    deliverable: "🏁 Entregable: Top 10 de llamadas con mayor tiempo de espera ordenadas descendente.",
    analogy: "💡 Analogía: Ordenar una fila de personas por estatura de la más alta a la más baja.",
    step1_theory: `Sintaxis:
SELECT * FROM tabla ORDER BY columna ASC; (Ascendente A-Z, 0-9, Predeterminado)
SELECT * FROM tabla ORDER BY columna DESC; (Descendente Z-A, 9-0)`,
    step2_business: "Mostrar primero las llamadas con esperas más largas para la revisión del equipo directivo.",
    step3_code: `USE DataCareer;
SELECT TOP 10 llamada_id, tiempo_espera_segundos 
FROM analytics.fact_llamadas 
ORDER BY tiempo_espera_segundos DESC;`,
    step4_guided: ["1. Copia y ejecuta en SSMS.", "2. Verifica que el número más alto quede arriba."],
    step5_individual: "Ordena los clientes alfabéticamente por su nombre de la A a la Z.",
    solution_individual: "SELECT * FROM analytics.dim_cliente ORDER BY nombre ASC;",
    quiz_question: "¿Qué palabra clave ordena los resultados de mayor a menor?",
    quiz_options: ["DESC", "ASC", "TOP", "DOWN"],
    quiz_answer: 0,
    challenge: "Ordenar por dos columnas a la vez (ciudad ASC, edad DESC).",
    commonErrors: "Pensar que ORDER BY va antes del WHERE (ORDER BY siempre va al final).",
    english_vocab: [
      { term: "Sort order", trans: "Orden de Clasificación", ex: "Set sort order to DESC." }
    ],
    prereqs: ["m2_07_null_sql"]
  },

  // --- RESTO DE FASES 3 A 16 RESUMIDAS EN EL DATASET CON ESTRUCTURA UNIFORME ---
  {
    id: "m3_01_aggregations",
    phase: "Fase 3: SQL Intermedio",
    cat: "sql",
    title: "Módulo 3.1: Funciones de Agregación — COUNT, SUM, AVG, MIN, MAX",
    summary: "Resume miles de filas en indicadores numéricos consolidados.",
    icon: "fa-calculator",
    purpose: "🎯 Propósito: Calcular totales, promedios, mínimos y máximos en SQL.",
    deliverable: "🏁 Entregable: Resumen estadístico de llamadas de DataCall.",
    analogy: "💡 Analogía: La calculadora del cajero al final del día acumulando ventas.",
    step1_theory: `Funciones:
- COUNT(*): Cuenta filas.
- SUM(col): Suma números.
- AVG(col): Calcula el promedio.
- MIN(col) / MAX(col): Mínimo y máximo.`,
    step2_business: "Calcular la duración promedio de las llamadas de todo el call center.",
    step3_code: `USE DataCareer;
SELECT COUNT(*) AS Total_Llamadas, AVG(duracion_segundos) AS Duracion_Promedio FROM analytics.fact_llamadas;`,
    step4_guided: ["1. Ejecuta las agregaciones en SSMS.", "2. Observa el resultado de 1 sola fila."],
    step5_individual: "Calcula el tiempo de espera máximo registrado en fact_llamadas.",
    solution_individual: "SELECT MAX(tiempo_espera_segundos) AS Espera_Maxima FROM analytics.fact_llamadas;",
    quiz_question: "¿Qué función de SQL calcula el valor promedio de una columna numérica?",
    quiz_options: ["AVG()", "COUNT()", "SUM()", "MAX()"],
    quiz_answer: 0,
    challenge: "Calcular MIN y MAX de la edad de clientes.",
    commonErrors: "Intentar usar SUM en columnas de texto.",
    english_vocab: [{ term: "Aggregation", trans: "Agregación", ex: "Apply aggregation functions." }],
    prereqs: ["m2_08_orderby"]
  },
  {
    id: "m3_02_groupby",
    phase: "Fase 3: SQL Intermedio",
    cat: "sql",
    title: "Módulo 3.2: Agrupando Información con GROUP BY y HAVING",
    summary: "Calcula métricas separadas por canal, ciudad o turno de trabajo.",
    icon: "fa-chart-pie",
    purpose: "🎯 Propósito: Resumir volúmenes masivos agrupados por categorías.",
    deliverable: "🏁 Entregable: Tabla resumida de llamadas por canal de atención.",
    analogy: "💡 Analogía: Separar monedas en montoncitos de $100, $200 y $500 para contar cada montón.",
    step1_theory: `Sintaxis:
SELECT canal, COUNT(*) AS Total FROM tabla GROUP BY canal HAVING COUNT(*) > 1000;
HAVING filtra los resultados agrupados (a diferencia de WHERE).`,
    step2_business: "Saber cuántas llamadas entraron por teléfono vs WhatsApp en DataCall.",
    step3_code: `USE DataCareer;
SELECT canal, COUNT(*) AS Total FROM analytics.fact_llamadas GROUP BY canal;`,
    step4_guided: ["1. Ejecuta GROUP BY en SSMS.", "2. Revisa los totales por canal."],
    step5_individual: "Agrupa los clientes por ciudad y cuenta cuántos hay en cada una.",
    solution_individual: "SELECT ciudad, COUNT(*) AS Total FROM analytics.dim_cliente GROUP BY ciudad;",
    quiz_question: "¿Qué instrucción de SQL agrupa filas con el mismo valor en categorías?",
    quiz_options: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"],
    quiz_answer: 0,
    challenge: "Usar HAVING COUNT(*) > 5000.",
    commonErrors: "Incluir columnas sin agregar en el SELECT que no están en el GROUP BY.",
    english_vocab: [{ term: "Group By", trans: "Agrupar Por", ex: "Group by channel and count rows." }],
    prereqs: ["m3_01_aggregations"]
  },
  {
    id: "m3_03_joins",
    phase: "Fase 3: SQL Intermedio",
    cat: "sql",
    title: "Módulo 3.3: Conectando Tablas — INNER JOIN y LEFT JOIN",
    summary: "Combina la tabla de llamadas con los nombres de clientes y agentes.",
    icon: "fa-link",
    purpose: "🎯 Propósito: Unir tablas relacionales para mostrar información descriptiva.",
    deliverable: "🏁 Entregable: Consulta con INNER JOIN uniendo llamadas, clientes y agentes.",
    analogy: "💡 Analogía: Cruzar la lista de invitados con la lista de regalos usando el número de mesa.",
    step1_theory: `INNER JOIN: Muestra solo las filas con coincidencia exacta en ambas tablas.
LEFT JOIN: Conserva TODAS las filas de la tabla izquierda aun si no coinciden.`,
    step2_business: "Reemplazar los IDs de clientes por sus nombres reales en los reportes de llamadas.",
    step3_code: `USE DataCareer;
SELECT TOP 10 ll.llamada_id, c.nombre AS Cliente, a.nombre AS Agente
FROM analytics.fact_llamadas ll
INNER JOIN analytics.dim_cliente c ON ll.cliente_id = c.cliente_id
INNER JOIN analytics.dim_agente a ON ll.agente_id = a.agente_id;`,
    step4_guided: ["1. Copia y ejecuta la consulta con JOINs.", "2. Observa cómo aparecen los nombres en pantalla."],
    step5_individual: "Realiza un LEFT JOIN entre clientes y ventas para encontrar clientes que no han comprado.",
    solution_individual: "SELECT c.nombre FROM analytics.dim_cliente c LEFT JOIN analytics.fact_ventas v ON c.cliente_id = v.cliente_id WHERE v.venta_id IS NULL;",
    quiz_question: "¿Qué tipo de JOIN mantiene todos los registros de la primera tabla sin importar si coinciden?",
    quiz_options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"],
    quiz_answer: 0,
    challenge: "Cruzar 3 tablas en una sola consulta.",
    commonErrors: "Olvidar la condición ON de cruce entre las claves.",
    english_vocab: [{ term: "Join", trans: "Unión / Cruce de Tablas", ex: "Perform an INNER JOIN on primary key." }],
    prereqs: ["m3_02_groupby"]
  },

  // FASE 4: SQL AVANZADO
  {
    id: "m4_01_cte_views",
    phase: "Fase 4: SQL Avanzado",
    cat: "sql",
    title: "Módulo 4.1: CTEs (WITH) y Vistas (CREATE VIEW)",
    summary: "Organiza código complejo en bloques temporales y guarda tablas virtuales.",
    icon: "fa-cubes",
    purpose: "🎯 Propósito: Modularizar código SQL profesional en SSMS.",
    deliverable: "🏁 Entregable: Vista guardada en la base de datos DataCareer.",
    analogy: "💡 Analogía: Guardar una receta de cocina como acceso directo en tu teléfono.",
    step1_theory: `WITH CTE_Nombre AS (SELECT...) ➔ Consulta temporal reutilizable.
CREATE VIEW Nombre AS SELECT... ➔ Guardar la consulta como tabla virtual.`,
    step2_business: "Crear una vista gerencial `analytics.vw_resumen_llamadas` para consumo rápido.",
    step3_code: `USE DataCareer;
WITH Resumen AS (
    SELECT agente_id, COUNT(*) AS Total FROM analytics.fact_llamadas GROUP BY agente_id
)
SELECT a.nombre, r.Total FROM Resumen r JOIN analytics.dim_agente a ON r.agente_id = a.agente_id;`,
    step4_guided: ["1. Ejecuta la CTE en SSMS.", "2. Revisa la limpieza de la consulta."],
    step5_individual: "Crea una vista con CREATE VIEW que seleccione clientes de Bogotá.",
    solution_individual: "CREATE VIEW analytics.vw_bogota AS SELECT * FROM analytics.dim_cliente WHERE ciudad = 'Bogotá';",
    quiz_question: "¿Qué hace la instrucción CREATE VIEW?",
    quiz_options: ["Guarda una consulta como tabla virtual permanente", "Borra la tabla", "Modifica columnas", "Crea un archivo Excel"],
    quiz_answer: 0,
    challenge: "Crear una CTE y consultarla.",
    commonErrors: "Ejecutar la consulta final sin seleccionar la sentencia WITH.",
    english_vocab: [{ term: "Common Table Expression (CTE)", trans: "Expresión de Tabla Común", ex: "Simplify queries using CTEs." }],
    prereqs: ["m3_03_joins"]
  },
  {
    id: "m4_02_window",
    phase: "Fase 4: SQL Avanzado",
    cat: "sql",
    title: "Módulo 4.2: Funciones de Ventana (ROW_NUMBER, LAG, OVER)",
    summary: "Calcula rankings y compara la fila actual con la fila anterior.",
    icon: "fa-arrow-up-right-dots",
    purpose: "🎯 Propósito: Realizar análisis analíticos avanzados conservando las filas individuales.",
    deliverable: "🏁 Entregable: Ranking de clientes por compras con ROW_NUMBER().",
    analogy: "💡 Analogía: Mirar el puesto de carrera de cada corredor mientras cruza la meta.",
    step1_theory: `ROW_NUMBER() OVER(PARTITION BY... ORDER BY...).
LAG(col, 1) trae el valor de la fila anterior.`,
    step2_business: "Identificar llamadas consecutivas con demoras altas para el mismo cliente.",
    step3_code: `USE DataCareer;
SELECT cliente_id, llamada_id, tiempo_espera_segundos,
       LAG(tiempo_espera_segundos, 1) OVER(PARTITION BY cliente_id ORDER BY llamada_id) AS espera_anterior
FROM analytics.fact_llamadas;`,
    step4_guided: ["1. Ejecuta la función de ventana en SSMS.", "2. Observa la columna espera_anterior."],
    step5_individual: "Calcula el ranking DENSE_RANK de clientes por edad dentro de cada ciudad.",
    solution_individual: "SELECT ciudad, nombre, edad, DENSE_RANK() OVER(PARTITION BY ciudad ORDER BY edad DESC) FROM analytics.dim_cliente;",
    quiz_question: "¿Qué función consulta el valor de la fila anterior dentro de un conjunto de ventanas?",
    quiz_options: ["LAG()", "LEAD()", "RANK()", "OVER()"],
    quiz_answer: 0,
    challenge: "Obtener los 3 mejores agentes con ranking.",
    commonErrors: "Olvidar incluir la cláusula OVER() en funciones de ventana.",
    english_vocab: [{ term: "Window function", trans: "Función de Ventana", ex: "Calculate running totals with window functions." }],
    prereqs: ["m4_01_cte_views"]
  },

  // FASE 5: EXCEL
  {
    id: "m5_01_excel_intro",
    phase: "Fase 5: Excel Analyst",
    cat: "excel",
    title: "Módulo 5.1: Excel para Data Analysts — Tablas y Limpieza",
    summary: "Domina atajos, tablas de Excel y limpieza de espacios con ESPACIOS() y NOMPROPIO().",
    icon: "fa-file-excel",
    purpose: "🎯 Propósito: Limpiar y preparar datos rápidamente en hojas de cálculo.",
    deliverable: "🏁 Entregable: Archivo de Excel formateado como Tabla de Excel oficial.",
    analogy: "💡 Analogía: Organizar tu escritorio físico antes de empezar a redactar un informe.",
    step1_theory: `Formato de Tabla (Ctrl + T):
- Filtros automáticos y referencias estructuradas.
Funciones de Limpieza:
- ESPACIOS(texto): Quita espacios dobles sobrantes.
- NOMPROPIO(texto): Pone la primera letra en mayúscula.`,
    step2_business: "Limpiar listas de clientes descargadas antes de cargarlas al sistema.",
    step3_code: `=ESPACIOS(NOMPROPIO(A2))`,
    step4_guided: ["1. Abre Excel.", "2. Convierte un rango a Tabla con Ctrl + T.", "3. Aplica la fórmula de limpieza."],
    step5_individual: "Usa la función BUSCARX (XLOOKUP) para traer el correo de un cliente.",
    solution_individual: "=BUSCARX(B2; Clientes[ID]; Clientes[Correo]; 'No Encontrado')",
    quiz_question: "¿Qué atajo de teclado en Excel convierte un rango normal en una Tabla Oficial?",
    quiz_options: ["Ctrl + T (o Ctrl + Q)", "Ctrl + C", "Alt + F4", "Ctrl + Z"],
    quiz_answer: 0,
    challenge: "Crear una tabla dinámica de resumen de ventas.",
    commonErrors: "Trabajar sobre rangos sueltos sin formato de tabla estructurada.",
    english_vocab: [{ term: "Spreadsheet", trans: "Hoja de Cálculo", ex: "Clean data in the Excel spreadsheet." }],
    prereqs: ["m4_02_window"]
  },
  {
    id: "m5_02_pivots",
    phase: "Fase 5: Excel Analyst",
    cat: "excel",
    title: "Módulo 5.2: Tablas Dinámicas y Power Query en Excel",
    summary: "Crea resúmenes ejecutivos instantáneos con Tablas Dinámicas y automatiza en Power Query.",
    icon: "fa-chart-column",
    purpose: "🎯 Propósito: Analizar miles de filas sin escribir fórmulas manuales.",
    deliverable: "🏁 Entregable: Dashboard interactivo en Excel con Segmentadores de datos.",
    analogy: "💡 Analogía: El cubo Rubik; giras las caras para ver el color que deseas arriba (Ciudad, Mes).",
    step1_theory: `Tabla Dinámica:
Arrastra campos a Filas, Columnas y Valores para resumir datos.
Power Query en Excel:
Obtener datos ➔ Desde archivo/CSV ➔ Transformar datos.`,
    step2_business: "Presentar el resumen semanal de llamadas por agente en 2 minutos.",
    step3_code: `Insertar ➔ Tabla Dinámica ➔ Arrastrar 'Canal' a Filas y 'Duración' a Valores (Promedio)`,
    step4_guided: ["1. Selecciona la tabla en Excel.", "2. Insertar Tabla Dinámica.", "3. Agrega Segmentadores de Datos."],
    step5_individual: "Crea un gráfico dinámico de barras de llamadas por ciudad.",
    solution_individual: "Haz clic en la Tabla Dinámica ➔ Insertar Gráfico Dinámico ➔ Barras 2D.",
    quiz_question: "¿Qué herramienta interna de Excel permite transformar y limpiar datos antes de cargarlos?",
    quiz_options: ["Power Query", "Paint", "WordArt", "Autosuma"],
    quiz_answer: 0,
    challenge: "Conectar 2 tablas dinámicas a un solo segmentador.",
    commonErrors: "No actualizar (F5) la tabla dinámica al cambiar los datos de origen.",
    english_vocab: [{ term: "Pivot Table", trans: "Tabla Dinámica", ex: "Build a pivot table summary." }],
    prereqs: ["m5_01_excel_intro"]
  },

  // FASE 6, 7, 8: MODELADO, POWER BI & DAX
  {
    id: "m6_01_star_schema",
    phase: "Fase 6: Modelado",
    cat: "bi",
    title: "Módulo 6.1: Entidades, Relaciones y Modelo Estrella",
    summary: "Diseña la arquitectura analítica dividiendo Hechos (Fact) y Dimensiones (Dim).",
    icon: "fa-sitemap",
    purpose: "🎯 Propósito: Construir el modelo relacional óptimo para analítica y Power BI.",
    deliverable: "🏁 Entregable: Diagrama de Modelo Estrella activo.",
    analogy: "💡 Analogía: El tique de la caja registradora (Hecho) rodeado de los catálogos de clientes y productos (Dimensiones).",
    step1_theory: `Modelo Estrella:
- Tabla de Hechos (Fact): Guarda eventos numéricos y claves (ej: fact_llamadas).
- Tablas de Dimensiones (Dim): Guardan detalles descriptivos (ej: dim_cliente, dim_agente).
- Relación 1 a varios (1:*): Una dimensión (1) filtra la tabla de hechos (*).`,
    step2_business: "Entender la estructura de la base DataCareer para Power BI.",
    step3_code: `MODELO ESTRELLA:
dim_cliente (1) ─────── ( * ) fact_llamadas ( * ) ─────── (1) dim_agente`,
    step4_guided: ["1. Identifica la tabla de hechos central.", "2. Identifica las tablas dimensiones alrededor."],
    step5_individual: "Diseña las dimensiones de un sistema de entregas a domicilio.",
    solution_individual: "Fact: Pedidos. Dim: Usuarios, Restaurantes, Repartidores, Calendario.",
    quiz_question: "¿Qué tabla ocupa la posición central en un Modelo Estrella?",
    quiz_options: ["Tabla de Hechos (Fact Table)", "Tabla de Dimensión", "Tabla de Configuración", "Tabla de Clientes"],
    quiz_answer: 0,
    challenge: "Explicar por qué evitamos relaciones varios a varios (*:*).",
    commonErrors: "Poner textos descriptivos largos repetidos en la tabla de hechos.",
    english_vocab: [{ term: "Star Schema", trans: "Modelo Estrella", ex: "Design a clean star schema model." }],
    prereqs: ["m5_02_pivots"]
  },
  {
    id: "m7_01_pbi_desktop",
    phase: "Fase 7: Power BI",
    cat: "bi",
    title: "Módulo 7.1: Conexión de Power BI Desktop a SQL Server LuchoX12",
    summary: "Importa las tablas de DataCareer a Power BI Desktop y crea la Tabla Calendario.",
    icon: "fa-chart-column",
    purpose: "🎯 Propósito: Traer los datos limpios de SQL Server al entorno gráfico de Power BI.",
    deliverable: "🏁 Entregable: Dashboard preliminar `.pbix` cargado.",
    analogy: "💡 Analogía: Conectar el cable HDMI entre la consola y el televisor 4K.",
    step1_theory: `Pasos en Power BI:
1. Obtener Datos ➔ SQL Server (Servidor: LuchoX12, Base: DataCareer).
2. Modo Importar para máxima velocidad.
3. Vista de Modelo ➔ Establecer relaciones 1:*.
4. Crear Tabla Dim_Calendario con DAX.`,
    step2_business: "Crear la vista gerencial interactiva de DataCall para los directivos.",
    step3_code: `Dim_Calendario = 
ADDCOLUMNS(
    CALENDAR(DATE(2025,1,1), DATE(2026,12,31)),
    "Año", YEAR([Date]),
    "NombreMes", FORMAT([Date], "mmmm")
)`,
    step4_guided: ["1. Abre Power BI Desktop.", "2. Carga las tablas de DataCareer.", "3. Crea Dim_Calendario."],
    step5_individual: "Relaciona Dim_Calendario[Date] con fact_llamadas[fecha_llamada].",
    solution_individual: "Arrastra Date de Dim_Calendario hasta fecha_llamada en la Vista de Modelo.",
    quiz_question: "¿Cuál es el modo recomendado para cargar datos en Power BI para máxima velocidad?",
    quiz_options: ["Modo Importar (Import)", "DirectQuery", "Live Connection", "Web API"],
    quiz_answer: 0,
    challenge: "Marcar Dim_Calendario como tabla de fechas oficial.",
    commonErrors: "Escribir mal el nombre del servidor LuchoX12.",
    english_vocab: [{ term: "Data Model", trans: "Modelo de Datos", ex: "Build the data model in Power BI." }],
    prereqs: ["m6_01_star_schema"]
  },
  {
    id: "m8_01_dax_measures",
    phase: "Fase 8: DAX Master",
    cat: "bi",
    title: "Módulo 8.1: Fórmulas DAX — CALCULATE, DIVIDE y Inteligencia de Tiempo",
    summary: "Calcula métricas dinámicas y comparaciones contra el año anterior en Power BI.",
    icon: "fa-calculator",
    purpose: "🎯 Propósito: Dominar el lenguaje de fórmulas DAX para tableros profesionales.",
    deliverable: "🏁 Entregable: Tabla `_Medidas` con indicadores gerenciales en Power BI.",
    analogy: "💡 Analogía: Una balanza digital que calcula el precio cuando pones el producto encima (Contexto de Filtro).",
    step1_theory: `Medidas Fundamentales DAX:
- [Total Llamadas] = COUNTROWS(fact_llamadas)
- [Tasa Abandono %] = DIVIDE(CALCULATE([Total Llamadas], fact_llamadas[abandono]=1), [Total Llamadas], 0)
- [Llamadas Año Anterior] = CALCULATE([Total Llamadas], SAMEPERIODLASTYEAR(Dim_Calendario[Date]))`,
    step2_business: "Calcular la tasa de abandono y crecimiento YoY de DataCall en tiempo real.",
    step3_code: `Tasa Abandono % = 
DIVIDE(
    CALCULATE(COUNTROWS(fact_llamadas), fact_llamadas[abandono] = 1),
    COUNTROWS(fact_llamadas),
    0
)`,
    step4_guided: ["1. Crea la medida en Power BI.", "2. Formatea como porcentaje (%).", "3. Arrastra a una tarjeta visual."],
    step5_individual: "Crea la medida [Satisfacción Promedio].",
    solution_individual: "[Satisfaccion Prom] = AVERAGE(fact_encuestas[satisfaccion])",
    quiz_question: "¿Qué función de DAX permite modificar el Contexto de Filtro de un reporte?",
    quiz_options: ["CALCULATE()", "FILTER()", "ALL()", "SUM()"],
    quiz_answer: 0,
    challenge: "Crear una medida con SAMEPERIODLASTYEAR.",
    commonErrors: "Usar el operador / en lugar de DIVIDE() para prevenir división por cero.",
    english_vocab: [{ term: "Filter Context", trans: "Contexto de Filtro", ex: "CALCULATE modifies the filter context." }],
    prereqs: ["m7_01_pbi_desktop"]
  },

  // FASES 9 A 12: PYTHON & ETL
  {
    id: "m9_01_python_intro",
    phase: "Fase 9: Python Base",
    cat: "python",
    title: "Módulo 9.1: Python Desde Cero Absoluto — Variables, print e if/else",
    summary: "Escribe tu primer programa de Python sin asumir conocimientos previos.",
    icon: "fa-brands fa-python",
    purpose: "🎯 Propósito: Dominar la sintaxis básica de Python paso a paso.",
    deliverable: "🏁 Entregable: Script 'primer_programa.py' ejecutado en VS Code.",
    analogy: "💡 Analogía: Escribir una receta paso a paso para que un robot la siga al pie de la letra.",
    step1_theory: `Sintaxis Básica de Python:
- print("Texto"): Muestra un mensaje en pantalla.
- Variables: Cajas para guardar datos ('nombre = "Julieth"', 'edad = 24').
- Condicionales:
  if edad >= 18:
      print("Mayor de edad")
  else:
      print("Menor de edad")`,
    step2_business: "Automatizar la revisión de alertas de tiempo de espera en DataCall con Python.",
    step3_code: `# Primer programa de Julieth 💖
nombre = "Julieth"
espera = 150

print(f"Analista: {nombre}")

if espera > 120:
    print("⚠️ Alerta: Tiempo de espera crítico")
else:
    print("✅ Tiempo de espera normal")`,
    step4_guided: ["1. Abre VS Code.", "2. Crea 'programa.py'.", "3. Ejecuta con el botón de Play en la esquina superior."],
    step5_individual: "Crea una variable `duracion` y un condicional que imprima 'Llamada Larga' si supera los 300 segundos.",
    solution_individual: "duracion = 350\nif duracion > 300:\n    print('Llamada Larga')\nelse:\n    print('Llamada Normal')",
    quiz_question: "¿Qué función de Python imprime información en la consola de texto?",
    quiz_options: ["print()", "write()", "output()", "display()"],
    quiz_answer: 0,
    challenge: "Crear un bucle for que cuente del 1 al 5.",
    commonErrors: "Olvidar la sangría (indentación de 4 espacios) dentro del bloque if.",
    english_vocab: [{ term: "Indentation", trans: "Sangría / Indentación", ex: "Python relies on indentation." }],
    prereqs: ["m8_01_dax_measures"]
  },
  {
    id: "m10_01_pandas_intro",
    phase: "Fase 10: Pandas & EDA",
    cat: "python",
    title: "Módulo 10.1: Manipulación de DataFrames con Pandas en Jupyter Notebooks",
    summary: "Carga datos masivos y realiza análisis exploratorios con Pandas.",
    icon: "fa-book-open-reader",
    purpose: "🎯 Propósito: Procesar millones de filas con código interactivo en Python.",
    deliverable: "🏁 Entregable: Notebook `.ipynb` con análisis exploratorio (EDA).",
    analogy: "💡 Analogía: Un cuaderno de bocetos donde ves el resultado de cada trazo de código al instante.",
    step1_theory: `Pandas: La librería #1 para ciencia y analítica de datos.
- DataFrame (df): Tabla bidimensional en memoria.
- Métodos esenciales: df.head(), df.info(), df.describe(), df.groupby().`,
    step2_business: "Leer 50,000 llamadas desde SQL Server o CSV a un DataFrame en 1 segundo.",
    step3_code: `import pandas as pd

# Crear un DataFrame de prueba
data = {'Cliente': ['Julieth', 'Carlos', 'Andrea'], 'Espera': [150, 45, 210]}
df = pd.DataFrame(data)

print(df.describe())
print(df[df['Espera'] > 120])`,
    step4_guided: ["1. Crea 'exploracion.ipynb' en VS Code.", "2. Ejecuta la celda con Shift + Enter."],
    step5_individual: "Filtra el DataFrame para mostrar solo esperas mayores a 100 segundos.",
    solution_individual: "df_filtrado = df[df['Espera'] > 100]",
    quiz_question: "¿Qué atajo de teclado ejecuta una celda en un Jupyter Notebook?",
    quiz_options: ["Shift + Enter", "Ctrl + C", "F5", "Alt + Tab"],
    quiz_answer: 0,
    challenge: "Usar df.groupby('Ciudad')['Espera'].mean()",
    commonErrors: "No tener instalada la librería pandas (`pip install pandas`).",
    english_vocab: [{ term: "DataFrame", trans: "Estructura de Tabla en Pandas", ex: "Load data into a Pandas DataFrame." }],
    prereqs: ["m9_01_python_intro"]
  },
  {
    id: "m12_01_etl_python",
    phase: "Fase 12: APIs & ETL",
    cat: "python",
    title: "Módulo 12.1: Conexión de Python a SQL Server y Consumo de APIs",
    summary: "Extrae datos de APIs web y SQL Server automáticamente con Python.",
    icon: "fa-plug",
    purpose: "🎯 Propósito: Construir pipelines de extracción y carga automatizados.",
    deliverable: "🏁 Entregable: Script de ETL ejecutándose automáticamente.",
    analogy: "💡 Analogía: La cinta transportadora de una fábrica que mueve productos de una máquina a otra.",
    step1_theory: `Librerías:
- requests: Consumir APIs web HTTP.
- sqlalchemy / pyodbc: Conectarse a SQL Server.
- pd.read_sql(): Cargar consultas SQL a DataFrames.`,
    step2_business: "Traer el clima o el indicador de moneda por API y combinarlo con las llamadas de DataCall.",
    step3_code: `from sqlalchemy import create_engine
import pandas as pd

engine = create_engine("mssql+pyodbc://@LuchoX12/DataCareer?driver=ODBC+Driver+18+for+SQL+Server&trusted_connection=yes&TrustServerCertificate=yes")
df = pd.read_sql("SELECT * FROM analytics.fact_llamadas", engine)
print(f"Total llamadas cargadas a Python: {len(df)}")`,
    step4_guided: ["1. Pega la cadena de conexión en VS Code.", "2. Ejecuta y verifica el conteo de filas."],
    step5_individual: "Guarda el DataFrame procesado a un archivo Excel con df.to_excel().",
    solution_individual: "df.to_excel('llamadas_procesadas.xlsx', index=False)",
    quiz_question: "¿Qué función de Pandas permite leer una consulta SQL directamente a un DataFrame?",
    quiz_options: ["pd.read_sql()", "pd.get_sql()", "pd.import_db()", "pd.sql_load()"],
    quiz_answer: 0,
    challenge: "Exportar el resultado a CSV con df.to_csv().",
    commonErrors: "Falta de controladores ODBC de SQL Server instalados en Windows.",
    english_vocab: [{ term: "Connection string", trans: "Cadena de Conexión BD", ex: "Configure the database connection string." }],
    prereqs: ["m10_01_pandas_intro"]
  },

  // FASE 13: IA APLICADA
  {
    id: "m13_01_groq_ai",
    phase: "Fase 13: IA Aplicada",
    cat: "ia",
    title: "Módulo 13.1: Clasificación de Sentimientos con Groq API y Llama 3",
    summary: "Clasifica automáticamente 30,000 comentarios de texto libre en Positivo, Negativo o Neutro.",
    icon: "fa-robot",
    purpose: "🎯 Propósito: Integrar Inteligencia Artificial generativa para categorizar texto no estructurado.",
    deliverable: "🏁 Entregable: Script de clasificación con Groq API etiquetando encuestas.",
    analogy: "💡 Analogía: Un equipo de 100 asistentes leyendo y clasificando cartas por tono en tiempo récord.",
    step1_theory: `API de Groq (Llama 3):
Procesamiento del Lenguaje Natural (PLN) ultrarrápido.
Usamos temperature=0.0 para obtener respuestas deterministas y clasificadas.`,
    step2_business: "Descubrir los motivos principales de insatisfacción en las 30,000 encuestas de DataCall.",
    step3_code: `from groq import Groq
import os

client = Groq(api_key=os.getenv("GROQ_API_KEY"))
res = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[{"role": "user", "content": "Clasifica este comentario: 'La atención fue pésima'. Responde solo: Positivo, Negativo o Neutro."}],
    temperature=0.0
)
print(res.choices[0].message.content)`,
    step4_guided: ["1. Revisa tu GROQ_API_KEY en `.env`.", "2. Ejecuta el script de clasificación en Python."],
    step5_individual: "Envía un comentario positivo y confirma la clasificación de la IA.",
    solution_individual: "Cambia el texto por: 'Excelente servicio, muy rápidos'. La IA responderá: Positivo.",
    quiz_question: "¿Qué parámetro de la API de IA se configura en 0.0 para respuestas deterministas sin creatividad?",
    quiz_options: ["temperature", "max_tokens", "top_p", "frequency_penalty"],
    quiz_answer: 0,
    challenge: "Guardar la columna 'sentimiento_ia' en SQL Server.",
    commonErrors: "Dejar la clave GROQ_API_KEY expuesta en repositorios públicos de GitHub.",
    english_vocab: [{ term: "Sentiment Analysis", trans: "Análisis de Sentimientos", ex: "Perform sentiment analysis with Llama 3." }],
    prereqs: ["m12_01_etl_python"]
  },

  // FASES 14 Y 15: GIT & PROYECTO
  {
    id: "m15_01_datacall_project",
    phase: "Fase 15: Proyecto DataCall",
    cat: "git",
    title: "Módulo 15.1: Proyecto Integrador Estelar — DataCall Analytics 🏆",
    summary: "Combina SQL Server, Power BI, Python, Groq AI y GitHub en un proyecto de portafolio profesional.",
    icon: "fa-trophy",
    purpose: "🎯 Propósito: Construir el proyecto completo que te conseguirá las entrevistas de trabajo.",
    deliverable: "🏁 Entregable: Repositorio público 'DataCall-Analytics' en GitHub con README impecable.",
    analogy: "💡 Analogía: La obra de arte terminada que exhibes en la galería principal.",
    step1_theory: `El Proyecto Integrador DataCall Analytics:
1. Base de datos SQL Server LuchoX12 ➔ Consultas analíticas.
2. Limpieza y Dashboard en Power BI Desktop ➔ Visualizaciones gerenciales.
3. Script de Python + Groq AI ➔ Clasificación de encuestas.
4. Repositorio en GitHub ➔ Código versionado y README.md con Business Insights.`,
    step2_business: "Resolver el problema real de esperas y satisfacción de 50,000 llamadas de un Call Center.",
    step3_code: `# DataCall Analytics — Repositorio Estelar
git init
git add .
git commit -m "feat: Proyecto completo DataCall Analytics"
git push origin main`,
    step4_guided: ["1. Organiza la carpeta DataCall_Analytics.", "2. Redacta el README.md.", "3. Publica en GitHub."],
    step5_individual: "Agrega 3 capturas de pantalla de tu dashboard de Power BI al archivo README.md.",
    solution_individual: "Usa la sintaxis Markdown: ![Dashboard](02_PowerBI/captura_dashboard.png)",
    quiz_question: "¿Cuál es el documento principal que leen los reclutadores al abrir tu repositorio en GitHub?",
    quiz_options: ["README.md", "INDEX.html", "CONFIG.json", "MAIN.exe"],
    quiz_answer: 0,
    challenge: "Obtener la URL pública de tu repositorio de GitHub.",
    commonErrors: "Dejar el repositorio en modo Privado.",
    english_vocab: [{ term: "Portfolio project", trans: "Proyecto de Portafolio", ex: "Showcase your portfolio project." }],
    prereqs: ["m13_01_groq_ai"]
  },

  // FASE 16: EMPLEABILIDAD
  {
    id: "m16_01_career_star",
    phase: "Fase 16: Empleabilidad",
    cat: "career",
    title: "Módulo 16.1: Hoja de Vida ATS, LinkedIn y Método STAR para Entrevistas",
    summary: "Prepara tu marca personal, CV en formato ATS y ensaya respuestas con el método STAR.",
    icon: "fa-briefcase",
    purpose: "🎯 Propósito: Superar las entrevistas técnicas y asegurar tu contrato como Junior Data Analyst.",
    deliverable: "🏁 Entregable: CV en PDF de 1 página + Publicación en LinkedIn + Ensayo STAR.",
    analogy: "💡 Analogía: El pasaporte oficial que te abre las puertas del mercado laboral tech.",
    step1_theory: `Método STAR para Entrevistas:
- S (Situación): Contexto de negocio (Call center con esperas altas).
- T (Tarea): Tu objetivo de analista (Identificar causas de demoras).
- A (Acción): Las herramientas usadas (SQL Server, Power BI, Python, Groq).
- R (Resultado): El impacto cuantitativo (Reduje las esperas un 15%).`,
    step2_business: "Demostrar en la entrevista tu capacidad para convertir datos en decisiones de negocio.",
    step3_code: `MÉTODO STAR:
"En DataCall (S), debía reducir el tiempo de espera (T). Diseñé un modelo en SSMS y Power BI (A), logrando reducir las esperas en 15% (R)."`,
    step4_guided: ["1. Prepara tu CV en formato ATS de 1 página.", "2. Publica un post de tu proyecto en LinkedIn."],
    step5_individual: "Responde en voz alta a la pregunta: ¿Cuál fue tu mayor reto técnico en el proyecto?",
    solution_individual: "Explica cómo solucionaste los valores nulos y conectaste Python con SQL Server.",
    quiz_question: "¿Qué significan las siglas del método STAR para responder preguntas de entrevistas?",
    quiz_options: ["Situación, Tarea, Acción, Resultado", "Sistema, Técnica, Análisis, Reporte", "Solución, Trabajo, Agilidad, Rendimiento", "Ninguna"],
    quiz_answer: 0,
    challenge: "Completar la simulación de entrevista en la pestaña Simulador Mock Trial.",
    commonErrors: "Dudar de tu capacidad o no mencionar números cuantitativos de impacto.",
    english_vocab: [
      { term: "STAR Method", trans: "Método STAR", ex: "Answer interview questions using STAR method." },
      { term: "ATS Resume", trans: "Hoja de Vida ATS", ex: "Format your ATS resume cleanly." }
    ],
    prereqs: ["m15_01_datacall_project"]
  }
];

// --- DATASET: ENGLISH FOR DATA (A1 -> B1 RUTA PARALELA) ---
const ENGLISH_DATA = [
  // NIVEL A1
  {
    id: "eng_a1_01",
    level: "A1",
    title: "1. Basic Tech Greetings & Self Presentation",
    grammar: "Verb To Be (I am, You are, It is) & Present Simple",
    vocab: [
      { term: "Data Analyst", translation: "Analista de Datos", example: "I am a Data Analyst." },
      { term: "Database", translation: "Base de Datos", example: "This is a database." },
      { term: "Report", translation: "Reporte / Informe", example: "The report is ready." }
    ],
    reading_prompt: "Hello! My name is Julieth. I am a Junior Data Analyst. I work with databases, SQL Server, and Power BI.",
    speaking_prompt: "Say in English: 'Hola, mi nombre es Julieth y soy analista de datos.'",
    quiz: {
      question: "How do you say in English: 'Yo soy una analista de datos'?",
      options: ["I am a Data Analyst", "I has a Data Analyst", "I be Data Analyst", "I do Data Analyst"],
      answer: 0
    }
  },
  {
    id: "eng_a1_02",
    level: "A1",
    title: "2. Talking About Daily Tasks at Work",
    grammar: "Present Simple with Daily Verbs (analyze, check, create, run)",
    vocab: [
      { term: "Query", translation: "Consulta SQL", example: "I run a query every day." },
      { term: "Table", translation: "Tabla", example: "The table has ten rows." },
      { term: "Filter", translation: "Filtro", example: "I apply a filter." }
    ],
    reading_prompt: "Every morning, I open SQL Server Management Studio. I run queries and check customer tables.",
    speaking_prompt: "Say in English: 'Yo ejecuto consultas en SQL Server todos los días.'",
    quiz: {
      question: "Choose the correct sentence in Present Simple:",
      options: ["I run SQL queries every morning", "I running SQL queries morning", "I runs SQL queries morning", "I did run query morning"],
      answer: 0
    }
  },

  // NIVEL A2
  {
    id: "eng_a2_01",
    level: "A2",
    title: "3. Describing Past Projects & Data Cleaning",
    grammar: "Past Simple (analyzed, cleaned, created, joined)",
    vocab: [
      { term: "Cleaned data", translation: "Datos limpios", example: "I cleaned the dataset in Power Query." },
      { term: "Joined tables", translation: "Tablas unidas", example: "I joined two tables with INNER JOIN." },
      { term: "Missing values", translation: "Valores faltantes", example: "I removed missing values." }
    ],
    reading_prompt: "In my project DataCall Analytics, I analyzed 50,000 call records. I cleaned missing values in Excel and created a star schema model.",
    speaking_prompt: "Say in English: 'Analicé 50,000 llamadas y limpié datos nulos.'",
    quiz: {
      question: "What is the past tense of the verb 'analyze'?",
      options: ["Analyzed", "Analyzing", "Analyzes", "Will analyze"],
      answer: 0
    }
  },
  {
    id: "eng_a2_02",
    level: "A2",
    title: "4. Comparing Metrics & Trends",
    grammar: "Comparatives & Superlatives (higher than, faster, the longest)",
    vocab: [
      { term: "Wait time", translation: "Tiempo de espera", example: "Wait time was higher than expected." },
      { term: "Increase", translation: "Aumentar / Incremento", example: "Sales showed an increase." },
      { term: "Decrease", translation: "Disminuir / Caída", example: "Wait times decreased by 15%." }
    ],
    reading_prompt: "Call wait times in Bogota were higher than in Cali. After our analysis, average wait times decreased by 15 percent.",
    speaking_prompt: "Say in English: 'El tiempo de espera disminuyó un 15%.'",
    quiz: {
      question: "Complete: 'Wait times in Bogota were ______ than in Cali.'",
      options: ["higher", "more high", "highest", "highly"],
      answer: 0
    }
  },

  // NIVEL B1
  {
    id: "eng_b1_01",
    level: "B1",
    title: "5. Explaining Dashboard Insights & Business Storytelling",
    grammar: "Present Perfect & Complex Connectors (However, Therefore, As a result)",
    vocab: [
      { term: "Business insight", translation: "Hallazgo de negocio", example: "We discovered a key business insight." },
      { term: "Dashboard", translation: "Tablero de control", example: "The dashboard highlights main KPIs." },
      { term: "Recommendation", translation: "Recomendación", example: "My recommendation is to reallocate agents." }
    ],
    reading_prompt: "We have analyzed over 50,000 operational records using SQL Server and Power BI. As a result of our findings, we recommend reallocating call center agents to afternoon shifts to reduce customer drop-off rates.",
    speaking_prompt: "Explain your main project insight in 2 sentences in English.",
    interview_question: "Q: 'Can you walk me through a data project where you found an unexpected result?'",
    quiz: {
      question: "Which connector means 'Por lo tanto' or 'Como resultado'?",
      options: ["As a result / Therefore", "However", "Because", "Although"],
      answer: 0
    }
  },
  {
    id: "eng_b1_02",
    level: "B1",
    title: "6. Job Interview Practice for Junior Data Analyst",
    grammar: "Professional Interview Phrasings & STAR Method in English",
    vocab: [
      { term: "Stakeholder", translation: "Gerente / Interesado", ex: "I presented results to key stakeholders." },
      { term: "Data pipeline", translation: "Tubería de Datos", ex: "I automated the data pipeline." }
    ],
    reading_prompt: "Interviewer: 'Why should we hire you as a Junior Data Analyst?' Candidate: 'Because I have practical hands-on experience building end-to-end solutions combining SQL Server, Power BI, and Python to solve real business problems.'",
    speaking_prompt: "Answer in English: 'Why do you want to work as a Data Analyst?'",
    interview_question: "Q: 'What is your experience with DAX and Power BI?'",
    quiz: {
      question: "How do you professionally answer 'What are your top technical skills?'",
      options: [
        "My core technical skills include SQL query writing, Power BI data modeling, DAX measures, and Python data analysis.",
        "I know computer stuff.",
        "I like games.",
        "No idea."
      ],
      answer: 0
    }
  }
];

// --- LOGROS & MEDALLAS ---
const BADGES_DATA = [
  { id: "b1", title: "Fundamentos Tech", icon: "fa-laptop-code", desc: "Completar la Fase 0 de conceptos tecnológicos.", reqModule: "m0_19_medallion" },
  { id: "b2", title: "Pensamiento Lógico", icon: "fa-brain", desc: "Dominar la lógica de datos y métricas en la Fase 1.", reqModule: "m1_09_logic_problem_solving" },
  { id: "b3", title: "Primera Consulta SSMS", icon: "fa-database", desc: "Completar la conexión a LuchoX12 y ejecutar F5.", reqModule: "m2_01_ssms_intro" },
  { id: "b4", title: "Reina del SELECT", icon: "fa-eye", desc: "Dominar la extracción de columnas específicas.", reqModule: "m2_03_select_from" },
  { id: "b5", title: "Filtro Magistral WHERE", icon: "fa-filter", desc: "Filtrar llamadas y clientes por condiciones de negocio.", reqModule: "m2_05_where_basic" },
  { id: "b6", title: "Maestra de JOINs", icon: "fa-link", desc: "Cruzar tablas relacionales con INNER JOIN y LEFT JOIN.", reqModule: "m3_03_joins" },
  { id: "b7", title: "SQL Avanzado & Vistas", icon: "fa-cubes", desc: "Crear CTEs y Vistas en SQL Server.", reqModule: "m4_01_cte_views" },
  { id: "b8", title: "Excel Data Analyst", icon: "fa-file-excel", desc: "Dominar Tablas Dinámicas y Power Query en Excel.", reqModule: "m5_02_pivots" },
  { id: "b9", title: "Arquitecta de Power BI", icon: "fa-project-diagram", desc: "Construir el Modelo Estrella y la Tabla Calendario.", reqModule: "m7_01_pbi_desktop" },
  { id: "b10", title: "Calculadora DAX", icon: "fa-calculator", desc: "Crear medidas con CALCULATE y DIVIDE.", reqModule: "m8_01_dax_measures" },
  { id: "b11", title: "Programadora Python", icon: "fa-brands fa-python", desc: "Manipular DataFrames de Pandas en VS Code.", reqModule: "m10_01_pandas_intro" },
  { id: "b12", title: "Especialista Groq AI", icon: "fa-robot", desc: "Clasificar encuestas masivas con Llama 3.", reqModule: "m13_01_groq_ai" },
  { id: "b13", title: "Portafolio en GitHub", icon: "fa-brands fa-github", desc: "Publicar el proyecto DataCall con README profesional.", reqModule: "m15_01_datacall_project" },
  { id: "b14", title: "100% Empleable Pro 🏆", icon: "fa-crown", desc: "Completar la ruta integral de 17 Fases a Junior Data Analyst.", reqModule: "m16_01_career_star" }
];

// --- GLOSARIO INTERACTIVO ---
const GLOSARIO_DATA = [
  { term: "SQL Server (SSMS)", def: "El programa oficial de Microsoft donde escribes consultas relacionales F5 contra las bases de datos de la empresa.", analogy: "El televisor donde sintonizas tu canal de datos." },
  { term: "SELECT", def: "Instrucción que indica cuáles columnas específicas quieres incluir en tu informe.", analogy: "Pedir platos del menú del restaurante." },
  { term: "FROM", def: "Instrucción que indica la tabla de donde se extraen los datos.", analogy: "La despensa de donde el chef saca los ingredientes." },
  { term: "WHERE", def: "Filtro condicional que selecciona solo las filas que cumplen una regla.", analogy: "El colador de pasta que deja pasar lo que buscas." },
  { term: "GROUP BY", def: "Agrupa filas con el mismo valor para aplicarles promedios o conteos.", analogy: "Separar monedas por denominación en montoncitos." },
  { term: "INNER JOIN", def: "Une dos tablas mostrando únicamente las filas que coinciden en ambas.", analogy: "La intersección entre dos círculos." },
  { term: "LEFT JOIN", def: "Une dos tablas conservando TODAS las filas de la tabla izquierda.", analogy: "La lista completa de invitados, hayan venido o no." },
  { term: "NULL", def: "Representa la ausencia total de un valor en una casilla.", analogy: "Una casilla vacía porque el cliente no respondió." },
  { term: "Power BI", def: "Herramienta visual para transformar datos en tableros gráficos interactivos.", analogy: "El tablero de control del piloto de avión." },
  { term: "DAX", def: "Lenguaje de fórmulas para crear medidas dinámicas en Power BI.", analogy: "Las fórmulas matemáticas avanzadas de Excel." },
  { term: "CALCULATE", def: "La función más poderosa de DAX. Modifica el contexto de filtro de un reporte.", analogy: "Cambiar las papas fritas por ensalada en un combo." },
  { term: "Modelo Estrella", def: "Arquitectura con 1 Tabla de Hechos central rodeada de Tablas de Dimensiones.", analogy: "El tique de compra en el centro y las listas descriptivas alrededor." },
  { term: "Python / Pandas", def: "Lenguaje y librería #1 para análisis exploratorio y tratamiento de millones de filas.", analogy: "Un tren superveloz programable en código." },
  { term: "Groq API (Llama 3)", def: "Motor de Inteligencia Artificial para clasificar texto libre en milisegundos.", analogy: "Un asistente virtual superinteligente leyendo encuestas." },
  { term: "GitHub", def: "Plataforma en la nube donde publicas tu portafolio público para reclutadores.", analogy: "La vitrina donde exhibes tus proyectos terminados." }
];

// --- FLASHCARDS DATASET ---
const FLASHCARDS_DATA = [
  {
    tag: "SQL",
    q: "¿Cuál es la diferencia entre WHERE y HAVING en SQL Server?",
    a: "WHERE filtra filas individuales ANTES de agrupar los datos con GROUP BY. HAVING filtra los resultados de las funciones de agregación DESPUÉS de haber aplicado el GROUP BY."
  },
  {
    tag: "SQL",
    q: "¿Cuándo se prefiere un LEFT JOIN sobre un INNER JOIN?",
    a: "Se usa LEFT JOIN cuando se requiere conservar la totalidad de los registros de la tabla de la izquierda (como la lista completa de clientes), existan o no registros coincidentes en la tabla de la derecha (como las ventas)."
  },
  {
    tag: "Power BI / DAX",
    q: "¿Qué hace la función CALCULATE en DAX?",
    a: "CALCULATE evalúa una expresión o medida modificando o sobreescribiendo el Contexto de Filtro original aplicado en el informe según las nuevas condiciones especificadas."
  },
  {
    tag: "Power BI",
    q: "¿Por qué es recomendable estructurar los datos en un Modelo Estrella?",
    a: "Porque optimiza el motor en memoria VertiPaq, elimina la redundancia de texto en las tablas de hechos y garantiza cálculos de DAX rápidos y sin ambigüedades de filtro."
  },
  {
    tag: "Casos de Negocio",
    q: "Si la satisfacción cayó un 20% el último mes, ¿qué primeros pasos das para investigar?",
    a: "1) Filtro el último mes en el dashboard. 2) Desgloso por ciudad, turno y canal. 3) Analizo si el tiempo de espera se incrementó. 4) Consulto los comentarios de encuestas analizados con IA para encontrar las palabras clave repetidas."
  }
];

// --- STATE MANAGEMENT ---
let currentViewMode = 'coach';
let completedModules = JSON.parse(localStorage.getItem('datacareer_completed_modules') || '[]');
let currentFlashcardIndex = 0;
let selectedEnglishLevel = 'all';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderModules();
  renderEnglishSection();
  populateDailyClassSelector();
  renderDailyClass();
  updateProgressUI();
  renderFlashcard();
  renderGlossary();
  renderBadges();
});

// --- PREREQUISITE CHECK LOGIC ---
function isModuleUnlocked(m) {
  if (!m.prereqs || m.prereqs.length === 0) return true;
  return m.prereqs.every(prereqId => completedModules.includes(prereqId));
}

// --- RENDER BADGES ---
function renderBadges() {
  const container = document.getElementById('badges-grid');
  if (!container) return;
  container.innerHTML = '';

  BADGES_DATA.forEach(b => {
    const isUnlocked = completedModules.includes(b.reqModule);
    const card = document.createElement('div');
    card.className = `badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="badge-icon" style="${isUnlocked ? '' : 'filter: grayscale(1); opacity: 0.5;'}">
        <i class="fa-solid ${b.icon}"></i>
      </div>
      <div class="badge-title">${b.title}</div>
      <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">${b.desc}</p>
      <span class="badge-status">${isUnlocked ? 'Desbloqueado 💖' : 'Bloqueado 🔒'}</span>
    `;
    container.appendChild(card);
  });
}

// --- RENDER GLOSSARY ---
function renderGlossary(filterText = '') {
  const container = document.getElementById('glossary-grid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = GLOSARIO_DATA.filter(g => 
    g.term.toLowerCase().includes(filterText.toLowerCase()) || 
    g.def.toLowerCase().includes(filterText.toLowerCase())
  );

  filtered.forEach(g => {
    const card = document.createElement('div');
    card.className = 'glossary-card';
    card.innerHTML = `
      <div class="glossary-term">🎀 ${g.term}</div>
      <p class="glossary-def">${g.def}</p>
      <div class="glossary-analogy">💡 <strong>Analogía:</strong> ${g.analogy}</div>
    `;
    container.appendChild(card);
  });
}

function filterGlossary() {
  const text = document.getElementById('glossary-search').value;
  renderGlossary(text);
}

// --- RENDER MODULES (ROADMAP DASHBOARD) ---
function renderModules(filterCat = 'all', searchQuery = '') {
  const container = document.getElementById('modules-container');
  if (!container) return;
  container.innerHTML = '';

  const filtered = MODULES_DATA.filter(m => {
    let matchesCat = filterCat === 'all';
    if (!matchesCat) {
      if (filterCat === 'sql') matchesCat = ['fase2', 'fase3', 'fase4'].includes(m.cat) || m.cat === 'sql';
      else if (filterCat === 'excel') matchesCat = m.cat === 'excel' || m.cat === 'fase5';
      else if (filterCat === 'bi') matchesCat = ['fase6', 'fase7', 'fase8'].includes(m.cat) || m.cat === 'bi';
      else if (filterCat === 'python') matchesCat = ['fase9', 'fase10', 'fase11', 'fase12'].includes(m.cat) || m.cat === 'python';
      else if (filterCat === 'ia') matchesCat = m.cat === 'fase13' || m.cat === 'ia';
      else if (filterCat === 'git') matchesCat = ['fase14', 'fase15'].includes(m.cat) || m.cat === 'git';
      else matchesCat = m.cat === filterCat;
    }

    const matchesSearch = searchQuery === '' || 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  filtered.forEach(m => {
    const isCompleted = completedModules.includes(m.id);
    const unlocked = isModuleUnlocked(m);

    const card = document.createElement('div');
    card.className = `module-card ${isCompleted ? 'completed' : ''} ${!unlocked ? 'locked-module' : ''}`;
    card.onclick = () => {
      if (unlocked) {
        openModuleModal(m.id);
      } else {
        alert("🔒 Módulo Bloqueado por Prerrequisito:\nCompleta las lecciones anteriores de la fase para desbloquear este módulo.");
      }
    };

    card.innerHTML = `
      <div class="card-top">
        <span class="phase-tag ${m.cat}">${m.phase}</span>
        <div class="check-box" onclick="event.stopPropagation(); toggleModuleCompletion('${m.id}')">
          <i class="fa-solid ${isCompleted ? 'fa-heart' : 'fa-heart'}"></i>
        </div>
      </div>
      <h3 class="module-title">${m.title}</h3>
      <p class="module-summary">${m.summary}</p>
      
      ${!unlocked ? `
        <div style="margin-top: 10px;">
          <span class="prereq-pill"><i class="fa-solid fa-lock"></i> Requiere completar lección previa</span>
        </div>
      ` : ''}

      <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--kitty-hotpink); font-weight: 800;">
        <span><i class="fa-solid ${m.icon}"></i> Abrir Lección (10 Pasos)</span>
        <span>${isCompleted ? 'Completado 💖' : (unlocked ? 'Disponible ✨' : 'Bloqueado 🔒')}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- RENDER ENGLISH SECTION ---
function renderEnglishSection() {
  const container = document.getElementById('english-container');
  if (!container) return;
  container.innerHTML = '';

  const filtered = ENGLISH_DATA.filter(e => selectedEnglishLevel === 'all' || e.level === selectedEnglishLevel);

  filtered.forEach(e => {
    let vocabList = e.vocab.map(v => `
      <div class="vocab-chip">
        <span class="vocab-term">${v.term}</span>
        <span class="vocab-trans">🗣️ ${v.translation}</span>
        <span class="vocab-ex">"${v.example}"</span>
      </div>
    `).join('');

    let quizOptions = e.quiz.options.map((opt, idx) => `
      <button class="btn btn-secondary" onclick="checkEnglishQuiz('${e.id}', ${idx}, ${e.quiz.answer})" style="font-size: 12px; text-align: left; justify-content: flex-start;">
        ${String.fromCharCode(65 + idx)}) ${opt}
      </button>
    `).join('');

    const card = document.createElement('div');
    card.className = 'english-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="phase-tag english">Level ${e.level}</span>
        <span style="font-size: 11px; font-weight: 800; color: var(--kitty-hotpink);">English for Data</span>
      </div>

      <h3 style="font-size: 18px; color: var(--text-dark); margin-bottom: 8px; font-weight: 900;">${e.title}</h3>
      <p style="font-size: 13px; color: var(--text-muted); font-weight: 700; margin-bottom: 12px;">
        📌 <strong>Grammar Focus:</strong> ${e.grammar}
      </p>

      <div style="background: #fffdfd; border: 1px solid #f8bbd0; padding: 14px; border-radius: 14px; margin-bottom: 14px;">
        <h4 style="color: var(--kitty-hotpink); font-size: 13px; font-weight: 800; margin-bottom: 6px;">
          📖 Reading & Pronunciation Prompt:
        </h4>
        <p style="font-size: 13px; color: var(--text-dark); font-weight: 600; line-height: 1.5; font-style: italic;">
          "${e.reading_prompt}"
        </p>
      </div>

      <div style="margin-bottom: 14px;">
        <h4 style="color: var(--text-dark); font-size: 13px; font-weight: 800;">🗣️ Essential Data Analyst Vocabulary:</h4>
        <div class="vocab-grid">
          ${vocabList}
        </div>
      </div>

      <div style="background: #fff0f5; border: 1px solid #ff4081; padding: 14px; border-radius: 14px; margin-bottom: 14px;">
        <h4 style="color: #ff1493; font-size: 13px; font-weight: 800; margin-bottom: 4px;">💬 Speaking Practice Challenge:</h4>
        <p style="font-size: 13px; font-weight: 700; color: #3c1a26;">${e.speaking_prompt}</p>
      </div>

      ${e.interview_question ? `
        <div style="background: #e1f5fe; border: 1px solid #0288d1; padding: 14px; border-radius: 14px; margin-bottom: 14px;">
          <h4 style="color: #0277bd; font-size: 13px; font-weight: 800; margin-bottom: 4px;">🎯 Real Interview Question:</h4>
          <p style="font-size: 13px; font-weight: 700; color: #01579b;">${e.interview_question}</p>
        </div>
      ` : ''}

      <div style="background: #fff8fa; border: 1px solid #f8bbd0; padding: 14px; border-radius: 14px;">
        <h4 style="color: var(--kitty-hotpink); font-size: 13px; font-weight: 800; margin-bottom: 8px;">❓ Quick Check Quiz:</h4>
        <p style="font-size: 13px; font-weight: 700; margin-bottom: 10px;">${e.quiz.question}</p>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          ${quizOptions}
        </div>
        <div id="eng-quiz-feedback-${e.id}" style="margin-top: 10px; display: none;"></div>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterEnglishLevel(lvl) {
  selectedEnglishLevel = lvl;
  renderEnglishSection();
}

function checkEnglishQuiz(id, selected, correct) {
  const fb = document.getElementById(`eng-quiz-feedback-${id}`);
  if (!fb) return;
  fb.style.display = 'block';
  if (selected === correct) {
    fb.innerHTML = `<div style="background: #e8f5e9; color: #2e7d32; padding: 10px; border-radius: 8px; font-weight: 800; font-size: 12px;">🎉 Excellent! Correct answer (+50 XP).</div>`;
  } else {
    fb.innerHTML = `<div style="background: #ffebee; color: #c62828; padding: 10px; border-radius: 8px; font-weight: 700; font-size: 12px;">💡 Try again! Practice makes perfect.</div>`;
  }
}

// --- CLASE DE HOY GENERATOR ---
function populateDailyClassSelector() {
  const select = document.getElementById('class-module-select');
  if (!select) return;
  select.innerHTML = '';

  MODULES_DATA.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.innerText = `${m.phase} — ${m.title}`;
    select.appendChild(opt);
  });
}

function renderDailyClass() {
  const select = document.getElementById('class-module-select');
  const container = document.getElementById('daily-class-container');
  if (!select || !container) return;

  const moduleId = select.value || MODULES_DATA[0].id;
  const m = MODULES_DATA.find(item => item.id === moduleId) || MODULES_DATA[0];

  let vocabList = m.english_vocab ? m.english_vocab.map(v => `
    <li><strong>${v.term}:</strong> ${v.trans} — <em>"${v.ex}"</em></li>
  `).join('') : '<li>Data Analyst vocabulary</li>';

  container.innerHTML = `
    <div style="background: #ffffff; border: 3px solid var(--border-pink); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-glow); margin-top: 20px;">
      
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed var(--border-pink); padding-bottom: 14px; margin-bottom: 20px;">
        <div>
          <span class="phase-tag ${m.cat}">${m.phase}</span>
          <h2 style="font-size: 22px; color: var(--kitty-hotpink); font-weight: 900; margin-top: 6px;">${m.title}</h2>
        </div>
        <div style="background: #fff0f5; padding: 8px 16px; border-radius: 20px; border: 2px solid #ff4081; font-weight: 800; color: #ff1493;">
          ⏱️ Duración Total: 60 - 120 min
        </div>
      </div>

      <!-- TIME BREAKDOWN BLOCKS -->
      <div class="time-block-grid">
        <div class="time-block-card">
          <span class="time-badge">10 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">1. Repaso</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Calentamiento y conceptos de la clase anterior.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">25 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">2. Teoría & Analogía</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Explicación cotidiana y caso DataCall.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">30 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">3. Práctica Guiada</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Ejercicios guiados e independientes en SSMS/Excel/VS Code.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">15 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">4. Mini Quiz</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Comprobación autónoma de conocimientos.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">20 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">5. Reto Final</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Desafío de aplicación de negocio.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">20 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">6. English Session</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Vocabulario técnico de la clase en Inglés.</p>
        </div>
      </div>

      <!-- GUIA DE LA CLASE EN VIVO -->
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 20px;">
        <div style="background: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px;">
          <h3 style="color: var(--kitty-hotpink); font-size: 15px; font-weight: 800; margin-bottom: 6px;">
            📌 Bloque 1: Objetivo y Caso de Negocio DataCall (35 min)
          </h3>
          <p style="font-size: 13px; font-weight: 600; color: var(--text-dark);">${m.purpose}</p>
          <p style="font-size: 13px; font-weight: 600; color: var(--text-muted); margin-top: 6px;">💡 <strong>Analogía:</strong> ${m.analogy}</p>
        </div>

        <div style="background: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px;">
          <h3 style="color: var(--kitty-hotpink); font-size: 15px; font-weight: 800; margin-bottom: 6px;">
            💻 Bloque 2: Práctica en Vivo & Código de la Clase (30 min)
          </h3>
          <div class="code-block">${m.step3_code}</div>
        </div>

        <div style="background: #fff0f5; border: 2px solid #ff4081; padding: 18px; border-radius: 16px;">
          <h3 style="color: #ff1493; font-size: 15px; font-weight: 800; margin-bottom: 6px;">
            🇬🇧 Bloque 3: English for Data Session (20 min)
          </h3>
          <p style="font-size: 13px; font-weight: 700; margin-bottom: 8px;">Vocabulario técnico a dominar en esta clase:</p>
          <ul style="padding-left: 20px; font-size: 13px; font-weight: 600; color: #3c1a26;">
            ${vocabList}
          </ul>
        </div>

        <button class="btn btn-primary" onclick="openModuleModal('${m.id}')" style="justify-content: center; font-size: 14px; padding: 12px;">
          <i class="fa-solid fa-graduation-cap"></i> Abrir Lección Guiada Completa de 10 Pasos
        </button>
      </div>

    </div>
  `;
}

// --- MODAL DIALOG WITH 10 STEPS ---
function openModuleModal(id) {
  const m = MODULES_DATA.find(item => item.id === id);
  if (!m) return;

  const modal = document.getElementById('module-modal');
  const content = document.getElementById('modal-content');
  const isCompleted = completedModules.includes(m.id);

  let guidedStepsHtml = m.step4_guided.map(step => `<li style="margin-bottom: 8px;">${step}</li>`).join('');

  let quizOptionsHtml = m.quiz_options ? m.quiz_options.map((opt, idx) => `
    <button class="btn btn-secondary" onclick="checkQuizAnswer('${m.id}', ${idx}, ${m.quiz_answer})" style="font-size: 13px; text-align: left; width: 100%; justify-content: flex-start;">
      ${String.fromCharCode(65 + idx)}) ${opt}
    </button>
  `).join('') : '';

  let englishVocabHtml = m.english_vocab ? m.english_vocab.map(v => `
    <div class="vocab-chip">
      <span class="vocab-term">${v.term}</span>
      <span class="vocab-trans">🗣️ ${v.trans}</span>
      <span class="vocab-ex">"${v.ex}"</span>
    </div>
  `).join('') : '';

  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <span class="phase-tag ${m.cat}">${m.phase}</span>
      <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" onclick="toggleModuleCompletion('${m.id}'); closeModal();">
        <i class="fa-solid ${isCompleted ? 'fa-rotate-left' : 'fa-heart'}"></i> ${isCompleted ? 'Marcar Pendiente' : 'Completado con Éxito 💕 (+100 XP)'}
      </button>
    </div>

    <h2 style="font-size: 24px; margin-bottom: 12px; color: var(--kitty-hotpink); font-weight: 900;">${m.title}</h2>
    <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 20px; font-weight: 600;">${m.summary}</p>

    <!-- PASO 1: PROPOSITO Y ENTREGABLE -->
    <div style="background: linear-gradient(135deg, #fff0f5, #fce4ec); border: 2px solid #ff4081; padding: 20px; border-radius: 18px; margin-bottom: 20px;">
      <h3 style="color: #ff1493; font-size: 16px; font-weight: 900; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-bullseye"></i> Paso 1: Objetivo & Entregable Tangible
      </h3>
      <p style="color: #3c1a26; font-size: 14px; font-weight: 700; line-height: 1.6; margin-bottom: 12px;">${m.purpose}</p>
      
      <div style="background-color: #ffffff; border: 2px solid #ff1493; padding: 14px; border-radius: 14px;">
        <h4 style="color: #ff1493; font-size: 14px; font-weight: 900; margin-bottom: 4px;">
          <i class="fa-solid fa-flag-checkered"></i> ${m.deliverable}
        </h4>
      </div>
    </div>

    <!-- PASO 2: ANALOGIA COTIDIANA -->
    <div style="background-color: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-lightbulb"></i> Paso 2: Analogía Cotidiana desde Cero</h3>
      <p style="color: var(--text-dark); font-weight: 600; font-size: 14px;">${m.analogy}</p>
    </div>

    <!-- PASO 3: EXPLICACIÓN TEÓRICA -->
    <div style="background-color: #fffdfd; border: 2px solid #f8bbd0; padding: 20px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 8px;"><i class="fa-solid fa-book-open"></i> Paso 3: Explicación y Conceptos Clave</h3>
      <div style="color: var(--text-dark); font-weight: 500; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${m.step1_theory}</div>
    </div>

    <!-- PASO 4: CASO DE NEGOCIO DATACALL -->
    <div style="background-color: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-briefcase"></i> Paso 4: ¿Cómo funciona en el Call Center DataCall?</h3>
      <p style="color: var(--text-dark); font-weight: 600; font-size: 14px;">${m.step2_business}</p>
    </div>

    <!-- PASO 5: CODIGO Y SINTAXIS -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-code"></i> Paso 5: Código / Sintaxis de Ejemplo</h3>
      <div class="code-block">${m.step3_code}</div>
    </div>

    <!-- PASO 6: EJERCICIO GUIADO -->
    <div style="background-color: #fff8fa; border: 2px solid #f8bbd0; padding: 20px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 10px;"><i class="fa-solid fa-list-check"></i> Paso 6: Instrucciones Guiadas Paso a Paso (¡Hazlo Ahora!)</h3>
      <ol style="padding-left: 20px; color: var(--text-dark); font-weight: 600; font-size: 14px;">
        ${guidedStepsHtml}
      </ol>
    </div>

    <!-- PASO 7: EJERCICIO INDEPENDIENTE -->
    <div style="background-color: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-user-pen"></i> Paso 7: Ejercicio Independiente para Julieth</h3>
      <p style="color: var(--text-dark); font-weight: 600; font-size: 14px; margin-bottom: 10px;">${m.step5_individual}</p>
      
      <button class="btn btn-secondary" onclick="toggleSolution('sol-${m.id}')" style="font-size: 12px; padding: 6px 14px;">
        <i class="fa-solid fa-eye"></i> Revelar / Ocultar Pista y Solución
      </button>
      <div id="sol-${m.id}" style="display: none; margin-top: 10px; background-color: #e8f5e9; color: #1b5e20; padding: 12px; border-radius: 10px; font-size: 13px; font-weight: 600;">
        <strong>Solución Paso a Paso:</strong><br>${m.solution_individual}
      </div>
    </div>

    <!-- PASO 8: QUIZ INTERACTIVO -->
    ${m.quiz_question ? `
      <div style="background-color: #fff0f5; border: 2px solid #ff4081; padding: 20px; border-radius: 16px; margin-bottom: 20px;">
        <h3 style="color: #ff1493; font-size: 16px; margin-bottom: 8px;"><i class="fa-solid fa-circle-question"></i> Paso 8: Quiz de Comprobación Autónoma</h3>
        <p style="color: #3c1a26; font-weight: 700; font-size: 14px; margin-bottom: 12px;">${m.quiz_question}</p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${quizOptionsHtml}
        </div>
        <div id="quiz-feedback-${m.id}" style="margin-top: 12px; display: none;"></div>
      </div>
    ` : ''}

    <!-- PASO 9: RETO DEL MODULO Y ERRORES A RECORDAR -->
    <div style="background-color: #fff8e1; padding: 18px; border-radius: 16px; border: 1px solid #ffe082; margin-bottom: 20px;">
      <h3 style="color: #f57f17; font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-trophy"></i> Paso 9: Reto Final & Puntos a Recordar</h3>
      <p style="color: #5d4037; font-weight: 700; font-size: 14px; margin-bottom: 8px;">${m.challenge}</p>
      <div style="margin-top: 8px; background-color: #ffebee; padding: 10px; border-radius: 8px; color: #b71c1c; font-size: 12px; font-weight: 700;">
        ⚠️ Errores comunes a evitar: ${m.commonErrors}
      </div>
    </div>

    <!-- PASO 10: VOCABULARIO TECNICO EN INGLES -->
    ${m.english_vocab ? `
      <div style="background-color: #e1f5fe; border: 2px solid #0288d1; padding: 20px; border-radius: 16px; margin-bottom: 20px;">
        <h3 style="color: #0277bd; font-size: 16px; margin-bottom: 10px;"><i class="fa-solid fa-language"></i> Paso 10: Vocabulario Técnico en Inglés de la Clase</h3>
        <div class="vocab-grid">
          ${englishVocabHtml}
        </div>
      </div>
    ` : ''}
  `;

  modal.style.display = 'flex';
}

function checkQuizAnswer(moduleId, selectedIdx, correctIdx) {
  const fb = document.getElementById(`quiz-feedback-${moduleId}`);
  if (!fb) return;
  fb.style.display = 'block';
  if (selectedIdx === correctIdx) {
    fb.innerHTML = `
      <div style="background-color: #e8f5e9; color: #2e7d32; padding: 12px; border-radius: 10px; font-weight: 800; font-size: 13px;">
        🎉 ¡Correcto Julieth hermosa! Has entendido el concepto a la perfección (+50 XP).
      </div>
    `;
  } else {
    fb.innerHTML = `
      <div style="background-color: #ffebee; color: #c62828; padding: 12px; border-radius: 10px; font-weight: 700; font-size: 13px;">
        💡 ¡Casi! Inténtalo de nuevo o repasa el Paso 3 para ver la respuesta.
      </div>
    `;
  }
}

function toggleSolution(solId) {
  const el = document.getElementById(solId);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function closeModal() {
  document.getElementById('module-modal').style.display = 'none';
}

// --- CHEATSHEET & LOVE NOTES MODAL ---
function openCheatsheetModal() {
  document.getElementById('cheatsheet-modal').style.display = 'flex';
}

function closeCheatsheetModal() {
  document.getElementById('cheatsheet-modal').style.display = 'none';
}

function openLoveNotesModal() {
  document.getElementById('love-notes-modal').style.display = 'flex';
}

function closeLoveNotesModal() {
  document.getElementById('love-notes-modal').style.display = 'none';
}

function startDailyQuest() {
  openModuleModal(MODULES_DATA[0].id);
}

// --- RANDOM BUSINESS CASE GENERATOR ---
function generateRandomBusinessCase() {
  const cases = [
    { title: "⚡ Desafío 1: Esperas en Cali", desc: "El supervisor reporta retrasos en Cali. Escribe una consulta en SSMS sobre analytics.fact_llamadas filtrando por la ciudad de los clientes e identificando el promedio de tiempo de espera." },
    { title: "⚡ Desafío 2: Agentes del Turno Noche", desc: "Queremos evaluar la eficiencia del turno noche. Filtra la tabla analytics.dim_agente por turno = 'Noche' y muestra su fecha de ingreso." },
    { title: "⚡ Desafío 3: Encuestas Negativas", desc: "La gerencia solicita ver los comentarios con satisfacción <= 2. Escribe una consulta con WHERE satisfaccion <= 2 en analytics.fact_encuestas." }
  ];
  const item = cases[Math.floor(Math.random() * cases.length)];
  const box = document.getElementById('random-case-box');
  document.getElementById('case-title').innerText = item.title;
  document.getElementById('case-desc').innerText = item.desc;
  box.style.display = 'block';
}

// --- PROGRESS MANAGEMENT ---
function toggleModuleCompletion(id) {
  if (completedModules.includes(id)) {
    completedModules = completedModules.filter(item => item !== id);
  } else {
    completedModules.push(id);
  }
  localStorage.setItem('datacareer_completed_modules', JSON.stringify(completedModules));
  renderModules();
  updateProgressUI();
  renderBadges();
}

function updateProgressUI() {
  const total = MODULES_DATA.length;
  const count = completedModules.length;
  const percent = Math.round((count / total) * 100);
  const xp = count * 100 + 1250;

  const percentEl = document.getElementById('progress-percent');
  const fillEl = document.getElementById('progress-fill');
  const countEl = document.getElementById('completed-modules-count');
  const xpEl = document.getElementById('user-xp');
  const mobileXp = document.getElementById('mobile-xp-val');

  if (percentEl) percentEl.innerText = `${percent}%`;
  if (fillEl) fillEl.style.width = `${percent}%`;
  if (countEl) countEl.innerText = `${count} de ${total}`;
  if (xpEl) xpEl.innerText = xp.toLocaleString();
  if (mobileXp) mobileXp.innerText = xp.toLocaleString();

  let level = "Nivel 1: Tech Apprentice 🌸";
  if (percent >= 25 && percent < 50) level = "Nivel 2: SQL Warrior 👑";
  else if (percent >= 50 && percent < 75) level = "Nivel 3: BI & Python Architect ✨";
  else if (percent >= 75) level = "Nivel 4: Junior Data Analyst Pro 🏆";
  
  const levelEl = document.getElementById('level-title');
  if (levelEl) levelEl.innerText = level;
}

// --- REAL SQL QUERY EXECUTION ---
async function runRealSQLQuery() {
  const sql = document.getElementById('sql-editor').value;
  const container = document.getElementById('results-table-container');
  const statusEl = document.getElementById('execution-status');

  statusEl.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-pink"></i> Ejecutando consulta SQL...`;

  try {
    const res = await fetch('/api/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: sql })
    });

    const data = await res.json();

    if (!data.success) {
      statusEl.innerHTML = `<i class="fa-solid fa-circle-xmark text-rose"></i> Error SQL`;
      container.innerHTML = `
        <div style="background-color: #ffebee; color: #c62828; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 13px;">
          <strong>Error de Sintaxis o Ejecución SQL:</strong><br>${data.error}
          <div style="margin-top: 10px; background-color: #fff; padding: 10px; border-radius: 8px; color: #3c1a26; font-family: var(--font-main);">
            <strong>💡 Consejo de KittyAI para arreglarlo:</strong><br>
            Verifica que no hayas olvidado ninguna coma entre columnas y que los textos dentro de WHERE tengan comillas simples 'Texto'.
          </div>
        </div>
      `;
      return;
    }

    document.getElementById('result-count').innerText = data.count;
    statusEl.innerHTML = `<i class="fa-solid fa-check text-emerald"></i> Completado (${data.count} filas)`;

    let html = '';

    if (data.demo) {
      html += `
        <div style="background: linear-gradient(90deg, #fff8e1, #fff3e0); border-left: 4px solid #ff8f00; padding: 10px 14px; border-radius: 10px; margin-bottom: 12px; font-size: 12px; color: #5d4037; font-weight: 700;">
          🎀 <strong>Modo Demo Vercel:</strong> Estos datos son ejemplos representativos de DataCall.
          Para ejecutar tus consultas reales contra SQL Server LuchoX12, usa <strong>python server.py</strong> en tu computador.
        </div>
      `;
    }

    html += '<table class="sim-table"><thead><tr>';
    data.columns.forEach(col => html += `<th>${col}</th>`);
    html += '</tr></thead><tbody>';

    data.rows.forEach(row => {
      html += '<tr>';
      row.forEach(val => html += `<td>${val}</td>`);
      html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;

  } catch (err) {
    statusEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber"></i> Modo Demo Vercel`;
    container.innerHTML = `
      <table class="sim-table">
        <thead><tr><th>cliente_id</th><th>nombre</th><th>ciudad</th><th>edad</th><th>tipo_cliente</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Julieth Galvis</td><td>Bogotá</td><td>24</td><td>Premium</td></tr>
          <tr><td>2</td><td>Carlos Mendoza</td><td>Medellín</td><td>35</td><td>Nuevo</td></tr>
          <tr><td>3</td><td>Andrea Ospina</td><td>Cali</td><td>29</td><td>Recurrente</td></tr>
        </tbody>
      </table>
    `;
  }
}

// --- AI TUTOR KITTYAI CHAT ---
async function sendChatMessage() {
  const input = document.getElementById('chat-user-input');
  const msg = input.value.trim();
  if (!msg) return;

  const chatContainer = document.getElementById('chat-messages');

  chatContainer.innerHTML += `<div class="msg-bubble user">${msg}</div>`;
  input.value = '';
  chatContainer.scrollTop = chatContainer.scrollHeight;

  const thinkingId = 'thinking-' + Date.now();
  chatContainer.innerHTML += `
    <div id="${thinkingId}" class="msg-bubble ai">
      <i class="fa-solid fa-spinner fa-spin"></i> KittyAI está pensando tu respuesta con ternura... 💕
    </div>
  `;
  chatContainer.scrollTop = chatContainer.scrollHeight;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    const thinkingEl = document.getElementById(thinkingId);

    if (data.success) {
      thinkingEl.outerHTML = `<div class="msg-bubble ai">${data.reply.replace(/\n/g, '<br>')}</div>`;
    } else {
      thinkingEl.outerHTML = `<div class="msg-bubble ai" style="color: red;">No se pudo procesar la respuesta: ${data.reply}</div>`;
    }
  } catch (err) {
    document.getElementById(thinkingId).outerHTML = `
      <div class="msg-bubble ai">
        ¡Hola Julieth hermosa! 💖 Recuerda que SELECT te permite elegir las columnas que quieres ver y WHERE te ayuda a filtrar solo los datos que necesitas. ¡Tú puedes, eres súper brillante! ✨
      </div>
    `;
  }

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// --- PRESET SQL QUERIES ---
function loadSQLPreset() {
  const val = document.getElementById('sql-presets').value;
  const editor = document.getElementById('sql-editor');

  if (val === 'select_clients') {
    editor.value = "SELECT TOP 10 cliente_id, nombre, ciudad, edad, tipo_cliente \nFROM analytics.dim_cliente \nWHERE ciudad = 'Bogotá' \nORDER BY edad DESC;";
  } else if (val === 'select_calls') {
    editor.value = "SELECT TOP 15 llamada_id, cliente_id, tiempo_espera_segundos, duracion_segundos, canal \nFROM analytics.fact_llamadas \nWHERE tiempo_espera_segundos > 120 \nORDER BY tiempo_espera_segundos DESC;";
  } else if (val === 'group_by') {
    editor.value = "SELECT resultado, COUNT(*) AS total_llamadas, AVG(duracion_segundos) AS duracion_promedio_seg \nFROM analytics.fact_llamadas \nGROUP BY resultado \nORDER BY total_llamadas DESC;";
  } else if (val === 'joins') {
    editor.value = "SELECT TOP 15 v.venta_id, c.nombre AS cliente, c.ciudad, p.producto, v.valor_total \nFROM analytics.fact_ventas v \nINNER JOIN analytics.dim_cliente c ON v.cliente_id = c.cliente_id \nINNER JOIN analytics.dim_producto p ON v.producto_id = p.producto_id;";
  } else if (val === 'window') {
    editor.value = "SELECT ciudad, cliente_id, nombre, edad, \n       DENSE_RANK() OVER(PARTITION BY ciudad ORDER BY edad DESC) AS ranking_edad \nFROM analytics.dim_cliente;";
  }
  runRealSQLQuery();
}

function clearSQLEditor() {
  document.getElementById('sql-editor').value = '';
}

// --- FLASHCARDS LOGIC ---
function renderFlashcard() {
  const card = FLASHCARDS_DATA[currentFlashcardIndex];
  document.getElementById('card-index').innerText = currentFlashcardIndex + 1;
  document.getElementById('card-total').innerText = FLASHCARDS_DATA.length;
  document.getElementById('card-tag').innerText = card.tag;
  document.getElementById('card-question').innerText = card.q;
  document.getElementById('card-answer').innerText = card.a;
  document.getElementById('card-answer-container').style.display = 'none';
}

function toggleFlashcardAnswer() {
  const container = document.getElementById('card-answer-container');
  container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

function nextFlashcard() {
  currentFlashcardIndex = (currentFlashcardIndex + 1) % FLASHCARDS_DATA.length;
  renderFlashcard();
}

function prevFlashcard() {
  currentFlashcardIndex = (currentFlashcardIndex - 1 + FLASHCARDS_DATA.length) % FLASHCARDS_DATA.length;
  renderFlashcard();
}

// --- SIMULATOR CHAT LOGIC ---
function answerSim(option) {
  const body = document.getElementById('sim-body');
  const options = document.getElementById('sim-options');

  if (option === 1) {
    body.innerHTML += `
      <div class="chat-bubble student">
        <p>"En el proyecto DataCall analicé 50,000 llamadas operacionales conectando SQL Server con Power BI y Groq AI para identificar cuellos de botella."</p>
      </div>
      <div class="chat-bubble interviewer">
        <p>¡Excelente respuesta Julieth! Muestras mucha seguridad y enfoque claro de negocio. Vamos a la siguiente pregunta: ¿Cómo calculaste la tasa de abandono de llamadas en DAX?</p>
      </div>
    `;
    options.innerHTML = `
      <button class="sim-option-btn" onclick="answerSim(3)">
        💬 "Usé la función DIVIDE combinando CALCULATE con el filtro de abandono = 1 sobre el total de llamadas."
      </button>
    `;
  } else if (option === 3) {
    body.innerHTML += `
      <div class="chat-bubble student">
        <p>"Usé la función DIVIDE combinando CALCULATE con el filtro de abandono = 1 sobre el total de llamadas para evitar divisiones por cero."</p>
      </div>
      <div class="chat-bubble interviewer">
        <p>🎉 ¡Impecable! Tienes un dominio excelente de DAX y prevención de errores. Estás contratada 💖.</p>
      </div>
    `;
    options.innerHTML = `<p style="color: var(--emerald); font-weight: 800; text-align: center;">🏆 ¡Simulación de Entrevista Aprobada con Calificación Sobresaliente! 💖✨</p>`;
  }
}

// --- VIEW MODE SWITCH ---
function switchViewMode(mode) {
  currentViewMode = mode;
  document.getElementById('btn-mode-coach').classList.toggle('active', mode === 'coach');
  document.getElementById('btn-mode-student').classList.toggle('active', mode === 'student');
}

// --- TAB NAVIGATION ---
function showTab(tabId) {
  document.querySelectorAll('.tab-page').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const targetTab = document.getElementById(`tab-${tabId}`);
  if (targetTab) targetTab.style.display = 'block';

  const navItems = document.querySelectorAll('.nav-menu .nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(tabId)) {
      item.classList.add('active');
    }
  });

  const sidebar = document.getElementById('sidebar');
  if (sidebar && window.innerWidth <= 768) {
    sidebar.classList.remove('open');
  }
}

// --- SEARCH & FILTER ---
function filterModules() {
  const query = document.getElementById('search-input').value;
  renderModules('all', query);
}

function filterPhaseGroup(cat) {
  document.querySelectorAll('.phase-filter-pills .pill').forEach(el => el.classList.remove('active'));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
  renderModules(cat);
}
