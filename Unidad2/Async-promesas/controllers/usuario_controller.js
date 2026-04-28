import { usuarioService } from "../service/usuario_service.js";

const construirFila = (nombre, email, id) => {
    const fila = document.createElement('tr');
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_usuario.html?id=${id}" class="simple-button simple-button--edit">
                        Editar
                    </a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete" type="button" id="${id}">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `;
    fila.innerHTML = contenido;
    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        usuarioService.eliminarUsuario(id)
            .then(() => {
                alert("Usuario eliminado correctamente");
                window.location.reload();
            })
            .catch(err => alert("Error al eliminar: " + err.message));
    });
    return fila;
}

const tabla = document.querySelector('[data-table]');
if (tabla) {
    usuarioService.listarUsuarios()
        .then((data) => {
            data.forEach((usuario) => {
                const nuevaFila = construirFila(usuario.nombre, usuario.email, usuario.id);
                tabla.appendChild(nuevaFila);
            });
        })
        .catch((error) => alert("Error al cargar usuarios: " + error.message));
}
