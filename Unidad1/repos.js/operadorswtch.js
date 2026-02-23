const paisDestino = "Argentina";
const paisesdisponibles = ["Argentina", "Brasil", "Chile", "Peru"];
let valorpasaje = 0;
switch (paisDestino) {
    case "Argentina":
        valorpasaje = 100;
        break;
    case "Brasil":
        valorpasaje = 200;
        break;
    case "Chile":
        valorpasaje = 150;
        break;
    case "Peru":
        valorpasaje = 180;
        break;
    default:
        console.log("País no disponible");
}
if (valorpasaje > 0) {
    console.log(`El valor del pasaje para ${paisDestino} es ${valorpasaje}`);
}