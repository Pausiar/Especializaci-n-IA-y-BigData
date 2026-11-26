const preguntasCarles = [
  {
    "tema": 0,
    "pregunta": "En el caso de la cola de soporte, ¿quién valida el orden de prioridad de las peticiones?",
    "opciones": ["El modelo sin supervisión", "Una persona del servicio", "La persona usuaria automáticamente", "El proveedor del modelo"],
    "correcta": 1,
    "explicacion": "La herramienta sugiere categoría y prioridad, pero una persona valida el orden de la cola."
  },
  {
    "tema": 0,
    "pregunta": "¿Cuándo puede ser responsable no utilizar IA?",
    "opciones": ["Siempre que se use aprendizaje automático", "Cuando una alternativa sencilla ya resuelve bien el problema", "Solo cuando no hay conexión a internet", "Únicamente si el modelo es muy grande"],
    "correcta": 1,
    "explicacion": "Si una alternativa sencilla ya resuelve el problema, añadir IA puede no estar justificado."
  },
  {
    "tema": 0,
    "pregunta": "¿Cuál de estos datos es innecesario para clasificar una avería y debe excluirse?",
    "opciones": ["La contraseña de la persona usuaria", "La descripción técnica", "El servicio afectado", "El idioma de la petición"],
    "correcta": 0,
    "explicacion": "Los apuntes excluyen expresamente contraseñas, historiales personales e información ajena a la tarea."
  },
  {
    "tema": 0,
    "pregunta": "Si «Ana» se sustituye por «P017» y existe una clave, ¿cómo se trata el dato?",
    "opciones": ["Anonimizado", "Sintético", "Seudonimizado y sigue siendo personal", "Público"],
    "correcta": 2,
    "explicacion": "La seudonimización sustituye un identificador, pero mantiene la posibilidad de asociarlo a una persona."
  },
  {
    "tema": 0,
    "pregunta": "¿Qué caracteriza a la anonimización?",
    "opciones": ["No es razonablemente posible identificar a la persona", "Se sustituye el nombre por un código", "Se inventa un registro", "Se cifra solo durante el envío"],
    "correcta": 0,
    "explicacion": "La anonimización exige evaluar también la posibilidad de reidentificación por combinación de datos."
  },
  {
    "tema": 0,
    "pregunta": "Un sesgo por muestra en la cola de soporte puede aparecer porque...",
    "opciones": ["Hay demasiadas reglas", "Faltan peticiones de un idioma o canal", "El modelo tiene muchos parámetros", "Todas las métricas son correctas"],
    "correcta": 1,
    "explicacion": "Una muestra incompleta puede hacer que el sistema funcione peor para idiomas o canales poco representados."
  },
  {
    "tema": 0,
    "pregunta": "Una diferencia de errores entre idiomas...",
    "opciones": ["Demuestra discriminación", "Debe ocultarse", "Solo depende del hardware", "Es una señal para investigar, no prueba por sí sola de la causa"],
    "correcta": 3,
    "explicacion": "La diferencia permite detectar un posible problema, pero no identifica automáticamente su causa."
  },
  {
    "tema": 0,
    "pregunta": "Si positivo significa «urgente», un falso negativo...",
    "opciones": ["Retrasa una urgencia", "Siempre mejora el servicio", "Es una alerta correcta", "No tiene consecuencias"],
    "correcta": 0,
    "explicacion": "Un falso negativo es una urgencia real que el sistema no detecta."
  },
  {
    "tema": 0,
    "pregunta": "¿Cuál es la fórmula de la precisión positiva?",
    "opciones": ["VP / (VP + FN)", "(VP + VN) / N", "VP / (VP + FP)", "FN / (VP + FN)"],
    "correcta": 2,
    "explicacion": "La precisión positiva responde cuántas de las alertas emitidas son realmente urgentes."
  },
  {
    "tema": 0,
    "pregunta": "¿Cuál es la fórmula de la detección o sensibilidad?",
    "opciones": ["(VP + VN) / N", "VP / (VP + FN)", "VP / (VP + FP)", "FN / (VP + FN)"],
    "correcta": 1,
    "explicacion": "La detección mide la proporción de urgencias reales que el sistema identifica."
  },
  {
    "tema": 0,
    "pregunta": "¿Cómo se calcula el acierto?",
    "opciones": ["VP / (VP + FP)", "FN / (VP + FN)", "VP / (VP + FN)", "(VP + VN) / N"],
    "correcta": 3,
    "explicacion": "El acierto divide las predicciones correctas, verdaderos positivos y verdaderos negativos, entre el total."
  },
  {
    "tema": 0,
    "pregunta": "¿Qué debe indicarse si el denominador de una métrica es cero?",
    "opciones": ["Que la métrica no está definida", "Que vale uno", "Que vale cero", "Que el modelo es perfecto"],
    "correcta": 0,
    "explicacion": "Sin casos en el denominador no puede calcularse la proporción."
  },
  {
    "tema": 0,
    "pregunta": "Con cinco urgencias por idioma, un error adicional cambia la detección de ese idioma en...",
    "opciones": ["5 puntos", "10 puntos", "20 puntos", "100 puntos"],
    "correcta": 2,
    "explicacion": "Un error sobre cinco urgencias representa 1/5 del total, es decir, 20 puntos porcentuales."
  },
  {
    "tema": 0,
    "pregunta": "¿Qué necesita una persona revisora para que su supervisión sea efectiva?",
    "opciones": ["Solo una contraseña", "Información y tiempo suficientes, formación y permiso para corregir o anular", "La obligación de aprobar todo", "Acceso ilimitado a todos los datos"],
    "correcta": 1,
    "explicacion": "Revisar exige contexto, capacitación y capacidad real de intervenir."
  },
  {
    "tema": 0,
    "pregunta": "Validarlo todo sin revisar de verdad es un ejemplo de...",
    "opciones": ["Anonimización", "Búsqueda voraz", "Coste uniforme", "Sesgo de automatización"],
    "correcta": 3,
    "explicacion": "El sesgo de automatización aparece cuando se confía en el sistema más de lo que permiten las pruebas."
  },
  {
    "tema": 0,
    "pregunta": "¿Qué garantiza recuperar documentos con RAG?",
    "opciones": ["Ayuda a aportar contexto, pero no garantiza que la respuesta sea correcta", "Elimina cualquier información inventada", "Sustituye toda revisión humana", "Convierte los documentos en instrucciones"],
    "correcta": 0,
    "explicacion": "RAG puede mejorar el contexto, pero hay que comprobar que las fuentes existen, están vigentes y respaldan la respuesta."
  },
  {
    "tema": 0,
    "pregunta": "Un documento que dice «ignora las instrucciones anteriores» intenta provocar...",
    "opciones": ["Una búsqueda en anchura", "Una seudonimización", "Una inyección de instrucciones", "Un falso negativo"],
    "correcta": 2,
    "explicacion": "Es contenido no fiable que intenta cambiar el comportamiento del sistema."
  },
  {
    "tema": 0,
    "pregunta": "¿Qué control limita el riesgo de cierre indebido de una petición?",
    "opciones": ["Añadir más texto al prompt", "Quitar a la herramienta el permiso para cerrar peticiones", "Aumentar la temperatura", "Confiar en una respuesta convincente"],
    "correcta": 1,
    "explicacion": "Los permisos y el mínimo privilegio limitan acciones fuera del modelo; una advertencia en el prompt no basta."
  },
  {
    "tema": 0,
    "pregunta": "¿Cuál es el primer paso al detectar un incidente?",
    "opciones": ["Borrar todos los registros", "Reanudar el servicio inmediatamente", "Publicar los datos afectados", "Contener el problema y suspender la función afectada si hace falta"],
    "correcta": 3,
    "explicacion": "Primero se limita el daño; después se avisa, se revisa, se investiga y se documenta la reanudación."
  },
  {
    "tema": 0,
    "pregunta": "Si cambian el modelo, los datos o el contexto, ¿qué debe hacerse con las pruebas?",
    "opciones": ["Repetirlas", "Eliminarlas", "Dar por válido el resultado anterior", "Cambiar solo el nombre del modelo"],
    "correcta": 0,
    "explicacion": "La responsabilidad es un ciclo y una actualización puede exigir nuevas evidencias."
  },
  {
    "tema": 0,
    "pregunta": "Una puntuación alta de un modelo...",
    "opciones": ["Siempre es una probabilidad fiable", "Elimina la incertidumbre", "No es necesariamente una probabilidad fiable", "Permite omitir pruebas"],
    "correcta": 2,
    "explicacion": "La confianza debe calibrarse con pruebas y ajustarse al coste de los errores."
  },
  {
    "tema": 0,
    "pregunta": "Antes de compartir datos con una herramienta, ¿qué comprobación es adecuada?",
    "opciones": ["Usar cualquier cuenta privada", "Comprobar origen, calidad, licencia y base jurídica cuando corresponda", "Confiar solo en que el servicio sea de pago", "Incluir todos los datos disponibles"],
    "correcta": 1,
    "explicacion": "También deben revisarse accesos, conservación, eliminación y condiciones del proveedor."
  },
  {
    "tema": 0,
    "pregunta": "¿Cuándo conviene evitar un modelo más complejo?",
    "opciones": ["Cuando tiene pocos parámetros", "Cuando se ha pagado", "Solo si no usa redes neuronales", "Cuando no aporta una mejora demostrable"],
    "correcta": 3,
    "explicacion": "La proporcionalidad exige comparar beneficio, errores, costes y recursos."
  },
  {
    "tema": 0,
    "pregunta": "La revisión humana de un sistema de IA...",
    "opciones": ["No elimina las obligaciones normativas", "Sustituye al RGPD", "Garantiza que no haya sesgos", "Evita consultar la normativa vigente"],
    "correcta": 0,
    "explicacion": "La supervisión puede ser un control, pero no hace desaparecer las obligaciones de la organización."
  },
  {
    "tema": 0,
    "pregunta": "¿Qué par de control y prueba corresponde al riesgo de caída del servicio?",
    "opciones": ["Permisos por usuario e intento de acceso denegado", "Cierre automático y una alerta verbal", "Minimización y una clave seudonimizada", "Cola manual y recuperación, comprobadas con una simulación de interrupción"],
    "correcta": 3,
    "explicacion": "La alternativa manual y la recuperación deben probarse para limitar el impacto de una caída."
  },
  {
    "tema": 1,
    "pregunta": "¿Cómo interactúa un agente inteligente con su entorno?",
    "opciones": ["Solo mediante una base de datos", "Percibe con sensores y actúa con actuadores", "Únicamente escribiendo texto", "Solo mediante reglas fijas"],
    "correcta": 1,
    "explicacion": "Sensores y actuadores son los elementos básicos de percepción y acción de un agente."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué selecciona un agente racional?",
    "opciones": ["La acción más rápida siempre", "La primera acción disponible", "La acción que maximiza el rendimiento esperado con la información disponible", "La acción que utiliza más memoria"],
    "correcta": 2,
    "explicacion": "La racionalidad se define respecto al rendimiento esperado y a la información accesible."
  },
  {
    "tema": 1,
    "pregunta": "¿Cuál puede ser una medida de rendimiento de un robot aspirador?",
    "opciones": ["Limpieza, tiempo y energía consumida", "El nombre del fabricante", "El número de colores de la carcasa", "La longitud del manual"],
    "correcta": 0,
    "explicacion": "Una medida de rendimiento permite evaluar el resultado frente al objetivo."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué demuestra superar el juego de imitación de Turing?",
    "opciones": ["Conciencia humana", "Comprensión completa", "Igualdad en todas las tareas", "Un comportamiento conversacional satisfactorio en esa prueba, no conciencia por sí sola"],
    "correcta": 3,
    "explicacion": "Turing propone un criterio operativo basado en comportamiento observable."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué ocurrió en 1955 en la historia de la IA?",
    "opciones": ["Se creó el primer robot aspirador", "McCarthy y colaboradores usaron el término inteligencia artificial en la propuesta de Dartmouth", "AlphaGo ganó a Lee Sedol", "Se presentó GPT-3"],
    "correcta": 1,
    "explicacion": "El término aparece en la propuesta de Dartmouth de 1955."
  },
  {
    "tema": 1,
    "pregunta": "¿En qué año se celebró el encuentro de Dartmouth?",
    "opciones": ["1956", "1958", "1997", "2017"],
    "correcta": 0,
    "explicacion": "El encuentro de Dartmouth tuvo lugar en 1956."
  },
  {
    "tema": 1,
    "pregunta": "¿Quién publicó en 1958 el trabajo sobre el perceptrón?",
    "opciones": ["Alan Turing", "Garri Kaspárov", "Frank Rosenblatt", "Lee Sedol"],
    "correcta": 2,
    "explicacion": "Rosenblatt presentó el perceptrón como un modelo capaz de aprender a clasificar."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué caracteriza a los inviernos de la IA?",
    "opciones": ["Un aumento ilimitado de la financiación", "La desaparición de todos los ordenadores", "El fin de la informática", "Periodos de desencanto y reducción de la financiación"],
    "correcta": 3,
    "explicacion": "Las expectativas excesivas y los límites técnicos o comerciales provocaron ciclos de desencanto."
  },
  {
    "tema": 1,
    "pregunta": "¿Cuál fue una dificultad importante de los sistemas expertos?",
    "opciones": ["No podían usar símbolos", "Recopilar y mantener el conocimiento experto resultaba costoso", "Solo funcionaban con imágenes", "No utilizaban reglas"],
    "correcta": 1,
    "explicacion": "La adquisición y actualización del conocimiento era un reto técnico y económico."
  },
  {
    "tema": 1,
    "pregunta": "¿Cómo combinaba Deep Blue búsqueda y evaluación?",
    "opciones": ["Con reglas difusas y datos sintéticos", "Solo con un perceptrón", "Con algoritmos genéticos y RAG", "Con búsqueda, evaluación de posiciones y hardware especializado"],
    "correcta": 3,
    "explicacion": "Deep Blue derrotó a Kaspárov en una tarea delimitada, no demostró inteligencia general."
  },
  {
    "tema": 1,
    "pregunta": "¿En qué año se lanzó Roomba?",
    "opciones": ["1997", "2004", "2002", "2016"],
    "correcta": 2,
    "explicacion": "iRobot lanzó Roomba en 2002 y popularizó los robots aspiradores domésticos."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué ocurrió en el DARPA Grand Challenge de 2004?",
    "opciones": ["Todos los vehículos terminaron", "Solo terminó un vehículo", "No participaron vehículos", "Ningún vehículo completó el recorrido"],
    "correcta": 3,
    "explicacion": "Quince vehículos lo intentaron, pero ninguno completó la ruta desértica."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué concurso ganó Watson en 2011?",
    "opciones": ["Jeopardy!", "AlphaGo", "El Mundial de ajedrez", "Dartmouth"],
    "correcta": 0,
    "explicacion": "Watson ganó a Ken Jennings y Brad Rutter en Jeopardy!"
  },
  {
    "tema": 1,
    "pregunta": "¿Cuál fue el resultado de AlphaGo frente a Lee Sedol en 2016?",
    "opciones": ["4–1", "1–4", "0–5", "100–0"],
    "correcta": 0,
    "explicacion": "AlphaGo ganó el encuentro por cuatro partidas a una."
  },
  {
    "tema": 1,
    "pregunta": "¿Cómo aprendió AlphaGo Zero?",
    "opciones": ["Copiando partidas humanas", "Solo con reglas difusas", "Partiendo de las reglas y jugando contra sí mismo por aprendizaje por refuerzo", "Leyendo el manual de Go"],
    "correcta": 2,
    "explicacion": "AlphaGo Zero no se entrenó con partidas humanas."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué predice principalmente GPT-3 al generar texto?",
    "opciones": ["La siguiente palabra completa", "El siguiente token a partir del contexto", "Una imagen fija", "Una acción física"],
    "correcta": 1,
    "explicacion": "GPT-3 es un modelo autorregresivo basado en Transformers."
  },
  {
    "tema": 1,
    "pregunta": "¿Con qué tipo de datos se entrenó el primer DALL·E descrito en los apuntes?",
    "opciones": ["Solo audio", "Solo código", "Solo sensores", "Pares de texto e imagen"],
    "correcta": 3,
    "explicacion": "DALL·E genera imágenes a partir de descripciones textuales."
  },
  {
    "tema": 1,
    "pregunta": "Según el informe de GPT-4 de 2023, ¿qué entradas y salidas admite?",
    "opciones": ["Acepta texto e imágenes y produce texto", "Produce directamente audio e imágenes", "Solo acepta imágenes", "Solo produce código"],
    "correcta": 0,
    "explicacion": "El informe describe un modelo multimodal de entrada que genera texto."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué es la IA estrecha?",
    "opciones": ["Una IA con conciencia demostrada", "Una IA que resuelve cualquier tarea", "Una IA especializada en tareas o dominios delimitados", "Una IA sin datos"],
    "correcta": 2,
    "explicacion": "Puede superar al ser humano en su ámbito sin poseer capacidades generales."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué sostiene la IA fuerte en sentido filosófico?",
    "opciones": ["Que todos los modelos son óptimos", "Que un sistema computacional puede tener comprensión o estados mentales reales", "Que la IA solo usa estadística", "Que no existen límites computacionales"],
    "correcta": 1,
    "explicacion": "IA fuerte y AGI son distinciones diferentes y no deben usarse como sinónimos automáticos."
  },
  {
    "tema": 1,
    "pregunta": "¿Por qué racionalidad no significa omnisciencia?",
    "opciones": ["Porque los agentes nunca tienen objetivos", "Porque toda decisión es aleatoria", "Porque solo importa el hardware", "Porque una buena decisión con la información disponible puede tener un resultado desfavorable"],
    "correcta": 3,
    "explicacion": "La calidad de la decisión se juzga por la información y la utilidad esperada, no solo por el resultado final."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué representa el paradigma simbólico?",
    "opciones": ["Conocimiento explícito mediante símbolos, hechos, relaciones y reglas", "Solo pesos numéricos", "Solo distribuciones de probabilidad", "Solo señales de sensores"],
    "correcta": 0,
    "explicacion": "La inferencia simbólica manipula representaciones explícitas para derivar conclusiones o planes."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué caracteriza al paradigma conexionista?",
    "opciones": ["Usa únicamente árboles de búsqueda", "No ajusta parámetros", "Utiliza redes de neuronas artificiales y ajusta pesos durante el aprendizaje", "Solo representa reglas lógicas"],
    "correcta": 2,
    "explicacion": "La inspiración biológica es parcial; las redes no reproducen fielmente el cerebro."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué busca el paradigma estadístico?",
    "opciones": ["Eliminar toda incertidumbre", "Representar patrones e incertidumbre con modelos probabilísticos", "Sustituir los datos por reglas", "Evitar evaluar predicciones"],
    "correcta": 1,
    "explicacion": "Su calidad depende de los datos, los supuestos del modelo y el contexto."
  },
  {
    "tema": 1,
    "pregunta": "¿Qué necesita el aprendizaje supervisado?",
    "opciones": ["Solo recompensas", "Datos sin etiquetar", "Un oponente", "Ejemplos que incluyen la respuesta esperada"],
    "correcta": 3,
    "explicacion": "Clasificación y regresión son tareas habituales del aprendizaje supervisado."
  },
  {
    "tema": 2,
    "pregunta": "¿De qué elementos básicos consta un grafo?",
    "opciones": ["Solo vectores", "Nodos conectados por aristas", "Filas y columnas de una tabla", "Instrucciones y variables"],
    "correcta": 1,
    "explicacion": "Los nodos representan objetos y las aristas sus relaciones."
  },
  {
    "tema": 2,
    "pregunta": "¿Quién introdujo los grafos al resolver el problema de los puentes de Königsberg?",
    "opciones": ["Leonhard Euler", "Alan Turing", "Frank Rosenblatt", "John McCarthy"],
    "correcta": 0,
    "explicacion": "Euler estudió si existía un camino que recorriera todos los puentes sin repetir ninguno."
  },
  {
    "tema": 2,
    "pregunta": "Según los apuntes, ¿qué condición tienen los nodos de un grafo euleriano?",
    "opciones": ["Todos tienen grado impar", "Ninguno tiene aristas", "Todos tienen grado par", "Todos están aislados"],
    "correcta": 2,
    "explicacion": "El grafo de Königsberg no era euleriano porque tenía cuatro nodos de grado impar."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué distingue a un grafo dirigido?",
    "opciones": ["Sus aristas no tienen nodos", "Siempre es completo", "No puede tener pesos", "Sus aristas tienen dirección"],
    "correcta": 3,
    "explicacion": "En un grafo dirigido, la relación de una arista tiene un sentido."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué es un nodo fuente en un grafo dirigido?",
    "opciones": ["Un nodo al que solo llegan aristas", "Un nodo del que solo salen aristas", "Un nodo sin aristas", "Un nodo de grado cero obligatoriamente"],
    "correcta": 1,
    "explicacion": "Un sumidero, en cambio, es un nodo al que solo llegan aristas."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué es un sumidero en un grafo dirigido?",
    "opciones": ["Un nodo al que solo llegan aristas", "Un nodo del que solo salen aristas", "Un ciclo completo", "Una arista con peso"],
    "correcta": 0,
    "explicacion": "La dirección de las aristas permite distinguir fuentes y sumideros."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué significa DAG?",
    "opciones": ["Grafo dirigido con al menos un ciclo", "Grafo completo sin pesos", "Grafo dirigido acíclico", "Grafo no conexo y dirigido"],
    "correcta": 2,
    "explicacion": "Los DAG se utilizan, por ejemplo, para representar dependencias."
  },
  {
    "tema": 2,
    "pregunta": "¿Cuándo un grafo es completo?",
    "opciones": ["Cuando no tiene aristas", "Cuando tiene un solo nodo", "Cuando todos sus nodos tienen el mismo grado", "Cuando todos los nodos están conectados entre sí"],
    "correcta": 3,
    "explicacion": "La completitud se refiere a la existencia de conexión entre cada par de nodos."
  },
  {
    "tema": 2,
    "pregunta": "¿Cuándo un grafo es conexo?",
    "opciones": ["Cuando es completo", "Cuando hay un camino entre cualquier par de nodos", "Cuando no tiene ciclos", "Cuando está dirigido"],
    "correcta": 1,
    "explicacion": "Conectividad y completitud son propiedades distintas."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué se conserva entre dos grafos isomorfos?",
    "opciones": ["La relación entre los nodos", "La posición exacta de cada nodo en la pantalla", "La longitud visual de cada arista", "El color de los nodos"],
    "correcta": 0,
    "explicacion": "El dibujo puede cambiar sin que cambie la estructura relacional."
  },
  {
    "tema": 2,
    "pregunta": "¿Cuál es el coste espacial habitual de una matriz de adyacencia?",
    "opciones": ["O(n)", "O(log n)", "O(n²)", "O(n + m)"],
    "correcta": 2,
    "explicacion": "Una matriz cuadrada de n nodos necesita n² posiciones."
  },
  {
    "tema": 2,
    "pregunta": "¿Cuál es el coste espacial habitual de una lista de adyacencia?",
    "opciones": ["O(n²)", "O(1)", "O(log n)", "O(n + m)"],
    "correcta": 3,
    "explicacion": "La lista almacena nodos y aristas, por lo que suele ocupar menos en grafos dispersos."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué complejidad tiene comprobar una arista concreta en una matriz de adyacencia?",
    "opciones": ["O(n²)", "O(1)", "O(n)", "O(log n)"],
    "correcta": 1,
    "explicacion": "El acceso directo a una posición de la matriz permite la comprobación en tiempo constante."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué complejidad tiene obtener el grado de un nodo en una lista de adyacencia?",
    "opciones": ["O(1)", "O(n²)", "O(log n)", "O(n!)"],
    "correcta": 0,
    "explicacion": "En la tabla de los apuntes, el grado se obtiene consultando directamente la lista del nodo."
  },
  {
    "tema": 2,
    "pregunta": "¿Para qué grafos suele ser más apropiada una lista de adyacencia?",
    "opciones": ["Grafos densos que nunca cambian", "Grafos sin nodos", "Grafos dispersos o que se modifican con frecuencia", "Solo grafos completos"],
    "correcta": 2,
    "explicacion": "La lista ahorra espacio y facilita añadir o eliminar nodos y aristas."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué propiedades definen un árbol?",
    "opciones": ["Cíclico y dirigido", "Conexo con muchos caminos entre nodos", "Desconectado y con pesos", "Conexo, acíclico, no dirigido y con un único camino entre cada par de nodos"],
    "correcta": 3,
    "explicacion": "Un árbol es un tipo especial de grafo."
  },
  {
    "tema": 2,
    "pregunta": "¿Cómo se ordenan los valores en un árbol binario de búsqueda?",
    "opciones": ["Los de la izquierda son mayores", "Los de la izquierda son menores y los de la derecha mayores", "No hay ningún orden", "Todos los valores son iguales"],
    "correcta": 1,
    "explicacion": "Esa propiedad permite descartar mitades durante la búsqueda."
  },
  {
    "tema": 2,
    "pregunta": "¿Hasta qué coste puede aumentar el acceso en un árbol binario de búsqueda desequilibrado?",
    "opciones": ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    "correcta": 0,
    "explicacion": "Muchas inserciones o eliminaciones pueden degenerar el árbol; AVL y Red-Black ayudan a mantener el equilibrio."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué complejidad tiene acceder a un elemento de un vector por su índice?",
    "opciones": ["O(n)", "O(log n)", "O(1)", "O(n!)"],
    "correcta": 2,
    "explicacion": "El acceso indexado de un vector es de tiempo constante."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué complejidad tiene insertar un elemento en una lista enlazada cuando ya se conoce la posición?",
    "opciones": ["O(n²)", "O(log n)", "O(n!)", "O(1)"],
    "correcta": 3,
    "explicacion": "La inserción se realiza modificando los punteros de los nodos afectados."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué principio sigue una cola?",
    "opciones": ["LIFO", "FIFO", "LILO sin orden", "Aleatorio"],
    "correcta": 1,
    "explicacion": "FIFO significa que el primero en entrar es el primero en salir."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué principio sigue una pila?",
    "opciones": ["LIFO", "FIFO", "Por peso", "Por orden alfabético"],
    "correcta": 0,
    "explicacion": "LIFO significa que el último en entrar es el primero en salir."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué estructura permite implementar eficientemente una cola de prioridad?",
    "opciones": ["Una lista enlazada simple", "Una pila LIFO", "Un heap", "Una matriz de adyacencia"],
    "correcta": 2,
    "explicacion": "En Python pueden usarse heapq o queue.PriorityQueue."
  },
  {
    "tema": 2,
    "pregunta": "¿Qué representa la notación O grande?",
    "opciones": ["Una cota inferior", "Un valor exacto para cada entrada", "Solo el espacio, nunca el tiempo", "Una cota superior del tiempo o del espacio"],
    "correcta": 3,
    "explicacion": "Omega representa una cota inferior y Theta una cota superior e inferior."
  },
  {
    "tema": 2,
    "pregunta": "¿Cuál es la complejidad temporal de la búsqueda binaria?",
    "opciones": ["O(n)", "O(log n)", "O(n²)", "O(2ⁿ)"],
    "correcta": 1,
    "explicacion": "En cada iteración se reduce a la mitad el número de elementos por examinar."
  },
  {
    "tema": 3,
    "pregunta": "¿Cuáles son los elementos básicos de un problema de búsqueda?",
    "opciones": ["Estado inicial, función sucesora y estado objetivo", "Solo una heurística", "Solo una lista de preguntas", "Únicamente un modelo neuronal"],
    "correcta": 0,
    "explicacion": "La función sucesora indica los estados alcanzables y el coste de cada transición."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué es una solución en un problema de búsqueda?",
    "opciones": ["Cualquier estado visitado", "Una heurística admisible", "Una secuencia de estados que lleva del inicial al objetivo", "Una frontera vacía"],
    "correcta": 2,
    "explicacion": "Esa secuencia de estados constituye un plan."
  },
  {
    "tema": 3,
    "pregunta": "¿Cómo se representa un estado en el problema de las jarras de agua?",
    "opciones": ["Con el nombre de la jarra", "Con la cantidad de agua de cada jarra", "Con la distancia a Bucarest", "Con el número de parámetros"],
    "correcta": 1,
    "explicacion": "Por ejemplo, (0, 0) representa las dos jarras vacías."
  },
  {
    "tema": 3,
    "pregunta": "¿Cuántas posiciones admite el espacio de estados del puzle del 8 según los apuntes?",
    "opciones": ["8!", "3²", "9", "9! = 362.880"],
    "correcta": 3,
    "explicacion": "Se cuentan las permutaciones de las ocho fichas y el hueco."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué contiene la frontera al comenzar una búsqueda?",
    "opciones": ["El estado inicial", "Todos los estados objetivo", "Solo estados visitados", "Una lista vacía siempre"],
    "correcta": 0,
    "explicacion": "La frontera reúne los estados conocidos que quedan pendientes de visitar."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué indica que una búsqueda no encuentra solución?",
    "opciones": ["Que la frontera crece", "Que aparece un ciclo", "Que la frontera se vacía sin haber llegado al objetivo", "Que hay muchos estados"],
    "correcta": 2,
    "explicacion": "Si no quedan estados pendientes y no hay objetivo, el espacio explorable se ha agotado."
  },
  {
    "tema": 3,
    "pregunta": "¿Para qué se guarda el padre de cada estado?",
    "opciones": ["Para calcular una heurística", "Para reconstruir la secuencia de acciones de la solución", "Para ordenar alfabéticamente", "Para eliminar todos los ciclos"],
    "correcta": 1,
    "explicacion": "Los enlaces padre permiten volver desde el objetivo hasta el estado inicial."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué es la completitud de un algoritmo de búsqueda?",
    "opciones": ["Encontrar siempre la ruta más corta", "Usar poca memoria", "No repetir estados", "La garantía de encontrar una solución si existe"],
    "correcta": 3,
    "explicacion": "La completitud no implica optimalidad."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué es la optimalidad de un algoritmo de búsqueda?",
    "opciones": ["La garantía de encontrar la solución de menor coste", "La garantía de usar menos memoria", "Explorar todos los estados", "No utilizar heurísticas"],
    "correcta": 0,
    "explicacion": "Un algoritmo puede ser completo sin garantizar una solución óptima."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué estructura utiliza la búsqueda en anchura como frontera?",
    "opciones": ["Una pila LIFO", "Un heap por heurística", "Una cola FIFO", "Una lista ordenada por g"],
    "correcta": 2,
    "explicacion": "La cola FIFO hace que se explore por niveles."
  },
  {
    "tema": 3,
    "pregunta": "¿Cuándo garantiza la búsqueda en anchura una solución óptima?",
    "opciones": ["Cuando el espacio es infinito", "Cuando todas las acciones tienen el mismo coste", "Cuando usa cualquier heurística", "Nunca"],
    "correcta": 1,
    "explicacion": "Con costes unitarios, la primera solución encontrada tiene profundidad mínima."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué estructura utiliza la búsqueda en profundidad como frontera?",
    "opciones": ["Una cola FIFO", "Una cola de prioridad por g", "Un conjunto desordenado", "Una pila LIFO"],
    "correcta": 3,
    "explicacion": "La pila hace que la búsqueda avance por una rama antes de retroceder."
  },
  {
    "tema": 3,
    "pregunta": "¿Por qué la búsqueda en profundidad puede no terminar?",
    "opciones": ["Porque puede seguir ramas infinitas", "Porque siempre usa una cola", "Porque solo encuentra soluciones óptimas", "Porque exige costes unitarios"],
    "correcta": 0,
    "explicacion": "Sin un límite o control adecuado de ciclos, una rama infinita puede mantenerse activa."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué ocurre en la búsqueda en profundidad limitada?",
    "opciones": ["Nunca retrocede", "Ordena por heurística", "Se detiene al alcanzar una profundidad máxima y puede no hallar soluciones más profundas", "Siempre encuentra la solución óptima"],
    "correcta": 2,
    "explicacion": "El límite evita continuar indefinidamente por una rama."
  },
  {
    "tema": 3,
    "pregunta": "¿Cómo funciona la búsqueda en profundidad iterativa?",
    "opciones": ["Elimina la frontera", "Repite búsquedas limitadas aumentando el límite desde cero", "Solo explora un estado", "Usa siempre una heurística"],
    "correcta": 1,
    "explicacion": "Combina parte de las ventajas de anchura y profundidad, aunque repite trabajo."
  },
  {
    "tema": 3,
    "pregunta": "¿Cómo ordena la frontera la búsqueda de coste uniforme?",
    "opciones": ["Por el valor de h", "Por profundidad exclusivamente", "Por orden alfabético", "Por el coste acumulado del camino"],
    "correcta": 3,
    "explicacion": "Suele usar una cola de prioridad y expande primero el estado de menor coste acumulado."
  },
  {
    "tema": 3,
    "pregunta": "¿Bajo qué condición la búsqueda de coste uniforme encuentra una solución óptima?",
    "opciones": ["Con costes positivos y las condiciones habituales del algoritmo", "Solo con costes negativos", "Solo si hay ciclos", "Nunca"],
    "correcta": 0,
    "explicacion": "La primera solución extraída es óptima cuando se cumplen las condiciones indicadas."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué estima una heurística?",
    "opciones": ["El número de parámetros", "El coste ya recorrido", "El coste restante hasta una solución", "El tamaño de la memoria"],
    "correcta": 2,
    "explicacion": "La heurística se diseña para un problema concreto, como la distancia en línea recta."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué utiliza la búsqueda voraz para elegir el siguiente estado?",
    "opciones": ["Solo g(n)", "Solo h(n)", "g(n) + h(n)", "La profundidad máxima"],
    "correcta": 1,
    "explicacion": "La búsqueda voraz prioriza la estimación heurística y no garantiza optimalidad."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué función ordena la frontera en A*?",
    "opciones": ["f(n) = h(n)", "f(n) = g(n)", "f(n) = g(n) - h(n)", "f(n) = g(n) + h(n)"],
    "correcta": 3,
    "explicacion": "A* combina el coste acumulado y la estimación del coste restante."
  },
  {
    "tema": 3,
    "pregunta": "En A*, ¿qué valor representa el coste real del camino recorrido?",
    "opciones": ["g(n)", "h(n)", "f(n)", "El peso de la heurística"],
    "correcta": 0,
    "explicacion": "f(n) sirve para ordenar la frontera; el coste real acumulado es g(n)."
  },
  {
    "tema": 3,
    "pregunta": "¿Cuándo es admisible una heurística?",
    "opciones": ["Cuando siempre sobreestima", "Cuando vale cero en todos los estados", "Cuando no sobreestima el coste restante hasta la solución óptima", "Cuando depende del color del estado"],
    "correcta": 2,
    "explicacion": "Si C*(n) es el coste óptimo restante, una heurística admisible cumple h(n) ≤ C*(n)."
  },
  {
    "tema": 3,
    "pregunta": "Para garantizar optimalidad de A* en un grafo, ¿qué puede exigirse además de una heurística admisible?",
    "opciones": ["Que la frontera sea una pila", "Consistencia de la heurística o reapertura de estados", "Que todos los costes sean infinitos", "Que no haya estado objetivo"],
    "correcta": 1,
    "explicacion": "En búsqueda sobre grafos, la consistencia evita problemas al cerrar estados; alternativamente, pueden reabrirse."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué ocurre al aumentar el peso de la heurística en A* ponderado?",
    "opciones": ["Se vuelve siempre más lento", "Desaparece g(n)", "Se garantiza optimalidad", "Puede explorar menos estados, pero perder optimalidad"],
    "correcta": 3,
    "explicacion": "Con un peso mayor que uno, A* ponderado se acerca a la búsqueda voraz."
  },
  {
    "tema": 3,
    "pregunta": "¿Qué caracteriza a A* de profundización iterativa?",
    "opciones": ["Limita la exploración mediante valores de f y reduce memoria a cambio de repetir trabajo", "Nunca repite estados", "Usa solo una cola FIFO", "No utiliza heurística"],
    "correcta": 0,
    "explicacion": "Esta variante busca conservar la optimalidad con un uso de memoria menor."
  }
];

