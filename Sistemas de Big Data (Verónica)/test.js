const preguntasVeronica = [
  { tema: 0, pregunta: "Según el documento, el Big Data es...", opciones: ["Una moda pasajera", "Una necesidad competitiva", "Una técnica exclusiva de marketing", "Un sistema para eliminar datos"], correcta: 1, explicacion: "El Big Data se presenta como una necesidad competitiva para aprovechar la información y mejorar procesos." },
  { tema: 0, pregunta: "¿Cuál es el objetivo anunciado?", opciones: ["Sustituir todas las bases relacionales", "Evitar la digitalización", "Gestionar solo datos biométricos", "Implantar herramientas de Big Data y automatizar procesos"], correcta: 3, explicacion: "El objetivo es aplicar herramientas de Big Data para implantar sistemas y automatizar procesos." },
  { tema: 0, pregunta: "¿Por qué las bases relacionales y SQL ya no resultan suficientes?", opciones: ["El tipo de datos ha cambiado y los volúmenes superan su capacidad", "SQL solo admite texto", "Las empresas generan menos datos", "Todos los datos actuales son estructurados"], correcta: 0, explicacion: "La variedad de datos y el crecimiento del volumen superan las capacidades de los sistemas relacionales tradicionales." },
  { tema: 0, pregunta: "¿Cuál corresponde a datos producidos por personas?", opciones: ["El GPS de un vehículo", "Un sensor de reconocimiento facial", "Un comentario en Facebook", "Un termómetro automático"], correcta: 2, explicacion: "Un comentario en una red social es un dato generado por una persona." },
  { tema: 0, pregunta: "¿Qué significa M2M?", opciones: ["Marketing to Market", "Machine to Machine", "Massive Data Management", "Multiple Technology Model"], correcta: 1, explicacion: "M2M significa Machine to Machine: comunicación entre máquinas." },
  { tema: 0, pregunta: "¿Cuál es un ejemplo de dato biométrico?", opciones: ["Una conexión ADSL", "Una transferencia bancaria", "Un correo electrónico", "La lectura de una huella dactilar"], correcta: 3, explicacion: "La huella dactilar es una característica biométrica." },
  { tema: 0, pregunta: "¿Qué V se define por la gran cantidad de datos?", opciones: ["Volumen", "Velocidad", "Variedad", "Veracidad"], correcta: 0, explicacion: "El volumen representa la cantidad de datos generados y almacenados." },
  { tema: 0, pregunta: "¿Cuál es el conjunto de las tres primeras V?", opciones: ["Volumen, valor y viralidad", "Veracidad, variedad y volumen", "Volumen, velocidad y variedad", "Velocidad, valor y veracidad"], correcta: 2, explicacion: "Las tres primeras dimensiones son volumen, velocidad y variedad." },
  { tema: 0, pregunta: "¿Qué restricción impone la velocidad?", opciones: ["Limitar los datos a una fuente", "Procesar una cantidad de datos por unidad de tiempo", "Usar solo datos estructurados", "Eliminar datos incompletos"], correcta: 1, explicacion: "La velocidad obliga a procesar los datos a un ritmo adecuado a su llegada." },
  { tema: 0, pregunta: "¿Cuál es el reto asociado a la variedad?", opciones: ["Reducir todos los datos a texto", "Evitar combinar fuentes", "Convertir todo en una base relacional", "Combinar formatos y estructuras diferentes"], correcta: 3, explicacion: "La variedad exige integrar datos con formatos, estructuras y orígenes distintos." },
  { tema: 0, pregunta: "¿A qué hace referencia la veracidad?", opciones: ["A la calidad, confiabilidad y gestión de datos incompletos o ruidosos", "A la rapidez de llegada", "A la utilidad para un fin", "Al número de registros"], correcta: 0, explicacion: "La veracidad se refiere a la calidad y confiabilidad de los datos, incluido el ruido o la información incompleta." },
  { tema: 0, pregunta: "¿Con qué factores se relaciona el valor?", opciones: ["Solo con el tamaño del archivo", "Únicamente con la fuente", "Con veracidad, tiempo desde la captura, integridad e interpretación", "Exclusivamente con la velocidad"], correcta: 2, explicacion: "El valor depende de la calidad del dato, su actualidad y cómo se interpreta para un objetivo." },
  { tema: 0, pregunta: "¿Qué dos V incorpora el modelo de las 7V?", opciones: ["Viralidad y volatilidad", "Visualización y variedad", "Viralidad y veracidad", "Visualización y viralidad"], correcta: 3, explicacion: "El modelo de las 7V añade visualización y viralidad a las cinco dimensiones anteriores." },
  { tema: 0, pregunta: "La visión general del Big Data comprende tecnologías para...", opciones: ["Visualizar solo hojas de cálculo", "Almacenar solo redes sociales", "Sustituir decisiones humanas", "Recoger, almacenar, procesar, analizar y visualizar grandes volúmenes"], correcta: 3, explicacion: "Big Data cubre todo el ciclo desde la recogida hasta la visualización y el análisis." },
  { tema: 0, pregunta: "Una ciudad recoge datos de termómetros y riego automático. ¿A qué grupo pertenecen principalmente?", opciones: ["Biométricos", "De marketing", "Entre máquinas o M2M", "Producidos por personas"], correcta: 2, explicacion: "Son dispositivos que intercambian datos automáticamente entre máquinas." },
  { tema: 0, pregunta: "Un equipo limpia, estructura e integra datos de sensores y APIs. ¿Qué capa actúa?", opciones: ["Procesamiento o transformación", "Adquisición", "Almacenamiento", "Análisis y visualización"], correcta: 0, explicacion: "Limpiar, estructurar e integrar son tareas de procesamiento o transformación." },
  { tema: 0, pregunta: "Una organización almacena grandes volúmenes en Hadoop o HDFS. ¿Qué capa utiliza?", opciones: ["Adquisición", "Procesamiento", "Visualización", "Almacenamiento"], correcta: 3, explicacion: "HDFS forma parte de la capa de almacenamiento distribuido." },
  { tema: 0, pregunta: "La dirección analiza resultados mediante BI y dashboards. ¿Qué capas intervienen directamente?", opciones: ["Adquisición y almacenamiento", "Análisis y visualización", "Procesamiento y almacenamiento", "Ingestión y transformación"], correcta: 1, explicacion: "BI y dashboards corresponden al análisis y la visualización de resultados." },
  { tema: 0, pregunta: "Un sistema recibe continuamente datos de sensores que cambian muy rápidamente. ¿Qué V describe mejor la situación?", opciones: ["Variedad", "Veracidad", "Velocidad", "Valor"], correcta: 2, explicacion: "La rapidez y continuidad de llegada de los datos se relaciona con la velocidad." },
  { tema: 0, pregunta: "Un dato es útil para el objetivo, se interpreta correctamente y mantiene suficiente integridad. ¿Qué V recoge mejor esa valoración?", opciones: ["Valor", "Volumen", "Viralidad", "Visualización"], correcta: 0, explicacion: "La utilidad para un propósito y una interpretación adecuada forman parte del valor del dato." },

  { tema: 1, pregunta: "Según el modelo del documento, ¿cada cuántos meses se duplican los datos generados?", opciones: ["6", "12", "18", "24"], correcta: 1, explicacion: "El documento señala que los datos se duplican cada 12 meses." },
  { tema: 1, pregunta: "Según la Ley de Moore citada, ¿cada cuántos meses se duplica la capacidad de procesamiento?", opciones: ["18", "12", "24", "6"], correcta: 0, explicacion: "La capacidad de procesamiento se duplica cada 18 meses en el modelo citado." },
  { tema: 1, pregunta: "¿Por qué medir segundos no es suficiente para evaluar la complejidad?", opciones: ["Solo depende del volumen", "No se puede medir con precisión", "Solo influye el lenguaje", "También influyen hardware, lenguaje y compilador"], correcta: 3, explicacion: "El tiempo medido depende de la máquina, el lenguaje y el compilador utilizados." },
  { tema: 1, pregunta: "¿Qué medida recomienda el documento para evaluar un algoritmo independientemente de la máquina?", opciones: ["Segundos en un equipo concreto", "Operaciones en función del tamaño N", "Precio del hardware", "Tamaño del ejecutable"], correcta: 1, explicacion: "Se cuentan operaciones en función del tamaño del problema para expresar la complejidad." },
  { tema: 1, pregunta: "¿Qué complejidad temporal se asocia a la burbuja en el peor caso?", opciones: ["O(n²)", "O(n)", "O(log n)", "O(2ⁿ)"], correcta: 0, explicacion: "La burbuja realiza un trabajo cuadrático con el número de elementos." },
  { tema: 1, pregunta: "En f(n) ≤ an² + bn + c, ¿qué término domina cuando n es enorme?", opciones: ["c", "bn", "an², dando O(n²)", "Todos crecen igual"], correcta: 2, explicacion: "El término de mayor grado domina asintóticamente, por lo que el coste es O(n²)." },
  { tema: 1, pregunta: "¿Qué relación establece el documento entre crecimiento polinomial y exponencial?", opciones: ["Ambos crecen igual", "Todo polinomio supera a una exponencial", "La exponencial reduce operaciones", "La exponencial acaba superando a cualquier polinomio"], correcta: 3, explicacion: "Con valores suficientemente grandes, el crecimiento exponencial supera a cualquier polinomio." },
  { tema: 1, pregunta: "Según el ejemplo RSA, ¿cómo aumenta el coste al añadir cifras a la clave?", opciones: ["Crece linealmente", "Crece exponencialmente", "Crece como un polinomio de grado dos", "Solo depende del almacenamiento"], correcta: 1, explicacion: "El ejemplo muestra que añadir cifras aumenta exponencialmente el coste de factorización." },
  { tema: 1, pregunta: "Tras un año se alcanza n = 2¹⁷. Si se duplica la velocidad, ¿qué límite indica el documento?", opciones: ["2¹⁷", "2¹⁹", "2²²", "2³⁴"], correcta: 2, explicacion: "Duplicar la velocidad añade cinco cifras binarias: el límite pasa de 2¹⁷ a 2²²." },
  { tema: 1, pregunta: "¿Qué límites señala el documento para el escalado vertical?", opciones: ["Físicos, económicos y matemáticos", "Solo el ancho de banda", "Solo los compiladores", "Ninguno"], correcta: 0, explicacion: "Ampliar una sola máquina encuentra límites físicos, económicos y matemáticos." },
  { tema: 1, pregunta: "¿En qué consiste el escalado horizontal?", opciones: ["Ampliar CPU, RAM y disco de un servidor", "Añadir nodos estándar interconectados", "Cambiar el lenguaje de programación", "Ejecutar tareas consecutivamente en una máquina"], correcta: 1, explicacion: "El escalado horizontal reparte el trabajo entre varios nodos interconectados." },
  { tema: 1, pregunta: "¿Qué secuencia resume el enfoque divide y vencerás?", opciones: ["Guardar todo en un servidor", "Duplicar cada dato en todos los nodos", "Calcular el resultado antes de repartir", "Dividir, procesar en paralelo y combinar resultados"], correcta: 3, explicacion: "El problema se divide, se procesa en paralelo y los resultados parciales se combinan." },
  { tema: 1, pregunta: "¿Cómo define el documento un sistema distribuido?", opciones: ["Un único servidor", "Programas sin nodos", "Ordenadores independientes que aparecen como un sistema coherente", "Una red solo para almacenamiento"], correcta: 2, explicacion: "Varios ordenadores independientes colaboran y se presentan como un único sistema coherente." },
  { tema: 1, pregunta: "¿Qué funciones asignan al nodo maestro y a los trabajadores?", opciones: ["El maestro coordina y distribuye; los trabajadores ejecutan cálculos en paralelo", "El maestro ejecuta todo y los trabajadores visualizan", "Los trabajadores coordinan y el maestro calcula", "Todos los nodos deben ser físicos"], correcta: 0, explicacion: "El maestro organiza y distribuye, mientras los trabajadores procesan fragmentos en paralelo." },
  { tema: 1, pregunta: "Dos grupos tienen 2 y 3 valores, con medias 25 y 50/3. ¿Cómo se obtiene la media final?", opciones: ["(25 + 50/3) / 2", "(2/5)·25 + (2/5)·(50/3)", "(3/5)·25 + (2/5)·(50/3)", "(2/5)·25 + (3/5)·(50/3)"], correcta: 3, explicacion: "La media final pondera cada media parcial por el tamaño de su grupo." },
  { tema: 1, pregunta: "En el modelo n = mK, si m = 1000 y K = 10, ¿cómo se representa el coste distribuido O(m) + O(K)?", opciones: ["O(1000·10)", "O(1000) + O(10)", "O(1000) elevado a 10", "O(10) + O(10)"], correcta: 1, explicacion: "El coste distribuido separa el trabajo local O(m) del combinado O(K)." },
  { tema: 1, pregunta: "Una empresa quiere conservar tablas SQL, JSON y fotografías originales para exploración científica. ¿Qué repositorio encaja mejor?", opciones: ["Data Lake", "Data Warehouse", "Data Mart", "Un almacén solo para CSV"], correcta: 0, explicacion: "El Data Lake conserva datos en formatos originales y permite explorarlos después." },
  { tema: 1, pregunta: "Se necesita analizar unas pocas columnas de un archivo muy grande. ¿Qué elección responde al documento?", opciones: ["CSV", "JSON", "Parquet u ORC", "TXT"], correcta: 2, explicacion: "Los formatos columnares como Parquet y ORC permiten leer selectivamente las columnas necesarias." },
  { tema: 1, pregunta: "Una empresa quiere crecer sin depender de un único servidor y reducir su punto único de fallo. ¿Qué estrategia coincide con el PDF?", opciones: ["Comprar un servidor más potente", "Añadir nodos interconectados que repartan carga y toleren fallos", "Mantener un servidor y ampliar tablas", "Ejecutar todo en el nodo maestro"], correcta: 1, explicacion: "Añadir nodos interconectados permite repartir carga y evitar depender de una sola máquina." },
  { tema: 1, pregunta: "Para informes ejecutivos con datos limpios, estructurados y modelados, ¿qué combinación describe el PDF?", opciones: ["Data Lake con esquema en lectura", "Data Mart sin transformar", "Data Lake con ETL posterior", "Data Warehouse con esquema en escritura y ETL previo"], correcta: 3, explicacion: "El Data Warehouse integra datos limpios y modelados antes de cargarlos mediante ETL." },

  { tema: 2, pregunta: "¿Cuál es la finalidad de MapReduce?", opciones: ["Paralelizar grandes volúmenes entre nodos", "Ejecutar todo en un ordenador", "Guardar notebooks", "Diseñar interfaces gráficas"], correcta: 0, explicacion: "MapReduce distribuye y paraleliza el procesamiento de grandes volúmenes entre nodos." },
  { tema: 2, pregunta: "¿Qué fase transforma la entrada en pares clave-valor?", opciones: ["Reduce", "Map", "Shuffle", "Display"], correcta: 1, explicacion: "Map transforma cada entrada en uno o varios pares clave-valor." },
  { tema: 2, pregunta: "¿Qué ocurre durante Shuffle?", opciones: ["Se crea retraso_horas", "Se asignan máquinas", "Se agrupan claves iguales y se envían al mismo nodo", "Se infiere el esquema CSV"], correcta: 2, explicacion: "Shuffle reagrupa y transporta los datos necesarios para que cada reducer reciba su clave." },
  { tema: 2, pregunta: "¿En qué fase se produce principalmente el movimiento de datos por la red?", opciones: ["Map", "Al crear el volumen", "Al mostrar el notebook", "Shuffle"], correcta: 3, explicacion: "El Shuffle mueve datos entre nodos y suele ser la fase más costosa en red." },
  { tema: 2, pregunta: "El nodo A tiene suma 50 y conteo 2; el B, suma 50 y conteo 3. ¿Cómo calcula Reduce la media?", opciones: ["Promedia 25 y 16,7", "Divide 100 entre 2", "Usa solo A", "Suma 100 y 5, y divide 100 entre 5"], correcta: 3, explicacion: "La media distribuida suma los valores y los conteos antes de dividir." },
  { tema: 2, pregunta: "En Word Count, ¿qué par clave-valor genera Map por cada aparición de una palabra?", opciones: ["(palabra, 1)", "(documento, palabra)", "(1, palabra)", "(palabra, documento)"], correcta: 0, explicacion: "Map emite la palabra como clave y un 1 como valor para contabilizar cada aparición." },
  { tema: 2, pregunta: "¿Qué diferencia HDFS y MapReduce?", opciones: ["HDFS procesa y MapReduce almacena", "Ambos solo procesan", "HDFS almacena y MapReduce procesa", "HDFS contiene notebooks"], correcta: 2, explicacion: "HDFS es el sistema de almacenamiento distribuido y MapReduce el modelo de procesamiento." },
  { tema: 2, pregunta: "Un nodo lee 50.000 MB a 200 MB/s. ¿Cuántos segundos tarda?", opciones: ["250", "5", "50", "20"], correcta: 0, explicacion: "50.000 dividido entre 200 MB/s da 250 segundos." },
  { tema: 2, pregunta: "¿Por qué Hadoop MapReduce presenta el cuello de botella descrito?", opciones: ["No usa clústeres", "Solo procesa streaming", "Sus intermedios siempre están en RAM", "Cada paso intermedio se escribe y lee en disco"], correcta: 3, explicacion: "Hadoop escribe y lee resultados intermedios en disco, lo que añade coste." },
  { tema: 2, pregunta: "¿Dónde se mantienen normalmente los intermedios de Spark?", opciones: ["En disco en cada paso", "En memoria, salvo que no quepan", "En la consola", "En una unidad externa obligatoria"], correcta: 1, explicacion: "Spark conserva los intermedios en memoria y puede desbordarlos a disco si no caben." },
  { tema: 2, pregunta: "¿Qué combinación aparece en la comparación Hadoop-Spark?", opciones: ["Hadoop batch y streaming; Spark solo batch", "Ambos solo streaming", "Hadoop batch; Spark batch y streaming", "Hadoop streaming; Spark batch"], correcta: 2, explicacion: "Hadoop MapReduce se usa para batch; Spark admite procesamiento batch y streaming." },
  { tema: 2, pregunta: "¿Qué elemento de Spark convierte el código en tareas y las reparte?", opciones: ["Driver", "Executor individual", "Volumen gestionado", "Dataset CSV"], correcta: 0, explicacion: "El Driver crea y coordina las tareas que ejecutarán los Executors." },
  { tema: 2, pregunta: "¿Cómo explica el documento la relación Spark-Databricks?", opciones: ["Spark es la plataforma y Databricks un executor", "Databricks es MapReduce", "Son lenguajes equivalentes", "Spark es el motor y Databricks la plataforma"], correcta: 3, explicacion: "Spark es el motor de procesamiento y Databricks la plataforma que lo rodea." },
  { tema: 2, pregunta: "¿Qué combinación de datos utiliza la práctica?", opciones: ["200.000 envíos, 15 ciudades, 10 almacenes", "2.000.000, 15 y 10", "2.000.000, 10 y 15", "20.000.000, 15 y 10"], correcta: 1, explicacion: "La práctica utiliza 2.000.000 de envíos, 15 ciudades y 10 almacenes." },
  { tema: 2, pregunta: "¿Qué expresión crea h a partir de retraso_min / 60?", opciones: ["df[\"h\"] = df.retraso_min / 60", "df.filter(...)", "df.withColumn(\"h\", df.retraso_min / 60)", "df.groupBy(\"h\")"], correcta: 2, explicacion: "withColumn añade o reemplaza una columna calculada en un DataFrame." },
  { tema: 2, pregunta: "Antes de calcular retraso_horas, ¿qué registros deben conservarse?", opciones: ["Los entregados con destino a la ciudad asignada", "Los cancelados", "Todos los envíos", "Solo los que tienen retraso vacío"], correcta: 0, explicacion: "La práctica filtra los envíos entregados y correspondientes a la ciudad antes de calcular el retraso." },
  { tema: 2, pregunta: "En el paso 3, ¿qué debe calcularse por almacén de origen?", opciones: ["Ciudad y peso máximo", "Número de envíos y retraso medio", "Ruta del volumen", "Fecha y distancia máxima"], correcta: 1, explicacion: "Se agrupa por almacén para contar envíos y calcular el retraso medio." },
  { tema: 2, pregunta: "Para combinar varias condiciones en PySpark, ¿qué indica la chuleta?", opciones: ["and", "|| sin paréntesis", "& sin paréntesis", "& y paréntesis"], correcta: 3, explicacion: "Las condiciones se combinan con & y se agrupan mediante paréntesis." },
  { tema: 2, pregunta: "¿Cuál de estas aplicaciones se menciona expresamente?", opciones: ["Analizar logs y detectar anomalías", "Calcular nóminas", "Diseñar interfaces", "Gestionar reservas"], correcta: 0, explicacion: "El análisis de logs y la detección de anomalías es una aplicación citada de MapReduce." },
  { tema: 2, pregunta: "Tras agrupar por almacén, ¿dónde se produce el intercambio necesario para reunir claves iguales?", opciones: ["Al importar el notebook", "Al crear retraso_horas", "En el Shuffle de la agregación", "Al escribir la predicción"], correcta: 2, explicacion: "La agregación por clave necesita un Shuffle para reunir las filas de cada almacén." },

  { tema: 3, pregunta: "¿Qué método de PySpark muestra datos en el notebook?", opciones: ["display", "filter", "groupBy", "withColumn"], correcta: 0, explicacion: "display permite visualizar un DataFrame en el notebook." },
  { tema: 3, pregunta: "Para combinar varias condiciones en un filtro PySpark, ¿qué recomienda el documento?", opciones: ["or sin paréntesis", "and", "| sin paréntesis", "& y paréntesis"], correcta: 3, explicacion: "Se usa & para la conjunción y paréntesis para delimitar cada condición." },
  { tema: 3, pregunta: "En la práctica FL Logistics, ¿qué tarea corresponde al paso 3?", opciones: ["Agrupar por almacén", "Crear retraso_horas", "Localizar el Shuffle", "Comprobar la lectura del CSV"], correcta: 0, explicacion: "El paso 3 agrupa los resultados por almacén de origen." },
  { tema: 3, pregunta: "¿Cuál es el orden de las fases ETL?", opciones: ["Extraer, cargar, transformar", "Transformar, extraer, cargar", "Extraer, transformar, cargar", "Cargar, transformar, extraer"], correcta: 2, explicacion: "ETL significa Extraer, Transformar y Cargar." },
  { tema: 3, pregunta: "¿Cuál es una tarea propia de Transform?", opciones: ["Extraer de una API", "Cambiar Yes/No por 1/0", "Guardar el dato bruto", "Cargar solo registros nuevos"], correcta: 1, explicacion: "Convertir valores categóricos a numéricos es una transformación de los datos." },
  { tema: 3, pregunta: "¿Qué hace una carga incremental?", opciones: ["Reemplaza toda la tabla", "Carga el CSV sin transformar", "Transforma antes de guardar", "Carga registros nuevos o modificados desde la última carga"], correcta: 3, explicacion: "La carga incremental incorpora solo cambios desde la ejecución anterior." },
  { tema: 3, pregunta: "En ELT, ¿dónde se transforman los datos?", opciones: ["En el destino", "En un servidor intermedio", "En la fuente", "En ambos sin distinción"], correcta: 0, explicacion: "ELT carga primero los datos y después transforma en el destino." },
  { tema: 3, pregunta: "¿Qué rasgo caracteriza al streaming?", opciones: ["Espera todos los datos", "Impone plazo y prohíbe pérdidas", "Permite resultados parciales", "Procesa lotes nocturnos"], correcta: 2, explicacion: "Streaming genera resultados parciales sin esperar a que termine todo el flujo." },
  { tema: 3, pregunta: "Además de flujo, memoria y velocidad, ¿qué exige el tiempo real?", opciones: ["Resultados parciales y latencia alta", "Plazo límite y no perder datos", "Carga completa", "Lote programado sin plazo"], correcta: 1, explicacion: "El tiempo real añade un límite temporal obligatorio y no admite pérdida de datos." },
  { tema: 3, pregunta: "¿Qué significa latencia?", opciones: ["Volumen del lote", "Tiempo entre cargas", "Frecuencia de generación", "Tiempo entre generar el dato y obtener el resultado"], correcta: 3, explicacion: "La latencia mide el retraso desde que se genera un dato hasta que está disponible el resultado." },
  { tema: 3, pregunta: "¿Cómo implementa Spark el streaming?", opciones: ["Con microbatches pequeños y frecuentes", "Con una carga trimestral", "Después de reunir todos los datos", "Con ETL obligatorio"], correcta: 0, explicacion: "Spark Structured Streaming procesa los datos mediante microbatches." },
  { tema: 3, pregunta: "¿Qué capa de Lambda trabaja datos históricos y produce resultados exactos?", opciones: ["Speed", "Serving", "Batch", "Visualización"], correcta: 2, explicacion: "La capa batch procesa el histórico y produce resultados completos y exactos." },
  { tema: 3, pregunta: "¿Cómo reprocesa el histórico Kappa?", opciones: ["Con una carga completa desde fuentes", "Reproduciendo eventos mediante replay", "Con una capa batch", "Solo con datos nuevos"], correcta: 1, explicacion: "Kappa vuelve a procesar los eventos conservados en el flujo histórico." },
  { tema: 3, pregunta: "¿Qué distingue a la arquitectura de referencia de Lambda/Kappa?", opciones: ["La primera indica componentes; los patrones, cómo procesar", "Ambas solo describen hardware", "Lambda define componentes y Kappa almacenamiento", "La arquitectura define procesamiento y Lambda las fuentes"], correcta: 0, explicacion: "La arquitectura de referencia enumera componentes; Lambda y Kappa describen patrones de procesamiento." },
  { tema: 3, pregunta: "Una tabla recibe un millón de registros nuevos diarios y crece continuamente. ¿Qué carga conviene?", opciones: ["Completa por su sencillez", "Incremental porque no detecta cambios", "Cualquiera", "Incremental por su eficiencia y detección de cambios"], correcta: 3, explicacion: "La carga incremental evita reprocesar todo y solo incorpora registros nuevos o modificados." },
  { tema: 3, pregunta: "En Databricks se guarda el CSV tal cual y después se aplican filter, withColumn y groupBy. ¿Qué patrón es?", opciones: ["ETL", "ELT", "Batch", "Streaming"], correcta: 1, explicacion: "Primero se cargan los datos sin transformar y después se transforman en el destino: ELT." },
  { tema: 3, pregunta: "Un control ferroviario debe responder antes de conflictos y no puede perder datos. ¿Qué procesamiento exige?", opciones: ["Batch", "Streaming sin plazo", "Tiempo real", "Carga incremental"], correcta: 2, explicacion: "El plazo obligatorio y la ausencia de pérdida de datos son requisitos de tiempo real." },
  { tema: 3, pregunta: "Una fábrica necesita fallos mensuales exactos y alertas inmediatas. ¿Qué arquitectura encaja?", opciones: ["Lambda", "Kappa", "Solo batch", "Streaming sin salida unificada"], correcta: 0, explicacion: "Lambda combina batch para resultados históricos exactos y speed para baja latencia." },
  { tema: 3, pregunta: "Se monitorizan comentarios con alertas instantáneas, histórico limitado y reprocesado mediante replay. ¿Qué patrón encaja?", opciones: ["Lambda", "Batch programado", "ETL tradicional", "Kappa"], correcta: 3, explicacion: "Kappa utiliza un flujo continuo y permite reprocesar eventos mediante replay." },
  { tema: 3, pregunta: "Se requieren análisis histórico pesado y tiempo real, aceptando dos pipelines. ¿Qué elección propone el PDF?", opciones: ["Kappa", "Solo batch", "Lambda", "Solo streaming"], correcta: 2, explicacion: "Lambda admite un pipeline batch para el histórico pesado y otro de baja latencia para tiempo real." },

  { tema: 4, pregunta: "¿Qué es la gobernanza de datos?", opciones: ["Almacenar sin transformar", "Políticas, procesos y roles para datos fiables y seguros", "Eliminar valores nulos", "Una herramienta que corrige todo"], correcta: 1, explicacion: "La gobernanza define políticas, procesos y responsabilidades para gestionar los datos correctamente." },
  { tema: 4, pregunta: "¿Qué objetivo exige que los datos estén accesibles cuando se necesitan?", opciones: ["Disponibilidad", "Integridad", "Cumplimiento normativo", "Seguridad"], correcta: 0, explicacion: "La disponibilidad garantiza que los datos puedan utilizarse cuando se necesitan." },
  { tema: 4, pregunta: "La seguridad consiste en...", opciones: ["Hacer públicos todos los datos", "Actualizar catálogos", "Eliminar duplicados", "Proteger frente a accesos no autorizados"], correcta: 3, explicacion: "La seguridad protege los datos frente a accesos o usos no autorizados." },
  { tema: 4, pregunta: "¿Quién responde del valor del dato y de las decisiones?", opciones: ["Custodio", "Analista", "Propietario", "Sistema de escáneres"], correcta: 2, explicacion: "El propietario del dato asume la responsabilidad sobre su valor y uso." },
  { tema: 4, pregunta: "¿Cuál es una responsabilidad del custodio?", opciones: ["Decidir filas inválidas", "Responsabilizarse del almacenamiento, calidad y seguridad", "Generar valor necesariamente", "Establecer leyes"], correcta: 1, explicacion: "El custodio mantiene la calidad, seguridad y disponibilidad técnica del dato." },
  { tema: 4, pregunta: "¿Qué tres políticas se mencionan?", opciones: ["Acceso, uso y retención", "Disponibilidad, integridad y seguridad", "Metadatos, linaje y controles", "Completitud, unicidad y consistencia"], correcta: 0, explicacion: "Las políticas definen quién accede, para qué se usa y cuánto tiempo se conserva el dato." },
  { tema: 4, pregunta: "¿Qué dimensión exige que no falten valores necesarios?", opciones: ["Exactitud", "Unicidad", "Actualización", "Completitud"], correcta: 3, explicacion: "La completitud evalúa si están presentes todos los valores requeridos." },
  { tema: 4, pregunta: "¿Qué dimensión exige que cada hecho aparezca una sola vez?", opciones: ["Consistencia", "Completitud", "Unicidad", "Precisión"], correcta: 2, explicacion: "La unicidad evita registros o hechos duplicados." },
  { tema: 4, pregunta: "Los valores Entregado y entregado con un espacio final ilustran un problema de...", opciones: ["Actualización", "Consistencia", "Exactitud", "Disponibilidad"], correcta: 1, explicacion: "Representaciones distintas del mismo valor incumplen la consistencia." },
  { tema: 4, pregunta: "Una entrega anterior a la salida del almacén es un problema de...", opciones: ["Exactitud o precisión", "Completitud", "Unicidad", "Retención"], correcta: 0, explicacion: "El dato no refleja con precisión un hecho posible y contradice la secuencia real." },
  { tema: 4, pregunta: "¿Qué son los metadatos?", opciones: ["Filas descartadas", "Alertas", "Normas de acceso", "Datos que describen estructura, origen, significado y reglas"], correcta: 3, explicacion: "Los metadatos describen el significado, la estructura, el origen y las reglas de los datos." },
  { tema: 4, pregunta: "¿Qué recoge el linaje?", opciones: ["Solo filas guardadas", "Solo permisos", "Origen, transformaciones y usuarios", "Solo el formato de destino"], correcta: 2, explicacion: "El linaje permite seguir el recorrido del dato y las personas o procesos que lo transforman." },
  { tema: 4, pregunta: "¿Cómo se describen los controles de calidad?", opciones: ["Reglas para borrar datos antiguos", "Métricas y alertas cuando la calidad baja", "Listas de usuarios", "Copias de catálogos"], correcta: 1, explicacion: "Los controles miden indicadores de calidad y generan alertas ante incumplimientos." },
  { tema: 4, pregunta: "En FL Logistics, ¿quién figura como propietario del dato?", opciones: ["La dirección de logística", "Los escáneres", "Databricks", "El archivo Parquet"], correcta: 0, explicacion: "La dirección de logística asume la propiedad y las decisiones sobre el dato." },
  { tema: 4, pregunta: "¿En qué orden se aplican las cuatro reglas de limpieza?", opciones: ["Texto, duplicados, imposibles, entregados sin retraso", "Imposibles, texto, duplicados, entregados sin retraso", "Duplicados, imposibles, texto, entregados sin retraso", "Duplicados, texto, entregados sin retraso, valores imposibles"], correcta: 3, explicacion: "Primero se eliminan duplicados, después se normaliza texto, luego se corrigen entregas sin retraso y finalmente valores imposibles." },
  { tema: 4, pregunta: "Si se descarta como máximo el 2 % de 153.000 pedidos, ¿cuál es el máximo?", opciones: ["3.060", "1.530", "30.600", "6.120"], correcta: 0, explicacion: "El 2 % de 153.000 es 3.060 pedidos." },
  { tema: 4, pregunta: "Si N = D + C + V + G, ¿cuántas filas se guardan?", opciones: ["N + D + C + V", "N − D", "N − D − C − V", "N − C − V"], correcta: 2, explicacion: "Las filas guardadas son el total menos duplicados, correcciones de texto y valores imposibles." },
  { tema: 4, pregunta: "Para quitar espacios y pasar texto a minúsculas, ¿qué funciones se utilizan?", opciones: ["F.initcap y dropDuplicates", "F.trim y F.lower", "F.lower y count", "F.initcap y filter"], correcta: 1, explicacion: "F.trim elimina espacios externos y F.lower convierte el texto a minúsculas." },
  { tema: 4, pregunta: "¿Qué característica tiene F.col(\"x\").between(a, b)?", opciones: ["Excluye ambos extremos", "Solo incluye el inferior", "Incluye ambos extremos", "Convierte a texto"], correcta: 2, explicacion: "between incluye tanto el límite inferior como el superior." },
  { tema: 4, pregunta: "¿Qué ocurre con las filas cuyo texto se corrige?", opciones: ["Se descartan y suman a D", "No forman parte de G", "Se descartan como imposibles", "No se descartan y siguen formando parte de G"], correcta: 3, explicacion: "Corregir el texto no elimina la fila: continúa formando parte del conjunto guardado." }
];

