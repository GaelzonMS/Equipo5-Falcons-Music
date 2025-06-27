/** Archivo para desplegar una pestaña de usuario */

let desplegado = false;
let btnPerfil = document.getElementById("nombre");
let asideBotones = document.getElementById("botones")
let nombre_user_act;
let divRegresoLogin = document.getElementById("btn-iniciosesion");

// cambiamos el contenido del boton para regresar al Login

function cerrarSesion (){
    const cookies = document.cookie.split(";");
        if(cookies != ''){
            for(let cookie of cookies){
                let [nombre, valor] = cookie.split("=");
                nombre = decodeURIComponent(nombre);
                valor = JSON.parse(decodeURIComponent(valor));
                if(nombre.trim() == "USERACTUAL"){
                    document.cookie = nombre.trim() + `=; max-age=${1*1}`;
                }
            }
        }
}

function cambiarBtnLogin (){
    const cookies = document.cookie.split(";");
        if(cookies != ''){
            for(let cookie of cookies){
                let [nombre, valor] = cookie.split("=");
                nombre = decodeURIComponent(nombre);
                valor = JSON.parse(decodeURIComponent(valor));
                if(nombre.trim() == "USERACTUAL"){
                    return "Cerrar sesión";
                }
            }
            return "Iniciar sesión";
        }
}

divRegresoLogin.textContent = cambiarBtnLogin();        

btnPerfil.addEventListener("click", ()=>{
    if (desplegado == false){
        // buscamos cual es el usuario actual entre las cookies activas
        const cookies = document.cookie.split(";");
        if(cookies != ''){
            for(let cookie of cookies){
                let [nombre, valor] = cookie.split("=");
                nombre = decodeURIComponent(nombre);
                valor = JSON.parse(decodeURIComponent(valor));
                console.log(nombre);
                if(nombre.trim() == "USERACTUAL"){
                    nombre_user_act = valor.usuario;
                    console.log(valor.usuario)
                }
            }
        }

        nombre_user_act = nombre_user_act === undefined ? "Sin usuario" : nombre_user_act;
        let mensajePerfil = nombre_user_act === undefined ? "Iniciar sesión" : "Cerrar sesión";

        let divPerfil = document.createElement("div");
        divPerfil.setAttribute("id", "perfil-container");
        divPerfil.innerHTML = `<div><img id="foto-perfil-img" src="../Statics/media/foto-login.webp"></div>
                                <div><article id="nombreUsuario">${nombre_user_act}</article></div>
                                <div><article id="mensaje">${mensajePerfil}</article></div>`;
        asideBotones.prepend(divPerfil);
        desplegado = true;
        divRegresoLogin = document.getElementById("mensaje");
    } else{
        let divPerfil = document.getElementById("perfil-container");
        divPerfil.style.display = "none";
        desplegado = false;
    }
})



