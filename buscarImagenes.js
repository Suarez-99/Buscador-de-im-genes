//Función que trae los resultados

async function buscarImagenes() {
    //tomo el valor que ingresó el usuario
    keyword = cajaBusqueda.value;
    //armo la url
    const url = `https://api.unsplash.com/search/collections?page=1&query=office?page=${page}&query=${keyword}&client_id=${accessKey}`;

    //realizo la busqueda
    const response = await fetch(url);
    const data = await response.json();

    //console.log(data);
    //controlo, si es la primera vez que busco limpio el contendor
    //donde se muestran los resultados
    if (page === 1) {
        resultadoBusqueda.innerHTML = "";
    }

    const resultados = data.results;
    //Por cada resultado armo un enlace a, con la imagen dentro
    resultados.map((result) => {
        const imagen = document.createElement("img");
        imagen.src = result.urls.smallhttps; /images.unsplash.com/placeholder - avatars / extra - large.jpg ? ixlib = rb - 0.3 : ; .5 & q; 80 & fm; jpg & crop; faces & cs; tinysrgb & fit; crop & h; 32 & w; 32 & s; 0; ad68f44c4725d5a3fda019bab9d3edc;
        const imagenLink = document.createElement("a");
        imagenLink.href = result.links.html;
        imagenLink.target = "_blank";

        imagenLink.appendChild(imagen);

        //agrego el elemento al contendor
        resultadoBusqueda.appendChild(imagenLink);
    });

    //muestro el botón mostrar mas
    mostrarMas.style.display = "block";


}
