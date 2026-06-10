// SOLO SERVIDOR. Cuerpo de los capítulos de los e-books.
//
// Se entrega vía /api/ebook SOLO tras comprobar la compra (o vista previa
// gratuita). El primer capítulo de cada libro es gratis y vive también en el
// cliente (src/data/ebooks.js → ebookPreviews); aquí lo repetimos para que el
// endpoint pueda servirlo, y añadimos los capítulos de pago.

export const ebookContent = {
  // ---------- El Arte de Soltar ----------
  'el-arte-de-soltar:c1': [
    { type: 'quote', value: 'Soltar no es dejar de querer. Es dejar de sostener algo que ya te soltó a ti.' },
    { type: 'p', value: 'Hay una mentira preciosa que nos contamos cuando algo termina: que si todavía nos duele, es que todavía hay algo que salvar.' },
    { type: 'p', value: 'No es verdad. El dolor no mide cuánto valía algo. Mide cuánto te estás aferrando a algo que ya no está.' },
    { type: 'p', value: 'Cuando entiendes el mecanismo, dejas de pelear contigo misma. Y soltar deja de ser un acto de fuerza para convertirse en algo que, por fin, puede pasar. (Vista previa — el libro completo continúa tras la compra.)' },
  ],
  'el-arte-de-soltar:c2': [
    { type: 'quote', value: 'Amar es desear el bien del otro. Aferrarse es necesitarlo para calmar el propio miedo.' },
    { type: 'p', value: 'Confundimos las dos cosas todo el tiempo, porque por fuera se parecen: las dos piensan en él a todas horas. Pero por dentro son opuestas. El amor te expande; el aferramiento te encoge.' },
    { type: 'p', value: 'Una pista para distinguirlas: pregúntate qué sientes cuando imaginas que a él le va increíble… sin ti. Si sientes una alegría tranquila, era amor. Si sientes un vacío en el estómago, una urgencia, unas ganas de escribirle, eso no era amor. Era miedo vestido de amor.' },
    { type: 'h', value: 'La trampa de la intermitencia' },
    { type: 'p', value: 'Lo que más nos aferra no es el cariño constante. Es la intermitencia: el cariño que viene y se va sin previo aviso. Tu cerebro, ante una recompensa impredecible, no se calma: se obsesiona. Es el mismo mecanismo de las máquinas tragamonedas.' },
    { type: 'p', value: 'Por eso te enganchas más con quien te da migajas que con quien te da un banquete. No es amor más grande. Es un sistema de recompensa secuestrado. Y reconocerlo es el primer paso para recuperarlo.' },
    { type: 'quote', value: 'No extrañas su amor. Extrañas la esperanza de que volviera a aparecer.' },
    { type: 'p', value: 'Aferrarse es, en el fondo, una apuesta: "si aguanto un poco más, esta vez sí me va a elegir". Soltar es bajarse de esa mesa antes de quedarte sin nada. No porque no te importe. Porque por fin te importas tú.' },
  ],
  'el-arte-de-soltar:c3': [
    { type: 'quote', value: 'Puedes decidir soltar con la cabeza y seguir buscándolo con el cuerpo. No estás fallando: vas a dos velocidades.' },
    { type: 'p', value: 'El duelo no es solo emocional. Es físico. Tu cuerpo se acostumbró a una dosis diaria de esa persona: sus mensajes, su olor, su voz, la forma en que tu sistema se activaba al verlo. Cuando eso se corta de golpe, lo que sientes se parece mucho a una abstinencia.' },
    { type: 'p', value: 'Por eso la primera semana no se piensa, se sobrevive. No es momento de tomar decisiones ni de releer conversaciones. Es momento de cuidar al cuerpo como cuidarías a alguien con fiebre: agua, sueño, gente que te quiera cerca, y mucha, mucha paciencia.' },
    { type: 'h', value: 'Lo que el cuerpo necesita' },
    { type: 'p', value: 'Movimiento, aunque sea caminar. El cuerpo necesita descargar la activación que no encuentra salida. Contacto: un abrazo largo baja el cortisol más que mil pensamientos positivos. Y rutina: horarios fijos le devuelven al sistema nervioso la sensación de que el mundo, aunque dolido, sigue siendo predecible.' },
    { type: 'quote', value: 'No le pidas a tu cabeza que arregle algo que vive en tu cuerpo. Atiende el cuerpo, y la cabeza se aquieta sola.' },
    { type: 'p', value: 'La urgencia de escribirle no es una señal de que debas hacerlo. Es una ola. Y como toda ola, sube, llega a su punto más alto, y baja. Si no la alimentas, en veinte minutos es otra cosa. Tu único trabajo en ese pico es no actuar. Solo respirar y esperar a que baje.' },
  ],
  'el-arte-de-soltar:c4': [
    { type: 'h', value: 'El protocolo del adiós' },
    { type: 'p', value: 'Soltar necesita estructura, no solo buenas intenciones. Acá tienes un protocolo concreto. No es mágico ni rápido, pero funciona si lo respetas.' },
    { type: 'p', value: 'Uno: contacto cero, de verdad. No es un castigo para él; es una unidad de cuidados intensivos para ti. Cada vez que revisas su perfil, reinicias el reloj de tu recuperación. Silencia, archiva, bloquea si hace falta. No tienes que explicarle a nadie por qué te cuidas.' },
    { type: 'p', value: 'Dos: la caja. Reúne en un solo lugar (físico o digital) todo lo que te lo recuerda y guárdalo fuera de tu vista. No lo tiras —todavía—. Solo lo sacas del medio. Lo que no ves a diario, deja de activarte a diario.' },
    { type: 'p', value: 'Tres: la carta que no se envía. Escríbele todo lo que no dijiste. Sin filtro. Y no la mandes. La carta no es para él; es para sacarte de adentro lo que se quedó atascado. Cuando termines, decides: la guardas, la quemas, la rompes. El acto de cerrarla es parte del cierre.' },
    { type: 'quote', value: 'El cierre no te lo da él pidiéndote perdón. Te lo das tú dejando de esperarlo.' },
    { type: 'p', value: 'Cuatro: llena el hueco a propósito. Un vínculo deja un espacio enorme de tiempo y atención. Si no lo llenas tú con cosas que elijas, lo va a llenar la nostalgia. Retoma algo que dejaste por estar pendiente de él. Recupéralo. Ese espacio era tuyo antes que suyo.' },
  ],
  'el-arte-de-soltar:c5': [
    { type: 'quote', value: 'A veces lo más difícil de soltar no es a la otra persona. Es a la mujer que fuiste con ella.' },
    { type: 'p', value: 'Hay un duelo del que casi nadie habla: el duelo por ti misma. Por la versión tuya que aguantó de más, que se hizo pequeña, que confundió su intuición con paranoia para no tener que irse.' },
    { type: 'p', value: 'Soltar a esa mujer no es renegar de ella. Es agradecerle. Hizo lo que pudo con lo que sabía. Te trajo hasta acá. Pero ya no la necesitas, y quedarte enojada con ella es otra forma de no soltar.' },
    { type: 'h', value: 'Perdonarte la espera' },
    { type: 'p', value: 'Te vas a recriminar el tiempo perdido. "¿Cómo no me di cuenta antes?". Pero no se podía antes. Una se va cuando puede, no cuando debería. El día que pudiste, te fuiste. Eso no es debilidad: es exactamente el momento en que estuviste lista.' },
    { type: 'quote', value: 'No perdiste el tiempo. Aprendiste, con el cuerpo, lo que ningún consejo te habría enseñado.' },
    { type: 'p', value: 'Soltarte a ti también significa dejar de castigarte por haber querido a alguien que no supo quedarse. Querer no fue el error. El error sería seguir creyendo que no mereces a alguien que sí sepa.' },
  ],
  'el-arte-de-soltar:c6': [
    { type: 'h', value: 'Carta final: lo que queda' },
    { type: 'p', value: '¿Te acuerdas de la frase que escribiste al principio? "En realidad, lo que más me cuesta soltar no es a él, es…". Búscala. Léela otra vez.' },
    { type: 'p', value: 'Lo más probable es que ahí no hayas escrito su nombre. Hayas escrito una sensación: la compañía, la esperanza, no volver a empezar, la certeza de que alguien estaba. Eso era lo que de verdad estabas soltando. Y eso —no él— es lo que ahora vas a aprender a darte de otras maneras.' },
    { type: 'quote', value: 'Soltar no deja un vacío. Deja un espacio. Y el espacio, por primera vez en mucho tiempo, es tuyo.' },
    { type: 'p', value: 'No te prometí que se te olvidara. Te prometí que ibas a entender. Y cuando entiendes por qué dolía tanto, el dolor deja de mandar. Sigue ahí, más chiquito, pero ya no maneja tu vida.' },
    { type: 'p', value: 'Vas a estar bien. No mañana, no de golpe. Pero un día cualquiera vas a sonar su canción y, en vez de quebrarte, vas a seguir caminando. Y vas a saber, sin que nadie te lo diga, que ya lo soltaste.' },
    { type: 'p', value: 'Gracias por llegar hasta el final. Eso ya dice quién eres.' },
    { type: 'p', value: '— Claudia' },
  ],

  // ---------- Cartas a Mi Niña Interior ----------
  'cartas-a-mi-nina-interior:c1': [
    { type: 'quote', value: 'No eras difícil. Eras una niña pidiendo lo que toda niña necesita.' },
    { type: 'p', value: 'Querida niña que aprendió a no molestar:' },
    { type: 'p', value: 'Te escribo desde el futuro, desde la mujer en la que te convertiste. Quiero que sepas, antes que nada, que lo lograste: seguimos aquí. (Vista previa — las doce cartas continúan tras la compra.)' },
  ],
  'cartas-a-mi-nina-interior:c2': [
    { type: 'h', value: 'Carta sobre el miedo a que se vayan' },
    { type: 'p', value: 'Niña mía: sé de dónde viene ese miedo que todavía me aprieta el pecho cuando alguien tarda en contestar. Viene de la primera vez que alguien importante se fue y nadie te explicó por qué.' },
    { type: 'p', value: 'Un niño no entiende "el adulto tiene sus problemas". Un niño entiende una sola cosa: "se fue por mí, algo malo hay en mí". Y construye toda su vida sobre esa frase falsa. Tú también la construiste. Y no fue tu culpa: nadie estuvo ahí para corregirla.' },
    { type: 'quote', value: 'Que alguien no se quedara no fue una sentencia sobre tu valor. Fue una información sobre sus límites.' },
    { type: 'p', value: 'Hoy quiero corregirla yo. La gente se va por mil razones que no tienen nada que ver contigo: por su miedo, su historia, su incapacidad de quedarse en cualquier lado. Tú no eras demasiado. Ellos eran insuficientes para lo que tú necesitabas. Es muy distinto.' },
    { type: 'p', value: 'Y aquí va lo importante: yo no me voy. Pase lo que pase con los demás, yo me quedo contigo. Esa es la única permanencia que de verdad necesitabas, y por fin la tienes.' },
  ],
  'cartas-a-mi-nina-interior:c3': [
    { type: 'h', value: 'Carta sobre portarse bien' },
    { type: 'p', value: 'Te felicitaban por ser tan madura. Por no dar problemas. Por entenderlo todo. Y tú aprendiste que ser amada y ser conveniente eran la misma cosa.' },
    { type: 'p', value: 'No lo son. Una niña no tiene que ganarse el cariño portándose bien. El cariño se da porque sí, por existir. Que a ti te tocara ganártelo no era lo normal: era una herida que confundiste con una virtud.' },
    { type: 'quote', value: 'Si solo te quieren cuando eres fácil, no te quieren a ti: quieren tu silencio.' },
    { type: 'p', value: 'Hoy te doy permiso para lo que entonces no pudiste: ser inconveniente. Decir que no. Ocupar espacio. Tener un mal día sin pedir perdón por él. Pedir ayuda sin sentir que estás abusando. Nada de eso te quita el derecho a que te quieran.' },
    { type: 'p', value: 'La mujer que soy hoy está desaprendiendo, despacio, a portarse bien para que no la dejen. Y cada vez que pongo un límite, lo hago también por ti.' },
  ],
  'cartas-a-mi-nina-interior:c4': [
    { type: 'h', value: 'Carta sobre la rabia que no te dejaron tener' },
    { type: 'p', value: 'Cuando te enojabas, te decían que estabas insoportable. Que así no te iban a querer. Entonces aprendiste a tragarte la rabia, a sonreír con los dientes apretados, a convertir el enojo en culpa porque la culpa, al menos, no molestaba a nadie.' },
    { type: 'p', value: 'Pero la rabia no se va cuando la tragas. Se queda adentro, se vuelve contra ti, se convierte en ansiedad, en complacencia, en ese cansancio raro de quien lleva años cargando lo que no pudo decir.' },
    { type: 'quote', value: 'Tu rabia no era un defecto. Era tu dignidad avisándote de que algo no estaba bien.' },
    { type: 'p', value: 'La rabia es sana. Es la emoción que marca los límites, la que dice "esto no". Una niña a la que le prohíben enojarse es una niña a la que le quitan el sistema de alarma. Y por eso de adulta te cuesta tanto darte cuenta a tiempo de que algo te lastima.' },
    { type: 'p', value: 'Hoy te devuelvo tu enojo. No para que lastimes a nadie, sino para que vuelvas a saber, sin dudar, cuándo algo está mal. Esa brújula siempre fue tuya. Te la robaron. Te la estoy devolviendo.' },
  ],
  'cartas-a-mi-nina-interior:c5': [
    { type: 'h', value: 'Carta para cuando vuelvas a sentirte sola' },
    { type: 'p', value: 'Va a volver a pasar. Algún domingo por la tarde, sin aviso, va a llegar esa soledad vieja, la de cuando eras chica y no había nadie a quién contarle el día. Quiero dejarte esta carta lista para ese momento.' },
    { type: 'p', value: 'Primero: esa soledad no es la verdad de hoy. Es un recuerdo del cuerpo. Tu sistema nervioso está reviviendo una sensación antigua, no describiendo tu vida actual. Mira alrededor: hoy hay gente, hoy hay opciones, hoy estoy yo.' },
    { type: 'quote', value: 'La soledad que más duele no es la de hoy. Es el eco de una que ya pasó.' },
    { type: 'p', value: 'Segundo: no te exijas. No es momento de resolver tu vida ni de ser productiva. Es momento de hacer algo amable y pequeño: una manta, un té, una llamada, una caminata. Trátate como tratarías a una niña triste, porque eso es exactamente lo que está pidiendo atención adentro.' },
    { type: 'p', value: 'Y tercero, lo más importante: ya no tienes cinco años. Ahora hay una adulta a cargo, y esa adulta soy yo. No te voy a dejar pasar la tarde sola como entonces. Estoy acá. Vamos a esperar juntas a que pase. Y va a pasar.' },
    { type: 'p', value: 'Siempre tuya,' },
    { type: 'p', value: '— Tú, ya grande' },
  ],

  // ---------- No Estás Rota ----------
  'no-estas-rota:c1': [
    { type: 'quote', value: 'No estás buscando sufrir. Tu cuerpo está intentando protegerte de la única forma que aprendió.' },
    { type: 'p', value: 'Hay algo que nunca te enseñaron: que tu sistema nervioso también elige por ti.' },
    { type: 'p', value: 'No es que estés rota. Es que tu cuerpo aprendió a anticipar el dolor para evitar el abandono. (Vista previa — el libro completo continúa tras la compra.)' },
  ],
  'no-estas-rota:c2': [
    { type: 'h', value: 'Los tres estados' },
    { type: 'p', value: 'Tu cuerpo, en cada momento, está en uno de tres estados. Aprender a reconocerlos en tiempo real es la herramienta más poderosa que te va a dar este libro, porque no puedes cambiar lo que no sabes nombrar.' },
    { type: 'p', value: 'El primero es la calma conectada. Es el estado en el que te sientes a salvo: respiras hondo, piensas con claridad, puedes estar cerca de alguien sin alarma. Desde acá se construyen los vínculos sanos. Es tu casa, aunque a veces se sienta desconocida.' },
    { type: 'p', value: 'El segundo es el acelerador: la activación. Ansiedad, urgencia, el corazón a mil, la necesidad de hacer algo YA. Es el estado de "pelea o huida". Acá es donde escribes mensajes que no deberías, donde revisas el teléfono cada dos minutos, donde el cuerpo grita que hay peligro aunque no lo haya.' },
    { type: 'p', value: 'El tercero es el freno: el colapso. Cuando la activación es demasiada y por demasiado tiempo, el cuerpo apaga todo. Te sientes vacía, desconectada, sin ganas de nada, como detrás de un vidrio. No es pereza ni depresión moral: es un freno de emergencia.' },
    { type: 'quote', value: 'No te preguntes "¿qué me pasa?". Pregúntate "¿en qué estado estoy?". La respuesta lo cambia todo.' },
    { type: 'p', value: 'La meta no es vivir siempre en calma —eso no existe—. La meta es darte cuenta de en qué estado estás, y aprender el camino de regreso a la calma cuando te has ido. Ese camino se entrena. Y empieza por nombrarlo.' },
  ],
  'no-estas-rota:c3': [
    { type: 'h', value: 'Por qué eliges lo que te lastima' },
    { type: 'p', value: 'Hay una palabra que lo explica casi todo: familiaridad. Tu cuerpo no busca lo que te hace bien. Busca lo que reconoce. Y si lo que reconoce es la intermitencia, la espera, el tener que ganarte el cariño, entonces eso es lo que vas a sentir como "química".' },
    { type: 'p', value: 'Por eso el hombre que te trata bien "no te genera nada" y el que te deja en visto "te vuelve loca". No es que uno valga menos. Es que uno activa tu sistema de la forma en que tu sistema aprendió a activarse, y el otro no. Lo confundes con atracción. Es reconocimiento.' },
    { type: 'quote', value: 'No te enamoras de la persona. Te enamoras de la sensación conocida que esa persona despierta en tu cuerpo.' },
    { type: 'p', value: 'Hay incluso un detective adentro de ti, hipervigilante, que escanea a cada persona nueva buscando esa señal familiar. En cuanto la encuentra —una pizca de distancia, una inconsistencia— se enciende la alarma que tú interpretas como mariposas. El detective cree que te protege. En realidad te lleva una y otra vez al mismo lugar.' },
    { type: 'p', value: 'La buena noticia: lo familiar se puede actualizar. Cada vez que te quedas con alguien que te trata bien y toleras la incomodidad de que "no pasa nada malo", le estás enseñando a tu cuerpo un nuevo significado de la palabra amor. Es lento. Pero es posible. El cuerpo aprende.' },
  ],
  'no-estas-rota:c4': [
    { type: 'h', value: 'Aprender a sentirte a salvo' },
    { type: 'p', value: 'No se construyen vínculos sanos si antes no se aprende a estar a salvo en el propio cuerpo. Así que vamos a terminar donde de verdad empieza todo: enseñándole a tu sistema nervioso, con pequeñas experiencias repetidas, que la calma no es peligro.' },
    { type: 'p', value: 'Se llama neuroplasticidad, y no necesitas un retiro de un mes para activarla. Necesitas microexperiencias de regulación, repetidas, hasta que el cuerpo cree un nuevo camino por defecto.' },
    { type: 'p', value: 'Una: el ancla del cuerpo. Varias veces al día, cuando NO estés en crisis, párate un momento y siente los pies en el piso, el aire entrando, un objeto en la mano. Le estás enseñando a tu sistema dónde queda la calma, para poder encontrar el camino cuando la necesites de verdad.' },
    { type: 'p', value: 'Dos: la exhalación larga. Cuando llega la activación, no respires más rápido: alarga la exhalación más que la inhalación. Inhala en cuatro, exhala en seis u ocho. Eso le dice físicamente a tu cuerpo, por la vía más directa que existe, que el peligro pasó.' },
    { type: 'quote', value: 'No tienes que creerte que estás a salvo. Tienes que enseñárselo a tu cuerpo, una respiración a la vez.' },
    { type: 'p', value: 'Tres: tolerar lo bueno. Esto es lo más difícil. Cuando algo bueno pase —alguien te trata bien, hay calma, hay paz—, en vez de sabotearlo o desconfiar, quédate. Respira. Dile a tu cuerpo: "esto también es seguro". Ensanchar tu capacidad de recibir lo bueno es, literalmente, sanar.' },
    { type: 'p', value: 'No estás rota. Nunca lo estuviste. Estás aprendiendo, de adulta y a propósito, lo que de niña te tocó aprender al revés. Y el solo hecho de que estés acá, leyendo esto, ya es tu cuerpo dando el primer paso de regreso a casa.' },
    { type: 'p', value: '— Claudia' },
  ],
}

// Capítulos gratuitos (vista previa). El resto exige compra.
export const ebookFreeKeys = new Set([
  'el-arte-de-soltar:c1',
  'cartas-a-mi-nina-interior:c1',
  'no-estas-rota:c1',
])
