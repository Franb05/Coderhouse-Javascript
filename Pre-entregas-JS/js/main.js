
const stockMaximo = 10;

let stockTeclado = 5;
let stockMouse = 8;
let stockAuriculares = 4;
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
const calcularStockRestante = (stock, cantidadSolicitada) => {
    return stock - cantidadSolicitada;
};

// Procesa el pedido de información de un producto
function procesarPedido(producto, stock) {
    console.log("Producto seleccionado: " + producto);
    console.log("Stock disponible: " + stock);

    alert(
        "Producto seleccionado: " + producto +
        "\nStock disponible: " + stock
    );

    const cantidadSolicitada = Number(
        prompt(
            "¿Cuántas unidades de " + producto +
            " querés solicitar?"
        )
    );

    if (validarDatos(stock, cantidadSolicitada)) {
        const stockRestante = calcularStockRestante(
            stock,
            cantidadSolicitada
        );

        console.log("Producto: " + producto);
        console.log("Stock restante: " + stockRestante);

        alert(
            "Producto: " + producto +
            "\nStock restante: " + stockRestante
        );

        return stockRestante;
    } else {
        console.log("Cantidad inválida o stock insuficiente.");
        alert("Cantidad inválida o stock insuficiente.");

        return stock;
    }
}

// Simulador de stock
while (continuar) {
    const opcion = prompt(
        "Seleccioná un producto:\n" +
        "Presioná 1 para Teclado\n" +
        "Presioná 2 para Mouse\n" +
        "Presioná 3 para Auriculares"
    );

    // Identifica el producto seleccionado
    switch (opcion) {
        case "1":
            stockTeclado = procesarPedido(
                "Teclado",
                stockTeclado
            );
            break;

        case "2":
            stockMouse = procesarPedido(
                "Mouse",
                stockMouse
            );
            break;

        case "3":
            stockAuriculares = procesarPedido(
                "Auriculares",
                stockAuriculares
            );
            break;

        default:
            alert("Opción inválida. Seleccioná 1, 2 o 3.");
    }

    // Pregunta si desea realizar otra consulta
    const respuesta = prompt(
        "¿Querés consultar otro producto?\n" +
        "Escribí si o no:"
    );

    if (respuesta === "no") {
        continuar = false;
        alert("Gracias por utilizar el simulador de stock.");
    }
}
