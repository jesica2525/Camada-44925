let abece = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let aux = []

for (let i = 1; i <= abece.length; i++) {
    if (i % 3 == 0) {
        aux[i] = abece[i]
    }
}
alert(aux)
