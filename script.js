const timeline = document.getElementById('timeline');
const yearDisplay = document.getElementById('year-display');
const cardContainer = document.getElementById('card-container');
const themeToggle = document.getElementById('theme-toggle');

// Diccionario de cards para años específicos con imágenes
const cardsData = {
    1969: { text: "1ra Conexion entre 2 Equipos. Nace ARPANET", img: "https://www.fib.upc.edu/retro-informatica/historia/internet/mainColumnParagraphs/00/image/map.jpg" },
    1971: { text: "Primer Email y Primer Virus.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4soH-k48CqlI9JdZNypmurghEGRnsF2rBJA&s" },
    1974: { text: "Bob Khan y Vint Cerf usan por primera vez la palabra Internet en una transmisión de control de protocolo.", img: "https://definicion.de/wp-content/uploads/2008/05/WWW-1.jpg" },
    1976: { text: "Se desarrolla Ethernet, los primeros cables coaxiales que permitirían transportar la información más rápida.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15429820/image/4a75b7e8c3c7c93ae704b449d790fcc3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0b35e62eaa54c9698b5923163546aefb2faeeb91124a6e4ad2172a9c95e0c730" },
    1978: { text: "Nace el SPAM. Se envió un mensaje no solicitado a más de 600 usuarios conectados a ARPANET.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15429850/image/d02850db635c580c5fcee78a1c4b3240?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=09d77573a7a22c3c24ee8cd1305d6b15226552ff9768a3e7b23d0545692054e4" },
    1982: { text: "Nace el primer emoticon, aunque Kevin Mackenzie los había presentado, fue Scott Fahiman quien propuso utilizarlos después de hacer una broma :-).", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15429860/image/a03ae92ecf92071e3ed3a1f3993f3187?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1875b446d16cdc2b9e4f12c4c97ec80db13f3f9acd5cd28f81a8e979a1b5f753" },
    1983: { text: "Se introducen los protocolos TCP/IP de forma obligatoria a todos los ordenadores conectados a ARPANET.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15429884/image/dba5a7d180e7211d5deebb378bbca8cd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7786eb623da21b87fb79e7ffecef575a3b5a96b7d157f7ba988c857a0232d8d8" },
    1991: { text: "Tim Berners Lee, de la CERN crea la primera página web. Tenía como objetivo explicar 10 que era la World Wide Web (es un sistema de documentos de hipertexto vinculados entre si en Internet accesibles a través de navegadores).", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15429911/image/52f969e5f3675417ef5c48c7b7500ea7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=03d1d704c528d0fc7cdc0270e72ff515d1686323f45f174847dbdff5cb500216" },
    1994: { text: "Se crea y lanza el buscador Lycos, asimismo, también se funda Yahoo.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15429996/image/f943032936e9a8654bb9ee2204d3d72c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=506b602dfcc8935a0ec117ee41fb3b694e6c155c7b7e61d9089f92193b852b66" },
    1995: { text: "Microsoft lanza Internet Explorer. Netscape desarrolla los SSL que permitirían transacciones de capital seguras.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430031/image/e65f7516b762e7d70224d29cfcf7d265?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a319577b7e9576e1887f78ba8a9bf4345cdc3f4af009a3464cee28168f503042" },
    1998: { text: "Nace Google! Y revoluciona la búsqueda de información.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430050/image/35f7207d757fb4ec0fdcc4dc460a6085?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4246aa6454841f86af3d2f635bba8da802df28f42ff657027056bc848393f1ee" },
    1999: { text: "Para este año, ya habia aproximadamente 1 millón de usuarios de internet en el mundo.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430069/image/fa1493297bb7821aa8044b8463376997?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=27133e3d359b6d257b80d0918aab938eabac2808002df3125f201be12ce04daa" },
    2000: { text: "EI virus ILOVEYOU, fue el primer virus masivo y afecto a cerca de 50 millones de usuarios.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430079/image/1517771bd7a398ae4c0cae5ba85558cd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1ec7e72b30855a2eb07e6684621e58261577667ed625bbdadbbbb49d0e2b1ef9" },
    2001: { text: "Se lanza Wikipedia, la mayor enciclopedia colectiva.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430169/image/90b6712d3913c9112d43d22bffbdb7dc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=96848cfed9f528e7aed51b51b9e604e3abdaee0fc4e9778727159dbcbfec91c4" },
    2003: { text: "Se lanza al mercado Safari, Myspace, Linkedin, Skype, Wordpress, iTunes Store.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430192/image/58c38eca07c252eb1c71c1c68667e3ab?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=30372ffd4990c14194fbfb0d2590e3ae75e2655fb7754c35e3c32ada9ead9162" },
    2004: { text: "Nacen Facebook y Gmail", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgFTg6z_fiGrwybAm7OCb5raab852XiSS1g&s" },
    2005: { text: "Lanzamiento de YouTube.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430249/image/209d1ec50eb1f134e8d84c7eb7407e33?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9a5c546ee70f81b454321f487ce6c139b9f127c9953e88d885add41e7669f572" },
    2008: { text: "Se lanza Chrome de Google. Nace Groupon, la primera web de compra colectiva.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430183/image/602d0c2113824af5c4c4dd2240b0d195?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=097d709686fc240c5ba2c7b7254a11486751b9f11f9a25c8382cc60eab9d9b07" },
    2012: { text: "EI uso de la nube se popularizo y surgieron una serie de aplicaciones y usos para esta tecnología, crecieron la cantidad de usuarios de la nube.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430473/image/50266281239b4dd91f5bcfb688d055e6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=79524d08dcb68dfe533f211e25efc872721ddaf28fb8bafbccfee8d503158373" },
    2013: { text: "Se comienza a pagar y hacer transacciones bancarias online.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430493/image/a3d59f5c32f96089db6430228ca24f27?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2e6d3e24bcd5747d954d90c7d769d3f5634d8afa487ae3079b90dd67152f0c8c" },
    2017: { text: "Surgieron tecnologías de autentificación por medio del rostro y aunque sea una tecnología para teléfonos móviles, empezaron a surgir páginas web que soportan este método de autentificación.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430516/image/828ca04d6e861e10dc8d2b909f7a4b96?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7ec513086ffa6eea27b4ceb02c40c6f15ee003444b32baefe72fb3fd682490d0" },
    2020: { text: "Internet y la web han avanzado a pasos acelerados y han innovado todo lo que conocemos como tecnología. Se estima que para 2030 ya se contará con 2500 millones de usuarios en la red.", img: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15430546/image/a7e41d0309c9b975c13d50bc8a9f8fcc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241122T114156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=476d928cbbe6c8d2adf4d8a07995b22941d77b72df731c52753c3f271f6efb6c" }
};

// Función para actualizar la visualización del año y la tarjeta
function updateCard() {
    const year = timeline.value;
    yearDisplay.textContent = year;

    // Limpiar las cards anteriores
    cardContainer.innerHTML = "";

    // Mostrar card si el año tiene un acontecimiento
    if (cardsData[year]) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>Año ${year}</h3>
            <p>${cardsData[year].text}</p>
            <img src="${cardsData[year].img}" alt="Imagen del año ${year}">
        `;
        cardContainer.appendChild(card);
    }
}

// Inicializar
updateCard();

// Cambiar el tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Actualizar la tarjeta cada vez que se mueve el slider
timeline.addEventListener('input', updateCard);
