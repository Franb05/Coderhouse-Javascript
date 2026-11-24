
const stockMaximo = 10;

// Clase Producto
class Producto {

    constructor(id, nombre, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    // Método para realizar una venta
    vender(cantidad) {

        if (validarDatos(this.stock, cantidad)) {
            this.stock = calcularStockRestante(this.stock, cantidad);
            console.log("Venta realizada correctamente.");
        } else {
            console.log("No se pudo realizar la venta.");
        }
    }
}

// Productos del simulador
const producto0 = new Producto("A0", "Teclado", 10, 20000);
const producto1 = new Producto("A1", "Mouse", 7, 15000);
const producto2 = new Producto("A2", "Auriculares", 8, 40000);
const producto3 = new Producto("A3", "Play Station 5", 4, 750000);
const producto4 = new Producto("A4", "Nintendo Switch", 3, 450000);
const producto5 = new Producto("A5", "Tablet", 6, 300000);
const producto6 = new Producto("A6", "Teclado inalambrico", 5, 25000);
const producto7 = new Producto("A7", "Mouse inalambrico", 7, 15000);

// Array de productos
const productos = [
    producto6,
    producto0,
    producto7,
    producto2,
    producto3,
    producto5
];

// Validar los datos de una venta
function validarDatos(stock, cantidadSolicitada) {

    if (cantidadSolicitada <= 0 || cantidadSolicitada > stock ||
        cantidadSolicitada % 1 !== 0) {
        console.log("Cantidad inválida o stock insuficiente.");
        return false;
    }

    return true;
}

// Calcular el stock restante
const calcularStockRestante = (stock, cantidad) => stock - cantidad;

// Procesar un pedido
function procesarPedido(producto) {

    const respuesta = prompt(
        "Producto seleccionado: " + producto.nombre +
        "\nStock disponible: " + producto.stock +
        "\nIngresá la cantidad que deseas comprar:"
    );

    if (respuesta === null) {
        return;
    }

    const cantidadSolicitada = Number(respuesta);

    if (validarDatos(producto.stock, cantidadSolicitada)) {
        producto.vender(cantidadSolicitada);
        console.log("Stock restante: " + producto.stock);
    }
}

// Listar el stock de todos los productos
function listarStock(listaProductos) {

    console.log("--- STOCK ACTUAL ---");

    listaProductos.forEach((producto) => {
        console.log(
            "ID: " + producto.id +
            " | Producto: " + producto.nombre +
            " | Stock: " + producto.stock +
            " | Precio: $" + producto.precio
        );
    });
}

// Buscar producto por nombre
function buscarProducto(listaProductos) {

    const nombreBuscado = prompt("Ingresá el nombre del producto que deseas buscar:");

    if (nombreBuscado === null) {
        return;
    }

    const productoEncontrado = listaProductos.find(
        (producto) =>
            producto.nombre.toLowerCase() === nombreBuscado.trim().toLowerCase()
    );

    if (productoEncontrado) {
        console.log("--- PRODUCTO ENCONTRADO ---");
        console.log("ID: " + productoEncontrado.id);
        console.log("Nombre: " + productoEncontrado.nombre);
        console.log("Stock: " + productoEncontrado.stock);
        console.log("Precio: $" + productoEncontrado.precio);
    } else {
        alert("No se encontró el producto ingresado.");
    }
}

// Buscar producto por ID
function buscarPorId(listaProductos) {

    let listaIds = "";

    listaProductos.forEach((producto) => {
        listaIds = listaIds + producto.id + " - " + producto.nombre + "\n";
    });

    const idBuscado = prompt(
        "PRODUCTOS DISPONIBLES:\n" + listaIds +
        "\nIngresá el ID del producto que deseas buscar:"
    );

    if (idBuscado === null) {
        return;
    }

    const productoEncontrado = listaProductos.find(
        (producto) =>
            producto.id.toLowerCase() === idBuscado.trim().toLowerCase()
    );

    if (productoEncontrado) {
        console.log("--- PRODUCTO ENCONTRADO ---");
        console.log("ID: " + productoEncontrado.id);
        console.log("Nombre: " + productoEncontrado.nombre);
        console.log("Stock: " + productoEncontrado.stock);
        console.log("Precio: $" + productoEncontrado.precio);
    } else {
        alert("No existe ningún producto con ese ID.");
    }
}

// Filtrar productos según su precio
function filtrarPorPrecio(listaProductos) {

    const respuesta = prompt("Ingresá el precio mínimo para filtrar los productos:");

    if (respuesta === null) {
        return;
    }

    const precioMinimo = Number(respuesta);

    if (respuesta.trim() === "" || !(precioMinimo >= 0)) {
        alert("Ingresá un precio válido.");
        return;
    }

    const productosFiltrados = listaProductos.filter(
        (producto) => producto.precio >= precioMinimo
    );

    if (productosFiltrados.length > 0) {

        console.log("--- PRODUCTOS FILTRADOS ---");

        productosFiltrados.forEach((producto) => {
            console.log(
                "Producto: " + producto.nombre +
                " | Precio: $" + producto.precio
            );
        });

    } else {
        console.log("No hay productos que cumplan con ese precio.");
    }
}

// Calcular el valor total del inventario
function calcularValorInventario(listaProductos) {

    const valorTotal = listaProductos.reduce(
        (acumulador, producto) =>
            acumulador + (producto.precio * producto.stock),
        0
    );

    console.log("--- VALOR TOTAL DEL INVENTARIO ---");
    console.log("Valor total: $" + valorTotal);
}

// Menú principal
let continuar = true;

while (continuar) {

    const opcion = prompt(
        "BIENVENIDO A FB GAME STORE" +
        "\n\n1 - Comprar Teclado inalámbrico" +
        "\n2 - Comprar Teclado" +
        "\n3 - Comprar Mouse inalámbrico" +
        "\n4 - Comprar Auriculares" +
        "\n5 - Comprar Play Station 5" +
        "\n6 - Comprar Tablet" +
        "\n7 - Buscar producto por nombre" +
        "\n8 - Listar stock" +
        "\n9 - Buscar producto por ID" +
        "\n10 - Filtrar productos por precio" +
        "\n11 - Calcular valor total del inventario" +
        "\n12 - Salir"
    );

    if (opcion === null) {
        continuar = false;
    } else {

        switch (opcion) {

            case "1":
                procesarPedido(productos[0]);
                break;

            case "2":
                procesarPedido(productos[1]);
                break;

            case "3":
                procesarPedido(productos[2]);
                break;

            case "4":
                procesarPedido(productos[3]);
                break;

            case "5":
                procesarPedido(productos[4]);
                break;

            case "6":
                procesarPedido(productos[5]);
                break;

            case "7":
                buscarProducto(productos);
                break;

            case "8":
                listarStock(productos);
                break;

            case "9":
                buscarPorId(productos);
                break;

            case "10":
                filtrarPorPrecio(productos);
                break;

            case "11":
                calcularValorInventario(productos);
                break;

            case "12":
                continuar = false;
                break;

            default:
                alert("Opción incorrecta. Ingresá una opción del 1 al 12.");
        }
    }
}

console.log("Gracias por utilizar FB Game Store.");
