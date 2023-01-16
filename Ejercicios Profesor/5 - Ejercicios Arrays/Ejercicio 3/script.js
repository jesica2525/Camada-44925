let asignaturas = ["Matematicas", "Física", "Química", "Historia", "Lengua"]
let notas = []

for (let i = 0; i < asignaturas.length; i++) {
    notas[i] = prompt(`Ingrese la nota que se saco en ${asignaturas[i]}`)
}

for (let i = 0; i < asignaturas.length; i++) {
    alert(`En ${asignaturas[i]} has sacado ${notas[i]}`)
}





