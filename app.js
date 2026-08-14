/* ==========================================================================
   DataCareer Academy — Application Logic (app.js)
   Hello Kitty & Love Theme Edition — Full 27-Module Master Suite & Responsive Engine
   ========================================================================== */

// --- MOBILE SIDEBAR TOGGLE ---
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

// --- DATASET: 27 MODULOS COMPLETOS PASO A PASO ---
const MODULES_DATA = [
  // --- FASE 1: SQL SERVER EN SSMS (9 Módulos) ---
  {
    id: "m01_ssms",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 1.1: Tu Primer Día en SQL Server Management Studio (SSMS)",
    summary: "Aprende a abrir SSMS, conectarte a LuchoX12, seleccionar la base DataCareer y ejecutar tu primera consulta con F5.",
    icon: "fa-database",
    purpose: "🎯 ¿Por qué hacemos esto y cuál es la finalidad?: SQL Server Management Studio (SSMS) es el programa oficial de Microsoft donde los analistas de datos consultan las bases de datos de las empresas. La finalidad de esta primera lección es que abras SSMS, te conectes al servidor 'LuchoX12', selecciones la base de datos 'DataCareer', abras una ventana de 'Nueva Consulta' y presiones la tecla F5 para ver tu primer resultado en pantalla.",
    deliverable: "🏁 Entregable Tangible de Julieth: Deberás tener abierto SSMS en tu computador, conectado al servidor LuchoX12 -> DataCareer, con una ventana de consulta activa y ejecutando con la tecla F5 tu primer mensaje de bienvenida de analista de datos.",
    analogy: "Encender la televisión y poner el canal correcto: SSMS es el televisor, el servidor LuchoX12 es la señal del cable y la base DataCareer es tu canal de datos favorito.",
    coach_search: "sql server management studio ssms tutorial desde cero principiantes",
    coach_emphasis: "Explícale que SSMS es su herramienta principal de trabajo para consultar SQL Server y que F5 es la tecla mágica para ejecutar consultas.",
    step1_theory: `¿Qué es SQL Server Management Studio (SSMS)?
Es el programa oficial gratuito de Microsoft diseñado para conectarse a servidores de base de datos SQL Server. 

Las 4 Partes Principales de la Pantalla de SSMS:
1. Explorador de Objetos (Panel Izquierdo): Muestra el servidor conectado (LuchoX12) y las bases de datos disponibles.
2. Desplegable de Base de Datos (Barra Superior): Te permite elegir sobre cuál base estás trabajando (seleccionaremos siempre 'DataCareer').
3. Editor de Consultas (Panel Central Blanco): El lugar donde escribes tus instrucciones de código SQL.
4. Grilla de Resultados (Panel Inferior): La tabla donde aparecen los datos devueltos cuando presionas F5.

¿Cómo se ejecuta una Consulta en SSMS?
Escribes tu instrucción en el editor y presionas la tecla F5 (o haces clic en el botón verde '! Ejecutar' en la barra superior).`,
    step2_business: "En el Call Center DataCall, todos los reportes de llamadas, clientes y ventas viven en el servidor LuchoX12. Saber abrir SSMS y conectarte en 10 segundos es el primer paso obligatorio de tu día de trabajo como Data Analyst.",
    step3_code: `-- ===================================================
-- PROYECTO: DataCall Analytics
-- ENTORNOS: SQL Server Management Studio (SSMS)
-- AUTORA: Julieth Galvis 💖
-- FINALIDAD: Primera consulta oficial en SSMS
-- ===================================================

USE DataCareer;

SELECT '¡Hola SQL Server! Soy Julieth y seré Data Analyst' AS Mensaje_Bienvenida;`,
    step4_guided: [
      "1. Abre el programa 'SQL Server Management Studio' (SSMS) desde el menú de inicio de Windows.",
      "2. En la ventana 'Conectarse al servidor', en Nombre del servidor escribe: LuchoX12 (o localhost).",
      "3. En Autenticación selecciona 'Autenticación de Windows' y haz clic en 'Conectar'.",
      "4. En la barra de herramientas superior, haz clic en el botón 'Nueva consulta' (New Query) o presiona las teclas Ctrl + N.",
      "5. En el menú desplegable de bases de datos (arriba a la izquierda, que suele decir 'master'), cámbialo a 'DataCareer'.",
      "6. Copia y pega el código SQL del Paso 3 en la ventana blanca del editor.",
      "7. Presiona la tecla F5 de tu teclado (o haz clic en el botón '! Ejecutar').",
      "8. Verifica que en el panel inferior aparezca la tabla con el mensaje de bienvenida."
    ],
    step5_individual: "Escribe en tu ventana de SSMS una segunda consulta que seleccione el nombre de la base de datos actual usando SELECT DB_NAME() AS Base_Actual; y presiona F5.",
    solution_individual: "Escribe SELECT DB_NAME() AS Base_Actual; y presiona F5. En la grilla inferior aparecerá la palabra 'DataCareer'.",
    quiz_question: "¿Cuál es la tecla de teclado para ejecutar una consulta SQL en SSMS?",
    quiz_options: ["F5 (o Ctrl+E)", "F12", "Enter", "Space"],
    quiz_answer: 0,
    challenge: "Aprender el atajo de teclado Ctrl + N para abrir una nueva consulta y F5 para ejecutar.",
    commonErrors: "Ejecutar la consulta teniendo seleccionada la base de datos 'master' en lugar de 'DataCareer'.",
    videoUrl: "https://www.youtube.com/results?search_query=sql+server+management+studio+ssms+tutorial+desde+cero"
  },
  {
    id: "m12_tablas",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 1.2: ¿Qué es una Tabla y qué son los Tipos de Datos? (VARCHAR, INT, DATE, NULL)",
    summary: "Aprende cómo una tabla organiza la información en Filas y Columnas, y qué significa cada tipo de dato.",
    icon: "fa-table-cells",
    purpose: "🎯 ¿Por qué hacemos esto y cuál es la finalidad?: En las bases de datos no podemos guardar un nombre en el mismo lugar donde guardamos el dinero o una fecha. La finalidad de esta lección es que entiendas qué es una Tabla relacional y cómo se dividen los datos en Texto (VARCHAR), Números (INT), Fechas (DATE) y Casillas Vacías (NULL).",
    deliverable: "🏁 Entregable Tangible de Julieth: Abrirás SSMS y ejecutarás la consulta de inspección sobre la tabla 'analytics.dim_cliente' observando los tipos de datos de cada columna.",
    analogy: "Una libreta de contactos: cada hoja es un cliente (Fila) y cada casilla tiene una etiqueta fija: Nombre (Texto), Teléfono (Número), Cumpleaños (Fecha).",
    coach_search: "que es una tabla sql tipos de datos int varchar date explicacion sencilla",
    coach_emphasis: "Explícale que las Filas son los eventos/personas y las Columnas son las características.",
    step1_theory: `¿Qué es una Tabla en SQL Server?
Una tabla es una estructura rectangular formada por Filas horizontales y Columnas verticales (súper parecida a una hoja de Excel).

- Filas (Registros): Cada fila representa un elemento único (ejemplo: un cliente o una llamada realizada).
- Columnas (Campos): Cada columna representa un atributo de ese elemento (ejemplo: Nombre, Ciudad, Edad).

Los 4 Tipos de Datos Principales:
1. INT (Entero): Números sin decimales. Ejemplo: ID de cliente (104), Edad (24).
2. VARCHAR(n) (Texto): Frases o palabras de hasta n letras. Ejemplo: Nombre ('Julieth Galvis').
3. DATE (Fecha): Fechas en formato Año-Mes-Día ('2025-08-14').
4. NULL (Casilla Vacía): Significa que el dato no existe o no fue respondido.`,
    step2_business: "En DataCall, la tabla de clientes guarda 15,000 registros. Si la columna 'edad' aparece como NULL, significa simplemente que el cliente no quiso dar su edad durante la llamada.",
    step3_code: `USE DataCareer;

SELECT 
    cliente_id,     -- Tipo INT (Número)
    nombre,         -- Tipo VARCHAR (Texto)
    ciudad,         -- Tipo VARCHAR (Texto)
    fecha_registro, -- Tipo DATE (Fecha)
    edad            -- Tipo INT (Puede ser NULL)
FROM analytics.dim_cliente;`,
    step4_guided: [
      "1. En SSMS, en tu ventana de consulta, borra el texto anterior.",
      "2. Copia y pega el código SQL del Paso 3.",
      "3. Presiona F5 para ejecutar.",
      "4. Observa en los resultados cómo la columna cliente_id muestra números y la columna nombre muestra texto."
    ],
    step5_individual: "Ejecuta una consulta sobre la tabla analytics.dim_agente para ver los primeros 10 agentes y sus turnos.",
    solution_individual: "SELECT TOP 10 * FROM analytics.dim_agente; (presiona F5).",
    quiz_question: "¿Qué significa que un campo sea NULL en una base de datos?",
    quiz_options: ["Es una casilla vacía sin dato", "Es el número cero", "Es un error del sistema", "Es un texto que dice 'nada'"],
    quiz_answer: 0,
    challenge: "Identificar 3 columnas de tipo texto y 2 columnas de tipo número en la tabla analytics.dim_agente.",
    commonErrors: "Confundir filas con columnas.",
    videoUrl: "https://www.youtube.com/results?search_query=que+es+una+base+de+datos+relacional+explicacion"
  },
  {
    id: "m21_select",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 2.1: Tu Primera Consulta SQL (Explicación de SELECT y FROM)",
    summary: "Aprende a elegir qué columnas quieres ver con SELECT y de qué tabla sacarlas con FROM.",
    icon: "fa-eye",
    purpose: "🎯 ¿Por qué hacemos esto y cuál es la finalidad?: En tu trabajo como Data Analyst, tu jefe te pedirá listas de datos específicos. La finalidad de este módulo es dominar SELECT y FROM.",
    deliverable: "🏁 Entregable Tangible de Julieth: Consulta en SSMS que extraiga 'nombre, ciudad, tipo_cliente' de clientes.",
    analogy: "Pedir comida en un restaurante: qué quieres (SELECT) y de dónde sale (FROM).",
    coach_search: "select y from sql server principiantes paso a paso tutorial",
    coach_emphasis: "Explícale que el asterisco (*) significa 'tráeme TODAS las columnas'.",
    step1_theory: `Sintaxis Básica:
SELECT columna1, columna2 FROM esquema.tabla;

El comodín *: SELECT * FROM analytics.dim_cliente; trae todas las columnas.`,
    step2_business: "Seleccionar solo las columnas necesarias acelera las consultas 10 veces.",
    step3_code: `USE DataCareer;
SELECT cliente_id, nombre, ciudad FROM analytics.dim_cliente;`,
    step4_guided: ["1. Abre consulta en SSMS.", "2. Pega el código.", "3. Presiona F5."],
    step5_individual: "Selecciona nombre, turno y nivel de dim_agente.",
    solution_individual: "SELECT nombre, turno, nivel FROM analytics.dim_agente;",
    quiz_question: "¿Qué hace SELECT * en SQL?",
    quiz_options: ["Selecciona TODAS las columnas", "Multiplica columnas", "Borra datos", "Filtra errores"],
    quiz_answer: 0,
    challenge: "Escribir SELECT * FROM analytics.dim_producto.",
    commonErrors: "Olvidar comas entre columnas.",
    videoUrl: "https://www.youtube.com/results?search_query=select+from+sql+server+tutorial"
  },
  {
    id: "m31_where",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 3.1: Filtrando la Información (WHERE y ORDER BY)",
    summary: "Filtra filas específicas con condiciones (WHERE) y ordena los resultados ejecutivos (ORDER BY).",
    icon: "fa-filter",
    purpose: "🎯 Propósito: Filtrar únicamente los datos que la gerencia necesita evaluar en SSMS.",
    deliverable: "🏁 Entregable: Reporte de llamadas con tiempo de espera > 120s en Bogotá.",
    analogy: "Filtros de MercadoLibre por precio y marca.",
    coach_search: "where y order by sql server tutorial",
    coach_emphasis: "Textos con comillas simples ('Bogotá'), números sin comillas.",
    step1_theory: `Operadores: =, >, <, >=, <=, <>.
ORDER BY col ASC / DESC.`,
    step2_business: "Identificar llamadas críticas para bonificar clientes afectados.",
    step3_code: `USE DataCareer;
SELECT TOP 15 llamada_id, cliente_id, tiempo_espera_segundos 
FROM analytics.fact_llamadas 
WHERE tiempo_espera_segundos > 120 AND canal = 'Telefónico' 
ORDER BY tiempo_espera_segundos DESC;`,
    step4_guided: ["1. Pega la consulta.", "2. Presiona F5."],
    step5_individual: "Filtrar agentes de turno Mañana y nivel Senior.",
    solution_individual: "SELECT * FROM analytics.dim_agente WHERE turno = 'Mañana' AND nivel = 'Senior';",
    quiz_question: "¿Cómo se escriben los textos en el filtro WHERE?",
    quiz_options: ["Entre comillas simples ('Bogotá')", "Sin comillas", "Entre corchetes", "Con comillas dobles"],
    quiz_answer: 0,
    challenge: "Filtrar llamadas no resueltas duracion > 300s.",
    commonErrors: "Usar WHERE col = NULL en lugar de IS NULL.",
    videoUrl: "https://www.youtube.com/results?search_query=where+order+by+sql+server+tutorial"
  },
  {
    id: "m41_groupby",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 4.1: Resumiendo Datos Masivos (GROUP BY, COUNT, AVG, HAVING)",
    summary: "Convierte 50,000 filas individuales en indicadores clave de rendimiento (KPIs) agrupados por canal.",
    icon: "fa-chart-pie",
    purpose: "🎯 Propósito: Resumir volúmenes masivos de llamadas en KPIs ejecutivos.",
    deliverable: "🏁 Entregable: Reporte de llamadas y promedios por canal en SSMS.",
    analogy: "Separar monedas por montoncitos y contarlas.",
    coach_search: "group by y agregaciones sql server",
    coach_emphasis: "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
    step1_theory: `Funciones: COUNT(*), AVG(col), SUM(col).
GROUP BY agrupa valores iguales. HAVING filtra resúmenes.`,
    step2_business: "Decidir a qué canal asignar más personal de atención.",
    step3_code: `USE DataCareer;
SELECT canal, COUNT(*) AS Total, AVG(duracion_segundos) AS Prom_Duracion
FROM analytics.fact_llamadas GROUP BY canal ORDER BY Total DESC;`,
    step4_guided: ["1. Ejecuta en SSMS.", "2. Presiona F5."],
    step5_individual: "Agrupar llamadas por resultado.",
    solution_individual: "SELECT resultado, COUNT(*) FROM analytics.fact_llamadas GROUP BY resultado;",
    quiz_question: "¿Qué función calcula el promedio de una columna numèrica?",
    quiz_options: ["AVG()", "COUNT()", "SUM()", "MEDIAN()"],
    quiz_answer: 0,
    challenge: "Filtrar grupos con HAVING COUNT(*) > 10000.",
    commonErrors: "Incluir columnas no agrupadas en el SELECT.",
    videoUrl: "https://www.youtube.com/results?search_query=group+by+having+sql+server+tutorial"
  },
  {
    id: "m51_joins",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 5.1: Conectando Información entre Tablas (INNER JOIN y LEFT JOIN)",
    summary: "Combina la tabla de llamadas con los nombres de clientes y agentes usando claves relacionales.",
    icon: "fa-link",
    purpose: "🎯 Propósito: Unir tablas relacionales para ver nombres reales en reportes.",
    deliverable: "🏁 Entregable: Consulta combinada con INNER JOIN entre llamadas, clientes y agentes.",
    analogy: "Intersección en diagramas de Venn.",
    coach_search: "explicacion de sql joins inner left join",
    coach_emphasis: "ON es el puente que une PK y FK.",
    step1_theory: `PK (Clave Primaria) y FK (Clave Foránea).
INNER JOIN: Coincidencia exacta.
LEFT JOIN: Conserva toda la tabla izquierda.`,
    step2_business: "Evitar horas de cruces manuales en Excel con BUSCARV.",
    step3_code: `USE DataCareer;
SELECT TOP 20 ll.llamada_id, c.nombre AS Cliente, a.nombre AS Agente
FROM analytics.fact_llamadas ll
INNER JOIN analytics.dim_cliente c ON ll.cliente_id = c.cliente_id
INNER JOIN analytics.dim_agente a ON ll.agente_id = a.agente_id;`,
    step4_guided: ["1. Copia a SSMS.", "2. Ejecuta F5."],
    step5_individual: "LEFT JOIN clientes y ventas sin compra.",
    solution_individual: "SELECT c.nombre FROM analytics.dim_cliente c LEFT JOIN analytics.fact_ventas v ON c.cliente_id = v.cliente_id WHERE v.venta_id IS NULL;",
    quiz_question: "¿Qué tipo de JOIN mantiene todos los datos de la primera tabla aunque no tengan coincidencia?",
    quiz_options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"],
    quiz_answer: 0,
    challenge: "Cruzar 4 tablas en SSMS.",
    commonErrors: "Olvidar la condición ON de cruce.",
    videoUrl: "https://www.youtube.com/results?search_query=explicacion+sql+joins+inner+left+join"
  },
  {
    id: "m61_star",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 6.1: Entendiendo el Modelo Estrella (Hechos vs Dimensiones)",
    summary: "Comprende la estructura de la base DataCareer (Hechos vs Dimensiones) para preparar Power BI.",
    icon: "fa-sitemap",
    purpose: "🎯 Propósito: Entender la arquitectura del Data Warehouse de la empresa.",
    deliverable: "🏁 Entregable: Diagrama de Relaciones en SSMS.",
    analogy: "Tique de compra (Hecho) y catálogo (Dimensión).",
    coach_search: "modelo estrella data warehouse explicacion",
    coach_emphasis: "Preparación ideal para Power BI.",
    step1_theory: `Tabla de Hechos (Fact): métricas y FKs.
Tablas de Dimensiones (Dim): atributos descriptivos y PKs.`,
    step2_business: "Optimizar la memoria de análisis en Power BI.",
    step3_code: `-- Diagrama de Base de Datos en SSMS
-- fact_llamadas (Centro) -> dim_cliente, dim_agente (Dimensiones)`,
    step4_guided: ["1. Abre SSMS -> Diagramas.", "2. Agrega tablas analytics."],
    step5_individual: "Diseñar modelo estrella de app de delivery en papel.",
    solution_individual: "Fact_Pedidos central + Dim_Usuario, Dim_Restaurante.",
    quiz_question: "¿Qué tabla se ubica en el centro de un Modelo Estrella?",
    quiz_options: ["Tabla de Hechos (Fact Table)", "Tabla de Dimensión", "Tabla Temporal", "Tabla de Auditoría"],
    quiz_answer: 0,
    challenge: "Explicar la relación 1 a varios (*).",
    commonErrors: "Duplicar textos en la tabla de hechos.",
    videoUrl: "https://www.youtube.com/results?search_query=modelo+estrella+vs+copo+de+nieve+explicacion"
  },
  {
    id: "m71_cte",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 7.1: CTEs (WITH) y Vistas (CREATE VIEW)",
    summary: "Organiza consultas complejas en bloques legibles (CTEs) y guarda tablas virtuales (Vistas).",
    icon: "fa-cubes",
    purpose: "🎯 Propósito: Modularizar código SQL en SSMS.",
    deliverable: "🏁 Entregable: Vista analytics.vw_resumen_encuestas en SSMS.",
    analogy: "Ingredientes preparados en bowls antes de cocinar.",
    coach_search: "cte with sql server tutorial vistas create view",
    coach_emphasis: "CTEs mejoran la legibilidad del código.",
    step1_theory: `WITH CTE_Nombre AS (SELECT...) -> Consulta temporal.
CREATE VIEW Nombre AS SELECT... -> Tabla virtual guardada.`,
    step2_business: "Reutilizar código SQL sin recalcular manualmente.",
    step3_code: `USE DataCareer;
WITH Resumen AS (
    SELECT agente_id, COUNT(*) AS llamadas FROM analytics.fact_llamadas GROUP BY agente_id
)
SELECT a.nombre, r.llamadas FROM Resumen r JOIN analytics.dim_agente a ON r.agente_id = a.agente_id;`,
    step4_guided: ["1. Pega la CTE en SSMS.", "2. Presiona F5."],
    step5_individual: "Crear vista de satisfacción por ciudad.",
    solution_individual: "CREATE VIEW analytics.vw_sat AS SELECT c.ciudad, AVG(e.satisfaccion) FROM analytics.fact_encuestas e JOIN analytics.dim_cliente c ON e.cliente_id=c.cliente_id GROUP BY c.ciudad;",
    quiz_question: "¿Qué hace una instrucción CREATE VIEW en SQL Server?",
    quiz_options: ["Guarda una consulta SQL como tabla virtual", "Crea una tabla en Excel", "Borra registros viejos", "Modifica tipos de datos"],
    quiz_answer: 0,
    challenge: "Usar CTEs anidadas.",
    commonErrors: "Ejecutar la consulta final sin seleccionar el WITH.",
    videoUrl: "https://www.youtube.com/results?search_query=cte+with+sql+server+tutorial"
  },
  {
    id: "m81_window",
    phase: "Fase 1: SQL Server",
    cat: "sql",
    title: "Módulo 8.1: Funciones de Ventana (OVER, ROW_NUMBER, LAG)",
    summary: "Calcula rankings y compara eventos con la fila anterior manteniendo los registros.",
    icon: "fa-arrow-up-right-dots",
    purpose: "🎯 Propósito: Rankings y tendencias fila por fila.",
    deliverable: "🏁 Entregable: Comparación de espera previa con LAG().",
    analogy: "Puesto de carrera de atletismo por corredor.",
    coach_search: "window functions sql server over row_number lag",
    coach_emphasis: "OVER() mantiene las filas individuales intactas.",
    step1_theory: `ROW_NUMBER() OVER(PARTITION BY... ORDER BY...).
LAG(col, 1) trae el valor del registro anterior.`,
    step2_business: "Ver si esperas altas consecutivas generan cancelaciones.",
    step3_code: `USE DataCareer;
SELECT cliente_id, llamada_id, tiempo_espera_segundos,
       LAG(tiempo_espera_segundos, 1) OVER(PARTITION BY cliente_id ORDER BY llamada_id) AS espera_prev
FROM analytics.fact_llamadas;`,
    step4_guided: ["1. Ejecuta en SSMS.", "2. Revisa la columna espera_prev."],
    step5_individual: "DENSE_RANK de edad por ciudad.",
    solution_individual: "SELECT ciudad, nombre, edad, DENSE_RANK() OVER(PARTITION BY ciudad ORDER BY edad DESC) FROM analytics.dim_cliente;",
    quiz_question: "¿Qué función consulta el valor de la fila anterior en una ventana de datos?",
    quiz_options: ["LAG()", "LEAD()", "RANK()", "PREV()"],
    quiz_answer: 0,
    challenge: "Top 3 de ventas por campaña.",
    commonErrors: "Olvidar ORDER BY dentro de OVER().",
    videoUrl: "https://www.youtube.com/results?search_query=window+functions+sql+server+over+row_number"
  },

  // --- FASE 2: POWER BI & DAX (6 Módulos) ---
  {
    id: "m91_pbi_intro",
    phase: "Fase 2: Power BI & DAX",
    cat: "bi",
    title: "Módulo 9.1: Conexión de Power BI Desktop a SQL Server LuchoX12",
    summary: "Importa las 8 tablas de DataCareer desde LuchoX12 a Power BI Desktop en modo Importar.",
    icon: "fa-chart-column",
    purpose: "🎯 Propósito: Traer los datos limpios de SQL Server al entorno gráfico de Power BI.",
    deliverable: "🏁 Entregable: Archivo '02_PowerBI/DataCall_Operations.pbix' con datos cargados.",
    analogy: "Conectar una consola de videojuegos al televisor 4K.",
    coach_search: "power bi conectar sql server modo importar",
    coach_emphasis: "Modo Importar es más rápido que DirectQuery para tableros pequeños.",
    step1_theory: `Obtener Datos -> SQL Server -> LuchoX12 -> DataCareer -> Importar.`,
    step2_business: "Construir la vista gerencial interactiva para la dirección.",
    step3_code: `Servidor: LuchoX12 | Base: DataCareer | Esquema: analytics`,
    step4_guided: ["1. Abre Power BI Desktop.", "2. Obtener datos SQL Server.", "3. Cargar las 8 tablas."],
    step5_individual: "Verificar la carga de 50,000 filas en fact_llamadas.",
    solution_individual: "Ir a Vista de Datos en Power BI y verificar el conteo de filas abajo.",
    quiz_question: "¿Cuál es el modo recomendado para importar datos a Power BI para máxima velocidad?",
    quiz_options: ["Modo Importar (Import)", "DirectQuery", "Live Connection", "Web API"],
    quiz_answer: 0,
    challenge: "Guardar el archivo .pbix en la carpeta 02_PowerBI.",
    commonErrors: "Escribir mal el nombre del servidor LuchoX12.",
    videoUrl: "https://www.youtube.com/results?search_query=power+bi+conectar+sql+server+modo+importar"
  },
  {
    id: "m101_powerquery",
    phase: "Fase 2: Power BI & DAX",
    cat: "bi",
    title: "Módulo 10.1: Transformación y Limpieza de Datos en Power Query",
    summary: "Renombra columnas, cambia tipos de datos y elimina nulos en el editor de Power Query.",
    icon: "fa-filter-circle-dollar",
    purpose: "🎯 Propósito: Dejar la data lista y sin errores antes de hacer gráficos.",
    deliverable: "🏁 Entregable: Pasos aplicados en Power Query validados.",
    analogy: "Lavar y picar las verduras antes de echarlas a la olla.",
    coach_search: "power query transformacion de datos principiantes tutorial",
    coach_emphasis: "Cada clic en Power Query crea un paso automático en Lenguaje M.",
    step1_theory: `Transformar datos -> Eliminar filas vacías -> Reemplazar valores.`,
    step2_business: "Asegurar que los textos coincidan perfectamente entre tablas.",
    step3_code: `Table.TransformColumnTypes(#"Paso", {{"duracion_segundos", Int64.Type}})`,
    step4_guided: ["1. Haz clic en 'Transformar datos'.", "2. Revisa las 8 tablas.", "3. Aplicar y cerrar."],
    step5_individual: "Reemplazar los valores NULL en comentarios por 'Sin Comentario'.",
    solution_individual: "Clic derecho en columna comentarios -> Reemplazar los valores -> NULL por 'Sin Comentario'.",
    quiz_question: "¿En qué lenguaje se registran los pasos de transformación dentro de Power Query?",
    quiz_options: ["Lenguaje M", "DAX", "SQL", "Python"],
    quiz_answer: 0,
    challenge: "Crear una columna condicional en Power Query.",
    commonErrors: "Olvidar hacer clic en 'Cerrar y aplicar'.",
    videoUrl: "https://www.youtube.com/results?search_query=power+query+transformacion+de+datos"
  },
  {
    id: "m111_model",
    phase: "Fase 2: Power BI & DAX",
    cat: "bi",
    title: "Módulo 11.1: Modelo Estrella y Tabla de Calendario en Power BI",
    summary: "Establece las relaciones 1:* en la Vista de Modelo y crea la tabla Dim_Calendario con DAX.",
    icon: "fa-project-diagram",
    purpose: "🎯 Propósito: Construir la arquitectura analítica que alimenta los gráficos.",
    deliverable: "🏁 Entregable: Diagrama de Modelo Estrella activo en Power BI.",
    analogy: "El mapa de carreteras que conecta las ciudades.",
    coach_search: "crear tabla de calendario en power bi dax dax calendar",
    coach_emphasis: "La tabla calendario es obligatoria para hacer Inteligencia de Tiempo.",
    step1_theory: `Relación 1 a varios (1:*). Dimensión (1) filtra a Hechos (*).`,
    step2_business: "Permitir que los filtros por año, mes y día funcionen en todo el tablero.",
    step3_code: `Dim_Calendario = 
ADDCOLUMNS(
    CALENDAR(DATE(2025,1,1), DATE(2026,12,31)),
    "Año", YEAR([Date]),
    "MesNum", MONTH([Date]),
    "NombreMes", FORMAT([Date], "mmmm")
)`,
    step4_guided: ["1. Vista de Modelo.", "2. Crear Nueva Tabla con la fórmula DAX.", "3. Relacionar Date con fecha_llamada."],
    step5_individual: "Marcar Dim_Calendario como Tabla de Fechas oficial.",
    solution_individual: "Clic derecho en Dim_Calendario -> Marcar como tabla de fechas -> Seleccionar columna Date.",
    quiz_question: "¿Qué cardinalidad debe tener la relación entre una Tabla Dimensión y una Tabla de Hechos?",
    quiz_options: ["Uno a varios (1:*)", "Varios a varios (*:*)", "Uno a uno (1:1)", "Ninguna"],
    quiz_answer: 0,
    challenge: "Ocultar las columnas de IDs en la Vista de Informe.",
    commonErrors: "Dejar relaciones bidireccionales activadas.",
    videoUrl: "https://www.youtube.com/results?search_query=power+bi+modelo+estrella+desde+cero"
  },
  {
    id: "m121_dax_measures",
    phase: "Fase 2: Power BI & DAX",
    cat: "bi",
    title: "Módulo 12.1: Fundamentos de DAX — Medidas vs Columnas Calculadas",
    summary: "Diferencia entre columnas y medidas, y crea tus primeros KPIs con COUNTROWS, SUM y AVERAGE.",
    icon: "fa-calculator",
    purpose: "🎯 Propósito: Calcular indicadores gerenciales en tiempo real.",
    deliverable: "🏁 Entregable: Tabla '_Medidas' en Power BI con [Total Llamadas] y [Duración Promedio].",
    analogy: "Una balanza digital que pesa el producto cuando lo pones encima (Medida).",
    coach_search: "dax medidas vs columnas calculadas power bi explicacion",
    coach_emphasis: "Las medidas no ocupan espacio en disco; las columnas calculadas sí.",
    step1_theory: `Medidas: Se evalúan dinámicamente según los filtros visuales.
Columnas Calculadas: Guardan el resultado fila por fila en RAM.`,
    step2_business: "Calcular el volumen dinámico de llamadas al hacer clic en un filtro de ciudad.",
    step3_code: `[Total Llamadas] = COUNTROWS(fact_llamadas)
[Duración Promedio Seg] = AVERAGE(fact_llamadas[duracion_segundos])`,
    step4_guided: ["1. Crear tabla _Medidas.", "2. Crear Nueva Medida.", "3. Arrastrar a Tarjeta visual."],
    step5_individual: "Crear la medida [Satisfacción Promedio].",
    solution_individual: "[Satisfaccion Prom] = AVERAGE(fact_encuestas[satisfaccion])",
    quiz_question: "¿Cuál elemento de Power BI se calcula dinámicamente sin ocupar espacio en disco?",
    quiz_options: ["Las Medidas DAX", "Las Columnas Calculadas", "Las Tablas Importadas", "Los Filtros visuales"],
    quiz_answer: 0,
    challenge: "Crear la medida [Llamadas Abandonadas].",
    commonErrors: "Crear columnas calculadas para métricas simples.",
    videoUrl: "https://www.youtube.com/results?search_query=dax+medidas+vs+columnas+calculadas"
  },
  {
    id: "m131_calculate",
    phase: "Fase 2: Power BI & DAX",
    cat: "bi",
    title: "Módulo 13.1: La Función Reina de DAX — CALCULATE & DIVIDE",
    summary: "Modifica el contexto de filtro con CALCULATE y realiza divisiones seguras con DIVIDE.",
    icon: "fa-wand-magic-sparkles",
    purpose: "🎯 Propósito: Calcular porcentajes e indicadores condicionales en DAX.",
    deliverable: "🏁 Entregable: Medida [Tasa Abandono %] funcionando en el dashboard.",
    analogy: "Pedir un combo de hamburguesa pero cambiar las papas por ensalada.",
    coach_search: "calculate power bi dax explicacion sencilla divide dax",
    coach_emphasis: "DIVIDE evita errores de división por cero.",
    step1_theory: `CALCULATE(Expresión, Filtro1, Filtro2...).
DIVIDE(Numerador, Denominador, ValorSiError).`,
    step2_business: "Calcular la tasa de abandono de llamadas del call center.",
    step3_code: `Tasa Abandono % = 
DIVIDE(
    CALCULATE(COUNTROWS(fact_llamadas), fact_llamadas[abandono] = 1),
    COUNTROWS(fact_llamadas),
    0
)`,
    step4_guided: ["1. Pega la fórmula en DAX.", "2. Formatear como Porcentaje (%)."],
    step5_individual: "Crear la medida [Llamadas Resueltas %].",
    solution_individual: "[Resueltas %] = DIVIDE(CALCULATE(COUNTROWS(fact_llamadas), fact_llamadas[resultado]='Resuelta'), COUNTROWS(fact_llamadas), 0)",
    quiz_question: "¿Qué función de DAX permite modificar el Contexto de Filtro de un reporte?",
    quiz_options: ["CALCULATE()", "FILTER()", "ALL()", "SUMX()"],
    quiz_answer: 0,
    challenge: "Usar ALL() dentro de CALCULATE para porcentajes del total.",
    commonErrors: "Usar el operador / en lugar de DIVIDE().",
    videoUrl: "https://www.youtube.com/results?search_query=dax+power+bi+calculate+explicacion"
  },
  {
    id: "m141_timeintel",
    phase: "Fase 2: Power BI & DAX",
    cat: "bi",
    title: "Módulo 14.1: Inteligencia de Tiempo en DAX (SAMEPERIODLASTYEAR, TOTALYTD)",
    summary: "Compara el rendimiento de llamadas y ventas contra el año o mes anterior.",
    icon: "fa-clock-rotate-left",
    purpose: "🎯 Propósito: Comparar métricas de negocio contra períodos pasados.",
    deliverable: "🏁 Entregable: Gráfico de línea comparativo Año Actual vs Año Anterior.",
    analogy: "Mirar el espejo retrovisor del auto para saber a qué velocidad ibas hace 1 hora.",
    coach_search: "sameperiodlastyear dax power bi inteligencia de tiempo",
    coach_emphasis: "Requiere obligatoriamente que la tabla Dim_Calendario esté marcada como tabla de fechas.",
    step1_theory: `SAMEPERIODLASTYEAR(Dim_Calendario[Date]).
TOTALYTD(Expresión, Dim_Calendario[Date]).`,
    step2_business: "Evaluar si las llamadas aumentaron un 15% respecto al año pasado.",
    step3_code: `[Llamadas Año Anterior] = 
CALCULATE(
    [Total Llamadas],
    SAMEPERIODLASTYEAR(Dim_Calendario[Date])
)`,
    step4_guided: ["1. Crear la medida con SAMEPERIODLASTYEAR.", "2. Crear gráfico de líneas."],
    step5_individual: "Crear la medida de crecimiento % YoY.",
    solution_individual: "[Crecimiento YoY %] = DIVIDE([Total Llamadas] - [Llamadas Año Anterior], [Llamadas Año Anterior], 0)",
    quiz_question: "¿Qué función de DAX calcula el acumulado del año a la fecha?",
    quiz_options: ["TOTALYTD()", "DATESYTD()", "SAMEPERIODLASTYEAR()", "DATEADD()"],
    quiz_answer: 0,
    challenge: "Usar DATEADD para restar 3 meses.",
    commonErrors: "Usar Inteligencia de Tiempo sin una tabla Calendario continua.",
    videoUrl: "https://www.youtube.com/results?search_query=dax+sameperiodlastyear+power+bi"
  },

  // --- FASE 3: PYTHON & GROQ AI (6 Módulos) ---
  {
    id: "m151_vscode_py",
    phase: "Fase 3: Python & AI",
    cat: "python",
    title: "Módulo 15.1: VS Code y Entorno Virtual para Python",
    summary: "Aquí sí entra VS Code: instala Python, crea tu entorno virtual venv y ejecuta tu primer script.",
    icon: "fa-brands fa-python",
    purpose: "🎯 Propósito: Configurar el entorno de programación avanzada en Python.",
    deliverable: "🏁 Entregable: Entorno virtual '.venv' activo en VS Code.",
    analogy: "Construir tu propio laboratorio cerrado de química sin contaminar la casa.",
    coach_search: "crear entorno virtual python venv vs code tutorial",
    coach_emphasis: "Aquí sí usamos VS Code para programar scripts de Python.",
    step1_theory: `python -m venv .venv -> Entorno aislado de librerías.`,
    step2_business: "Garantizar que los paquetes de datos no colisionen con otros proyectos.",
    step3_code: `print("¡Entorno de Python de Julieth Listo en VS Code!")`,
    step4_guided: ["1. Abre VS Code.", "2. Terminal -> python -m venv .venv.", "3. Seleccionar intérprete."],
    step5_individual: "Instalar pandas y pyodbc con pip install pandas pyodbc.",
    solution_individual: "En terminal: pip install pandas pyodbc sqlalchemy",
    quiz_question: "¿Cuál es el comando de consola para crear un entorno virtual en Python?",
    quiz_options: ["python -m venv .venv", "pip install python", "code .", "python start"],
    quiz_answer: 0,
    challenge: "Verificar la versión de Python en terminal.",
    commonErrors: "Olvidar activar el entorno virtual antes de instalar librerías.",
    videoUrl: "https://www.youtube.com/results?search_query=crear+entorno+virtual+python+venv"
  },
  {
    id: "m161_jupyter_pandas",
    phase: "Fase 3: Python & AI",
    cat: "python",
    title: "Módulo 16.1: Cuadernos Jupyter (.ipynb) & Librería Pandas",
    summary: "Manipula DataFrames de Pandas ejecutando celdas interactivas en cuadernos Jupyter.",
    icon: "fa-book-open-reader",
    purpose: "🎯 Propósito: Explorar y limpiar millones de filas con código interactivo.",
    deliverable: "🏁 Entregable: Cuaderno '03_Python/exploracion_pandas.ipynb'.",
    analogy: "Un cuaderno de bocetos interactivo donde ves el resultado de cada trazo de código.",
    coach_search: "jupyter notebook vs code tutorial pandas dataframe",
    coach_emphasis: "Shift + Enter ejecuta la celda actual en Jupyter.",
    step1_theory: `DataFrame (df): Tabla bidimensional en memoria.
Series: Una sola columna del DataFrame.`,
    step2_business: "Procesar archivos de datos masivos que Excel no puede abrir.",
    step3_code: `import pandas as pd
df = pd.DataFrame({'Cliente': ['Julieth', 'Carlos'], 'Edad': [24, 30]})
print(df.head())`,
    step4_guided: ["1. Crea exploracion.ipynb.", "2. Selecciona Kernel de Python.", "3. Ejecuta con Shift + Enter."],
    step5_individual: "Filtrar clientes mayores a 25 años en Pandas.",
    solution_individual: "df_mayores = df[df['Edad'] > 25]",
    quiz_question: "¿Qué atajo de teclado ejecuta una celda en un Jupyter Notebook?",
    quiz_options: ["Shift + Enter", "Ctrl + C", "F5", "Alt + Tab"],
    quiz_answer: 0,
    challenge: "Usar df.info() y df.describe().",
    commonErrors: "No seleccionar el Kernel .venv correcto.",
    videoUrl: "https://www.youtube.com/results?search_query=python+pandas+dataframe+tutorial"
  },
  {
    id: "m171_sql_python",
    phase: "Fase 3: Python & AI",
    cat: "python",
    title: "Módulo 17.1: Conexión de Python a SQL Server DataCareer",
    summary: "Lee las tablas de SQL Server LuchoX12 directamente en DataFrames con pd.read_sql().",
    icon: "fa-plug-circle-bold",
    purpose: "🎯 Propósito: Automatizar la extracción de SQL Server a Python.",
    deliverable: "🏁 Entregable: Script de extracción directa funcionando.",
    analogy: "Una tubería directa de agua entre el embalse (SQL) y tu vaso (Python).",
    coach_search: "pandas read sql server pyodbc sqlalchemy tutorial",
    coach_emphasis: "Usa la cadena de conexión con Autenticación de Windows.",
    step1_theory: `pd.read_sql("SELECT * FROM analytics.fact_llamadas", engine).`,
    step2_business: "Cargar 50,000 llamadas a Python en 2 segundos.",
    step3_code: `from sqlalchemy import create_engine
import pandas as pd

engine = create_engine("mssql+pyodbc://@LuchoX12/DataCareer?driver=ODBC+Driver+18+for+SQL+Server&trusted_connection=yes&TrustServerCertificate=yes")
df = pd.read_sql("SELECT * FROM analytics.fact_llamadas", engine)`,
    step4_guided: ["1. Copia el script a VS Code.", "2. Ejecuta la celda."],
    step5_individual: "Contar cuántas filas cargó el DataFrame con len(df).",
    solution_individual: "print(f'Total filas cargadas: {len(df)}')",
    quiz_question: "¿Qué función de Pandas permite leer una consulta SQL directamente a un DataFrame?",
    quiz_options: ["pd.read_sql()", "pd.get_sql()", "pd.load_table()", "pd.import_db()"],
    quiz_answer: 0,
    challenge: "Escribir el DataFrame resultante a un archivo Excel con df.to_excel().",
    commonErrors: "Falta de drivers ODBC de SQL Server instalados en Windows.",
    videoUrl: "https://www.youtube.com/results?search_query=pandas+read+sql+server"
  },
  {
    id: "m181_eda",
    phase: "Fase 3: Python & AI",
    cat: "python",
    title: "Módulo 18.1: Análisis Exploratorio de Datos (EDA) en Python",
    summary: "Calcula correlaciones, histogramas de distribución y detecta valores atípicos (Outliers).",
    icon: "fa-magnifying-glass-chart",
    purpose: "🎯 Propósito: Descubrir patrones ocultos en las llamadas con estadística.",
    deliverable: "🏁 Entregable: Reporte EDA '03_Python/analisis_eda.ipynb'.",
    analogy: "Un examen de rayos X completo al paciente.",
    coach_search: "analisis exploratorio de datos eda python pandas tutorial",
    coach_emphasis: "La correlación entre esperas y cancelaciones indica insatisfacción.",
    step1_theory: `df.describe(), df.corr(), df.groupby().`,
    step2_business: "Identificar cuellos de botella operativos en las llamadas de soporte.",
    step3_code: `print(df[['duracion_segundos', 'tiempo_espera_segundos']].describe())`,
    step4_guided: ["1. Ejecuta df.describe() en Jupyter.", "2. Revisa la media y la desviación estándar."],
    step5_individual: "Calcular la mediana de duración agrupada por canal.",
    solution_individual: "df.groupby('canal')['duracion_segundos'].median()",
    quiz_question: "¿Qué método de Pandas calcula métricas estadísticas como media, min, max y percentiles?",
    quiz_options: ["df.describe()", "df.stats()", "df.info()", "df.summary()"],
    quiz_answer: 0,
    challenge: "Exportar el resumen estadístico a Excel.",
    commonErrors: "Confundir la media (promedio) con la mediana.",
    videoUrl: "https://www.youtube.com/results?search_query=analisis+exploratorio+de+datos+eda+python"
  },
  {
    id: "m191_groq_intro",
    phase: "Fase 3: Python & AI",
    cat: "python",
    title: "Módulo 19.1: Introducción a Groq API y Modelo Llama 3 en Python",
    summary: "Configura la clave GROQ_API_KEY y realiza tu primera llamada a Llama 3 en milisegundos.",
    icon: "fa-robot",
    purpose: "🎯 Propósito: Integrar Inteligencia Artificial generativa en Python.",
    deliverable: "🏁 Entregable: Script '03_Python/test_groq_ia.py' respondiendo con Llama 3.",
    analogy: "Contratar a un genio de la lámpara que responde preguntas por API.",
    coach_search: "groq api python tutorial llama 3 como usar groq api",
    coach_emphasis: "Groq es el motor de inferencia de IA más rápido del mundo.",
    step1_theory: `from groq import Groq. Usa modelo llama-3.1-8b-instant.`,
    step2_business: "Procesar 30,000 comentarios de encuestas en segundos.",
    step3_code: `from groq import Groq
import os

client = Groq(api_key=os.getenv("GROQ_API_KEY"))
res = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[{"role": "user", "content": "¡Hola Llama 3! Soy Julieth"}]
)
print(res.choices[0].message.content)`,
    step4_guided: ["1. Verificar GROQ_API_KEY en .env.", "2. Ejecutar script en terminal."],
    step5_individual: "Enviar una pregunta de negocio a la IA sobre SQL.",
    solution_individual: "Cambia el prompt por: 'Explícame qué es una clave foránea en 1 frase.'",
    quiz_question: "¿Qué modelo de lenguaje ultrarrápido usamos con la API de Groq?",
    quiz_options: ["llama-3.1-8b-instant", "gpt-2", "bert", "claude-1"],
    quiz_answer: 0,
    challenge: "Ajustar el parámetro temperature=0.1.",
    commonErrors: "Dejar la clave API expuesta públicamente.",
    videoUrl: "https://www.youtube.com/results?search_query=groq+api+python+tutorial"
  },
  {
    id: "m201_sentiment_ai",
    phase: "Fase 3: Python & AI",
    cat: "python",
    title: "Módulo 20.1: Clasificación de Sentimientos en Encuestas con Groq AI",
    summary: "Clasifica automáticamente 30,000 comentarios de texto libre en Positivo, Negativo o Neutro.",
    icon: "fa-comments",
    purpose: "🎯 Propósito: Categorizar masivamente comentarios no estructurados.",
    deliverable: "🏁 Entregable: Tabla de encuestas etiquetadas con IA y guardadas en SQL.",
    analogy: "Un equipo de 100 asistentes clasificando cartas por tono emocional.",
    coach_search: "clasificacion de texto con llm python groq tutorial",
    coach_emphasis: "Usa temperature=0.0 para clasificación determinista.",
    step1_theory: `Prompt Engineering para Clasificación en formato estructurado.`,
    step2_business: "Identificar las causas principales de insatisfacción en el call center.",
    step3_code: `res = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[{"role": "user", "content": "Clasifica este comentario: 'La señal es pésima'. Responde: Positivo, Negativo o Neutro."}],
    temperature=0.0
)`,
    step4_guided: ["1. Ejecuta el clasificador en Pandas.", "2. Guarda columna 'sentimiento_ia'."],
    step5_individual: "Clasificar 10 comentarios de fact_encuestas.",
    solution_individual: "Itera los comentarios con df['comentario'].apply() enviando la consulta a Groq.",
    quiz_question: "¿Qué valor de temperatura (temperature) se sugiere en IA para tareas de clasificación determinista?",
    quiz_options: ["0.0 (o 0.1)", "1.0", "2.0", "0.9"],
    quiz_answer: 0,
    challenge: "Guardar los resultados en SQL Server con df.to_sql().",
    commonErrors: "Exceder la cuota de peticiones por minuto de la API.",
    videoUrl: "https://www.youtube.com/results?search_query=clasificacion+de+texto+python+llm"
  },

  // --- FASE 4: EMPLEABILIDAD & PORTAFOLIO (7 Módulos) ---
  {
    id: "m211_git",
    phase: "Fase 4: Empleabilidad",
    cat: "career",
    title: "Módulo 21.1: Control de Versiones con Git y GitHub",
    summary: "Crea tu repositorio local con git init, agrega archivos con git add y confirma cambios con git commit.",
    icon: "fa-brands fa-git-alt",
    purpose: "🎯 Propósito: Registrar la historia de tu código profesional.",
    deliverable: "🏁 Entregable: Repositorio Git local inicializado en la carpeta del proyecto.",
    analogy: "Los puntos de guardado en un videojuego antes de entrar a la batalla final.",
    coach_search: "git y github desde cero tutorial principiantes",
    coach_emphasis: "git init -> git add . -> git commit -m 'mensaje'.",
    step1_theory: `Git registradores de cambios local. GitHub es la plataforma en la nube.`,
    step2_business: "Nunca perder tu trabajo ni tus consultas SQL.",
    step3_code: `git init
git add .
git commit -m "feat: estructura inicial proyecto DataCall Analytics"`,
    step4_guided: ["1. Abre terminal en VS Code.", "2. Ejecuta git init.", "3. Haz tu primer commit."],
    step5_individual: "Crear el archivo .gitignore e incluir .env.",
    solution_individual: "Crea el archivo .gitignore y escribe dentro: .env y __pycache__/",
    quiz_question: "¿Cuál comando de Git guarda una foto fija (instantánea) de los cambios preparados?",
    quiz_options: ["git commit", "git push", "git init", "git clone"],
    quiz_answer: 0,
    challenge: "Ver el historial con git log.",
    commonErrors: "Subir archivos de claves .env a repositorios públicos.",
    videoUrl: "https://www.youtube.com/results?search_query=git+y+github+desde+cero"
  },
  {
    id: "m221_repo",
    phase: "Fase 4: Empleabilidad",
    cat: "career",
    title: "Módulo 22.1: Creación del Repositorio 'DataCall-Analytics' en GitHub",
    summary: "Publica tu proyecto estelar en la nube en un repositorio público en tu cuenta de GitHub.",
    icon: "fa-brands fa-github",
    purpose: "🎯 Propósito: Exhibir tu proyecto ante empresas y reclutadores.",
    deliverable: "🏁 Entregable: Enlace URL público del repositorio GitHub.",
    analogy: "La vitrina pública de tu tienda de pasteles.",
    coach_search: "subir proyecto a github desde vs code tutorial",
    coach_emphasis: "El repositorio debe ser PÚBLICO para que lo vean los evaluadores.",
    step1_theory: `git remote add origin URL -> git push -u origin main.`,
    step2_business: "Demostrar tu capacidad real de entrega técnica.",
    step3_code: `git remote add origin https://github.com/JuliethGalvis/DataCall-Analytics.git
git branch -M main
git push -u origin main`,
    step4_guided: ["1. Crea repositorio en github.com.", "2. Conecta y haz push desde VS Code."],
    step5_individual: "Verificar la carga de la carpeta 01_SQL y 02_PowerBI en la web de GitHub.",
    solution_individual: "Abre tu navegador en el enlace de GitHub y revisa las carpetas cargadas.",
    quiz_question: "¿Qué comando sube los commits locales al repositorio remoto en GitHub?",
    quiz_options: ["git push", "git pull", "git fetch", "git merge"],
    quiz_answer: 0,
    challenge: "Configurar las etiquetas del repositorio (sql, powerbi, python).",
    commonErrors: "Dejar el repositorio en modo Privado.",
    videoUrl: "https://www.youtube.com/results?search_query=subir+proyecto+a+github+desde+vs+code"
  },
  {
    id: "m231_readme",
    phase: "Fase 4: Empleabilidad",
    cat: "career",
    title: "Módulo 23.1: Documentación Profesional README.md con Business Insights",
    summary: "Redacta la presentación técnica de tu proyecto en formato Markdown con imágenes y hallazgos.",
    icon: "fa-file-code",
    purpose: "🎯 Propósito: Explicar el valor de negocio de tu proyecto a los gerentes.",
    deliverable: "🏁 Entregable: Archivo README.md impecable en GitHub.",
    analogy: "La portada y contraportada de un libro superventas.",
    coach_search: "crear readme profesional github data analyst",
    coach_emphasis: "El README.md es el documento que leen primero los reclutadores.",
    step1_theory: `Sintaxis Markdown (# Títulos, **Negrita**, imágenes, tablas).`,
    step2_business: "Vender tus habilidades de analítica con impacto de negocio.",
    step3_code: `# DataCall Analytics — Call Center Dashboard
## Problema de Negocio
Análisis de 50,000 llamadas para reducir esperas y mejorar NPS.

## Hallazgos Clave
- El 40% de cancelaciones se concentran en esperas > 120s en el turno tarde.`,
    step4_guided: ["1. Crea README.md.", "2. Redacta las 5 secciones.", "3. Haz commit y push."],
    step5_individual: "Agregar capturas de pantalla del tablero de Power BI al README.",
    solution_individual: "Inserta la imagen en Markdown: ![Dashboard](02_PowerBI/captura_dashboard.png)",
    quiz_question: "¿Qué archivo lee automáticamente GitHub para mostrar la portada de un repositorio?",
    quiz_options: ["README.md", "INDEX.html", "MAIN.py", "CONFIG.json"],
    quiz_answer: 0,
    challenge: "Insertar una tabla comparativa de resultados en Markdown.",
    commonErrors: "Rutas de imágenes rotas en el README.",
    videoUrl: "https://www.youtube.com/results?search_query=crear+readme+profesional+github"
  },
  {
    id: "m241_cv",
    phase: "Fase 4: Empleabilidad",
    cat: "career",
    title: "Módulo 24.1: Preparación de Hoja de Vida (CV) de Data Analyst",
    summary: "Estructura tu hoja de vida en formato ATS de 1 página destacando el proyecto DataCall.",
    icon: "fa-file-lines",
    purpose: "🎯 Propósito: Superar los filtros automáticos de los sistemas de selección (ATS).",
    deliverable: "🏁 Entregable: Documento PDF de Hoja de Vida formateado en 1 página.",
    analogy: "Tu pasaporte oficial para entrar al mercado laboral.",
    coach_search: "hoja de vida data analyst formato ats ejemplo",
    coach_emphasis: "Usa verbos de acción y números cuantitativos en cada logro.",
    step1_theory: `Formato ATS: Sin fotos ni íconos raros, texto plano legible.`,
    step2_business: "Lograr que tu CV sea seleccionado por los reclutadores.",
    step3_code: `Junior Data Analyst | SQL Server • Power BI • DAX • Python
- Analicé 50,000 llamadas operacionales reduciendo esperas en un 15% mediante tableros en Power BI.`,
    step4_guided: ["1. Usa plantilla ATS en Word/Canva.", "2. Agrega el proyecto DataCall con enlace a GitHub."],
    step5_individual: "Redactar el perfil profesional en 3 líneas.",
    solution_individual: "'Analista de Datos Jr apasionada por transformar datos operacionales en decisiones de negocio...'",
    quiz_question: "¿Qué significa el formato ATS en hojas de vida?",
    quiz_options: ["Applicant Tracking System (Filtro automático de candidatos)", "Analista Técnico Superior", "Archivo Texto Simple", "Asistente de Trabajo"],
    quiz_answer: 0,
    challenge: "Limitar el CV a 1 página exacta.",
    commonErrors: "Poner diseños excesivos con barras de porcentaje que confunden a los robots ATS.",
    videoUrl: "https://www.youtube.com/results?search_query=hoja+de+vida+data+analyst+formato+ats"
  },
  {
    id: "m251_linkedin",
    phase: "Fase 4: Empleabilidad",
    cat: "career",
    title: "Módulo 25.1: Optimización de Perfil de LinkedIn y Red de Contactos",
    summary: "Optimiza tu titular, extracto y publica tu primer post del proyecto DataCall con video.",
    icon: "fa-brands fa-linkedin",
    purpose: "🎯 Propósito: Atraer ofertas laborales de reclutadores directamente a tu buzón.",
    deliverable: "🏁 Entregable: Publicación estelar del proyecto DataCall en LinkedIn.",
    analogy: "Tu vitrina profesional visible ante millones de empresas 24/7.",
    coach_search: "linkedin para data analyst como publicar proyectos",
    coach_emphasis: "Publicar un video demostrativo del dashboard aumenta las vistas 5X.",
    step1_theory: `Titular SEO: Junior Data Analyst | SQL Server | Power BI | DAX | Python.`,
    step2_business: "Construir tu marca personal en la industria tech.",
    step3_code: `¡Hola a todos! 🚀 Les comparto mi proyecto estelar DataCall Analytics donde analicé 50,000 llamadas... Enlace a GitHub en comentarios 👇`,
    step4_guided: ["1. Optimiza titular y foto de perfil.", "2. Redacta el post del proyecto.", "3. Adjunta video/imagen."],
    step5_individual: "Conectar con 20 reclutadores de TI en Colombia.",
    solution_individual: "Busca en LinkedIn: 'IT Recruiter Colombia' o 'Talent Acquisition Data' y envía invitación personalizada.",
    quiz_question: "¿Cuál es el mejor lugar para colocar el enlace a GitHub en una publicación de LinkedIn?",
    quiz_options: ["En el primer comentario", "En el título", "No ponerlo", "En la foto"],
    quiz_answer: 0,
    challenge: "Lograr 10 interacciones en tu post de proyecto.",
    commonErrors: "Dejar el perfil de LinkedIn en privado o sin foto profesional.",
    videoUrl: "https://www.youtube.com/results?search_query=linkedin+para+data+analyst+como+publicar+proyectos"
  },
  {
    id: "m261_mock",
    phase: "Fase 4: Empleabilidad",
    cat: "career",
    title: "Módulo 26.1: Simulación de Entrevistas Técnicas y Preguntas Trampa",
    summary: "Ensaya respuestas con el método STAR y supera preguntas trampa sobre errores de datos.",
    icon: "fa-comments-dollar",
    purpose: "🎯 Propósito: Transmitir máxima seguridad técnica durante las entrevistas de selección.",
    deliverable: "🏁 Entregable: Evaluación del Simulador Mock Trial aprobada.",
    analogy: "Un ensayo general en el teatro antes de la noche del estreno.",
    coach_search: "preguntas de entrevista tecnica data analyst respuesta STAR",
    coach_emphasis: "Método STAR: Situación, Tarea, Acción, Resultado.",
    step1_theory: `Responde con estructura de negocio e impacto numérico.`,
    step2_business: "Cerrar la contratación con los líderes de equipo de analítica.",
    step3_code: `STAR: "En DataCall (Situación), debía reducir el tiempo de espera (Tarea). Diseñé un modelo en SSMS y Power BI (Acción), logrando reducir la espera en 15% (Resultado)."`,
    step4_guided: ["1. Abre la pestaña Simulador Mock Trial.", "2. Responde las 3 preguntas.", "3. Revisa la retroalimentación."],
    step5_individual: "Responder en voz alta a la pregunta: ¿Cuál ha sido tu mayor reto técnico?",
    solution_individual: "Habla sobre cómo solucionaste los datos duplicados en SQL Server usando ROW_NUMBER().",
    quiz_question: "¿Qué significan las siglas del método STAR en entrevistas laborales?",
    quiz_options: ["Situación, Tarea, Acción, Resultado", "Sistema, Técnica, Análisis, Reporte", "Solución, Trabajo, Agilidad, Rendimiento", "Ninguna"],
    quiz_answer: 0,
    challenge: "Completar la simulación de entrevista con puntaje perfecto.",
    commonErrors: "Responder con dudas o dudar de la capacidad de manejo de datos.",
    videoUrl: "https://www.youtube.com/results?search_query=preguntas+de+entrevista+tecnica+data+analyst"
  },
  {
    id: "m271_offer",
    phase: "Fase 4: Empleabilidad",
    cat: "career",
    title: "Módulo 27.1: Estrategia de Postulación & Negociación Salarial 🏆",
    summary: "Postulación estratégica diaria, seguimiento a aplicaciones y negociación de tu oferta laboral.",
    icon: "fa-award",
    purpose: "🎯 Propósito: Asegurar la firma de tu contrato de trabajo como Data Analyst.",
    deliverable: "🏁 Entregable: Julieth empleada como Junior Data Analyst 💖.",
    analogy: "Cruzar la línea de meta en primer lugar y levantar el trofeo.",
    coach_search: "estrategia postulaciones empleos data analyst negociacion salarial",
    coach_emphasis: "Postula a 5 vacantes diarias consistentes durante 3 semanas.",
    step1_theory: `Pipeline de postulaciones en LinkedIn, ElEmpleo y Computrabajo.`,
    step2_business: "Iniciar tu carrera profesional en analítica de datos.",
    step3_code: `¡Felicidades Julieth hermosa! Has completado los 27 módulos y eres una Data Analyst estelar 🏆💖✨`,
    step4_guided: ["1. Revisa tu progreso al 100%.", "2. Descarga tu portafolio.", "3. Empieza a postular."],
    step5_individual: "Celebrar con tu novio haber completado todo el roadmap 💖.",
    solution_individual: "¡Un abrazo gigante y a triunfar en el mercado laboral!",
    quiz_question: "¿Cuál es la recomendación diaria de postulaciones enfocadas para acelerar la contratación?",
    quiz_options: ["3 a 5 vacantes de calidad con CV adaptado", "100 postulaciones sin leer", "Esperar a que te llamen", "Ninguna"],
    quiz_answer: 0,
    challenge: "Firmar tu primer contrato laboral de Data Analyst.",
    commonErrors: "Rendirse en la primera semana de postulaciones.",
    videoUrl: "https://www.youtube.com/results?search_query=estrategia+postulaciones+empleos+data+analyst"
  }
];

