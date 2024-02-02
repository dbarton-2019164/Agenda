var listaDeFavoritos = [
    { nombre: "Emanuel Moreno", telefono: "44556611", correo: "emanuel@gmail.com" },
    { nombre: "Juan García", telefono: "66994411", correo: "juan@gmail.com" },
    { nombre: "Carlos Martinez", telefono: "13483487", correo: "carlos@gmail.com" },
    { nombre: "Ana Lopez", telefono: "77193622", correo: "ana@gmail.com" },
    { nombre: "Pedro Figueroa", telefono: "99431156", correo: "pedro@gmail.com" }
];
// Para agregar despues desde el formulario
function agregarContacto(contacto) {
    listaDeFavoritos.push(contacto);
}



function mostrarContactos() {
    var listaElemento = document.getElementById("listaContactos");
    listaElemento.innerHTML = "";

    listaDeFavoritos.forEach(function (contacto, index) {
        var li = document.createElement("li");

        var formulario = document.createElement("form");

        var textoContacto = document.createTextNode("Nombre: " + contacto.nombre + ", Teléfono: " + contacto.telefono);

        var botonFavoritos = document.createElement("button");
        botonFavoritos.textContent = "Añadir a favoritos";
        botonFavoritos.type = "button";

        formulario.appendChild(textoContacto);
        formulario.appendChild(botonFavoritos);

        li.appendChild(formulario);

        li.addEventListener("click", function (event) {
            if (event.target !== botonFavoritos) {
                mostrarDetalles(index);
            }
        });

        listaElemento.appendChild(li);
    });
}

function mostrarDetalles(index) {
    localStorage.setItem('contactoSeleccionado', JSON.stringify(listaDeFavoritos[index]));

    window.location.href = './detalles.html';
}


function abrirModal() {
    document.getElementById("myModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        cerrarModal();
    }
}

mostrarContactos();
