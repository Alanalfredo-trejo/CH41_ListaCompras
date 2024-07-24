// El codigo va aqui ->
//Creamos variables para los botones identificandolos con su ID
//Basicamente creamos una variable por cada ID del HTML
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad() {
  if (txtNumber.value.length == 0) {
    return false;
  } //if length
  return true;
} //validadCantidad
//Le damos funcionalidad a los botones

btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  txtNombre.style.border = "";
  txtNumber.style.border = "";
  //Aqui le estamos dando una condicion al boton agregar donde si las letras son menor a 3 nos lanzará una alerta que dice que el número es incorrecto
  if (txtNombre.value.length < 3) {
    alertValidacionesTexto.innerHTML =
      "El <strong>Nombre</strong> no es correcto<br/>";
    alertValidaciones.style.display = "block";
    txtNombre.style.border = "solid red medium";
  } //length<3
  if (!validarCantidad()) {
    alertValidacionesTexto.innerHTML +=
      "El <strong>Número</strong> no es correcto";
    alertValidaciones.style.display = "block";
    txtNumber.style.border = "solid red medium";
  } //validarCantidad
});

btnClear.addEventListener("click", function (event) {
  event.preventDefault();

  // Agregamos funcionalidad indicando borrar el texto al dar click
  txtNombre.value = "";
  txtNumber.value = "";
});
