// Catálogo PÚBLICO de e-books (sin el cuerpo de los capítulos de pago).
//
// Cada libro tiene una lista de capítulos con solo su título. El primer
// capítulo es vista previa gratuita (`free: true`) y su contenido vive aquí
// abajo en `ebookPreviews` para poder leerse sin backend. El resto de
// capítulos se sirven desde /api/ebook, que verifica la compra.
//
// La portada se dibuja por CSS con `accent` + `bg` (sin imágenes externas).

export const ebooks = [
  {
    id: 'el-arte-de-soltar',
    title: 'El Arte de Soltar',
    subtitle: 'Cómo dejar ir sin romperte',
    author: 'Claudia Domínguez',
    year: 2025,
    cover: '🌙',
    accent: '#9B7EC8',
    bg: '#F0EAF8',
    price: 12,
    pages: 168,
    minutes: 210,
    tags: ['Duelo', 'Vínculos', 'Sanación'],
    description:
      'Soltar no es olvidar, ni dejar de querer. Es dejar de sostener algo que ya te suelta a ti. Un libro íntimo para cerrar ciclos con hombres, con etapas y con versiones tuyas que ya cumplieron su parte.',
    chapters: [
      { id: 'c1', title: 'Lo que no se nombra, no se suelta', free: true },
      { id: 'c2', title: 'La diferencia entre amar y aferrarse' },
      { id: 'c3', title: 'El cuerpo recuerda lo que la cabeza niega' },
      { id: 'c4', title: 'El protocolo del adiós' },
      { id: 'c5', title: 'Soltarte a ti también' },
      { id: 'c6', title: 'Carta final: lo que queda' },
    ],
  },
  {
    id: 'cartas-a-mi-nina-interior',
    title: 'Cartas a Mi Niña Interior',
    subtitle: 'Volver a casa, por dentro',
    author: 'Claudia Domínguez',
    year: 2025,
    cover: '🕊️',
    accent: '#E8A090',
    bg: '#FDF0ED',
    price: 10,
    pages: 132,
    minutes: 160,
    tags: ['Niña interior', 'Autocompasión'],
    description:
      'Doce cartas para esa niña que aprendió a portarse bien para que no la dejaran. Un libro para reparentarte: para darte hoy la calma, los límites y el sostén que entonces no hubo.',
    chapters: [
      { id: 'c1', title: 'Querida niña que aprendió a no molestar', free: true },
      { id: 'c2', title: 'Carta sobre el miedo a que se vayan' },
      { id: 'c3', title: 'Carta sobre portarse bien' },
      { id: 'c4', title: 'Carta sobre la rabia que no te dejaron tener' },
      { id: 'c5', title: 'Carta para cuando vuelvas a sentirte sola' },
    ],
  },
  {
    id: 'no-estas-rota',
    title: 'No Estás Rota',
    subtitle: 'Estás respondiendo a lo que viviste',
    author: 'Claudia Domínguez',
    year: 2024,
    cover: '🌹',
    accent: '#D4637A',
    bg: '#FBE9EE',
    price: 11,
    pages: 148,
    minutes: 185,
    tags: ['Sistema nervioso', 'Relaciones', 'Trauma'],
    description:
      'No buscas sufrir: tu cuerpo aprendió a anticipar el dolor para evitar el abandono. Este libro te explica por qué la calma te aburre y el drama te atrapa, y cómo enseñarle a tu cuerpo a sentirse a salvo.',
    chapters: [
      { id: 'c1', title: 'No es tu cabeza, es tu cuerpo', free: true },
      { id: 'c2', title: 'Los tres estados' },
      { id: 'c3', title: 'Por qué eliges lo que te lastima' },
      { id: 'c4', title: 'Aprender a sentirte a salvo' },
    ],
  },
]

