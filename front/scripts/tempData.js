const crearTarjetas = require('./index');
const validarForm = require('./form')

const axios = require('axios');

const solicitarMovies = async () => {
    try {
        const response = await axios.get('http://localhost:3000/movies');
        const dataMovie = response.data;
        crearTarjetas(dataMovie); 
    } catch (error) {
        alert(error.message);
    }
}

solicitarMovies();