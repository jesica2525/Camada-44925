
let numero = prompt("Ingrese un numero para mostrar su tabla de multiplicar")
let total = ""

for (let i = 0; i<=10; i++){
    total += numero+" x "+ i +" = "+ numero*i +"\n"
}
alert("La tabla del "+numero+": \n"+total)

