const aero = 500
const textil = 400
const home = 700
const sani = 900
const tope = 8000
const desc = 20
let suma = 0

// Funciones
function validaCantidad (cantidad){
    while ((isNaN(cantidad)) || (cantidad === null)) {
        alert("Debe Ingresar un numero");
        cantidad = Number(prompt("Ingrese la cantidad que quiere comprar"));
    } 
}

function validaSeleccion (seleccion){
    while ((isNaN(seleccion)) || (seleccion === null)|| (seleccion <=0) || (seleccion>5)){
        if ((seleccion <=0) || (seleccion>5)) {
            alert("El numero ingresado no coincide con ningun producto")
        } else{
            alert("Debe Ingresar un numero");
        }
        seleccion = prompt("Selecciona que productos queres comprar: \n 1-Aerosoles ($500) \n 2-Textiles ($400)\n 3-Home Spray ($700)\n 4-Sanitizantes ($900)\n 5-Salir \n\n SI SU COMPRA SUPERA LOS $8000 OBTENDRA UN 20% DE DESCUENTO")
    } 
}

const calcularPrecio = (cantidad, producto) => cantidad*producto
const descuento = (suma) => suma*desc/100;

// Programa Principal
do{
    seleccion = prompt("Selecciona que productos queres comprar: \n 1-Aerosoles ($500) \n 2-Textiles ($400)\n 3-Home Spray ($700)\n 4-Sanitizantes ($900)\n 5-Salir \n\n SI SU COMPRA SUPERA LOS $8000 OBTENDRA UN 20% DE DESCUENTO")
    validaSeleccion (seleccion)
    if (seleccion !== "5"){
        cantidad = Number(prompt("Ingrese la cantidad que quiere comprar"))
        validaCantidad (cantidad)
        switch (seleccion) {
            case "1":
                suma += calcularPrecio(cantidad, aero)
                break
            case "2":
                suma += calcularPrecio(cantidad, textil)
                break
            case "3":
                suma += calcularPrecio(cantidad, home)
                break;
            case "4":
                suma += calcularPrecio(cantidad, sani)
                break;
            default:
                break;
        }
    }
} while (seleccion !== "5");
if (suma>=tope){
    total = suma-descuento(suma);
    alert(`La suma total de la compra es de $ ${suma}`)
    alert(`Aplicando el descuento por haber superado la suma de $8000, lo que debe abonar es $ ${total}`);
} else {
    alert(`La suma total de la compra es de $ ${suma}`)
}

