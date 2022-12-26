let peso = parseFloat(prompt("Ingrese su peso"))
let estatura = parseFloat(prompt("Ingrese su estatura"))
let imc = Math.round((peso / ((estatura)^2)),2)

alert(`Tu indice de masa corporal es ${imc}`)