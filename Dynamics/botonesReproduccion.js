let player;
let duracion = 0;
let updateInterval;
let videoId= "cWppAbqm9I8";
let artista= document.getElementById("artistaCancionR");
let nomCancion= document.getElementById("cancionReproducida");
let imagCancion= document.getElementById("imagCancion");

const canciones = baseDatosJSON.canciones;
const numCanciones= canciones.length;
const artistas= baseDatosJSON.artistas;
const albumes= baseDatosJSON.album;
const generos= baseDatosJSON.genero;

function setBtnCancion(){
    let r= Math.floor(Math.random() * (numCanciones));
    artista.textContent= `${canciones[r].artista}`;
    nomCancion.textContent= `${canciones[r].nombre}`;
    player.loadVideoById(canciones[r].link);
    let a= canciones[r].id_album -1;
    imagCancion.setAttribute("src", `${albumes[a].url_img}`);
    imagCancion.onerror = () => {
        console.error("No se pudo cargar la imagen.");
        imagCancion.setAttribute("src", "./Statics/media/default.png");
    };
    return canciones[r].link;
}

const inputDuracion = document.getElementById("duracion");
const playPauseBtn = document.getElementById("playPausa");
let playPauseImg= document.getElementById("playImg");
//const duracion = document.getElementById("duracion");

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