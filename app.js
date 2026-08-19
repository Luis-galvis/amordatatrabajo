/* ==========================================================================
   DataCareer Academy — Master Application Engine (app.js)
   Programa de Clases Dirigidas de 1 Hora (45–75 Minutos) — Cero Absoluto ➔ Junior Data Analyst
   ========================================================================== */

// --- MOBILE SIDEBAR TOGGLE ---
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

// --- DATASET COMPLETO: CLASES DIRIGIDAS DE 1 HORA (FASES 0 A 16) ---
const MODULES_DATA = [
  // ==========================================
  // FASE 0 — TECH FOUNDATIONS (7 Clases de 1h)
  // ==========================================
  {
    id: "c0_01_tech_intro",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Clase 0.1: Introducción al Mundo Tech, Informática y Datos",
    summary: "Comprende qué es tecnología, informática, datos vs información y los roles clave de Data Analyst, Engineer y Scientist en 1 hora.",
    icon: "fa-laptop-code",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Distinguir la diferencia entre datos e información y explicar la función estratégica de un Data Analyst.",
    concepts: ["¿Qué es tecnología?", "¿Qué es informática?", "Datos vs Información", "Data Analyst", "Data Engineer", "Data Scientist"],
    intro: "Bienvenida a tu primera clase. Hoy perderás el miedo a los computadores y entenderás por qué los datos guían el mundo moderno.",
    analogy: "💡 Analogía: La tecnología es la cocina; los datos son los ingredientes frescos; el Data Analyst es el chef que prepara un menú delicioso (decisiones de negocio).",
    theory: `1. ¿Qué es Tecnología e Informática?
La tecnología es cualquier herramienta que resuelve un problema. La informática es el tratamiento automático de la información mediante computadores.

2. Dato vs Información:
- Dato: Un número o letra suelta (Ej: '120').
- Información: El dato con sentido y contexto de negocio (Ej: '120 segundos de tiempo de espera').

3. Los Roles del Mundo de Datos:
- Data Analyst (TÚ): Examina datos limpios para responder preguntas de negocio y crear dashboards.
- Data Engineer: Construye las tuberías para transportar datos masivos.
- Data Scientist: Crea modelos matemáticos predictivos avanzados.`,
    business_case: "En DataCall (nuestro call center), recibimos 50,000 llamadas al mes. El Data Analyst no contesta teléfonos; analiza los registros para que los clientes esperen menos tiempo en línea.",
    code_example: `-- Flujo de Transformación de Valor de Datos:
[DATO CRUDO: 120] ➔ [INFORMACIÓN: 120s de espera] ➔ [CONOCIMIENTO: Espera alta en Bogotá] ➔ [DECISIÓN: Reasignar 5 agentes]`,
    guided_practice: [
      "1. Abre una hoja de apuntes en tu computador o libreta.",
      "2. Identifica 3 datos que entregas diariamente a aplicaciones como Spotify o WhatsApp.",
      "3. Explica qué información obtiene la empresa a partir de esos datos."
    ],
    individual_practice: "Escribe 2 ejemplos de datos que genera un trabajador de call center durante su turno y conviértelos en información de negocio.",
    solution_practice: "Dato 1: 300 ➔ Información: Duración de llamada de 300 segundos (5 min). Dato 2: 'Facturación' ➔ Información: Motivo de consulta principal.",
    quiz_question: "¿Cuál es la función principal de un Junior Data Analyst en una empresa?",
    quiz_options: ["Analizar datos estructurados para responder preguntas de negocio y crear dashboards", "Reparar cables de red y pantallas", "Desarrollar videojuegos", "Contestar llamadas de soporte"],
    quiz_answer: 0,
    challenge: "Identificar 3 métricas numéricas de tu vida diaria y asignarles un objetivo de mejora.",
    common_errors: "Confundir el rol de soporte técnico de hardware con el de analista de datos.",
    english_vocab: [
      { term: "Data Analyst", trans: "Analista de Datos", ex: "Julieth is a Junior Data Analyst." },
      { term: "Business Insight", trans: "Hallazgo de Negocio", ex: "We found a key business insight." },
      { term: "Raw Data", trans: "Datos Crudos", ex: "Raw data needs processing." }
    ]
  },
  {
    id: "c0_02_hardware_comp",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Clase 0.2: Anatomía del Computador: Hardware, CPU, RAM y Almacenamiento",
    summary: "Conoce las entrañas de tu equipo: Procesador (CPU), Memoria RAM, Almacenamiento (Storage), GPU y la diferencia con el Software.",
    icon: "fa-hard-drive",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Identificar los componentes físicos de un equipo y comprender cómo la memoria RAM afecta el rendimiento de Power BI.",
    concepts: ["Hardware vs Software", "CPU (Procesador)", "Memoria RAM", "Almacenamiento (SSD/HDD)", "GPU"],
    intro: "Hoy aprenderás cómo piensa tu computador por dentro y por qué algunas herramientas de datos requieren más memoria que otras.",
    analogy: "💡 Analogía: El computador es como una oficina de trabajo: la CPU es la mente del trabajador, la Memoria RAM es la superficie del escritorio (donde pones los papeles en uso) y el Almacenamiento (Disco) es el archivador del fondo.",
    theory: `1. Hardware vs Software:
- Hardware: Todo lo físico que puedes tocar (pantalla, teclado, memoria).
- Software: Los programas intangibles que ejecutas (Windows, Excel, SQL Server).

2. Componentes Fundamentales:
- CPU (Procesador): El cerebro que realiza los cálculos matemáticos por segundo.
- Memoria RAM: La memoria ultrarrápida temporal. Cuando abres Power BI o Excel, se cargan en la RAM.
- Almacenamiento (Storage SSD/HDD): Donde se guardan tus archivos permanentemente cuando apagas el PC.
- GPU: Procesador gráfico especializado.`,
    business_case: "Al procesar un dataset de 50,000 llamadas en Power BI, tu computador usa la Memoria RAM para mantener los gráficos interactivos sin pausarse.",
    code_example: `CONFIGURACIÓN RECOMENDADA PARA DATA ANALYST:
- CPU: Intel Core i5 / AMD Ryzen 5 o superior
- RAM: 8 GB o 16 GB (Ideal para Power BI y Python)
- Almacenamiento: 256 GB SSD (Disco de Estado Sólido)`,
    guided_practice: [
      "1. En tu teclado presiona las teclas Ctrl + Shift + Esc para abrir el Administrador de Tareas en Windows.",
      "2. Haz clic en la pestaña 'Rendimiento'.",
      "3. Observa el porcentaje de uso actual de tu CPU y de tu Memoria RAM."
    ],
    individual_practice: "Clasifica los siguientes elementos en HW o SW: Teclado, Microsoft Excel, Memoria RAM, Windows 11, Disco SSD.",
    solution_practice: "Hardware: Teclado, Memoria RAM, Disco SSD. Software: Microsoft Excel, Windows 11.",
    quiz_question: "¿Qué componente del computador almacena temporalmente los datos de las aplicaciones que estás usando en el momento?",
    quiz_options: ["Memoria RAM", "Disco Duro SSD", "Teclado", "Fuente de poder"],
    quiz_answer: 0,
    challenge: "Averiguar cuánta memoria RAM en Gigabytes (GB) tiene instalada tu equipo actual.",
    common_errors: "Confundir el espacio en disco duro (Storage) con la memoria RAM de trabajo.",
    english_vocab: [
      { term: "Hardware", trans: "Componentes Físicos", ex: "The server has fast hardware." },
      { term: "RAM Memory", trans: "Memoria RAM", ex: "Power BI requires 8GB of RAM." },
      { term: "Storage", trans: "Almacenamiento", ex: "Save files to local storage." }
    ]
  },
  {
    id: "c0_03_os_files",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Clase 0.3: El Sistema Operativo y Organización de Archivos (.csv, .xlsx, .pbix, .sql, .py)",
    summary: "Aprende a navegar en Windows, gestionar carpetas, rutas absolutas y reconocer extensiones de archivos analíticos.",
    icon: "fa-folder-open",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Crear la estructura profesional de carpetas para un proyecto de analítica y gestionar sus extensiones.",
    concepts: ["Sistema Operativo (Windows)", "Archivos y Carpetas", "Extensiones de Archivos", "Rutas Absolutas vs Relativas", "Instalación de Apps"],
    intro: "El desorden de archivos es el enemigo #1 del analista. Hoy estructurarás tu espacio de trabajo profesional.",
    analogy: "💡 Analogía: Las carpetas son los cajones de un archivador; la extensión (.csv, .sql) es el código de color de la carpeta.",
    theory: `1. Sistema Operativo (Windows):
Es el programa maestro que administra los recursos del computador.

2. Extensiones Clave para Analistas de Datos:
- .csv: Archivo de texto separado por comas (universal e liviano).
- .xlsx: Libro de hojas de cálculo de Microsoft Excel.
- .pbix: Archivo de proyecto de Power BI Desktop.
- .sql: Script de consultas de base de datos SQL Server.
- .py: Archivo de código fuente de Python.`,
    business_case: "En DataCall, organizaremos los archivos de cada proyecto en 4 carpetas estándar: 01_SQL, 02_PowerBI, 03_Python y 04_Data.",
    step3_code: `ESTRUCTURA PROFESIONAL DE PROYECTO:
DataCall_Analytics/
  ├── 01_SQL/       (.sql)
  ├── 02_PowerBI/   (.pbix)
  ├── 03_Python/    (.py, .ipynb)
  └── 04_Data/      (.csv, .xlsx)`,
    guided_practice: [
      "1. Presiona Windows + E para abrir el Explorador de Archivos.",
      "2. Activa la casilla 'Extensiones de nombre de archivo' en la pestaña Vista.",
      "3. Crea la carpeta principal 'DataCall_Analytics' con sus 4 subcarpetas."
    ],
    individual_practice: "Identifica la extensión correcta para un script donde escribes consultas SELECT contra la base de datos.",
    solution_practice: "La extensión correcta es .sql.",
    quiz_question: "¿Qué extensión le corresponde a un archivo de informe de Power BI Desktop?",
    quiz_options: [".pbix", ".xlsx", ".docx", ".pdf"],
    quiz_answer: 0,
    challenge: "Crear la estructura de carpetas en tu escritorio y tomar una captura.",
    common_errors: "Dejar las extensiones ocultas en Windows, lo que causa confusiones con archivos de texto.",
    english_vocab: [
      { term: "File Extension", trans: "Extensión de Archivo", ex: "Always display file extensions." },
      { term: "Folder / Directory", trans: "Carpeta / Directorio", ex: "Create a new project folder." }
    ]
  },
  {
    id: "c0_04_internet_server",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Clase 0.4: Internet, Navegación y Arquitectura Cliente-Servidor",
    summary: "Entiende cómo viajan los datos por la red mediante el protocolo HTTP y la arquitectura Cliente-Servidor.",
    icon: "fa-network-wired",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Explicar cómo una herramienta cliente (SSMS/Navegador) solicita y recibe datos de un servidor distante (LuchoX12).",
    concepts: ["Internet y Navegadores", "URL, HTTP y HTTPS", "Cliente vs Servidor", "Petición (Request) y Respuesta (Response)"],
    intro: "Toda la infraestructura moderna de datos funciona conectando Clientes con Servidores remotos.",
    analogy: "💡 Analogía: En un restaurante, tú eres el Cliente que hace el pedido; el mesero es el protocolo HTTP que lleva la orden; la cocina central es el Servidor.",
    theory: `1. Arquitectura Cliente-Servidor:
- Cliente: La aplicación que usas en tu PC (Navegador Chrome, SSMS, Power BI).
- Servidor: Un equipo potente encendido 24/7 (ej: LuchoX12) que almacena la base de datos central.

2. Protocolo HTTP / HTTPS:
Las reglas de lenguaje en internet.
- Request (Petición): "Por favor dame la lista de clientes".
- Response (Respuesta): El servidor devuelve la lista con código de estado (200 OK).`,
    business_case: "Cuando en SSMS presionas F5, tu programa Cliente envía una consulta SQL al Servidor LuchoX12 y recibe la tabla resultante.",
    code_example: `CLIENTE (Tu PC / SSMS) ─── Consulta SQL ───► SERVIDOR (LuchoX12)
CLIENTE (Tu PC / SSMS) ◄─── Tabla de Datos ──── SERVIDOR (LuchoX12)`,
    guided_practice: [
      "1. Abre Google Chrome y presiona F12 para abrir las Herramientas de Desarrollador.",
      "2. Haz clic en la pestaña 'Network' (Red).",
      "3. Navega a un sitio web y observa cómo aparecen las peticiones HTTP."
    ],
    individual_practice: "¿Quién procesa las consultas masivas de datos, tu computador personal o el servidor remoto?",
    solution_practice: "El servidor remoto procesa los cálculos masivos y envía solo el resultado final a tu computador cliente.",
    quiz_question: "En nuestro entorno de laboratorio, ¿qué rol cumple el equipo denominado `LuchoX12`?",
    quiz_options: ["Servidor de Base de Datos SQL", "Navegador de internet", "Pantalla de cliente", "Teclado"],
    quiz_answer: 0,
    challenge: "Explicar el modelo cliente-servidor con tus propias palabras.",
    common_errors: "Pensar que toda la base de datos está guardada físicamente dentro del programa SSMS.",
    english_vocab: [
      { term: "Server", trans: "Servidor", ex: "Connect to the database server." },
      { term: "Client", trans: "Cliente", ex: "SSMS acts as a database client." }
    ]
  },
  {
    id: "c0_05_db_tables_api",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Clase 0.5: Bases de Datos, SGBD, Tablas, APIs y Formato JSON",
    summary: "Descubre qué es un SGBD como SQL Server, cómo se organizan las Tablas y cómo se intercambian datos en formato JSON a través de APIs.",
    icon: "fa-database",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Leer estructuras de tablas relacionales y entender objetos JSON de intercambio.",
    concepts: ["Base de Datos", "SGBD (SQL Server)", "Tablas, Filas y Columnas", "API (Interfaz)", "JSON (Pares Clave-Valor)"],
    intro: "Hoy conectarás los 3 pilares del intercambio de información: Bases de Datos, APIs web y formato JSON.",
    analogy: "💡 Analogía: Una base de datos es el gran archivo central; la API es la ventanilla de atención al cliente; JSON es el formulario estándar que llenas.",
    theory: `1. Base de Datos & SGBD:
Un SGBD (Sistema Gestor) como SQL Server administra la seguridad y rapidez de miles de tablas.

2. Estructura de Tablas:
- Filas (Registros): Cada entrada individual.
- Columnas (Campos): Atributos de esa entrada.

3. Formato JSON:
Formato de texto estructurado en pares "Clave": "Valor".
{
  "cliente_id": 101,
  "nombre": "Julieth Galvis",
  "ciudad": "Bogotá"
}`,
    business_case: "Las encuestas de satisfacción enviadas desde la app de los clientes llegan en JSON mediante una API y se guardan en la tabla `analytics.fact_encuestas`.",
    code_example: `{
  "llamada_id": 5001,
  "duracion_segundos": 240,
  "resultado": "Resuelta"
}`,
    guided_practice: [
      "1. Observa la estructura del objeto JSON anterior.",
      "2. Identifica las 3 claves: llamada_id, duracion_segundos y resultado.",
      "3. Comprende cómo se corresponden con las columnas de una tabla SQL."
    ],
    individual_practice: "Escribe un objeto JSON que represente a un agente de call center con nombre, turno y nivel.",
    solution_practice: '{\n  "nombre": "Carlos Mendoza",\n  "turno": "Mañana",\n  "nivel": "Senior"\n}',
    quiz_question: "¿Cómo se estructuran los datos dentro de un archivo o mensaje en formato JSON?",
    quiz_options: ["En pares de Clave : Valor entre llaves", "En párrafos sueltos", "En imágenes", "En fórmulas de Excel"],
    quiz_answer: 0,
    challenge: "Crear un JSON válido con 4 atributos de un producto.",
    common_errors: "Olvidar encerrar entre comillas dobles los nombres de las claves en JSON.",
    english_vocab: [
      { term: "Database", trans: "Base de Datos", ex: "SQL Server manages the database." },
      { term: "Key-Value Pair", trans: "Par Clave-Valor", ex: "JSON uses key-value pairs." }
    ]
  },
  {
    id: "c0_06_ide_terminal_git",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Clase 0.6: Entornos de Trabajo: IDE (VS Code), Terminal y Git/GitHub",
    summary: "Prepara tu entorno técnico: escribe código en VS Code, ejecuta comandos en la Terminal e introduce el control de versiones con Git y GitHub.",
    icon: "fa-code-branch",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Ejecutar comandos básicos en terminal y comprender la función de Git y GitHub para tu portafolio.",
    concepts: ["IDE y Editor de Código (VS Code)", "Terminal / Consola (CMD)", "Git (Control de Versiones)", "GitHub (Portafolio Nube)"],
    intro: "El IDE es tu taller de carpintería; la terminal es tu cuadro de mandos; GitHub es la vitrina pública de tu trabajo.",
    analogy: "💡 Analogía: Git es la cámara fotográfica que toma capturas de tu proyecto en cada avance; GitHub es Instagram donde publicas tus álbumes para que el mundo los vea.",
    theory: `1. VS Code (IDE):
Editor inteligente que resalta la sintaxis de colores y ayuda a detectar errores en Python y SQL.

2. Terminal (Consola de Comandos):
Interfaz de texto para dar órdenes directas al sistema operativo.
Comandos útiles: ` + "`dir`" + ` (listar archivos), ` + "`python --version`" + `.

3. Git vs GitHub:
- Git: Programa local en tu PC que guarda el historial de versiones de tus archivos.
- GitHub: Plataforma en la nube donde publicas tu portafolio público para reclutadores.`,
    business_case: "Todas las consultas SQL y scripts de Python del proyecto DataCall se guardarán con Git y se subirán a tu perfil público de GitHub.",
    code_example: `# Comandos básicos de terminal:
dir
python --version
git status`,
    guided_practice: [
      "1. Presiona Windows + R, escribe 'cmd' y presiona Enter para abrir la terminal.",
      "2. Escribe `dir` y presiona Enter para ver los archivos de tu carpeta actual.",
      "3. Escribe `cls` para limpiar la consola."
    ],
    individual_practice: "¿Cuál es la diferencia principal entre Git y GitHub?",
    solution_practice: "Git es la herramienta local en tu computador para guardar versiones; GitHub es el sitio web en la nube para alojar y mostrar tu portafolio público.",
    quiz_question: "¿Para qué sirve la plataforma GitHub en la carrera de un Data Analyst?",
    quiz_options: ["Para publicar y exhibir tu portafolio de proyectos de código ante reclutadores", "Para editar fotos", "Para enviar correos masivos", "Para jugar en línea"],
    quiz_answer: 0,
    challenge: "Crear tu cuenta gratuita en GitHub.com.",
    commonErrors: "Usar procesadores de texto como Microsoft Word para escribir programas o código SQL.",
    english_vocab: [
      { term: "Terminal", trans: "Terminal de Comandos", ex: "Run commands in the terminal." },
      { term: "Repository", trans: "Repositorio", ex: "Push your project to GitHub repository." }
    ]
  },
  {
    id: "c0_07_cloud_etl_architecture",
    phase: "Fase 0: Tech Base",
    cat: "fase0",
    title: "Clase 0.7: Infraestructura Cloud, ETL vs ELT, Data Warehouse y Arquitectura Medallón",
    summary: "Comprende dónde viven los datos empresariales en la Nube (Azure/AWS), el flujo ETL/ELT y las capas de calidad Bronze, Silver y Gold.",
    icon: "fa-layer-group",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Explicar la arquitectura de datos desde la extracción cruda hasta la capa gerencial de reportes.",
    concepts: ["Cloud Computing (Azure, AWS)", "ETL vs ELT", "Data Lake vs Data Warehouse", "Arquitectura Medallón (Bronze, Silver, Gold)"],
    intro: "Con esta clase cerrarás la Fase 0 comprendiendo cómo las grandes empresas organizan la información desde la recolección hasta los tableros gerenciales.",
    analogy: "💡 Analogía: El agua de ciudad: la fuente natural es el Data Lake (Bronze); la planta de tratamiento filtra el agua en la capa Silver; la botella de agua mineral lista para tomar es el Data Warehouse (Gold).",
    theory: `1. Cloud Computing (Nube):
Alquilar servidores y bases de datos por internet (Microsoft Azure, AWS) en lugar de comprar equipos físicos.

2. Proceso ETL:
- Extract (Extraer): Traer datos desde las fuentes de origen.
- Transform (Transformar): Limpiar nulos, duplicados y corregir formatos.
- Load (Cargar): Guardar los datos limpios en el Data Warehouse.

3. Arquitectura Medallón:
- Capa Bronze (Bronce): Datos crudos sin modificar.
- Capa Silver (Plata): Datos limpios, filtrados y validados.
- Capa Gold (Oro): Datos agregados en KPIs y modelos estrella listos para dashboards.`,
    business_case: "En DataCall, las llamadas crudas llegan a la capa Bronze; las limpiamos a la capa Silver en SQL Server; y creamos los KPIs de gerencia en la capa Gold en Power BI.",
    code_example: `ARQUITECTURA DE DATOS DATACALL:
[Fuentes Crudas] ➔ BRONZE ➔ ETL Limpieza ➔ SILVER (DataCareer SQL) ➔ GOLD (Power BI Dashboards)`,
    guided_practice: [
      "1. Repasa visualmente las 3 capas: Bronze ➔ Silver ➔ Gold.",
      "2. Identifica en cuál capa ubicarías un gráfico ejecutivo para el Gerente General (Gold)."
    ],
    individual_practice: "¿Qué diferencia existe entre un Data Lake y un Data Warehouse?",
    solution_practice: "El Data Lake almacena datos crudos desorganizados de cualquier tipo; el Data Warehouse guarda datos estructurados, limpios y optimizados para consultas analíticas.",
    quiz_question: "¿Qué capa de la arquitectura medallón contiene los indicadores KPIs finales listos para ser visualizados en Power BI?",
    quiz_options: ["Capa Gold (Oro)", "Capa Bronze (Bronce)", "Capa Plata", "Capa Madera"],
    quiz_answer: 0,
    challenge: "Dibujar la arquitectura de datos de DataCall en una hoja de papel.",
    common_errors: "Intentar graficar indicadores de negocio directamente desde datos crudos de la capa Bronze sin limpiar.",
    english_vocab: [
      { term: "Cloud Computing", trans: "Computación en la Nube", ex: "Azure is a cloud computing platform." },
      { term: "Data Warehouse", trans: "Almacén / Bodega de Datos", ex: "The Data Warehouse stores Gold tables." }
    ]
  },

  // ==========================================
  // FASE 1 — DATA & LOGICAL THINKING (5 Clases de 1h)
  // ==========================================
  {
    id: "c1_01_data_info_struct",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Clase 1.1: Fundamentos de Datos: De casillas a información estructurada",
    summary: "Aprende a transformar valores sueltos en información con sentido mediante matrices de filas y columnas.",
    icon: "fa-border-all",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Estructurar cualquier conjunto de eventos en tablas compuestas por registros y campos.",
    concepts: ["Dato vs Información", "Registros (Filas)", "Campos (Columnas)", "Estructura Matricial"],
    intro: "Hoy entrenarás tu cerebro para ver el mundo en forma de tablas estructuradas.",
    analogy: "💡 Analogía: El tablero de ajedrez o de Batalla Naval; ubicas cada pieza exactamente en la intersección de una Columna (Letra) y una Fila (Número).",
    theory: `1. Filas (Registros):
Cada renglón horizontal representa un evento o sujeto único (Ejemplo: Una llamada realizada o un cliente registrado).

2. Columnas (Campos):
Cada columna vertical representa un atributo específico de ese evento (Ejemplo: Nombre, Ciudad, Tiempo de Espera).`,
    business_case: "La tabla `analytics.fact_llamadas` de DataCall organiza 50,000 llamadas en 50,000 filas y 8 columnas.",
    code_example: `TABLA ESTRUCTURADA:
| llamada_id | cliente_id | duracion_seg | resultado |
|------------|------------|--------------|-----------|
| 1001       | 45         | 180          | Resuelta  |`,
    guided_practice: ["1. Diseña en papel una tabla para registrar los gastos de transporte de la semana."],
    individual_practice: "Si una empresa tiene 1,200 empleados, ¿cuántas filas tendrá su tabla de empleados?",
    solution_practice: "Tendrá exactamente 1,200 filas (una por cada empleado).",
    quiz_question: "¿Qué representa cada fila horizontal en una tabla de base de datos?",
    quiz_options: ["Un registro u ocurrencia única", "El título de la tabla", "El tipo de dato", "Una columna"],
    quiz_answer: 0,
    challenge: "Estructurar en filas y columnas el inventario de tu cocina.",
    common_errors: "Mezclar conceptos diferentes en una misma columna.",
    english_vocab: [
      { term: "Row / Record", trans: "Fila / Registro", ex: "Each row represents a customer call." },
      { term: "Column / Field", trans: "Columna / Campo", ex: "Select the city field." }
    ]
  },
  {
    id: "c1_02_data_types_null",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Clase 1.2: Tipos de Datos y Ausencia de Información (NULL)",
    summary: "Conoce los tipos de datos universales (Texto, Enteros, Decimales, Fechas, Booleanos) y domina el valor especial NULL.",
    icon: "fa-ban",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Asignar el tipo de dato correcto a cada columna y manejar casillas sin información (NULL).",
    concepts: ["Texto (String)", "Entero (INT)", "Decimal (FLOAT)", "Fecha (DATE)", "Booleano (BOOL)", "NULL (Casilla Vacía)"],
    intro: "Asignar el tipo de dato equivocado rompe los cálculos. Hoy aprenderás a clasificarlos perfectamente.",
    analogy: "💡 Analogía: Clasificar la ropa antes de lavar: no mezclas prendas de lana con zapatillas; en datos no sumas palabras con fechas.",
    theory: `1. Tipos de Datos Fundamentales:
- Texto (String): Nombres, ciudades, comentarios. Ej: 'Julieth'.
- Entero (INT): Cantidades sin decimales. Ej: 24 años, 300 segundos.
- Decimal (FLOAT): Valores continuos. Ej: $150.50, 4.5 estrellas.
- Fecha (DATE): Momentos en el tiempo. Ej: '2025-08-19'.
- Booleano: Verdadero o Falso (True/False).

2. El Valor NULL:
Significa que el dato es DESCONOCIDO o NO FUE PROPORCIONADO.
- NULL NO es igual a cero (0).
- NULL NO es igual a texto vacío ('').`,
    business_case: "Si un cliente no responde la encuesta de satisfacción, la columna `satisfaccion` queda como NULL. El promedio ignora los nulos sin distorsionar la nota real.",
    code_example: `PROMEDIO CON NULL:
Valores: [5, 5, NULL] ➔ Promedio de respuestas reales = (5 + 5) / 2 = 5.0 (¡No es 3.3!)`,
    guided_practice: ["1. Clasifica el tipo de dato de: 'Bogotá', 25000, 2025-12-31, True."],
    individual_practice: "¿Por qué no debemos reemplazar automáticamente los valores NULL por el número 0?",
    solution_practice: "Porque 0 es un valor numérico real (ej: 0 llamadas), mientras que NULL significa que el cliente no respondió o no se tiene el dato.",
    quiz_question: "¿Qué representa el valor NULL en una base de datos?",
    quiz_options: ["Ausencia de información o dato desconocido", "El número cero", "Un error de sistema", "Un texto en blanco"],
    quiz_answer: 0,
    challenge: "Explicar la diferencia entre 0 y NULL a un compañero.",
    common_errors: "Confundir el número cero con la casilla vacía NULL.",
    english_vocab: [
      { term: "Data Type", trans: "Tipo de Dato", ex: "Assign the correct data type." },
      { term: "Null Value", trans: "Valor Nulo / Vacío", ex: "NULL indicates a missing value." }
    ]
  },
  {
    id: "c1_03_identifiers_comparisons",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Clase 1.3: Identificadores Únicos (IDs) y Comparaciones Lógicas",
    summary: "Comprende por qué cada fila necesita una clave única (ID) y domina los operadores de comparación (=, >, <, >=, <=, <>).",
    icon: "fa-equals",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Evaluar condiciones verdaderas o falsas sobre registros e identificar filas unívocamente.",
    concepts: ["IDs (Identificadores)", "Valores Únicos", "Operadores de Comparación (=, >, <, >=, <=, <>)"],
    intro: "Para filtrar datos primero debes aprender a comparar valores numéricos y de texto.",
    analogy: "💡 Analogía: Tu número de Cédula de Ciudadanía; en el país hay miles de personas con tu mismo nombre, pero solo tú tienes tu número de documento.",
    theory: `1. Identificador Único (ID):
Una columna numérica irrepetible que identifica exactamente una fila.

2. Operadores de Comparación:
- Igual a: =
- Mayor que: >
- Menor que: <
- Mayor o igual a: >=
- Menor o igual a: <=
- Diferente de: <> (o !=)`,
    business_case: "Buscamos llamadas en DataCall donde `tiempo_espera_segundos > 120` para enviar una alerta de servicio.",
    code_example: `EVALUACIÓN DE REGLAS:
espera = 150 ➔ (espera > 120) ➔ VERDADERO (True)
edad = 24 ➔ (edad >= 30) ➔ FALSO (False)`,
    guided_practice: ["1. Evalúa si 200 > 150 (Verdadero).", "2. Evalúa si 'Cali' = 'Bogotá' (Falso)."],
    individual_practice: "Escribe la condición lógica para encontrar agentes cuyo nivel sea diferente de 'Junior'.",
    solution_practice: "La condición es: `nivel <> 'Junior'` (o `nivel != 'Junior'`).",
    quiz_question: "¿Qué operador representa 'Diferente de' en SQL y lógica de datos?",
    quiz_options: ["<>", "==", "&&", "++"],
    quiz_answer: 0,
    challenge: "Resolver 5 ejercicios de comparaciones lógicas.",
    common_errors: "Confundir el operador mayor que (>) con menor que (<).",
    english_vocab: [
      { term: "Unique Identifier (ID)", trans: "Identificador Único", ex: "Each customer has a unique ID." },
      { term: "Comparison Operator", trans: "Operador de Comparación", ex: "Evaluate conditions using comparison operators." }
    ]
  },
  {
    id: "c1_04_boolean_logic_and_or",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Clase 1.4: Condiciones Múltiples y Lógica Booleana (AND, OR, NOT)",
    summary: "Combina múltiples criterios de negocio utilizando los operadores lógicos AND, OR y NOT.",
    icon: "fa-diagram-project",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Construir filtros complejos combinando múltiples reglas condicionales.",
    concepts: ["Lógica Booleana", "Operador AND", "Operador OR", "Operador NOT", "Condiciones Compuestas"],
    intro: "En la vida real las preguntas de negocio requieren cumplir más de una regla a la vez.",
    analogy: "💡 Analogía: Salir de fiesta: Entras a la discoteca si eres mayor de edad (18) AND llevas tu documento. En cambio, tomas taxi si llueve OR está muy oscuro.",
    theory: `1. Operadores Lógicos:
- AND (Y): Exige que AMBAS condiciones sean Verdaderas.
- OR (O): Requiere que al menos UNA condición sea Verdadera.
- NOT (NO): Invierte el valor (Verdadero se convierte en Falso).`,
    business_case: "Buscamos clientes VIP prioritarios en DataCall: `ciudad = 'Bogotá' AND tipo_cliente = 'Premium'`.",
    code_example: `TABLA DE VERDAD:
Verdadero AND Verdadero ➔ VERDADERO
Verdadero AND Falso     ➔ FALSO
Verdadero OR Falso      ➔ VERDADERO`,
    guided_practice: [
      "1. Evalúa: (espera > 120 AND ciudad = 'Cali') con espera=150 y ciudad='Bogotá' ➔ FALSO."
    ],
    individual_practice: "Escribe la condición lógica para seleccionar llamadas del turno 'Noche' OR con tiempo de espera mayor a 200 segundos.",
    solution_practice: "La condición es: `turno = 'Noche' OR tiempo_espera_segundos > 200`.",
    quiz_question: "Si utilizas el operador AND entre dos condiciones, ¿cuándo se cumple el resultado final?",
    quiz_options: ["Únicamente cuando AMBAS condiciones son Verdaderas", "Cuando al menos una se cumple", "Nunca", "Cuando ambas son Falsas"],
    quiz_answer: 0,
    challenge: "Crear un filtro compuesto con 3 condiciones.",
    common_errors: "Usar OR cuando la regla de negocio exige que se cumplan ambas condiciones obligatoriamente (AND).",
    english_vocab: [
      { term: "Logical Condition", trans: "Condición Lógica", ex: "Combine rules with logical AND/OR." }
    ]
  },
  {
    id: "c1_05_analytical_thinking_kpis",
    phase: "Fase 1: Lógica",
    cat: "fase1",
    title: "Clase 1.5: Pensamiento Analítico, Métricas, KPIs y Preguntas de Negocio",
    summary: "Aprende a transformar problemas cotidianos en preguntas de datos y diferencia métricas sueltas de KPIs con metas.",
    icon: "fa-lightbulb",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Convertir un problema cualitativo de negocio en una serie de preguntas de datos accionables.",
    concepts: ["Pensamiento Analítico", "Métricas vs KPIs", "Dimensiones vs Medidas", "Preguntas de Negocio ➔ Preguntas de Datos"],
    intro: "Con esta clase cerrarás la Fase 1 dominando la mentalidad de resolución de problemas basada en evidencias.",
    analogy: "💡 Analogía: El médico general: Examina los síntomas del paciente (preguntas), pide exámenes de laboratorio (datos) y receta el tratamiento (decisión de negocio).",
    theory: `1. Métrica vs KPI:
- Métrica: Un número cuantitativo suelto (Ej: Total de llamadas = 50,000).
- KPI (Key Performance Indicator): Una métrica crítica comparada contra una meta (Ej: Tasa de Abandono < 5%).

2. Convertir Problemas en Datos:
- Problema: "Los clientes están molestos".
- Pregunta de Datos: "¿El tiempo de espera promedio aumentó este mes en alguna ciudad específica?"`,
    business_case: "Caso DataCall: El KPI principal del equipo es lograr un Tiempo Promedio de Operación (AHT) inferior a 300 segundos.",
    code_example: `DESGLOSE ANALÍTICO:
PROBLEMA ➔ PREGUNTA DE DATOS ➔ FILTRO DE TABLA ➔ HALLAZGO ➔ DECISIÓN`,
    guided_practice: ["1. Desglosa un problema de negocio sencillo usando los 5 pasos del pensamiento analítico."],
    individual_practice: "Propón 2 preguntas de datos para investigar por qué las ventas disminuyeron en la ciudad de Medellín.",
    solution_practice: "Pregunta 1: ¿Disminuyó el número de llamadas de ventas atendidas? Pregunta 2: ¿Aumentó el tiempo de espera promedio en Medellín?",
    quiz_question: "¿Qué convierte a una métrica cualquiera en un KPI?",
    quiz_options: ["Estar vinculada a un objetivo estratégico y meta de negocio", "Tener muchos decimales", "Ser un número muy grande", "Estar escrita en color verde"],
    quiz_answer: 0,
    challenge: "Definir 2 KPIs estratégicos para una tienda de café.",
    common_errors: "Confundir una métrica cualquiera con un KPI de rendimiento estratégico.",
    english_vocab: [
      { term: "Key Performance Indicator (KPI)", trans: "Indicador Clave de Rendimiento", ex: "Track operational KPIs daily." },
      { term: "Analytical Mindset", trans: "Mentalidad Analítica", ex: "Apply an analytical mindset to business questions." }
    ]
  },

  // ==========================================
  // FASES 2 A 16 (RE-MAPEADAS EN CLASES COMPLETAS DE 1 HORA)
  // ==========================================
  {
    id: "c2_01_ssms_connect",
    phase: "Fase 2: SQL Fundamentals",
    cat: "sql",
    title: "Clase 2.1: Primer contacto con SQL Server, SSMS y Navegación",
    summary: "Abre SSMS, conéctate al servidor LuchoX12, navega por las bases de datos y ejecuta tu primera consulta USE con F5.",
    icon: "fa-database",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Conectarte de forma autónoma al servidor de la empresa y preparar el entorno de trabajo en SSMS.",
    concepts: ["¿Qué es SQL?", "SQL Server", "SSMS", "Conexión a LuchoX12", "Sentencia USE", "Tecla F5"],
    intro: "Bienvenida a tu primera clase práctica de SQL. Hoy ingresarás al servidor real de la empresa.",
    analogy: "💡 Analogía: Abrir la banca en línea de tu banco para consultar tu saldo bancario.",
    theory: `1. SQL Server Management Studio (SSMS):
El programa oficial de Microsoft donde los analistas escriben consultas SQL.

2. Pasos de Conexión:
- Servidor: LuchoX12
- Autenticación: Windows
- Ejecutar consulta: Tecla F5 (o botón verde ! Ejecutar).

3. Fijar la Base de Datos:
USE DataCareer; indica que trabajaremos sobre la base de la empresa.`,
    business_case: "Todos los reportes diarios en DataCall inician abriendo SSMS y conectándote al servidor LuchoX12.",
    code_example: `USE DataCareer;

SELECT '¡Hola SSMS! Soy Julieth y seré Data Analyst' AS Bienvenida;`,
    guided_practice: [
      "1. Abre el programa SQL Server Management Studio (SSMS).",
      "2. En Nombre del servidor escribe: LuchoX12 y haz clic en Conectar.",
      "3. Abre una ventana de Nueva Consulta (Ctrl + N), escribe USE DataCareer; y presiona F5."
    ],
    individual_practice: "Escribe una consulta que seleccione el nombre de la base de datos actual usando SELECT DB_NAME();",
    solution_practice: "USE DataCareer;\nSELECT DB_NAME() AS Base_Actual;",
    quiz_question: "¿Cuál es la tecla de teclado para ejecutar una consulta SQL en SSMS?",
    quiz_options: ["F5 (o Ctrl + E)", "F12", "Enter", "Espacio"],
    quiz_answer: 0,
    challenge: "Aprender el atajo Ctrl + N para abrir ventanas de consulta en SSMS.",
    common_errors: "Ejecutar consultas teniendo seleccionada la base de datos 'master' por error.",
    english_vocab: [
      { term: "Query", trans: "Consulta SQL", ex: "Execute the query using F5." },
      { term: "Server Connection", trans: "Conexión al Servidor", ex: "Establish a server connection." }
    ]
  },
  {
    id: "c2_02_select_from_alias",
    phase: "Fase 2: SQL Fundamentals",
    cat: "sql",
    title: "Clase 2.2: Primeras Consultas SQL: SELECT, FROM, *, Aliases, DISTINCT y TOP",
    summary: "Domina la extracción de datos: elige columnas específicas, asigna nombres claros con AS, elimina duplicados con DISTINCT y limita muestras con TOP.",
    icon: "fa-eye",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Consultar cualquier tabla relacional seleccionando únicamente las columnas necesarias, renombrándolas y limitando filas.",
    concepts: ["SELECT", "FROM", "Comodín *", "Columnas específicas", "Alias (AS)", "DISTINCT", "TOP"],
    intro: "Hoy aprenderás a pedirle exactamente los datos que necesitas a la base de datos sin sobrecargar la memoria.",
    analogy: "💡 Analogía: Pedir comida en el restaurante: indicas los platos del menú (SELECT) traídos de la cocina (FROM).",
    theory: `1. Estrutura Básica:
SELECT columna1, columna2 FROM esquema.tabla;

2. Elementos Clave:
- *: Trae TODAS las columnas (usar solo para explorar).
- AS NuevoNombre: Asigna un alias o etiqueta limpia a la columna.
- DISTINCT: Elimina valores duplicados del resultado.
- TOP N: Muestra solo las primeras N filas.`,
    business_case: "Extraer una muestra limpia de los 10 primeros clientes de DataCall con sus nombres y ciudades.",
    code_example: `USE DataCareer;

SELECT TOP 10 
    cliente_id AS ID_Cliente,
    nombre AS Nombre_Cliente,
    ciudad AS Ciudad
FROM analytics.dim_cliente;

SELECT DISTINCT ciudad FROM analytics.dim_cliente;`,
    guided_practice: [
      "1. En SSMS escribe la consulta para traer los nombres y ciudades de dim_cliente.",
      "2. Asigna alias en español a las columnas.",
      "3. Ejecuta con F5 y observa el resultado."
    ],
    individual_practice: "Escribe una consulta que obtenga los turnos de trabajo únicos (DISTINCT) que existen en la tabla analytics.dim_agente.",
    solution_practice: "SELECT DISTINCT turno FROM analytics.dim_agente;",
    quiz_question: "¿Qué hace la palabra clave DISTINCT en una sentencia SELECT?",
    quiz_options: ["Elimina los valores duplicados del resultado de la consulta", "Suma los valores", "Ordena de mayor a menor", "Borra las filas de la tabla"],
    quiz_answer: 0,
    challenge: "Obtener las primeras 5 llamadas de la tabla fact_llamadas.",
    common_errors: "Olvidar colocar comas entre los nombres de las columnas en la cláusula SELECT.",
    english_vocab: [
      { term: "Select Statement", trans: "Sentencia SELECT", ex: "Write a SELECT statement." },
      { term: "Alias", trans: "Alias / Nombre Temporal", ex: "Assign a column alias with AS." }
    ]
  },
  {
    id: "c2_03_where_filtering",
    phase: "Fase 2: SQL Fundamentals",
    cat: "sql",
    title: "Clase 2.3: Filtrando Datos con SQL: Cláusula WHERE y Operadores Lógicos",
    summary: "Filtra registros específicos combinando la cláusula WHERE con operadores de comparación y conectores AND, OR, NOT.",
    icon: "fa-filter",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Filtrar tablas masivas para extraer únicamente las filas que responden a un criterio de negocio.",
    concepts: ["Cláusula WHERE", "Operadores de Comparación (=, >, <, >=, <=, <>)", "Conectores Lógicos (AND, OR, NOT)"],
    intro: "La cláusula WHERE es el colador del analista de datos. Hoy aprenderás a filtrar con precisión quirúrgica.",
    analogy: "💡 Analogía: Aplicar filtros en MercadoLibre por precio, marca y ciudad para ver solo los productos que deseas.",
    theory: `1. Cláusula WHERE:
Se coloca inmediatamente después del FROM para establecer reglas de filtrado de filas.

2. Regla de Comillas:
- Textos y Fechas: Siempre entre comillas simples ('Bogotá', '2025-08-19').
- Números: Directamente sin comillas (120, 300).`,
    business_case: "Filtrar únicamente las llamadas operacionales donde el tiempo de espera superó los 120 segundos en la ciudad de Bogotá.",
    code_example: `USE DataCareer;

SELECT llamada_id, cliente_id, tiempo_espera_segundos, canal
FROM analytics.fact_llamadas
WHERE tiempo_espera_segundos > 120 AND canal = 'Telefónico';`,
    guided_practice: [
      "1. Copia el código SQL del ejemplo en SSMS.",
      "2. Ejecuta con F5 y verifica que todas las esperas sean mayores a 120 segundos."
    ],
    individual_practice: "Filtra los clientes de la tabla dim_cliente que vivan en 'Medellín' AND tengan un tipo de cliente 'Premium'.",
    solution_practice: "SELECT * FROM analytics.dim_cliente WHERE ciudad = 'Medellín' AND tipo_cliente = 'Premium';",
    quiz_question: "¿Cómo deben delimitarse los valores de texto dentro de una condición WHERE?",
    quiz_options: ["Entre comillas simples ('Texto')", "Sin comillas", "Entre corchetes", "Con comillas dobles"],
    quiz_answer: 0,
    challenge: "Filtrar llamadas con espera > 180s O duración > 500s.",
    common_errors: "Olvidar incluir las comillas simples en valores de texto dentro de WHERE.",
    english_vocab: [
      { term: "Where Clause", trans: "Cláusula WHERE", ex: "Apply a WHERE clause to filter rows." }
    ]
  },

  // RESTO DE FASES (3 A 16) RE-MAPEADAS EN CLASES COMPLETAS CON LA NUEVA ESTRUCTURA Y NAVEGACIÓN ABIERTA
  {
    id: "c3_01_aggregations_groupby",
    phase: "Fase 3: SQL Intermediate",
    cat: "sql",
    title: "Clase 3.1: Calculando Métricas y KPIs: Agregaciones, GROUP BY y HAVING",
    summary: "Resume miles de filas en indicadores numéricos consolidados (COUNT, SUM, AVG, MIN, MAX) agrupados por categorías con GROUP BY y HAVING.",
    icon: "fa-chart-pie",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Construir tablas resumidas de KPIs gerenciales agrupadas por canales o ciudades.",
    concepts: ["Agregaciones (COUNT, SUM, AVG, MIN, MAX)", "GROUP BY simple y múltiple", "HAVING"],
    intro: "Los gerentes no leen 50,000 filas; leen resúmenes ejecutivos. Hoy aprenderás a agrupar datos masivos.",
    analogy: "💡 Analogía: Separar las monedas de tu alcancía en montoncitos de $100, $200 y $500 para contar el total de cada montón.",
    theory: `1. Funciones de Agregación:
- COUNT(*): Cuenta filas.
- SUM(col): Suma montos numéricos.
- AVG(col): Calcula el promedio.
- MIN() / MAX(): Mínimo y máximo.

2. GROUP BY:
Agrupa las filas por una categoría.

3. HAVING:
Filtra los resultados DESPUÉS de agrupar (a diferencia de WHERE).`,
    business_case: "Calcular el volumen total de llamadas y el tiempo promedio de duración agrupado por canal de atención en DataCall.",
    code_example: `USE DataCareer;

SELECT 
    canal,
    COUNT(*) AS Total_Llamadas,
    AVG(duracion_segundos) AS Duracion_Promedio_Seg
FROM analytics.fact_llamadas
GROUP BY canal
HAVING COUNT(*) > 1000
ORDER BY Total_Llamadas DESC;`,
    guided_practice: ["1. Copia la consulta agrupada en SSMS.", "2. Ejecuta F5 y analiza las métricas por canal."],
    individual_practice: "Agrupa las encuestas por calificación de satisfacción y cuenta cuántas encuestas recibió cada nota.",
    solution_practice: "SELECT satisfaccion, COUNT(*) AS Total FROM analytics.fact_encuestas GROUP BY satisfaccion ORDER BY satisfaccion DESC;",
    quiz_question: "¿Qué instrucción de SQL permite calcular métricas agregadas por categorías?",
    quiz_options: ["GROUP BY", "ORDER BY", "WHERE", "DISTINCT"],
    quiz_answer: 0,
    challenge: "Filtrar grupos con HAVING AVG(duracion_segundos) > 200.",
    common_errors: "Incluir columnas sueltas en el SELECT que no están dentro del GROUP BY.",
    english_vocab: [
      { term: "Aggregation", trans: "Agregación", ex: "Calculate metric aggregations." },
      { term: "Group By Clause", trans: "Cláusula GROUP BY", ex: "Group records by category." }
    ]
  },
  {
    id: "c3_02_joins_relations",
    phase: "Fase 3: SQL Intermediate",
    cat: "sql",
    title: "Clase 3.2: Uniendo Tablas Relacionales: Primary Keys, Foreign Keys, INNER y LEFT JOIN",
    summary: "Conecta tablas relacionales usando claves primarias y foráneas mediante INNER JOIN y LEFT JOIN.",
    icon: "fa-link",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Cruzar tablas relacionales para mostrar nombres reales en lugar de códigos numéricos de IDs.",
    concepts: ["Primary Key (PK)", "Foreign Key (FK)", "Relaciones", "INNER JOIN", "LEFT JOIN", "Errores de cruce"],
    intro: "Las bases de datos dividen la información en tablas. Hoy aprenderás a unirlas como un rompecabezas.",
    analogy: "💡 Analogía: Cruzar la lista de invitados a una boda con la lista de mesas usando el número de boleto.",
    theory: `1. Claves Relacionales:
- Primary Key (PK): Clave única de la tabla dimensión.
- Foreign Key (FK): Clave foránea en la tabla de hechos.

2. Tipos de JOIN:
- INNER JOIN: Devuelve solo las filas con coincidencia exacta en ambas tablas.
- LEFT JOIN: Conserva TODAS las filas de la tabla izquierda, coincidan o no.`,
    business_case: "Reemplazar los IDs de clientes y agentes por sus nombres reales en el reporte de llamadas de DataCall.",
    code_example: `USE DataCareer;

SELECT TOP 15
    ll.llamada_id,
    c.nombre AS Nombre_Cliente,
    c.ciudad AS Ciudad_Cliente,
    a.nombre AS Nombre_Agente
FROM analytics.fact_llamadas ll
INNER JOIN analytics.dim_cliente c ON ll.cliente_id = c.cliente_id
INNER JOIN analytics.dim_agente a ON ll.agente_id = a.agente_id;`,
    guided_practice: ["1. Pega la consulta con JOINs en SSMS.", "2. Ejecuta F5 y verifica la unión de tablas."],
    individual_practice: "Realiza un LEFT JOIN entre clientes y ventas para identificar clientes que nunca han realizado una compra.",
    solution_practice: "SELECT c.nombre FROM analytics.dim_cliente c LEFT JOIN analytics.fact_ventas v ON c.cliente_id = v.cliente_id WHERE v.venta_id IS NULL;",
    quiz_question: "¿Qué tipo de JOIN conserva todos los registros de la primera tabla sin importar si tienen coincidencia?",
    quiz_options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"],
    quiz_answer: 0,
    challenge: "Unir 3 tablas relacionales en una sola consulta.",
    common_errors: "Olvidar la condición ON de enlace entre las claves PK y FK.",
    english_vocab: [
      { term: "Inner Join", trans: "Unión Interna", ex: "Combine records with INNER JOIN." },
      { term: "Foreign Key", trans: "Clave Foránea", ex: "Link tables using the foreign key." }
    ]
  },

  // FASE 5: EXCEL FOR DATA ANALYSIS
  {
    id: "c5_01_excel_data_foundations",
    phase: "Fase 5: Excel Analyst",
    cat: "excel",
    title: "Clase 5.1: Fundamentos de Excel para Data: Tablas, Limpieza y Fórmulas",
    summary: "Domina la interfaz de Excel para analistas: Tablas estructuradas (Ctrl+T), fórmulas (SUM, AVERAGE, COUNT, IF, SUMIF) y limpieza de texto.",
    icon: "fa-file-excel",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Formatear conjuntos de datos como tablas oficiales, limpiar textos y aplicar condicionales en Excel.",
    concepts: ["Formato de Tabla (Ctrl+T)", "Fórmulas Fundamentales", "Funciones Condicionales (IF, SUMIF, COUNTIF)", "Limpieza de Texto (ESPACIOS, NOMPROPIO)"],
    intro: "Excel sigue siendo la herramienta #1 de análisis rápido en las empresas. Hoy la usarás como una profesional.",
    analogy: "💡 Analogía: Organizar los utensilios de cocina en gavetas etiquetadas antes de empezar a cocinar.",
    theory: `1. Formato de Tabla (Ctrl + T):
Transforma un rango plano en una tabla con referencias estructuradas.

2. Funciones Clave:
- =SI(condicion; valor_verdadero; valor_falso)
- =SUMAR.SI(rango; criterio; rango_suma)
- =ESPACIOS(texto): Elimina espacios dobles sobrantes.`,
    business_case: "Limpiar la lista de clientes descargada en Excel y etiquetar con 'Alerta' a quienes esperaron más de 120s.",
    code_example: `=SI(C2 > 120; "Alerta Espera"; "Normal")
=SUMAR.SI(Clientes[Ciudad]; "Bogotá"; Clientes[Ventas])`,
    guided_practice: ["1. Abre Excel.", "2. Convierte un rango de datos a Tabla oficial con Ctrl + T.", "3. Aplica la fórmula condicional =SI()."],
    individual_practice: "Escribe la fórmula en Excel para contar cuántas llamadas del canal 'Telefónico' se registraron.",
    solution_practice: "=CONTAR.SI(Llamadas[Canal]; 'Telefónico')",
    quiz_question: "¿Qué atajo de teclado convierte un rango normal de datos en una Tabla Oficial en Excel?",
    quiz_options: ["Ctrl + T (o Ctrl + Q)", "Ctrl + C", "Alt + F4", "Ctrl + Z"],
    quiz_answer: 0,
    challenge: "Crear una tabla formateada con referencias estructuradas.",
    common_errors: "Trabajar sobre rangos planos sin formato de tabla oficial.",
    english_vocab: [
      { term: "Spreadsheet", trans: "Hoja de Cálculo", ex: "Clean the dataset in Excel spreadsheet." }
    ]
  },

  // FASE 7: POWER BI
  {
    id: "c7_01_pbi_foundations_dashboard",
    phase: "Fase 7: Power BI",
    cat: "bi",
    title: "Clase 7.1: Primer contacto con Power BI Desktop: Importación, Power Query y Dashboards",
    summary: "Conecta Power BI Desktop a SQL Server LuchoX12, limpia datos en Power Query y construye tu primer dashboard interactivo.",
    icon: "fa-chart-column",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Conectar Power BI a bases de datos relacionales y diseñar tableros de control ejecutivos.",
    concepts: ["Power BI Desktop", "Obtener Datos de SQL Server", "Power Query (Limpieza)", "Visualizaciones (Cards, Charts, Slicers)", "Diseño e Interactividad"],
    intro: "Hoy darás el salto a Business Intelligence creando tu primer tablero gerencial en Power BI.",
    analogy: "💡 Analogía: Diseñar el tablero digital de instrumentos de un auto de carreras.",
    theory: `1. Flujo en Power BI:
Obtener Datos ➔ Transformar en Power Query ➔ Vista de Modelo ➔ Vista de Informe (Dashboards).

2. Elementos Visuales Principales:
- Tarjetas (Cards): Muestran un único KPI numérico en gigante.
- Gráficos de Barras / Líneas: Tendencias y comparaciones.
- Segmentadores (Slicers): Filtros dinámicos interactivos.`,
    business_case: "Construir el dashboard de operaciones de DataCall mostrando el total de llamadas, esperas y satisfacción por ciudad.",
    code_example: `PASOS EN POWER BI:
1. Obtener datos ➔ SQL Server ➔ LuchoX12 ➔ DataCareer.
2. Transformar en Power Query ➔ Cerrar y Aplicar.
3. Arrastrar Tarjetas, Gráficos y Segmentadores al lienzo.`,
    guided_practice: ["1. Abre Power BI Desktop.", "2. Conéctate al servidor.", "3. Diseña una tarjeta con el total de llamadas."],
    individual_practice: "¿Cuál es el componente visual ideal para mostrar una sola métrica principal como el Total de Ventas?",
    solution_practice: "La Tarjeta Visual (Card).",
    quiz_question: "¿Qué herramienta interna de Power BI se encarga de la limpieza y transformación de datos?",
    quiz_options: ["Power Query", "Paint", "Excel", "WordArt"],
    quiz_answer: 0,
    challenge: "Guardar tu primer informe `.pbix` en la carpeta 02_PowerBI.",
    common_errors: "Construir gráficos antes de verificar la limpieza de los datos en Power Query.",
    english_vocab: [
      { term: "Dashboard", trans: "Tablero de Control", ex: "Design an interactive Power BI dashboard." }
    ]
  },

  // FASE 9: PYTHON FUNDAMENTALS
  {
    id: "c9_01_python_first_steps",
    phase: "Fase 9: Python Base",
    cat: "python",
    title: "Clase 9.1: Mis Primeros Programas en Python: Variables, print e if/else",
    summary: "Escribe tu primer script en Python desde cero absoluto: usa VS Code, crea variables, imprime con print() y toma decisiones condicionales.",
    icon: "fa-brands fa-python",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Escribir y ejecutar scripts autónomos de Python en VS Code que evalúen reglas condicionales.",
    concepts: ["¿Qué es Python?", "VS Code", "Archivos .py", "Función print()", "Variables y Tipos", "Condicionales (if / elif / else)"],
    intro: "Bienvenida a la programación. No asumiremos ningún conocimiento previo; aprenderás paso a paso.",
    analogy: "💡 Analogía: Escribir una lista de instrucciones claras para un asistente que las ejecuta exactamente en orden.",
    theory: `1. Conceptos Básicos:
- print("Texto"): Muestra un mensaje en consola.
- Variables: Cajas con nombre para guardar valores (` + "`nombre = 'Julieth'`" + `, ` + "`espera = 150`" + `).

2. Condicionales:
if espera > 120:
    print("Alerta de espera")
else:
    print("Tiempo normal")`,
    business_case: "Crear un script en Python que evalúe si la llamada de un cliente superó el límite de tiempo permitido.",
    code_example: `# Primer programa de Julieth en Python 💖
nombre_analista = "Julieth"
tiempo_espera = 150

print(f"Analista a cargo: {nombre_analista}")

if tiempo_espera > 120:
    print("⚠️ ALERTA: Tiempo de espera crítico")
else:
    print("✅ Estado normal")`,
    guided_practice: [
      "1. Abre VS Code y crea el archivo `programa.py`.",
      "2. Copia el código de ejemplo.",
      "3. Ejecuta el archivo presionando el botón de Play."
    ],
    individual_practice: "Crea una variable `duracion = 350` y un bloque if/else que imprima 'Llamada Larga' si es mayor a 300 segundos.",
    solution_practice: "duracion = 350\nif duracion > 300:\n    print('Llamada Larga')\nelse:\n    print('Llamada Normal')",
    quiz_question: "¿Qué función nativa de Python se utiliza para mostrar texto e información en la consola de comandos?",
    quiz_options: ["print()", "write()", "output()", "display()"],
    quiz_answer: 0,
    challenge: "Crear un programa en Python que salude y evalúe tu edad.",
    common_errors: "Olvidar la sangría (indentación de 4 espacios) obligatoria en Python dentro de bloques if.",
    english_vocab: [
      { term: "Script", trans: "Archivo / Programa Python", ex: "Run the Python script in VS Code." },
      { term: "Indentation", trans: "Sangría de Código", ex: "Python requires proper indentation." }
    ]
  },

  // FASE 16: EMPLOYABILITY
  {
    id: "c16_01_career_star_interviews",
    phase: "Fase 16: Empleabilidad",
    cat: "career",
    title: "Clase 16.1: Perfil Profesional, CV ATS, LinkedIn y Método STAR para Entrevistas",
    summary: "Prepara tu marca personal de Data Analyst: redacta tu CV en formato ATS de 1 página, publica en LinkedIn y domina el método STAR para responder preguntas en entrevistas.",
    icon: "fa-briefcase",
    duration: "45-75 min",
    capability: "🎯 Capacidad Lograda: Presentar tu historia profesional y responder preguntas técnicas en entrevistas con estructura de impacto cuantitativo.",
    concepts: ["Perfil de Jr Data Analyst", "CV en formato ATS", "LinkedIn Profesional", "Método STAR (Situación, Tarea, Acción, Resultado)"],
    intro: "Con esta clase cerrarás el programa lista para postular y triunfar en tus entrevistas de trabajo.",
    analogy: "💡 Analogía: Tu pasaporte profesional oficial que te abre las puertas de las empresas tecnológicas.",
    theory: `1. Formato ATS (Applicant Tracking System):
CV de 1 página simple, sin diseños excesivos que confundan a los robots de selección.

2. Método STAR para Entrevistas:
- S (Situación): Contexto de negocio (Call center con demoras de esperas).
- T (Tarea): Tu objetivo de analista (Descubrir las causas raíz).
- A (Acción): Las herramientas usadas (SQL Server, Power BI, Python, Groq).
- R (Resultado): El impacto cuantitativo (Reduje las esperas en 15%).`,
    business_case: "Presentar el proyecto DataCall en entrevistas demostrando cómo convertiste datos en decisiones de negocio.",
    code_example: `MÉTODO STAR EN ACCIÓN:
"En DataCall (S), debía reducir el tiempo de espera (T). Diseñé un modelo en SSMS y Power BI (A), logrando reducir las esperas en un 15% (R)."`,
    guided_practice: ["1. Redacta tu respuesta en formato STAR basada en tu proyecto."],
    individual_practice: "Responde en voz alta a la pregunta de entrevista: '¿Cuál ha sido tu mayor desafío técnico?'",
    solution_practice: "Aplica STAR explicando cómo manejaste valores nulos y conectaste SQL Server con Python.",
    quiz_question: "¿Qué significan las siglas del método STAR para entrevistas laborales?",
    quiz_options: ["Situación, Tarea, Acción, Resultado", "Sistema, Técnica, Análisis, Reporte", "Solución, Trabajo, Agilidad, Rendimiento", "Ninguna"],
    quiz_answer: 0,
    challenge: "Completar la simulación de entrevista en el Simulador Mock Trial.",
    common_errors: "Dudar de tus capacidades o responder en entrevistas sin mencionar métricas cuantitativas de resultado.",
    english_vocab: [
      { term: "STAR Method", trans: "Método STAR", ex: "Answer interview questions using STAR method." },
      { term: "ATS Resume", trans: "Hoja de Vida ATS", ex: "Format your resume for ATS systems." }
    ]
  }
];

