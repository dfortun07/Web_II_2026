import { clientService } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

const obInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if(id == null){
        window.location.href = "/screens/error.html";
    }

    document.querySelector("[data-nombre]")
    document.querySelector("[data-email]")
    try {
        const cliente = await clientService.cliente(id);
        if(cliente.nombre && cliente.email){
            document.querySelector("[data-nombre]").value = cliente.nombre;
            document.querySelector("[data-email]").value = cliente.email;
        } else {
            throw new Error();
        }
    } catch (error) {
        alert("error al cargar los datos");
        window.location.href = "/screens/error.html";
    }   
};

obInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientService.actualizarCliente(nombre, email, id)
        .then((respuesta) => {
            console.log("Cliente actualizado:", respuesta);
            window.location.href = "../screens/edicion_concluida.html";
        })
        .catch((error) => {
            console.log("Error al actualizar cliente:", error);
        });
});