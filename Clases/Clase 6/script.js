/*let edades = [34, 23, 25, 76, 90, "HOLA", false]
// posiciones  0   1   2   3   4
console.log(edades.length)
console.log(edades[5])

edades[2] = 105 // para cambiar el valor del array
console.log(edades)

for (let i = 0; i < edades.length; i++) { // recorrer un array
  console.log(edades[i])
} */

// .push = agrega al final. Modifica el array original
//. unshift = agrega al principio. Modifica el array original
//. shit = elimina el primero. Modifica el array original
// . pop = elimina el ultimo. Modifica el array original
// . splice = elimina elementos del medio, le indico la posicion de arranque y la cantidad de elementos a eliminar. Modifica el array original
// . join = agarra los elementos del array y los convierte en un gran string separados por el separador que yo le indico. Modifica el array original
// . concat = concatena elementos de varios arrays. Modifica el array original
// . slice = crea una copia del array, se le pasa desde cual a cual (el ultimo sin incluir). No modifica el array original

/* let paises = ["Argentina", "Francia", "Croacia", "Marruecos"]
// paises.pop() Elimina Marruecos
paises.splice(1, 1) Elinima Francia
paises.push("Brasil") Agrega Brasil al final
console.log(paises) */

/* let nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// posiciones      0        1         2      3         4 

nombres.splice(2, 0, "Juan") - Agrega Juan en la posicion 2
console.log(nombres) */

/* let numeros = [9, 2, 6, 2, 7]
alert(numeros.join(", ")) */

// indexOf = Sirve para encontrar la posicion de un elemento. Solo devuelve cuando encuentra el primero, si hay mas devuelve la primera posicion. No modifica el array original

/* const nombres = ["Ana", "Maria", "Juan"]
let nombre = prompt("Ingrese un nombre para ver si está en la lista")
console.log(nombres.indexOf(nombre))
if (nombres.indexOf(nombre) != -1) {
  alert(nombre + " está invitado/a")
} else {
  alert(nombre + " no está invitado/a")
} */


// includes = es igual al indexOf con la diferencia que devuelve true si existe y false si no existe. No modifica el array original
// reverse = da vuelta el orden de los elementos. Modifica el array original
/* const nombres = ["Ana", "Maria", "Marcos", "Juan"]
let nombre = prompt("Ingrese un nombre para eliminar en caso de que exista")

if (nombres.includes(nombre)) {
  let posicion = nombres.indexOf(nombre)
  nombres.splice(posicion, 1)
}
console.log(nombres) */

const personas = [
  { id: 1, nombre: "Ana" },
  { id: 4, nombre: "Maria" },
  { id: 7, nombre: "Juan" }
]

/* for (let i = 0; i < personas.length; i++) {
  console.log(personas[i].nombre)  
} */

for (const persona of personas) {
  console.log(persona.nombre)
}






/* console.log(incrementar(10))

function incrementar(valor, incremento) {
  if (incremento) {
    return valor + incremento
  } else {
    return valor + 1
  }
} */



