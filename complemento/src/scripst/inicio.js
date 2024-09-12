function createCards(featureds) {
    const carousel = document.getElementById('card-products-featured');
    carousel.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas

    // Crear una copia de los featureds para el efecto infinito
    const allFeatureds = [...featureds, ...featureds, ...featureds]; // Duplicar las tarjetas

    allFeatureds.forEach(featured => {
        const li = document.createElement('li');
        li.classList.add('inicio-card');

        const card = document.createElement('div');
        card.classList.add('inicio-card');
        card.onclick = () => getCategoryProduct(featured.id);

        const description = document.createElement('div');
        description.classList.add('inicio-description');
        description.innerHTML = `<img id="demo" src="${featured.image}" alt="${featured.category_name}">`;

        const shoeDetails = document.createElement('div');
        shoeDetails.classList.add('inicio-shoe-details');
        shoeDetails.innerHTML = `<span class="inicio-shoe_name">${featured.category_name}</span>`;

        card.appendChild(description);
        card.appendChild(shoeDetails);
        li.appendChild(card);
        carousel.appendChild(li);
    });

    // Agregar la tarjeta "Ver todo"
    const li = document.createElement('li');
    li.classList.add('card');

    const card = document.createElement('div');
    card.classList.add('inicio-card');
    card.onclick = () => getCategoryProduct();

    const description = document.createElement('div');
    description.classList.add('inicio-description');
    description.innerHTML = `<img id="demo" src="/public/imagenes/marca.webp" alt="Ver todo">`;

    const shoeDetails = document.createElement('div');
    shoeDetails.classList.add('inicio-shoe-details');
    shoeDetails.innerHTML = `<span class="inicio-shoe_name">Ver todo</span>`;

    card.appendChild(description);
    card.appendChild(shoeDetails);
    li.appendChild(card);
    carousel.appendChild(li);

    // Ajustar el scroll al inicio del carousel para que parezca infinito
    carousel.scrollLeft = firstImgWidth; // Ajustar el desplazamiento inicial
}

// Funcionalidad de los botones de navegación
const carousel = document.getElementById('carousel');
const arrowIcons = document.querySelectorAll(".arrow");
let firstImgWidth = 250 + 14; // Width de cada tarjeta + margin

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

        // Lógica para reiniciar el scroll si se llega al inicio o al final
        if (carousel.scrollLeft <= 0) {
            carousel.scrollLeft = carousel.scrollWidth / 3; // Mover al medio
        } else if (carousel.scrollLeft >= carousel.scrollWidth / 3 * 2) {
            carousel.scrollLeft = carousel.scrollWidth / 3; // Mover al medio
        }
    });
});

function getCategoryProduct(idCategory) {
    const url = `/ReNuevaTe/complemento/src/pages/catalogo.html?id=${idCategory}`;
    console.log("id categoria: " + idCategory);
    window.location.href = url;
}

// Cargar los datos desde el archivo JSON y generar las tarjetas
fetch('/ReNuevaTe/data/catalogo.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createCards(data);
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
