let asignaturas = ["Matematicas", "Física", "Química", "Historia", "Lengua"]
let notas = []
let aux = []

for (let i = 0; i < asignaturas.length; i++) {
    notas[i] = prompt(`Ingrese la nota que se saco en ${asignaturas[i]}`)
    if (notas[i] < 6) {
        aux[i] = asignaturas[i]
    }
}
alert(aux.join(" , "))

