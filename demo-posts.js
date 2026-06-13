// Artículos ficticios de muestra — se usan solo si Supabase no devuelve
// artículos publicados, para previsualizar el diseño del blog.
const DEMO_POSTS = [
  {
    id: 'demo-1',
    title: 'Lo único que puedes controlar',
    subtitle: 'Una relectura del Enquiridión de Epicteto para los días difíciles.',
    author: 'JA Sachz',
    discipline: 'Estoicismo',
    abstract: 'Epicteto lo dijo hace dos mil años y seguimos sin escucharlo: hay cosas que dependen de nosotros y cosas que no. Casi toda nuestra ansiedad viene de confundir las dos columnas.',
    read_time: '4 min lectura',
    published_at: '2026-06-12T10:00:00Z',
    cover_image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    content: `
      <p>Epicteto abre su <em>Enquiridión</em> con una frase que parece demasiado simple para cambiar nada: hay cosas que dependen de nosotros y cosas que no.</p>
      <p>Dependen de nosotros: nuestros juicios, nuestros deseos, nuestras reacciones. No dependen de nosotros: el cuerpo, la propiedad, la reputación, lo que piensan los demás, el resultado final de casi todo lo que nos importa.</p>
      <blockquote>No son las cosas las que nos perturban, sino el juicio que hacemos sobre ellas.</blockquote>
      <p>Esto no es resignación. Es una redirección de energía. Cuando dejamos de pelear por el resultado y empezamos a trabajar en la respuesta, algo se afloja.</p>
      <h2>La pregunta que sí importa</h2>
      <p>La pregunta que me ha servido más últimamente es simple: <strong>¿esto está dentro de mi círculo o fuera de él?</strong> Si está fuera, lo suelto, no porque no importe, sino porque sostenerlo no cambia nada.</p>
      <p>Si está dentro, entonces vale la pena toda la atención que tengo.</p>
    `
  },
  {
    id: 'demo-2',
    title: 'La fe no es certeza',
    subtitle: 'Sobre Job, el silencio de Dios y caminar sin todas las respuestas.',
    author: 'JA Sachz',
    discipline: 'Fe',
    abstract: 'Confundimos fe con tener todas las respuestas. Pero la fe que sostiene a alguien en una noche oscura no es un argumento ganado, es una decisión de seguir caminando.',
    read_time: '5 min lectura',
    published_at: '2026-06-08T10:00:00Z',
    cover_image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80',
    content: `
      <p>Crecí pensando que la fe era un tipo de conocimiento: si tenías suficiente fe, las dudas desaparecían.</p>
      <p>Con los años descubrí que es justo lo contrario. La fe no existe donde hay certeza — donde hay certeza no se necesita fe, se necesita un mapa.</p>
      <blockquote>La fe que sostiene a alguien en una noche oscura no es un argumento ganado, es una decisión de seguir caminando.</blockquote>
      <h2>Una presencia, no una explicación</h2>
      <p>Job no recibe una explicación. Job recibe una presencia. Y eso, de alguna manera, le basta.</p>
      <p>Tal vez la fe nunca fue un destino al que llegar, sino una forma de caminar mientras la niebla no se aclara.</p>
    `
  },
  {
    id: 'demo-3',
    title: 'La paz no es ausencia de ruido',
    subtitle: 'Lo que los estoicos y el Evangelio de Juan tienen en común.',
    author: 'JA Sachz',
    discipline: 'Paz',
    abstract: 'Podemos retirarnos a una montaña y seguir en guerra con nosotros mismos. La paz que vale la pena buscar no depende del lugar donde estás, depende de cómo estás.',
    read_time: '4 min lectura',
    published_at: '2026-06-03T10:00:00Z',
    cover_image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80',
    content: `
      <p>Es fácil pensar que la paz es un lugar: una cabaña, una playa vacía, un día sin notificaciones. Y sí, esos lugares ayudan.</p>
      <p>Pero también he estado en lugares perfectamente silenciosos peleando una guerra completa dentro de mi cabeza.</p>
      <blockquote>Te dejo la paz, mi paz os doy; no como el mundo la da.</blockquote>
      <h2>Un ancla, no la falta de tormenta</h2>
      <p>La paz del mundo es la ausencia de amenaza. La otra paz, la que se ofrece incluso en medio de la amenaza, es algo distinto: no la falta de tormenta, sino un ancla que la tormenta no puede mover.</p>
      <p>El ruido seguirá ahí. La pregunta es qué tan lejos llega antes de tocar algo que realmente importa.</p>
    `
  },
  {
    id: 'demo-4',
    title: 'Pensar despacio en un mundo que exige respuestas rápidas',
    subtitle: 'Una defensa de la filosofía como hábito diario, no como tema de examen.',
    author: 'JA Sachz',
    discipline: 'Filosofía',
    abstract: 'La filosofía no empieza en los libros. Empieza cuando te detienes a preguntar por qué crees lo que crees, antes de seguir actuando como si ya lo supieras.',
    read_time: '6 min lectura',
    published_at: '2026-05-28T10:00:00Z',
    cover_image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80',
    content: `
      <p>Vivimos rodeados de opiniones instantáneas. Cualquier evento del día llega ya con una conclusión adjunta, lista para repetirse.</p>
      <p>La filosofía, en cambio, es el arte de quedarse un momento más en la pregunta antes de saltar a la respuesta.</p>
      <h2>No se trata de saber más, sino de mirar mejor</h2>
      <p>No necesitamos memorizar a Sócrates para practicar esto. Basta con preguntarnos, de vez en cuando, por qué creemos lo que creemos — y estar dispuestos a no gustarnos la respuesta.</p>
      <p>Ese pequeño espacio, entre el estímulo y la reacción, es donde empieza a pasar algo parecido a pensar.</p>
    `
  }
];
