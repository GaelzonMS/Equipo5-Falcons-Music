let player; //REPRODUCTOR API
let duracion = 0;//DURACION DEL VIDEO
let updateInterval;
let videoId= "";//ID INICIAL DEL VIDEO
let barrasMostrar= 1;//SI SE MOSTRARÁ O NO LA COLA DE REPRODUCCION
let listaReproduccion= [];//LISTA DE REPRODUCCION

let artista= document.getElementById("artistaCancionR");//NOMBRE DEL ARTISTA EN EL FOOTER
let nomCancion= document.getElementById("cancionReproducida");//NOMBRE DE LA CANCIÓN EN EL FOOTER
let imagCancion= document.getElementById("imagCancion");//IMAGEN DEL ÁLBUM DE LA CANCIÓN ACTUAL EN EL FOOTER
let barrasBtn= document.getElementById("colaReproduccion");//BOTON DE LA COLA DE REPRODUCCIÓN EN EL FOOTER
let playPauseImg= document.getElementById("playImg");//IMAGEN DEL BOTON DE PLAYPAUSA
const playPauseBtn = document.getElementById("playPausa");//BOTON DE PAUSA
const inputDuracion = document.getElementById("duracion");//INPUT TIPO RANGE. BARRA DE DURACIÓN

let colaReproduccion= document.getElementById("colaRepro");//ASIDE DE LA COLA DE REPRODUCCIÓN
let artistaCR= document.getElementById("artistaCancionCR");//NOMBRE DEL ARTISTA EN EL TÍTULO DE LA COLA DE REPRODUCCIÓN
let cancionCR= document.getElementById("cancionReproducidaCR");//NOMBRE DE LA CANCIÓN EN EL TÍTULO DE LA COLA DE REPRODUCCIÓN
let albumImgCR= document.getElementById("albumImag");//IMAGEN DEL ALBUM EN LA COLA DE REPRODUCCIÓN

let nomCR =document.querySelectorAll(".nomCR");//TODOS LOS NOMBRES DE LAS CANCIONES EN LA COLA DE REPRODUCCIÓN
let artCR =document.querySelectorAll(".artCR");//TODOS LOS NOMBRES DE LOS ARTISTAS EN LA COLA DE REPRODUCCIÓN
let imgBtnPlayCr= document.querySelectorAll(".imgBtnPlayCr");//TODAS LAS IMÁGENES DE LOS ALBUMES EN LAS CANCIONES DE LA COLA DE REPRODUCCIÓN
//IDEA ADDEVENTLISTENER PARA CADA BOTON Y QUE CAMBIE UNA VARIABLE DEPENDIENDO EL NO. DE CANCIÓN
const canciones = baseDatosJSON.canciones;//CANCIONES DE LA BASE DE DATOS
const numCanciones= canciones.length;//NUM DE CANCIONES DE LA BASE DE DATOS
const artistas= baseDatosJSON.artistas;//ARTISTAS DE LA BASE DE DATOS
const albumes= baseDatosJSON.album;//ALBUMES DE LA BASE DE DATOS

