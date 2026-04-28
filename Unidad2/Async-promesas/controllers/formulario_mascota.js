import { mascotaService } from "../service/mascota_service.js";

const formulario = document.querySelector("[data-form]");
const urlParams = new URLSearchParams(window.location.search);
const mascotaId = urlParams.get('id');

if (mascotaId) {
    mascotaService.obtenerMascota(mascotaId)
        .then(mascota => {
            document.querySelector("[data-nombre]").value = mascota.nombre;
            document.querySelector("[data-tipo]").value = mascota.tipo;
            document.querySelector("[data-raza]").value = mascota.raza || "";
            document.querySelector("[data-edad]").value = mascota.edad || "";
        })
        .catch(err => alert("Error al cargar mascota: " + err.message));

    formulario.addEventListener("submit", event => {
        event.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const tipo = document.querySelector("[data-tipo]").value;
        const raza = document.querySelector("[data-raza]").value;
        const edad = document.querySelector("[data-edad]").value;

        mascotaService.actualizarMascota(mascotaId, nombre, tipo, raza, edad)
            .then(() => {
                window.location.href = "../screens/edicion_completada.html";
            })
            .catch(err => console.log(err));
    });
} else {
    formulario.addEventListener("submit", event => {
        event.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const tipo = document.querySelector("[data-tipo]").value;
        const raza = document.querySelector("[data-raza]").value;
        const edad = document.querySelector("[data-edad]").value;

        mascotaService.crearMascota(nombre, tipo, raza, edad)
            .then(() => {
                window.location.href = "../screens/registro_exitoso.html";
            })
            .catch(err => {
                console.log(err);
                alert("Error al crear mascota. Revisa la consola para más detalles.");
            });
    });
}
