document.addEventListener("DOMContentLoaded", function () {
  const botonNext = document.getElementById("boton_next");
  botonNext.addEventListener("click", function (e) {
    e.preventDefault(); // Evita la redirección predeterminada
    const inputName = document.getElementById("inputName").value;
    const inputDirec = document.getElementById("inputDirec").value;
    const inputNumber = document.getElementById("inputNumber").value;

    // Almacena los datos en sessionStorage
    sessionStorage.setItem("nombre", inputName);
    sessionStorage.setItem("direccion", inputDirec);
    sessionStorage.setItem("telefono", inputNumber);

    // Redirecciona al usuario a menu.html
    window.location.href = "menu.html";
  });
});
