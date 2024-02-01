function login() {
    const user = 'kinal@org.gt';
    const password = '123';
    var email = document.getElementById('email').value;
    var contrasenia = document.getElementById('contrasenia').value;
    if (email === user && contrasenia === password) {
        console.log("Permitido");
          window.location.href = './html/contactos.html';
    } else {
        document.getElementById('denegado').classList.remove('ocultar');
        console.log("Denegado");
    }

}