const API_BASE = "/Async-promesas/api/conexion.php?tabla=articulos";

const listarArticulos = () => {
    return fetch(API_BASE)
        .then(response => {
            if (!response.ok) throw new Error("Error al obtener artículos");
            return response.json();
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
};

const crearArticulo = (nombre, precio, descripcion = "") => {
    return fetch(API_BASE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, descripcion })
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al crear artículo");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const actualizarArticulo = (id, nombre, precio, descripcion = "") => {
    return fetch(API_BASE, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, nombre, precio, descripcion })
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al actualizar artículo");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const eliminarArticulo = (id) => {
    return fetch(`${API_BASE}&id=${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al eliminar artículo");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const obtenerArticulo = (id) => {
    return fetch(`${API_BASE}&id=${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Artículo no encontrado");
            return response.json();
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
};

export const articuloService = {
    listarArticulos,
    crearArticulo,
    actualizarArticulo,
    eliminarArticulo,
    obtenerArticulo
};
