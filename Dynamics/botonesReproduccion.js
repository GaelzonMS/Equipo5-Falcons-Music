let player;
let duracion = 0;
let updateInterval;
let videoId= "";
let barrasMostrar= 1;//SI SE MOSTRARÁ O NO LA COLA DE REPRODUCCION
let listaReproduccion= [];//LISTA DE REPRODUCCION
let indiceActual=0;//ÍNDICE DE LA CANCIÓN REPRODUCIDA QUE FORMA PARTE DE LA LISTA DE REPRODUCCIÓN

let artista= document.getElementById("artistaCancionR");//NOMBRE DEL ARTISTA EN EL FOOTER
let nomCancion= document.getElementById("cancionReproducida");//NOMBRE DE LA CANCIÓN EN EL FOOTER
let imagCancion= document.getElementById("imagCancion");//IMAGEN DEL ÁLBUM DE LA CANCIÓN ACTUAL EN EL FOOTER
let barrasBtn= document.getElementById("colaReproduccion");//BOTON DE LA COLA DE REPRODUCCIÓN EN EL FOOTER

if (!window.baseDatosJSON) {
    console.error('baseDatosJSON no está definido');
}

// se extren los botones del footer-reproductor
const inputDuracion = document.getElementById("duracion");
const playPauseBtn = document.getElementById("playPausa");
let playPauseImg= document.getElementById("playImg");
const pastSong= document.getElementById("pastSong");//BOTON PARA REGRESAR CANCIÓN
const postSong= document.getElementById("postSong");//BOTON PARA PONER LA SIGUIENTE CANCIÓN

let colaReproduccion= document.getElementById("sidebarVideo");//ASIDE DE LA COLA DE REPRODUCCIÓN
let artistaCR= document.getElementById("artistaCancionCR");//NOMBRE DEL ARTISTA EN EL TÍTULO DE LA COLA DE REPRODUCCIÓN
let cancionCR= document.getElementById("cancionReproducidaCR");//NOMBRE DE LA CANCIÓN EN EL TÍTULO DE LA COLA DE REPRODUCCIÓN
let albumImgCR= document.getElementById("albumImag");//IMAGEN DEL ALBUM EN LA COLA DE REPRODUCCIÓN

// botones y elementos de las canciones de la cola de reproduccion
let playCRBtn =document.querySelectorAll(".playCRBtn");//BOTON DE PLAY EN LA COLA DE REPRODUCCIÓN
let nomCR =document.querySelectorAll(".nomCR");//TODOS LOS NOMBRES DE LAS CANCIONES EN LA COLA DE REPRODUCCIÓN
let artCR =document.querySelectorAll(".artCR");//TODOS LOS NOMBRES DE LOS ARTISTAS EN LA COLA DE REPRODUCCIÓN
let imgBtnPlayCr= document.querySelectorAll(".imgBtnPlayCr");//TODAS LAS IMÁGENES DE LOS ALBUMES EN LAS CANCIONES DE LA COLA DE REPRODUCCIÓN

// creamos arrays para guardar diversos datos de BaseDeDatos.js
const songs = baseDatosJSON.canciones;//CANCIONES DE LA BASE DE DATOS
const numSongs= songs.length;//NUM DE CANCIONES DE LA BASE DE DATOS
const artistas= baseDatosJSON.artistas;//ARTISTAS DE LA BASE DE DATOS
const albumes= baseDatosJSON.album;//ALBUMES DE LA BASE DE DATOS

