// Conexión original local (XAMPP - PHP)
// const API_BASE = "/Async-promesas/api/conexion.php?tabla=usuarios";

// Conexión a la nube (Supabase)
// const API_BASE = "https://givvtpwlrhxgopugqgcx.supabase.co/rest/v1/usuarios";
// const API_KEY = "sb_publishable_B0OXcNgTSrVO3IJFitOQfg_E42wrbeI";

// Conexión actual con SQL Server (API Node.js)
const API_BASE = "http://localhost:3000/api/usuarios";

const listarUsuarios = () => {
    return fetch(API_BASE)
        .then(response => {
            if (!response.ok) throw new Error("Error al obtener usuarios");
            return response.json();
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
};

const crearUsuario = (nombre, email) => {
    return fetch(API_BASE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email })
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al crear usuario");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const actualizarUsuario = (id, nombre, email) => {
    return fetch(API_BASE, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, nombre, email })
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al actualizar usuario");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const eliminarUsuario = (id) => {
    return fetch(`${API_BASE}?id=${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al eliminar usuario");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const obtenerUsuario = (id) => {
    return fetch(`${API_BASE}?id=${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Usuario no encontrado");
            return response.json();
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
};

export const usuarioService = {
    listarUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    obtenerUsuario
};
