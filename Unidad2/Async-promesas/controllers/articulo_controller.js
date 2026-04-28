import { articuloService } from "../service/articulo_service.js";

const crearFila = (nombre, precio, descripcion, id) => {
    const registro = document.createElement('tr');
    registro.innerHTML = `
        <td class="td" data-td>${nombre}</td>
        <td>${precio}</td>
        <td>${descripcion || "N/A"}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_articulo.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete" type="button" id="${id}">Eliminar</button>
                </li>
            </ul>
        </td>
    `;
    const boton = registro.querySelector("button");
    boton.addEventListener("click", () => {
        articuloService.eliminarArticulo(boton.id)
            .then(() => {
                alert("Artículo eliminado");
                window.location.reload();
            })
            .catch(() => alert("Error al eliminar artículo"));
    });
    return registro;
};

const tabla = document.querySelector('[data-table]');
if (tabla) {
    articuloService.listarArticulos()
        .then(data => {
            data.forEach(articulo => {
                tabla.appendChild(crearFila(articulo.nombre, articulo.precio, articulo.descripcion, articulo.id));
            });
        })
        .catch(() => alert("Error al cargar artículos"));
}
