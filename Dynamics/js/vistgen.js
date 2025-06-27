const canciones = window.baseDatosJSON.canciones;
const artistas =window.baseDatosJSON.artistas;

const contgen = document.getElementById('gene');
let generos = new Set();
            // aca evitamos que se creen divs con mas de un
canciones.forEach(cancion => {
  generos.add(cancion.genero);
});


generos.forEach(genero => {
  const divgenero = document.createElement('div');
  divgenero.className = "generblock";

  const botonGenero = document.createElement('div');
  botonGenero.textContent = genero;
  botonGenero.className = "btngen";

  const contenedorc = document.createElement('div');
  contenedorc.className = "cancionesgenero";
  contenedorc.style.display = 'none';

//seleccion de canciones por el genero y agrega los datos de la cancion
  canciones.forEach(cancion => {
      const div = document.createElement('div');
      div.className = 'cancion-resultado';
      div.innerHTML = `
        <h3>${cancion.nombre}</h3>
    <p><strong>Artista:</strong> ${cancion.artista}</p>
        
        
        <p><strong>Álbum:</strong> ${cancion.album}</p>
      
      `;
      console.log (div.innerHTML)
      contenedorc.appendChild(div);
      console.log(contenedorc)
    });

 
  botonGenero.addEventListener('click', () => {
    const visible = contenedorc.style.display === 'block';
    contenedorc.style.display = visible ? 'none' : 'block';

    
  });

  
  divgenero.appendChild(botonGenero);
  divgenero.appendChild(contenedorc);
  contgen.appendChild(divgenero);
});


// Carrusel de art
const carousel = document.getElementById('tarcarr');
artistas.forEach(artista => {
  const img = document.createElement('img');
  img.className = 'artista-img';
  img.src = artista.url_img;
  img.id = "imgart" + artista.id;

  carousel.appendChild(img);
  console.log(carousel.innerHTML)
});

// Botones del carrusel
const carruselw = document.getElementById('carrart');
const btncarr = carruselw.querySelectorAll('button');
const avancarr = 180;

let atras = btncarr[0];
let adelante = btncarr[1];

atras.addEventListener('click', () => {
  carousel.scrollBy({ left: -avancarr, behavior: 'smooth' });
});

adelante.addEventListener('click', () => {
  carousel.scrollBy({ left: avancarr, behavior: 'smooth' });
});
