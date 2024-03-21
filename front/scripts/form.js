const axios = require('axios');

function validarForm(){
    const title = document.getElementById('titulo').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duracion').value;
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;
    const year = document.getElementById('año').value;

    //valido que los campos no esten vacios
    if (title.trim() === '' || year.trim() === '' || director.trim() === '' || duration.trim() === '' || rate.trim() === '' || poster.trim() === '') {
        alert('Por favor completa todos los campos.')
        return;
    }
    if (year.length !== 4 || isNaN(year)) {
       alert('Por favor, ingrese un año válido de 4 dígitos.');
       return;
    }

   //Obtener los géneros
   const generosSeleccionados = [];

   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach(function(checkbox) {
       if (checkbox.checked) {
           generosSeleccionados.push(checkbox.value);
       }
   });

   //Validar los checkbox
   if (generosSeleccionados.length === 0) {
       alert('Por favor, selecciona al menos un género.');
       return;
   }

    //insertar los datos obtenidos del formulario en un objeto
    const dataPost = {title, director, duration, rate, poster, year, genre: generosSeleccionados};
    return dataPost;
}


function cleanForm(){
     // Establecer los valores de los inputs en cadena vacía o en su estado predeterminado
     document.getElementById('titulo').value = '';
     document.getElementById('director').value = '';
     document.getElementById('duracion').value = '';
     document.getElementById('rate').value = '';
     document.getElementById('poster').value = '';
     document.getElementById('año').value = '';
     // Desmarcar todos los checkboxes
     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
     checkboxes.forEach(function(checkbox) {
         checkbox.checked = false;
     });
}


    // Aquí colocas tu código JavaScript
    const botonLimpieza = document.getElementById('botonLimpiar');
    botonLimpieza?.addEventListener("click", cleanForm);
  
    const botonEnviar = document.getElementById('botonEnviar');
    //event handler del boton enviar fomulario
    botonEnviar?.addEventListener("click", async () =>{
        try {
           const datos = validarForm(); // Almacena el objeto retornado por validarForm en la variable 'datos'
           await axios.post('http://localhost:3000/movies', datos); // Utiliza 'datos' en la solicitud POST
       } catch (error) {
           alert(error.message);
       }
   });