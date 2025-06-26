let player;
let duracion = 0;
let updateInterval;
let videoId= "cWppAbqm9I8";
let barrasMostrar= 1;
let artista= document.getElementById("artistaCancionR");
let nomCancion= document.getElementById("cancionReproducida");
let imagCancion= document.getElementById("imagCancion");
let barrasBtn= document.getElementById("colaReproduccion");
let playPauseImg= document.getElementById("playImg");
let colaReproduccion= document.getElementById("colaRepro");
let artistaCR= document.getElementById("artistaCancionCR");
let cancionCR= document.getElementById("cancionReproducidaCR");
let albumImgCR= document.getElementById("albumImag");
let nomCR =document.querySelectorAll(".nomCR");
let artCR =document.querySelectorAll(".artCR");
let imgBtnPlayCr= document.querySelectorAll(".imgBtnPlayCr");
let listaReproduccion= [];

const canciones = baseDatosJSON.canciones;
const numCanciones= canciones.length;
const artistas= baseDatosJSON.artistas;
const albumes= baseDatosJSON.album;
const generos= baseDatosJSON.genero;
const inputDuracion = document.getElementById("duracion");
const playPauseBtn = document.getElementById("playPausa");

function setColaReproducción(maxLista, espacio){
    for (let i=0; i < maxLista; i++){
        let r= Math.floor(Math.random() * (numCanciones));
        let a = canciones[r].id_album - 1;
        listaReproduccion[espacio]= r;
        artCR[i].textContent= `${canciones[r].artista}`;
        nomCR[i].textContent= `${canciones[r].nombre}`;
        imgBtnPlayCr[i].setAttribute("src", `${albumes[a].url_img}`);
        console.log(artCR[i], nomCR[i], imgBtnPlayCr[i]);
        espacio += 1;
    }
    console.log(listaReproduccion);
}
function setBtnCancion(){
    let r=listaReproduccion[0];
    let a= canciones[r].id_album -1;
    artista.textContent= `${canciones[r].artista}`;
    artistaCR.textContent= `${canciones[r].artista}`;
    nomCancion.textContent= `${canciones[r].nombre}`;
    cancionCR.textContent= `${canciones[r].nombre}`;
    player.loadVideoById(canciones[r].link);
    updateInterval = setInterval(() => {
        duracion = player.getDuration();
        inputDuracion.max = duracion;
    }, 1000);
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
        playPauseImg.setAttribute("src", "../Statics/media/play-solid.png");
    } 
    else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
            playPauseImg.setAttribute("src", "../Statics/media/pause-solid.png");
        }
    if (event.data === YT.PlayerState.ENDED) {
        clearInterval(updateInterval);
        setColaReproducción(1, 3);
    }
}

function onYouTubeIframeAPIReady() {
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
    setColaReproducción(3, 0);
}

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

barrasBtn.addEventListener("click", () => {
    console.log("si jala");
    if (barrasMostrar === 0){
        barrasMostrar=1;
        console.log("Si mostrar");
    }
    else {
        barrasMostrar=0;
        console.log("No mostrar");
    }
    if(barrasMostrar === 1){
        colaReproduccion.style.display = "flex";
    }
    if(barrasMostrar === 0){
        colaReproduccion.style.display = "none";
    }
});