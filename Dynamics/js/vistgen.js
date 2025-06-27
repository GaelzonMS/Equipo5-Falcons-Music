


 
  const canciones= [
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
  const contgen = document.getElementById('gene');
  let generos = new Set();

  canciones.forEach(cancion => {
    generos.add(cancion.genero);
  });



    generos.forEach(genero => {
      const div= document.createElement('div');
      div.textContent =genero;
      div.className='generos-cont';
      console.log("se crearon ")

    
 div.addEventListener('click', () => { 
    console.log("Se presionó el género:"+ genero);
    });
      

      contgen.appendChild(div);
       

});



  const carousel =document.getElementById('tarcarr');
  artistas.forEach(artista => { //aqui se gestiona y crean los elementos del carrousel de artistas
    
      const img = document.createElement('img');
      img.className ='artista-img';  // class para hacer los iconos circulares para cada artista
      img.src =artista.url_img ;
      
      img.id ="imgart" + artista.id;


      

      carousel.appendChild(img);
    
    
  });

 
  const carruselw = document.getElementById('carrart');
  
    const btncarr = carruselw.querySelectorAll('button');//aqui pues bsuco los botones para recorrer
    const avancarr = 180;//cuanto avasa el carrousel

   
      
   
   let atras = btncarr[0];
  let adelante = btncarr[1];
  

  atras.addEventListener('click', () => {
    carousel.scrollBy({ left: -avancarr, behavior: 'smooth' });
  });

  adelante.addEventListener('click', () => {
    carousel.scrollBy({ left: avancarr, behavior: 'smooth' });
  });


  
