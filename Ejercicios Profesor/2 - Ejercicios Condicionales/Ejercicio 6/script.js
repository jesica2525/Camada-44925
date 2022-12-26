let nombre = prompt("Ingrese su nombre")
let sexo = prompt("Ingrese su sexo (M) Mujer / (H) Hombre")

let plnombre = nombre.charAt(0).toLowerCase()
let plsexo = sexo.charAt(0).toLowerCase()

if (plnombre < "n"){
    if(plsexo == "m"){
        grupo = "A"
    } else{
        grupo = "B"
    }
} else {
    if(plsexo == "h"){
        grupo = "A"
    } else{
        grupo = "B"
    }
}
alert(`${nombre} perteneces al grupo ${grupo}`)
