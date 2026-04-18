// ============================================================
// VialNic — app.js
// Educación Vial Nicaragua · Ley 431
// Gamificación completa: Quiz, Escenarios, Logros, XP
// ============================================================
'use strict';

// Deshabilitar restauración automática de scroll del navegador
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// ════════════════════════════════════════════════════════════
// BANCO DE PREGUNTAS (25 preguntas)
// ════════════════════════════════════════════════════════════
const PREGUNTAS = {
  basico: [
    {
      q: '¿Qué debes hacer cuando el semáforo está en ROJO? 🔴',
      opts: ['Acelerar rápido para cruzar', 'Detenerse completamente', 'Doblar a la derecha si no hay nadie', 'Tocar la bocina'],
      ans: 1,
      exp: '🔴 La luz ROJA significa STOP total. Debes detenerte completamente antes de la línea blanca y esperar el verde.',
      pts: 10
    },
    {
      q: '¿Qué significa la señal de PARE (STOP)? 🛑',
      opts: ['Reducir la velocidad', 'Ceder el paso', 'Detenerse completamente y ceder el paso', 'Solo aplica de noche'],
      ans: 2,
      exp: '🛑 La señal STOP obliga a detenerse COMPLETAMENTE (velocidad = 0) antes de la línea, aunque no haya tráfico.',
      pts: 10
    },
    {
      q: '¿Dónde deben caminar los peatones? 🚶',
      opts: ['Por el centro de la calle', 'En la acera o banqueta', 'Por el carril izquierdo de la vía', 'Donde sea más cómodo'],
      ans: 1,
      exp: '🚶 Los peatones siempre deben caminar por la ACERA o BANQUETA. Si no hay, caminar del lado izquierdo enfrentando el tráfico.',
      pts: 10
    },
    {
      q: '¿Qué color tiene la señal de CEDA EL PASO? 🔺',
      opts: ['Azul y blanca', 'Amarilla y negra', 'Roja y blanca', 'Verde y blanca'],
      ans: 2,
      exp: '🔺 La señal de CEDA EL PASO es un triángulo ROJO y BLANCO con punta hacia abajo. Indica que debes ceder el paso.',
      pts: 10
    },
    {
      q: '¿Qué debes usar en una motocicleta para proteger tu cabeza? ⛑️',
      opts: ['Una gorra', 'Un pañuelo', 'Un casco homologado', 'Nada, no es obligatorio'],
      ans: 2,
      exp: '⛑️ El CASCO es OBLIGATORIO para conductores y pasajeros de motocicletas según la Ley 431, Art. 94. Salva vidas.',
      pts: 10
    },
    {
      q: 'Antes de cruzar la calle, ¿qué debes hacer? 👀',
      opts: ['Cruzar corriendo rápido', 'Mirar solo a la izquierda', 'Mirar a ambos lados y esperar a que sea seguro', 'Usar el celular para distraerte'],
      ans: 2,
      exp: '👀 Siempre mira a AMBOS LADOS antes de cruzar, incluso si tienes luz verde peatonal. Tu seguridad primero.',
      pts: 10
    },
    {
      q: '¿Qué significa la luz VERDE del semáforo? 🟢',
      opts: ['Detente inmediatamente', 'Puedes avanzar con precaución', 'Acelera al máximo', 'Dobla siempre a la derecha'],
      ans: 1,
      exp: '🟢 La luz VERDE significa que puedes avanzar, pero SIEMPRE con precaución. Verifica que no haya peatones cruzando.',
      pts: 10
    },
    {
      q: '¿Cuál es el límite de velocidad en una zona escolar en Nicaragua? 🏫',
      opts: ['45 km/h', '60 km/h', '25 km/h', 'No hay límite'],
      ans: 2,
      exp: '🏫 En zonas escolares el límite es 25 km/h según la Ley 431, Art. 119. Hay niños que pueden cruzar en cualquier momento.',
      pts: 15
    },
    {
      q: '¿Cuál es la función del cinturón de seguridad? 🪢',
      opts: ['Es solo decorativo', 'Protege al conductor y pasajeros en caso de accidente', 'Es obligatorio solo en autopistas', 'Solo lo usan los adultos'],
      ans: 1,
      exp: '🪢 El cinturón de seguridad es OBLIGATORIO para todos los ocupantes según la Ley 431, Art. 93. Reduce el riesgo de muerte hasta un 45%.',
      pts: 10
    },
    {
      q: '¿Por dónde deben cruzar los peatones la calle? 🦓',
      opts: ['Por donde sea más rápido', 'Entre carros estacionados', 'Por el paso peatonal o cebra', 'Por el carril de buses'],
      ans: 2,
      exp: '🦓 Los peatones SIEMPRE deben cruzar por el PASO PEATONAL (cebra). Cruzar fuera de este lugar pone en riesgo su vida.',
      pts: 10
    },
    {
      q: '¿Qué es un paso peatonal según la Ley 431? 🦓',
      opts: ['El área que el peatón elige para cruzar', 'El área señalada y destinada para el paso exclusivo de peatones', 'Un área señalizada para esperar el autobús', 'Cualquier esquina de la calle'],
      ans: 1,
      exp: '🦓 El paso peatonal es el área SEÑALIZADA y DESTINADA exclusivamente para que los peatones crucen la vía de forma segura. Ley 431.',
      pts: 10
    },
    {
      q: '¿Para quiénes es obligatorio el uso del casco de seguridad? ⛑️',
      opts: ['Solo para el conductor de moto', 'Solo para ciclistas en competencias', 'Conductor Y pasajero de motocicleta', 'Solo en carreteras'],
      ans: 2,
      exp: '⛑️ Tanto el conductor como el PASAJERO de la motocicleta deben usar casco. Es obligatorio según Ley 431, Art. 94. No importa la distancia ni la velocidad.',
      pts: 10
    }
  ],

  intermedio: [
    {
      q: '¿Cuál es la ley que regula el tránsito vehicular en Nicaragua? ⚖️',
      opts: ['Ley 316', 'Ley 185', 'Ley 431', 'Ley 562'],
      ans: 2,
      exp: '⚖️ La LEY 431 es la "Ley para el Régimen de Circulación Vehicular e Infracciones de Tránsito" de Nicaragua.',
      pts: 15
    },
    {
      q: '¿Cuál es el límite de velocidad en zonas urbanas de Nicaragua? 🏙️',
      opts: ['30 km/h', '60 km/h', '45 km/h', '80 km/h'],
      ans: 2,
      exp: '🏙️ En zonas urbanas el límite es 45 km/h (Ley 431, Art. 119). Excederlo genera multa, retención del vehículo e incluso suspensión de licencia.',
      pts: 15
    },
    {
      q: '¿Qué porcentaje de las víctimas de accidentes en Nicaragua son motorizados? 🏍️',
      opts: ['25%', '40%', '55.9%', '70%'],
      ans: 2,
      exp: '🏍️ El 55.9% de las víctimas son motorizados (conductores y pasajeros de motos). Son el grupo más vulnerable por su exposición y menor protección.',
      pts: 15
    },
    {
      q: '¿Cuáles son los días con mayor incidencia de accidentes en Nicaragua? 📅',
      opts: ['Martes y miércoles', 'Solo los viernes', 'Sábado, domingo y lunes', 'Lunes y jueves'],
      ans: 2,
      exp: '📅 El 58.5% de accidentes ocurren entre sábado, domingo y lunes. El alcohol en fines de semana es el principal factor de este pico.',
      pts: 15
    },
    {
      q: '¿Qué significa la señal de luz ÁMBAR del semáforo? 🟡',
      opts: ['Avanzar a toda velocidad', 'Frenar con precaución si es seguro', 'Acelerar antes que cierre el semáforo', 'Es decorativa, no significa nada'],
      ans: 1,
      exp: '🟡 El ÁMBAR indica que el semáforo cambiará a rojo. Debes prepararte para detenerte. Solo continúas si ya estás tan cerca que frenar sería peligroso.',
      pts: 15
    },
    {
      q: '¿Qué documentos debe portar obligatoriamente un conductor en Nicaragua? 🪪',
      opts: ['Solo la licencia', 'Licencia y tarjeta de circulación', 'Licencia, tarjeta de circulación y seguro obligatorio (SOA)', 'Solo el seguro del vehículo'],
      ans: 2,
      exp: '🪪 Según el Art. 62 de la Ley 431, el conductor debe portar: licencia vigente, tarjeta de circulación y seguro obligatorio de accidentes (SOA).',
      pts: 15
    },
    {
      q: '¿Cuáles son los vehículos de RÉGIMEN PREFERENTE según la Ley 431? 🚨',
      opts: ['Pipas de gasolina y recolectores de basura', 'Traslados de valores bancarios', 'Caravanas presidenciales, militares, Policía Nacional y Cruz Roja', 'Carrozas y vehículos fúnebres'],
      ans: 2,
      exp: '🚨 Los vehículos de RÉGIMEN PREFERENTE son: caravanas presidenciales, militares, de gobierno, Policía Nacional y Cruz Roja. Todos los demás deben cederles el paso de inmediato.',
      pts: 15
    },
    {
      q: '¿Cuál es el FACTOR DETERMINANTE para prevenir accidentes de tránsito? 🧠',
      opts: ['La vía y su mantenimiento', 'El ser humano', 'El estado del vehículo', 'Las condiciones del clima'],
      ans: 1,
      exp: '🧠 El SER HUMANO es el factor determinante. El 90% de los accidentes son causados por error humano: velocidad, alcohol, celular, falta de educación vial.',
      pts: 15
    },
    {
      q: '¿En qué lugares está PROHIBIDO aventajar según la Ley 431? 🚫',
      opts: ['En avenidas principales y rotondas', 'En intersecciones y pasos a desnivel', 'En pendientes, curvas y puentes', 'Solo en zonas escolares'],
      ans: 2,
      exp: '🚫 Está prohibido aventajar en PENDIENTES, CURVAS y PUENTES por la falta de visibilidad y el peligro de choque frontal. Ley 431, Art. 73.',
      pts: 15
    },
    {
      q: '¿Qué significa una señal con fondo AMARILLO y borde negro? ⚠️',
      opts: ['Es informativa de servicios', 'Es reglamentaria obligatoria', 'Es de precaución o advertencia', 'Es de prohibición'],
      ans: 2,
      exp: '⚠️ Las señales de fondo AMARILLO son de PRECAUCIÓN. Advierten sobre peligros o condiciones especiales: curvas, cruces, animales, obras en la vía.',
      pts: 10
    },
    {
      q: '¿Qué artículo de la Ley 431 regula el uso del cinturón de seguridad? 🪢',
      opts: ['Art. 56', 'Art. 73', 'Art. 93', 'Art. 119'],
      ans: 2,
      exp: '🪢 El Art. 93 de la Ley 431 establece la obligatoriedad del cinturón para todos los ocupantes del vehículo, tanto conductor como pasajeros.',
      pts: 20
    },
    {
      q: '¿Con cuántos gramos de alcohol se establece la embriaguez ligera según la tasa de alcoholemia? 🍺',
      opts: ['De 0.0 a 0.3 g/L', 'De 0.5 a 1 g/L en sangre', 'Más de 2 g/L en sangre', 'De 1 a 1.5 g/L'],
      ans: 1,
      exp: '🍺 La embriaguez LIGERA: 0.5 a 1 g/L. La embriaguez: más de 1 hasta 2 g/L. La extrema: más de 2 g/L. Sin embargo, la Ley 431 establece tolerancia CERO al conducir.',
      pts: 20
    }
  ],

  avanzado: [
    {
      q: '¿Qué departamento tiene más accidentes de tránsito en Nicaragua? 🗺️',
      opts: ['León', 'Chinandega', 'Matagalpa', 'Managua'],
      ans: 3,
      exp: '🗺️ Managua lidera los accidentes viales en Nicaragua, seguido por León y Matagalpa. La densidad vehicular y la urbanización son los principales factores.',
      pts: 20
    },
    {
      q: '¿Cuál es el límite de velocidad en carretera abierta según la Ley 431? 🛣️',
      opts: ['80 km/h', '90 km/h', '100 km/h', '120 km/h'],
      ans: 1,
      exp: '🛣️ En carretera abierta el límite es 90 km/h (Art. 119). En zonas escolares y hospitalarias baja a 25 km/h. En pistas urbanas: 60 km/h.',
      pts: 20
    },
    {
      q: '¿Qué institución coordina las Brigadas Estudiantiles de Tránsito (BRET)? 👮',
      opts: ['MINED únicamente', 'Alcaldía de Managua', 'Cruz Roja Nicaragüense', 'Policía Nacional junto al MINED'],
      ans: 3,
      exp: '👮 Las BRET son coordinadas por la Policía Nacional y el MINED. Capacitan a estudiantes como promotores de seguridad vial en sus escuelas.',
      pts: 20
    },
    {
      q: '¿Qué porcentaje de accidentes se atribuye al factor humano en Nicaragua? 🧠',
      opts: ['60%', '75%', '85%', '90%'],
      ans: 3,
      exp: '🧠 El 90% de los accidentes son causados por el FACTOR HUMANO: exceso de velocidad, alcohol, uso del celular, falta de educación vial y cansancio.',
      pts: 20
    },
    {
      q: '¿Cuál es la tolerancia de alcohol al volante establecida en la Ley 431? 🍺',
      opts: ['0.5 g/L en sangre', '0.3 g/L en sangre', '0.1 g/L en sangre', '0.0 g/L — tolerancia cero'],
      ans: 3,
      exp: '🍺 La Ley 431 establece TOLERANCIA CERO: 0.0 g/L de alcohol. Cualquier nivel detectable de alcohol al conducir constituye infracción muy grave con cargos penales.',
      pts: 25
    },
    {
      q: '¿Cómo clasifica la Ley 431 las infracciones de tránsito? ⚠️',
      opts: ['Pequeñas y grandes', 'Leves, graves y muy graves', 'Menores y mayores', 'Simples y agravadas'],
      ans: 1,
      exp: '⚠️ La Ley 431 (Arts. 96-130) clasifica las infracciones en LEVES, GRAVES y MUY GRAVES. Cada categoría tiene sanciones diferentes: multa, retención, suspensión o cargos penales.',
      pts: 20
    },
    {
      q: '¿Por cuánto tiempo se puede retener a un conductor en estado de embriaguez? ⏰',
      opts: ['8 horas', '10 horas', '12 horas', '24 horas'],
      ans: 2,
      exp: '⏰ Según la Ley 431, un conductor en estado de embriaguez puede ser retenido hasta por 12 HORAS, ubicado separado de otras personas detenidas por otras circunstancias.',
      pts: 20
    },
    {
      q: '¿Cuáles son los períodos de suspensión de licencia por reincidencia? 📋',
      opts: ['1ª: 1 mes; 2ª: 3 meses; 3ª: 6 meses', '1ª: 3 meses; 2ª: 6 meses; 3ª: 1 año; 4ª: definitiva', '1ª: 6 meses; 2ª: 1 año; 3ª: definitiva', 'Solo se aplica multa económica'],
      ans: 1,
      exp: '📋 La suspensión por reincidencia es progresiva: 1ª vez 3 meses, 2ª vez 6 meses, 3ª vez 1 año, 4ª vez definitiva. Ley 431.',
      pts: 20
    },
    {
      q: '¿En qué circunstancias puede ser detenido un conductor según el Art. 122 de la Ley 431? 🚔',
      opts: ['Solo cuando hay fallecidos', 'Cuando hay lesiones graves o gravísimas', 'Cuando huye del lugar del accidente', 'En todos los anteriores'],
      ans: 3,
      exp: '🚔 El Art. 122 establece que el conductor será detenido cuando haya fallecidos, lesiones graves o gravísimas, o cuando se haya dado a la fuga. En lesiones leves puede quedar en arresto domiciliar.',
      pts: 25
    },
    {
      q: '¿Cuál es la velocidad máxima al circular dentro de una ROTONDA? 🔄',
      opts: ['45 km/h', '30 km/h o lo que indique la señal', '35 km/h', '60 km/h'],
      ans: 1,
      exp: '🔄 La velocidad máxima en una rotonda es de 30 km/h o lo que indique la señal. Las curvas cerradas de la rotonda hacen peligroso circular a mayor velocidad.',
      pts: 20
    },
    {
      q: '¿Qué establece el Art. 150 de la Ley 431 sobre los accidentes? 🚗',
      opts: ['Que se puede huir si fue un accidente menor', 'Que huir del lugar es un delito grave', 'Que el conductor siempre tiene la culpa', 'Que no hay obligación de reportar'],
      ans: 1,
      exp: '🚗 El Art. 150 establece que ABANDONAR el lugar de un accidente es un DELITO GRAVE. El conductor está obligado a prestar ayuda, identificarse y esperar a las autoridades.',
      pts: 20
    },
    {
      q: '¿Por cuál carril se debe adelantar a otro vehículo en Nicaragua? ↔️',
      opts: ['Por el carril derecho siempre', 'Por cualquier carril disponible', 'Por el carril izquierdo cuando haya condiciones', 'No está permitido adelantar en carreteras'],
      ans: 2,
      exp: '↔️ El adelantamiento se realiza SIEMPRE por el carril IZQUIERDO cuando hay visibilidad y espacio suficiente. Está PROHIBIDO en curvas, pendientes, puentes y con línea amarilla continua. Ley 431, Art. 73.',
      pts: 20
    }
  ]
};

