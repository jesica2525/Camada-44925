console.log(productos);

class Producto {
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
}

do{
    opcion = parseInt(prompt("JYS Aromas - Elija una opcion -: \n\t 1. Agregar un producto  \n\t 2. Eliminar un Producto \n\t 3. Salir"));
    switch (opcion) {
        case 1:
            nombre = prompt("Ingrese el nombre del producto");
            validaProducto(nombre);
            precio = parseInt(prompt(`Ingrese el precio de ${nombre}`));
            validaPrecio (precio); 
            alert(`El producto ingresado es ${nombre} y el precio es ${precio} pesos.`);
            let idNuevo =+ productos.length + 1;
            let prodAgrega = new Producto (idNuevo, nombre, precio);
            productos.push(prodAgrega);
            break;
        case 2:
            let nombreEliminar = prompt("Ingrese el producto que quiere eliminar");
            validaProducto(nombreEliminar);
            quitarProducto(nombreEliminar);
            break;
        case 3:
            alert("Hasta Luego");
            break;
        default:
            break;
    }
} while (opcion != 3);


function quitarProducto(nombre){
    let arrayQuita = productos.filter(element => element.nombre !== nombre);
    console.log(arrayQuita)
}

function validaProducto (producto){
    while ((producto ==``)||(producto ==` `)||!(isNaN(producto))){
        alert("No ha ingresado ningun dato");
        producto = prompt("Ingrese el nombre del producto");
    } 
}

function validaPrecio (precio){
    while ((isNaN(precio)) || (precio === null)) {
        alert("Debe Ingresar un numero");
        precio = parseInt(prompt("Ingrese el precio del producto"));
    } 
}
