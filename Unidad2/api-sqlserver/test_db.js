const sql = require('mssql/msnodesqlv8');

const dbConfig = {
    server: "DFORTUN\\SQLEXPRESS",
    database: "DoguitoDB",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

async function test() {
    try {
        console.log("Intentando conectar a SQL Server...");
        let pool = await sql.connect(dbConfig);
        console.log("✅ Conexión exitosa a la base de datos.");
        let result = await pool.request().query("SELECT * FROM usuarios");
        console.log("Filas en usuarios:", result.recordset);
        process.exit(0);
    } catch (err) {
        console.error("❌ Error de conexión:", err);
        process.exit(1);
    }
}
test();