// Quiz completo = todos juntos (máx 30)
PREGUNTAS.completo = [...PREGUNTAS.basico, ...PREGUNTAS.intermedio, ...PREGUNTAS.avanzado]
  .sort(() => Math.random() - 0.5).slice(0, 30);

// ════════════════════════════════════════════════════════════
// ESCENARIOS REALES
// ════════════════════════════════════════════════════════════
const ESCENARIOS = [
  {
    scene: '🚗 ➡️ 🚦',
    title: 'El Semáforo en Ámbar',
    desc: 'Vas conduciendo a 45 km/h por una avenida de Managua. El semáforo cambia a amarillo cuando estás a unos 30 metros. ¿Qué haces?',
    opts: [
      { text: 'Acelero para cruzar antes que cambie a rojo', correct: false },
      { text: 'Freno con calma si me es seguro detenerme', correct: true },
      { text: 'Toco la bocina y paso igual', correct: false },
      { text: 'No hago nada, sigo igual de rápido', correct: false }
    ],
    resultOk:  { icon: '✅', title: '¡Decisión correcta!', text: 'Frenar ante el ámbar es lo correcto. El ámbar indica que el semáforo está a punto de ponerse rojo. Solo continúas si ya es tarde para frenar con seguridad.' },
    resultBad: { icon: '⚠️', title: 'Decisión peligrosa', text: 'Acelerar en ámbar provoca colisiones con vehículos o peatones que ya tienen verde. Es infracción según la Ley 431 y una causa frecuente de accidentes.' },
    ley: '📖 Ley 431, Art. 70: El conductor debe anticiparse a los cambios del semáforo y respetar la señal ámbar como aviso de parada obligatoria.',
    pts: 20
  },
  {
    scene: '🚶 📱 🚗',
    title: 'El Peatón Distraído',
    desc: 'Un peatón cruza la calle mirando su celular sin fijarse en el tráfico. Tú vas a 40 km/h. No hay señal de cruce peatonal. ¿Qué haces?',
    opts: [
      { text: 'Toco bocina fuerte y continúo, es culpa de él', correct: false },
      { text: 'Freno de inmediato y toco bocina para alertarlo', correct: true },
      { text: 'Esquivo sin frenar pasando por la acera', correct: false },
      { text: 'Espero a que él se dé cuenta solo', correct: false }
    ],
    resultOk:  { icon: '✅', title: '¡Reacción perfecta!', text: 'Frena y avisa al peatón. El conductor siempre debe estar preparado para actuar, aunque la imprudencia sea del peatón. La vida siempre primero.' },
    resultBad: { icon: '🚨', title: '¡Muy peligroso!', text: 'El conductor tiene responsabilidad de actuar aunque el peatón esté en falta. Un accidente puede resultar en lesiones graves, cargos penales y multas.' },
    ley: '📖 Ley 431, Art. 78: El conductor es responsable de anticipar peligros. Causar daños a un peatón, incluso distraído, puede generar responsabilidad penal.',
    pts: 20
  },
  {
    scene: '🏍️ 👥 ⛑️❌',
    title: 'La Moto Sin Casco',
    desc: 'Tu mejor amigo te llama para salir. Te dice que solo es "a la vuelta" en su motocicleta. No tiene cascos disponibles. Son las 9 PM. ¿Qué haces?',
    opts: [
      { text: 'Subo, es solo un momento y va despacio', correct: false },
      { text: 'Le digo que no voy si no hay cascos', correct: true },
      { text: 'Voy pero le pido que maneje muy lento', correct: false },
      { text: 'Me improviso algo en la cabeza', correct: false }
    ],
    resultOk:  { icon: '🌟', title: '¡Decisión valiente!', text: 'Negarme a subir sin casco es la decisión correcta. Los accidentes de moto sin casco son los más letales. Un "no" puede salvar tu vida.' },
    resultBad: { icon: '💔', title: 'Decisión de riesgo', text: 'El 55.9% de víctimas de accidentes en Nicaragua son motorizados. Sin casco, un golpe a baja velocidad puede causar daño cerebral permanente o muerte.' },
    ley: '📖 Ley 431, Art. 94: El uso de casco homologado es OBLIGATORIO para conductor y pasajero en toda motocicleta. Su incumplimiento es infracción inmediata.',
    pts: 20
  },
  {
    scene: '🍺 🚗 🌙',
    title: 'El Conductor que Tomó',
    desc: 'Son las 11 PM. Estás en una reunión familiar. El primo que te trajo ha tomado alcohol. Dice que "está bien" y quiere manejarte a casa. ¿Qué haces?',
    opts: [
      { text: 'Voy con él, parece estar bien y es familiar', correct: false },
      { text: 'Le digo que no y llamo un taxi o app de transporte', correct: true },
      { text: 'Le digo que maneje despacio y por calles tranquilas', correct: false },
      { text: 'Me quedo en la reunión hasta que se le pase', correct: false }
    ],
    resultOk:  { icon: '🦸', title: '¡Decisión heroica!', text: 'Llamar un taxi es la decisión correcta y te puede salvar la vida. No importa la hora ni la relación. Alcohol + vehículo = peligro mortal.' },
    resultBad: { icon: '🚨', title: '¡Gravísimo error!', text: 'Manejar bajo efectos del alcohol es el delito más grave en la Ley 431. Causa el 30% de accidentes fatales. No hay nivel "seguro" de alcohol al volante.' },
    ley: '📖 Ley 431, Art. 103: TOLERANCIA CERO al alcohol. Manejar en estado de ebriedad es delito grave con multa, suspensión de licencia y cárcel si causa daños.',
    pts: 25
  },
  {
    scene: '🔱 🚗 🚙',
    title: 'La Intersección Sin Señales',
    desc: 'Llegas a una intersección en Managua. No hay semáforo ni señales. Hay otro vehículo llegando por la calle de tu derecha al mismo tiempo. ¿Qué haces?',
    opts: [
      { text: 'Paso yo primero porque llegué primero', correct: false },
      { text: 'Cedo el paso al vehículo de mi derecha', correct: true },
      { text: 'Acelero para cruzar rápido antes que él', correct: false },
      { text: 'Me detengo y espero indefinidamente', correct: false }
    ],
    resultOk:  { icon: '✅', title: '¡Conoces las reglas!', text: 'La regla universal: CEDE EL PASO AL VEHÍCULO DE LA DERECHA. Aplica en toda intersección sin señalización en Nicaragua.' },
    resultBad: { icon: '⚠️', title: 'Falta de conocimiento vial', text: 'El vehículo de la derecha tiene derecho de paso. Ignorar esto es causa frecuente de colisiones laterales en intersecciones sin señalizar.' },
    ley: '📖 Ley 431, Art. 76: En intersecciones sin señalización, el conductor debe ceder el paso al vehículo que se aproxima por su derecha.',
    pts: 20
  },
  {
    scene: '📱 🚗 💥',
    title: 'El Mensaje Urgente',
    desc: 'Vas manejando en la carretera a 80 km/h. Suena tu celular: "MENSAJE URGENTE DE MAMÁ". ¿Qué haces?',
    opts: [
      { text: 'Leo el mensaje rápido, solo son 2 segundos', correct: false },
      { text: 'Contesto la llamada con el altavoz mientras manejo', correct: false },
      { text: 'Me orillo en un lugar seguro, detengo el carro y reviso el celular', correct: true },
      { text: 'Le pido al copiloto que revise el mensaje', correct: false }
    ],
    resultOk:  { icon: '✅', title: '¡Prioridad correcta!', text: 'Detenerte es lo único correcto. A 80 km/h, 2 segundos mirando el celular equivalen a recorrer 44 metros sin ver la vía. Ningún mensaje vale una vida.' },
    resultBad: { icon: '🚨', title: '¡Decisión peligrosa!', text: 'Usar el celular al volante cuadruplica el riesgo de accidente. Si hay copiloto disponible, pedirle ayuda es válido — pero contestar tú mismo o leer solo es muy peligroso.' },
    ley: '📖 Ley 431, Art. 87: El uso del celular sin manos libres al conducir es infracción grave. La distracción es la principal causa de accidentes en carretera.',
    pts: 20
  },
  {
    scene: '🚗 💨 🌧️',
    title: 'Lluvia Torrencial en Carretera',
    desc: 'Manejas en la carretera Managua-Masaya a 80 km/h. De repente cae una lluvia muy fuerte: los limpiaparabrisas no dan abasto y la visibilidad es casi cero. ¿Qué haces?',
    opts: [
      { text: 'Sigo a la misma velocidad, el seguro cubre accidentes', correct: false },
      { text: 'Freno bruscamente hasta quedarme detenido en el carril', correct: false },
      { text: 'Reduzco velocidad gradualmente, enciendo luces y me orillo en zona segura a esperar', correct: true },
      { text: 'Enciendo las luces altas para ver mejor', correct: false }
    ],
    resultOk:  { icon: '🌟', title: '¡Excelente juicio!', text: 'Reducir velocidad y salir de la carretera en lugar seguro es la respuesta correcta. Las luces de emergencia te hacen visible para otros conductores mientras esperas.' },
    resultBad: { icon: '⚠️', title: 'Decisión riesgosa', text: 'Con visibilidad casi nula lo correcto es detenerse en un lugar seguro fuera del carril. Frenar bruscamente en el carril puede causar choques en cadena.' },
    ley: '📖 Ley 431, Art. 119: En condiciones de lluvia o neblina, el conductor debe reducir la velocidad y adaptar la conducción a las condiciones de la vía.',
    pts: 20
  },
  {
    scene: '🚑 🚨 🚗',
    title: 'La Ambulancia que Pasa',
    desc: 'Vas por una calle de dos carriles en Managua. Escuchas la sirena de una ambulancia acercándose por detrás a toda velocidad. ¿Qué haces?',
    opts: [
      { text: 'Acelero para no entorpecerla', correct: false },
      { text: 'Me detengo donde estoy, aunque sea en medio del carril', correct: false },
      { text: 'Me orillo lo más a la derecha posible y me detengo para dejarla pasar', correct: true },
      { text: 'Ignoro la sirena y continúo mi trayecto normal', correct: false }
    ],
    resultOk:  { icon: '✅', title: '¡Salvaste una vida!', text: 'Ceder el paso a los vehículos de emergencia es obligatorio y puede salvar la vida de alguien. Orillarse a la derecha y detenerse es la maniobra correcta.' },
    resultBad: { icon: '🚨', title: 'Obstruiste una emergencia', text: 'Obstruir el paso de vehículos de emergencia es una infracción grave. Cada segundo cuenta cuando alguien está en peligro de muerte.' },
    ley: '📖 Ley 431, Art. 80: Todo conductor debe ceder el paso inmediato a ambulancias, bomberos y policía con sirenas activas, orillándose a la derecha.',
    pts: 20
  },
  {
    scene: '🚗 💥 🧍',
    title: 'Testigo de un Accidente Grave',
    desc: 'Viajas en carretera y presencias un accidente grave: dos vehículos chocaron y hay personas heridas. Eres el primer conductor en llegar. ¿Qué haces?',
    opts: [
      { text: 'Paso despacio a ver qué pasó y continúo mi camino', correct: false },
      { text: 'Me detengo, enciendo mis luces de emergencia y llamo al 118', correct: true },
      { text: 'Muevo a los heridos al costado de la carretera para ayudar', correct: false },
      { text: 'Espero a que llegue otra persona y luego actúo', correct: false }
    ],
    resultOk:  { icon: '🦸', title: '¡Eres un héroe vial!', text: 'Detenerte, señalizar y llamar al 118 son los pasos correctos. No mover heridos evita lesiones mayores. Tu acción puede salvar vidas.' },
    resultBad: { icon: '💔', title: 'Respuesta incorrecta', text: 'Mover heridos puede empeorar lesiones de columna. Continuar sin actuar es abandono. Esperar pasivamente puede costar vidas valiosas.' },
    ley: '📖 Ley 431, Art. 150: Todo testigo de un accidente tiene el deber moral y legal de auxiliar. Llama al 118. No muevas heridos salvo riesgo de incendio.',
    pts: 25
  },
  {
    scene: '😴 🚗 🌙',
    title: 'El Conductor Somnoliento',
    desc: 'Son las 2 AM. Llevas 4 horas manejando solo en carretera. Faltan 40 km para llegar. Sientes que los ojos se te cierran y tu cabeza cae hacia adelante. ¿Qué haces?',
    opts: [
      { text: 'Abro la ventana y pongo música fuerte para aguantar', correct: false },
      { text: 'Me tomo un café en el próximo negocio y sigo', correct: false },
      { text: 'Me detengo en un lugar seguro y duermo al menos 20-30 minutos', correct: true },
      { text: 'Acelero para llegar más rápido antes de quedarme dormido', correct: false }
    ],
    resultOk:  { icon: '🌟', title: '¡Decisión que salva vidas!', text: 'Dormir aunque sea 20 minutos es la única solución real. El sueño no se engaña con café ni música. Un conductor dormido es tan peligroso como uno ebrio.' },
    resultBad: { icon: '🚨', title: '¡Decisión fatal!', text: 'La somnolencia al volante causa el 30% de accidentes nocturnos. El café da ilusión de alerta por 20-30 minutos. Solo el sueño real restaura el estado de alerta.' },
    ley: '📖 Ley 431, Art. 88: El conductor tiene prohibido circular cuando su estado físico o mental comprometa la seguridad. La fatiga extrema es causa de infracción grave.',
    pts: 25
  },
  {
    scene: '🚗 🚛 ➖',
    title: 'El Adelantamiento Prohibido',
    desc: 'Vas en carretera nacional a 80 km/h. Hay un camión lento frente a ti. La línea central es amarilla continua. El carril contrario parece libre. ¿Qué haces?',
    opts: [
      { text: 'Adelanto rápido, parece que no viene nadie', correct: false },
      { text: 'Espero a que desaparezca la línea continua para adelantar con seguridad', correct: true },
      { text: 'Toco bocina insistentemente para que el camión acelere', correct: false },
      { text: 'Me pego al camión y adelanto en la primera curva', correct: false }
    ],
    resultOk:  { icon: '✅', title: '¡Correcto! Paciencia que salva', text: 'Esperar a que desaparezca la línea continua es lo correcto. La línea amarilla continua prohíbe adelantar por falta de visibilidad. Unos minutos de espera valen más que una vida.' },
    resultBad: { icon: '🚨', title: '¡Grave error!', text: 'Adelantar con línea amarilla continua está PROHIBIDO porque invades el carril contrario en un punto de riesgo. Un vehículo puede venir a alta velocidad. Es infracción muy grave y causa de accidentes mortales.' },
    ley: '📖 Ley 431, Art. 73: Está prohibido adelantar en pendientes, curvas, puentes y cuando la señalización lo indica con línea amarilla continua.',
    pts: 20
  },
  {
    scene: '🚦❌ 🚗🚗',
    title: 'El Semáforo Apagado',
    desc: 'Llegas a una intersección importante de Managua. El semáforo está completamente apagado, sin luz alguna. Hay vehículos llegando de todos los lados al mismo tiempo. ¿Cómo procedes?',
    opts: [
      { text: 'Paso rápido porque el semáforo no está funcionando', correct: false },
      { text: 'Trato la intersección como un PARE: me detengo, cedo el paso y avanzo con precaución', correct: true },
      { text: 'Me quedo detenido indefinidamente hasta que llegue un agente de tránsito', correct: false },
      { text: 'Hago sonar la bocina y avanzo, avisando a los demás vehículos', correct: false }
    ],
    resultOk:  { icon: '✅', title: '¡Decisión perfecta!', text: 'Cuando el semáforo está apagado, trátalo como una señal de PARE: detente completamente, cede el paso a quien tenga preferencia (vehículo de la derecha) y avanza con máxima precaución.' },
    resultBad: { icon: '⚠️', title: 'Decisión peligrosa', text: 'Un semáforo apagado NO te da derecho de paso automático. Debes tratar la intersección como PARE y ceder el paso al vehículo de la derecha. Ignorar esto causa colisiones graves.' },
    ley: '📖 Ley 431, Art. 76: Ante la ausencia de señalización o semáforo operativo, el conductor cede el paso al vehículo de la derecha y procede con extrema precaución.',
    pts: 20
  }
];

