/*
const obtenerProductos = () => fetch('http://localhost:3000/productos').then(res => res.json());

const agregarProducto = (nombre, precio, descripcion) => {
    return fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, precio, descripcion, id: Date.now() })
    });
};

const borrarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE'
    });
};

const buscarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err));
};

const editarProducto = (nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, precio, descripcion })
    }).then(res => console.log(res)).catch(err => console.log(err));
};

export const productService = {
    obtenerProductos,
    agregarProducto,
    borrarProducto,
    buscarProducto,
    editarProducto
};
*/

// --- CÓDIGO NUEVO (Node.js + Express) ---
const BASE_URL = "http://localhost:3000";

export const productService = {
    obtenerProductos: async () => {
        const res = await fetch(`${BASE_URL}/productos`);
        return res.json();
    },
    buscarProducto: async (id) => {
        const res = await fetch(`${BASE_URL}/productos/${id}`);
        return res.json();
    },
    agregarProducto: async (nombre, precio, descripcion) => {
        const id = crypto.randomUUID();
        const res = await fetch(`${BASE_URL}/productos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, nombre, precio, descripcion })
        });
        return res.json();
    },
    editarProducto: async (nombre, precio, descripcion, id) => {
        const res = await fetch(`${BASE_URL}/productos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, precio, descripcion })
        });
        return res.json();
    },
    borrarProducto: async (id) => {
        const res = await fetch(`${BASE_URL}/productos/${id}`, {
            method: "DELETE"
        });
        return res.json();
    }
};