//FUNCIÓN QUE ESTABLECE LAS CANCIONES EN LA COLA DE REPRODUCCIÓN
function setColaReproduccion(minLista,maxLista, espacio, random){//PARAMETROS DE NUM DE CANCIONES A ASIGNAR Y EL ESPACIO QUE OCUPARAN EN LISTA DE REPRODUCCIÓN
    for (let i=minLista; i < maxLista; i++){
        let r;
        if(random == -1){//SI SE SELECCIONO RANDOM
            r = Math.floor(Math.random() * (numCanciones));//NÚMERO ALEATORIO RANGO 0 AL TOTAL DE CANCIONES
            while (listaReproduccion.indexOf(r) != -1){//WHILE PARA EVITAR REPETICIONES
            r= Math.floor(Math.random() * (numCanciones));//REASIGNAR UN VALOR SI YA EXISTE LA CANCIÓN
        }
        }
        else{
            if(random <=listaReproduccion.length - 1){//SI EL ÍDICE DADO ES DE LA LISTA DE REPRODUCCIÓN
                r= random;//NÚMERO DE ÍNDICE DADO A LA FUNCIÓN
            }
            else{
                r= Math.floor(Math.random() * (numCanciones));//NÚMERO ALEATORIO RANGO 0 AL TOTAL DE CANCIONES
                while (listaReproduccion.indexOf(r) != -1){//WHILE PARA EVITAR REPETICIONES
                    r= Math.floor(Math.random() * (numCanciones));//REASIGNAR UN VALOR SI YA EXISTE LA CANCIÓN
                }
            }
        }
        let a = canciones[r].id_album - 1;//INDICE DEL ALBUM
        if(random == -1){//SI SE ELIGIÓ AGREGAR UNA CANCIÓN RANDOM
            listaReproduccion[espacio]= r;//ASIGNAR VALOR DE LA LISTA DE REPRODUCCIÓN
        }
        //ASIGNAR EL NOMBRE DEL ARTISTA, LA CANCIÓN Y LA IMAGEN DEL ALBUM
        artCR[espacio].textContent= `${canciones[r].artista}`;
        nomCR[espacio].textContent= `${canciones[r].nombre}`;
        imgBtnPlayCr[espacio].setAttribute("src", `${albumes[a].url_img}`);
        espacio += 1;//HACER QUE EL VALOR AUMENTE
    }
}
//SI SE QUIERE REGRESAR A LA CANCIÓN ANTERIOR
pastSong.addEventListener("click", () =>{
    if(indiceActual > 0){//SI HAY ALGO DETRÁS
        indiceActual -= 1;
        setBtnCancion();
    }
});
//SI SE QUIERE IR A LA SIGUIENTE CANCIÓN
postSong.addEventListener("click", () =>{
    if(indiceActual < listaReproduccion.length){//SI HAY ALGO ADELANTE
        indiceActual += 1;
        setBtnCancion();
        console.log(indiceActual-1, indiceActual + 2, indiceActual-1, -1);
        setColaReproduccion(indiceActual-1, indiceActual + 2, indiceActual-1, -1);//AL INICIAR, ESTABLECE TRES CANCIONES A LA COLA
    }
});
//FUNCIÓN QUE SE ACTIVA AL HACER CLICK A LOS BOTONES DE COLA DE REPRODUCCIÓN
function setBtnCancion(){
    let r=listaReproduccion[indiceActual];//VALOR DEL INDICE DE LA LISTA DE REPRODUCCIÓN
    //CAMBIAR ID DEL VIDEO 
    player.loadVideoById(canciones[r].link);
    //CAMBIAR LA DURACIÓN DEL VIDEO
    updateInterval = setInterval(() => {
        duracion = player.getDuration();
        inputDuracion.max = duracion;
    }, 1000);
    let a= canciones[r].id_album -1;//INDICE DEL ALBUM
    //ASIGNAR EL NOMBRE DEL ARTISTA, LA CANCIÓN Y LA IMAGEN DEL ALBUM TANTO EN EL FOOTER COMO EN EL ASIDE
    artista.textContent= `${canciones[r].artista}`;
    artistaCR.textContent= `${canciones[r].artista}`;
    nomCancion.textContent= `${canciones[r].nombre}`;
    cancionCR.textContent= `${canciones[r].nombre}`;
    imagCancion.setAttribute("src", `${albumes[a].url_img}`);
    albumImgCR.setAttribute("src", `${albumes[a].url_img}`);
}

function onPlayerReady(event) {
    duracion = player.getDuration();
    player.playVideo();
    inputDuracion.max = duracion;

    updateInterval = setInterval(() => {
        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
            inputDuracion.value = player.getCurrentTime();
        }
    }, 1000);
}

function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING) {
        playPauseImg.setAttribute("src", "../Statics/media/pause-solid.png");
    } 
    else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
            playPauseImg.setAttribute("src", "../Statics/media/play-solid.png");
        }
    if (event.data === YT.PlayerState.ENDED) {
        if(indiceActual== 0){
            clearInterval(updateInterval);
        }
        setColaReproduccion(indiceActual+1, indiceActual+4, listaReproduccion.length + 1, -1);
        indiceActual+=1;
        setBtnCancion();
    }
}

//function onYouTubeIframeAPIReady() {
//        videoId: "cWppAbqm9I8",
//            controls: 0,
//            modestbranding: 1,
//            rel: 0,
//            showinfo: 0,
//            fs: 0,
//        },
//        events: {
//            onReady: onPlayerReady,
//            'onStateChange': onPlayerStateChange
//        },
//    });
//}

playPauseBtn.addEventListener("click", () => {
    let state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) 
        player.pauseVideo(); 
    else 
        player.playVideo();
});

inputDuracion.addEventListener("input", () => {
    let seekTo = inputDuracion.value;
    player.seekTo(seekTo, true);
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('reproducir-btn')) {
        const videoId = e.target.getAttribute('data-link');
        if (player) {
            player.loadVideoById(videoId);
        } else {
            player = new YT.Player("player", {
                videoId: videoId,
                playerVars: {
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    fs: 0,
                },
                events: {
                    onReady: onPlayerReady,
                    'onStateChange': onPlayerStateChange
                },
            });
        }
    }
});

playCRBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    indiceActual = i;
    setBtnCancion();
  });
});