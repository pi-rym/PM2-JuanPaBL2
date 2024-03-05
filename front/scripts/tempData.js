const tempData = [
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
  {
    title: "Peaky Blinders",
    year: 2013,
    director: "Steven Knight",
    temporadas: "6",
    genre: ["Action", "Adventure", "Drama", "crimen", "policial"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
  }
];

//SELECCIONAR TARJETA UNO
const tarjetaUno = document.getElementById('tarjeta-uno');
tarjetaUno.innerHTML = tempData[0].title;

const span1 = document.getElementById('spant1')
span1.innerText = tempData[0].year

const span2 = document.getElementById('spant2')
span2.innerText = tempData[0].director;

const span3 = document.getElementById('spant3')
span3.innerText = tempData[0].duration;

const imgt1 = document.getElementById('imgt1');
imgt1.src = tempData[0].poster;

const span4 = document.getElementById('spant4')
span4.innerText = tempData[0].genre;


//SELECCIONAR TARJETA DOS
const tarjetaDos = document.getElementById('tarjeta-dos');
tarjetaDos.innerHTML = tempData[1].title;

const span11 = document.getElementById('spant1-1')
span11.innerText = tempData[1].year

const span22 = document.getElementById('spant2-1')
span22.innerText = tempData[1].director;

const span33 = document.getElementById('spant3-1')
span33.innerText = tempData[1].duration;

const imgt11 = document.getElementById('imgt1-1');
imgt11.src = tempData[1].poster;

const span44 = document.getElementById('spant4-1')
span44.innerText = tempData[1].genre;

//SELECCIONAR TARJETA TRES
const tarjetaTres = document.getElementById('tarjeta-tres');
tarjetaTres.innerHTML = tempData[2].title;

const span111 = document.getElementById('spant1-2')
span111.innerText = tempData[2].year

const span222 = document.getElementById('spant2-2')
span222.innerText = tempData[2].director;

const span333 = document.getElementById('spant3-2')
span333.innerText = tempData[2].duration;

const imgt111 = document.getElementById('imgt2-1');
imgt111.src = tempData[2].poster;

const span444 = document.getElementById('spant4-2')
span444.innerText = tempData[2].genre;















