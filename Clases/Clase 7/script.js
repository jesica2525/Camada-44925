/* function mayorQue(n) {
  return (m) => m > n
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false */

/* function porCadaUno(numeros, funcion) {
  for (const numero of numeros) {
    funcion(numero)
  }
}

let numeritos = [4, 2, 7, 12]
porCadaUno(numeritos, console.log)
porCadaUno(numeritos, alert) */

let productos = [
  { id: 1, categoria: "celulares", precio: 78000, nombre: "samsung a70" },
  { id: 4, categoria: "computadoras", precio: 150000, nombre: "hp omen i5" },
  { id: 7, categoria: "computadoras", precio: 135000, nombre: "lenovo i3" },
  { id: 9, categoria: "audio", precio: 15000, nombre: "auricular" }
]
// For of = estructura iterativa
// For Each = No retorna, solo hace algo en la ejecucion
// Map = Si retorna un array. Se utiliza para modificar la informacion
// FIND = devuelve un unico elemente, devuelve el primero que encuentra. Si no encuentra nada devuelve undefined
// Filter = devuelve un array. Una lista de elementos

/* productos.sort((a, b) => {
  if (a.nombre > b.nombre) {
    return 1
  }
  if (a.nombre < b.nombre) {
    return -1
  }
  return 0
})
console.log(productos) */

/* let precioTotalStock = productos.reduce((acum, prod) => acum + prod.precio, 0)
console.log(precioTotalStock) */

// FILTER devuelve una lista de elementos es decir [] o [{...}] o [{...}, {...} ...]
/* let compusMayor50000 = productos.filter(producto => producto.precio > 10000 && producto.categoria === "computadoras")
console.log(compusMayor50000)
for (const producto of compusMayor50000) {
  console.log(producto.nombre)
} */

// FIND devuelve un único elemento o undefined
/* let productoBuscado = productos.find(producto => producto.id === 7)
console.log(productoBuscado) */

/* productos.forEach(producto => {
  console.log(producto.nombre)
}) */

/* let productosReducidos = productos.map(producto => {
  return {
    id: producto.id,
    nombre: producto.nombre 
  }
})
console.log(productosReducidos) */

/* let productosAmpliados = productos.map(producto => {
  return {
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    categoria: producto.categoria,
    vendido: false
  }
})
console.log(productosAmpliados) */

// MATH Y DATE
/* console.log(Math.random() * 30 + 20)

let fecha = new Date(2002, 11, 20)
console.log(fecha.getDay())
console.log(fecha.getHours())
console.log(fecha.getMonth())

const inicio = new Date()
productos.forEach(prod => console.log(prod.nombre))
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].nombre)
}
const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
*/

// Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario la nota que ha sacado en cada asignatura y elimine del array las asignaturas aprobadas. Al final el programa debe mostrar por pantalla las asignaturas que el usuario tiene que repetir 

// NO FUNCIONA, SI ALGUNO/A LO RESUELVE LO COMPARTE JAJAJA
/* let asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
let cantidadMaterias = asignaturas.length
let materiasIteradas = 0
let posicion = 0

do {
  let nota = Number(prompt("Ingrese nota de la materia " + asignaturas[posicion]))
  if (nota >= 6) {
    asignaturas.splice(posicion, 1)
    cantidadMaterias--
  } else {
    posicion++
  }
  materiasIteradas++
  console.log(asignaturas)
  if (materiasIteradas === asignaturas.length + 1) break
} while (cantidadMaterias != 0) */