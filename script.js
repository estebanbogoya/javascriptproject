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

const botonA = document.getElementById('opcionA')
botonA.addEventListener('click', ()=>{
    alert("Has agregado el Balon del Mundial a tu carrito!")
})

const botonB = document.getElementById('opcionB')
botonB.addEventListener('click', ()=>{
    alert("Has agregado la Camiseta del FC Barcelona a tu carrito!")
})

const botonC = document.getElementById('opcionC')
botonC.addEventListener('click', ()=>{
    alert("Has agregado la camiseta del Real Madrid a tu carrito!")
})

const botonD = document.getElementById('opcionD')
botonD.addEventListener('click', ()=>{
    alert("Has agregado la camiseta del AC Milan a tu carrito!")
})