// ════════════════════════════════════════════════════════════
// SISTEMA DE REGISTRO DE PARTICIPANTES
// ════════════════════════════════════════════════════════════
let registroSesion = {
  nombre: '',
  fechaInicio: new Date().toISOString(),
  quizzesRealizados: [],
  escenariosRealizados: [],
  modulosCompletados: [],
  xpTotal: 0
};

function inicializarNombre() {
  const nombreGuardado = localStorage.getItem('vialnic_nombre');
  if (nombreGuardado) {
    registroSesion.nombre = nombreGuardado;
    return;
  }
  // Mostrar modal de nombre al iniciar
  setTimeout(() => abrirModal('nombreModal'), 2500);
}

function guardarNombreModal() {
  const input = document.getElementById('inputNombre');
  const nombre = input ? input.value.trim() : '';
  registroSesion.nombre = nombre || 'Anónimo';
  localStorage.setItem('vialnic_nombre', registroSesion.nombre);
  cerrarModal('nombreModal');
  if (nombre) toast(`👋 ¡Hola, ${nombre}! Tu progreso será registrado.`, 'success');
}

function registrarQuiz(cat, score, total, pct, xpGanado) {
  registroSesion.quizzesRealizados.push({
    categoria: cat,
    correctas: score,
    total,
    porcentaje: pct,
    xp: xpGanado,
    fecha: new Date().toLocaleString('es-NI')
  });
  registroSesion.xpTotal = estado.xp;
  guardarRegistroLocal();
}

