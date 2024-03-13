//import el servidor
const app = require('./services/server');
const router = require('./routers/router');

app.use(router);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});