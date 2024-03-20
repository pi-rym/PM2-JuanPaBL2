const crearTarjetas = require('./index')
const { limpiarForm, validarForm } = require('./form');


const axios = require('axios')

const solicitarMovies = async () => {
    try {
        const response = await axios.get('http://localhost:3000/movies');
        const dataMovie = response.data;
        crearTarjetas(dataMovie); 
    } catch (error) {
        const blokTarjetas = document.getElementById('contenedor-tarjetas');
        blokTarjetas.style.display = 'none';
        alert(error.message);
    }
}

solicitarMovies();
