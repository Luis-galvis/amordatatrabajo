import os
import random
from datetime import date, timedelta
from urllib.parse import quote_plus

import numpy as np
import pandas as pd
from dotenv import load_dotenv
from faker import Faker
from sqlalchemy import create_engine, text

load_dotenv()

# ============================================================
# DataCareer Lab - Generador de datos sintéticos
# SQL Server + Python + Faker + Groq AI
#
# Objetivo:
#   Crear una BD de Call Center para entrenar a una Data Analyst.
#
# Diseño:
#   1) Generamos datos razonablemente "limpios".
#   2) Generamos relaciones válidas.
#   3) Inyectamos problemas de calidad de datos de forma controlada.
#   4) Dejamos todo listo para SQL Server + Power BI.
#   5) Enriquecemos comentarios con Groq AI (llama-3.1-8b-instant).
# ============================================================


SERVER = os.getenv("SQL_SERVER", "localhost")
DATABASE = os.getenv("SQL_DATABASE", "DataCareer")
DRIVER = os.getenv("SQL_DRIVER", "ODBC Driver 18 for SQL Server")
SCHEMA = "analytics"

N_CLIENTES = 15000
N_AGENTES = 150
N_CAMPANIAS = 10
N_PRODUCTOS = 20
N_LLAMADAS = 50000
N_VENTAS = 18000
N_ENCUESTAS = 30000

SEED = 20260814
random.seed(SEED)
np.random.seed(SEED)
Faker.seed(SEED)
fake = Faker("es_CO")

# Dos años completos para que nunca falten fechas.
DATE_START = date(2025, 1, 1)
DATE_END = date(2026, 12, 31)


def server_engine():
    """Conexión al servidor SQL Server usando Windows Authentication."""
    server_url = (
        f"mssql+pyodbc://@{SERVER}/master?"
        f"driver={quote_plus(DRIVER)}&trusted_connection=yes&TrustServerCertificate=yes"
    )
    return create_engine(server_url, fast_executemany=True)


def db_engine():
    """Conexión a DataCareer."""
    db_url = (
        f"mssql+pyodbc://@{SERVER}/{DATABASE}?"
        f"driver={quote_plus(DRIVER)}&trusted_connection=yes&TrustServerCertificate=yes"
    )
    return create_engine(db_url, fast_executemany=True)


def create_database():
    eng = server_engine().execution_options(isolation_level="AUTOCOMMIT")
    with eng.connect() as conn:
        exists = conn.execute(
            text("SELECT DB_ID(:db)"), {"db": DATABASE}
        ).scalar()

        if not exists:
            conn.execute(text(f"CREATE DATABASE [{DATABASE}]"))
            print(f"[OK] Base de datos {DATABASE} creada.")
        else:
            print(f"[OK] Base de datos {DATABASE} ya existe.")

    eng.dispose()


