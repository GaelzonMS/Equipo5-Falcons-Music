/* Se mostraran los artistas en el contenedor 'artistas-container' */

let div_artistas = document.getElementById("artists-container");

for (let artist of baseDatosJSON.artistas){
    let div_artista = document.createElement("div");
    div_artista.setAttribute("id", artist.nombre);
    div_artista.className = "artista-container";
    div_artista.innerHTML = `<div class="fotoArtista"><img href=${artist.url_img}></div> <divclass="nombreArtista"><p>${artist.nombre}</p></div>`;
    div_artistas.appendChild(div_artista);
}