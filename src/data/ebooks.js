// Catálogo PÚBLICO de e-books (sin el cuerpo de los capítulos de pago).
//
// Cada libro tiene una lista de capítulos con solo su título. El primer
// capítulo es vista previa gratuita (`free: true`) y su contenido vive aquí
// abajo en `ebookPreviews` para poder leerse sin backend. El resto de
// capítulos se sirven desde /api/ebook, que verifica la compra.

export const ebooks = [
  {
    id: 'no-estas-loca-desregulada',
    title: 'No Estás Loca, Estás Desregulada',
    subtitle: 'Regula tu sistema nervioso',
    author: 'Claudia Domínguez',
    year: 2025,
    cover: '🌹',
    accent: '#C9536A',
    bg: '#FBE7E6',
    image: '/ebooks/no-estas-loca-desregulada.webp',
    price: 11,
    pages: 148,
    minutes: 185,
    tags: ['Sistema nervioso', 'Emociones', 'Trauma'],
    description:
      'No buscas sufrir: tu cuerpo aprendió a anticipar el dolor para evitar el abandono. Este libro te explica por qué la calma te aburre y el drama te atrapa, y cómo enseñarle a tu cuerpo a sentirse a salvo.',
    chapters: [
      { id: 'c1', title: 'No es tu cabeza, es tu cuerpo', free: true },
      { id: 'c2', title: 'Los tres estados' },
      { id: 'c3', title: 'Por qué eliges lo que te lastima' },
      { id: 'c4', title: 'Aprender a sentirte a salvo' },
    ],
  },
  {
    id: 'por-que-elijo-mal',
    title: '¿Por Qué Elijo Mal en el Amor?',
    subtitle: 'Entiende tu patrón de elección',
    author: 'Claudia Domínguez',
    year: 2025,
    cover: '💙',
    accent: '#4E8597',
    bg: '#E6F0F3',
    image: '/ebooks/por-que-elijo-mal.webp',
    price: 11,
    pages: 136,
    minutes: 170,
    tags: ['Relaciones', 'Patrones', 'Autoconocimiento'],
    description:
      'No eliges mal porque tengas mal gusto. Eliges lo que tu cuerpo reconoce. Un libro para entender por qué te enganchas con quien no te elige y cómo empezar a elegir desde el deseo y no desde la herida.',
    chapters: [
      { id: 'c1', title: 'No eliges mal: eliges lo conocido', free: true },
      { id: 'c2', title: 'El detective que llevas dentro' },
      { id: 'c3', title: 'Por qué te aburre quien te conviene' },
      { id: 'c4', title: 'Aprender a elegir distinto' },
    ],
  },
  {
    id: 'los-duelos-invisibles',
    title: 'Los Duelos Invisibles',
    subtitle: 'Llorar lo que nadie ve',
    author: 'Claudia Domínguez',
    year: 2025,
    cover: '🌙',
    accent: '#7A5BA8',
    bg: '#EDE6F5',
    image: '/ebooks/los-duelos-invisibles.webp',
    price: 12,
    pages: 158,
    minutes: 200,
    tags: ['Duelo', 'Pérdida', 'Sanación'],
    description:
      'Hay pérdidas que nadie te deja llorar: la relación que terminó sin morir nadie, la versión tuya que ya no eres, el futuro que imaginaste. Un libro para nombrar y cerrar los duelos que el mundo no reconoce.',
    chapters: [
      { id: 'c1', title: 'Los duelos que nadie te deja llorar', free: true },
      { id: 'c2', title: 'El duelo por quien sigue vivo' },
      { id: 'c3', title: 'El duelo por la que fuiste' },
      { id: 'c4', title: 'Darte permiso de soltar' },
    ],
  },
  {
    id: 'papa-necesito-sanar-ebook',
    title: 'Papá, Necesito Sanar',
    subtitle: 'Sana el vínculo con papá',
    author: 'Claudia Domínguez',
    year: 2025,
    cover: '🕊️',
    accent: '#D77A5A',
    bg: '#FCE6DD',
    image: '/ebooks/papa-necesito-sanar.webp',
    price: 11,
    pages: 140,
    minutes: 175,
    tags: ['Vínculo paterno', 'Niña interior', 'Sanación'],
    description:
      'La forma en que tu padre te miró (o no te miró) marcó cómo esperas que te traten los hombres. Un proceso para entender su ausencia o su presencia y liberarte de los patrones que ese vínculo dejó en ti.',
    chapters: [
      { id: 'c1', title: 'La primera forma del amor', free: true },
      { id: 'c2', title: 'La herida del padre ausente' },
      { id: 'c3', title: 'Lo que buscas en ellos te faltó en él' },
      { id: 'c4', title: 'Cerrar el ciclo con papá' },
    ],
  },
  {
    id: 'mama-necesito-sanar-ebook',
    title: 'Mamá, Necesito Sanar',
    subtitle: 'Sana el vínculo con mamá',
    author: 'Claudia Domínguez',
    year: 2025,
    cover: '🌷',
    accent: '#D17389',
    bg: '#FBE2E6',
    image: '/ebooks/mama-necesito-sanar.webp',
    price: 11,
    pages: 144,
    minutes: 180,
    tags: ['Vínculo materno', 'Niña interior', 'Sanación'],
    description:
      'Todo empezó con ella: tu primera idea de quién eres y de cuánto vales. Un libro íntimo para sanar la relación con tu madre, liberar patrones heredados y dejar de cargar lo que nunca fue tuyo.',
    chapters: [
      { id: 'c1', title: 'Todo empezó con ella', free: true },
      { id: 'c2', title: 'La madre que pudo y la que no' },
      { id: 'c3', title: 'Dejar de ser la mamá de tu mamá' },
      { id: 'c4', title: 'Reparentarte' },
    ],
  },
]

