let numero = Number(prompt("Ingrese un numero para ver si es primo"))
esPrimo = true

for (let i = 2; i = numero; i++) {
    if(numero % i == 0) {
        esPrimo = false
        break
      }
}
if (esPrimo){
    console.log("El numero ingresado es primo")
} else{
    console.log("El numero ingresado no es primo")
}