//FUNCIÓN QUE ESTABLECE LAS CANCIONES EN LA COLA DE REPRODUCCIÓN
function setColaReproducción(maxLista, espacio){//PARAMETROS DE NUM DE CANCIONES A ASIGNAR Y EL ESPACIO QUE OCUPARAN EN LISTA DE REPRODUCCIÓN
    for (let i=0; i < maxLista; i++){
        let r= Math.floor(Math.random() * (numCanciones));//NÚMERO ALEATORIO RANGO 0 AL TOTAL DE CANCIONES
        while (listaReproduccion.indexOf(r) != -1){//WHILE PARA EVITAR REPETICIONES
            r= Math.floor(Math.random() * (numCanciones));//REASIGNAR UN VALOR SI YA EXISTE LA CANCIÓN
        }
        let a = canciones[r].id_album - 1;//INDICE DEL ALBUM
        listaReproduccion[espacio]= r;//ASIGNAR VALOR DE LA LISTA DE REPRODUCCIÓN
        //ASIGNAR EL NOMBRE DEL ARTISTA, LA CANCIÓN Y LA IMAGEN DEL ALBUM
        artCR[i].textContent= `${canciones[r].artista}`;
        nomCR[i].textContent= `${canciones[r].nombre}`;
        imgBtnPlayCr[i].setAttribute("src", `${albumes[a].url_img}`);
        espacio += 1;//HACER QUE EL VALOR AUMENTE
    }
}
function setBtnCancion(){//FUNCIÓN QUE SE ACTIVA AL HACER CLICK A LOS BOTONES DE COLA DE REPRODUCCIÓN
    let r=listaReproduccion[0];//VALOR DEL INDICE DE LA LISTA DE REPRODUCCIÓN
    let a= canciones[r].id_album -1;//INDICE DEL ALBUM
    //ASIGNAR EL NOMBRE DEL ARTISTA, LA CANCIÓN Y LA IMAGEN DEL ALBUM TANTO EN EL FOOTER COMO EN EL ASIDE
    artista.textContent= `${canciones[r].artista}`;
    artistaCR.textContent= `${canciones[r].artista}`;
    nomCancion.textContent= `${canciones[r].nombre}`;
    cancionCR.textContent= `${canciones[r].nombre}`;
    imagCancion.setAttribute("src", `${albumes[a].url_img}`);
    albumImgCR.setAttribute("src", `${albumes[a].url_img}`);
    //CAMBIAR ID DEL VIDEO 
    player.loadVideoById(canciones[r].link);
    //CAMBIAR LA DURACIÓN DEL VIDEO
    updateInterval = setInterval(() => {
        duracion = player.getDuration();
        inputDuracion.max = duracion;
    }, 1000);
}

function onPlayerReady(event) {
    //OBTENER DURACIÓN DEL PRIMER ALBUM
    duracion = player.getDuration();
    player.playVideo();
    inputDuracion.max = duracion;
    //ESTABLECER DURACIÓN
    updateInterval = setInterval(() => {
        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
            inputDuracion.value = player.getCurrentTime();
        }
    }, 1000);
}

function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING) {
    //SI SE ESTÁ REPRODUCIENDO, PON EL ÍCONO DE REPRODUCCIÓN
        playPauseImg.setAttribute("src", "../Statics/media/play-solid.png");
    } //SI SE PARO LA REPRODUCCIÓN, PON EL ÍCONO DE PAUSA
    else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
            playPauseImg.setAttribute("src", "../Statics/media/pause-solid.png");
        }//SI TERMINO DE REPRODUCIRSE, LIMPIA LA BARRA Y AGREGA OTRA CANCIÓN A LISTA DE REPRODUCCIÓN
    if (event.data === YT.PlayerState.ENDED) {
        clearInterval(updateInterval);
        setColaReproducción(1, listaReproduccion.length);
    }
}

function onYouTubeIframeAPIReady() {
    //AGREGA EL OBJETO PLAYER CON DISTINTOS ATRIBUTOS
    player = new YT.Player("player", {
        videoId: `${videoId}`,
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
    setColaReproducción(3, 0);//AL INICIAR, ESTABLECE TRES CANCIONES A LA COLA
}

//SI SE HACE CLICK EN EL BOTON DE PAUSA, PAUSA O HAS PLAY
playPauseBtn.addEventListener("click", () => {
    let state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) 
        player.pauseVideo();
    else 
        player.playVideo();
});

//SI CAMBIAS LA DURACIÓN, QUE REPRODUZCA LA DURACIÓN DESDE DÓNDE SE ENCUENTRA
inputDuracion.addEventListener("input", () => {
    let seekTo = inputDuracion.value;
    player.seekTo(seekTo, true);
});

//SI SE HACE CLICK EN LAS BARRAS DE LA COLA DE REPRODUCIÓN
barrasBtn.addEventListener("click", () => {
    //CAMBIA LAS VARIABLES
    if (barrasMostrar === 0){
        barrasMostrar=1;
    }
    else {
        barrasMostrar=0;
    }
    //MUESTRA U OCULTA LA COLA DE REPRODUCCIÓN
    if(barrasMostrar === 1){
        colaReproduccion.style.display = "flex";
    }
    if(barrasMostrar === 0){
        colaReproduccion.style.display = "none";
    }
});