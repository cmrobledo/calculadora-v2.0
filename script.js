//Función para agregar números a la pantalla de acuerdo al boton que toquemos

function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

//Función para borrar todo lo de la pantalla al presionar botón AC
function borrar(){
  document.getElementById("pantalla").value = "";
}



//Función para que realice operaciones matemáticas en la pantalla
function calcular(){
 const valorPantalla = document.getElementById("pantalla").value;
 const resultado = eval(valorPantalla);
 document.getElementById("pantalla").value = resultado;
}

//El "eval" de la línea 15 calcula matemáticamente todo lo que se ponga en valores string


//Funciones para redondear cifras
function floor() {
  let redondearAbajo = document.getElementById("pantalla").value;
  const resultado2 = Math.floor(redondearAbajo);
  document.getElementById("pantalla").value = resultado2;
}

function round() {
  let redondear = document.getElementById("pantalla").value;
  const resultado3 = Math.round(redondear);
  document.getElementById("pantalla").value = resultado3;
}