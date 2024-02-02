document.addEventListener("DOMContentLoaded", function () {
    var contactoSeleccionado = JSON.parse(localStorage.getItem('contactoSeleccionado'));
    mostrarDetallesContacto(contactoSeleccionado);
});

function mostrarDetallesContacto(contacto) {
    var detallesElemento = document.getElementById("detallesContacto");

    var nombreElemento = document.createElement("label");
    nombreElemento.textContent = "Nombre: " + contacto.nombre;

    var telefonoElemento = document.createElement("label");
    telefonoElemento.textContent = "Teléfono: " + contacto.telefono;
    var correoElemento = document.createElement("label");

    correoElemento.textContent = "Correo: " + contacto.correo;

    detallesElemento.appendChild(nombreElemento);
    detallesElemento.appendChild(telefonoElemento);
    detallesElemento.appendChild(correoElemento);
}
