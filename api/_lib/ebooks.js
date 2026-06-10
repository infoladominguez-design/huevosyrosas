// SOLO SERVIDOR. Cuerpo de los capítulos de los e-books.
//
// Se entrega vía /api/ebook SOLO tras comprobar la compra (o vista previa
// gratuita). El primer capítulo de cada libro es gratis y vive también en el
// cliente (src/data/ebooks.js → ebookPreviews); aquí lo repetimos para que el
// endpoint pueda servirlo, y añadimos los capítulos de pago.

export const ebookContent = {
  // ============ No Estás Loca, Estás Desregulada ============
  'no-estas-loca-desregulada:c1': [
    { type: 'quote', value: 'No estás buscando sufrir. Tu cuerpo está intentando protegerte de la única forma que aprendió.' },
    { type: 'p', value: 'Hay algo que nunca te enseñaron: que tu sistema nervioso también elige por ti.' },
    { type: 'p', value: 'No es que estés loca. No es que estés rota. Es que tu cuerpo aprendió a anticipar el dolor para evitar el abandono. (Vista previa — el libro completo continúa tras la compra.)' },
  ],
  'no-estas-loca-desregulada:c2': [
    { type: 'h', value: 'Los tres estados' },
    { type: 'p', value: 'Tu cuerpo, en cada momento, está en uno de tres estados. Aprender a reconocerlos en tiempo real es la herramienta más poderosa de este libro, porque no puedes cambiar lo que no sabes nombrar.' },
    { type: 'p', value: 'El primero es la calma conectada. Es el estado en el que te sientes a salvo: respiras hondo, piensas con claridad, puedes estar cerca de alguien sin alarma. Desde acá se construyen los vínculos sanos. Es tu casa, aunque a veces se sienta desconocida.' },
    { type: 'p', value: 'El segundo es el acelerador: la activación. Ansiedad, urgencia, el corazón a mil, la necesidad de hacer algo YA. Es el estado de "pelea o huida". Acá es donde escribes mensajes que no deberías, donde revisas el teléfono cada dos minutos, donde el cuerpo grita que hay peligro aunque no lo haya.' },
    { type: 'p', value: 'El tercero es el freno: el colapso. Cuando la activación es demasiada y por demasiado tiempo, el cuerpo apaga todo. Te sientes vacía, desconectada, sin ganas de nada, como detrás de un vidrio. No es pereza ni falla moral: es un freno de emergencia.' },
    { type: 'quote', value: 'No te preguntes "¿qué me pasa?". Pregúntate "¿en qué estado estoy?". La respuesta lo cambia todo.' },
    { type: 'p', value: 'La meta no es vivir siempre en calma —eso no existe—. La meta es darte cuenta de en qué estado estás, y aprender el camino de regreso a la calma cuando te has ido. Ese camino se entrena. Y empieza por nombrarlo.' },
  ],
  'no-estas-loca-desregulada:c3': [
    { type: 'h', value: 'Por qué eliges lo que te lastima' },
    { type: 'p', value: 'Hay una palabra que lo explica casi todo: familiaridad. Tu cuerpo no busca lo que te hace bien. Busca lo que reconoce. Y si lo que reconoce es la intermitencia, la espera, el tener que ganarte el cariño, entonces eso es lo que vas a sentir como "química".' },
    { type: 'p', value: 'Por eso el hombre que te trata bien "no te genera nada" y el que te deja en visto "te vuelve loca". No es que uno valga menos. Es que uno activa tu sistema de la forma en que aprendió a activarse, y el otro no. Lo confundes con atracción. Es reconocimiento.' },
    { type: 'quote', value: 'No te enamoras de la persona. Te enamoras de la sensación conocida que esa persona despierta en tu cuerpo.' },
    { type: 'p', value: 'Hay incluso un detective adentro de ti, hipervigilante, que escanea a cada persona nueva buscando esa señal familiar. En cuanto la encuentra —una pizca de distancia, una inconsistencia— se enciende la alarma que tú interpretas como mariposas.' },
    { type: 'p', value: 'La buena noticia: lo familiar se puede actualizar. Cada vez que te quedas con alguien que te trata bien y toleras la incomodidad de que "no pasa nada malo", le estás enseñando a tu cuerpo un nuevo significado de la palabra amor. Es lento. Pero es posible. El cuerpo aprende.' },
  ],
  'no-estas-loca-desregulada:c4': [
    { type: 'h', value: 'Aprender a sentirte a salvo' },
    { type: 'p', value: 'No se construyen vínculos sanos si antes no se aprende a estar a salvo en el propio cuerpo. Así que vamos a terminar donde de verdad empieza todo: enseñándole a tu sistema nervioso, con pequeñas experiencias repetidas, que la calma no es peligro.' },
    { type: 'p', value: 'Una: el ancla del cuerpo. Varias veces al día, cuando NO estés en crisis, párate un momento y siente los pies en el piso, el aire entrando, un objeto en la mano. Le estás enseñando a tu sistema dónde queda la calma, para encontrar el camino cuando la necesites de verdad.' },
    { type: 'p', value: 'Dos: la exhalación larga. Cuando llega la activación, no respires más rápido: alarga la exhalación más que la inhalación. Inhala en cuatro, exhala en seis u ocho. Eso le dice físicamente a tu cuerpo, por la vía más directa que existe, que el peligro pasó.' },
    { type: 'quote', value: 'No tienes que creerte que estás a salvo. Tienes que enseñárselo a tu cuerpo, una respiración a la vez.' },
    { type: 'p', value: 'Tres: tolerar lo bueno. Cuando algo bueno pase —alguien te trata bien, hay calma, hay paz—, en vez de sabotearlo o desconfiar, quédate. Respira. Dile a tu cuerpo: "esto también es seguro". Ensanchar tu capacidad de recibir lo bueno es, literalmente, sanar.' },
    { type: 'p', value: 'No estás loca. Nunca lo estuviste. Estás aprendiendo, de adulta y a propósito, lo que de niña te tocó aprender al revés. Y el solo hecho de que estés acá ya es tu cuerpo dando el primer paso de regreso a casa.' },
    { type: 'p', value: '— Claudia' },
  ],

  // ============ ¿Por Qué Elijo Mal en el Amor? ============
  'por-que-elijo-mal:c1': [
    { type: 'quote', value: 'No tienes mal gusto. Tienes buena memoria. Tu cuerpo elige lo que ya conoce, aunque lo que conoce duela.' },
    { type: 'p', value: 'Te ha pasado: vuelves a caer. Diferente nombre, diferente cara, pero la misma historia.' },
    { type: 'p', value: 'No eliges mal porque seas tonta. Eliges lo que tu cuerpo reconoce como familiar. (Vista previa — el libro completo continúa tras la compra.)' },
  ],
  'por-que-elijo-mal:c2': [
    { type: 'h', value: 'El detective que llevas dentro' },
    { type: 'p', value: 'Adentro de ti vive un detective. No descansa nunca. Su trabajo es escanear a cada persona que conoces buscando una sola cosa: lo familiar. Y lo familiar, para ti, no siempre es lo sano. Muchas veces es justo lo contrario.' },
    { type: 'p', value: 'Por eso entras a una fiesta llena de gente disponible y amable, y de entre todos, sin saber por qué, te fijas en el único que tiene un pie afuera. No fue casualidad. Tu detective lo encontró en segundos. Reconoció una señal —una distancia, una inconsistencia, un aire de inalcanzable— y dio la alarma. Esa alarma tú la sientes como atracción.' },
    { type: 'quote', value: 'Lo que llamas "conexión instantánea" muchas veces es solo tu herida reconociendo su forma.' },
    { type: 'p', value: 'El detective no es tu enemigo. Es una parte tuya que aprendió, hace mucho, que para sobrevivir había que anticipar quién se iba a ir. Hizo su trabajo cuando eras chica. El problema es que sigue trabajando con un manual viejo, eligiendo por ti a partir de un peligro que ya no existe.' },
    { type: 'p', value: 'El primer paso no es despedir al detective. Es darte cuenta de cuándo está actuando. La próxima vez que sientas esa descarga eléctrica por alguien, no la obedezcas de inmediato. Pregúntate, con honestidad: "¿esto es deseo, o es mi alarma reconociendo lo de siempre?".' },
  ],
  'por-que-elijo-mal:c3': [
    { type: 'h', value: 'Por qué te aburre quien te conviene' },
    { type: 'p', value: 'Llega el hombre bueno. Te escribe cuando dice que va a escribir. Es claro, está disponible, te trata bien. Y tú… no sientes nada. "Le falta chispa", piensas. "Es muy intenso", "es demasiado fácil". Y lo dejas ir para volver a perseguir a alguien que te deja en visto.' },
    { type: 'p', value: 'No estás loca por hacer esto. Hay una explicación física. Si creciste con un amor impredecible, tu cuerpo aprendió a asociar la incertidumbre con la emoción del amor. La certeza, entonces, no se siente como seguridad: se siente como vacío, como aburrimiento, como falta de algo.' },
    { type: 'quote', value: 'La calma no te aburre porque sea menos. Te aburre porque tu cuerpo todavía no sabe leerla como amor.' },
    { type: 'p', value: 'Piénsalo así: si toda tu vida bebiste café cargadísimo, un té suave te va a saber a agua. No es que el té no tenga sabor. Es que tu paladar se acostumbró al extremo. Con el amor pasa igual. Lo que llamas "falta de chispa" muchas veces es, simplemente, la ausencia de ansiedad.' },
    { type: 'p', value: 'Aprender a elegir bien empieza por aguantar esa rara incomodidad de que "no pasa nada malo". Quedarte ahí. Respirar. Y darle tiempo a tu cuerpo para que descubra que esa paz que confundes con aburrimiento es, en realidad, el suelo firme que nunca tuviste.' },
  ],
  'por-que-elijo-mal:c4': [
    { type: 'h', value: 'Aprender a elegir distinto' },
    { type: 'p', value: 'Elegir distinto no es una decisión que tomas una vez. Es un músculo que entrenas cada día, en las cosas chicas, mucho antes de que aparezca la próxima persona.' },
    { type: 'p', value: 'Primero: deja de obedecer a la primera descarga. La atracción instantánea no es información sobre quién te conviene; es información sobre tu patrón. Date permiso de conocer a alguien que al principio "no te mueve tanto". Las relaciones sanas muchas veces empiezan en fuego lento, no en incendio.' },
    { type: 'p', value: 'Segundo: fíjate en cómo te sientes contigo cuando estás con esa persona, no solo en cuánto la deseas. ¿Te sientes tranquila o en alerta? ¿Más tú o menos tú? ¿Puedes respirar, o estás siempre esperando el siguiente golpe? Tu paz vale más que tus mariposas.' },
    { type: 'quote', value: 'No busques a quien te haga sentir mariposas. Busca a quien te haga sentir en paz, y deja que las mariposas aprendan a vivir en la calma.' },
    { type: 'p', value: 'Tercero: cuida tu propio sistema antes de elegir. Cuando estás regulada, descansada, acompañada por ti misma, eliges desde el deseo. Cuando estás en carencia, eliges desde el hambre. Y el hambre siempre se conforma con lo primero que aparece, aunque te haga daño.' },
    { type: 'p', value: 'No eliges mal porque algo esté roto en ti. Elegías desde una herida que no habías mirado. Ahora la estás mirando. Y todo lo que se mira, tarde o temprano, se puede elegir distinto.' },
    { type: 'p', value: '— Claudia' },
  ],

  // ============ Los Duelos Invisibles ============
  'los-duelos-invisibles:c1': [
    { type: 'quote', value: 'Hay pérdidas que no tienen funeral. Y por eso, a veces, son las que más cuesta soltar.' },
    { type: 'p', value: 'Cuando alguien muere, el mundo lo entiende. Hay un nombre para tu dolor y un ritual para acompañarlo.' },
    { type: 'p', value: 'Pero hay otros duelos que nadie ve, y por eso los lloras a escondidas. (Vista previa — el libro completo continúa tras la compra.)' },
  ],
  'los-duelos-invisibles:c2': [
    { type: 'h', value: 'El duelo por quien sigue vivo' },
    { type: 'p', value: 'El duelo más confuso es el de alguien que no se murió: simplemente ya no está para ti. El ex que ves feliz en redes. El padre que vive pero nunca estuvo. La amiga del alma que se volvió una extraña. La persona que amabas, todavía caminando por el mundo, pero ya no en tu vida.' },
    { type: 'p', value: 'Esto tiene un nombre: duelo ambiguo. Y es tan difícil precisamente porque no se cierra. No hay un punto final claro. Una parte de ti sigue esperando, fantaseando con que vuelva, con que cambie, con que un día entienda. Y mientras esa puerta queda entreabierta, el duelo no puede terminar.' },
    { type: 'quote', value: 'A veces la única forma de despedirte de alguien que sigue vivo es enterrar la versión de él que vivía en tu esperanza.' },
    { type: 'p', value: 'No estás llorando a la persona real. Estás llorando a quien necesitabas que fuera. A la relación que pudo haber sido. A la versión de él que solo existía en tu cabeza, alimentada por sus migajas y por tu esperanza.' },
    { type: 'p', value: 'Cerrar este duelo no significa odiar ni borrar. Significa aceptar, en el cuerpo y no solo en la cabeza, que esa persona no va a darte lo que esperas. No porque no lo merezcas, sino porque no puede o no quiere. Y soltar la espera es, muchas veces, soltar lo que de verdad dolía.' },
  ],
  'los-duelos-invisibles:c3': [
    { type: 'h', value: 'El duelo por la que fuiste' },
    { type: 'p', value: 'Hay un duelo del que casi nadie habla: el duelo por ti misma. Por la mujer que eras antes. Por la que aguantó de más, por la que confiaba sin miedo, por la que tenía un sueño que la vida fue apagando de a poco.' },
    { type: 'p', value: 'Crecer, sanar, cambiar… todo eso también es perder. Cada versión nueva de ti nace de la muerte de una anterior. Y aunque la nueva sea más libre, más sabia, más entera, eso no quita que duela despedir a la que ya no eres.' },
    { type: 'quote', value: 'No perdiste el tiempo siendo quien fuiste. Esa mujer te trajo hasta acá. Pero ya no la necesitas para seguir.' },
    { type: 'p', value: 'Te vas a recriminar cosas. "¿Cómo no me di cuenta antes?", "cuánto tiempo perdí". Pero una se va cuando puede, no cuando debería. El día que pudiste, te fuiste. Eso no es debilidad: es exactamente el momento en que estuviste lista.' },
    { type: 'p', value: 'Despedir a la que fuiste no es renegar de ella. Es agradecerle. Hizo lo que pudo con lo que sabía. Y dejarla ir con cariño, en vez de con vergüenza, es lo que te permite, por fin, habitar a la que eres ahora.' },
  ],
  'los-duelos-invisibles:c4': [
    { type: 'h', value: 'Darte permiso de soltar' },
    { type: 'p', value: 'Soltar no es olvidar, ni dejar de querer. Es dejar de cargar. Es bajar el peso que vienes arrastrando y descubrir que tus manos pueden volver a abrirse para otra cosa.' },
    { type: 'p', value: 'Pero soltar necesita permiso, y a un duelo invisible nadie te lo da desde afuera. Tienes que dártelo tú. Permiso para que te duela algo que "no es para tanto". Permiso para llorar a alguien que sigue vivo. Permiso para extrañar una vida que elegiste dejar.' },
    { type: 'p', value: 'Y porque estos duelos no tienen ritual, te propongo crear el tuyo. Escribe una carta de despedida a lo que perdiste y no la mandes. Quema un papel con un nombre. Guarda un objeto en una caja y ciérrala. El cuerpo necesita gestos, no solo ideas, para entender que algo terminó.' },
    { type: 'quote', value: 'Soltar no deja un vacío. Deja un espacio. Y el espacio, por primera vez, es tuyo.' },
    { type: 'p', value: 'No te prometí que se te olvidara. Te prometí que ibas a poder nombrarlo y despedirlo. Y cuando un duelo por fin se nombra y se llora, deja de mandar. Sigue ahí, más chiquito, pero ya no maneja tu vida.' },
    { type: 'p', value: 'Lo que perdiste fue real. Tu dolor también. Y tu derecho a seguir, con las manos por fin abiertas, también lo es.' },
    { type: 'p', value: '— Claudia' },
  ],

  // ============ Papá, Necesito Sanar ============
  'papa-necesito-sanar-ebook:c1': [
    { type: 'quote', value: 'La forma en que tu papá te miró fue la primera definición de cuánto vales. Y a veces hay que corregir esa definición.' },
    { type: 'p', value: 'Tu padre fue, casi siempre sin saberlo, el primer hombre de tu vida.' },
    { type: 'p', value: 'De él aprendiste, mucho antes de tener palabras, qué esperar de los hombres. (Vista previa — el libro completo continúa tras la compra.)' },
  ],
  'papa-necesito-sanar-ebook:c2': [
    { type: 'h', value: 'La herida del padre ausente' },
    { type: 'p', value: 'Hay muchas formas de ausencia, y no todas se notan desde afuera. Está el padre que se fue de verdad. Pero también el que estaba en el sillón todas las noches y aun así nunca llegó. El que pagaba las cuentas pero no preguntaba cómo estabas. El que estaba presente en el cuerpo y ausente en la mirada.' },
    { type: 'p', value: 'Para una niña, esa ausencia tibia confunde más que la ausencia total. Porque no puedes ni siquiera enojarte del todo: "estaba ahí, ¿de qué me quejo?". Y entonces te tragas la pregunta que más duele: "si estaba, ¿por qué no me veía?".' },
    { type: 'quote', value: 'No te marcó solo lo que tu padre hizo. Te marcó, sobre todo, lo que nunca pasó entre ustedes.' },
    { type: 'p', value: 'Esa hambre de ser vista por él no desaparece cuando creces. Se transforma. Se vuelve esa necesidad de que un hombre te mire de cierta manera, te elija, te lo confirme. Y cuando no lo hace, se reabre una herida que no es de hoy: es de aquella niña esperando en la ventana.' },
    { type: 'p', value: 'Nombrar esta herida no es regodearse en el pasado. Es entender, por fin, de dónde viene el vacío que tantas veces intentaste llenar con la persona equivocada. Lo que se entiende, deja de manejarte a oscuras.' },
  ],
  'papa-necesito-sanar-ebook:c3': [
    { type: 'h', value: 'Lo que buscas en ellos te faltó en él' },
    { type: 'p', value: 'Mira a los hombres que has elegido. Mira el tipo de atención que persigues, lo que te desvela, lo que te haría sentir por fin suficiente. Es muy probable que ahí, debajo, esté la forma exacta de lo que tu padre no te dio.' },
    { type: 'p', value: 'Si te faltó su presencia, quizá persigues hombres ocupados, inalcanzables, y te desvives por conseguir un poco de su tiempo. Si te faltó su aprobación, quizá eliges hombres difíciles de complacer, y conviertes su aprobación en tu misión. Repites la escena buscando, esta vez, el final que de niña no tuviste.' },
    { type: 'quote', value: 'No estás eligiendo a un hombre. Estás eligiendo una segunda oportunidad de ganar lo que ya perdiste una vez.' },
    { type: 'p', value: 'Pero hay una trampa: ese final feliz no puede llegar por esa vía. Ningún hombre puede sanar lo que tu padre dejó abierto, porque no es a él a quien le estás pidiendo. Le pides a un desconocido que repare una herida que ni siquiera es suya. Y por eso nunca alcanza.' },
    { type: 'p', value: 'La salida no es encontrar al hombre correcto que por fin te lo dé. La salida es dejar de pedirlo afuera. Reconocer que esa niña sigue esperando, y volver tú a buscarla. Darte tú la mirada, la constancia y el "eres suficiente" que entonces faltó.' },
  ],
  'papa-necesito-sanar-ebook:c4': [
    { type: 'h', value: 'Cerrar el ciclo con papá' },
    { type: 'p', value: 'Cerrar el ciclo con tu padre no depende de que él cambie, se disculpe o entienda. Eso sería volver a poner tu paz en sus manos. El cierre que de verdad sana es uno que haces tú, por dentro, esté él vivo o no, presente o ausente.' },
    { type: 'p', value: 'Empieza por dejar de esperar. Mientras esperes que un día sea el padre que necesitabas, sigues siendo la niña en la ventana. Aceptar quién es de verdad —con sus límites, su historia, su incapacidad— no es rendirte: es dejar de lastimarte con una esperanza que no se cumple.' },
    { type: 'p', value: 'Escríbele una carta que no vas a mandar. Dile todo: lo que te dolió, lo que te faltó, lo que hubieras querido escuchar. Sácalo del cuerpo donde lleva años atascado. La carta no es para él. Es para soltar lo que su silencio te dejó adentro.' },
    { type: 'quote', value: 'Perdonar no es decir que estuvo bien. Es dejar de tomar el veneno esperando que le haga daño a él.' },
    { type: 'p', value: 'Quizá llegues al perdón, quizá no. No te obligues. El perdón verdadero no se fuerza: aparece, a veces, cuando dejas de necesitar que él sea distinto. Y a veces el cierre no es perdón, sino simplemente paz: la decisión de que su historia ya no va a escribir la tuya.' },
    { type: 'p', value: 'Él te dio el comienzo. Pero quién eres a partir de ahora, eso ya es tuyo. Esa pluma, por fin, la tienes tú.' },
    { type: 'p', value: '— Claudia' },
  ],

  // ============ Mamá, Necesito Sanar ============
  'mama-necesito-sanar-ebook:c1': [
    { type: 'quote', value: 'Antes de saber tu nombre, ya sabías si eras bienvenida. Todo empezó con ella.' },
    { type: 'p', value: 'La relación con tu madre es la primera que tuviste y la que más te formó.' },
    { type: 'p', value: 'Mamá no es solo una persona: es el suelo sobre el que construiste todo lo demás. (Vista previa — el libro completo continúa tras la compra.)' },
  ],
  'mama-necesito-sanar-ebook:c2': [
    { type: 'h', value: 'La madre que pudo y la que no' },
    { type: 'p', value: 'Casi ninguna madre falla por maldad. Tu mamá te dio lo que pudo con lo que tenía: con su propia historia, sus propias heridas, su propia madre que tampoco supo. Eso es verdad y vale la pena recordarlo.' },
    { type: 'p', value: 'Pero hay otra verdad que también merece existir: lo que pudo darte no siempre fue lo que necesitabas. Y entender de dónde viene su límite no borra la huella que ese límite dejó en ti. Las dos cosas caben. No tienes que elegir entre comprenderla y honrar tu dolor.' },
    { type: 'quote', value: 'Puedes amar a tu madre y, al mismo tiempo, llorar a la madre que necesitabas y no tuviste.' },
    { type: 'p', value: 'El problema es que nos enseñaron que ser buena hija es callar. Que sentir rabia hacia mamá es traición. Y entonces te tragas el enojo, lo conviertes en culpa, y esa culpa te acompaña como una sombra sin que sepas bien por qué cargas con ella.' },
    { type: 'p', value: 'Soltar esa idea es el primer paso. Honrar a tu madre no es fingir que todo estuvo bien. Es algo mucho más valiente: mirar lo que de verdad pasó, sentir lo que sentiste, y decidir conscientemente qué de eso quieres seguir cargando y qué quieres, por fin, dejar.' },
  ],
  'mama-necesito-sanar-ebook:c3': [
    { type: 'h', value: 'Dejar de ser la mamá de tu mamá' },
    { type: 'p', value: 'En muchas casas, la niña termina cuidando a la madre. Quizá consolabas su tristeza, mediabas en sus peleas, cargabas con sus emociones porque no había quién las sostuviera. Te volviste adulta antes de tiempo para que ella pudiera seguir siendo la niña.' },
    { type: 'p', value: 'A eso se le llama parentalización, y deja una marca clara: de grande sientes que es tu trabajo hacerte cargo de todos. Cuidas, sostienes, resuelves, te anticipas a las necesidades de los demás… y nadie se anticipa nunca a las tuyas. Te agotas dando lo que a ti no te dieron.' },
    { type: 'quote', value: 'No era tu trabajo sostenerla. Era el suyo sostenerte a ti. Y que no haya pasado no fue tu falla: fue tu herida.' },
    { type: 'p', value: 'Sanar esto es devolver la carga a quien le corresponde. No con reproche, sino con un límite tranquilo. Puedes acompañar a tu madre sin volver a ser su madre. Puedes quererla sin hacerte responsable de su felicidad. Su vida emocional no es tu tarea, aunque toda la vida te hayan hecho creer que sí.' },
    { type: 'p', value: 'La primera vez que pongas un límite vas a sentir culpa: es normal, es la culpa de quien aprendió que su valor estaba en cuidar. Pero del otro lado de esa culpa hay algo que nunca te dejaron tener: una vida que sea tuya, con energía para ti.' },
  ],
  'mama-necesito-sanar-ebook:c4': [
    { type: 'h', value: 'Reparentarte' },
    { type: 'p', value: 'Hay una pregunta que lo cambia todo: si la madre que necesitabas no llegó, ¿quién te la va a dar ahora? La respuesta, aunque al principio duela, es liberadora: tú. De adulta, a propósito, puedes darte hoy el sostén que entonces faltó. A eso se le llama reparentarse.' },
    { type: 'p', value: 'No significa hacer de madre de ti misma con dureza, exigiéndote más. Significa aprender a tratarte con la ternura, la paciencia y los límites amorosos que toda niña merece. Hablarte bien cuando te equivocas. Descansar sin culpa. Pedir ayuda. Ponerte primero a veces, sin sentir que es egoísmo.' },
    { type: 'quote', value: 'Se sane o no la relación con ella por fuera, la relación con ella que llevas por dentro sí depende de ti.' },
    { type: 'p', value: 'Esto también significa cortar la herencia. Mira los patrones que pasaron de generación en generación —la autoexigencia, el silencio, la culpa, el amor condicionado— y decide, con conciencia, cuáles terminan en ti. No por venganza contra tu madre, sino por amor a quien viene después: a tus hijas, reales o simbólicas, y a la niña que todavía vive dentro de ti.' },
    { type: 'p', value: 'No puedes cambiar la madre que tuviste. Pero puedes convertirte en la presencia firme y cálida que esa niña esperó. Y el día que aprendas a sostenerte a ti misma, vas a descubrir que ese vacío tan viejo, por fin, empieza a llenarse desde adentro.' },
    { type: 'p', value: '— Claudia' },
  ],
}

// Capítulos gratuitos (vista previa). El resto exige compra.
export const ebookFreeKeys = new Set([
  'no-estas-loca-desregulada:c1',
  'por-que-elijo-mal:c1',
  'los-duelos-invisibles:c1',
  'papa-necesito-sanar-ebook:c1',
  'mama-necesito-sanar-ebook:c1',
])
