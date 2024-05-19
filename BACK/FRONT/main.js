function generarReciboCompra(numeroBoleto) {
    var idAsiento = generateRandomSeat();

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

    var botonDescarga = document.createElement("button");
    botonDescarga.textContent = "Descargar Boleto";
    botonDescarga.addEventListener("click", function() {
        descargarBoleto(numeroBoleto, idAsiento);
    });
    recibo.appendChild(botonDescarga);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Comprar").addEventListener("click", function() {
        var numeroBoleto = generateRandomTicket(); 
        generarReciboCompra(numeroBoleto);
    });

    document.getElementById("registroForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        var formData = new FormData(this);

        fetch('http://localhost:8000/usuarios', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al registrar el usuario.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuario registrado con éxito:', data);
            alert('Usuario registrado con éxito.');
        })
        .catch(error => {
            console.error('Error al registrar el usuario:', error);
            alert('Hubo un problema al registrar el usuario. Por favor, inténtelo de nuevo más tarde.');
        });
    });
});

function generateRandomTicket() {
    const characters = 'ABCDEFGHI0123456789';
    const ticketLength = 8;
    let ticket = '';
    for (let i = 0; i < ticketLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        ticket += characters[randomIndex];
    }
    return ticket;
}

function generateRandomSeat() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const cols = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
    const randomRow = rows[Math.floor(Math.random() * rows.length)];
    const randomCol = cols[Math.floor(Math.random() * cols.length)];
    return randomRow + randomCol;
}

function descargarBoleto(numeroBoleto, idAsiento) {
    alert("Boleto descargado: Número de Boleto - " + numeroBoleto + ", ID de Asiento - " + idAsiento);
}

