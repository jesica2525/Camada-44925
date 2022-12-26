/* console.log(5 == 8)
console.log("HOLA" == "HOLA")
console.log("HOLA" == "Hola")

console.log("5" == 5)   // es igual
console.log("5" === 5)  // es estrictamente igual

let edad = Number(prompt("Ingrese su edad"))
console.log(edad)

if (edad > 17) {
  alert("Usted es mayor de edad")
} else if (edad > 0) {
  alert("Usted es menor de edad")
} else {
  alert("Ingresó un dato incorrecto")
}
 */

/* let nombreIngresado = prompt("Ingresar nombre");

if (nombreIngresado.toLowerCase() == "ana") {
  alert("El nombre ingresado es Ana");
} else {
  alert("El nombre ingresado NO ES Ana");
} */


/* let usuarioEnBD = "juanca@gmail.com"
let contraseniaEnBD = "juanca123"

let usuarioIngresado = prompt("Ingrese su usuario")
let contraseniaIngresada = prompt("Ingrese su contraseña")

if (usuarioIngresado == usuarioEnBD && contraseniaIngresada == contraseniaEnBD) {
  alert("Bienvenido")
} else {
  alert("Usuario y/o contraseña incorrecto/s")
} */

// let fruta = prompt("Ingrese fruta para saber su precio")

/* if (fruta.toLowerCase() == "naranja") {
  alert("el kilo de naranjas sale $450")
} else if (fruta.toLowerCase() == "manzana") {
  alert("el kilo de manzanas sale $550")
} else if (fruta.toLowerCase() == "pera") {
  alert("el kilo de peras sale $500")
} else {
  alert("no está disponible")
} */

/* switch (fruta.toLowerCase()) {
  case "naranja":
    alert("el kilo de naranjas sale $450")
    break
  case "manzana":
    alert("el kilo de manzanas sale $550")
    break
  case "pera":
    alert("el kilo de peras sale $500")
    break
  default:
    alert("no está disponible")
    break
} */

/* let opcion = Number(prompt("Ingrese \n1 - para ver precio de naranjas\n2 - para ver precio de manzanas\n3 - para ver precio de peras"))

switch (opcion) {
  case 1:
    alert("el kilo de naranjas sale $450")
    break
  case 2:
    alert("el kilo de manzanas sale $550")
    break
  case 3:
    alert("el kilo de peras sale $500")
    break
  default:
    alert("no está disponible")
    break
} */

/* let nMayor = prompt("Ingrese un numero mayor a 1000")

if (nMayor > 1000) {
  alert("El numero es Mayor a 1000")
} else {
  alert("Ingresar un numero Mayor a 1000")
} */

/* let tHola = prompt("Escribe Hola")
if (tHola === "Hola") {
  alert("Texto Correcto")
} */

/* let numero = prompt("ingrese un numero")
if (numero >= 10 & numero <= 50) {
  alert("esta entre 10 y 50")
} else {
  alert("su numero no esta entre 10 y 50")
}  */


let opcion = Number(prompt("Ingrese  \n1 - para ver precio de las naranjas \n2 - para ver precio de manzanas \n3- para ver precio de peras"))
switch (opcion) {
  case 1:
    alert("el kilo de naranjas sale $450")
    break
  case 2:
    alert("el kilo de manzanas sale $550")
    break
  case 3:
    alert("el kilo de peras sale $500")
    break
  default:
    alert("no está disponible")
    break
}
