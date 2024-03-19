const Movie = require('../models/UserModel')


const returnMovies = async () => {
    try {
        // Usamos Mongoose para obtener las películas desde la base de datos
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        throw new Error('Error al obtener las películas');
    }
};

module.exports = {
    returnMovies: returnMovies
};
//la validacion la usa en el modulo servicio 