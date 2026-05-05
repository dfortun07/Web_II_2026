/*
// Conexión original local (XAMPP - PHP)
// const API_BASE = "/Async-promesas/api/conexion.php?tabla=articulos";

// Conexión a la nube (Supabase)
// const API_BASE = "https://givvtpwlrhxgopugqgcx.supabase.co/rest/v1/articulos";
// const API_KEY = "sb_publishable_B0OXcNgTSrVO3IJFitOQfg_E42wrbeI";

// Conexión actual con SQL Server (API Node.js)
const API_BASE = "http://localhost:3000/api/articulos";

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
    return fetch(`${API_BASE}?id=${id}`, {
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
    return fetch(`${API_BASE}?id=${id}`)
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
*/

const BASE_URL = "http://localhost:3000";

export const articuloService = {
    listarArticulos: async () => {
        const res = await fetch(`${BASE_URL}/articulos`);
        return res.json();
    },
    obtenerArticulo: async (id) => {
        const res = await fetch(`${BASE_URL}/articulos/${id}`);
        return res.json();
    },
    crearArticulo: async (nombre, precio, descripcion = "") => {
        const id = crypto.randomUUID();
        const res = await fetch(`${BASE_URL}/articulos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, nombre, precio, descripcion })
        });
        return res.json();
    },
    actualizarArticulo: async (nombre, precio, descripcion, id) => {
        const res = await fetch(`${BASE_URL}/articulos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, precio, descripcion })
        });
        return res.json();
    },
    eliminarArticulo: async (id) => {
        const res = await fetch(`${BASE_URL}/articulos/${id}`, {
            method: "DELETE"
        });
        return res.json();
    }
};
