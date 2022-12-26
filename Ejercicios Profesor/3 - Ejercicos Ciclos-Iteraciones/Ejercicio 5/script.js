let cantidad = parseFloat(prompt("Ingrese la cantidad que quiere invertir"))
let interes = parseInt(prompt("Ingrese el interes"))
let anios = parseInt(prompt("Ingrese el plazo"))

for (let i = 1; i <= anios; i++) {
   cantidad *= 1 + interes/100
   
   alert("El capital tras "+ i +" es "+ cantidad.toFixed(2))
}