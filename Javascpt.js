const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const button = document.getElementById("button")

button.addEventListener("click", function() {
    const usuarioValor = usuario.value;
    const passwordValor = password.value;

    if (usuarioValor === "juan" && passwordValor === "1234") {
        alert("Los datos son correctos, puede ingresar");
    } else {
        alert("Datos incorrectos, intente nuevamente");
    }
})
