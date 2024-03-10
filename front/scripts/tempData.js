const crearTarjetas = require('./index')

//EJECUTO LA FUNCION crearTarjetas CON LA DATA OBTENIDA CON EL GET A LA API.
$.get('https://students-api.2.us-1.fl0.io/movies', data => crearTarjetas(data));


//si hago algun cambio, debo hacer npm run build