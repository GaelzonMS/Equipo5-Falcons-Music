/* Espacio para crear la cookie que guarda las sesiones guardadas */

const input_usuario = document.getElementById("usuario");
const input_contraseña = document.getElementById("contraseña");
const input_correo = document.getElementById("email");
const crearForm = document.getElementById("crearForm");

crearForm.addEventListener("submit", function(e){
    // validacion de datos
    
    // validar usuario
    
    // extraccion de datos
    let datos = {
        usuario: input_usuario.value.trim(),
        correo: input_correo.value.trim(),
        password: input_contraseña.value.trim(),
    }

    let nameCookie = datos.usuario;
    let valorCookie = encodeURIComponent(JSON.stringify(datos));
    let expiracion = 1000*60*60*24*360;

    document.cookie = `${nameCookie}=${valorCookie}; max-age=${expiracion}`;
})