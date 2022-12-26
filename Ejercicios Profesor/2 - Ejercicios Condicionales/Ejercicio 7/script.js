let renta = prompt("Ingrese el valor de la renta anual")

if(renta<10000){
    alert(`Le corresponde un tipo impositivo del 5%`)
} else if((renta => 10000)&&(renta<20000)){
    alert(`Le corresponde un tipo impositivo del 15%`)
} else if((renta => 20000)&&(renta<35000)){
    alert(`Le corresponde un tipo impositivo del 20%`)
} else if((renta => 35000)&&(renta<60000)){
    alert(`Le corresponde un tipo impositivo del 30%`)
} else{
    alert(`Le corresponde un tipo impositivo del 45%`)
}