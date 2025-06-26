/* Espacio para crear la cookie que guarda las sesiones guardadas */

const input_usuario = document.getElementById("usuario");
const input_contraseña = document.getElementById("contraseña");
const input_correo = document.getElementById("email");
const crearForm = document.getElementById("crearForm");

crearForm.addEventListener("submit", function(e){
    e.preventDefault();

    let subirCookie = true;

    // extraccion de datos
    let datos = {
        usuario: input_usuario.value.trim(),
        correo: input_correo.value.trim(),
        password: input_contraseña.value.trim(),
    }

    // validacion de datos
    // validar usuario obteniendo las cookies actuales
    const cookies = document.cookie.split("; ");

    if(cookies != ''){
        for(let cookie of cookies){
            const [nombre, valor] = cookie.split("=");
            if (nombre === datos.usuario){
                let error = document.getElementById("error-user");
                error.textContent = "Usuario ya existe";
                subirCookie = false;
            }
        }
    }
        
    if(datos.usuario.length > 15 || datos.usuario.length < 5){
        let error = document.getElementById("error-user");
        error.textContent = "Nombre de usuario inválido";
        subirCookie = false;
    }

    // validar gmail
    if(cookies != ''){
        for(let cookie of cookies){
            let [nombre, valor] = cookie.split("=");
            valor = decodeURIComponent(valor);
            if (valor.indexOf(datos.correo) != -1){
                let error = document.getElementById("error-gmail");
                error.textContent = "Correo ya usado";
                subirCookie = false;
            }
        }
    }
        
    if(datos.correo.indexOf("@") == -1){
        let error = document.getElementById("error-gmail");
        error.textContent = "Correo inválido";
        subirCookie = false;
    }

    // validar contraseña
    if(datos.password.length < 5){
        let error = document.getElementById("error-contraseña");
        error.textContent = "Contraseña inválida";
        subirCookie = false;
    }

    if(subirCookie){
        let nameCookie = datos.usuario;
        let valorCookie = encodeURIComponent(JSON.stringify(datos));
        let expiracion = 1000*60*60*24*360;

        document.cookie = `${nameCookie}=${valorCookie}; max-age=${expiracion}`;
        window.location.assign("./LoginPageFM.html");
    }
    
    
})