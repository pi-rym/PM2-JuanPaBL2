//creo el controlador (middleware) que manejara la solicitud
const peliculas = require('../services/peliculas')

const controlador = async (req, res) => { 
    try{
        const arrayPeliculas = await peliculas.returnMovies();
        res.status(200).json(arrayPeliculas);
    } catch (error){
        res.status(500).send(error.message);

    }
    // Enviar el arreglo de películas como respuesta al cliente
    
}

module.exports = {controlador};

