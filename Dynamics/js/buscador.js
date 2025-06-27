// Asegurarse de que baseDatosJSON está disponible
if (!window.baseDatosJSON) {
  console.error('baseDatosJSON no está definido');
}

// Constantes del html

//const buscador = document.getElementById("buscador");// ya no lo necesite ya que lo referencie en el detector de eventos, aunque chance por buenas practicas seria bueno
const resultadosDiv = document.getElementById("resultados");

function buscarCanciones(texto) {
  const busqueda = texto.toLowerCase();
  return window.baseDatosJSON.canciones.filter(cancion => {
    return (
      cancion.nombre.toLowerCase().includes(busqueda) ||
      cancion.artista.toLowerCase().includes(busqueda) ||
      cancion.album.toLowerCase().includes(busqueda)
    );
  });
}

//...

// Mostrar resultados
function mostrarResultados(canciones) {
  resultadosDiv.innerHTML = canciones.map(cancion => `
    <div class="cancion-resultado">
      <h3>${cancion.nombre}</h3>
      <p><strong>Artista:</strong> ${cancion.artista}</p>
      <p><strong>Álbum:</strong> ${cancion.album}</p>
      <button id="boton-repro" style="color:black" class="reproducir-btn" data-link="${cancion.link}">r:</button>
      <a href="https://youtu.be/${cancion.link}" target="_blank">Ver en YouTube</a>
    </div>
  `).join(''); // para que no se concatenen 
}

// me es mas facil relacionar primero las funciones y despues el resultado 

// Las funciones de búsqueda y mostrar resultados se ejecutan al escribir en el buscador

//referencia al elemento buscador por su id (globalmemte)

buscador.addEventListener("input", (e) => {
  if(e.target.value == ''){ // comprueba que el input de buscador no este vacio
    resultadosDiv.innerHTML = '';
  }else{
    mostrarResultados(buscarCanciones(e.target.value));
  }
  
});