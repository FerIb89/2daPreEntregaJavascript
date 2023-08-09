const IniciarCompra = document.getElementById("IniciarCompra");

let nombreUsuario;
let seleccion
let todasLasFrutas
let producto = 0;
let precio = 0;
let kilos = 0;
let porcentajeTarjeta = 0;
let precioCuota;
let total = 0;

let carrito = []

const frutas = [
    {
        nombre: "Manzana",
        precio: "200",
    },

    {
        nombre: "Naranja",
        precio: "250",
    },

    {
        nombre: "Banana",
        precio: "500",
    },

    {
        nombre: "Pera",
        precio: "350",
    },

    {
        nombre: "Frutilla",
        precio: "150",
    },

    {
        nombre: "Kiwi",
        precio: "250",
    },

    {
        nombre: "Maracuya",
        precio: "800",
    },
    {
        nombre: "Durazno",
        precio: "370",
    }
]

function iniciarCompra() {

    nombreUsuario = prompt("Buenos días!! ingrese su nombre de usuario por favor")

    seleccion = prompt(nombreUsuario + " ¿Desea conocer nuestros precios? SI / NO").toLowerCase();

    while (seleccion != "si" && seleccion != "no") {
        alert("ingrese una opcion valida")
        seleccion = prompt("¿Desea ver nuestra lista de precios? SI / NO").toLowerCase();
    }

    if (seleccion == "si") {
        todasLasFrutas = frutas.map((fruta) => "\n" + fruta.nombre + " " + "$ " + fruta.precio);
        alert(todasLasFrutas.join(" - "))
    }

    else if (seleccion == "no") {
        alert("gracias por venir, vuelva pronto")
    }

    while (seleccion != "no") {
        producto = prompt("Agrega una fruta a tu carrito").toLowerCase()

        if (producto == "manzana" || producto == "naranja" || producto == "banana" || producto == "pera" || producto == "frutilla" || producto == "kiwi" || producto == "maracuya" || producto == "durazno") {
            switch (producto) {
                case "manzana":
                    precio = 200;
                    break;

                case "naranja":
                    precio = 250;
                    break;

                case "banana":
                    precio = 500;
                    break;

                case "pera":
                    precio = 350;
                    break;

                case "frutilla":
                    precio = 150;
                    break;

                case "kiwi":
                    precio = 250;
                    break;

                case "maracuya":
                    precio = 800;
                    break;

                case "durazno":
                    precio = 370;
                    break;

                default:
                    break;
            }
            kilos = parseInt(prompt("Cuantos kilos quiere comprar"))

            while (isNaN(kilos)) {
                kilos = prompt("Ingrese una cantidad de kilos válido por favor");
            }
            carrito.push({ producto, kilos, precio })
        }
        else {
            alert("no tenemos esa fruta")
        }
        seleccion = prompt("Desea seguir comprando? SI / NO").toLowerCase()

        while (seleccion == "no") {

            carrito.forEach((carritoFinal) => {
                alert(`${carritoFinal.producto}\n${carritoFinal.kilos} kilos\nSubtotal: $ ${carritoFinal.kilos * carritoFinal.precio}`)
            })
            break;
        }

    }
    total = carrito.reduce((acc, el) => acc + el.precio * el.kilos, 0)

    let tarjeta = prompt(`el importe a pagar es: $  ${total}` + ". ¿Desea pagar con tarjeta? SI / NO").toLowerCase();

    while (tarjeta != "si" && tarjeta != "no") {
        tarjeta = prompt("Ingrese SI o NO por favor").toLowerCase();
    }

    if (tarjeta == "si") {
        let cuotas = prompt("¿Desea hacerlo en 1, 3, 6 o 12 cuotas?\n\n1 cuota: Sin interes\n3 cuotas: % 15 de interes\n6 cuotas % 45 de interes\n12 cuotas % 75 de interes");

        while (cuotas != "1" && cuotas != "3" && cuotas != "6" && cuotas != "12") {
            cuotas = prompt("Seleccione 1, 3, 6 o 12 cuotas");
        }

        switch (cuotas) {
            case "1":
                alert(nombreUsuario + " El precio final es: $ " + total.toFixed(2));
                break;

            case "3":
                porcentajeTarjeta = (total * 15) / 100;
                total = total + porcentajeTarjeta;
                precioCuota = total / 3;
                alert("El precio final es: $ " + total.toFixed(2) + ("\nEn 3 cuotas de: $ ") + precioCuota.toFixed(2));
                alert("Muchas gracias por su compra")
                break;

            case "6":
                porcentajeTarjeta = (total * 45) / 100;
                total = total + porcentajeTarjeta;
                precioCuota = total / 6;
                alert("El precio final es: $ " + total.toFixed(2) + ("\nEn 6 cuotas de: $ ") + precioCuota.toFixed(2));
                alert("Muchas gracias por su compra")
                break;

            case "12":
                porcentajeTarjeta = (total * 75) / 100;
                precioCuota = total / 12;
                total = total + porcentajeTarjeta;
                alert("El precio final es: $ " + total.toFixed(2) + ("\nEn 12 cuotas de: $") + precioCuota.toFixed(2));
                alert("Muchas gracias por su compra")
                break;
        }
    }
    else {
        alert(nombreUsuario + " Su saldo a abonar es: $ " + total.toFixed(2));
        alert("Muchas gracias por su compra")
    }
}