let player;
let duracion = 0;
let updateInterval;
//let videoId= "cWppAbqm9I8";

if (!window.baseDatosJSON) {
    console.error('baseDatosJSON no está definido');
}

//const botonRepro = document.getElementById("reproducir-btn");
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