//creo el controlador que manejara la solicitud
const controlador = (req, respuesta) => { 
    respuesta.status(200).send("proximamente estaran disponibles los datos de peliculas")
}

module.exports = {controlador};

