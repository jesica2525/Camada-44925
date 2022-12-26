//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

/* let numero = Number(prompt("Ingrese un numero"))
let menu = "Ingrese: \n1 - Ingresar otro numero para seguir sumando\n2 - Salir y ver el resultado" 
let total = numero
do{
    opcion = Number(prompt(menu))
    if (opcion == 1){
        let numero2 = Number(prompt("Ingrese el numero que desea sumar"))
        total += numero2
    }
}while (opcion != 2)
alert(`La suma de los numeros ingresados es ${total}`) */


//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

/* let texto = prompt("Ingrese un texto")
let menu = "Ingrese: \n1 - Ingresar otro texto para armar la oracion\n2 - Salir y ver el resultado" 
let total = texto
do{
    opcion = Number(prompt(menu))
    if (opcion == 1){
        let texto2 = prompt("Ingrese el texto que desea sumar a la oracion")
        total += " " + texto2
    }
}while (opcion != 2)
alert(`La suma de los numeros ingresados es ${total}`)  */


//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces que ingrese el usuario

let cantidad = Number(prompt("Ingrese la cantidad de veces que desea ver la palabra `Hola` repetida" ))
for (let i = 0; i < cantidad; i++) {
    alert(`Hola`)
}