// --- DATASET: LOGROS & MEDALLAS ---
const BADGES_DATA = [
  { id: "b1", title: "Primera Consulta SSMS", icon: "fa-database", desc: "Completar la conexión a LuchoX12 y ejecutar F5.", reqModule: "m01_ssms" },
  { id: "b2", title: "Reina del SELECT", icon: "fa-eye", desc: "Dominar la extracción de columnas específicas.", reqModule: "m21_select" },
  { id: "b3", title: "Filtro Magistral WHERE", icon: "fa-filter", desc: "Filtrar llamadas y clientes por condiciones de negocio.", reqModule: "m31_where" },
  { id: "b4", title: "Agrupadora Experta", icon: "fa-chart-pie", desc: "Calcular métricas de resumen con GROUP BY y COUNT.", reqModule: "m41_groupby" },
  { id: "b5", title: "Maestra de JOINs", icon: "fa-link", desc: "Cruzar tablas relacionales con INNER JOIN y LEFT JOIN.", reqModule: "m51_joins" },
  { id: "b6", title: "Arquitecta de Power BI", icon: "fa-project-diagram", desc: "Construir el Modelo Estrella y la Tabla Calendario.", reqModule: "m111_model" },
  { id: "b7", title: "Calculadora DAX", icon: "fa-calculator", desc: "Crear medidas con CALCULATE y DIVIDE.", reqModule: "m131_calculate" },
  { id: "b8", title: "Programadora Python", icon: "fa-brands fa-python", desc: "Manipular DataFrames de Pandas en VS Code.", reqModule: "m161_jupyter_pandas" },
  { id: "b9", title: "Especialista Groq AI", icon: "fa-robot", desc: "Clasificar encuestas masivas con Llama 3.", reqModule: "m201_sentiment_ai" },
  { id: "b10", title: "Portafolio en GitHub", icon: "fa-brands fa-github", desc: "Publicar el proyecto DataCall con README profesional.", reqModule: "m221_repo" },
  { id: "b11", title: "Entrevista Aprobada", icon: "fa-award", desc: "Completar la simulación de entrevista Mock Trial.", reqModule: "m261_mock" },
  { id: "b12", title: "100% Empleable Pro", icon: "fa-crown", desc: "Completar los 27 módulos del roadmap DataCareer.", reqModule: "m271_offer" }
];

