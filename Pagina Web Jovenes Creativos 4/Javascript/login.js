// Obtener el formulario de inicio de sesión y agregar un event listener
const formularioInicio = document.querySelector('.form');
formularioInicio.addEventListener('submit', manejarInicio);

// Función para manejar el envío del formulario de inicio de sesión
function manejarInicio(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del envío del formulario

  // Obtener los valores del formulario
  const email = document.querySelector('#email').value;
  const contrasena = document.querySelector('#password').value;

  // Realizar la lógica de inicio de sesión (por ejemplo, enviar los datos a un servidor)
  // En este ejemplo, simplemente vamos a registrar los valores en la consola
  console.log(`Correo electrónico: ${email}, Contraseña: ${contrasena}`);

  // Restablecer el formulario
  formularioInicio.reset();
}

// Manejar el inicio de sesión con Google
const botonGoogle = document.querySelector('.btn-google');
botonGoogle.addEventListener('click', manejarInicioGoogle);

function manejarInicioGoogle() {
  // Implementar la lógica de inicio de sesión con Google
  // Necesitarás configurar un cliente de la API de Google y manejar el flujo de autenticación
  console.log('Iniciando sesión con Google...');
}

// Manejar el inicio de sesión con Apple
const botonApple = document.querySelector('.btn-apple');
botonApple.addEventListener('click', manejarInicioApple);

function manejarInicioApple() {
  // Implementar la lógica de inicio de sesión con Apple
  // Necesitarás configurar un cliente de la API de Apple y manejar el flujo de autenticación
  console.log('Iniciando sesión con Apple...');
}