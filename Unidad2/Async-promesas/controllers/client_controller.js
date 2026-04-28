import { clientService } from "../service/client-service.js";

const CrearFila = (nombre, email, id) => {
    const fila = document.createElement('tr');
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">
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
        clientService.eliminarCliente(id)
            .then(() => {
                alert("eliminado");
                window.location.reload();
            })
            .catch(err => alert("error al eliminar"));
    });
    return fila;
}

const table = document.querySelector('[data-table]');
clientService.listar_clientes()
    .then((data) => {
        data.forEach((perfil) => {
            const nuevaFila = CrearFila(perfil.nombre, perfil.email, perfil.id);
            table.appendChild(nuevaFila);
        });
    })
    .catch((error) => alert("error al cargar clientes"));