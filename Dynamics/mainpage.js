const albums = [
    {
      id: 1,title: "True",artist: "Avicii",
      descripcion: "El álbum 'True' de Avicii es una mezcla innovadora de música electrónica y folk, con éxitos como 'Wake Me Up' y 'Hey Brother'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7"
    },
    {
      id: 2,
      title: "Marshmello",
      artist: "Marshmello",
      descripcion: "El álbum homónimo de Marshmello presenta una colección de sus éxitos más populares, destacando su estilo distintivo en la música electrónica.",
      url_img: "https://mosaic.scdn.co/640/ab67616d00001e0204bfd5a5fd5aa6ca648f66aaab67616d00001e02779b026a1fd1aa96c6deac6dab67616d00001e02c3055e5c1073d11b1ae2e553ab67616d00001e02c89e7ad65c4486567cbf4759"
    },
    {
      id: 3,
      title: "Animals",
      artist:"Martin Garrix",
      descripcion: "El álbum 'Animals' de Martin Garrix incluye su famoso sencillo del mismo nombre, consolidando su lugar en la escena de la música electrónica.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736abad6915a2216dc18e7e3a7"
    },
    {
      id: 4,
      title: "Nothing but the Beat",
      artist: "David Guetta",
      descripcion: "El álbum 'Nothing but the Beat' de David Guetta es un hito en la música electrónica, con colaboraciones de artistas destacados y éxitos globales.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27354e095b51d4ba95496cd60d7"
    },
    {
      id: 5,
      title: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
      descripcion: "'Despacito' es un sencillo icónico que ha alcanzado el estatus de fenómeno mundial, fusionando ritmos latinos con pop.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273343bd0b686fe428dd9ab6d28"
    },
    {
      id: 6,
      title: "Divide",
      artist: "Ed Sheeran",
      descripcion: "'Divide' es un álbum aclamado por la crítica que presenta una variedad de estilos musicales, destacando la versatilidad de Ed Sheeran.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    },
    {
      id: 7,
      title: "A Night at the Opera",
      artist: "Queen",
      descripcion: "'A Night at the Opera' es un álbum clásico de Queen, conocido por su innovador sonido y la épica 'Bohemian Rhapsody'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2737110a2b3dc32dc1224b7670f"
    },
    {
      id: 8,
      title: "Caifanes",
      artist: "Caifanes",
      descripcion: "'Caifanes' es el álbum debut de la banda mexicana, que fusiona rock y música latina, estableciendo su legado en la escena musical.",
      url_img: "https://i.scdn.co/image/ab67616d00001e0252842eb76a050aa8daec1251"
    },
    {
      id: 9,
      title: "El Diablito",
      artist: "Caifanes",
      descripcion: "'El Diablito' es un álbum que marcó un hito en la música rock en español, con letras poéticas y una fusión de géneros.",
      url_img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Caifanes_ElDiablitoLP_cover.jpeg"
    },
    {
      id: 10,
      title: "El Silencio",
      artist: "Caifanes",
      descripcion: "'El Silencio' es un álbum emblemático de Caifanes, que consolidó su estatus como una de las bandas más influyentes del rock en español.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273bc4d989c48ad5b154fb0781d"
    },
    {
      id: 11,
      title: "El Nervio del Volcán",
      artist: "Caifanes",
      descripcion: "'El Nervio del Volcán' es un álbum que muestra la evolución musical de Caifanes, con letras profundas y una fusión de géneros.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27336aeaab4dc91a8dea53a2d8f"
    }
]

// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Verifica que el elemento existe antes de manipularlo
    const carousel = document.getElementById('album-carousel');
    
    if (!carousel) {
        console.error('No se encontró el elemento con ID "album-carousel"');
        return;
    }
    
    // Limpiar el carrusel primero
    carousel.innerHTML = '';
    
    // Tomar solo los primeros 6 álbumes
    const displayedAlbums = albums.slice(0, 12);
    
    // Crear elementos para cada álbum
    displayedAlbums.forEach(album => {
        try {
            const albumItem = document.createElement('div');
            albumItem.className = 'album-card';
            albumItem.dataset.id = album.id;
            
            // Usar imagen de placeholder si url_img no está definida
            const imgUrl = album.url_img || 'https://via.placeholder.com/120';
            
            albumItem.innerHTML = `
                <img class="album-cover" src="${imgUrl}" alt="${album.nombre || album.title}" 
                     onerror="this.src='https://via.placeholder.com/120'">
                <div class="album-info">
                    <h4 class="album-title">${album.title}</h4>
                    <p class="album-artist">${album.artist}</p>
                </div>
            `;
            
            carousel.appendChild(albumItem);
        } catch (error) {
            console.error('Error al crear álbum:', album, error);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('album-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    const scrollAmount = 160; // Ajusta al ancho de tu tarjeta + gap

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});

// funcion para regresar a la vista de inicio de sesion 

const btn_iniciosesion = document.getElementById("btn-iniciosesion");

btn_iniciosesion.addEventListener("click", function() {
    cerrarSesion();
    window.location.assign("../templates/LoginPageFM.html"); 
});


//funcion para ir a la vista de artistas 

btn_artistas = document.getElementById("btnArtistas");

btn_artistas.addEventListener("click", function() {
    window.location.assign("../templates/ArtistsPage.html"); 
});

canciones: [
    {
      id: 1,
      nombre: "Wake me up",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "SsYXnH9lzCY",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 2,
      nombre: "Hey brother",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "69Fb6XozEx8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 3,
      nombre: "Alone",
      artista: "Marshmello",
      id_artista: 2,
      album: "Marshmello",
      id_album: 2,
      link: "nR5l-1lmkkI",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 4,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      album: "Animals",
      id_album: 3,
      link: "2kpAzC2Mja8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 5,
      nombre: "Titanium",
      artista: "David Guetta",
      id_artista: 4,
      album: "Nothing but the Beat",
      id_album: 4,
      link: "KxnpFKZowcs",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 6,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      album: "Despacito",
      id_album: 5,
      link: "kJQP7kiw5Fk",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 7,
      nombre: "Shape of You",
      artista: "Ed Sheeran",
      id_artista: 6,
      album: "Divide",
      id_album: 6,
      link: "JGwWNGJdvx8",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 8,
      nombre: "Bohemian Rhapsody",
      artista: "Queen",
      id_artista: 7,
      album: "A Night at the Opera",
      id_album: 7,
      link: "fJ9rUzIMcZQ",
      genero: "Rock",
      id_genero: 3
    },
    {
      id: 9,
      nombre: "Viento",
      artista: "Caifanes",
      id_artista: 8,
      album: "Caifanes",
      id_album: 8,
      link: "T8TtE-enslA",
      genero: "Rock",
      id_genero: 3
    }
  ];
// Asumiendo que este arreglo de canciones ya está definido en algún lugar
const canciones = [
  {
    id: 1, nombre: "Wake me up", artista: "Avicii", id_album: 1, album: "True", link: "SsYXnH9lzCY"
  },
  {
    id: 2, nombre: "Hey brother", artista: "Avicii", id_album: 1, album: "True", link: "69Fb6XozEx8"
  },
  {
    id: 3, nombre: "Alone", artista: "Marshmello", id_album: 2, album: "Marshmello", link: "nR5l-1lmkkI"
  },
  {
    id: 4, nombre: "Animals", artista: "Martin Garrix", id_album: 3, album: "Animals", link: "2kpAzC2Mja8"
  },
  {
    id: 5, nombre: "Titanium", artista: "David Guetta", id_album: 4, album: "Nothing but the Beat", link: "KxnpFKZowcs"
  },
  {
    id: 6, nombre: "Despacito", artista: "Luis Fonsi ft. Daddy Yankee", id_album: 5, album: "Despacito", link: "kJQP7kiw5Fk"
  },
  {
    id: 7, nombre: "Shape of You", artista: "Ed Sheeran", id_album: 6, album: "Divide", link: "JGwWNGJdvx8"
  },
  {
    id: 8, nombre: "Bohemian Rhapsody", artista: "Queen", id_album: 7, album: "A Night at the Opera", link: "fJ9rUzIMcZQ"
  },
  {
    id: 9, nombre: "Viento", artista: "Caifanes", id_album: 8, album: "Caifanes", link: "T8TtE-enslA"
  }
];

// FUNCION para mostrar canciones en ambas secciones
function renderCanciones() {
  const masEscuchadosLista = document.getElementById('mas-escuchados-lista');
  const recomendacionesLista = document.getElementById('recomendaciones-lista');

  if (!masEscuchadosLista || !recomendacionesLista) {
    console.error('No se encontraron los contenedores de canciones.');
    return;
  }

  masEscuchadosLista.innerHTML = '';
  recomendacionesLista.innerHTML = '';

  // Más escuchadas = primeras 5, Recomendadas = siguientes 4
  const masEscuchadas = canciones.slice(0, 5);
  const recomendadas = canciones.slice(5, 9);

 masEscuchadas.forEach(cancion => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="song-title">${cancion.nombre}</span>
      <span class="song-artist">${cancion.artista}</span>
    `;
    li.addEventListener('click', () => reproducirCancion(cancion));
    masEscuchadosLista.appendChild(li);
  });

  recomendadas.forEach(cancion => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="song-title">${cancion.nombre}</span>
      <span class="song-artist">${cancion.artista}</span>
    `;
    li.addEventListener('click', () => reproducirCancion(cancion));
    recomendacionesLista.appendChild(li);
  });
}

// FUNCION para actualizar el footer cuando se hace clic
function reproducirCancion(cancion) {
  const artistaEl = document.getElementById('artistaCancionR');
  const cancionEl = document.getElementById('cancionReproducida');
  const imgEl = document.getElementById('imagCancion');

  const album = albums.find(a => a.id === cancion.id_album);

  artistaEl.textContent = cancion.artista;
  cancionEl.textContent = cancion.nombre;
  imgEl.src = album?.url_img || 'https://via.placeholder.com/40';

  if (player && typeof player.loadVideoById === 'function') {
        player.loadVideoById(cancion.link);
    } else {
        console.warn('Reproductor de YouTube no está listo aún.');
    }
}

// Llamamos a la función cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function () {
  renderCanciones();
});


