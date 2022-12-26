let montoSinIva = Number(prompt("Ingrese el importe de la factura sin IVA"))
let iva = Number(prompt("Ingrese el porcentaje de iva a cobrar"))
calcularIva(montoSinIva, iva)

function calcularIva(montoSinIva, iva){
    let calculo
    if (iva!=""){
        calculo = montoSinIva + montoSinIva*iva/100
    } else{
        calculo = montoSinIva + montoSinIva*21/100
    }
    alert(`El total de la factura con IVA es ${calculo}`)
}


