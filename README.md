# DataCareer Lab

Laboratorio de entrenamiento para preparar a Julieth para un rol Junior Data Analyst / BI.

## 1. Requisitos

- SQL Server 2025 Developer
- SQL Server Management Studio (SSMS)
- Python 3.11+
- Microsoft ODBC Driver 18 for SQL Server

## 2. Instalar dependencias

Abre CMD/PowerShell en esta carpeta:

```powershell
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

## 3. Ejecutar

Primero comprueba que SQL Server esté iniciado.

Después:

```powershell
python setup_datacareer.py
```

El script usa Windows Authentication y se conecta a:

```text
localhost
```

Si tu servidor tiene otro nombre, puedes cambiarlo:

```powershell
$env:SQL_SERVER="localhost"
python setup_datacareer.py
```

## 4. Resultado

Crea:

```text
DataCareer
└── analytics
    ├── dim_fecha
    ├── dim_cliente
    ├── dim_agente
    ├── dim_campania
    ├── dim_producto
    ├── fact_llamadas
    ├── fact_ventas
    └── fact_encuestas
```

## 5. Por qué no usamos IA para cada registro

Para entrenamiento es mejor generar primero datos sintéticos con Faker/NumPy y después inyectar errores controlados.

Ventajas:
- rápido
- reproducible
- barato
- relaciones válidas
- podemos decidir exactamente qué errores existen

Después podemos añadir un segundo script que use una API de IA exclusivamente para generar comentarios de clientes y escenarios de negocio.

## 6. Retos para Julieth

No le entregues las reglas de corrupción.

Dale solamente el problema de negocio:

> "La gerencia del call center cree que la satisfacción está cayendo y que algunos equipos están rindiendo peor que otros. Analiza los últimos 6 meses, encuentra las causas y presenta recomendaciones."

Debe descubrir:
- problemas de calidad de datos
- KPI
- tendencias
- rendimiento por agente
- rendimiento por campaña
- satisfacción
- NPS
- abandono
- FCR
- ventas
- conversión

Luego construye Power BI y termina con 5 hallazgos y 5 recomendaciones.
