function generateReceipt() {
    const flight = document.getElementById('flight').value;
    const seat = document.getElementById('seat').value;
  
    const receiptContent = `
      <h2>Recibo de Compra</h2>
      <p><strong>Vuelo seleccionado:</strong> ${flight}</p>
      <p><strong>Asiento seleccionado:</strong> ${seat}</p>
      <p><strong>Total:</strong> $100</p>
    `;
  
    const receiptContainer = document.getElementById('receiptContainer');
    receiptContainer.innerHTML = receiptContent;
    receiptContainer.style.display = 'block';
  }



  document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("reservaForm");
    const recibo = document.getElementById("recibo");
    const reciboDatos = document.getElementById("reciboDatos");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const modelo = document.getElementById("modelo").value;
        const asientoVuelo = document.getElementById("asientoVuelo").value;
        const id = document.getElementById("id").value;
        const asientosDisponibles = document.getElementById("asientosDisponibles").value;
        const precioAsiento = document.getElementById("precioAsiento").value;
        const destino = document.getElementById("destino").value;
        const horaSalida = document.getElementById("horaSalida").value;
        const horaLlegada = document.getElementById("horaLlegada").value;

        mostrarRecibo(modelo, asientoVuelo, id, asientosDisponibles, precioAsiento, destino, horaSalida, horaLlegada);
    });

    function mostrarRecibo(modelo, asientoVuelo, id, asientosDisponibles, precioAsiento, destino, horaSalida, horaLlegada) {
        reciboDatos.innerHTML = `
            <p><strong>Modelo del Avión:</strong> ${modelo}</p>
            <p><strong>Asiento de Vuelo:</strong> ${asientoVuelo}</p>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Asientos Disponibles:</strong> ${asientosDisponibles}</p>
            <p><strong>Precio del Asiento:</strong> ${precioAsiento}</p>
            <p><strong>Destino:</strong> ${destino}</p>
            <p><strong>Hora de Salida:</strong> ${horaSalida}</p>
            <p><strong>Hora de Llegada:</strong> ${horaLlegada}</p>
        `;
        recibo.classList.remove("hidden");
    }
});