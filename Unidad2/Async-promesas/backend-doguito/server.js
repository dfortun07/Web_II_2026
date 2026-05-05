import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./conexion.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/clientes", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM usuarios");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/clientes/:id", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/clientes", async (req, res) => {
    try {
        const { id, nombre, email } = req.body;
        await pool.query("INSERT INTO usuarios (id, nombre, email) VALUES (?, ?, ?)", [id, nombre, email]);
        res.json({ message: "Usuario agregado", cliente: { id, nombre, email } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/clientes/:id", async (req, res) => {
    try {
        const { nombre, email } = req.body;
        await pool.query("UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?", [nombre, email, req.params.id]);
        res.json({ message: "Usuario actualizado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/clientes/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM usuarios WHERE id = ?", [req.params.id]);
        res.json({ message: "Usuario eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/articulos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM articulos");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/articulos/:id", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM articulos WHERE id = ?", [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: "Artículo no encontrado" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/articulos", async (req, res) => {
    try {
        const { id, nombre, precio, descripcion } = req.body;
        await pool.query("INSERT INTO articulos (id, nombre, precio, descripcion) VALUES (?, ?, ?, ?)", [id, nombre, precio, descripcion]);
        res.json({ message: "Artículo agregado", articulo: { id, nombre, precio, descripcion } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/articulos/:id", async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        await pool.query("UPDATE articulos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?", [nombre, precio, descripcion, req.params.id]);
        res.json({ message: "Artículo actualizado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/articulos/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM articulos WHERE id = ?", [req.params.id]);
        res.json({ message: "Artículo eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/mascotas", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM mascotas");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/mascotas/:id", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM mascotas WHERE id = ?", [req.params.id]);
        if (rows.length > 0) res.json(rows[0]);
        else res.status(404).json({ error: "Mascota no encontrada" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/mascotas", async (req, res) => {
    try {
        const { id, nombre, tipo, raza, edad } = req.body;
        await pool.query("INSERT INTO mascotas (id, nombre, tipo, raza, edad) VALUES (?, ?, ?, ?, ?)", [id, nombre, tipo, raza, edad]);
        res.json({ message: "Mascota agregada" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/mascotas/:id", async (req, res) => {
    try {
        const { nombre, tipo, raza, edad } = req.body;
        await pool.query("UPDATE mascotas SET nombre = ?, tipo = ?, raza = ?, edad = ? WHERE id = ?", [nombre, tipo, raza, edad, req.params.id]);
        res.json({ message: "Mascota actualizada" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/mascotas/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM mascotas WHERE id = ?", [req.params.id]);
        res.json({ message: "Mascota eliminada" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/usuarios", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM usuarios");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/usuarios/:id", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [req.params.id]);
        if (rows.length > 0) res.json(rows[0]);
        else res.status(404).json({ error: "Usuario no encontrado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/usuarios", async (req, res) => {
    try {
        const { id, nombre, email } = req.body;
        await pool.query("INSERT INTO usuarios (id, nombre, email) VALUES (?, ?, ?)", [id, nombre, email]);
        res.json({ message: "Usuario agregado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/usuarios/:id", async (req, res) => {
    try {
        const { nombre, email } = req.body;
        await pool.query("UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?", [nombre, email, req.params.id]);
        res.json({ message: "Usuario actualizado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/usuarios/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM usuarios WHERE id = ?", [req.params.id]);
        res.json({ message: "Usuario eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/productos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM productos");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/productos/:id", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [req.params.id]);
        if (rows.length > 0) res.json(rows[0]);
        else res.status(404).json({ error: "Producto no encontrado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/productos", async (req, res) => {
    try {
        const { id, nombre, precio, descripcion } = req.body;
        await pool.query("INSERT INTO productos (id, nombre, precio, descripcion) VALUES (?, ?, ?, ?)", [id, nombre, precio, descripcion]);
        res.json({ message: "Producto agregado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/productos/:id", async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        await pool.query("UPDATE productos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?", [nombre, precio, descripcion, req.params.id]);
        res.json({ message: "Producto actualizado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/productos/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM productos WHERE id = ?", [req.params.id]);
        res.json({ message: "Producto eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`server corriendo en puerto ${process.env.PORT}`);
});