def create_schema_and_tables():
    eng = db_engine()

    ddl = """
    IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = 'analytics')
        EXEC('CREATE SCHEMA analytics');

    IF OBJECT_ID('analytics.fact_encuestas', 'U') IS NOT NULL DROP TABLE analytics.fact_encuestas;
    IF OBJECT_ID('analytics.fact_ventas', 'U') IS NOT NULL DROP TABLE analytics.fact_ventas;
    IF OBJECT_ID('analytics.fact_llamadas', 'U') IS NOT NULL DROP TABLE analytics.fact_llamadas;
    IF OBJECT_ID('analytics.dim_producto', 'U') IS NOT NULL DROP TABLE analytics.dim_producto;
    IF OBJECT_ID('analytics.dim_campania', 'U') IS NOT NULL DROP TABLE analytics.dim_campania;
    IF OBJECT_ID('analytics.dim_agente', 'U') IS NOT NULL DROP TABLE analytics.dim_agente;
    IF OBJECT_ID('analytics.dim_cliente', 'U') IS NOT NULL DROP TABLE analytics.dim_cliente;
    IF OBJECT_ID('analytics.dim_fecha', 'U') IS NOT NULL DROP TABLE analytics.dim_fecha;

    CREATE TABLE analytics.dim_fecha (
        fecha_key INT PRIMARY KEY,
        fecha DATE NOT NULL,
        anio INT NOT NULL,
        trimestre INT NOT NULL,
        mes INT NOT NULL,
        nombre_mes VARCHAR(20) NOT NULL,
        semana INT NOT NULL,
        dia INT NOT NULL,
        nombre_dia VARCHAR(20) NOT NULL,
        es_fin_de_semana BIT NOT NULL
    );

    CREATE TABLE analytics.dim_cliente (
        cliente_id INT PRIMARY KEY,
        nombre VARCHAR(120) NOT NULL,
        edad INT NULL,
        ciudad VARCHAR(50) NULL,
        tipo_cliente VARCHAR(30) NULL,
        fecha_registro DATE NOT NULL,
        segmento VARCHAR(30) NULL
    );

    CREATE TABLE analytics.dim_agente (
        agente_id INT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        ciudad VARCHAR(50) NULL,
        turno VARCHAR(20) NOT NULL,
        nivel VARCHAR(20) NOT NULL,
        fecha_ingreso DATE NOT NULL,
        activo BIT NOT NULL
    );

    CREATE TABLE analytics.dim_campania (
        campania_id INT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        producto VARCHAR(100) NOT NULL,
        canal VARCHAR(30) NOT NULL,
        objetivo VARCHAR(50) NOT NULL,
        fecha_inicio DATE NOT NULL,
        fecha_fin DATE NULL
    );

    CREATE TABLE analytics.dim_producto (
        producto_id INT PRIMARY KEY,
        producto VARCHAR(100) NOT NULL,
        categoria VARCHAR(50) NOT NULL,
        precio_base DECIMAL(12,2) NOT NULL
    );

    CREATE TABLE analytics.fact_llamadas (
        llamada_id INT PRIMARY KEY,
        fecha_key INT NOT NULL,
        cliente_id INT NOT NULL,
        agente_id INT NOT NULL,
        campania_id INT NOT NULL,
        hora TIME NOT NULL,
        duracion_segundos INT NULL,
        tiempo_espera_segundos INT NULL,
        resultado VARCHAR(40) NULL,
        canal VARCHAR(30) NULL,
        abandono BIT NULL,
        resolucion_primer_contacto BIT NULL,
        transferida BIT NULL,
        motivo_contacto VARCHAR(80) NULL,
        CONSTRAINT FK_ll_fecha FOREIGN KEY(fecha_key) REFERENCES analytics.dim_fecha(fecha_key),
        CONSTRAINT FK_ll_cliente FOREIGN KEY(cliente_id) REFERENCES analytics.dim_cliente(cliente_id),
        CONSTRAINT FK_ll_agente FOREIGN KEY(agente_id) REFERENCES analytics.dim_agente(agente_id),
        CONSTRAINT FK_ll_camp FOREIGN KEY(campania_id) REFERENCES analytics.dim_campania(campania_id)
    );

    CREATE TABLE analytics.fact_ventas (
        venta_id INT PRIMARY KEY,
        llamada_id INT NOT NULL,
        fecha_key INT NOT NULL,
        cliente_id INT NOT NULL,
        agente_id INT NOT NULL,
        producto_id INT NOT NULL,
        cantidad INT NULL,
        valor_unitario DECIMAL(12,2) NULL,
        descuento DECIMAL(5,2) NULL,
        valor_total DECIMAL(14,2) NULL,
        estado VARCHAR(30) NULL,
        CONSTRAINT FK_ve_llamada FOREIGN KEY(llamada_id) REFERENCES analytics.fact_llamadas(llamada_id),
        CONSTRAINT FK_ve_fecha FOREIGN KEY(fecha_key) REFERENCES analytics.dim_fecha(fecha_key),
        CONSTRAINT FK_ve_cliente FOREIGN KEY(cliente_id) REFERENCES analytics.dim_cliente(cliente_id),
        CONSTRAINT FK_ve_agente FOREIGN KEY(agente_id) REFERENCES analytics.dim_agente(agente_id),
        CONSTRAINT FK_ve_producto FOREIGN KEY(producto_id) REFERENCES analytics.dim_producto(producto_id)
    );

    CREATE TABLE analytics.fact_encuestas (
        encuesta_id INT PRIMARY KEY,
        llamada_id INT NOT NULL,
        fecha_key INT NOT NULL,
        cliente_id INT NOT NULL,
        agente_id INT NOT NULL,
        satisfaccion INT NULL,
        nps INT NULL,
        comentario VARCHAR(250) NULL,
        CONSTRAINT FK_en_llamada FOREIGN KEY(llamada_id) REFERENCES analytics.fact_llamadas(llamada_id),
        CONSTRAINT FK_en_fecha FOREIGN KEY(fecha_key) REFERENCES analytics.dim_fecha(fecha_key),
        CONSTRAINT FK_en_cliente FOREIGN KEY(cliente_id) REFERENCES analytics.dim_cliente(cliente_id),
        CONSTRAINT FK_en_agente FOREIGN KEY(agente_id) REFERENCES analytics.dim_agente(agente_id)
    );
    """

    with eng.begin() as conn:
        conn.execute(text(ddl))

    eng.dispose()
    print("[OK] Schema y tablas creados.")


