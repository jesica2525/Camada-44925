/*1. CREATIVIDAD: escribir una función que resuelva un pequeño problema y
cumpla con las siguientes carácteristicas…
ue no reciba parámetros y no devuelva ningún dato.

pedidoDatos()

function pedidoDatos(){
    let nombre = prompt("Ingrese su nombre")
    alert(`Hola ${nombre} espero que encuentres lo que buscas en esta página`)
}
*/

/* 2. CREATIVIDAD: escribir una función que resuelva un pequeño problema y
cumpla con las siguientes carácteristicas…
Que reciba parámetros y no devuelva ningún dato.

let numero1 = Number(prompt("Ingrese un numero"))
let numero2 = Number(prompt("Ingrese cuantos numeros desea sumarle"))
suma(numero1, numero2)

function suma(numero1, numero2){
    let resultado
    resultado = numero1 + numero2;
    alert(`El resultado de la suma entre ${numero1} y ${numero2} es ${resultado}`)
}
/* 

/*3. CREATIVIDAD: escribir una función que resuelva un pequeño problema y
cumpla con las siguientes carácteristicas…
Que no reciba parámetros y devuelva algún dato.

let nombre = prompt("Ingrese su nombre")
let frase
if(nombre.length>10){
    frase = mayorDiez()
} else{
    frase = menorDiez()
}
alert(`Segun su nombre, usted esta en ${frase}`)

function mayorDiez(){
    return "Miami"
}

function menorDiez(){
    return "Disney"
}
*/ 
/* 4. CREATIVIDAD: escribir una función que resuelva un pequeño problema y
cumpla con las siguientes carácteristicas…
Que reciba parámetros y devuelva algún dato. */ 

let nombre = prompt("Ingrese el nombre de su mascota")
let edad = Number(prompt("Ingrese la edad de su mascota"))
let sexo = prompt("Ingrese `h` (si es hembra) o `m` (si es macho)")
while ((sexo!=="h")&&(sexo!=="m")) {
    sexo = prompt("Ingrese `h` (si es hembra) o `m` (si es macho)")
}
let real = calculaEdad (sexo, edad)
alert(`${nombre} que tiene ${edad} años en realidad tiene ${real} años perrunos`)

function calculaEdad(sexo, edad){
    if(sexo.toLowerCase = "m"){
        return edad*5
    } else {
        return edad*7
    } 
}   
