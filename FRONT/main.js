function generarReciboCompra(idAsiento, numeroBoleto) {
    // Mostrar recibo en la consola
    console.log("Recibo de Compra");
    console.log("-----------------");
    console.log("ID de Asiento: " + idAsiento);
    console.log("Número de Boleto: " + numeroBoleto);
    console.log("-----------------");

    // Mostrar recibo en la interfaz de usuario
    var recibo = document.getElementById("recibo");
    recibo.innerHTML = ""; // Limpiar contenido previo
    recibo.style.display = "block";

    var titulo = document.createElement("h2");
    titulo.textContent = "Recibo de Compra";
    recibo.appendChild(titulo);

    var idAsientoParrafo = document.createElement("p");
    idAsientoParrafo.textContent = "ID de Asiento: " + idAsiento;
    recibo.appendChild(idAsientoParrafo);

    var numeroBoletoParrafo = document.createElement("p");
    numeroBoletoParrafo.textContent = "Número de Boleto: " + numeroBoleto;
    recibo.appendChild(numeroBoletoParrafo);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Comprar").addEventListener("click", function() {
        var idAsiento = "A12"; // Supongamos que esto proviene de algún lugar en tu aplicación
        var numeroBoleto = generateRandomTicket(); // Generar número de boleto aleatorio
        generarReciboCompra(idAsiento, numeroBoleto);
    });
});

function generateRandomTicket() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const ticketLength = 8;
    let ticket = '';
    for (let i = 0; i < ticketLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        ticket += characters[randomIndex];
    }
    return ticket;
}