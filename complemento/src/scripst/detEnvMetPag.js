document.getElementById('botonSiguiente').addEventListener("click", function(event) {
    event.preventDefault();

    // Seleccionar todos los campos requeridos y el select
    const requiredInputs = document.querySelectorAll('input[required]');
    const estadoSelect = document.getElementById('estado');
    let allValid = true;

    // Verificar campos de entrada requeridos
    requiredInputs.forEach(input => {
        if (!input.value) {
            allValid = false;
            input.classList.add('error'); // Aplicar clase de error si el campo está vacío
        } else {
            input.classList.remove('error'); // Eliminar clase de error si el campo es válido
        }
    });

    // Verificar el campo select
    if (estadoSelect.value === "") {
        allValid = false;
        estadoSelect.classList.add('error'); // Aplicar clase de error si el campo select está vacío
    } else {
        estadoSelect.classList.remove('error'); // Eliminar clase de error si el campo select es válido
    }

    // Si todos los campos son válidos, redirigir a la página de método de pago
    if (allValid) {
        window.location.href = '../pages/metodoDePago.html';  // Redirige a la página de método de pago
    } else {
        alert('Por favor, completa todos los campos requeridos antes de continuar.');
    }
});
