
const productos = [{ articulo: "Balon Mundial", precio: 200 },
{ articulo: "Camiseta FC Barcelona", precio: 99 },
{ articulo: "Camiseta Real Madrid", precio: 85 },
{ articulo: "Camiseta AC Milan", precio: 75.5 }
]

let usuario = prompt("Ingresa tu nombre de Usuario.")
let claveAceptada = 1997
let ingreso = false
let valorBalon = 200
let valorFCB = 99
let valorRM = 85
let valorACM = 75.5
let valorIVA = 0.19
const despedida = "Gracias por tu visita. Hasta luego!"

function saludar(nombre) {
    let hola = ("Bienvenido a Futboleros.com, " + nombre + "!");
    return hola
}

function compratotal(valorA, valorB,) {
    let sumar = (valorA * valorB) + valorA;
    return sumar
}

for (let i = 2; i >= 0; i--) {
    let claveUsuario = prompt("Ingresa tu clave por favor. Recuerda que tienes 3 intentos");
    if (claveUsuario == claveAceptada) {
        alert(saludar(usuario));
        ingreso = true;
        break;
    } else {
        alert("Clave Incorrecta Te quedan " + i + " intentos.");
    }
}

if (ingreso == true) {

    let preguntaUsuario = prompt("Deseas ver que productos tenemos disponibles? Presiona '1' si quieres continuar").toUpperCase;
    
    while (preguntaUsuario == "1") {
        alert("Tenemos disponible: " + productos.articulo + ", por un precio de $" + productos.precio + "usd.");
        preguntaUsuario = "Presiona '2' Para continuar."
    }

    let articulos = prompt("Selecciona lo que quieres comprar: \n1. Balon Adidas del Mundial de Futbol. \n2. Camiseta del FC Barcelona \n3. Camiseta del Real Madrid. \n4. Camiseta del AC Milan.\n5. Consultar el valor de mi compra. \nPresiona 'X' si quieres salir.");
    let saldo = 0
    while (articulos != "X") {
        switch (articulos) {
            case "1":
                let pregunta1 = prompt("El valor del Balon del Mundial $" + valorBalon + "usd, antes de IVA. Deseas comprarlo? \n1. Si \n2. No")
                if (pregunta1 == "1") {
                    alert("El valor total de tu compra con IVA es de: $" + compratotal(valorBalon, valorIVA) + "usd.")
                    saldo = saldo + compratotal(valorBalon, valorIVA)
                    alert("Tu compra final es de $" + saldo + " usd.")
                }
                break;
            case "2":
                let pregunta2 = prompt("El valor de la Camiseta del FCB es $" + valorFCB + "usd, antes de IVA. Deseas comprarlo? \n1. Si \n2. No")
                if (pregunta2 == "1") {
                    alert("El valor total de tu compra con IVA es de: $" + compratotal(valorFCB, valorIVA) + "usd.")
                    saldo = saldo + compratotal(valorFCB, valorIVA)
                    alert("Tu compra final es de $" + saldo + " usd.")
                }
                break;
            case "3":
                let pregunta3 = prompt("El valor de la camiseta del Real Madrid es $" + valorRM + "usd, antes de IVA.  Deseas comprarlo? \n1. Si \n2. No")
                if (pregunta3 == "1") {
                    alert("El valor total de tu compra con IVA es de: $" + compratotal(valorRM, valorIVA) + "usd.")
                    saldo = saldo + compratotal(valorRM, valorIVA)
                    alert("Tu compra final es de $" + saldo + " usd.")
                }
                break;
            case "4":
                let pregunta4 = prompt("El valor de la camiseta del AC Milan es $" + valorACM + "usd, antes de IVA.  Deseas comprarlo? \n1. Si \n2. No")
                if (pregunta4 == "1") {
                    alert("El valor total de tu compra con IVA es de: $" + compratotal(valorACM, valorIVA) + "usd.")
                    saldo = saldo + compratotal(valorACM, valorIVA)
                    alert("Tu compra final es de $" + saldo + " usd.")
                }
                break;
            case "5":
                alert("El valor de tu compra hasta el momento es de: $" + saldo + "usd.")
                break;
            default:
                alert("No ingresaste una opcion valida.")
                break;
        }
        articulos = prompt("Deseas continuar comprando?: \n1. Balon Adidas del Mundial de Futbol. \n2. Camiseta del FC Barcelona \n3. Camiseta del Real Madrid. \n4. Camiseta del AC Milan.\n5. Consultar el valor de mi compra.\n Presiona 'X' si quieres salir.");
        if (articulos == "X") {
            alert(despedida)
        }
    }
} else {
    alert("Superaste el numero de intentos. No puedes ingresar.");
}