// --- Contenido PÚBLICO de las vistas previas gratuitas (primer capítulo) ---
// Tipos de bloque del lector: 'p' párrafo · 'h' subtítulo · 'quote' cita ·
// 'hr' separador de escena.
export const ebookPreviews = {
  'el-arte-de-soltar:c1': [
    { type: 'quote', value: 'Soltar no es dejar de querer. Es dejar de sostener algo que ya te soltó a ti.' },
    { type: 'p', value: 'Hay una mentira preciosa que nos contamos cuando algo termina: que si todavía nos duele, es que todavía hay algo que salvar. Que el dolor es prueba de amor, y que mientras duela, no hay que soltar.' },
    { type: 'p', value: 'No es verdad. El dolor no mide cuánto valía algo. Mide cuánto te estás aferrando a algo que ya no está.' },
    { type: 'p', value: 'Escribí este libro para la mujer que sabe perfecto que tiene que soltar, y aun así abre la conversación a las 2 de la mañana para ver si él la escribió. Para la que borró el número pero se lo sabe de memoria. Para la que dice "ya lo superé" con una seguridad que se cae sola en cuanto suena una canción.' },
    { type: 'p', value: 'No vengo a decirte que lo superes rápido. No creo en eso. Vengo a explicarte por qué se te hace tan difícil, porque cuando entiendes el mecanismo, dejas de pelear contigo misma. Y soltar deja de ser un acto de fuerza para convertirse en algo que, por fin, puede pasar.' },
    { type: 'h', value: 'Lo que no se nombra, se repite' },
    { type: 'p', value: 'Lo primero que tenemos que hacer es lo más incómodo: nombrar lo que de verdad estás soltando. Porque casi nunca es la persona. La persona es el envase.' },
    { type: 'p', value: 'Cuando un vínculo se va, no lloras solo a quien se fue. Lloras a la mujer que eras con esa persona. Lloras la versión del futuro que ya habías imaginado. Lloras la esperanza de que esta vez sí, de que con este sí iba a ser distinto. Y lloras, casi siempre, algo mucho más viejo: la primera vez que alguien importante se fue y nadie te explicó por qué.' },
    { type: 'p', value: 'Por eso un duelo amoroso puede sentirse desproporcionado. No estás reaccionando solo al presente. Estás reaccionando a todas las veces anteriores, apiladas una encima de otra, que este final acaba de despertar.' },
    { type: 'quote', value: 'No te duele solo quien se fue. Te duele todo lo que su salida vino a recordarte.' },
    { type: 'p', value: 'Mientras no nombres eso, vas a creer que el problema es esta persona en concreto. Y vas a buscar otra que se le parezca para terminar de cerrar lo que quedó abierto. Así se repite el patrón: no porque seas tonta, sino porque hay una herida buscando, con una lealtad feroz, el lugar exacto donde se hizo.' },
    { type: 'hr' },
    { type: 'h', value: 'Un ejercicio para empezar' },
    { type: 'p', value: 'Antes de seguir, quiero que hagas algo. Toma papel, o las notas del teléfono, y completa esta frase sin pensarla demasiado: "En realidad, lo que más me cuesta soltar no es a él, es…".' },
    { type: 'p', value: 'No corrijas lo que salga. No lo hagas bonito. Lo que aparezca primero suele ser lo más cierto. Guárdalo. Vamos a volver a esa frase al final del libro, y no vas a creer lo distinto que la vas a leer.' },
    { type: 'p', value: 'Si llegaste hasta acá, ya empezó. Soltar no se decide de golpe; se aprende de a poco, una verdad incómoda a la vez. Empecemos.' },
    { type: 'p', value: '— Claudia' },
  ],
  'cartas-a-mi-nina-interior:c1': [
    { type: 'quote', value: 'No eras difícil. Eras una niña pidiendo lo que toda niña necesita.' },
    { type: 'p', value: 'Querida niña que aprendió a no molestar:' },
    { type: 'p', value: 'Te escribo desde el futuro, desde la mujer en la que te convertiste. Quiero que sepas, antes que nada, que lo lograste: seguimos aquí. Y también quiero pedirte perdón, porque durante muchos años te traté igual que te trataron entonces. Te exigí. Te apuré. Te dije que no era para tanto.' },
    { type: 'p', value: 'Hoy entiendo algo que entonces nadie entendió. Que cuando te quedabas callada no era porque estuvieras bien. Era porque aprendiste, muy pronto, que tu calma le hacía la vida más fácil a los demás. Y que ser fácil de querer era la forma más segura de que no te dejaran.' },
    { type: 'h', value: 'Lo que hiciste para sobrevivir' },
    { type: 'p', value: 'Te volviste experta en leer la cara de los adultos antes de que hablaran. Sabías por el sonido de la puerta qué clase de noche venía. Aprendiste a adelantarte al enojo, a poner la mesa sin que te lo pidieran, a sacar buenas notas para llenar un silencio que no era tuyo.' },
    { type: 'p', value: 'Nadie te dijo que eso tenía un nombre. Se llama hipervigilancia, y no era un defecto: era inteligencia. Tu cuerpo hizo exactamente lo que tenía que hacer para mantenerte a salvo en el lugar donde te tocó crecer.' },
    { type: 'quote', value: 'Lo que de niña te salvó, de adulta te agota. Y soltarlo no es traicionarte: es graduarte.' },
    { type: 'p', value: 'El problema es que esa niña tan atenta, tan buena, tan poco pedigüeña, creció. Y se convirtió en una mujer que todavía cree que el amor se gana portándose bien. Que pedir es arriesgado. Que si muestra demasiada necesidad, la van a dejar.' },
    { type: 'hr' },
    { type: 'h', value: 'Lo que vine a decirte' },
    { type: 'p', value: 'Vine a decirte que ya no tienes que ganarte nada. Que puedes ocupar espacio. Que puedes tener hambre de cosas y decirlo en voz alta. Que el enojo que te tragaste durante años no te hace mala: te hace humana, y tienes derecho a sentirlo.' },
    { type: 'p', value: 'En las cartas que siguen voy a volver, una a una, a las cosas que entonces te tocó cargar sola. No para revivir el dolor, sino para que esta vez no estés sola mientras las miras. Esta vez estoy yo. Y no me voy a ir.' },
    { type: 'p', value: 'Con todo el amor que entonces te faltó,' },
    { type: 'p', value: '— Tú, ya grande' },
  ],
  'no-estas-rota:c1': [
    { type: 'quote', value: 'No estás buscando sufrir. Tu cuerpo está intentando protegerte de la única forma que aprendió.' },
    { type: 'p', value: 'Hay algo que nunca te enseñaron: que tu sistema nervioso también elige por ti. Y que si se moldeó en un entorno donde tus emociones eran "demasiado", donde no hubo quién te sostuviera ni te calmara, entonces hoy es muy probable que confundas intensidad con amor, inestabilidad con atracción y abandono con costumbre.' },
    { type: 'p', value: 'No es que estés rota. Es que tu cuerpo aprendió a anticipar el dolor para evitar el abandono. Y ese cuerpo —no tu cabeza, no tus intenciones, no tu espiritualidad— es el que responde primero cada vez que abres una app, esperas un mensaje o sientes mariposas por alguien que ni siquiera sabe lo que quiere.' },
    { type: 'h', value: 'Por qué la calma te aburre' },
    { type: 'p', value: 'Si creciste entre tensión y reconciliación, entre el portazo y el abrazo, tu cuerpo aprendió que el amor se siente así: como una montaña rusa. La calma, entonces, no se registra como paz. Se registra como ausencia, como aviso de que algo va a pasar, como ese silencio incómodo antes de la tormenta.' },
    { type: 'p', value: 'Por eso el hombre estable te aburre y el inconsistente te enciende. No es que tengas mal gusto. Es que tu sistema nervioso está buscando lo conocido, y para ti lo conocido es la incertidumbre. La paz se siente extranjera. Y el cuerpo desconfía de lo que no reconoce.' },
    { type: 'quote', value: 'No te atrae el drama porque te guste sufrir. Te atrae porque tu cuerpo lo confunde con casa.' },
    { type: 'p', value: 'Date cuenta de lo que esto cambia. El problema nunca fue tu criterio. El problema es que estás eligiendo con un mapa que se dibujó cuando eras muy chica, en un territorio que ya no existe.' },
    { type: 'hr' },
    { type: 'h', value: 'Lo que este libro sí va a hacer' },
    { type: 'p', value: 'Este libro no te va a enseñar a pensar distinto. Pensar distinto no alcanza: lo sabes, porque entiendes perfecto tus patrones y aun así los repites. Tu sabiduría está en la cabeza, pero tu programación está en el cuerpo.' },
    { type: 'p', value: 'Por eso vamos a trabajar el cuerpo. Vamos a enseñarle, despacio, que la calma no es peligro. Que puedes estar a salvo aunque nadie esté a punto de irse. Que la paz no es aburrimiento: es el suelo firme sobre el que, por fin, se puede construir algo.' },
    { type: 'p', value: 'No se construyen vínculos sanos si antes no se aprende a estar a salvo en el propio cuerpo. Empecemos por ahí.' },
    { type: 'p', value: '— Claudia' },
  ],
}

export function getEbook(id) {
  return ebooks.find((b) => b.id === id) || null
}

export function ebookChapterIndex(book, chapterId) {
  return book ? book.chapters.findIndex((c) => c.id === chapterId) : -1
}