function registrarEscenario(titulo, correcto, xp) {
  registroSesion.escenariosRealizados.push({
    escenario: titulo,
    decision: correcto ? 'Correcta' : 'Incorrecta',
    xp: correcto ? xp : 0,
    fecha: new Date().toLocaleString('es-NI')
  });
  registroSesion.xpTotal = estado.xp;
  guardarRegistroLocal();
}

function registrarModulo(modulo) {
  if (!registroSesion.modulosCompletados.includes(modulo)) {
    registroSesion.modulosCompletados.push(modulo);
  }
  registroSesion.xpTotal = estado.xp;
  guardarRegistroLocal();
}

function guardarRegistroLocal() {
  try {
    localStorage.setItem('vialnic_registro', JSON.stringify(registroSesion));
  } catch(e) {}
}

function descargarRegistroTXT() {
  const nombre = registroSesion.nombre || localStorage.getItem('vialnic_nombre') || 'Anónimo';
  const fecha  = new Date().toLocaleString('es-NI');
  const xp     = estado.xp;

  const nivelActual = getCurrentLevel(xp);

  const logrosDesbloqueados = Object.keys(estado.logros).filter(k => estado.logros[k]);

  let txt = '';
  txt += '════════════════════════════════════════════════════════\n';
  txt += '   VIALNIC — REGISTRO DE PARTICIPANTE\n';
  txt += '   Educación Vial Interactiva · Nicaragua · Ley 431\n';
  txt += '════════════════════════════════════════════════════════\n\n';
  txt += `NOMBRE:        ${nombre}\n`;
  txt += `FECHA:         ${fecha}\n`;
  txt += `NIVEL:         ${nivelActual.badge} ${nivelActual.nombre}\n`;
  txt += `XP TOTAL:      ${xp} puntos\n`;
  txt += `LOGROS:        ${logrosDesbloqueados.length} / ${Object.keys(LOGROS_DEF).length}\n\n`;

  txt += '────────────────────────────────────────────────────────\n';
  txt += '  MÓDULOS COMPLETADOS\n';
  txt += '────────────────────────────────────────────────────────\n';
  const modNames = { senales: 'Señales de Tránsito', normas: 'Normas Viales', ley431: 'Ley 431' };
  if (estado.modulosCompletados.size > 0) {
    [...estado.modulosCompletados].forEach(m => {
      txt += `  ✅ ${modNames[m] || m}\n`;
    });
  } else {
    txt += '  (Ninguno completado aún)\n';
  }
  txt += '\n';

  txt += '────────────────────────────────────────────────────────\n';
  txt += '  RESULTADOS DE QUIZZES\n';
  txt += '────────────────────────────────────────────────────────\n';
  if (registroSesion.quizzesRealizados.length > 0) {
    registroSesion.quizzesRealizados.forEach((q, i) => {
      txt += `  Quiz #${i + 1} — ${q.categoria.toUpperCase()}\n`;
      txt += `    Correctas: ${q.correctas}/${q.total} (${q.porcentaje}%)\n`;
      txt += `    XP ganado: ${q.xp} puntos\n`;
      txt += `    Fecha:     ${q.fecha}\n\n`;
    });
  } else {
    txt += '  (Ningún quiz realizado aún)\n\n';
  }

  txt += '────────────────────────────────────────────────────────\n';
  txt += '  ESCENARIOS RESPONDIDOS\n';
  txt += '────────────────────────────────────────────────────────\n';
  if (registroSesion.escenariosRealizados.length > 0) {
    registroSesion.escenariosRealizados.forEach((e, i) => {
      txt += `  Escenario #${i + 1}: ${e.escenario}\n`;
      txt += `    Decisión: ${e.decision}  |  XP: ${e.xp}\n`;
      txt += `    Fecha: ${e.fecha}\n\n`;
    });
  } else {
    txt += '  (Ningún escenario respondido aún)\n\n';
  }

  txt += '────────────────────────────────────────────────────────\n';
  txt += '  LOGROS DESBLOQUEADOS\n';
  txt += '────────────────────────────────────────────────────────\n';
  if (logrosDesbloqueados.length > 0) {
    logrosDesbloqueados.forEach(id => {
      const def = LOGROS_DEF[id];
      if (def) txt += `  ${def.icon} ${def.title}\n`;
    });
  } else {
    txt += '  (Ninguno desbloqueado aún)\n';
  }

  txt += '\n════════════════════════════════════════════════════════\n';
  txt += '  Proyecto de Investigación Aplicada\n';
  txt += '  Universidad Nacional Multidisciplinaria Ricardo Morales Avilés\n';
  txt += '  Managua, Nicaragua · 2026\n';
  txt += '════════════════════════════════════════════════════════\n';

  // Descargar como archivo .txt
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  const nombreArchivo = nombre.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_áéíóúÁÉÍÓÚñÑ]/g, '');
  a.download = `VialNic_Registro_${nombreArchivo || 'Participante'}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  toast('📥 Registro descargado correctamente', 'success');
}

// ════════════════════════════════════════════════════════════
// SISTEMA DE NIVELES
// ════════════════════════════════════════════════════════════
const NIVELES = [
  { nombre: 'Novato Vial',      badge: '🚦', xpMin: 0,   xpMax: 100,  desc: 'Comenzando el aprendizaje vial' },
  { nombre: 'Aprendiz Vial',    badge: '🚶', xpMin: 100, xpMax: 250,  desc: 'Ya conoces las señales básicas' },
  { nombre: 'Peatón Seguro',    badge: '🦺', xpMin: 250, xpMax: 450,  desc: 'Sabes moverte con seguridad' },
  { nombre: 'Conductor Hábil',  badge: '🚗', xpMin: 450, xpMax: 700,  desc: 'Dominas las normas de tránsito' },
  { nombre: 'Experto Vial',     badge: '🏅', xpMin: 700, xpMax: 1000, desc: 'Conoces la Ley 431 a profundidad' },
  { nombre: 'Guardián Vial',    badge: '🛡️', xpMin: 1000, xpMax: 9999, desc: '¡Campeón de la educación vial!' }
];
function getCurrentLevel(xp) {
  let nivel = NIVELES[0];
  for (let i = NIVELES.length - 1; i >= 0; i--) {
    if (xp >= NIVELES[i].xpMin) { nivel = NIVELES[i]; break; }
  }
  return nivel;
}

// ════════════════════════════════════════════════════════════
// LOGROS
// ════════════════════════════════════════════════════════════
const LOGROS_DEF = {
  'logro-bienvenido':    { icon: '👋', title: '¡Bienvenido!',             desc: 'Seleccionaste tu perfil de edad.',                    xp: 20 },
  'logro-senales':       { icon: '🚦', title: 'Maestro de Señales',       desc: 'Completaste el módulo de señales.',                   xp: 50 },
  'logro-normas':        { icon: '📋', title: 'Conoce las Normas',        desc: 'Completaste el módulo de normas viales.',             xp: 50 },
  'logro-ley431':        { icon: '⚖️', title: 'Experto en Ley 431',      desc: 'Completaste el módulo de la Ley 431.',                xp: 50 },
  'logro-primerquiz':    { icon: '🎯', title: 'Primer Examen',            desc: 'Completaste tu primer quiz.',                         xp: 30 },
  'logro-quiz100':       { icon: '💯', title: '¡Perfección!',             desc: 'Sacaste 100% en un quiz.',                            xp: 100 },
  'logro-escenarios':    { icon: '🚗', title: 'Decisiones Inteligentes',  desc: 'Completaste todos los escenarios.',                   xp: 70 },
  'logro-guardian':      { icon: '🛡️', title: '¡Guardián Vial!',        desc: '¡Desbloqueaste todos los logros!',                    xp: 200 },
  'logro-velocista':     { icon: '🏎️', title: 'Velocista del Quiz',      desc: 'Completaste 3 quizzes diferentes.',                   xp: 40 },
  'logro-tolerancia':    { icon: '🧊', title: 'Tolerancia Cero',          desc: 'Tomaste la decisión correcta ante el conductor ebrio.',xp: 25 },
  'logro-casco':         { icon: '⛑️', title: 'Seguridad Primero',       desc: 'Tomaste la decisión correcta sobre el casco de moto.', xp: 20 },
  'logro-quiz-inter':    { icon: '🌟', title: 'Nivel Medio Superado',     desc: 'Completaste el quiz intermedio con ≥ 80%.',            xp: 40 },
  'logro-quiz-avanc':    { icon: '🔥', title: 'Nivel Experto Superado',   desc: 'Completaste el quiz avanzado con ≥ 70%.',              xp: 60 },
  'logro-madrugador':    { icon: '🌙', title: 'Conductor Responsable',    desc: 'Tomaste la decisión correcta ante el sueño al volante.',xp: 25 },
  'logro-tres-modulos':  { icon: '🎓', title: 'Estudiante Completo',      desc: 'Completaste los 3 módulos de aprendizaje.',            xp: 75 },
  'logro-quiz-completo': { icon: '🏆', title: '¡Reto Máximo!',           desc: 'Completaste el quiz completo de 30 preguntas.',        xp: 80 }
};

// ════════════════════════════════════════════════════════════
// ESTADO DEL USUARIO
// ════════════════════════════════════════════════════════════
let estado = {
  xp: 0,
  nivel: 0,
  perfil: null,
  logros: {},
  mejoresScores: {},
  escenariosCompletados: new Set(),
  modulosCompletados: new Set(),
  quizzesCompletados: 0
};

function guardarEstado() {
  const toSave = {
    ...estado,
    escenariosCompletados: [...estado.escenariosCompletados],
    modulosCompletados: [...estado.modulosCompletados]
  };
  try { localStorage.setItem('vialnic_estado', JSON.stringify(toSave)); } catch(e) {}
}

function cargarEstado() {
  try {
    const saved = localStorage.getItem('vialnic_estado');
    if (saved) {
      const data = JSON.parse(saved);
      estado = {
        ...data,
        escenariosCompletados: new Set(data.escenariosCompletados || []),
        modulosCompletados: new Set(data.modulosCompletados || [])
      };
    }
  } catch(e) {}
}

// ════════════════════════════════════════════════════════════
// INICIALIZACIÓN
// ════════════════════════════════════════════════════════════
// Garantiza scroll al tope incluso después de la restauración del navegador
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

document.addEventListener('DOMContentLoaded', () => {
  // Siempre iniciar desde el tope de la página
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }

  cargarEstado();
  initLoadingScreen();
  initNavbar();
  initHero();
  initModulos();
  initAccordion();
  initQuizSection();
  initEscenarios();
  initEstadisticas();
  initLogros();
  actualizarUI();
  inicializarNombre();
  initNombreModal();
  initSectionTabs();
});

// ── Modal de Nombre ────────────────────────────────────────
function initNombreModal() {
  const btnGuardar = document.getElementById('btnGuardarNombre');
  const btnSaltar  = document.getElementById('btnSaltarNombre');
  const input      = document.getElementById('inputNombre');

  if (btnGuardar) btnGuardar.addEventListener('click', guardarNombreModal);
  if (btnSaltar)  btnSaltar.addEventListener('click', () => {
    registroSesion.nombre = 'Anónimo';
    cerrarModal('nombreModal');
  });
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') guardarNombreModal();
    });
    // Restaurar nombre si ya existe
    const guardado = localStorage.getItem('vialnic_nombre');
    if (guardado) input.value = guardado;
  }

  // Botón de descarga en certificado
  const btnDesc = document.getElementById('btnDescargarRegistro');
  if (btnDesc) btnDesc.addEventListener('click', descargarRegistroTXT);
}

// ── Loading Screen ─────────────────────────────────────────
function initLoadingScreen() {
  const screen = document.getElementById('loadingScreen');
  const dots = screen.querySelectorAll('.tl-dot');
  let i = 0;
  const cycle = setInterval(() => {
    dots.forEach(d => d.classList.remove('active'));
    dots[i % 3].classList.add('active');
    i++;
  }, 350);

  setTimeout(() => {
    clearInterval(cycle);
    screen.classList.add('hide');
    // Show section tabs only after loading screen fades out
    const tabsEl = document.getElementById('sectionTabs');
    if (tabsEl) tabsEl.classList.add('tabs-ready');
    setTimeout(() => screen.remove(), 600);
    animateHeroTrafficLight();
  }, 2200);
}

// ── Semáforo hero animado ──────────────────────────────────
function animateHeroTrafficLight() {
  const red   = document.getElementById('shRed');
  const yel   = document.getElementById('shYellow');
  const grn   = document.getElementById('shGreen');
  if (!red) return;
  let fase = 0;
  function tick() {
    red.classList.remove('active');
    yel.classList.remove('active');
    grn.classList.remove('active');
    if (fase === 0) { red.classList.add('active');    setTimeout(tick, 2500); }
    else if(fase===1){ yel.classList.add('active');   setTimeout(tick, 1000); }
    else              { grn.classList.add('active');   setTimeout(tick, 3000); }
    fase = (fase + 1) % 3;
  }
  tick();
}

// ── Navbar ─────────────────────────────────────────────────
function initNavbar() {
  const toggle = document.getElementById('menuToggle');
  const links  = document.getElementById('navLinks');
  const nav    = document.getElementById('globalNav');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      links.classList.remove('open');
      toggle.classList.remove('active');
      const targetId = a.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        setTimeout(() => {
          const navH = getNavHeight();
          const top = target.getBoundingClientRect().top + window.pageYOffset - navH - 8;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 150);
      }
    });
  });

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,0.4)'
      : '0 2px 16px rgba(0,0,0,0.25)';
  });

  // Close banner
  document.getElementById('bannerClose').addEventListener('click', () => {
    document.querySelector('.alert-banner').style.display = 'none';
  });
}

// ── Hero: Selección de perfil ──────────────────────────────
function initHero() {
  // Setea --road-w una sola vez para que el keyframe use un valor fijo (no calc en cada frame)
  const road = document.querySelector('.hero-bg-road');
  if (road) {
    const w = road.offsetWidth;
    document.documentElement.style.setProperty('--road-w', (w + 150) + 'px');
  }

  const cards = document.querySelectorAll('.profile-card');
  const cta   = document.getElementById('heroCta');
  const greeting = document.getElementById('ctaGreeting');

  const msgs = {
    ninos:        '👦 ¡Hola! Aprenderás de forma divertida sobre las señales y normas de tránsito.',
    adolescentes: '🧑 ¡Genial! Descubrirás las leyes que rigen el tránsito y cómo mantenerte seguro.',
    adultos:      '👨 Bienvenido. Profundizarás en la Ley 431 y las estadísticas viales de Nicaragua.'
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const age = card.dataset.age;
      estado.perfil = age;
      greeting.textContent = msgs[age];
      cta.style.display = 'block';
      guardarEstado();
      desbloquearLogro('logro-bienvenido');
      toast('✅ Perfil seleccionado. ¡Empecemos!', 'success');
    });
  });

  // Restore profile
  if (estado.perfil) {
    const saved = document.querySelector(`[data-age="${estado.perfil}"]`);
    if (saved) {
      saved.classList.add('active');
      greeting.textContent = msgs[estado.perfil];
      cta.style.display = 'block';
    }
  }
}

// ── Módulos / Tabs ─────────────────────────────────────────
function initModulos() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tab = document.getElementById('tab-' + btn.dataset.tab);
      if (tab) tab.classList.add('active');

      // Scroll to top of #aprende so modulos-tabs sticky bar is visible
      const isMobile  = isMobileView();
      const aprendeEl = document.getElementById('aprende');
      if (aprendeEl) {
        const navH         = getNavHeight();
        const sectionTabsH = isMobile ? 0 : 52;
        const top = aprendeEl.getBoundingClientRect().top + window.pageYOffset - navH - sectionTabsH;
        window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
      }
    });
  });

  // Flip cards (señales)
  document.querySelectorAll('.senal-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  // Complete module buttons
  document.querySelectorAll('.complete-module').forEach(btn => {
    btn.addEventListener('click', () => {
      const mod = btn.dataset.module;
      if (estado.modulosCompletados.has(mod)) {
        toast('📚 Ya completaste este módulo.', 'info');
        return;
      }
      estado.modulosCompletados.add(mod);
      guardarEstado();

      ganarXP(50);
      toast(`📚 ¡Módulo completado! +50 XP`, 'xp');
      registrarModulo(mod);

      const logroMap = { senales: 'logro-senales', normas: 'logro-normas', ley431: 'logro-ley431' };
      if (logroMap[mod]) desbloquearLogro(logroMap[mod]);

      btn.textContent = '✅ Módulo completado';
      btn.disabled = true;
      btn.style.background = 'var(--green2)';

      // Check all 3 modules done
      if (estado.modulosCompletados.size >= 3) {
        setTimeout(() => toast('🌟 ¡Completaste todos los módulos!', 'success'), 800);
        desbloquearLogro('logro-tres-modulos');
      }
    });

    // Restore state
    if (estado.modulosCompletados.has(btn.dataset.module)) {
      btn.textContent = '✅ Módulo completado';
      btn.disabled = true;
      btn.style.background = 'var(--green2)';
    }
  });

  // ── Next / Prev module navigation buttons ─────────────────
  document.querySelectorAll('.btn-modulo-next, .btn-modulo-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextTab  = btn.dataset.nextTab;
      const prevTab  = btn.dataset.prevTab;
      const nextStab = btn.dataset.nextStab;

      if (nextTab || prevTab) {
        // Switch inner sub-tab (Señales / Normas / Ley 431)
        const targetTabId = nextTab || prevTab;
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const targetBtn     = document.querySelector(`.tab-btn[data-tab="${targetTabId}"]`);
        const targetContent = document.getElementById('tab-' + targetTabId);
        if (targetBtn)     targetBtn.classList.add('active');
        if (targetContent) targetContent.classList.add('active');
        // Scroll to top of #aprende so modulos-tabs sticky bar is visible
        const aprendeEl2   = document.getElementById('aprende');
        if (aprendeEl2) {
          const navH2        = getNavHeight();
          const isMobile2    = isMobileView();
          const sTabsH2      = isMobile2 ? 0 : 52;
          const top2 = aprendeEl2.getBoundingClientRect().top + window.pageYOffset - navH2 - sTabsH2;
          window.scrollTo({ top: Math.max(0, top2), behavior: 'instant' });
        }
      } else if (nextStab) {
        // Switch main section tab (e.g. go to Quiz)
        if (typeof activateTab === 'function') activateTab(nextStab, true);
      }
    });
  });
}

// ── Accordion (Normas) ─────────────────────────────────────
function initAccordion() {
  document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.acc-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Quiz Section ───────────────────────────────────────────
function initQuizSection() {
  // Restore best scores
  Object.keys(estado.mejoresScores).forEach(cat => {
    const el = document.getElementById(`best-${cat}`);
    if (el) el.textContent = `Mejor: ${estado.mejoresScores[cat]}%`;
  });
}

// ── QUIZ ENGINE ─────────────────────────────────────────────
let quizState = {};

window.startQuiz = function(cat) {
  const preguntas = cat === 'completo'
    ? [...PREGUNTAS.basico, ...PREGUNTAS.intermedio, ...PREGUNTAS.avanzado].sort(() => Math.random() - 0.5).slice(0, 30)
    : [...PREGUNTAS[cat]].sort(() => Math.random() - 0.5);

  quizState = {
    cat,
    preguntas,
    idx: 0,
    score: 0,
    totalPts: preguntas.reduce((a, p) => a + p.pts, 0),
    earned: 0,
    answered: false,
    timer: null
  };

  document.getElementById('qmLevel').textContent = cap(cat);
  renderPregunta();
  abrirModal('quizModal');
};

function renderPregunta() {
  const { preguntas, idx } = quizState;
  const p = preguntas[idx];

  document.getElementById('qmCounter').textContent = `${idx + 1} / ${preguntas.length}`;
  document.getElementById('quizProgressFill').style.width = `${(idx / preguntas.length) * 100}%`;
  document.getElementById('quizQuestion').textContent = p.q;
  document.getElementById('quizExplanation').style.display = 'none';
  document.getElementById('quizNextBtn').style.display = 'none';
  document.getElementById('quizScore').textContent = quizState.earned;
  quizState.answered = false;

  const letters = ['A', 'B', 'C', 'D'];
  const optsCont = document.getElementById('quizOptions');
  optsCont.innerHTML = '';
  p.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.addEventListener('click', () => responderQuiz(i, p));
    optsCont.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(quizState.timer);
  let t = 30;
  const el = document.getElementById('qmTimer');
  el.textContent = t;
  el.className = 'qm-timer';
  quizState.timer = setInterval(() => {
    t--;
    el.textContent = t;
    if (t <= 10) el.classList.add('urgent');
    if (t <= 0) {
      clearInterval(quizState.timer);
      if (!quizState.answered) responderQuiz(-1, quizState.preguntas[quizState.idx]);
    }
  }, 1000);
}

function responderQuiz(selIdx, p) {
  if (quizState.answered) return;
  quizState.answered = true;
  clearInterval(quizState.timer);

  const btns = document.querySelectorAll('.quiz-option');
  btns.forEach(b => b.classList.add('disabled'));

  const correcto = selIdx === p.ans;
  if (selIdx >= 0) btns[selIdx].classList.add(correcto ? 'correct' : 'wrong');
  btns[p.ans].classList.add('correct');

  if (correcto) {
    quizState.score++;
    quizState.earned += p.pts;
    toast(`✨ ¡Correcto! +${p.pts} pts`, 'xp');
  } else {
    toast('❌ Respuesta incorrecta', 'error');
  }

  document.getElementById('quizScore').textContent = quizState.earned;

  const expEl = document.getElementById('quizExplanation');
  expEl.textContent = p.exp;
  expEl.style.display = 'block';

  const nextBtn = document.getElementById('quizNextBtn');
  const isLast = quizState.idx === quizState.preguntas.length - 1;
  nextBtn.textContent = isLast ? 'Ver resultado 🏆' : 'Siguiente →';
  nextBtn.style.display = 'block';
}

document.getElementById('quizNextBtn').addEventListener('click', () => {
  if (quizState.idx < quizState.preguntas.length - 1) {
    quizState.idx++;
    renderPregunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  clearInterval(quizState.timer);
  const { cat, preguntas, score, earned } = quizState;
  const pct = Math.round((score / preguntas.length) * 100);

  // Save best
  if (!estado.mejoresScores[cat] || pct > parseInt(estado.mejoresScores[cat])) {
    estado.mejoresScores[cat] = pct;
    const el = document.getElementById(`best-${cat}`);
    if (el) el.textContent = `Mejor: ${pct}%`;
  }

  // Give XP
  ganarXP(earned);
  estado.quizzesCompletados++;
  guardarEstado();

  // Registrar en el log de participante
  registrarQuiz(cat, score, preguntas.length, pct, earned);

  // Achievements
  if (estado.quizzesCompletados === 1) desbloquearLogro('logro-primerquiz');
  if (pct === 100) desbloquearLogro('logro-quiz100');
  if (estado.quizzesCompletados >= 3) desbloquearLogro('logro-velocista');
  if (cat === 'intermedio' && pct >= 80) desbloquearLogro('logro-quiz-inter');
  if (cat === 'avanzado' && pct >= 70) desbloquearLogro('logro-quiz-avanc');
  if (cat === 'completo') desbloquearLogro('logro-quiz-completo');

  let grade, gradeClass, emoji;
  if (pct >= 90) { grade = '¡Excelente! Nivel A'; gradeClass = 'grade-a'; emoji = '🏆'; }
  else if (pct >= 70) { grade = '¡Muy Bien! Nivel B'; gradeClass = 'grade-b'; emoji = '🎉'; }
  else if (pct >= 50) { grade = 'Regular. Nivel C'; gradeClass = 'grade-c'; emoji = '📚'; }
  else { grade = 'Necesitas estudiar más. Nivel D'; gradeClass = 'grade-d'; emoji = '💪'; }

  document.getElementById('quizBody').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-icon">${emoji}</div>
      <h2>¡Quiz completado!</h2>
      <p>${score} de ${preguntas.length} respuestas correctas</p>
      <div class="quiz-result-score">${pct}<span>%</span></div>
      <span class="quiz-result-grade ${gradeClass}">${grade}</span>
      <p style="font-size:0.9rem;color:#555;margin-top:12px">
        💰 Ganaste <strong>${earned} XP</strong> en este quiz
      </p>
    </div>
  `;
  document.getElementById('quizProgressFill').style.width = '100%';
  document.getElementById('quizExplanation').style.display = 'none';
  document.getElementById('quizNextBtn').textContent = '✕ Cerrar';
  document.getElementById('quizNextBtn').style.display = 'block';
  document.getElementById('quizNextBtn').onclick = () => cerrarModal('quizModal');
  document.getElementById('qmTimer').textContent = '🏁';
  document.getElementById('qmTimer').className = 'qm-timer';
}

