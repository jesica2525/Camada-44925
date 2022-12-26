const MUNECA = 75
const PAYASO = 112

let cantMuneca = Number(prompt("Ingrese la cantidad de muñecas del pedido realizado"))
let cantPayaso = Number(prompt("Ingrese la cantidad de payasos del pedido realizado"))

let pesoTotal = cantMuneca*MUNECA + cantPayaso*PAYASO

alert(`El peso total del pedido es de ${pesoTotal}`)

