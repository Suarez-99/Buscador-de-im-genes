const formBusqueda = document.querySelector("#form-busqueda");
const cajaBusqueda = document.querySelector("#caja-busqueda");
const resultadoBusqueda = document.querySelector("#resultado-busqueda");
const mostrarMas = document.querySelector("#mostrar-mas");

let keyword = ""; // Variable que guarda la palabra a buscar
let page = 1; // Número de página de búsqueda
const accessKey = "IHEkpFOrW5JNkJ0ov25PIMfUC8FuPVm8JuILhIDkXiw"; // Reemplaza con tu clave de acceso de Unsplash

// Función que trae los resultados
async function buscarImagenes() {
    // Tomo el valor que ingresó el usuario
    keyword = cajaBusqueda.value;
    // Armo la URL para la solicitud a la API de Unsplash
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    try {
        // Realizo la búsqueda
        const response = await fetch(url);
        const data = await response.json();

        // Controlo, si es la primera vez que busco limpio el contenedor donde se muestran los resultados
        if (page === 1) {
            resultadoBusqueda.innerHTML = "";
        }

        const resultados = data.results;
        // Por cada resultado, creo un enlace <a> con la imagen dentro
        resultados.forEach((result) => {
            const imagen = document.createElement("img");
            imagen.src = result.urls.small; // Usar 'small' en lugar de 'smal'
            const imagenLink = document.createElement("a");
            imagenLink.href = result.links.html;
            imagenLink.target = "_blank";

            imagenLink.appendChild(imagen);

            // Agrego el elemento al contenedor
            resultadoBusqueda.appendChild(imagenLink);
        });

        // Muestro el botón "Mostrar más"
        mostrarMas.style.display = "block";
    } catch (error) {
        console.error("Error al buscar imágenes:", error);
    }
}

// Agrego funcionalidad cuando se envía el formulario de búsqueda
formBusqueda.addEventListener("submit", (e) => {
    // Evito que se recargue la página
    e.preventDefault();
    page = 1;
    buscarImagenes();
});

// Funcionalidad al botón "Mostrar más"
mostrarMas.addEventListener("click", () => {
    page++;
    buscarImagenes();
});
