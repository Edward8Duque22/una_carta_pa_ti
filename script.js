const asunto = 'Asunto: Incomprensible';

    const texto = 'Hola Valentina quiero decirte algo,\n \nEn mi vida llegué a pensar que me permitiera darme una oportunidad más después de lo que me sucedió con aquella relación que tuve, en donde aprendí bastante y aún más, a ser muy minucioso y meticuloso como ahora lo soy. Entendí muchas cosas de las que no me arrepiento y puedo analizar que no hace falta estar tanto tiempo solo o quizá en otros términos, independizar al corazón para empezar, y cuando hablo de empezar no lo relaciono con conocer de cero, porque eso es lo que ya he venido haciendo todo este tiempo, de lo que hablo es de entender, comprender, dar significado y ser muy constante en lo más mínimo, que es en lo que más cuesta estar hoy en día.\n \nExisten palabras que no digo, y no es por pena o porque no las quiera decir, sino que no son del momento.\n \nMe siento bien contigo, y te quiero aclarar muchas cosas, así como tú lo quieres hacer conmigo, y no busco hacerte entender sino que tú misma vayas haciéndolo, que analices quién soy, que no te quedes con lo que ves sino que cada día en los momentos o espacios que compartas conmigo, detalles mi comportamiento, la forma en como soy contigo y así con todo lo demás.\n \nNo soy de apariencias no soy de ser otro, me gusta ser auténtico, ser yo es lo que busco, quizá muchas veces tenga comportamientos que te lleguen a hacer pensar “Y bueno, ¿Qué con el?”, sin embargo, esa es mi esencia, ese soy yo, un tipo loco algo serio, un tanto enojón pero con el alma de un niño pequeño que no busca nada más y nada menos que ser el mismo sin importar qué.\n \nEres un tipo de mujer que tienes esas cualidades tan singulares, que no cualquier mujer tiene, tu las conoces, tu sabes quien eres, y ahí es donde me centro. Y quisiera decir que me complementas pero no sé si son el término exacto para decirlo debido a que es muy amplio el significado.\n \nQuisiera un día desnudarte el alma y verlo como es, qué es lo que esconde, hacerle sentir cosas que no todo hombre hace sentir a una mujer con el estilo de ser que tienes, anhelaría besarle, hacerle sentir y hacerle el amor con mis palabras y acciones, que veas lo que quieres y deseabas, y que estes completa.\n \nAún hay tiempo, aún podemos progresar, pero quisiera arriesgarme un poco más, y quizá lo haga, pero el miedo sigue. Y te lo expreso con la mano en el corazón y con todo aquello que te he demostrado con el acto más puro que tengo, la sinceridad.\n \nCon cariño,\n \nEdward';
    let i = 0;
    let j = 0;
    const velocidad = 100; // Velocidad en milisegundos
    const cartaContent = document.getElementById('carta-content');
    const asuntoContent = document.getElementById('asunto');

    function maquinaDeEscribir(content, text, index) {
      if (index < text.length) {
        content.innerHTML += text.charAt(index) === '\\n' ? '<br>' : text.charAt(index);
        index++;
        setTimeout(() => maquinaDeEscribir(content, text, index), velocidad);
      }
    }

    // Iniciar la animación de la máquina de escribir
    maquinaDeEscribir(asuntoContent, asunto, i);
    setTimeout(() => maquinaDeEscribir(cartaContent, texto, j), asunto.length * velocidad);