const nombresTemas = {
  0: "0 · IA responsable",
  1: "1 · Introducción y fundamentos",
  2: "2 · Conceptos previos",
  3: "3 · Búsqueda en espacios de estados"
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
let preguntasVisibles = preguntasCarles.map((_, indice) => indice);
const respuestas = Array(preguntasCarles.length).fill(null);
const comprobadas = Array(preguntasCarles.length).fill(false);

function actualizarPuntuacion() {
  const aciertos = respuestas.reduce(
    (total, respuesta, indice) => total + (comprobadas[indice] && respuesta === preguntasCarles[indice].correcta ? 1 : 0),
    0
  );
  const respondidas = comprobadas.filter(Boolean).length;
  const pendientes = preguntasCarles.length - respondidas;

  if (respondidas === preguntasCarles.length) {
    puntuacion.textContent = `Resultado final: ${aciertos}/${preguntasCarles.length} aciertos.`;
    return;
  }

  puntuacion.textContent = `${aciertos} ${aciertos === 1 ? "acierto" : "aciertos"} · ${respondidas}/${preguntasCarles.length} comprobadas · ${pendientes} pendientes`;
}

function mostrarPregunta() {
  const indice = preguntasVisibles[posicionActual];
  const pregunta = preguntasCarles[indice];
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
    contenido.textContent = texto;

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
    ? preguntasCarles.map((_, indice) => indice)
    : preguntasCarles.map((_, indice) => indice).filter((indice) => preguntasCarles[indice].tema === Number(filtroTema.value));
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
  preguntasVisibles = preguntasCarles.map((_, indice) => indice);
  posicionActual = 0;
  mostrarPregunta();
});

formulario.addEventListener("submit", (evento) => evento.preventDefault());

mostrarPregunta();