def write_df(engine, df, table):
    df.to_sql(
        table,
        engine,
        schema=SCHEMA,
        if_exists="append",
        index=False,
        chunksize=2000,
        method=None,
    )
    print(f"[OK] {table}: {len(df):,} filas")


def gen_dates():
    rows = []
    d = DATE_START
    while d <= DATE_END:
        rows.append({
            "fecha_key": int(d.strftime("%Y%m%d")),
            "fecha": d,
            "anio": d.year,
            "trimestre": (d.month - 1) // 3 + 1,
            "mes": d.month,
            "nombre_mes": d.strftime("%B"),
            "semana": d.isocalendar().week,
            "dia": d.day,
            "nombre_dia": d.strftime("%A"),
            "es_fin_de_semana": int(d.weekday() >= 5),
        })
        d += timedelta(days=1)
    return pd.DataFrame(rows)


def gen_clients():
    ciudades = ["Bogotá", "Medellín", "Cali", "Ibagué", "Barranquilla", "Bucaramanga"]
    tipos = ["Nuevo", "Recurrente", "Premium", "Corporativo"]
    segmentos = ["Bronce", "Plata", "Oro", "Premium"]

    rows = []
    for i in range(1, N_CLIENTES + 1):
        rows.append({
            "cliente_id": i,
            "nombre": fake.name(),
            "edad": random.randint(18, 77),
            "ciudad": random.choice(ciudades),
            "tipo_cliente": random.choice(tipos),
            "fecha_registro": fake.date_between(
                start_date=DATE_START, end_date=DATE_END
            ),
            "segmento": random.choice(segmentos),
        })

    df = pd.DataFrame(rows)

    # Inconsistencias intencionales.
    idx = np.random.choice(df.index, 180, replace=False)
    variants = ["Bogota", "BOGOTA", "bogota", "Bogotá ", "bogotá"]
    df.loc[idx, "ciudad"] = np.random.choice(variants, len(idx))

    df["edad"] = df["edad"].astype(object)
    idx = np.random.choice(df.index, 80, replace=False)
    df.loc[idx, "edad"] = np.random.choice([None, 8, 9, 101, 120], len(idx))

    df["tipo_cliente"] = df["tipo_cliente"].astype(object)
    idx = np.random.choice(df.index, 50, replace=False)
    df.loc[idx, "tipo_cliente"] = None

    return df


def gen_agents():
    ciudades = ["Bogotá", "Medellín", "Cali", "Ibagué"]
    turnos = ["Mañana", "Tarde", "Noche"]
    niveles = ["Junior", "Semi Senior", "Senior"]

    rows = []
    for i in range(1, N_AGENTES + 1):
        rows.append({
            "agente_id": i,
            "nombre": f"Agente {i:03d}",
            "ciudad": random.choice(ciudades),
            "turno": random.choice(turnos),
            "nivel": random.choice(niveles),
            "fecha_ingreso": fake.date_between(
                start_date=date(2023, 1, 1), end_date=DATE_END
            ),
            "activo": int(random.random() > 0.08),
        })
    return pd.DataFrame(rows)


