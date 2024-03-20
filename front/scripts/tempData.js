const crearTarjetas = require('./index');
const {validarForm, limpiarForm} = require("./form")

document.addEventListener('DOMContentLoaded', function() {
    // Aquí colocas tu código JavaScript
    const botonLimpieza = document.getElementById('boton-limpiar');
    botonLimpieza.addEventListener("click", limpiarForm);
  
    const formulario = document.getElementById('boton-enviar');
    formulario.addEventListener("click", validarForm);
});

const axios = require('axios');

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
