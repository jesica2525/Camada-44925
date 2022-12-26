/* let nombreIngresado = "Juan"
function saludar(nombre) {
  alert("Bienvenido/a " + nombre)
}

saludar(nombreIngresado)
*/

/* // como es la funcion sumar con funcion anonima y con funcion flecha
function saludar(nombre) {
  alert("Bienvenido/a " + nombre)
}


const saludar = nombre => { // funcion flecha, tiene que estar definida antes de ser llamada
  alert("Bienvenido/a " + nombre)
}
 */


/* function sumar(num1, num2) {
  return num1 + num2
  alert("La suma de los numeros es: " + resultado)
}
sumar(8,4)

function sumar2() {
  let num1 = Number(prompt("Ingrese un número"))
  let num2 = Number(prompt("Ingrese un número"))
  let resultado = num1 + num2
  alert("La suma de los números es: " + resultado)
}
sumar2()  */



/* function alertConSuma(num1, num2) {
  let resultado = num1 + num2
  alert("La suma de los números es: " + resultado)
}
alertConsuma(8,4)

function sumar(num1, num2){
  return num1 + num2
}

function multiplicar(num1, num2) {
  return num1 * num2
}

// 3 + 5 / 2 * 5
let resultado = sumar(3, 5) / multiplicar(2, 5)
console.log(resultado) */


/* 
// como es la funcion sumar con funcion anonima y con funcion flecha
function sumar(num1, num2){
  return num1 + num2
}

const sumar = function (num1, num2) { return num1 + num2 } // funcion anonima

const sumar = (num1, num2) => {return num1 + num2} // funcion flecha 
const sumar = (num1, num2) => num1 + num2 // funcion flecha simplificada
 */


/*
function programaPrincipal(){
  let usuarioEnBD = "juanca@gmail.com"
  let contraseniaEnBD = "juanca123"

  login(usuarioEnBD, contraseniaEnBD)
}

programaPrincipal()

function controlarIntentos(intentos){
  if (intentos == 3) {
    alert("Demasiados intentos, vuelva a reintentar más tarde")
  }
}

function login(usuarioEnBD, contraseniaEnBD){
  let intentos = 0
  let usuarioIngresado
  let contraseniaIngresada
  for (let i = 0; i < 3; i++) {
    usuarioIngresado = prompt("Ingrese su usuario")
    contraseniaIngresada = prompt("Ingrese su contraseña")
    intentos++
    if (usuarioIngresado == usuarioEnBD && contraseniaIngresada == contraseniaEnBD) {
      alert("Bienvenido")
      break
    } else {
      alert("Usuario y/o contraseña incorrecto/s")
    }
  }
  controlarIntentos(intentos)  
} */








// Escribir una función que calcule el área de un círculo y otra que calcule el volumen de un cilindro usando la primera función.

/* function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2)
}

function volCilindro(radio, altura) {
  return areaCirculo(radio) * altura
}

console.log(areaCirculo(2))
console.log(volCilindro(2, 5))

const areaCirculoFlecha = radio => Math.PI * Math.pow(radio, 2)
const volCilindroFlecha = (radio, altura) => areaCirculo(radio) * altura */



