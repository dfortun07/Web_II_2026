const paisDestino = "Argentina";
const paisesDisponibles = ["Argentina", "Brasil", "Chile", "Peru"];
let edadpasajero = 17;
let acompanante = true;
let pasaporte = true;
let casado = false;

console.log(`verificamos si hay pasajes para ${paisDestino}`);

//A && B || C
if (paisesDisponibles.indexOf(paisDestino) > -1 && edadpasajero >= 18 && !casado) {
    console.log("Pasaje disponible para el pasajero");
}