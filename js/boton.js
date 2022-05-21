/*console.log("presiono boton  a ver si sale")*/

function calcularPrecio() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let descuento = document.getElementById("sel1").value;
    let totalAPagar = document.getElementById("totalAPagar").value;
    

    let estudiante = parseFloat(0.2);
    let trainee = parseFloat(0.5);
    let junior = parseFloat(0.85);
    let valorEntrada = parseInt(200);
    let total;


switch (descuento) {
    case "estudiante":
        total = valorEntrada * cantidad * estudiante;
        break;
    case "trainee":
        total = valorEntrada * cantidad * trainee;
         break;       
    case "junior":
        total = valorEntrada * cantidad * junior;
         break;
    default:
        total=cantidad * valorEntrada;
}
document.getElementById("resumen").onclick= calcularPrecio;
document.getElementById("totalAPagar").value = total;
/*console.log(evt);
console.log(totalAPagar) */
}

document.getElementById("totalAPagar");





 

