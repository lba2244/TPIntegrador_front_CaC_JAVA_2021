/*console.log("presiono boton  a ver si sale")*/

function calcularPrecio(evt) {
    let cant = parseInt(document.getElementById("cantidad").value);
    let descuento = document.getElementById("categoria").value;
    let totalAPagar = document.getElementByI("totalAPagar");
    let salida = document.getElementById("resumen");

    let estudiante = parseFloat(0.2);
    let trainee = parseFloat(0.5);
    let junior = parseFloat(0.85);
    let entrada = parseInt(200);
    let total;


switch (descuento) {
    case "estudiante":
        total = entrada * cantidad * estudiante;
        break;
    case "trainee":
        total = entrada * cantidad * trainee;
         break;       
    case "junior":
        total = entrada * cantidad * junior;
         break;
    default:
        total=cantidad * entrada;
}
      totalAPagar.innerHTML="total a Pagar" +total ;
     

   
console.log("total");

resumen.onclick=total;

}