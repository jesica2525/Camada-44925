/* const DESC = 60
const PRECIO = 3.49

let panViejo = Number(prompt("Ingrese la cantidad de barras de pan que no son del dia se vendieron"))

let precioTotal = PRECIO*panViejo
let descTotal = (precioTotal*DESC)/100

alert(`El precio de la barra de pan por la cantidad solicitada asciendo a un precio de $ ${precioTotal.toFixed(2)} se le realizara un descuento porque no son del dia del ${descTotal.toFixed(2)} y se debe abonar ${precioTotal-descTotal}` )
 */

const precio=3.49
const descuento = Math.round(precio*0.6*100)/100

let cantidad = prompt(`Barras vendidas que no son del dia`)
let costo  = (precio-descuento)*cantidad
let costoRedondeado = (Math.round((precio-descuento)*cantidad)*100)/100

alert(`La barra de pan cuesta $${precio}`)
alert(`Se le hace un descuento de $${descuento}`)
alert(`Costo final total $${costo} y redondeado es $${costoRedondeado}`)