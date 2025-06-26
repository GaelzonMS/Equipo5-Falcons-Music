/* Archivo que creara un playlist dentro de la sidebar
** Este servira para todas las vistas*/

let creando = false;
let btn_crearPlaylist = document.getElementById("btnAgregar");
let form_newPlaylist = document.getElementById("agregar-container");
let inp_nombrePlaylist = document.getElementById("nombrePlaylist");

// es para desplegar div de las playlist
function mostrar_playlists (){
    let espacioListas = document.getElementById("contenedores-playlist"); // contenedores de las playlist

    let contador_cont = 1;
    let contador_list = 0;

    const cookies = document.cookie.split(";");

    if(cookies != ''){
        for(let cookie of cookies){
            let espacio_act = document.getElementById("artists-container" + contador_cont)

            // preparamos un nuevo contenedor de listas
            let espacioLista = document.createElement("div");
            espacioLista.setAttribute("id","artists-container" + (contador_cont + 1));
            espacioLista.className = "contenedores";

            let div_playlist = document.createElement("div"); // nuevo contenedor para la playlist
            let [nombre, canciones] = cookie.split("=");
            nombre = decodeURIComponent(nombre);

            if(nombre.indexOf("playlist") != -1){
                nombre = nombre.replace('"', ":  ")
                let playlist_act = nombre.replaceAll('"', "");
                div_playlist.className = "playlist-container";
                div_playlist.innerHTML =`<div class="fotoArtista"><img src="../Statics/media/foto_playlist.png" class="foto"></div><div class="nombreArtista"><p style="text-align: center;">${playlist_act}</p></div>`;
                espacio_act.appendChild(div_playlist);
            }

            if(contador_list%4 == 0){
                contador_cont ++;
                espacioListas.appendChild(espacioLista);
            }
        }
    }
}

// despliega un mini form para nombrar la playlist
btn_crearPlaylist.addEventListener("click", ()=>{
    if(!creando){
        form_newPlaylist.style.display = "block";
        creando = true;
    } else{
        creando = false;
        form_newPlaylist.style.display = "none";
    }
})

form_newPlaylist.addEventListener("submit", (e)=>{
    e.preventDefault();

    // creamos una cookie que guarde los datos de la playlist
    let nombre_playlist = encodeURIComponent(JSON.stringify(inp_nombrePlaylist.value.trim()));
    let duration_playlist = 1000*60*60*32;

    let datos = {
        nombre: "playlist" + nombre_playlist
    }

    document.cookie = `${"playlist" + nombre_playlist}=${encodeURIComponent(JSON.stringify(datos))}; max-age=${duration_playlist}`;
    form_newPlaylist.style.display = "none";
    mostrar_playlists();
})

mostrar_playlists();

let boton_cerrar = document.getElementById("cerrar");
if(boton_cerrar != null){
        boton_cerrar.addEventListener("click", ()=>{
        window.location.assign("./MainPageFM.html");
    })
}