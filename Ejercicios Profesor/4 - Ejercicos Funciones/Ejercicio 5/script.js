
let radio = Number(prompt("Ingrese el radio del circulo"))
area = calcularArea (radio).toFixed(2)
alert(`El area del circulo es ${area}`)
let altura = Number(prompt("Ingrese la altura del cilindro"))
let vol = calcularVolumen(area,altura).toFixed(2)
alert(`El volumen del cilidro es ${vol}`)

function calcularArea(radio){
    return Math.PI * Math.pow(radio, 2)
}
//Misma funcion hecha como fecha
// const calcularArea = radio => Math.PI * Math.pow(radio, 2)

function calcularVolumen(area, altura){
    return calcularArea(radio)*altura
}
//Misma funcion hecha como fecha
//const calcularVolumen = (radio, altura) => calcularVolumen(radio) * altura


// Escribir una función que calcule el total de una factura tras aplicarle el IVA. La función debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. Si se invoca la función sin pasarle el porcentaje de IVA, deberá aplicar un 21%.

/* function calcularTotalFactura(monto, porcentajeIva) {
  let iva = 21
  if (porcentajeIva) {
    iva = porcentajeIva
  }
  return monto + monto * iva / 100
}

alert("Debe pagar: " + calcularTotalFactura(1000, 10))
alert("Debe pagar: " + calcularTotalFactura(1000)) */


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

