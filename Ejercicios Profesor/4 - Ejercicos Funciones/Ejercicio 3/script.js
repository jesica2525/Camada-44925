
let numero = Number(prompt("Ingrese un numero"))
calculaFactorial(numero)
alert(`El factorial de numero ingresado = ${numero} es ${resultado}`)

function calculaFactorial(numero){
    let suma = 1
    for (let i = 1; i <= numero; i++) {
        suma = suma*i
    }
    alert(`El factorial de numero ingresado ${numero} es ${suma}`)
}


