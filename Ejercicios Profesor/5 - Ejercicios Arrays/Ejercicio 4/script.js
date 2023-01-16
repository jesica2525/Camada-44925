
let numero = []

alert(`Ingrese los 6 números ganadores de la lotería primitiva`)

for (let i = 0; i < 6; i++){
  numero[i] = prompt(`Ingrese el número [ ${(i+1)} ]`)
}

for (let i = 0; i < numero.length; i++) {
  for (let j = 0; j < numero.length; j++) {
    if (numero[i] < numero[j]) {
      let aux = numero[i]
      numero[i] = numero[j]
      numero[j] = aux
    }
  }
}
alert(numero.join(", "))

