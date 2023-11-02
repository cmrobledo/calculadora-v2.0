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

