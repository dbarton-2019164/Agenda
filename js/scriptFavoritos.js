var listaDeFavoritos = [
    { nombre: "Emanuel Moreno", telefono: "44556611", correo: "emanuel@gmail.com" },
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


        formulario.appendChild(textoContacto);

        li.appendChild(formulario);

        li.addEventListener("click", function (event) {
           
                mostrarDetalles(index);
            
        });

        listaElemento.appendChild(li);
    });
}

function mostrarDetalles(index) {
    localStorage.setItem('contactoSeleccionado', JSON.stringify(listaDeFavoritos[index]));

    window.location.href = './detalles.html';
}

mostrarContactos();