const nombresTemas = {
  0: "1 · Introducción a Big Data",
  1: "2 · Complejidad y escalabilidad",
  2: "3 · MapReduce",
  3: "4 · Del dato bruto al dato útil",
  4: "5 · Calidad y gobernanza"
};

const filtroTema = document.getElementById("filtro-tema");
const progreso = document.getElementById("progreso-test");
const temaPregunta = document.getElementById("tema-pregunta");
const preguntaTexto = document.getElementById("pregunta-test");
const opcionesContenedor = document.getElementById("opciones-test");
const feedback = document.getElementById("feedback-test");
const puntuacion = document.getElementById("puntuacion-test");
const botonAnterior = document.getElementById("anterior-test");
const botonComprobar = document.getElementById("comprobar-test");
const botonSiguiente = document.getElementById("siguiente-test");
const botonReiniciar = document.getElementById("reiniciar-test");
const formulario = document.getElementById("formulario-test");

let posicionActual = 0;
let preguntasVisibles = preguntasVeronica.map((_, indice) => indice);
const respuestas = Array(preguntasVeronica.length).fill(null);
const comprobadas = Array(preguntasVeronica.length).fill(false);

function actualizarPuntuacion() {
  const aciertos = respuestas.reduce(
    (total, respuesta, indice) => total + (comprobadas[indice] && respuesta === preguntasVeronica[indice].correcta ? 1 : 0),
    0
  );
  const respondidas = comprobadas.filter(Boolean).length;
  const pendientes = preguntasVeronica.length - respondidas;

  if (respondidas === preguntasVeronica.length) {
    puntuacion.textContent = `Resultado final: ${aciertos}/${preguntasVeronica.length} aciertos.`;
    return;
  }

  puntuacion.textContent = `${aciertos} ${aciertos === 1 ? "acierto" : "aciertos"} · ${respondidas}/${preguntasVeronica.length} comprobadas · ${pendientes} pendientes`;
}

