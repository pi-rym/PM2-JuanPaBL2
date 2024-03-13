const crearTarjetas = require('./index')

const axios = require('axios')

const solicitarMovies = async () => {
    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        const dataMovie = response.data;
        crearTarjetas(dataMovie); 
    } catch (error) {
        const blokTarjetas = document.getElementById('contenedor-tarjetas');
        blokTarjetas.style.display = 'none';
        alert(error.message);
    }
}

solicitarMovies();