def gen_campaigns():
    rows = [
        (1, "Retención Hogar", "Internet Hogar", "Telefónico", "Retención", date(2025,1,1), date(2025,12,31)),
        (2, "Upgrade Premium", "Plan Premium", "Telefónico", "Venta", date(2025,1,15), None),
        (3, "Renovación Móvil", "Plan Móvil", "Telefónico", "Renovación", date(2025,2,1), None),
        (4, "Soporte Técnico", "Soporte", "Telefónico", "Servicio", date(2025,1,1), None),
        (5, "Cross Selling", "Servicios Adicionales", "Telefónico", "Venta", date(2025,3,1), None),
        (6, "Fidelización", "Programa Fidelidad", "Chat", "Retención", date(2025,1,1), None),
        (7, "Recuperación", "Clientes Inactivos", "Telefónico", "Recuperación", date(2025,4,1), None),
        (8, "Encuesta Servicio", "Experiencia", "Chat", "Experiencia", date(2025,1,1), None),
        (9, "Migración", "Fibra Óptica", "Telefónico", "Migración", date(2025,5,1), None),
        (10, "Ventas Digitales", "Paquete Digital", "WhatsApp", "Venta", date(2025,6,1), None),
    ]
    return pd.DataFrame(rows, columns=[
        "campania_id","nombre","producto","canal","objetivo","fecha_inicio","fecha_fin"
    ])


def gen_products():
    data = [
        ("Plan Básico","Móvil",35000),("Plan Plus","Móvil",55000),
        ("Plan Premium","Móvil",85000),("Internet 300M","Internet",65000),
        ("Internet 600M","Internet",85000),("Internet 900M","Internet",110000),
        ("Fibra Hogar","Internet",95000),("TV Básico","Entretenimiento",45000),
        ("TV Premium","Entretenimiento",75000),("Streaming Pack","Entretenimiento",40000),
        ("Seguro Móvil","Adicional",18000),("Soporte Premium","Adicional",25000),
        ("Cloud Personal","Digital",30000),("Antivirus","Digital",22000),
        ("Música Premium","Digital",15000),("Equipo Básico","Equipos",450000),
        ("Equipo Plus","Equipos",900000),("Equipo Pro","Equipos",1800000),
        ("Accesorio","Equipos",80000),("Paquete Familiar","Móvil",120000),
    ]
    return pd.DataFrame(
        [{"producto_id": i+1, "producto": p, "categoria": c, "precio_base": price}
         for i,(p,c,price) in enumerate(data)]
    )


def gen_calls(clients, agents, campaigns, dates):
    date_keys = dates["fecha_key"].to_numpy()
    client_ids = clients["cliente_id"].to_numpy()
    agent_ids = agents["agente_id"].to_numpy()
    campaign_ids = campaigns["campania_id"].to_numpy()

    # Una mezcla realista de resultados.
    resultados = ["Resuelta","Resuelta","Resuelta","Transferida","No Resuelta","Venta","Seguimiento"]
    canales = ["Telefónico","Telefónico","Telefónico","Chat","WhatsApp"]
    motivos = [
        "Facturación","Soporte técnico","Cambio de plan",
        "Cancelación","Información","Queja","Compra"
    ]

    rows = []
    for i in range(1, N_LLAMADAS + 1):
        duracion = int(np.random.lognormal(mean=5.7, sigma=0.55))
        espera = max(0, int(np.random.gamma(shape=2.2, scale=65)))
        abandono = int(random.random() < 0.075)
        fcr = int(random.random() < 0.72 and not abandono)
        transferida = int(random.random() < 0.12)

        rows.append({
            "llamada_id": i,
            "fecha_key": int(random.choice(date_keys)),
            "cliente_id": int(random.choice(client_ids)),
            "agente_id": int(random.choice(agent_ids)),
            "campania_id": int(random.choice(campaign_ids)),
            "hora": f"{random.randint(8,22):02d}:{random.randint(0,59):02d}:00",
            "duracion_segundos": duracion,
            "tiempo_espera_segundos": espera,
            "resultado": random.choice(resultados),
            "canal": random.choice(canales),
            "abandono": abandono,
            "resolucion_primer_contacto": fcr,
            "transferida": transferida,
            "motivo_contacto": random.choice(motivos),
        })

    df = pd.DataFrame(rows)

    df["duracion_segundos"] = df["duracion_segundos"].astype(object)
    df["tiempo_espera_segundos"] = df["tiempo_espera_segundos"].astype(object)
    df["resolucion_primer_contacto"] = df["resolucion_primer_contacto"].astype(object)
    df["canal"] = df["canal"].astype(object)

    # Problemas intencionales.
    for col, count in [
        ("duracion_segundos", 250),
        ("tiempo_espera_segundos", 200),
        ("resolucion_primer_contacto", 180),
        ("canal", 120),
    ]:
        idx = np.random.choice(df.index, count, replace=False)
        if col == "tiempo_espera_segundos":
            df.loc[idx[:100], col] = -np.random.randint(1, 30, 100)
            df.loc[idx[100:], col] = None
        elif col == "duracion_segundos":
            df.loc[idx[:100], col] = np.random.choice([0, 3, 5, 9999, 20000], 100)
            df.loc[idx[100:], col] = None
        elif col == "resolucion_primer_contacto":
            df.loc[idx, col] = None
        else:
            df.loc[idx[:60], col] = "telefonico"
            df.loc[idx[60:], col] = None

    return df