// Close quiz
document.getElementById('qmClose').addEventListener('click', () => {
  clearInterval(quizState.timer);
  cerrarModal('quizModal');
});

// ── Escenarios ─────────────────────────────────────────────
let escActivo = 0;
let escCompletadosCount = 0;
let estadisticasAnimated = false;
let logrosAnimated = false;

function initEscenarios() {
  document.getElementById('escClose').addEventListener('click', () => cerrarModal('escModal'));
  document.getElementById('escModal').addEventListener('click', e => {
    if (e.target === document.getElementById('escModal')) cerrarModal('escModal');
  });
}

window.openEscenario = function(idx) {
  escActivo = idx;
  const esc = ESCENARIOS[idx];
  document.getElementById('escScene').textContent = esc.scene;
  document.getElementById('escTitle').textContent = esc.title;
  document.getElementById('escDesc').textContent  = esc.desc;
  document.getElementById('escResult').style.display = 'none';

  const optsCont = document.getElementById('escOptions');
  optsCont.innerHTML = '';
  esc.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'esc-option';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => responderEscenario(i, esc));
    optsCont.appendChild(btn);
  });

  abrirModal('escModal');
};

function responderEscenario(idx, esc) {
  const btns = document.querySelectorAll('.esc-option');
  btns.forEach(b => b.classList.add('disabled'));

  const correcto = esc.opts[idx].correct;
  btns[idx].classList.add(correcto ? 'correct' : 'wrong');

  // Highlight correct
  esc.opts.forEach((opt, i) => { if (opt.correct) btns[i].classList.add('correct'); });

  const res = correcto ? esc.resultOk : esc.resultBad;
  const resEl = document.getElementById('escResult');
  document.getElementById('escResultIcon').textContent  = res.icon;
  document.getElementById('escResultTitle').textContent = res.title;
  document.getElementById('escResultText').textContent  = res.text;
  document.getElementById('escResultLey').textContent   = esc.ley;
  resEl.style.display = 'block';

  if (correcto) {
    ganarXP(esc.pts);
    toast(`✅ ¡Decisión correcta! +${esc.pts} XP`, 'xp');
  } else {
    toast('💡 Aprende de esta situación', 'info');
  }

  // Logros por escenario específico
  if (correcto) {
    if (escActivo === 2) desbloquearLogro('logro-casco');
    if (escActivo === 3) desbloquearLogro('logro-tolerancia');
    if (escActivo === 9) desbloquearLogro('logro-madrugador');
  }

  // Registrar en el log de participante
  registrarEscenario(esc.title, correcto, esc.pts);

  // Track completion
  if (!estado.escenariosCompletados.has(escActivo)) {
    estado.escenariosCompletados.add(escActivo);
    escCompletadosCount = estado.escenariosCompletados.size;
    guardarEstado();
    if (escCompletadosCount >= ESCENARIOS.length) {
      desbloquearLogro('logro-escenarios');
    }
  }

  const nextIdx = escActivo + 1;
  const nextBtn = document.getElementById('escNextBtn');
  if (nextIdx < ESCENARIOS.length) {
    nextBtn.textContent = 'Siguiente escenario →';
    nextBtn.onclick = () => { cerrarModal('escModal'); setTimeout(() => openEscenario(nextIdx), 300); };
  } else {
    nextBtn.textContent = '🏁 Terminar escenarios';
    nextBtn.onclick = () => cerrarModal('escModal');
  }
}

