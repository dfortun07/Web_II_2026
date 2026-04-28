import { articuloService } from "../service/articulo_service.js";

const formulario = document.querySelector("[data-form]");
const urlParams = new URLSearchParams(window.location.search);
const articuloId = urlParams.get('id');

if (articuloId) {
    articuloService.obtenerArticulo(articuloId)
        .then(articulo => {
            document.querySelector("[data-nombre]").value = articulo.nombre;
            document.querySelector("[data-precio]").value = articulo.precio;
            document.querySelector("[data-descripcion]").value = articulo.descripcion || "";
        })
        .catch(err => alert("Error al cargar artículo: " + err.message));

    formulario.addEventListener("submit", event => {
        event.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;

        articuloService.actualizarArticulo(articuloId, nombre, precio, descripcion)
            .then(() => {
                window.location.href = "../screens/edicion_completada.html";
            })
            .catch(err => console.log(err));
    });
} else {
    formulario.addEventListener("submit", event => {
        event.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;

        articuloService.crearArticulo(nombre, precio, descripcion)
            .then(() => {
                window.location.href = "../screens/registro_exitoso.html";
            })
            .catch(err => {
                console.log(err);
                alert("Error al crear artículo. Revisa la consola para más detalles.");
            });
    });
}
