
document.addEventListener("DOMContentLoaded", function () {
    cargarTareas();
});

function agregarTarea() {
    var tareaInput = document.getElementById("taskInput");
    var prioridadInput = document.getElementById("priorityInput");

    var tarea = tareaInput.value.trim();
    var prioridad = prioridadInput.value;

    if (tarea !== "") {
        var nuevaTarea = { tarea: tarea, prioridad: prioridad };
        guardarTarea(nuevaTarea);
        tareaInput.value = "";
        prioridadInput.value = "alta";
        cargarTareas();
    }
}

function guardarTarea(tarea) {
    var tareas = obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function obtenerTareas() {
    var tareas = localStorage.getItem("tareas");
    return tareas ? JSON.parse(tareas) : [];
}

function cargarTareas() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    var tareas = obtenerTareas();
    tareas.sort((a, b) => {
        var prioridadOrden = {alta: 1, media: 2, baja: 3};
        return prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad];
    });

    tareas.forEach(function (tarea, index) {
        var li = document.createElement("li");
        li.innerHTML = `<span>${tarea.tarea}</span> <span class="delete-btn" onclick="eliminarTarea(${index})">Eliminar</span>`;
        li.style.backgroundColor = obtenerColorPrioridad(tarea.prioridad);
        taskList.appendChild(li);
    });
}


function eliminarTarea(index) {
    var tareas = obtenerTareas();
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    cargarTareas();
}

function obtenerColorPrioridad(prioridad) {
    switch (prioridad) {
        case "alta":
            return "#B95940";
        case "media":
            return "#ffcc66";
        case "baja":
            return "green";
        default:
            return "white";
    }
}
// Parte de esto es de un tutorial