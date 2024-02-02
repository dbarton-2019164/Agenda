function login() {
    const user = 'correo@gmail.com';
    const password = '123';
    var email = document.getElementById('email').value;
    var contrasenia = document.getElementById('contrasenia').value;
    if (email === user && contrasenia === password) {
        console.log("Permitido");
          window.location.href = './html/contactos.html';
    } else {
       alert('Credenciales incorrectas');
    }

}