/* const persona = {
  nombre: prompt("ingrese su nombre"),
  apellido: "Gomez",
  edad: 32,
  licenciaConducir: true,
  sangre: {
    grupo: "A",
    factor: "+"
  }
}

console.log(persona.nombre)
persona.nombre = "Juan"
console.log(persona["nombre"])

persona.dni = 38234456
console.log(persona)

console.log(persona.sangre.grupo + persona.sangre.factor)
 */

/* const persona1 = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 39,
  calle: "Av. Siempreviva 742"
}

const persona2 = {
  nombre: "Marge",
  apellido: "Simpson",
  edad: 36,
  calle: "Av. Siempreviva 742"
}

function Persona(nombre, edad, calle) {
  this.nombre = nombre
  this.edad = edad
  this.calle = calle
}

const persona3 = new Persona("Maggie", 2, "Av. Siempreviva 742")

console.log(persona1)
console.log(persona2)
console.log(persona3)

 */


/* function nombreCompleto(persona) {
  return persona.nombre + " " + persona.apellido
}

console.log(nombreCompleto(persona1)) */

// PASO INTERMEDIO ENTRE USAR O NO CLASES
/* 
function Persona(nombre, apellido, edad, calle) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.calle = calle
  this.nombreCompleto = () => nombre + " " + apellido
} */

/* class Persona {
  constructor(nombre, apellido, edad, calle) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.calle = calle
  }
  nombreCompleto() { return this.nombre + " " + this.apellido}
}

const persona3 = new Persona("Maggie", "Simpson", 2, "Av. Siempreviva 742")

console.log(persona1)
console.log(persona2)
persona3.dni = 12345678
console.log(persona3)
console.log(persona3.nombreCompleto())

// "nombre" "apellido" "edad" "calle" "nombreCompleto"...
for (const prop in persona3) {
  console.log(prop + " " + persona3[prop])
} */

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase()
    this.precio = parseFloat(precio)
    this.vendido = false
    this.precioIncrementado = this.precio * 1.21
  }
  sumaIva() {
    this.precio = this.precio * 1.21
  }
  obtenerPrecioMasIva() {
    return this.precio * 1.21
  }
  precioIncrementado() {
    this.precioIncrementado = this.precio * 1.21
  }
  vender() {
    this.vendido = true
  }
}

const producto1 = new Producto("arroz", "125.50")
const producto2 = new Producto("fideo", "50")
console.log(producto1)
console.log(producto2)
producto1.sumaIva()
let precioProducto2Incrementado = producto2.obtenerPrecioMasIva()
console.log(producto1)
console.log(producto2)
console.log(precioProducto2Incrementado)

producto2.vendido = true
// producto2.vender()
// producto2.precioIncrementado()
console.log(producto2)
/* producto2.sumaIva()
producto1.vender() */

/* const saludar = () => console.log("HOLA")

saludar()

saludar2()

function saludar2() {
  console.log("HOLA2")
} */

// EJEMPLOS EJERCICIOS EN CLASE
class Persona {
  constructor(nombre, apellido, edad, pais, nombre_usuario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.pais = pais;
    this.nombre_usuario = nombre_usuario;
  }
}
const persona = new Persona(prompt("ingrese nombre"), prompt("ingrese apellido"), Number(prompt("edad")), prompt("ingrese pais"), prompt("ingrese nombre de usuario"))
console.log(persona)