const STOCK_MAXIMO = 10;

let stockTeclado = 5;
let stockMouse = 8;
let stockAuriculares = 4;
let continuar = true;

// Solicita la opción del producto
function solicitarProducto(mensaje) {
    return prompt(mensaje);
}

// Solicita una cantidad al usuario
function solicitarNumero(mensaje) {
    return Number(prompt(mensaje));
}

// Valida la cantidad solicitada
function validarDatos(stock, cantidadSolicitada) {
    if (
        cantidadSolicitada > 0 &&
        cantidadSolicitada <= stock &&
        stock >= 0 &&
        stock <= STOCK_MAXIMO
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

// Muestra el resultado de la consulta
function mostrarResultado(producto, stockRestante) {
    console.log("Producto: " + producto);
    console.log("Stock restante: " + stockRestante);

    alert("Producto: " + producto + "\nStock restante: " + stockRestante);
}

// Simulador de stock
while (continuar) {

    // Entrada de datos
    let opcion = solicitarProducto(
        "Seleccioná un producto:\n" + "Presione 1 para Teclado\n" + "Presione 2 para Mouse\n" + "Presione 3 para Auriculares"
    );

    let producto = "";
    let stock = 0;

    // Identifica el producto seleccionado
    if (opcion === "1") {
        producto = "Teclado";
        stock = stockTeclado;
    } else if (opcion === "2") {
        producto = "Mouse";
        stock = stockMouse;
    } else if (opcion === "3") {
        producto = "Auriculares";
        stock = stockAuriculares;
    } else {
        alert("Opción inválida. Seleccioná 1, 2 o 3.");
    }

    // Continúa solamente si la opción es válida
    if (opcion === "1" || opcion === "2" || opcion === "3") {

        console.log("Producto seleccionado: " + producto);
        console.log("Stock disponible: " + stock);

        alert("Producto seleccionado: " + producto + "\nStock disponible: " + stock
        );

        // Solicita la cantidad
        const cantidadSolicitada = solicitarNumero("¿Cuántas unidades de " + producto + " querés solicitar?"
        );

        // Valida y procesa la solicitud
        if (validarDatos(stock, cantidadSolicitada)) {

            const stockRestante = calcularStockRestante(
                stock,
                cantidadSolicitada
            );

            // Actualiza el stock del producto seleccionado
            if (opcion === "1") {
                stockTeclado = stockRestante;
            } else if (opcion === "2") {
                stockMouse = stockRestante;
            } else if (opcion === "3") {
                stockAuriculares = stockRestante;
            }

            mostrarResultado(producto, stockRestante);

        } else {
            console.log("Cantidad inválida o stock insuficiente.");
            alert("Cantidad inválida o stock insuficiente.");
        }
    }

    // Pregunta si desea realizar otra consulta
    const respuesta = prompt("¿Querés consultar otro producto?\n" + "Escribí si o no:"
    );

    if (respuesta === "no") {
        continuar = false;
        alert("Gracias por utilizar el simulador de stock.");
    }
}
