    //recepcion de datos
    /*const CrearFila = (nombre, email) => {
        const fila = document.createElement('tr');
        //html como variable
        const contenido = `
        <td class="td" data-td>
        ${nombre}
        </td>
        <td>${email}</td>
        <td>
        <ul class="table__button-control">
            <li>
            
                href="../screens/editar_cliente.html"
                class="simple-button simple-button--edit"
            >
                Editar
            </a>
            </li>
            <li>
            <button class="simple-button simple-button--delete" type="button">
                Eliminar
            </button>
            </li>
        </ul>
        </td>
        `;
        fila.innerHTML = contenido;
        return fila;        
    }*/

    /*const table = document.querySelector('[data-table]');

    const listar_clientes = () => {
        const promesa = new Promise((resolve, reject) => {
            const http = new XMLHttpRequest();
            http.open('GET', 'http://localhost:3000/perfil');
            http.send();
            http.onload = () => {
                const response = JSON.parse(http.response);
                if (http.response >= 400) {
                    reject(response);
                } else {
                    resolve(response);
                }
            }
        });
        return promesa;
    };

    listar_clientes().then((data) => {
        data.forEach((perfil) => {
            const nuevaFila = CrearFila(perfil.nombre, perfil.email);
            table.appendChild(nuevaFila);
        });
    })
    .catch((error) => alert("sin conexion"));*/

   /* const listar_clientes = () => fetch('http://localhost:3000/perfil').then((response) => response.json());

    const crearCliente = (nombre, email) => {
        return fetch('http://localhost:3000/perfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email, id: self.crypto.randomUUID() })
        });
    }

    const actualizarCliente = (nombre, email, id) => {
        return fetch(`http://localhost:3000/perfil/
        method: "PUT",${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email })
        })
        .then(respuesta=>console.log(respuesta)).catch(error=>console.log(error));
    };

    const eliminarCliente = (id) => {
        console.log("eliminar cliente con id: ", id);
        return fetch(`http://localhost:3000/perfil/${id}`, {
            method: 'DELETE'
        });
    };

    //REFERECINA A ID
    const cliente = (id) => {
        return fetch(`http://localhost:3000/perfil/${id}`).then((response)=>response.json())
        .catch((error)=>console.log(error));
    }*/
/*const API_BASE_URL = `http://localhost/api/conexion.php`;
const listar_clientes = () => {
    return fetch(API_BASE_URL).then((response) => {
        if (!response.ok) throw new Error("Error al obtener los clientes");
        return response.json();
    });
};

const crearCliente = (nombre, email) => {
    return fetch(API_BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email })
    }).then((response) => {
        if (!response.ok) throw new Error("Error al crear el cliente");
        return response.json();
    });
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, id })
    }).then((response) => {
        if (!response.ok) throw new Error("Error al actualizar el cliente");
        return response.json();
    });
};

const eliminarCliente = (id) => {
    return fetch(`${API_BASE_URL}?id=${id}`, {
        method: "DELETE"
    }).then((response) => {
        if (!response.ok) throw new Error("Error al eliminar el cliente");
        return response.json();
    });
};

const cliente = (id) => {
    return fetch(`${API_BASE_URL}?id=${id}`)
        .then((response) => response.json());
};*/
const API_BASE_URL = "/Async-promesas/api/conexion.php?tabla=usuarios";

const request = async (url, options = {}) => {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
        const errorMessage = data?.error ?? data?.mensaje ?? text ?? "Error";
        throw new Error(errorMessage);
    }

    return data;
};

const listar_clientes = () => {
    return request(`${API_BASE_URL}`);
};

const cliente = (id) => {
    return request(`${API_BASE_URL}&id=${id}`);
};

const crearCliente = (nombre, email) => {
    return request(API_BASE_URL, {
        method: "POST",
        body: JSON.stringify({ nombre, email })
    });
};

const actualizarCliente = (nombre, email, id) => {
    return request(API_BASE_URL, {
        method: "PUT",
        body: JSON.stringify({ id, nombre, email })
    });
};

const eliminarCliente = (id) => {
    return request(`${API_BASE_URL}&id=${id}`, {
        method: "DELETE"
    });
};

export const clientService = {
    listar_clientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    cliente
};