import { usuarioService } from "../service/usuario_service.js";

const formulario = document.querySelector("[data-form]");
const urlParams = new URLSearchParams(window.location.search);
const usuarioId = urlParams.get('id');

if (usuarioId) {
    usuarioService.obtenerUsuario(usuarioId)
        .then(usuario => {
            document.querySelector("[data-nombre]").value = usuario.nombre;
            document.querySelector("[data-email]").value = usuario.email;
        })
        .catch(err => alert("Error al cargar usuario: " + err.message));

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;

        usuarioService.actualizarUsuario(usuarioId, nombre, email)
            .then(() => {
                window.location.href = "../screens/edicion_completada.html";
            })
            .catch((error) => {
                console.log("Error al actualizar usuario:", error);
            });
    });
} else {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;

        usuarioService.crearUsuario(nombre, email)
            .then(() => {
                window.location.href = "../screens/registro_exitoso.html";
            })
            .catch((error) => {
                console.log("Error al crear usuario:", error);
                alert("Error al crear usuario. Revisa la consola para más detalles.");
            });
    });
}
