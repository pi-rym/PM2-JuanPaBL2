/*const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
];*/

//CREA TARJETA PARA CADA ELEMENTO DE tempData.
function crearTarjetas(data) {
  const contenedorTarjetas = document.createElement('div');
  contenedorTarjetas.classList.add('contenedorG-tarjetas-best'); // Cambia esta clase según corresponda

  data.forEach(pelicula => {
    const tarjeta = document.createElement('li');
    tarjeta.classList.add('tarjeta-best'); // Cambia esta clase según corresponda

    tarjeta.innerHTML = `
      <div class="contenedor-tarjeta">
        <img src="${pelicula.poster}" class="imagen-tarjeta" id="imgt1">
        <div class="informacion">
          <h2 class="titulo" id="tarjeta-uno">${pelicula.title}</h2>
          <section class="detalles">
            <span><b>Año:</b></span><span id="spant1">${pelicula.year}</span><br>
            <span><b>Director:</b></span><span id="spant2">${pelicula.director}</span><br>
            <span><b>Duración:</b></span><span id="spant3">${pelicula.duration}</span><br>
            <span><b>Género:</b></span><span id="spant4">${pelicula.genre.join(', ')}</span>
          </section>
        </div>
      </div>
    `;

    contenedorTarjetas.appendChild(tarjeta);
  });

  const contenedorPrincipal = document.getElementById('lista-tarjetas');
  contenedorPrincipal.appendChild(contenedorTarjetas);
}

//EJECUTO LA FUNCION crearTarjetas CON LA DATA OBTENIDA CON EL GET A LA API.
$.get('https://students-api.2.us-1.fl0.io/movies', data => crearTarjetas(data));










