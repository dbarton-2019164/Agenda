

var listaDeContactos = [
    { nombre: "Emanuel Moreno", telefono: "44556611", correo: "emanuel@gmail.com" },
    { nombre: "Juan García", telefono: "66994411", correo: "juan@gmail.com" },
    { nombre: "Carlos Martinez", telefono: "13483487", correo: "carlos@gmail.com" },
    { nombre: "Ana Lopez", telefono: "77193622", correo: "ana@gmail.com" },
    { nombre: "Pedro Figueroa", telefono: "99431156", correo: "pedro@gmail.com" }
];

function mostrarContactos() {
    var listaElemento = document.getElementById("listaContactos");
    listaElemento.innerHTML = "";

    listaDeContactos.forEach(function (contacto) {
        var li = document.createElement("li");


        var formulario = document.createElement("form");


        var textoContacto = document.createTextNode("Nombre: " + contacto.nombre + ", Teléfono: " + contacto.telefono);


        var botonFavoritos = document.createElement("button");
        botonFavoritos.textContent = "Añadir a favoritos";
        botonFavoritos.type = "submit";


        formulario.appendChild(textoContacto);
        formulario.appendChild(botonFavoritos);


        li.appendChild(formulario);


        listaElemento.appendChild(li);
    });
}

mostrarContactos();
