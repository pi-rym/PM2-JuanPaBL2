const crearTarjetas = require('./index')

//EJECUTO LA FUNCION crearTarjetas CON LA DATA OBTENIDA CON EL GET A LA API.
$.get('https://students-api.2.us-1.fl0.io/movies', data => crearTarjetas(data));

/*const axios = require('axios')

const solicitarMovies = async () =>{
    //SI LA SOLICITUD TIENE EXITO
    try{
        //guardare un objeto con los datos de la api en la variable.
        const dataMovie = await axios.get()
    }
    catch (error){
        const blokTarjetas = document.querySelectorAll('.contenedorG-tarjetas-best').sty
        
    }
}

//si hago algun cambio, debo hacer npm run build*/