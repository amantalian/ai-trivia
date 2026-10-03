// Banco de preguntas. Cada pregunta tiene 4 opciones y `answer` es el índice (0-3)
// de la opción correcta. Se define como variable global para que funcione vía file://.
const QUESTIONS = [
  // --- Historia ---
  {
    question: "¿Quién propuso en 1950 el \"juego de imitación\", hoy conocido como test de Turing?",
    options: ["Alan Turing", "John von Neumann", "Claude Shannon", "Marvin Minsky"],
    answer: 0,
    explanation: "Alan Turing lo propuso en su artículo \"Computing Machinery and Intelligence\" (1950).",
    difficulty: "fácil"
  },
  {
    question: "¿En qué año se realizó el taller de Dartmouth, considerado el nacimiento de la IA como disciplina?",
    options: ["1943", "1956", "1969", "1981"],
    answer: 1,
    explanation: "El taller de Dartmouth se hizo en el verano de 1956; la propuesta acuñó el término \"inteligencia artificial\".",
    difficulty: "media"
  },
  {
    question: "¿Quién acuñó el término \"inteligencia artificial\"?",
    options: ["Alan Turing", "Herbert Simon", "John McCarthy", "Ada Lovelace"],
    answer: 2,
    explanation: "John McCarthy usó el término en la propuesta del taller de Dartmouth, escrita en 1955.",
    difficulty: "media"
  },
  {
    question: "¿Qué lenguaje de programación, muy usado en la IA clásica, creó John McCarthy en 1958?",
    options: ["Prolog", "Lisp", "Fortran", "COBOL"],
    answer: 1,
    explanation: "McCarthy creó Lisp en 1958, y fue durante décadas el lenguaje de referencia en IA.",
    difficulty: "difícil"
  },
  {
    question: "¿Cómo se llamaba el programa de 1966 que simulaba a un psicoterapeuta conversando por texto?",
    options: ["SHRDLU", "MYCIN", "ELIZA", "Watson"],
    answer: 2,
    explanation: "ELIZA, creado por Joseph Weizenbaum en el MIT, imitaba a un terapeuta con reglas simples de patrones.",
    difficulty: "media"
  },
  {
    question: "¿Quién creó el perceptrón, uno de los primeros modelos de neurona artificial, en 1958?",
    options: ["Frank Rosenblatt", "Geoffrey Hinton", "Norbert Wiener", "Yann LeCun"],
    answer: 0,
    explanation: "Frank Rosenblatt presentó el perceptrón en 1958 en el Laboratorio Aeronáutico de Cornell.",
    difficulty: "difícil"
  },
  {
    question: "¿Qué limitación del perceptrón simple señalaron Minsky y Papert en su libro \"Perceptrons\" (1969)?",
    options: [
      "No podía procesar imágenes en color",
      "No podía aprender funciones no linealmente separables, como XOR",
      "Necesitaba demasiada memoria",
      "Solo funcionaba con números enteros"
    ],
    answer: 1,
    explanation: "Mostraron que un perceptrón de una sola capa no puede resolver problemas como XOR.",
    difficulty: "difícil"
  },
  {
    question: "¿Qué se conoce como \"invierno de la IA\"?",
    options: [
      "Un período de menor financiamiento e interés en la IA",
      "Una falla masiva de servidores en 1999",
      "Un algoritmo para climas fríos",
      "La temporada en que se publican los papers más importantes"
    ],
    answer: 0,
    explanation: "Se llama así a las etapas en que las expectativas no se cumplieron y cayeron la inversión y el interés.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué era un \"sistema experto\"?",
    options: [
      "Una red neuronal muy profunda",
      "Un programa que usaba reglas definidas por especialistas para tomar decisiones en un dominio",
      "Un robot industrial",
      "Un buscador web"
    ],
    answer: 1,
    explanation: "Los sistemas expertos (como MYCIN) codificaban conocimiento humano en reglas \"si... entonces\".",
    difficulty: "media"
  },
  {
    question: "¿En qué año la computadora Deep Blue de IBM le ganó un match de ajedrez a Garry Kasparov?",
    options: ["1989", "1997", "2005", "2011"],
    answer: 1,
    explanation: "Deep Blue venció a Kasparov en un match a seis partidas en 1997.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué sistema de IBM ganó el programa de preguntas \"Jeopardy!\" en 2011?",
    options: ["Deep Blue", "Watson", "Siri", "Cortana"],
    answer: 1,
    explanation: "Watson les ganó a los campeones Ken Jennings y Brad Rutter en 2011.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué programa de DeepMind le ganó al campeón de Go Lee Sedol en 2016?",
    options: ["AlphaGo", "AlphaFold", "Stockfish", "Deep Blue"],
    answer: 0,
    explanation: "AlphaGo venció a Lee Sedol 4 a 1 en Seúl, en marzo de 2016.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué red neuronal ganó por amplio margen la competencia ImageNet en 2012 e impulsó el auge del deep learning?",
    options: ["LeNet", "AlexNet", "ResNet", "VGG"],
    answer: 1,
    explanation: "AlexNet, de Krizhevsky, Sutskever y Hinton, redujo notablemente el error en ImageNet 2012.",
    difficulty: "media"
  },
  {
    question: "¿Quiénes recibieron el Premio Turing 2018 por sus aportes al aprendizaje profundo?",
    options: [
      "Hinton, LeCun y Bengio",
      "Turing, McCarthy y Minsky",
      "Page, Brin y Schmidt",
      "Hassabis, Legg y Suleyman"
    ],
    answer: 0,
    explanation: "Geoffrey Hinton, Yann LeCun y Yoshua Bengio compartieron el Premio Turing 2018.",
    difficulty: "media"
  },
  {
    question: "¿De qué obra proviene la palabra \"robot\"?",
    options: [
      "\"Yo, Robot\" de Isaac Asimov",
      "\"Frankenstein\" de Mary Shelley",
      "\"R.U.R.\" de Karel Čapek",
      "\"Metrópolis\" de Fritz Lang"
    ],
    answer: 2,
    explanation: "La palabra apareció en la obra de teatro \"R.U.R.\" (1920) del checo Karel Čapek.",
    difficulty: "media"
  },
  {
    question: "¿Quién formuló las \"Tres leyes de la robótica\"?",
    options: ["Arthur C. Clarke", "Isaac Asimov", "Philip K. Dick", "Alan Turing"],
    answer: 1,
    explanation: "Isaac Asimov las presentó en su cuento \"Runaround\" (1942).",
    difficulty: "fácil"
  },

  // --- Conceptos ---
  {
    question: "¿Qué caracteriza al aprendizaje supervisado?",
    options: [
      "El modelo aprende de datos etiquetados con la respuesta correcta",
      "El modelo aprende sin ningún dato",
      "Una persona supervisa cada predicción en tiempo real",
      "El modelo solo agrupa datos sin etiquetas"
    ],
    answer: 0,
    explanation: "En el aprendizaje supervisado cada ejemplo de entrenamiento incluye la salida esperada.",
    difficulty: "fácil"
  },
  {
    question: "En el aprendizaje por refuerzo, ¿cómo aprende un agente?",
    options: [
      "Copiando textos de internet",
      "Mediante recompensas y penalizaciones según sus acciones",
      "Memorizando un conjunto de reglas fijas",
      "Agrupando datos parecidos"
    ],
    answer: 1,
    explanation: "El agente interactúa con un entorno y ajusta su comportamiento para maximizar la recompensa.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué es el sobreajuste (overfitting)?",
    options: [
      "Cuando el modelo es demasiado chico para aprender",
      "Cuando el modelo aprende tan bien los datos de entrenamiento que generaliza mal a datos nuevos",
      "Cuando el entrenamiento tarda demasiado",
      "Cuando se usan demasiadas GPU"
    ],
    answer: 1,
    explanation: "Un modelo sobreajustado \"memoriza\" el entrenamiento, incluido el ruido, y rinde peor con datos nuevos.",
    difficulty: "media"
  },
  {
    question: "¿Para qué se usa un conjunto de prueba (test set) separado?",
    options: [
      "Para entrenar más rápido",
      "Para evaluar cómo generaliza el modelo a datos que no vio",
      "Para guardar una copia de seguridad",
      "Para etiquetar los datos"
    ],
    answer: 1,
    explanation: "Evaluar con datos no vistos durante el entrenamiento da una medida honesta del rendimiento.",
    difficulty: "fácil"
  },
  {
    question: "¿Cuál es el objetivo del descenso por gradiente al entrenar una red neuronal?",
    options: [
      "Maximizar la cantidad de capas",
      "Minimizar la función de pérdida ajustando los parámetros",
      "Ordenar los datos de entrada",
      "Comprimir el modelo final"
    ],
    answer: 1,
    explanation: "Ajusta los pesos en la dirección que más reduce el error medido por la función de pérdida.",
    difficulty: "media"
  },
  {
    question: "¿Qué artículo de 1986 popularizó la retropropagación (backpropagation) para entrenar redes neuronales?",
    options: [
      "El de Rumelhart, Hinton y Williams",
      "El de Turing",
      "El de Vaswani y colegas",
      "El de Minsky y Papert"
    ],
    answer: 0,
    explanation: "Rumelhart, Hinton y Williams publicaron en Nature (1986) el trabajo que difundió la retropropagación.",
    difficulty: "difícil"
  },
  {
    question: "¿Para qué tipo de datos se diseñaron especialmente las redes neuronales convolucionales (CNN)?",
    options: ["Imágenes", "Hojas de cálculo", "Audio comprimido en MP3", "Bases de datos SQL"],
    answer: 0,
    explanation: "Las CNN aprovechan la estructura espacial de los píxeles, por eso se usan mucho en visión por computadora.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué tipo de red neuronal es una LSTM?",
    options: ["Convolucional", "Recurrente", "Generativa adversaria", "Árbol de decisión"],
    answer: 1,
    explanation: "LSTM (Long Short-Term Memory), propuesta en 1997, es una red recurrente que maneja dependencias largas.",
    difficulty: "media"
  },
  {
    question: "¿Quién presentó las redes generativas adversarias (GAN) en 2014?",
    options: ["Ian Goodfellow", "Andrew Ng", "Fei-Fei Li", "Demis Hassabis"],
    answer: 0,
    explanation: "Ian Goodfellow y colegas propusieron las GAN: dos redes que compiten, un generador y un discriminador.",
    difficulty: "difícil"
  },
  {
    question: "¿Qué arquitectura se presentó en el artículo \"Attention Is All You Need\" (2017)?",
    options: ["La red recurrente", "El Transformer", "El perceptrón", "La red de Hopfield"],
    answer: 1,
    explanation: "Investigadores de Google presentaron el Transformer, base de la mayoría de los modelos de lenguaje actuales.",
    difficulty: "media"
  },
  {
    question: "¿Qué significa la sigla GPT?",
    options: [
      "General Purpose Technology",
      "Generative Pre-trained Transformer",
      "Global Processing Tool",
      "Graphical Prediction Tree"
    ],
    answer: 1,
    explanation: "GPT = Generative Pre-trained Transformer: un Transformer generativo preentrenado.",
    difficulty: "media"
  },
  {
    question: "En los modelos de lenguaje, ¿qué es un \"token\"?",
    options: [
      "Una contraseña de acceso",
      "Una unidad de texto (palabra o fragmento) que el modelo procesa",
      "Una criptomoneda",
      "Un tipo de GPU"
    ],
    answer: 1,
    explanation: "Los modelos dividen el texto en tokens, que pueden ser palabras, partes de palabras o signos.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué es la \"ventana de contexto\" de un modelo de lenguaje?",
    options: [
      "La interfaz gráfica del chat",
      "La cantidad máxima de tokens que el modelo puede considerar a la vez",
      "El tiempo que tarda en responder",
      "La lista de idiomas que entiende"
    ],
    answer: 1,
    explanation: "Es el límite de texto (en tokens) que el modelo puede tener en cuenta en una sola interacción.",
    difficulty: "media"
  },
  {
    question: "¿Qué se llama \"alucinación\" en un modelo de lenguaje?",
    options: [
      "Cuando genera información falsa o inventada presentándola como cierta",
      "Cuando se queda sin memoria",
      "Cuando responde en otro idioma",
      "Cuando genera imágenes"
    ],
    answer: 0,
    explanation: "El modelo puede producir datos plausibles pero incorrectos, por eso conviene verificar sus respuestas.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué es el \"fine-tuning\" (ajuste fino)?",
    options: [
      "Entrenar un modelo desde cero",
      "Seguir entrenando un modelo ya preentrenado con datos específicos de una tarea",
      "Comprimir un modelo para el celular",
      "Ajustar el brillo de una imagen generada"
    ],
    answer: 1,
    explanation: "Se parte de un modelo general y se lo especializa con un conjunto de datos más acotado.",
    difficulty: "media"
  },
  {
    question: "¿Qué significa RLHF, técnica usada para alinear modelos de lenguaje?",
    options: [
      "Reinforcement Learning from Human Feedback",
      "Recurrent Layer High Frequency",
      "Random Linear Hash Function",
      "Real-time Language Handling Framework"
    ],
    answer: 0,
    explanation: "Aprendizaje por refuerzo a partir de retroalimentación humana: personas evalúan respuestas para guiar al modelo.",
    difficulty: "difícil"
  },
  {
    question: "¿Qué significa la sigla PLN en el contexto de la IA?",
    options: [
      "Procesamiento del Lenguaje Natural",
      "Programación Lógica Numérica",
      "Protocolo de Lectura Neuronal",
      "Plataforma de Lenguajes Nuevos"
    ],
    answer: 0,
    explanation: "El PLN (NLP en inglés) estudia cómo las computadoras entienden y generan lenguaje humano.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué tipo de hardware se volvió clave para entrenar redes neuronales profundas por su cálculo en paralelo?",
    options: ["Discos rígidos", "GPU (placas gráficas)", "Disqueteras", "Módems"],
    answer: 1,
    explanation: "Las GPU hacen muchas operaciones matriciales en paralelo, ideales para el deep learning.",
    difficulty: "fácil"
  },

  // --- Modelos y empresas ---
  {
    question: "¿Qué empresa lanzó ChatGPT en noviembre de 2022?",
    options: ["Google", "Meta", "OpenAI", "Microsoft"],
    answer: 2,
    explanation: "OpenAI lanzó ChatGPT como vista previa gratuita el 30 de noviembre de 2022.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué empresa desarrolla los modelos de lenguaje Claude?",
    options: ["Anthropic", "OpenAI", "IBM", "Amazon"],
    answer: 0,
    explanation: "Claude es la familia de modelos de Anthropic, empresa fundada en 2021.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué empresa publicó la familia de modelos Llama?",
    options: ["Google", "Meta", "Apple", "NVIDIA"],
    answer: 1,
    explanation: "Meta presentó Llama en 2023 y publicó los pesos de sus modelos.",
    difficulty: "fácil"
  },
  {
    question: "¿A qué empresa pertenece la familia de modelos Gemini?",
    options: ["Microsoft", "Google", "Anthropic", "Meta"],
    answer: 1,
    explanation: "Gemini fue presentado por Google (Google DeepMind) en diciembre de 2023.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué hace DALL·E, de OpenAI?",
    options: [
      "Traduce audio en tiempo real",
      "Genera imágenes a partir de descripciones en texto",
      "Juega al ajedrez",
      "Predice el clima"
    ],
    answer: 1,
    explanation: "DALL·E, presentado en 2021, crea imágenes a partir de instrucciones escritas.",
    difficulty: "fácil"
  },
  {
    question: "¿En qué año fue fundada OpenAI?",
    options: ["2010", "2015", "2018", "2020"],
    answer: 1,
    explanation: "OpenAI se fundó en diciembre de 2015 como organización sin fines de lucro.",
    difficulty: "media"
  },
  {
    question: "¿Qué empresa compró DeepMind en 2014?",
    options: ["Facebook", "Google", "Amazon", "Apple"],
    answer: 1,
    explanation: "Google adquirió la británica DeepMind en 2014.",
    difficulty: "media"
  },
  {
    question: "¿Qué problema científico abordó AlphaFold, de DeepMind?",
    options: [
      "Predecir la estructura 3D de las proteínas",
      "Detectar ondas gravitacionales",
      "Descifrar el genoma humano por primera vez",
      "Pronosticar terremotos"
    ],
    answer: 0,
    explanation: "AlphaFold predice cómo se pliegan las proteínas, un problema abierto durante décadas.",
    difficulty: "media"
  },
  {
    question: "¿Quiénes compartieron el Premio Nobel de Física 2024 por trabajos fundacionales sobre redes neuronales artificiales?",
    options: [
      "John Hopfield y Geoffrey Hinton",
      "Yann LeCun y Yoshua Bengio",
      "Demis Hassabis y John Jumper",
      "Alan Turing y John McCarthy"
    ],
    answer: 0,
    explanation: "Hopfield y Hinton recibieron el Nobel de Física 2024; Hassabis y Jumper compartieron el de Química con David Baker.",
    difficulty: "difícil"
  },
  {
    question: "¿Cómo aprendió AlphaZero (2017) a jugar ajedrez, shogi y Go?",
    options: [
      "Estudiando millones de partidas de grandes maestros",
      "Jugando contra sí mismo, solo con las reglas como punto de partida",
      "Copiando el código de Deep Blue",
      "Con reglas escritas a mano por expertos"
    ],
    answer: 1,
    explanation: "AlphaZero aprendió por autojuego (self-play) sin partidas humanas de ejemplo.",
    difficulty: "difícil"
  },

  // --- Ética y sociedad ---
  {
    question: "¿Qué es el sesgo algorítmico?",
    options: [
      "Un error de sintaxis en el código",
      "Resultados injustos o sistemáticamente desfavorables para ciertos grupos, a menudo heredados de los datos",
      "Una técnica para acelerar el entrenamiento",
      "Un tipo de virus informático"
    ],
    answer: 1,
    explanation: "Si los datos de entrenamiento reflejan desigualdades, el modelo puede reproducirlas o amplificarlas.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué es un \"deepfake\"?",
    options: [
      "Un error profundo en una red neuronal",
      "Un video, audio o imagen falsificado de forma realista con IA",
      "Un antivirus basado en IA",
      "Un modelo de lenguaje muy grande"
    ],
    answer: 1,
    explanation: "Los deepfakes usan IA para imitar la cara o la voz de una persona, lo que plantea riesgos de desinformación.",
    difficulty: "fácil"
  },
  {
    question: "¿Qué enfoque central adopta la Ley de IA de la Unión Europea (AI Act), aprobada en 2024?",
    options: [
      "Prohíbe toda la inteligencia artificial",
      "Regula los sistemas según su nivel de riesgo",
      "Solo regula los videojuegos",
      "Obliga a que todo modelo sea de código abierto"
    ],
    answer: 1,
    explanation: "El AI Act clasifica los sistemas por riesgo: algunos usos se prohíben y los de alto riesgo tienen más obligaciones.",
    difficulty: "media"
  },
  {
    question: "¿Qué busca la \"IA explicable\" (XAI)?",
    options: [
      "Que la IA escriba manuales de usuario",
      "Que las decisiones de un modelo puedan ser entendidas por las personas",
      "Que los modelos sean más rápidos",
      "Que la IA hable varios idiomas"
    ],
    answer: 1,
    explanation: "Apunta a que se pueda entender por qué un modelo llegó a un resultado, clave en salud, justicia o finanzas.",
    difficulty: "media"
  }
];
