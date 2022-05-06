

// Vamos a hacer un Ecommerce de 5 productos, donde dependiendo el monto total del pedido te dira si tiene envio gratis o no.

// Defino los productos

let monitor = 25000;
let teclado = 8000;
let mouse = 3000;
let sillaGamer = 30000;
let auriculares = 10000;

//

let producto;

// Funciones del programa

// Seleccionamos la opcion y validamos que sea valida
const opcion = () => {
    let valorIngresado;
    do {
        valorIngresado = parseInt(prompt("Ingrese la opcion del producto que desee comprar  (1, 2, 3, 4, 5): "));
    } while (valorIngresado < 1 || valorIngresado > 5);

    return valorIngresado;

}

// Vemos si tiene envio gratis
const envio = (producto) => {
        if (producto >= 6000) {
            console.log("Tienes envio gratis");
        } else {
            console.log("El envio es de $750 pesos");
        }
}



// Imprimimos por pantalla cada uno de los productos
console.log("Lista de productos: ");
console.log("1- Monitor. Precio: $" + monitor);
console.log("2- Teclado. Precio: $" + teclado);
console.log("3- Mouse. Precio: $" + mouse);
console.log("4- Silla Gamer. Precio: $" + sillaGamer);
console.log("5- Airiculares. Precio: $" + auriculares);


let opcioIngresada = opcion();

switch (opcioIngresada) {

    case 1:
        envio(monitor);
    break;
    case 2:
        envio(teclado);
    break;
    case 3:
        envio(mouse);
    break;
    case 4:
        envio(sillaGamer);
    break;
    case 5:
        envio(auriculares);
    break;
    default:
        console.log("No realizamos envio a esa zona");
    break;

}

