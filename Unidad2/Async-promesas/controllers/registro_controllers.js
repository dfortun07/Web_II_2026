import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
const mensajeEstado = document.querySelector("#mensajeEstado");
const botonEnviar = formulario.querySelector("button[type=submit]");

const mostrarMensaje = (texto, color = "#2a7b2f") => {
    if (mensajeEstado) {
        mensajeEstado.textContent = texto;
        mensajeEstado.style.color = color;
    }
};

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value.trim();
    const email = document.querySelector("[data-email]").value.trim();

    if (!nombre || !email) {
        mostrarMensaje("Por favor completa todos los campos.", "#c0392b");
        return;
    }

    if (botonEnviar) {
        botonEnviar.disabled = true;
        botonEnviar.textContent = "Guardando...";
    }
    mostrarMensaje("Guardando cliente, espera un momento...");

    clientService.crearCliente(nombre, email)
        .then((respuesta) => {
            console.log("Cliente creado:", respuesta);
            mostrarMensaje("Cliente guardado correctamente.", "#2a7b2f");
            setTimeout(() => {
                window.location.href = "../screens/registro_completado.html";
            }, 800);
        })
        .catch((error) => {
            console.log("Error al crear cliente:", error);
            mostrarMensaje("No se pudo guardar el cliente. Intenta de nuevo.", "#c0392b");
        })
        .finally(() => {
            if (botonEnviar) {
                botonEnviar.disabled = false;
                botonEnviar.textContent = "Registrar";
            }
        });
});