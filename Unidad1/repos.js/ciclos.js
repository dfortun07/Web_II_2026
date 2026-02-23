const paisesDisponibles = ["Argentina", "Brasil", "Chile", "Peru"];
const precioPaises = new Array(100, 200, 150, 180);
const presupuesto = 250;
let i = 0;
while (precioPaises[i] > presupuesto && i < precioPaises.length) {
    i++;
}
if (i== paisesDisponibles.length) {
    console.log("no existe passaje");
} else {
    console.log("puedes comprar el pasaje");
}