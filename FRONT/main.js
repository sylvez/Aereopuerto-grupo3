function generarReciboCompra(numeroBoleto) {
    // Generar ID de Asiento aleatorio
    var idAsiento = generateRandomSeat();

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

    // Agregar botón de descarga
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
    // Aquí puedes implementar la lógica para descargar el boleto,
    // por ejemplo, creando un archivo PDF y proporcionando un enlace de descarga.
    alert("Boleto descargado: Número de Boleto - " + numeroBoleto + ", ID de Asiento - " + idAsiento);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Comprar").addEventListener("click", function() {
        var numeroBoleto = generateRandomTicket(); 
        generarReciboCompra(numeroBoleto);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      // Recolecta los datos del formulario
      const formData = new FormData(form);
      const userData = {};
      formData.forEach((value, key) => {
        userData[key] = value;
      });
  
      // Realiza la solicitud POST a la API
      fetch("http://localhost:8000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (response.ok) {
          // Si la solicitud es exitosa, muestra la alerta
          alert("¡Usuario registrado con éxito!");
          form.reset(); // Limpia el formulario después del registro exitoso
        } else {
          // Si hay algún error en la solicitud, muestra un mensaje de error
          alert("Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo.");
      });
    });
  });