// ── Estadísticas (contadores animados) ─────────────────────
function initEstadisticas() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        animateBars();
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const section = document.getElementById('estadisticas');
  if (section) observer.observe(section);
}

function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target).toLocaleString('es-NI');
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  });
}

function animateBars() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    setTimeout(() => bar.classList.add('animated'), 100);
  });
}

// ── Logros ─────────────────────────────────────────────────
function initLogros() {
  // Restore unlocked achievements
  Object.keys(estado.logros).forEach(id => {
    if (estado.logros[id]) marcarLogro(id);
  });
  actualizarNivelCard();

  // Certificate button
  document.getElementById('fabCert').addEventListener('click', abrirCertificado);
  if (estado.xp > 0) document.getElementById('fabCert').style.display = 'flex';
}

function desbloquearLogro(id) {
  if (estado.logros[id]) return;
  estado.logros[id] = true;
  guardarEstado();
  marcarLogro(id);

  const def = LOGROS_DEF[id];
  if (!def) return;

  ganarXP(def.xp);

  // Show achievement modal
  setTimeout(() => {
    document.getElementById('logroModalIcon').textContent  = def.icon;
    document.getElementById('logroModalTitle').textContent = def.title;
    document.getElementById('logroModalDesc').textContent  = def.desc;
    document.getElementById('logroXpGained').textContent   = `+${def.xp} XP`;
    lanzarConfetti();
    abrirModal('logroModal');
  }, 600);

  // Check guardian
  const totalLogros = Object.keys(LOGROS_DEF).filter(k => k !== 'logro-guardian').length;
  const desbloqueados = Object.keys(estado.logros).filter(k => estado.logros[k] && k !== 'logro-guardian').length;
  if (desbloqueados >= totalLogros) setTimeout(() => desbloquearLogro('logro-guardian'), 2000);
}

