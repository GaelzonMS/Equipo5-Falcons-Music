/* Archivo que creara un playlist dentro de la sidebar
** Este servira para todas las vistas*/

let creando = false;
let btn_crearPlaylist = document.getElementById("btnAgregar");
let form_newPlaylist = document.getElementById("agregar-container");
let inp_nombrePlaylist = document.getElementById("nombrePlaylist");

// es para desplegar div de las playlist
function mostrar_playlists (){
    let aside_btns = document.getElementById("botones"); // barra de botones lateras

    let cookies = document.cookie;
    console.log(cookies)

    if(cookies != ''){
        for(let cookie of cookies){
            let div_playlist = document.createElement("div"); // nuevo contenedor para la playlist
            let [nombre, canciones] = cookie.split("=");
            console.log(nombre);
            if(nombre.indexOf("playlist") != -1){
                let playlist_act = nombre;
                div_playlist.textContent = playlist_act;
                aside_btns.appendChild(div_playlist);
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

    mostrar_playlists();
})

mostrar_playlists();