def gen_sales(calls, products):
    # Ventas siempre apuntan a una llamada válida.
    call_ids = np.random.choice(calls["llamada_id"], N_VENTAS, replace=True)
    product_ids = np.random.choice(products["producto_id"], N_VENTAS, replace=True)

    product_prices = products.set_index("producto_id")["precio_base"]

    rows = []
    for i in range(1, N_VENTAS + 1):
        cid = int(call_ids[i-1])
        pid = int(product_ids[i-1])
        qty = random.randint(1, 3)
        unit = float(product_prices.loc[pid])
        discount = random.choice([0, 5, 10, 15, 20, 25, 30])

        rows.append({
            "venta_id": i,
            "llamada_id": cid,
            "fecha_key": int(calls.loc[calls["llamada_id"] == cid, "fecha_key"].iloc[0]),
            "cliente_id": int(calls.loc[calls["llamada_id"] == cid, "cliente_id"].iloc[0]),
            "agente_id": int(calls.loc[calls["llamada_id"] == cid, "agente_id"].iloc[0]),
            "producto_id": pid,
            "cantidad": qty,
            "valor_unitario": unit,
            "descuento": discount,
            "valor_total": round(qty * unit * (1 - discount/100), 2),
            "estado": random.choice(["Completada","Completada","Completada","Pendiente","Cancelada"]),
        })

    df = pd.DataFrame(rows)

    df["valor_unitario"] = df["valor_unitario"].astype(object)
    df["valor_total"] = df["valor_total"].astype(object)

    # Anomalías controladas.
    idx = np.random.choice(df.index, 100, replace=False)
    df.loc[idx[:25], "cantidad"] = -1
    df.loc[idx[25:50], "descuento"] = 75
    df.loc[idx[50:75], "valor_unitario"] = None
    df.loc[idx[75:], "valor_total"] = None

    return df



def fetch_ai_comments():
    groq_key = os.getenv("GROQ_API_KEY")
    model = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
    if not groq_key:
        return None
    try:
        from groq import Groq
        client = Groq(api_key=groq_key)
        prompt = (
            "Genera una lista de 40 frases cortas en español de comentarios reales de clientes de un call center de telecomunicaciones en Colombia "
            "(positivos, negativos, quejas de cobros, mala señal, excelente atención del asesor, demoras en contestar). "
            "Devuelve SOLO las frases, una por línea sin números ni viñetas."
        )
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=800
        )
        lines = [line.strip().strip('"-') for line in response.choices[0].message.content.strip().split("\n") if line.strip()]
        if len(lines) > 5:
            print(f"[IA GROQ] Se generaron {len(lines)} comentarios de texto realistas con {model}.")
            return lines
    except Exception as e:
        print(f"[WARN] No se pudo generar comentarios con Groq IA: {e}")
    return None


