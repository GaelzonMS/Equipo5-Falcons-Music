
/*
document.addEventListener('DOMContentLoaded', function () {
  const artistas = [
    {
      id: 1,
      nombre: "Avicii",
      descripcion: "Avicii fue un DJ y productor sueco de música electrónica, conocido por su estilo melódico y pegajoso.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebae07171f989fb39736674113"
    },
    {
      id: 2,
      nombre: "Marshmello",
      descripcion: "Marshmello es un DJ y productor estadounidense, famoso por su característico casco de malvavisco y sus éxitos en la música electrónica.",
      url_img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841548a6b711f3749578f57381"
    },
    {
      id: 3,
      nombre: "Martin Garrix",
      descripcion: "Martin Garrix es un DJ y productor neerlandés, reconocido por su talento en la música electrónica y sus colaboraciones con otros artistas.",
      url_img: "https://i.scdn.co/image/ab67616100005174f5b8ee60f1f4ee3453aba40b"
    },
    {
      id: 4,
      nombre: "David Guetta",
      descripcion: "David Guetta es un DJ y productor francés, pionero en la música electrónica y conocido por sus numerosas colaboraciones con artistas de renombre.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebf150017ca69c8793503c2d4f"
    },
    {
      id: 5,
      nombre: "Luis Fonsi",
      descripcion: "Luis Fonsi es un cantante y compositor puertorriqueño, famoso por su éxito mundial 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736a4ffb2d6e1dd69c26099993"
    },
    {
      id: 6,
      nombre: "Ed Sheeran",
      descripcion: "Ed Sheeran es un cantautor británico, conocido por sus emotivas letras y su estilo musical versátil.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273d4e0fdd4c41a4f9bfd884301"
    },
    {
      id: 7,
      nombre: "Queen",
      descripcion: "Queen es una icónica banda británica de rock, famosa por su innovador sonido y la poderosa voz de Freddie Mercury.",
      url_img: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42"
    },
    {
      id: 8,
      nombre: "Caifanes",
      descripcion: "Caifanes es una influyente banda mexicana de rock, conocida por su fusión de rock y música latina, y por sus letras poéticas.",
      url_img: "https://images.genius.com/4be6ac6517dde5a18eb0f2f9a28f0ce7.952x952x1.jpg"
    },
    {
      id: 9,
      nombre: "Daddy Yankee",
      descripcion: "Daddy Yankee es un cantante y compositor puertorriqueño, conocido como el 'Rey del Reguetón' y famoso por su éxito 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab6761610000e5eb99a6ccc4aae5ae5404c9eb30"
    }
  ];

  const carousel = document.getElementById('tarcarr');

  // Limpiar el contenido anterior del carrusel
  carousel.innerHTML = '';

  // Recorrer artistas y generar tarjetas
  artistas.forEach(artista => {
    try {
      const card = document.createElement('div');
      card.className = 'artista-card';
      card.dataset.id = artista.id;

      const imgUrl = artista.url_img || 'https://via.placeholder.com/120';

      card.innerHTML = `
        <img class="artista-img" src="${imgUrl}" alt="${artista.nombre}" onerror="this.src='https://via.placeholder.com/120'">
        <div class="artista-info">
          <h4 class="artista-nombre">${artista.nombre}</h4>
          <p class="artista-descripcion">${artista.descripcion}</p>
        </div>
      `;

      carousel.appendChild(card);
    } catch (error) {
      console.error('Error al crear la tarjeta de artista:', artista, error);
    }
  });

  // Lógica para botones de desplazamiento
  const carruselWrapper = document.getElementById('carrart');
  const buttons = carruselWrapper.querySelectorAll('button');
  const scrollAmount = 180;

  if (buttons.length >= 2) {
    const [prevBtn, nextBtn] = buttons;

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});
*/

document.addEventListener('DOMContentLoaded', function () {
  const artistas = [
    {
      id: 1,
      nombre: "Avicii",
      descripcion: "Avicii fue un DJ y productor sueco de música electrónica, conocido por su estilo melódico y pegajoso.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebae07171f989fb39736674113"
    },
    {
      id: 2,
      nombre: "Marshmello",
      descripcion: "Marshmello es un DJ y productor estadounidense, famoso por su característico casco de malvavisco y sus éxitos en la música electrónica.",
      url_img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841548a6b711f3749578f57381"
    },
    {
      id: 3,
      nombre: "Martin Garrix",
      descripcion: "Martin Garrix es un DJ y productor neerlandés, reconocido por su talento en la música electrónica y sus colaboraciones con otros artistas.",
      url_img: "https://i.scdn.co/image/ab67616100005174f5b8ee60f1f4ee3453aba40b"
    },
    {
      id: 4,
      nombre: "David Guetta",
      descripcion: "David Guetta es un DJ y productor francés, pionero en la música electrónica y conocido por sus numerosas colaboraciones con artistas de renombre.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebf150017ca69c8793503c2d4f"
    },
    {
      id: 5,
      nombre: "Luis Fonsi",
      descripcion: "Luis Fonsi es un cantante y compositor puertorriqueño, famoso por su éxito mundial 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736a4ffb2d6e1dd69c26099993"
    },
    {
      id: 6,
      nombre: "Ed Sheeran",
      descripcion: "Ed Sheeran es un cantautor británico, conocido por sus emotivas letras y su estilo musical versátil.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273d4e0fdd4c41a4f9bfd884301"
    },
    {
      id: 7,
      nombre: "Queen",
      descripcion: "Queen es una icónica banda británica de rock, famosa por su innovador sonido y la poderosa voz de Freddie Mercury.",
      url_img: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42"
    },
    {
      id: 8,
      nombre: "Caifanes",
      descripcion: "Caifanes es una influyente banda mexicana de rock, conocida por su fusión de rock y música latina, y por sus letras poéticas.",
      url_img: "https://images.genius.com/4be6ac6517dde5a18eb0f2f9a28f0ce7.952x952x1.jpg"
    },
    {
      id: 9,
      nombre: "Daddy Yankee",
      descripcion: "Daddy Yankee es un cantante y compositor puertorriqueño, conocido como el 'Rey del Reguetón' y famoso por su éxito 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab6761610000e5eb99a6ccc4aae5ae5404c9eb30"
    }
  ];

  const carousel = document.getElementById('tarcarr');

  // Limpiar el contenido anterior del carrusel
  carousel.innerHTML = '';

  // Generar solo imágenes circulares para cada artista
  artistas.forEach(artista => {
    try {
      const img = document.createElement('img');
      img.className = 'artista-img'; 
      img.src = artista.url_img || 'https://via.placeholder.com/120';
      img.alt = artista.nombre;
      img.dataset.id = artista.id;

      // Manejo de error para la imagen
      img.onerror = () => {
        img.src = 'https://via.placeholder.com/120';
      };

      carousel.appendChild(img);
    } catch (error) {
      console.error('Error al crear la imagen de artista:', artista, error);
    }
  });

  // Lógica para botones de desplazamiento (si tienes botones)
  const carruselWrapper = document.getElementById('carrart');
  if (carruselWrapper) {
    const buttons = carruselWrapper.querySelectorAll('button');
    const scrollAmount = 180;

    if (buttons.length >= 2) {
      const [prevBtn, nextBtn] = buttons;

      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  }
});