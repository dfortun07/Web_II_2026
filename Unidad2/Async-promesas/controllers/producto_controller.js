import { productService } from "../service/product-service.js";

const construirFila = (nombre, precio, descripcion, id) => {
    const registro = document.createElement('tr');
    registro.innerHTML = `
        <td class="td" data-td>${nombre}</td>
        <td>${precio}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_producto.html?id=${id}" class="simple-button simple-button--edit">
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
    const boton = registro.querySelector("button");
    boton.addEventListener("click", () => {
        productService.borrarProducto(boton.id)
            .then(() => {
                alert("Producto eliminado");
                window.location.reload();
            })
            .catch(() => alert("Error al eliminar"));
    });
    return registro;
};

const tabla = document.querySelector('[data-table]');
productService.obtenerProductos()
    .then(data => {
        data.forEach(item => {
            tabla.appendChild(construirFila(item.nombre, item.precio, item.descripcion, item.id));
        });
    })
    .catch(() => alert("Error al cargar productos"));