// --- DATASET: GLOSARIO INTERACTIVO ---
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
  { term: "Tabla de Hechos (Fact)", def: "Tabla central que guarda los eventos numéricos (llamadas, ventas).", analogy: "La caja registradora de eventos del negocio." },
  { term: "Tabla de Dimensión (Dim)", def: "Tabla secundaria que guarda los detalles descriptivos (clientes, agentes).", analogy: "El directorio telefónico con nombres y direcciones." },
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

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderModules();
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

// --- RENDER MODULES ---
function renderModules(filterCat = 'all', searchQuery = '') {
  const container = document.getElementById('modules-container');
  container.innerHTML = '';

  const filtered = MODULES_DATA.filter(m => {
    const matchesCat = filterCat === 'all' || m.cat === filterCat;
    const matchesSearch = searchQuery === '' || 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  filtered.forEach(m => {
    const isCompleted = completedModules.includes(m.id);
    const card = document.createElement('div');
    card.className = `module-card ${isCompleted ? 'completed' : ''}`;
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
      <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--kitty-hotpink); font-weight: 800;">
        <span><i class="fa-solid ${m.icon}"></i> Abrir Lección Guiada Paso a Paso</span>
        <span>${isCompleted ? 'Completado 💖' : 'Pendiente ✨'}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- MODAL DIALOG WITH QUIZ & SSMS FOCUS ---
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

  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <span class="phase-tag ${m.cat}">${m.phase}</span>
      <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" onclick="toggleModuleCompletion('${m.id}'); closeModal();">
        <i class="fa-solid ${isCompleted ? 'fa-rotate-left' : 'fa-heart'}"></i> ${isCompleted ? 'Marcar Pendiente' : 'Completado con Éxito 💕 (+100 XP)'}
      </button>
    </div>

    <h2 style="font-size: 24px; margin-bottom: 12px; color: var(--kitty-hotpink); font-weight: 900;">${m.title}</h2>
    <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 20px; font-weight: 600;">${m.summary}</p>

    <!-- PROPOSITO Y ENTREGABLE TANGIBLE -->
    <div style="background: linear-gradient(135deg, #fff0f5, #fce4ec); border: 2px solid #ff4081; padding: 20px; border-radius: 18px; margin-bottom: 24px; box-shadow: var(--shadow-soft);">
      <h3 style="color: #ff1493; font-size: 16px; font-weight: 900; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-bullseye"></i> Propósito del Módulo:
      </h3>
      <p style="color: #3c1a26; font-size: 14px; font-weight: 700; line-height: 1.6; margin-bottom: 12px;">${m.purpose}</p>
      
      <div style="background-color: #ffffff; border: 2px solid #ff1493; padding: 14px; border-radius: 14px;">
        <h4 style="color: #ff1493; font-size: 14px; font-weight: 900; margin-bottom: 4px;">
          <i class="fa-solid fa-flag-checkered"></i> ${m.deliverable}
        </h4>
      </div>
    </div>

    <!-- Coach View -->
    ${currentViewMode === 'coach' ? `
      <!-- COACH CHEAT-SHEET BOX -->
      <div class="coach-support-box">
        <h3><i class="fa-solid fa-graduation-cap"></i> 🔍 Guía & Apoyo para el Tutor / Coach (Tú):</h3>
        <ul>
          <li><strong>🔎 ¿Qué buscar en YouTube/Google para preparar esta lección?:</strong><br><em>"${m.coach_search}"</em></li>
          <li><strong>🔑 Puntos clave a enfatizar en la clase:</strong><br>${m.coach_emphasis}</li>
        </ul>
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: var(--kitty-hotpink); font-size: 15px; margin-bottom: 6px;"><i class="fa-solid fa-lightbulb"></i> Analogía Sencilla:</h3>
        <p style="color: var(--text-dark); font-weight: 600;">${m.analogy}</p>
      </div>
    ` : ''}

    <div style="background-color: #fffdfd; border: 2px solid #f8bbd0; padding: 20px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 8px;"><i class="fa-solid fa-book-open"></i> Paso 1: ¿Qué vamos a aprender hoy? (Explicación Paso a Paso)</h3>
      <div style="color: var(--text-dark); font-weight: 500; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${m.step1_theory}</div>
    </div>

    <div style="background-color: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-briefcase"></i> Paso 2: ¿Cómo funciona en el Call Center DataCall?</h3>
      <p style="color: var(--text-dark); font-weight: 600; font-size: 14px;">${m.step2_business}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-code"></i> Paso 3: Explicación de Código y Sintaxis Línea por Línea</h3>
      <div class="code-block">${m.step3_code}</div>
    </div>

    <div style="background-color: #fff8fa; border: 2px solid #f8bbd0; padding: 20px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 10px;"><i class="fa-solid fa-list-check"></i> Paso 4: Instrucciones Guiadas Paso a Paso (¡Hazlo Ahora!)</h3>
      <ol style="padding-left: 20px; color: var(--text-dark); font-weight: 600; font-size: 14px;">
        ${guidedStepsHtml}
      </ol>
    </div>

    <!-- QUIZ INTERACTIVO PARA AUTO-ESTUDIO -->
    ${m.quiz_question ? `
      <div style="background-color: #fff0f5; border: 2px solid #ff4081; padding: 20px; border-radius: 16px; margin-bottom: 20px;">
        <h3 style="color: #ff1493; font-size: 16px; margin-bottom: 8px;"><i class="fa-solid fa-circle-question"></i> Quiz de Comprobación Autónoma para Julieth:</h3>
        <p style="color: #3c1a26; font-weight: 700; font-size: 14px; margin-bottom: 12px;">${m.quiz_question}</p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${quizOptionsHtml}
        </div>
        <div id="quiz-feedback-${m.id}" style="margin-top: 12px; display: none;"></div>
      </div>
    ` : ''}

    <div style="background-color: #fffdfd; border: 2px solid #f8bbd0; padding: 18px; border-radius: 16px; margin-bottom: 20px;">
      <h3 style="color: var(--kitty-hotpink); font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-user-pen"></i> Paso 5: Ejercicio Individual para Julieth</h3>
      <p style="color: var(--text-dark); font-weight: 600; font-size: 14px; margin-bottom: 10px;">${m.step5_individual}</p>
      
      <button class="btn btn-secondary" onclick="toggleSolution('sol-${m.id}')" style="font-size: 12px; padding: 6px 14px;">
        <i class="fa-solid fa-eye"></i> Revelar / Ocultar Pista y Solución
      </button>
      <div id="sol-${m.id}" style="display: none; margin-top: 10px; background-color: #e8f5e9; color: #1b5e20; padding: 12px; border-radius: 10px; font-size: 13px; font-weight: 600;">
        <strong>Solución Paso a Paso:</strong><br>${m.solution_individual}
      </div>
    </div>

    <div style="background-color: #fff8e1; padding: 18px; border-radius: 16px; border: 1px solid #ffe082; margin-bottom: 20px;">
      <h3 style="color: #f57f17; font-size: 16px; margin-bottom: 6px;"><i class="fa-solid fa-trophy"></i> Paso 6: Reto Final del Módulo</h3>
      <p style="color: #5d4037; font-weight: 700; font-size: 14px;">${m.challenge}</p>
    </div>

    ${m.videoUrl ? `
      <div style="margin-bottom: 20px;">
        <a href="${m.videoUrl}" target="_blank" class="btn btn-primary" style="font-size: 13px; text-decoration: none; width: 100%; justify-content: center;">
          <i class="fa-solid fa-play"></i> Ver Video Tutorial Recomendado en YouTube
        </a>
      </div>
    ` : ''}

    <div style="margin-bottom: 12px; background-color: #ffebee; padding: 14px; border-radius: 12px;">
      <h3 style="color: var(--kitty-red); font-size: 15px; margin-bottom: 4px;"><i class="fa-solid fa-triangle-exclamation"></i> Paso 7: Errores Comunes y Soluciones</h3>
      <p style="color: #b71c1c; font-weight: 600; font-size: 13px;">${m.commonErrors}</p>
    </div>
  `;

  modal.style.display = 'flex';
}

function checkQuizAnswer(moduleId, selectedIdx, correctIdx) {
  const fb = document.getElementById(`quiz-feedback-${moduleId}`);
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
        💡 ¡Casi! Inténtalo de nuevo o repasa el Paso 1 para ver la respuesta.
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
  openModuleModal('m01_ssms');
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

  document.getElementById('progress-percent').innerText = `${percent}%`;
  document.getElementById('progress-fill').style.width = `${percent}%`;
  document.getElementById('completed-modules-count').innerText = count;
  document.getElementById('user-xp').innerText = xp.toLocaleString();
  const mobileXp = document.getElementById('mobile-xp-val');
  if (mobileXp) mobileXp.innerText = xp.toLocaleString();

  let level = "Nivel 1: Data Apprentice 🌸";
  if (percent >= 25 && percent < 50) level = "Nivel 2: SQL Warrior 👑";
  else if (percent >= 50 && percent < 75) level = "Nivel 3: DAX Architect ✨";
  else if (percent >= 75) level = "Nivel 4: Junior Data Analyst Pro 🏆";
  
  document.getElementById('level-title').innerText = level;
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

    let html = '<table class="sim-table"><thead><tr>';
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

  document.getElementById(`tab-${tabId}`).style.display = 'block';
  event.currentTarget.classList.add('active');

  // Close mobile sidebar after tab selection on mobile
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
  event.currentTarget.classList.add('active');
  renderModules(cat);
}
