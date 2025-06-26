/* Archivo que creara un playlist dentro de la sidebar
** Este servira para todas las vistas*/

let btn_crearPlaylist = document.getElementById("btnAgregar");
let inp_newPlaylist = document.getElementById("agregar-container");

btn_crearPlaylist.addEventListener("click", ()=>{
    inp_newPlaylist.setAttribute("display", "");
})