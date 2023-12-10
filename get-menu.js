document.addEventListener("DOMContentLoaded", function () {
  // Recupera los datos almacenados en sessionStorage
  const nombre = sessionStorage.getItem("nombre");
  const direccion = sessionStorage.getItem("direccion");
  const telefono = sessionStorage.getItem("telefono");

  if (nombre && direccion && telefono) {
    const detalles = `<b>Nombre:</b> ${nombre}<br><b>Dirección:</b> ${direccion}<br><b>Teléfono:</b> ${telefono}`;
    document.getElementById("content_detalles_usuario").innerHTML = detalles;
  } else {
    // Si no hay datos en sessionStorage, muestra un mensaje de error o redirección.
    document.getElementById("content_detalles_usuario").innerText =
      "No se encontraron datos.";
  }
});