function mostrarPregunta() {
  const indice = preguntasVisibles[posicionActual];
  const pregunta = preguntasVeronica[indice];
  const comprobada = comprobadas[indice];

  progreso.textContent = `Pregunta ${posicionActual + 1} de ${preguntasVisibles.length}`;
  temaPregunta.textContent = nombresTemas[pregunta.tema];
  preguntaTexto.textContent = `${indice + 1}. ${pregunta.pregunta}`;
  opcionesContenedor.replaceChildren();

  pregunta.opciones.forEach((texto, opcionIndice) => {
    const etiqueta = document.createElement("label");
    etiqueta.className = "quiz__option";
    if (comprobada && opcionIndice === pregunta.correcta) etiqueta.classList.add("is-correct");
    if (comprobada && respuestas[indice] === opcionIndice && opcionIndice !== pregunta.correcta) etiqueta.classList.add("is-incorrect");

    const entrada = document.createElement("input");
    entrada.type = "radio";
    entrada.name = "respuesta-test";
    entrada.value = String(opcionIndice);
    entrada.checked = respuestas[indice] === opcionIndice;
    entrada.disabled = comprobada;
    entrada.addEventListener("change", () => {
      respuestas[indice] = opcionIndice;
      botonComprobar.disabled = false;
      feedback.className = "quiz__feedback";
      feedback.textContent = "Pulsa Comprobar para ver la corrección.";
    });

    const contenido = document.createElement("span");
    contenido.textContent = `${String.fromCharCode(65 + opcionIndice)}. ${texto}`;

    etiqueta.append(entrada, contenido);
    opcionesContenedor.append(etiqueta);
  });

  feedback.className = "quiz__feedback";
  if (comprobada) {
    const correcta = respuestas[indice] === pregunta.correcta;
    feedback.classList.add(correcta ? "is-correct" : "is-incorrect");
    feedback.textContent = correcta
      ? `Correcto. ${pregunta.explicacion}`
      : `Incorrecto. La respuesta correcta es «${pregunta.opciones[pregunta.correcta]}». ${pregunta.explicacion}`;
  } else {
    feedback.textContent = respuestas[indice] === null
      ? "Elige una opción antes de comprobar."
      : "Pulsa Comprobar para ver la corrección.";
  }

  botonAnterior.disabled = posicionActual === 0;
  botonSiguiente.disabled = posicionActual === preguntasVisibles.length - 1;
  botonComprobar.disabled = comprobada || respuestas[indice] === null;
  actualizarPuntuacion();
}

