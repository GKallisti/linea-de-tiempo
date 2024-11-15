const timeline = document.getElementById('timeline');
const yearDisplay = document.getElementById('year-display');
const cardContainer = document.getElementById('card-container');
const themeToggle = document.getElementById('theme-toggle');

// Diccionario de cards para años específicos con imágenes
const cardsData = {
    1969: { text: "Acontecimiento de 1969.", img: "https://via.placeholder.com/200x300?text=1969" },
    1971: { text: "Acontecimiento de 1971.", img: "https://via.placeholder.com/200x300?text=1971" },
    1974: { text: "Acontecimiento de 1974.", img: "https://via.placeholder.com/200x300?text=1974" },
    1976: { text: "Acontecimiento de 1976.", img: "https://via.placeholder.com/200x300?text=1976" },
    1978: { text: "Acontecimiento de 1978.", img: "https://via.placeholder.com/200x300?text=1978" },
    1982: { text: "Acontecimiento de 1982.", img: "https://via.placeholder.com/200x300?text=1982" },
    1983: { text: "Acontecimiento de 1983.", img: "https://via.placeholder.com/200x300?text=1983" },
    1991: { text: "Acontecimiento de 1991.", img: "https://via.placeholder.com/200x300?text=1991" },
    1994: { text: "Acontecimiento de 1994.", img: "https://via.placeholder.com/200x300?text=1994" },
    1995: { text: "Acontecimiento de 1995.", img: "https://via.placeholder.com/200x300?text=1995" },
    1998: { text: "Acontecimiento de 1998.", img: "https://via.placeholder.com/200x300?text=1998" },
    1999: { text: "Acontecimiento de 1999.", img: "https://via.placeholder.com/200x300?text=1999" },
    2000: { text: "Acontecimiento de 2000.", img: "https://via.placeholder.com/200x300?text=2000" },
    2001: { text: "Acontecimiento de 2001.", img: "https://via.placeholder.com/200x300?text=2001" },
    2003: { text: "Acontecimiento de 2003.", img: "https://via.placeholder.com/200x300?text=2003" },
    2004: { text: "Acontecimiento de 2004.", img: "https://via.placeholder.com/200x300?text=2004" },
    2005: { text: "Acontecimiento de 2005.", img: "https://via.placeholder.com/200x300?text=2005" },
    2008: { text: "Acontecimiento de 2008.", img: "https://via.placeholder.com/200x300?text=2008" },
    2012: { text: "Acontecimiento de 2012.", img: "https://via.placeholder.com/200x300?text=2012" },
    2013: { text: "Acontecimiento de 2013.", img: "https://via.placeholder.com/200x300?text=2013" },
    2017: { text: "Acontecimiento de 2017.", img: "https://via.placeholder.com/200x300?text=2017" },
    2018: { text: "Acontecimiento de 2018.", img: "https://via.placeholder.com/200x300?text=2018" },
    2020: { text: "Acontecimiento de 2020.", img: "https://via.placeholder.com/200x300?text=2020" }
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
