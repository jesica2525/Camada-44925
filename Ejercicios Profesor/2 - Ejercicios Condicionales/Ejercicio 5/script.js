const TOPE = 1000
let edad = Number(prompt("Ingrese su edad"))
let ingresos = Number(prompt("Ingrese sus ingresos mensuales"))

if (edad >=16){
    if (ingresos >= TOPE){
        alert(`Usted TIENE que tributar`)
    }
} else{
    alert(`Usted NO tiene que tributar`)
}
