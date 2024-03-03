function login() {
    var email = document.getElementById("exampleFormControlInput1").value;
    var password = document.getElementById("inputPassword2").value;
    usuario = "jhuipiocruz@gmail.com";
    contraseña = "Huipio123";

    if (email === usuario && password === contraseña) {
        window.location.href = "bienvenido.html";
    } else if (email === "prueba@prueba.com" && password === "contraseña2") {
        window.location.href = "bienvenido.html"; 
    } else {
        document.getElementById("error-message").innerText = "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
    }
}