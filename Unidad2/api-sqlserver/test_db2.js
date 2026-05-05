const sql = require('mssql/msnodesqlv8');

const config = {
  connectionString: 'Driver=SQL Server;Server=DFORTUN\\SQLEXPRESS;Database=DoguitoDB;Trusted_Connection=yes;'
};

async function test() {
    try {
        console.log("Probando con string...");
        let pool = await sql.connect(config);
        console.log("✅ Conectado!");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error:", err);
        process.exit(1);
    }
}
test();
