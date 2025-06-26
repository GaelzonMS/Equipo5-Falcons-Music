const albums = [
    {
      id: 1,
      nombre: "True",
      artista: "Avicii",
      id_artista: 1,
      descripcion: "El álbum 'True' de Avicii es una mezcla innovadora de música electrónica y folk, con éxitos como 'Wake Me Up' y 'Hey Brother'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7"
    },
    {
      id: 2,
      nombre: "Marshmello",
      artista: "Marshmello",
      id_artista: 2,
      descripcion: "El álbum homónimo de Marshmello presenta una colección de sus éxitos más populares, destacando su estilo distintivo en la música electrónica.",
      url_img: "https://mosaic.scdn.co/640/ab67616d00001e0204bfd5a5fd5aa6ca648f66aaab67616d00001e02779b026a1fd1aa96c6deac6dab67616d00001e02c3055e5c1073d11b1ae2e553ab67616d00001e02c89e7ad65c4486567cbf4759"
    },
    {
      id: 3,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      descripcion: "El álbum 'Animals' de Martin Garrix incluye su famoso sencillo del mismo nombre, consolidando su lugar en la escena de la música electrónica.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736abad6915a2216dc18e7e3a7"
    },
    {
      id: 4,
      nombre: "Nothing but the Beat",
      artista: "David Guetta",
      id_artista: 4,
      descripcion: "El álbum 'Nothing but the Beat' de David Guetta es un hito en la música electrónica, con colaboraciones de artistas destacados y éxitos globales.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27354e095b51d4ba95496cd60d7"
    },
    {
      id: 5,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      descripcion: "'Despacito' es un sencillo icónico que ha alcanzado el estatus de fenómeno mundial, fusionando ritmos latinos con pop.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273343bd0b686fe428dd9ab6d28"
    },
    {
      id: 6,
      nombre: "Divide",
      artista: "Ed Sheeran",
      id_artista: 6,
      descripcion: "'Divide' es un álbum aclamado por la crítica que presenta una variedad de estilos musicales, destacando la versatilidad de Ed Sheeran.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    },
    {
      id: 7,
      nombre: "A Night at the Opera",
      artista: "Queen",
      id_artista: 7,
      descripcion: "'A Night at the Opera' es un álbum clásico de Queen, conocido por su innovador sonido y la épica 'Bohemian Rhapsody'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2737110a2b3dc32dc1224b7670f"
    },
    {
      id: 8,
      nombre: "Caifanes",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'Caifanes' es el álbum debut de la banda mexicana, que fusiona rock y música latina, estableciendo su legado en la escena musical.",
      url_img: "https://i.scdn.co/image/ab67616d00001e0252842eb76a050aa8daec1251"
    },
    {
      id: 9,
      nombre: "El Diablito",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Diablito' es un álbum que marcó un hito en la música rock en español, con letras poéticas y una fusión de géneros.",
      url_img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Caifanes_ElDiablitoLP_cover.jpeg"
    },
    {
      id: 10,
      nombre: "El Silencio",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Silencio' es un álbum emblemático de Caifanes, que consolidó su estatus como una de las bandas más influyentes del rock en español.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273bc4d989c48ad5b154fb0781d"
    },
    {
      id: 11,
      nombre: "El Nervio del Volcán",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Nervio del Volcán' es un álbum que muestra la evolución musical de Caifanes, con letras profundas y una fusión de géneros.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27336aeaab4dc91a8dea53a2d8f"
    }
]

const container = document.getElementById('albumList');

albums.forEach(album =>{
    const card = document.createElement("div");
    card.className= 'album-card';

    const img = document.getElementById("img");
    img.src = album.url_img;
    img.alt = album.nombre;

    const nombre = document.createElement("p");
    nombre.textContext = album.nombre;

    card.appendChild(img),
    card.appendChild(nombre);
    contenedor.appendChild(card);

});

document.querySelector(".prev").addEventListener("click", () => {
  contenedor.scrollBy({ left: -contenedor.offsetWidth, behavior: "smooth" });
});

document.querySelector(".next").addEventListener("click", () => {
  contenedor.scrollBy({ left: contenedor.offsetWidth, behavior: "smooth" });
});
