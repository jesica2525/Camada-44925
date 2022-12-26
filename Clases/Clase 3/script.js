/* let intentos = 0

let usuarioEnBD = "juanca@gmail.com"
let contraseniaEnBD = "juanca123"

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

if (intentos == 3) {
  alert("Demasiados intentos, vuelva a reintentar más tarde")
} */

/* if (usuarioIngresado == usuarioEnBD && contraseniaIngresada == contraseniaEnBD) {
  alert("Bienvenido")
} else {
  alert("Usuario y/o contraseña incorrecto/s")
} */

/* 
for (let i = 0; i < 5; i++) {
  console.log(i + 1)
} */

/* let cantidadDeIteraciones = Number(prompt("Ingrese cantidad de personas"))
let salida = ""
for (let i = 0; i < cantidadDeIteraciones; i++) {
  if (i == 2) {
    continue
  }
  let nombre = prompt("Ingrese nombre de la persona " + i)
  // salida = salida + nombre
  salida += nombre + "\n"
}
alert("La lista de nombres es:\n" + salida)

console.log("FIN") */

/* let numero1 = Number(prompt("Ingrese numero 1: "))
let numero2 = Number(prompt("Ingrese numero 2: "))
let menu = "Ingrese: \n1 - para sumar valores\n2 - para restar valores\n3 - para dividir valores\n4 - para multiplicar valores\n0 - para salir" */

/* let opcion
do {
  opcion = Number(prompt(menu))
  if (opcion == 1) {
    alert("La suma es " + (numero1 + numero2))
  } else if (opcion == 2) {
    alert("La diferencia es " + (numero1 - numero2))
  } else if (opcion == 3) {
    alert("La división es " + (numero1 / numero2).toFixed(2))
  } else if (opcion == 4) {
    alert("La multiplicación es " + (numero1 * numero2))
  } else if (opcion != 0) {
    alert("Opción incorrecta")
  }
} while (opcion != 0) */

/* let opcion = Number(prompt(menu))

while (opcion != 0) {
  if (opcion == 1) {
    alert("La suma es " + (numero1 + numero2))
  } else if (opcion == 2) {
    alert("La diferencia es " + (numero1 - numero2))
  } else if (opcion == 3) {
    alert("La división es " + (numero1 / numero2).toFixed(2))
  } else if (opcion == 4) {
    alert("La multiplicación es " + (numero1 * numero2))
  } else {
    alert("Opción incorrecta")
  }
  opcion = Number(prompt(menu))
} */

/* let precioProducto = Number(prompt("Ingrese precio producto"))
let total = 0
// SE EJECUTA DE 0 A N VECES
while (precioProducto > 0) {
  total = total + precioProducto
  precioProducto = Number(prompt("Ingrese precio producto"))
}
alert("Debe pagar $" + total) */

/* let precioProducto
let total = 0
// SE EJECUTA DE 1 A N VECES
do {
  precioProducto = Number(prompt("Ingrese precio producto"))
  if (precioProducto > 0) {
    total = total + precioProducto
  }
} while (precioProducto > 0)
alert("Debe pagar $" + total) */


