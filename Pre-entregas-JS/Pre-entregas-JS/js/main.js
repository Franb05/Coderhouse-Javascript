const stockMaximo = 10;

const stockProductos = ["Teclado", "Mouse", "Auriculares", "Play Station 5", "Nintendo Switch"];
const stockCantidades = [10, 7, 8, 4, 3];

// Elimina el último producto y su cantidad
const productoEliminado = stockProductos.pop();
const cantidadEliminada = stockCantidades.pop();

console.log("Se ha eliminado el elemento: " + productoEliminado + " | Cantidad eliminada: " + cantidadEliminada);

// Agrega un producto y su cantidad al final
stockProductos.push("Tablet");
stockCantidades.push(6);

console.log("Productos actualizados: " + stockProductos + " | Cantidades actualizadas: " + stockCantidades);

// Agrega un producto y su cantidad al principio
stockProductos.unshift("Teclado inalambrico");
stockCantidades.unshift(5);

console.log("Productos actualizados: " + stockProductos + " | Cantidades actualizadas: " + stockCantidades);

// Reemplaza un producto en una posición concreta
stockProductos.splice(2, 1, "Mouse inalambrico");

console.log("Productos actualizados: " + stockProductos);

let continuar = true;

// Lista todos los productos con sus cantidades
function listarStock(productos, cantidades) {
    for (const nombreProducto of productos) {
        const posicion = productos.indexOf(nombreProducto);
        console.log("Producto: " + nombreProducto + " | Stock: " + cantidades[posicion]);
    }

    console.log("Total: " + productos.length + " productos.");
}

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

// Procesa el pedido de un producto
function procesarPedido(posicion) {
    const producto = stockProductos[posicion];
    const stock = stockCantidades[posicion];

    alert("Producto seleccionado: " + producto + "\nStock disponible: " + stock);

    const cantidadSolicitada = Number(
        prompt("¿Cuántas unidades de " + producto + " querés solicitar?")
    );

    if (validarDatos(stock, cantidadSolicitada)) {
        const stockRestante = calcularStockRestante(stock, cantidadSolicitada);

        stockCantidades[posicion] = stockRestante;

        alert("Producto: " + producto + "\nStock restante: " + stockRestante);
    } else {
        alert("Cantidad inválida o stock insuficiente.");
    }
}

// Busca un producto por nombre y muestra su stock
function buscarProducto(productos, cantidades) {
    const productoBuscado = prompt(
        "Productos disponibles:\n" + productos.join("\n") +
        "\n\n¿Qué producto querés buscar? (Escribir el producto de forma identica)"
    );

    if (productos.includes(productoBuscado)) {
        const posicion = productos.indexOf(productoBuscado);

        alert(
            "Producto encontrado: " + productoBuscado +
            "\nStock disponible: " + cantidades[posicion]
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
            procesarPedido(0);
            break;

        case "2":
            procesarPedido(1);
            break;

        case "3":
            procesarPedido(2);
            break;

        case "4":
            procesarPedido(3);
            break;

        case "5":
            procesarPedido(4);
            break;

        case "6":
            procesarPedido(5);
            break;

        case "7": {
            buscarProducto(stockProductos, stockCantidades);
            break;
        }

        case "8":
            listarStock(stockProductos, stockCantidades);
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


