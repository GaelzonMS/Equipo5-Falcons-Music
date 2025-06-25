/* En esta sección se hara la creacion de una cuenta */

const input_usuario = document.getElementById("usuario");
const input_contraseña = document.getElementById("contraseña")
const submit_btn = document.getElementById("iniciar")
const loginForm = document.getElementById("loginForm");

//funciones de busqueda de usuario y validacion de contraseña
function buscarUsuario (cookies, usuario, password){
    if(cookies != ''){
        for(let cookie of cookies){
            let [nombre, valor] = cookie.split("=");
            if (nombre === usuario){
                valor = decodeURIComponent(valor);
                if (valor.indexOf(password) != -1){
                    console.log(nombre);
                    console.log(valor);
                    return true;
                }
                else{
                    let error_password = document.getElementById("error-contraseña");
                    error_password.textContent = "Contraseña incorrecta";
                    return false;
                }
            }
        }
        let error_usuario = document.getElementById("error-usuario");
        error_usuario.textContent = "Usuario no encontrado";
        return false;
    }
}

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    let ingresar = true;

    // extraccion de datos
    let datos = {
        usuario: input_usuario.value.trim(),
        password: input_contraseña.value.trim(),
    }

    // validacion de datos
    // validar usuario obteniendo las cookies actuales
    const galletas = document.cookie.split("; ");

    ingresar = buscarUsuario(galletas, datos.usuario, datos.password)

    if(ingresar){
        let valor = encodeURIComponent(JSON.stringify(datos));
        let cookie_name = "USERACTUAL";
        let cookie_duration = 1000*60*60;

        document.cookie = `${cookie_name}=${valor}; max-age=${cookie_duration}`;
        window.location.assign("./MainPageFM.html");
    }
    
})