//El codigo va aqui-->
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let alertValidaciones = document,getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidaciones");

function validarCantidad(){
    if(tztNumber.value.length==0){
        return false;
    }// if length
}//validarCantidad

btnAgregar.addEventListener("click", function(event){
    event,preventDefault();
    alertValidacionesTexto.innerHTML=""
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNombre.style.border="";   
    if(txtNombre.value.legth<3){
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto"
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium"

    }//legth<3

    if(! validarCantidad()){
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es el correcto";
        alertValidaciones.style.display¡"block";
        txtNumber.style.border="solid red medium";
    }


});

btnClear.addEventListener("click", function(event){
    event.preventDefault();

    txtNombre.value = "";
    txtNumber.value = "";

});
