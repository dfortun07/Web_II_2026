const express = require('express');
const cors = require('cors');
const sql = require('mssql/msnodesqlv8');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    connectionString: 'Driver={SQL Server};Server=DFORTUN\\SQLEXPRESS;Database=DoguitoDB;Trusted_Connection=yes;'
};

// ==========================================
// USUARIOS (CLIENTES)
// ==========================================
app.get('/api/usuarios', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        const id = req.query.id;
        if (id) {
            let result = await pool.request().input('id', sql.Int, id).query("SELECT * FROM usuarios WHERE id = @id");
            res.json(result.recordset);
        } else {
            let result = await pool.request().query("SELECT * FROM usuarios");
            res.json(result.recordset);
        }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const { nombre, email } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('n', sql.NVarChar, nombre)
            .input('e', sql.NVarChar, email)
            .query("INSERT INTO usuarios (nombre, email) VALUES (@n, @e)");
        res.status(201).json({ mensaje: "Usuario creado" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/usuarios', async (req, res) => {
    try {
        const { id, nombre, email } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('id', sql.Int, id)
            .input('n', sql.NVarChar, nombre)
            .input('e', sql.NVarChar, email)
            .query("UPDATE usuarios SET nombre = @n, email = @e WHERE id = @id");
        res.json({ mensaje: "Usuario actualizado" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/usuarios', async (req, res) => {
    try {
        const id = req.query.id;
        let pool = await sql.connect(dbConfig);
        await pool.request().input('id', sql.Int, id).query("DELETE FROM usuarios WHERE id = @id");
        res.json({ mensaje: "Usuario eliminado" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// ==========================================
// MASCOTAS
// ==========================================
app.get('/api/mascotas', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        const id = req.query.id;
        if (id) {
            let result = await pool.request().input('id', sql.Int, id).query("SELECT * FROM mascotas WHERE id = @id");
            res.json(result.recordset);
        } else {
            let result = await pool.request().query("SELECT * FROM mascotas");
            res.json(result.recordset);
        }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/mascotas', async (req, res) => {
    try {
        const { nombre, tipo, raza, edad } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('n', sql.NVarChar, nombre)
            .input('t', sql.NVarChar, tipo)
            .input('r', sql.NVarChar, raza || '')
            .input('e', sql.Int, edad || 0)
            .query("INSERT INTO mascotas (nombre, tipo, raza, edad) VALUES (@n, @t, @r, @e)");
        res.status(201).json({ mensaje: "Mascota creada" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/mascotas', async (req, res) => {
    try {
        const { id, nombre, tipo, raza, edad } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('id', sql.Int, id)
            .input('n', sql.NVarChar, nombre)
            .input('t', sql.NVarChar, tipo)
            .input('r', sql.NVarChar, raza || '')
            .input('e', sql.Int, edad || 0)
            .query("UPDATE mascotas SET nombre = @n, tipo = @t, raza = @r, edad = @e WHERE id = @id");
        res.json({ mensaje: "Mascota actualizada" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/mascotas', async (req, res) => {
    try {
        const id = req.query.id;
        let pool = await sql.connect(dbConfig);
        await pool.request().input('id', sql.Int, id).query("DELETE FROM mascotas WHERE id = @id");
        res.json({ mensaje: "Mascota eliminada" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// ==========================================
// ARTICULOS (PRODUCTOS)
// ==========================================
app.get('/api/articulos', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        const id = req.query.id;
        if (id) {
            let result = await pool.request().input('id', sql.Int, id).query("SELECT * FROM articulos WHERE id = @id");
            res.json(result.recordset);
        } else {
            let result = await pool.request().query("SELECT * FROM articulos");
            res.json(result.recordset);
        }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/articulos', async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('n', sql.NVarChar, nombre)
            .input('p', sql.Decimal(10, 2), precio)
            .input('d', sql.NVarChar, descripcion || '')
            .query("INSERT INTO articulos (nombre, precio, descripcion) VALUES (@n, @p, @d)");
        res.status(201).json({ mensaje: "Artículo creado" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/articulos', async (req, res) => {
    try {
        const { id, nombre, precio, descripcion } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('id', sql.Int, id)
            .input('n', sql.NVarChar, nombre)
            .input('p', sql.Decimal(10, 2), precio)
            .input('d', sql.NVarChar, descripcion || '')
            .query("UPDATE articulos SET nombre = @n, precio = @p, descripcion = @d WHERE id = @id");
        res.json({ mensaje: "Artículo actualizado" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/articulos', async (req, res) => {
    try {
        const id = req.query.id;
        let pool = await sql.connect(dbConfig);
        await pool.request().input('id', sql.Int, id).query("DELETE FROM articulos WHERE id = @id");
        res.json({ mensaje: "Artículo eliminado" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor SQL Server corriendo en http://localhost:${PORT}`);
});
