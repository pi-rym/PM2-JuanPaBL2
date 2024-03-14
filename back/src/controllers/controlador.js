//creo el controlador (middleware) que manejara la solicitud
const peliculas = require('../services/peliculas')

const controlador = (req, res) => { 
    const arrayPeliculas = peliculas.returnMovies();
    // Enviar el arreglo de películas como respuesta al cliente
    res.status(200).json(arrayPeliculas);
}

module.exports = {controlador};

