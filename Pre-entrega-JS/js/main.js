const stockMaximo = 10;

let continuar = true;

// Valida la cantidad solicitada y el stock disponible
function validarDatos(stock, cantidadSolicitada) {
    if (
        cantidadSolicitada > 0 &&
        cantidadSolicitada <= stock &&
        stock >= 0 &&
        stock <= stockMaximo
    ) {
        return true;
    } else {
        return false;
    }
}

// Calcula el stock restante
const calcularStockRestante = (stock, cantidadSolicitada) => stock - cantidadSolicitada;

// Clase que representa un producto de la tienda
class Producto {

    constructor(id, nombre, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    // Descuenta unidades del stock. Devuelve true si la venta se hizo y false si no
    vender(cantidad) {
        if (validarDatos(this.stock, cantidad)) {
            this.stock = calcularStockRestante(this.stock, cantidad);
            return true;
        } else {
            return false;
        }
    }
}

// Productos iniciales (instancias de la clase)
const producto0 = new Producto("A0", "Teclado", 10, 20000);
const producto1 = new Producto("A1", "Mouse", 7, 12000);
const producto2 = new Producto("A2", "Auriculares", 8, 40000);
const producto3 = new Producto("A3", "Play Station 5", 4, 750000);
const producto4 = new Producto("A4", "Nintendo Switch", 3, 1000000);

// Arreglo con todos los productos
const productos = [
    producto0,
    producto1,
    producto2,
    producto3,
    producto4
];

// Elimina el último producto
const productoEliminado = productos.pop();

console.log("Se ha eliminado el elemento: " + productoEliminado.nombre + " | Cantidad eliminada: " + productoEliminado.stock);

// Agrega un producto al final
productos.push(new Producto("A5", "Tablet", 6, 300000));

// Agrega un producto al principio
productos.unshift(new Producto("A6", "Teclado inalambrico", 5, 25000));

// Reemplaza el producto de una posición concreta
productos.splice(2, 1, new Producto("A7", "Mouse inalambrico", 7, 15000));

// Lista todos los productos con su stock y precio
function listarStock(listaProductos) {
    for (const producto of listaProductos) {
        console.log("Producto: " + producto.nombre + " | Stock: " + producto.stock + " | Precio: $" + producto.precio);
    }

    console.log("Total: " + listaProductos.length + " productos.");
}

// Muestra en consola cómo quedó la lista después de los cambios
console.log("--- Stock actualizado ---");
listarStock(productos);

// Verificación del método vender con un producto de prueba
const productoPrueba = new Producto("T0", "Producto de prueba", 5, 1000);
console.log("--- Verificación de vender ---");
console.log("Stock antes de vender: " + productoPrueba.stock);
productoPrueba.vender(2);
console.log("Stock después de vender 2: " + productoPrueba.stock);

// Procesa el pedido de un producto
function procesarPedido(producto) {
    alert("Producto seleccionado: " + producto.nombre + "\nStock disponible: " + producto.stock);

    const cantidadSolicitada = Number(
        prompt("¿Cuántas unidades de " + producto.nombre + " querés solicitar?")
    );

    if (producto.vender(cantidadSolicitada)) {
        alert("Producto: " + producto.nombre + "\nStock restante: " + producto.stock);
    } else {
        alert("Cantidad inválida o stock insuficiente.");
    }
}

// Busca un producto por nombre y muestra su stock
function buscarProducto(listaProductos) {
    let nombresDisponibles = "";

    for (const producto of listaProductos) {
        nombresDisponibles = nombresDisponibles + producto.nombre + "\n";
    }

    const productoBuscado = prompt(
        "Productos disponibles:\n" + nombresDisponibles +
        "\n¿Qué producto querés buscar? "
    );

    // Si toca "Cancelar", prompt devuelve null y no hay nada que buscar
    if (productoBuscado === null) {
        return;
    }

    let productoEncontrado = null;

    for (const producto of listaProductos) {
        if (producto.nombre.toLowerCase() === productoBuscado.trim().toLowerCase()) {
            productoEncontrado = producto;
        }
    }

    if (productoEncontrado !== null) {
        alert(
            "Producto encontrado: " + productoEncontrado.nombre +
            "\nStock disponible: " + productoEncontrado.stock
        );
    } else {
        alert("El producto no existe en el stock.");
    }
}

// Simulador de stock
while (continuar) {
    const opcion = prompt(
        "Seleccioná una opción:\n" +
        "Presioná 1 para Teclado inalambrico\n" +
        "Presioná 2 para Teclado\n" +
        "Presioná 3 para Mouse inalambrico\n" +
        "Presioná 4 para Auriculares\n" +
        "Presioná 5 para Play Station 5\n" +
        "Presioná 6 para Tablet\n" +
        "Presioná 7 para Buscar un producto\n" +
        "Presioná 8 para Listar todo el stock\n" +
        "Presioná 9 para Salir"
    );

    // Identifica la opción seleccionada
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
            continuar = false;
            alert("Gracias por utilizar el simulador de stock.");
            break;

        default:
            alert("Opción inválida. Seleccioná una opción del 1 al 9.");
            break;
    }

    // Pregunta si desea realizar otra consulta, si no eligió salir
    if (continuar) {
        const respuesta = prompt(
            "¿Querés realizar otra operación?\n" +
            "Escribí si o no:"
        );

        if (respuesta !== null && respuesta.trim().toLowerCase() === "no") {
            continuar = false;
            alert("Gracias por utilizar el simulador de stock.");
        }
    }
}