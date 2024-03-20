//EVENT HANDLER LIMPIEZA FORM
function validarForm() {

    //obtengo el valor de los inputs
    const input01 = document.getElementById('input01').value;
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
  
    if (input01.trim() === '' || input1.trim() === '' || input2.trim() === '' || input3.trim() === '' || input4.trim() === '') {
      alert('Por favor completa todos los campos.')
      return;
    }

    limpiarForm();
}

function limpiarForm(){
    const input01 = document.getElementById('input01');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');

    input01.value = '';
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';

    input01.focus();
}

// EVENT LISTENER LIMPIEZA FORM
const botonLimpieza = document.getElementById('boton-limpiar');
botonLimpieza.addEventListener("click", limpiarForm);

// EVENT LISTENER ENVÍO FORMULARIO
const formulario = document.getElementById('boton-enviar');
formulario.addEventListener("submit", validarForm);

module.exports = {validarForm, limpiarForm};
