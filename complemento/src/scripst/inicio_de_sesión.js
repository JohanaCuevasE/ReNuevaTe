// Función para mostrar alertas nativas del navegador
function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// Validación de campos vacíos
function validarCamposVacios(campos) {
    for (const campo in campos) {
        if (!campos[campo]) {
            mostrarAlerta(`${campo} es obligatorio.`);
            return false;
        }
    }
    return true;
}

// Validación de formato de correo electrónico
function validarEmail(email) {
    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!patronEmail.test(email)) {
        mostrarAlerta('El correo electrónico no es válido.');
        return false;
    }
    return true;
}

// Validación de número de teléfono (solo números)
function validarTelefono(telefono) {
    const patronTelefono = /^\d{10}$/;
    if (!patronTelefono.test(telefono)) {
        mostrarAlerta('El número de teléfono debe tener 10 dígitos.');
        return false;
    }
    return true;
}

// Validación de coincidencia de contraseñas
function validarContrasenas(contrasena1, contrasena2) {
    if (contrasena1 !== contrasena2) {
        mostrarAlerta('Las contraseñas no coinciden.');
        return false;
    }
    return true;
}

// Validación de contraseña fuerte
function validarFuerzaContrasena(contrasena) {
    const patronContrasena = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!patronContrasena.test(contrasena)) {
        mostrarAlerta('La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial.');
        return false;
    }
    return true;
}

// Limpiar los campos del formulario
function limpiarCampos(formulario) {
    formulario.reset();
}

// Manejar el registro de usuarios
function manejarRegistro(event) {
    event.preventDefault();

    const formulario = event.target;
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('tel').value;
    const contrasena = document.getElementById('password').value;
    const contrasena2 = document.getElementById('password2').value;

    const campos = { Nombre: nombre, Correo: correo, Teléfono: telefono, Contraseña: contrasena, "Repetir Contraseña": contrasena2 };

    if (!validarCamposVacios(campos)) return;
    if (!validarEmail(correo)) return;
    if (!validarTelefono(telefono)) return;
    if (!validarContrasenas(contrasena, contrasena2)) return;
    if (!validarFuerzaContrasena(contrasena)) return;

    const usuario = {
        nombre,
        correo,
        telefono,
        contrasena
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log('Usuario registrado:', usuario);
    mostrarAlerta('Registro exitoso.');

    // Limpiar los campos del formulario de registro
    limpiarCampos(formulario);
}

// Manejar el inicio de sesión de usuarios
function manejarInicioSesion(event) {
    event.preventDefault();

    const formulario = event.target;
    const usuarioNombre = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contraseña').value;

    const campos = { "Nombre de usuario": usuarioNombre, Contraseña: contrasena };

    if (!validarCamposVacios(campos)) return;

    const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioAlmacenado && usuarioAlmacenado.correo === usuarioNombre && usuarioAlmacenado.contrasena === contrasena) {
        mostrarAlerta('Inicio de sesión exitoso.');
        limpiarCampos(formulario);  // Limpiar los campos del formulario de inicio de sesión
        window.location.href = "http://127.0.0.1:5500/ReNuevaTe/index.html";
    } else {
        mostrarAlerta('Nombre de usuario o contraseña inválidos.');
    }
}

// Configuración de usuario de prueba en localStorage
function configurarUsuarioPrueba() {
    const usuarioPrueba = {
        correo: 'usuario@prueba.com',
        contrasena: 'Password123!'
    };
    localStorage.setItem('usuario', JSON.stringify(usuarioPrueba));
}

// Configuración de animaciones de botones
function configurarAnimacionesBotones() {
    const botonRegistro = document.getElementById('registrarse');
    const botonInicioSesion = document.getElementById('iniciarSesion');
    const contenedor = document.getElementById('contenedor');

    botonRegistro.addEventListener('click', () => {
        contenedor.classList.add("right-panel-active");
    });

    botonInicioSesion.addEventListener('click', () => {
        contenedor.classList.remove("right-panel-active");
    });
}

// Inicialización
function init() {
    configurarUsuarioPrueba();
    configurarAnimacionesBotones();
    mostrarAlerta('Bienvenidx a la página. Asegúrate de seguir las instrucciones para el registro y el inicio de sesión.');

    document.getElementById('formulario').addEventListener('submit', manejarRegistro);
    document.getElementById('formulario2').addEventListener('submit', manejarInicioSesion);
}

// Ejecutar la inicialización
init();
