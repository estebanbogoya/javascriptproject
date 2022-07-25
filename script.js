function saludar(nombre) {
    let hola = ("Bienvenido a Futboleros.com, " + nombre + "!");
    return hola
}

let usuario = prompt("Hola! Como es tu nombre?")
alert(saludar(usuario))
 

class Articulo {
    constructor(nombre, precio, cantidad, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id = id;
    }
    subtotal(){
        return this.precio * this.cantidad
    }
}

const articulos = [
    new Articulo("Balon Adidas del Mundial", 200, 0, 1),
    new Articulo("Camiseta FCB", 99, 0, 2),
    new Articulo("Camiseta Real Madrid", 85, 0, 3),
    new Articulo("Camiseta AC Milan", 75.5, 0, 4)
]

function listarArticulos(articulos){
    let acumuladora = "Estos son los articulos disponibles: \n"
    articulos.forEach(elemento => {
        acumuladora += elemento.id + ". Articulo: " + elemento.nombre + " Precio: "+ elemento.precio + "\n";
    });
    alert(acumuladora)
}

const carrito = []

do {
    let menu = prompt("Hola! Que te gustaria hacer?: \n1. Ver Articulos disponibles. \n2. Comprar articulos.\nPresiona X para salir.").toUpperCase()
    switch (menu) {
        case "1":
            listarArticulos(articulos)
            break;
        case "2":
            listarArticulos(articulos);
            let compra = prompt("Que articulo te gustaria comprar? Ingresa el numero del articulo (1, 2, 3 o 4)");
            let articuloSeleccionado = articulos.find((articulo) => articulo.id == parseInt(compra));
            carrito.push(articuloSeleccionado)
            alert("Has agregado " + articuloSeleccionado.nombre + " a tu carrito por un valor de $" + articuloSeleccionado.precio)
            
            // mostrar alert solo si ID ingresado es valido
            break;
        default:
            break;
    }
} while (menu != "X");







/* const total = articulos.reduce((acumulado, articulo)=> {
    return acumulado + articulo.subtotal();
},0)

console.log(total); */