filtroTema.addEventListener("change", () => {
  preguntasVisibles = filtroTema.value === "todos"
    ? preguntasVeronica.map((_, indice) => indice)
    : preguntasVeronica.map((_, indice) => indice).filter((indice) => preguntasVeronica[indice].tema === Number(filtroTema.value));
  posicionActual = 0;
  mostrarPregunta();
});

botonAnterior.addEventListener("click", () => {
  if (posicionActual > 0) {
    posicionActual -= 1;
    mostrarPregunta();
  }
});

botonSiguiente.addEventListener("click", () => {
  if (posicionActual < preguntasVisibles.length - 1) {
    posicionActual += 1;
    mostrarPregunta();
  }
});

botonComprobar.addEventListener("click", () => {
  const indice = preguntasVisibles[posicionActual];
  if (respuestas[indice] === null || comprobadas[indice]) return;
  comprobadas[indice] = true;
  mostrarPregunta();
});

botonReiniciar.addEventListener("click", () => {
  respuestas.fill(null);
  comprobadas.fill(false);
  filtroTema.value = "todos";
  preguntasVisibles = preguntasVeronica.map((_, indice) => indice);
  posicionActual = 0;
  mostrarPregunta();
});

formulario.addEventListener("submit", (evento) => evento.preventDefault());

mostrarPregunta();
