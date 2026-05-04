// Conexión original local (XAMPP - PHP)
// const API_BASE = "/Async-promesas/api/conexion.php?tabla=mascotas";

// Conexión a la nube (Supabase)
// const API_BASE = "https://givvtpwlrhxgopugqgcx.supabase.co/rest/v1/mascotas";
// const API_KEY = "sb_publishable_B0OXcNgTSrVO3IJFitOQfg_E42wrbeI";

// Conexión actual con SQL Server (API Node.js)
const API_BASE = "http://localhost:3000/api/mascotas";

const listarMascotas = () => {
    return fetch(API_BASE)
        .then(response => {
            if (!response.ok) throw new Error("Error al obtener mascotas");
            return response.json();
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
};

const crearMascota = (nombre, tipo, raza = "", edad = 0) => {
    return fetch(API_BASE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, tipo, raza, edad })
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al crear mascota");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const actualizarMascota = (id, nombre, tipo, raza = "", edad = 0) => {
    return fetch(API_BASE, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, nombre, tipo, raza, edad })
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al actualizar mascota");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const eliminarMascota = (id) => {
    return fetch(`${API_BASE}?id=${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al eliminar mascota");
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
};

const obtenerMascota = (id) => {
    return fetch(`${API_BASE}?id=${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Mascota no encontrada");
            return response.json();
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
};

export const mascotaService = {
    listarMascotas,
    crearMascota,
    actualizarMascota,
    eliminarMascota,
    obtenerMascota
};
