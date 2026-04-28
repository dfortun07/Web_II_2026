import { mascotaService } from "../service/mascota_service.js";

const crearFila = (nombre, tipo, raza, edad, id) => {
    const registro = document.createElement('tr');
    registro.innerHTML = `
        <td class="td" data-td>${nombre}</td>
        <td>${tipo}</td>
        <td>${raza || "N/A"}</td>
        <td>${edad || "N/A"}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_mascota.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete" type="button" id="${id}">Eliminar</button>
                </li>
            </ul>
        </td>
    `;
    const boton = registro.querySelector("button");
    boton.addEventListener("click", () => {
        mascotaService.eliminarMascota(boton.id)
            .then(() => {
                alert("Mascota eliminada");
                window.location.reload();
            })
            .catch(() => alert("Error al eliminar mascota"));
    });
    return registro;
};

const tabla = document.querySelector('[data-table]');
if (tabla) {
    mascotaService.listarMascotas()
        .then(data => {
            data.forEach(mascota => {
                tabla.appendChild(crearFila(mascota.nombre, mascota.tipo, mascota.raza, mascota.edad, mascota.id));
            });
        })
        .catch(() => alert("Error al cargar mascotas"));
}