// --- Contenido PÚBLICO de las vistas previas gratuitas (primer capítulo) ---
// Tipos de bloque del lector: 'p' párrafo · 'h' subtítulo · 'quote' cita ·
// 'hr' separador de escena.
export const ebookPreviews = {
  'no-estas-loca-desregulada:c1': [
    { type: 'quote', value: 'No estás buscando sufrir. Tu cuerpo está intentando protegerte de la única forma que aprendió.' },
    { type: 'p', value: 'Hay algo que nunca te enseñaron: que tu sistema nervioso también elige por ti. Y que si se moldeó en un entorno donde tus emociones eran "demasiado", donde no hubo quién te sostuviera ni te calmara, entonces hoy es muy probable que confundas intensidad con amor, inestabilidad con atracción y abandono con costumbre.' },
    { type: 'p', value: 'No es que estés loca. No es que estés rota. Es que tu cuerpo aprendió a anticipar el dolor para evitar el abandono. Y ese cuerpo —no tu cabeza, no tus intenciones, no tu espiritualidad— es el que responde primero cada vez que abres una app, esperas un mensaje o sientes mariposas por alguien que ni siquiera sabe lo que quiere.' },
    { type: 'h', value: 'Por qué la calma te aburre' },
    { type: 'p', value: 'Si creciste entre tensión y reconciliación, entre el portazo y el abrazo, tu cuerpo aprendió que el amor se siente así: como una montaña rusa. La calma, entonces, no se registra como paz. Se registra como ausencia, como aviso de que algo va a pasar, como ese silencio incómodo antes de la tormenta.' },
    { type: 'p', value: 'Por eso el hombre estable te aburre y el inconsistente te enciende. No es que tengas mal gusto. Es que tu sistema nervioso está buscando lo conocido, y para ti lo conocido es la incertidumbre. La paz se siente extranjera. Y el cuerpo desconfía de lo que no reconoce.' },
    { type: 'quote', value: 'No te atrae el drama porque te guste sufrir. Te atrae porque tu cuerpo lo confunde con casa.' },
    { type: 'p', value: 'Date cuenta de lo que esto cambia. El problema nunca fue tu criterio. El problema es que estás eligiendo con un mapa que se dibujó cuando eras muy chica, en un territorio que ya no existe.' },
    { type: 'hr' },
    { type: 'h', value: 'Lo que este libro sí va a hacer' },
    { type: 'p', value: 'Este libro no te va a enseñar a pensar distinto. Pensar distinto no alcanza: lo sabes, porque entiendes perfecto tus patrones y aun así los repites. Tu sabiduría está en la cabeza, pero tu programación está en el cuerpo.' },
    { type: 'p', value: 'Por eso vamos a trabajar el cuerpo. Vamos a enseñarle, despacio, que la calma no es peligro. Que puedes estar a salvo aunque nadie esté a punto de irse. No se construyen vínculos sanos si antes no se aprende a estar a salvo en el propio cuerpo. Empecemos por ahí.' },
    { type: 'p', value: '— Claudia' },
  ],
  'por-que-elijo-mal:c1': [
    { type: 'quote', value: 'No tienes mal gusto. Tienes buena memoria. Tu cuerpo elige lo que ya conoce, aunque lo que conoce duela.' },
    { type: 'p', value: 'Te ha pasado: vuelves a caer. Diferente nombre, diferente cara, pero la misma historia. El mismo nudo en el estómago, la misma espera, la misma sensación de estar dando más de lo que recibes. Y la misma pregunta al final, mirando el techo: "¿por qué siempre elijo mal?".' },
    { type: 'p', value: 'Quiero empezar quitándote algo de encima: no eliges mal porque seas tonta, ni porque te falte amor propio, ni porque "te gusten los problemas". Eliges lo que tu cuerpo reconoce como familiar. Y si lo familiar para ti fue tener que ganarte el cariño, esperar, portarte bien para que no se fueran, entonces eso es exactamente lo que vas a sentir como química.' },
    { type: 'h', value: 'La química no es una brújula' },
    { type: 'p', value: 'Creemos que la atracción nos dice la verdad. Que si alguien nos mueve el piso, es porque vale la pena. Pero la atracción no mide la calidad de una persona: mide cuánto se parece a tu patrón. Por eso el que te trata bien "no te genera nada" y el que te deja en visto "te vuelve loca".' },
    { type: 'quote', value: 'No te enamoras de la persona. Te enamoras de la sensación conocida que esa persona despierta en tu cuerpo.' },
    { type: 'p', value: 'Esa descarga que sientes con el inconsistente no es destino. Es tu sistema de alarma encendiéndose, reconociendo un terreno que ya pisaste. Tu cuerpo confunde activación con amor. Y mientras no lo veas, vas a seguir persiguiendo la descarga, creyendo que persigues el amor.' },
    { type: 'hr' },
    { type: 'h', value: 'Lo que vamos a hacer juntas' },
    { type: 'p', value: 'En este libro no vas a aprender trucos de citas ni señales de alerta para "detectar al malo". Eso ya lo sabes, y aun así caes. Lo que vamos a hacer es ir más abajo: a entender de dónde viene tu patrón, cómo se grabó y, sobre todo, cómo se actualiza.' },
    { type: 'p', value: 'Porque la buena noticia es esta: lo aprendido se puede reaprender. No con fuerza de voluntad, sino enseñándole a tu cuerpo, de a poco, que la calma también puede ser amor. Que lo bueno no tiene por qué aburrir. Que mereces a alguien que se quede sin que tengas que rogar.' },
    { type: 'p', value: 'Si estás cansada de repetir, este es el lugar. Empecemos.' },
    { type: 'p', value: '— Claudia' },
  ],
  'los-duelos-invisibles:c1': [
    { type: 'quote', value: 'Hay pérdidas que no tienen funeral. Y por eso, a veces, son las que más cuesta soltar.' },
    { type: 'p', value: 'Cuando alguien muere, el mundo lo entiende. Te abrazan, te traen comida, te dan permiso de no estar bien. Hay un nombre para tu dolor y un ritual para acompañarlo.' },
    { type: 'p', value: 'Pero hay otros duelos que nadie ve. La relación que terminó sin que muriera nadie. La amistad que se enfrió de a poco. El trabajo, la ciudad, la etapa, el cuerpo de antes. La versión tuya que dejaste atrás. El futuro que ya habías imaginado y que no va a pasar. Esos duelos no tienen funeral, no tienen flores, no tienen quién te diga "lo siento mucho". Y por eso los lloras a escondidas, casi pidiendo perdón por sentirlos.' },
    { type: 'h', value: 'Lo que no se nombra, no se cierra' },
    { type: 'p', value: 'A un duelo invisible le pasa algo cruel: como nadie lo reconoce, tú tampoco te das permiso de vivirlo. Te dices "no es para tanto", "debería haberlo superado ya", "ni siquiera murió nadie". Y entonces el duelo no se va: se queda atascado, disfrazado de ansiedad, de cansancio, de una tristeza de fondo que no sabes de dónde sale.' },
    { type: 'quote', value: 'Un duelo no necesita permiso del mundo para existir. Necesita tu permiso para cerrarse.' },
    { type: 'p', value: 'El dolor que no se nombra no desaparece. Solo cambia de forma. Por eso el primer acto de este libro es el más importante y el más simple: ponerle nombre a lo que perdiste. No para revivirlo, sino para por fin poder despedirte.' },
    { type: 'hr' },
    { type: 'h', value: 'Lo que vine a decirte' },
    { type: 'p', value: 'Vine a decirte que lo que sientes es válido aunque nadie más lo entienda. Que no tienes que justificar tu tristeza ni medirla contra la de otros. Que se puede llorar a alguien que sigue vivo, a una versión tuya, a una vida que no fue.' },
    { type: 'p', value: 'Y vine a decirte algo más: que soltar no es olvidar, ni dejar de querer. Es dejar de cargar. En las páginas que siguen vamos a mirar, una a una, esas pérdidas que el mundo no te dejó llorar. Esta vez no vas a estar sola mirándolas.' },
    { type: 'p', value: '— Claudia' },
  ],
  'papa-necesito-sanar-ebook:c1': [
    { type: 'quote', value: 'La forma en que tu papá te miró fue la primera definición de cuánto vales. Y a veces hay que corregir esa definición.' },
    { type: 'p', value: 'Tu padre fue, casi siempre sin saberlo, el primer hombre de tu vida. La primera forma del amor masculino que conociste. De él aprendiste, mucho antes de tener palabras, qué esperar de los hombres: si se quedan o se van, si te eligen o te ignoran, si tu presencia les importa o les estorba.' },
    { type: 'p', value: 'No importa si fue cariñoso, ausente, estricto, distante o intermitente. Lo que él hizo o dejó de hacer se convirtió en tu idea de lo normal. Y lo normal, aunque duela, es lo que de adulta vas a buscar sin darte cuenta.' },
    { type: 'h', value: 'La huella que no se ve' },
    { type: 'p', value: 'Si tu papá estuvo pero no estuvo —presente en la casa, ausente en la mirada—, quizá hoy te conformas con hombres que te dan lo justo. Si se fue, quizá vives con el miedo de que todos terminen yéndose. Si tenías que ganarte su atención sacando buenas notas o no dando problemas, quizá hoy crees que el amor se gana siendo perfecta.' },
    { type: 'quote', value: 'No buscas su amor en otros hombres por debilidad. Lo buscas porque quedó una pregunta sin responder.' },
    { type: 'p', value: 'Esa pregunta —"¿soy suficiente para que un hombre se quede?"— no se responde con otro hombre. Se responde adentro. Y mientras no la cierres, vas a seguir poniéndola, sin querer, sobre los hombros de cada pareja que tengas.' },
    { type: 'hr' },
    { type: 'h', value: 'Esto no es contra tu papá' },
    { type: 'p', value: 'Sanar el vínculo con tu padre no es culparlo ni odiarlo. Tampoco es obligarte a perdonar antes de tiempo. Es algo más honesto: mirar de frente lo que pasó, nombrar lo que te faltó, sentir lo que no te dejaron sentir, y recuperar el poder que dejaste en sus manos cuando eras una niña.' },
    { type: 'p', value: 'Él hizo lo que pudo con lo que tenía. Eso puede ser verdad al mismo tiempo que esto otro: lo que pudo no te alcanzó. Las dos cosas caben. Y poder sostener las dos es justo donde empieza la sanación.' },
    { type: 'p', value: 'Vamos a hacerlo despacio, con cuidado. Empecemos.' },
    { type: 'p', value: '— Claudia' },
  ],
  'mama-necesito-sanar-ebook:c1': [
    { type: 'quote', value: 'Antes de saber tu nombre, ya sabías si eras bienvenida. Todo empezó con ella.' },
    { type: 'p', value: 'La relación con tu madre es la primera que tuviste y la que más te formó. Antes de hablar, antes de caminar, antes de tener un solo recuerdo, su mirada ya te estaba diciendo quién eras: si eras un alivio o una carga, si tus necesidades eran un derecho o una molestia, si el mundo era un lugar seguro o uno donde había que cuidarse.' },
    { type: 'p', value: 'Por eso este vínculo es tan profundo y tan difícil. Mamá no es solo una persona: es el suelo sobre el que construiste todo lo demás. Y cuando ese suelo tuvo grietas, una aprende a caminar con miedo a caer, aunque ya no se acuerde por qué.' },
    { type: 'h', value: 'El amor más complicado' },
    { type: 'p', value: 'Con mamá conviven cosas que parecen imposibles de sentir a la vez: amor y rabia, gratitud y dolor, ganas de abrazarla y ganas de salir corriendo. Te han hecho creer que sentir enojo hacia tu madre te convierte en mala hija. No es verdad. El enojo no cancela el amor: a veces es la prueba de que algo importante quedó sin resolver.' },
    { type: 'quote', value: 'Honrar a tu madre no es callar lo que te dolió. Es dejar de repetirlo en tu propia vida.' },
    { type: 'p', value: 'Quizá tu mamá no pudo darte lo que necesitabas porque a ella tampoco se lo dieron. Eso explica, pero no borra. Puedes entender su historia y, aun así, darte permiso de llorar la tuya. Comprender de dónde viene su límite no te obliga a fingir que no te marcó.' },
    { type: 'hr' },
    { type: 'h', value: 'Lo que vamos a sanar' },
    { type: 'p', value: 'En este libro no vamos a juzgar a tu madre ni a obligarte a reconciliarte con ella. Vamos a hacer algo más tuyo: separar lo que es de ella de lo que es tuyo. Soltar la culpa que no te corresponde. Dejar de cargar emociones que heredaste sin pedirlas. Y aprender a darte hoy —de adulta, a propósito— el sostén que entonces faltó.' },
    { type: 'p', value: 'Se sane o no la relación con ella por fuera, lo que sí podemos sanar es la relación con ella que llevas por dentro. Esa sí depende de ti. Empecemos.' },
    { type: 'p', value: '— Claudia' },
  ],
}

export function getEbook(id) {
  return ebooks.find((b) => b.id === id) || null
}

export function ebookChapterIndex(book, chapterId) {
  return book ? book.chapters.findIndex((c) => c.id === chapterId) : -1
}
