// Conexión original local (XAMPP - PHP)
// const API_BASE_URL = "/Async-promesas/api/conexion.php?tabla=usuarios";

// Conexión a la nube (Supabase)
// const API_BASE_URL = "https://givvtpwlrhxgopugqgcx.supabase.co/rest/v1/usuarios";
// const API_KEY = "sb_publishable_B0OXcNgTSrVO3IJFitOQfg_E42wrbeI";

// Conexión actual con SQL Server (API Node.js)
const API_BASE_URL = "http://localhost:3000/api/usuarios";

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
    return request(API_BASE_URL);
};

const cliente = (id) => {
    return request(`${API_BASE_URL}?id=${id}`);
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
    return request(`${API_BASE_URL}?id=${id}`, {
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