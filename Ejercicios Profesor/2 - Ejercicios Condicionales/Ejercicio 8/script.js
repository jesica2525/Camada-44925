let edad = Number(prompt("Ingese su edad"))

if (edad <= 4){
    grupo = 1
} else if (edad > 4 && edad < 13){
    grupo = 2
} else if (edad >= 13 && edad <= 17){
    grupo = 3
}else{
    grupo = 4
}

switch (grupo) {
    case 1:
        alert("Puede ingresar gratis")
        break
    case 2:
        alert("Debe abonar $5 por la entrada")
        break
    case 3:
        alert("Debe abonar $8 por la entrada")
        break
    case 4:
        alert("Debe abonar $10 por la entrada")
        break
    default:
        break;
}

