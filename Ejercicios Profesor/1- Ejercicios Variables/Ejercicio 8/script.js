

let cantidad = parseInt(prompt("Ingrese la cantidad que desea invertir"))
let interes = parseFloat(prompt("Ingrese el interes anual"))
let anios = parseInt(prompt("Ingrese la cantidad de años que desea invertir"))

let ganancias = cantidad*(interes/100)*anios

alert(`Si usted invierte ${cantidad} a un interes del ${interes} por ${anios} años obtendra una ganancia de ${ganancias}`)