def gen_surveys(calls):
    selected = np.random.choice(calls["llamada_id"], N_ENCUESTAS, replace=False)

    lookup = calls.set_index("llamada_id")

    ai_comments = fetch_ai_comments()
    comments = ai_comments if ai_comments else [
        "Muy buena atención",
        "La espera fue larga",
        "Problema resuelto",
        "Necesito más información",
        "Excelente servicio",
        "No resolvieron mi solicitud",
        "Demasiado tiempo de espera",
        None,
    ]

    rows = []
    for i, call_id in enumerate(selected, start=1):
        call = lookup.loc[int(call_id)]

        sat = random.choices([1,2,3,4,5], weights=[4,7,12,30,47])[0]
        nps = random.randint(0,10)

        rows.append({
            "encuesta_id": i,
            "llamada_id": int(call_id),
            "fecha_key": int(call["fecha_key"]),
            "cliente_id": int(call["cliente_id"]),
            "agente_id": int(call["agente_id"]),
            "satisfaccion": sat,
            "nps": nps,
            "comentario": random.choice(comments),
        })

    df = pd.DataFrame(rows)

    df["satisfaccion"] = df["satisfaccion"].astype(object)
    df["nps"] = df["nps"].astype(object)
    df["comentario"] = df["comentario"].astype(object)

    # Anomalías de calidad.
    idx = np.random.choice(df.index, 250, replace=False)
    df.loc[idx[:80], "satisfaccion"] = None
    df.loc[idx[80:140], "satisfaccion"] = np.random.choice([0, 7, 99], 60)
    df.loc[idx[140:190], "nps"] = np.random.choice([-10, 15, 99], 50)
    df.loc[idx[190:], "comentario"] = None

    return df


def create_indexes():
    eng = db_engine()
    statements = [
        "CREATE INDEX IX_llamadas_fecha ON analytics.fact_llamadas(fecha_key)",
        "CREATE INDEX IX_llamadas_agente ON analytics.fact_llamadas(agente_id)",
        "CREATE INDEX IX_llamadas_cliente ON analytics.fact_llamadas(cliente_id)",
        "CREATE INDEX IX_ventas_fecha ON analytics.fact_ventas(fecha_key)",
        "CREATE INDEX IX_encuestas_fecha ON analytics.fact_encuestas(fecha_key)",
    ]
    with eng.begin() as conn:
        for stmt in statements:
            conn.execute(text(stmt))
    eng.dispose()


def main():
    print("=" * 65)
    print("DataCareer Lab - generación de datos")
    print("=" * 65)

    create_database()
    create_schema_and_tables()

    eng = db_engine()

    print("\n[1/8] Fechas...")
    dates = gen_dates()
    write_df(eng, dates, "dim_fecha")

    print("[2/8] Clientes...")
    clients = gen_clients()
    write_df(eng, clients, "dim_cliente")

    print("[3/8] Agentes...")
    agents = gen_agents()
    write_df(eng, agents, "dim_agente")

    print("[4/8] Campañas...")
    campaigns = gen_campaigns()
    write_df(eng, campaigns, "dim_campania")

    print("[5/8] Productos...")
    products = gen_products()
    write_df(eng, products, "dim_producto")

    print("[6/8] Llamadas...")
    calls = gen_calls(clients, agents, campaigns, dates)
    write_df(eng, calls, "fact_llamadas")

    print("[7/8] Ventas...")
    sales = gen_sales(calls, products)
    write_df(eng, sales, "fact_ventas")

    print("[8/8] Encuestas...")
    surveys = gen_surveys(calls)
    write_df(eng, surveys, "fact_encuestas")

    eng.dispose()

    print("\n[OK] Creando índices...")
    create_indexes()

    print("\n" + "=" * 65)
    print("LABORATORIO LISTO")
    print("=" * 65)
    print(f"BD: {SERVER} -> {DATABASE}")
    print(f"Clientes:  {len(clients):,}")
    print(f"Agentes:   {len(agents):,}")
    print(f"Llamadas:  {len(calls):,}")
    print(f"Ventas:    {len(sales):,}")
    print(f"Encuestas: {len(surveys):,}")
    print("\nSiguiente paso: conectar Power BI a SQL Server.")
    print("Servidor: localhost")
    print("Base: DataCareer")
    print("Schema: analytics")


if __name__ == "__main__":
    main()