// --- DATASET: ENGLISH TRACK — PARALLEL ROUTE (A1 ➔ A2 ➔ B1) ---
const ENGLISH_DATA = [
  // NIVEL A1 — CLASES DE 1 HORA (General ➔ Tech Intro)
  {
    id: "eng_c1_a1",
    level: "A1",
    title: "Class 1: Personal Introductions & Basic Work Greetings",
    duration: "45-75 min",
    grammar: "Verb To Be (I am, You are, It is) & Present Simple",
    vocab: [
      { term: "Data Analyst", translation: "Analista de Datos", example: "I am a Junior Data Analyst." },
      { term: "Database", translation: "Base de Datos", example: "We use a database." },
      { term: "Report", translation: "Reporte / Informe", example: "The daily report is ready." }
    ],
    reading_prompt: "Hello! My name is Julieth. I am 24 years old. I live in Bogota and I am a Junior Data Analyst. I work with databases and reports.",
    speaking_prompt: "Introduce yourself in English: 'Hello, my name is... and I am a Data Analyst.'",
    quiz: {
      question: "How do you say in English: 'Yo soy analista de datos'?",
      options: ["I am a Data Analyst", "I has Data Analyst", "I be Data Analyst", "I do Data Analyst"],
      answer: 0
    }
  },
  {
    id: "eng_c2_a1",
    level: "A1",
    title: "Class 2: Daily Routines & Work Environment",
    duration: "45-75 min",
    grammar: "Present Simple with Daily Verbs (work, analyze, check, start, finish)",
    vocab: [
      { term: "Computer", translation: "Computador", example: "I turn on my computer." },
      { term: "Screen", translation: "Pantalla", example: "Look at the computer screen." },
      { term: "Table", translation: "Tabla", example: "The table contains rows." }
    ],
    reading_prompt: "Every morning, I start work at 8 AM. I turn on my computer, open SQL Server, and check customer tables.",
    speaking_prompt: "Say in English: 'Yo empiezo a trabajar a las 8 AM y reviso las tablas.'",
    quiz: {
      question: "Choose the correct Present Simple sentence:",
      options: ["I check customer tables every morning", "I checking customer tables morning", "I checks customer tables morning", "I checked table morning"],
      answer: 0
    }
  },

  // NIVEL A2 — CLASES DE 1 HORA (Work Tasks ➔ Data Vocab)
  {
    id: "eng_c3_a2",
    level: "A2",
    title: "Class 3: Describing Past Projects & Data Cleaning",
    duration: "45-75 min",
    grammar: "Past Simple Regular & Irregular Verbs (analyzed, cleaned, built, found)",
    vocab: [
      { term: "Cleaned data", translation: "Datos limpios", example: "I cleaned the dataset." },
      { term: "Query", translation: "Consulta SQL", example: "I wrote an INNER JOIN query." },
      { term: "Filter", translation: "Filtro", example: "I filtered rows by city." }
    ],
    reading_prompt: "In my DataCall project, I analyzed 50,000 call records. I cleaned missing values and built a star schema model in Power BI.",
    speaking_prompt: "Say in English: 'Analicé los datos y construí un modelo en Power BI.'",
    quiz: {
      question: "What is the past tense of the verb 'build'?",
      options: ["Built", "Builded", "Building", "Builds"],
      answer: 0
    }
  },

  // NIVEL B1 — CLASES DE 1 HORA (Insights ➔ Technical Interviews)
  {
    id: "eng_c4_b1",
    level: "B1",
    title: "Class 4: Technical Job Interview Practice & Storytelling",
    duration: "45-75 min",
    grammar: "Present Perfect, Connectors (Therefore, As a result) & STAR Method in English",
    vocab: [
      { term: "Business Insight", translation: "Hallazgo de Negocio", example: "We identified a major business insight." },
      { term: "Stakeholder", translation: "Gerente / Interesado", example: "I presented the dashboard to stakeholders." },
      { term: "Recommendation", translation: "Recomendación", example: "My recommendation is to reallocate staff." }
    ],
    reading_prompt: "Interviewer: 'Why should we hire you as a Junior Data Analyst?' Candidate: 'Because I have hands-on experience using SQL Server, Power BI, and Python to extract data and deliver actionable business recommendations.'",
    speaking_prompt: "Answer in English: 'Why do you want to work as a Data Analyst?'",
    interview_question: "Q: 'Can you describe a data project where you found an unexpected insight?'",
    quiz: {
      question: "Which connector means 'Por lo tanto' or 'Como resultado'?",
      options: ["Therefore / As a result", "However", "Although", "Because"],
      answer: 0
    }
  }
];

