document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir la acción predeterminada del formulario
        
        // Recoger los datos del formulario
        const formData = {
            id: form.id.value,
            nombre: form.nombre.value,
            npasaporte: form.npasaporte.value,
            pais: form.pais.value,
            direccion: form.direccion.value,
            telefono: form.telefono.value,
            clave: form.clave.value
        };

        // Enviar los datos al servidor
        fetch("http://localhost:8000/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la solicitud: " + response.statusText);
            }
        })
        .then(data => {
            console.log("Datos enviados exitosamente:", data);
            alert("Datos enviados exitosamente");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error al enviar los datos");
        });
    });
});

