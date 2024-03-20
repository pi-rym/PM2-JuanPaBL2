
//EVENT HANDLER VALIDAR FORM
function validarForm(event) {
    event.preventDefault();
  
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
  
  //EVENT HANDLER LIMPIEZA FORM
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

module.exports = {validarForm, limpiarForm};