// --- LOGROS & MEDALLAS ---
const BADGES_DATA = [
  { id: "b1", title: "Tech Foundations Pro", icon: "fa-laptop-code", desc: "Completar la Fase 0 de conceptos tecnológicos.", reqModule: "c0_07_cloud_etl_architecture" },
  { id: "b2", title: "Pensamiento Lógico", icon: "fa-brain", desc: "Dominar la lógica de datos y métricas en la Fase 1.", reqModule: "c1_05_analytical_thinking_kpis" },
  { id: "b3", title: "Primera Consulta SSMS", icon: "fa-database", desc: "Completar la conexión a LuchoX12 y ejecutar F5.", reqModule: "c2_01_ssms_connect" },
  { id: "b4", title: "Reina del SELECT & WHERE", icon: "fa-eye", desc: "Dominar la extracción y filtrado en SQL.", reqModule: "c2_03_where_filtering" },
  { id: "b5", title: "Maestra de JOINs & Agregaciones", icon: "fa-link", desc: "Cruzar tablas relacionales y agrupar KPIs.", reqModule: "c3_02_joins_relations" },
  { id: "b6", title: "Excel Data Analyst", icon: "fa-file-excel", desc: "Dominar Tablas Dinámicas y Power Query en Excel.", reqModule: "c5_01_excel_data_foundations" },
  { id: "b7", title: "Arquitecta de Power BI", icon: "fa-chart-column", desc: "Construir dashboards gerenciales en Power BI.", reqModule: "c7_01_pbi_foundations_dashboard" },
  { id: "b8", title: "Programadora Python", icon: "fa-brands fa-python", desc: "Escribir scripts autónomos en VS Code.", reqModule: "c9_01_python_first_steps" },
  { id: "b9", title: "100% Empleable Pro 🏆", icon: "fa-crown", desc: "Completar la ruta integral de clases de 1 hora.", reqModule: "c16_01_career_star_interviews" }
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

// --- RENDER MODULES (ROADMAP DASHBOARD - NO LOCKS!) ---
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

    const card = document.createElement('div');
    card.className = `module-card ${isCompleted ? 'completed' : ''}`;
    // REGLA CRÍTICA: Acceso libre sin bloqueos!
    card.onclick = () => openModuleModal(m.id);

    card.innerHTML = `
      <div class="card-top">
        <span class="phase-tag ${m.cat}">${m.phase}</span>
        <div class="check-box" onclick="event.stopPropagation(); toggleModuleCompletion('${m.id}')">
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
      <h3 class="module-title">${m.title}</h3>
      <p class="module-summary">${m.summary}</p>
      
      <div style="margin-top: 10px; display: flex; align-items: center; justify-content: space-between;">
        <span class="status-pill ${isCompleted ? 'completed' : 'not-started'}">
          <i class="fa-solid ${isCompleted ? 'fa-check' : 'fa-play'}"></i> ${isCompleted ? 'Completado 💖' : 'Acceso Libre ✨'}
        </span>
        <span style="font-size: 11px; font-weight: 800; color: var(--kitty-hotpink);">⏱️ ${m.duration || '60 min'}</span>
      </div>

      <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--kitty-hotpink); font-weight: 800;">
        <span><i class="fa-solid ${m.icon}"></i> Abrir Clase de 1 Hora (7 Partes)</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- RENDER ENGLISH SECTION (A1 -> A2 -> B1 PROGRESIVO) ---
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
        <span style="font-size: 11px; font-weight: 800; color: var(--kitty-hotpink);">⏱️ ${e.duration || '60 min'}</span>
      </div>

      <h3 style="font-size: 18px; color: var(--text-dark); margin-bottom: 8px; font-weight: 900;">${e.title}</h3>
      <p style="font-size: 13px; color: var(--text-muted); font-weight: 700; margin-bottom: 12px;">
        📌 <strong>Grammar Focus:</strong> ${e.grammar}
      </p>

      <div style="background: #fffdfd; border: 1px solid #f8bbd0; padding: 14px; border-radius: 14px; margin-bottom: 14px;">
        <h4 style="color: var(--kitty-hotpink); font-size: 13px; font-weight: 800; margin-bottom: 6px;">
          📖 Reading & Pronunciation Practice:
        </h4>
        <p style="font-size: 13px; color: var(--text-dark); font-weight: 600; line-height: 1.5; font-style: italic;">
          "${e.reading_prompt}"
        </p>
      </div>

      <div style="margin-bottom: 14px;">
        <h4 style="color: var(--text-dark); font-size: 13px; font-weight: 800;">🗣️ Key Class Vocabulary:</h4>
        <div class="vocab-grid">
          ${vocabList}
        </div>
      </div>

      <div style="background: #fff0f5; border: 1px solid #ff4081; padding: 14px; border-radius: 14px; margin-bottom: 14px;">
        <h4 style="color: #ff1493; font-size: 13px; font-weight: 800; margin-bottom: 4px;">💬 Speaking Challenge:</h4>
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

  let conceptsList = m.concepts ? m.concepts.map(c => `<span style="background: #fff0f5; color: #ff1493; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 700;">• ${c}</span>`).join(' ') : '';

  container.innerHTML = `
    <div style="background: #ffffff; border: 3px solid var(--border-pink); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-glow); margin-top: 20px;">
      
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed var(--border-pink); padding-bottom: 14px; margin-bottom: 20px;">
        <div>
          <span class="phase-tag ${m.cat}">${m.phase}</span>
          <h2 style="font-size: 22px; color: var(--kitty-hotpink); font-weight: 900; margin-top: 6px;">${m.title}</h2>
          <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
            ${conceptsList}
          </div>
        </div>
        <div style="background: #fff0f5; padding: 8px 16px; border-radius: 20px; border: 2px solid #ff4081; font-weight: 800; color: #ff1493; white-space: nowrap;">
          ⏱️ Clase de 1 Hora (45-75 min)
        </div>
      </div>

      <!-- ESTRUCTURA DE 7 PARTES DE LA CLASE DE 1 HORA -->
      <div class="time-block-grid">
        <div class="time-block-card">
          <span class="time-badge">5 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">1. Introducción</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Objetivo y capacidad final a lograr.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">15 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">2. Conceptos & Analogía</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Teoría agrupada y ejemplos cotidianos.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">10 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">3. Ejemplo Guiado</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">El profesor muestra y la estudiante sigue.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">15 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">4. Práctica en Vivo</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Ejercicios progresivos guiados e independientes.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">10 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">5. Reto Práctico</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Problema de negocio sin copiar ejemplo.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">5 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">6. Quiz Autónoma</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Evaluación rápida de comprobación.</p>
        </div>
        <div class="time-block-card">
          <span class="time-badge">5 MIN</span>
          <h4 style="font-size: 13px; font-weight: 800;">7. Cierre & English</h4>
          <p style="font-size: 11px; color: var(--text-muted); font-weight: 600;">Resumen, capacidad y vocabulario en inglés.</p>
        </div>
      </div>

      <!-- DETALLE GUIA DE LA CLASE -->
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 20px;">
        <div style="background: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px;">
          <h3 style="color: var(--kitty-hotpink); font-size: 15px; font-weight: 800; margin-bottom: 6px;">
            🎯 Capacidad al Finalizar la Clase:
          </h3>
          <p style="font-size: 13px; font-weight: 700; color: var(--text-dark);">${m.capability}</p>
        </div>

        <div style="background: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px;">
          <h3 style="color: var(--kitty-hotpink); font-size: 15px; font-weight: 800; margin-bottom: 6px;">
            💻 Código & Sintaxis Principal de la Sesión:
          </h3>
          <div class="code-block">${m.code_example || m.step3_code}</div>
        </div>

        <div style="background: #fff0f5; border: 2px solid #ff4081; padding: 18px; border-radius: 16px;">
          <h3 style="color: #ff1493; font-size: 15px; font-weight: 800; margin-bottom: 6px;">
            🇬🇧 English for Data Vocabulary Session:
          </h3>
          <ul style="padding-left: 20px; font-size: 13px; font-weight: 600; color: #3c1a26;">
            ${vocabList}
          </ul>
        </div>

        <button class="btn btn-primary" onclick="openModuleModal('${m.id}')" style="justify-content: center; font-size: 14px; padding: 12px;">
          <i class="fa-solid fa-graduation-cap"></i> Abrir Clase Completa de 1 Hora (7 Partes Interactivas)
        </button>
      </div>

    </div>
  `;
}

// --- MODAL DIALOG WITH 7 PARTS OF A 1-HOUR CLASS ---
function openModuleModal(id) {
  const m = MODULES_DATA.find(item => item.id === id);
  if (!m) return;

  const modal = document.getElementById('module-modal');
  const content = document.getElementById('modal-content');
  const isCompleted = completedModules.includes(m.id);

  let guidedStepsHtml = m.guided_practice ? m.guided_practice.map(step => `<li style="margin-bottom: 8px;">${step}</li>`).join('') : '';

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

  let conceptsList = m.concepts ? m.concepts.map(c => `<span style="background: #fff0f5; color: #ff1493; padding: 3px 8px; border-radius: 10px; font-size: 11px; font-weight: 700;">• ${c}</span>`).join(' ') : '';

  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div>
        <span class="phase-tag ${m.cat}">${m.phase}</span>
        <span style="font-size: 12px; font-weight: 800; color: var(--kitty-hotpink); margin-left: 8px;">⏱️ Clase de 1 Hora (${m.duration || '45-75 min'})</span>
      </div>
      <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" onclick="toggleModuleCompletion('${m.id}'); closeModal();">
        <i class="fa-solid ${isCompleted ? 'fa-rotate-left' : 'fa-heart'}"></i> ${isCompleted ? 'Marcar Pendiente' : 'Clase Completada 💕 (+100 XP)'}
      </button>
    </div>

    <h2 style="font-size: 24px; margin-bottom: 8px; color: var(--kitty-hotpink); font-weight: 900;">${m.title}</h2>
    <div style="margin-bottom: 16px; display: flex; flex-wrap: wrap; gap: 4px;">
      ${conceptsList}
    </div>
    <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px; font-weight: 600;">${m.summary}</p>

    <!-- PARTE 1: INTRODUCCIÓN Y CAPACIDAD FINAL (5 MIN) -->
    <div class="class-part-card" style="border-color: #ff4081; background: linear-gradient(135deg, #fff0f5, #fce4ec);">
      <div class="class-part-header">
        <span class="class-part-title"><i class="fa-solid fa-flag-checkered"></i> PARTE 1 — INTRODUCCIÓN & CAPACIDAD A LOGRAR</span>
        <span class="time-badge">5 MIN</span>
      </div>
      <p style="font-size: 13px; color: var(--text-dark); font-weight: 600; margin-bottom: 8px;">${m.intro || ''}</p>
      <div style="background: #ffffff; border: 2px solid #ff1493; padding: 12px; border-radius: 12px;">
        <h4 style="color: #ff1493; font-size: 13px; font-weight: 900;">${m.capability}</h4>
      </div>
    </div>

    <!-- PARTE 2: CONCEPTOS RELACIONADOS Y ANALOGÍA (15 MIN) -->
    <div class="class-part-card">
      <div class="class-part-header">
        <span class="class-part-title"><i class="fa-solid fa-lightbulb"></i> PARTE 2 — CONCEPTOS RELACIONADOS & ANALOGÍA</span>
        <span class="time-badge">15 MIN</span>
      </div>
      <div style="background-color: #fffdfd; border: 1px solid #f8bbd0; padding: 12px; border-radius: 12px; margin-bottom: 12px;">
        <p style="color: var(--text-dark); font-weight: 600; font-size: 13px;">${m.analogy}</p>
      </div>
      <div style="color: var(--text-dark); font-weight: 500; font-size: 13px; white-space: pre-wrap; line-height: 1.6;">${m.theory}</div>
    </div>

    <!-- PARTE 3: EJEMPLO GUIADO CON EL PROFESOR (10 MIN) -->
    <div class="class-part-card">
      <div class="class-part-header">
        <span class="class-part-title"><i class="fa-solid fa-chalkboard-user"></i> PARTE 3 — EJEMPLO GUIADO CON EL PROFESOR</span>
        <span class="time-badge">10 MIN</span>
      </div>
      <p style="font-size: 13px; color: var(--text-dark); font-weight: 600; margin-bottom: 8px;">${m.business_case || ''}</p>
      <div class="code-block">${m.code_example || m.step3_code}</div>
    </div>

    <!-- PARTE 4: PRÁCTICA EN VIVO Y EJERCICIOS (15 MIN) -->
    <div class="class-part-card">
      <div class="class-part-header">
        <span class="class-part-title"><i class="fa-solid fa-laptop-code"></i> PARTE 4 — PRÁCTICA EN VIVO & EJERCICIOS</span>
        <span class="time-badge">15 MIN</span>
      </div>
      
      <div style="margin-bottom: 14px;">
        <h4 style="color: var(--kitty-hotpink); font-size: 13px; font-weight: 800; margin-bottom: 6px;">📝 Paso a Paso Guiado:</h4>
        <ol style="padding-left: 20px; color: var(--text-dark); font-weight: 600; font-size: 13px;">
          ${guidedStepsHtml}
        </ol>
      </div>

      <div style="background-color: #fffdfd; border: 1px solid #f8bbd0; padding: 14px; border-radius: 12px;">
        <h4 style="color: var(--kitty-hotpink); font-size: 13px; font-weight: 800; margin-bottom: 4px;">✏️ Ejercicio Independiente:</h4>
        <p style="color: var(--text-dark); font-weight: 600; font-size: 13px; margin-bottom: 8px;">${m.individual_practice}</p>
        <button class="btn btn-secondary" onclick="toggleSolution('sol-${m.id}')" style="font-size: 11px; padding: 4px 10px;">
          <i class="fa-solid fa-eye"></i> Ver Pista y Solución Paso a Paso
        </button>
        <div id="sol-${m.id}" style="display: none; margin-top: 8px; background-color: #e8f5e9; color: #1b5e20; padding: 10px; border-radius: 8px; font-size: 12px; font-weight: 600;">
          <strong>Solución Paso a Paso:</strong><br>${m.solution_practice}
        </div>
      </div>
    </div>

    <!-- PARTE 5: RETO PRÁCTICO DE NEGOCIO (10 MIN) -->
    <div class="class-part-card" style="border-color: #ffe082; background-color: #fff8e1;">
      <div class="class-part-header">
        <span class="class-part-title" style="color: #f57f17;"><i class="fa-solid fa-trophy"></i> PARTE 5 — RETO PRÁCTICO DE NEGOCIO</span>
        <span class="time-badge" style="background-color: #f57f17;">10 MIN</span>
      </div>
      <p style="color: #5d4037; font-weight: 700; font-size: 13px;">${m.challenge}</p>
    </div>

    <!-- PARTE 6: EVALUACIÓN AUTÓNOMA Y QUIZ (5 MIN) -->
    ${m.quiz_question ? `
      <div class="class-part-card" style="border-color: #ff4081; background-color: #fff0f5;">
        <div class="class-part-header">
          <span class="class-part-title" style="color: #ff1493;"><i class="fa-solid fa-circle-question"></i> PARTE 6 — EVALUACIÓN AUTÓNOMA</span>
          <span class="time-badge">5 MIN</span>
        </div>
        <p style="color: #3c1a26; font-weight: 700; font-size: 13px; margin-bottom: 10px;">${m.quiz_question}</p>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          ${quizOptionsHtml}
        </div>
        <div id="quiz-feedback-${m.id}" style="margin-top: 10px; display: none;"></div>
      </div>
    ` : ''}

    <!-- PARTE 7: CIERRE & VOCABULARIO EN INGLÉS (5 MIN) -->
    <div class="class-part-card" style="border-color: #81d4fa; background-color: #e1f5fe;">
      <div class="class-part-header">
        <span class="class-part-title" style="color: #0277bd;"><i class="fa-solid fa-language"></i> PARTE 7 — CIERRE & VOCABULARIO EN INGLÉS</span>
        <span class="time-badge" style="background-color: #0277bd;">5 MIN</span>
      </div>
      <p style="color: #01579b; font-weight: 700; font-size: 12px; margin-bottom: 8px;">
        ⚠️ <strong>Puntos a Recordar:</strong> ${m.common_errors || 'Revisa tus ejercicios antes de cerrar.'}
      </p>
      ${m.english_vocab ? `
        <h4 style="color: #0277bd; font-size: 12px; font-weight: 800; margin-bottom: 6px;">Fichas de Vocabulario en Inglés de la Clase:</h4>
        <div class="vocab-grid">
          ${englishVocabHtml}
        </div>
      ` : ''}
    </div>
  `;

  modal.style.display = 'flex';
}

function checkQuizAnswer(moduleId, selectedIdx, correctIdx) {
  const fb = document.getElementById(`quiz-feedback-${moduleId}`);
  if (!fb) return;
  fb.style.display = 'block';
  if (selectedIdx === correctIdx) {
    fb.innerHTML = `
      <div style="background-color: #e8f5e9; color: #2e7d32; padding: 10px; border-radius: 8px; font-weight: 800; font-size: 12px;">
        🎉 ¡Correcto Julieth hermosa! Has entendido los conceptos de la clase a la perfección (+50 XP).
      </div>
    `;
  } else {
    fb.innerHTML = `
      <div style="background-color: #ffebee; color: #c62828; padding: 10px; border-radius: 8px; font-weight: 700; font-size: 12px;">
        💡 ¡Casi! Inténtalo de nuevo o repasa la Parte 2 para ver la respuesta.
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
