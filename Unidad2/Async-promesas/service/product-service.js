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