//import el servidor
const app = require('./services/server')

//Levanto el servidor
app.listen(3000, () => {
    console.log(`servidor escuchando en el puerto ${3000}`);
});