function marcarLogro(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('locked');
    el.classList.add('unlocked');
  }
}

document.getElementById('logroModalClose').addEventListener('click', () => cerrarModal('logroModal'));

// ── XP & Niveles ───────────────────────────────────────────
function ganarXP(xp) {
  estado.xp += xp;
  guardarEstado();
  actualizarUI();
  document.getElementById('fabCert').style.display = 'flex';
}

function actualizarUI() {
  const xp = estado.xp;
  let nivelActual = NIVELES[0];
  for (let i = NIVELES.length - 1; i >= 0; i--) {
    if (xp >= NIVELES[i].xpMin) { nivelActual = NIVELES[i]; estado.nivel = i; break; }
  }

  // Navbar
  document.getElementById('navLevel').textContent = nivelActual.nombre;
  document.getElementById('navPts').textContent   = `${xp} XP`;
  const pct = Math.min(((xp - nivelActual.xpMin) / (nivelActual.xpMax - nivelActual.xpMin)) * 100, 100);
  document.getElementById('xpFill').style.width = `${pct}%`;

  // Nivel card in logros
  actualizarNivelCard();
}

function actualizarNivelCard() {
  const xp = estado.xp;
  const nivelActual = getCurrentLevel(xp);
  const pct = Math.min(((xp - nivelActual.xpMin) / (nivelActual.xpMax - nivelActual.xpMin)) * 100, 100);

  const badge = document.getElementById('nivelBadge');
  const nom   = document.getElementById('nivelNombre');
  const desc  = document.getElementById('nivelDesc');
  const xpAct = document.getElementById('xpActual');
  const xpNec = document.getElementById('xpNecesario');
  const bar   = document.getElementById('nivelBarFill');

  if (badge) badge.textContent = nivelActual.badge;
  if (nom)   nom.textContent   = nivelActual.nombre;
  if (desc)  desc.textContent  = nivelActual.desc;
  if (xpAct) xpAct.textContent = xp;
  if (xpNec) xpNec.textContent = nivelActual.xpMax;
  if (bar)   bar.style.width   = `${pct}%`;
}

