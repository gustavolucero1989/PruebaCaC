function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var telefono = document.getElementById("telefono").value;
  
    // Validar nombre
    if (nombre === "") {
      alert("Por favor ingrese su nombre.");
      return false;
    }
  
    // Validar edad
    if (edad === "") {
      alert("Por favor ingrese su edad.");
      return false;
    } else if (isNaN(edad)) {
      alert("La edad debe ser un número.");
      return false;
    }
  
    // Validar correo electrónico
    if (correo === "") {
      alert("Por favor ingrese su correo electrónico.");
      return false;
    } else {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(correo)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false;
      }
    }
  
    // Validar contraseña
    if (contrasena === "") {
      alert("Por favor ingrese su contraseña.");
      return false;
    } else if (contrasena.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
  
    // Validar teléfono
    if (telefono === "") {
      alert("Por favor ingrese su número de teléfono.");
      return false;
    } else if (isNaN(telefono)) {
      alert("El número de teléfono debe ser un número.");
      return false;
    }
  
    // Si todas las validaciones pasan, devuelve true para enviar el formulario
    return true;
  }