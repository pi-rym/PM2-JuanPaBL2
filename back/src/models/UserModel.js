//import el schema de la libreria moongose con destructuring
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//____CREAR SCHEMA_______
const productoSchema = new Schema({
    title: String,
    year: String,
    director: String,
    duration: String,
    genre:[{ type: String }],
    rate: Number,
    poster: String,
});


//___IMPLEMENTAR MODELO CON SCHEMA___

const Movie = model("Movie", productoSchema);

module.exports = Movie;