// ── Certificado ────────────────────────────────────────────
function abrirCertificado() {
  const xp = estado.xp;
  const nivelActual = getCurrentLevel(xp);

  const nombre = (registroSesion && registroSesion.nombre && registroSesion.nombre !== 'Anónimo')
    ? registroSesion.nombre
    : (localStorage.getItem('vialnic_nombre') || 'Participante');
  document.getElementById('certNombre').textContent  = nombre;
  document.getElementById('certXP').textContent      = xp;
  document.getElementById('certNivel').textContent   = nivelActual.badge + ' ' + nivelActual.nombre;
  document.getElementById('certLogros').textContent  = Object.keys(estado.logros).filter(k => estado.logros[k]).length;
  document.getElementById('certDate').textContent    = new Date().toLocaleDateString('es-NI', { year:'numeric', month:'long', day:'numeric' });
  abrirModal('certModal');
}

document.getElementById('certClose').addEventListener('click', () => cerrarModal('certModal'));

// ── Modal helpers ──────────────────────────────────────────
function abrirModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  if (isMobileView()) {
    // On iOS, position:fixed resets scroll to 0 — capture current position first
    const y = window.scrollY;
    document.documentElement.style.setProperty('--modal-scroll-y', `-${y}px`);
  }
  document.body.classList.add('modal-open');
}
function cerrarModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (isMobileView()) {
    // Restore scroll position that was frozen by position:fixed
    const y = parseInt(document.documentElement.style.getPropertyValue('--modal-scroll-y') || '0') * -1;
    document.documentElement.style.removeProperty('--modal-scroll-y');
    window.scrollTo({ top: y, behavior: 'instant' });
  }
}

// Close on overlay click
['quizModal','escModal','certModal','logroModal'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', e => { if (e.target === el) cerrarModal(id); });
});

// Nombre modal: no cierra con click fuera (es obligatorio rellenarlo)

// ── Toast notifications ────────────────────────────────────
function toast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.textContent = msg;
  container.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => {
    t.classList.remove('show');
    t.addEventListener('transitionend', () => t.remove(), { once: true });
  }, 3200);
}

// ── Confetti ───────────────────────────────────────────────
function lanzarConfetti() {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  container.innerHTML = '';
  const colors = ['#E63946','#FFD700','#2A9D8F','#1D6FA4','#F4A261','#27AE60'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.5}s;
      transform: rotate(${Math.random() * 360}deg);
    `;
    container.appendChild(piece);
  }
  setTimeout(() => { container.innerHTML = ''; }, 3000);
}

// ── Intersection Observer (estadísticas) ──────────────────
// Also for logros section
const logrosObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.logro-item').forEach((item, i) => {
        setTimeout(() => item.style.opacity = '1', i * 60);
      });
      logrosObs.disconnect();
    }
  });
}, { threshold: 0.1 });
const logrosSection = document.getElementById('logros');
if (logrosSection) logrosObs.observe(logrosSection);

// ── Utilities ──────────────────────────────────────────────
function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── Quick Nav Scrollspy ────────────────────────────────────
// ── Section Tabs (Dashboard navigation) ───────────────────
const SECTION_TAB_IDS = ['aprende', 'quiz-section', 'escenarios', 'estadisticas', 'logros'];

function getNavHeight() {
  return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
}
function isMobileView() {
  return window.innerWidth <= 768;
}
function scrollToElement(el, extraOffset = 0) {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - getNavHeight() - extraOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: isMobileView() ? 'instant' : 'smooth' });
}

function initSectionTabs() {
  const tabBtns = document.querySelectorAll('.stab-btn');
  if (!tabBtns.length) return;

  // Mark body so CSS suppresses old side-nav
  document.body.classList.add('tabs-active');

  // Add .main-section class to each section panel
  SECTION_TAB_IDS.forEach(id => {
    const sec = document.getElementById(id);
    if (sec) sec.classList.add('main-section');
  });

  // On page load/reload always start at 'aprende' so the hero is visible first.
  // Only honour a URL hash if someone shared a direct link to a specific section.
  let initialTab = 'aprende';
  const hashTab  = window.location.hash.replace('#', '');
  if (SECTION_TAB_IDS.includes(hashTab)) initialTab = hashTab;

  activateTab(initialTab, false);

  // Tab button clicks
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.target, true));
  });

  // Hero start button
  const heroBtn = document.getElementById('heroStartBtn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      activateTab('aprende', true);
      const tabs = document.getElementById('sectionTabs');
      if (tabs) {
        const navH = getNavHeight();
        window.scrollTo({ top: tabs.offsetTop - navH, behavior: 'smooth' });
      }
    });
  }

  // Navbar + side-nav links: intercept in capture phase to override old handlers
  document.querySelectorAll('.nav-links a, .sn-dot').forEach(el => {
    const href = el.getAttribute('href') || '';
    const targetId = href.replace('#', '') || el.dataset.section || '';
    if (!SECTION_TAB_IDS.includes(targetId)) return;
    el.addEventListener('click', e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('menuToggle').classList.remove('active');
      activateTab(targetId, true);
    }, true); // capture phase
  });

  // Any other anchor pointing at a section
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const targetId = a.getAttribute('href').replace('#', '');
    if (!SECTION_TAB_IDS.includes(targetId)) return;
    a.addEventListener('click', e => {
      e.preventDefault();
      activateTab(targetId, true);
    });
  });

  // Browser back/forward
  window.addEventListener('hashchange', () => {
    const hashId = window.location.hash.replace('#', '');
    if (SECTION_TAB_IDS.includes(hashId)) activateTab(hashId, false);
  });
}

function activateTab(targetId, animate) {
  const tabBtns = document.querySelectorAll('.stab-btn');

  // Update tab buttons
  tabBtns.forEach(btn => {
    const isActive = btn.dataset.target === targetId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  // Show/hide sections
  SECTION_TAB_IDS.forEach(id => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const isActive = id === targetId;
    sec.classList.toggle('active', isActive);

    // Lazy-fire animations when section is revealed for the first time
    if (isActive && id === 'estadisticas' && !estadisticasAnimated) {
      estadisticasAnimated = true;
      requestAnimationFrame(() => { animateCounters(); animateBars(); });
    }
    if (isActive && id === 'logros' && !logrosAnimated) {
      logrosAnimated = true;
      requestAnimationFrame(() => {
        document.querySelectorAll('.logro-item').forEach((item, i) => {
          setTimeout(() => { item.style.opacity = '1'; }, i * 60);
        });
      });
    }
  });

  // No persistimos el tab activo — no hash en URL ni localStorage,
  // así la página siempre arranca en el hero al recargar.

  // Scroll so the active section starts just below the fixed bars.
  if (animate) {
    const isMobile = isMobileView();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const navH = getNavHeight();
      // On desktop: section-tabs is fixed at top (52px), so offset navbar + tabbar.
      // On mobile: section-tabs is fixed at bottom, so only offset navbar.
      const tabBarH = isMobile ? 0 : 52;
      const top = targetSection.getBoundingClientRect().top + window.pageYOffset - navH - tabBarH;
      window.scrollTo({ top: Math.max(0, top), behavior: isMobile ? 'instant' : 'smooth' });
    }
  }
}

// ── Side Nav Scrollspy ─────────────────────────────────────
function initSideNavScrollspy() {
  const dots = document.querySelectorAll('.sn-dot');
  const sideNav = document.getElementById('sideNav');
  if (!dots.length || !sideNav) return;

  const sectionIds = ['aprende', 'quiz-section', 'escenarios', 'estadisticas', 'logros'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const hero = document.getElementById('hero');

  // Show/hide side nav based on hero visibility
  if (hero) {
    const showObs = new IntersectionObserver((entries) => {
      sideNav.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0.1 });
    showObs.observe(hero);
  }

  // Highlight active section dot
  const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach(dot => dot.classList.toggle('active', dot.dataset.section === id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(sec => activeObs.observe(sec));

  // Click to scroll with offset
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(dot.dataset.section);
      if (target) {
        const navH = getNavHeight();
        const top = target.getBoundingClientRect().top + window.pageYOffset - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Keyboard shortcuts ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['quizModal','escModal','certModal','logroModal','nombreModal'].forEach(cerrarModal);
    clearInterval(quizState.timer);
  }
});

// ── Smooth scroll for old browsers (excluding navbar links handled separately) ──
document.querySelectorAll('a[href^="#"]:not(.nav-links a)').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = getNavHeight();
      const top = target.getBoundingClientRect().top + window.pageYOffset - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
