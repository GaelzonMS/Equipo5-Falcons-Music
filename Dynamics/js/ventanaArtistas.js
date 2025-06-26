/* Se mostraran los artistas en el contenedor 'artistas-container' */

let contador_cont = 1;
let contador_art = 0;
let seccionArtistas = document.getElementById("contenedores-art");

for (let artist of baseDatosJSON.artistas){
    console.log(contador_cont);
    let container_act = document.getElementById("artists-container" + contador_cont)

    // preparamos un nuevo contenedor de artistas
    let artistas_container = document.createElement("div");
    artistas_container.setAttribute("id","artists-container" + (contador_cont + 1));
    artistas_container.className = "artists-container"

    // preparamos un nuevo espacio de artista
    let div_artista = document.createElement("div");
    div_artista.setAttribute("id", artist.nombre);
    div_artista.className = "artista-container";
    div_artista.innerHTML = `<div class="fotoArtista"><img src=${artist.url_img} class="foto"></div> <div class="nombreArtista"><p style="text-align: center;">${artist.nombre}</p></div>`;

    console.log(div_artista)
    container_act.appendChild(div_artista);
    contador_art ++;

    if(contador_art%4 == 0){
        contador_cont ++;
        seccionArtistas.appendChild(artistas_container);
    }
}

// añadimos funcion para regresar a home
let boton_cerrar = document.getElementById("cerrar");
boton_cerrar.addEventListener("click", ()=>{
    window.location.assign("./MainPageFM.html");
})