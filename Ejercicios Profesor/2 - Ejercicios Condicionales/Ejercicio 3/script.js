let numero1 = Number(prompt("Ingrese un numero"))
let numero2 = Number(prompt("Ingrese otro numero"))

let division = numero1/numero2

if (numero2 != 0){
    alert(`La division entre ${numero1} y ${numero2} es ${division}`)
} else{
    alert("No se puede realizar una division por 0")
}
