const subtotalElement = document.getElementById('subtotal-amount');
const envioElement = document.getElementById('envio-amount');
const ivaElement = document.getElementById('iva-amount');
const totalElement = document.getElementById('total-amount');

document.addEventListener('DOMContentLoaded', () => {
  const articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  actualizarTotales(articulosCarrito);
});

// Escuchar el evento personalizado
document.addEventListener('carritoActualizado', (event) => {
  actualizarTotales(event.detail);
});

function actualizarTotales(articulosCarrito) {
  let subtotal = 0;

  articulosCarrito.forEach(curso => {
    // Asegúrate de que el precio sea un número válido
    const precio = parseFloat(curso.precio);
    const cantidad = curso.cantidad;

    if (!isNaN(precio) && cantidad > 0) {
      subtotal += precio * cantidad;
    }
  });

  const envio = 10; // Puedes ajustar el costo de envío
  const iva = subtotal * 0.16; // 16% de IVA
  const total = subtotal + envio + iva;

  // Actualizar los elementos en el HTML
  subtotalElement.textContent = `${subtotal.toFixed(2)}`;
  envioElement.textContent = `${envio.toFixed(2)}`;
  ivaElement.textContent = `${iva.toFixed(2)}`;
  totalElement.textContent = `${total.toFixed(2)}`;
}
