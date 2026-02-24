const NumeroEvaluar = 123456789;
const invertirnumeroflecha = (numero) => {
    let numeroString = numero.toString();
    let numeroInvertido = "";
    for (let i = numeroString.length - 1; i >= 0; i--) {
        numeroInvertido += numeroString[i];
    }
    return `El nmero invertido es: ${numeroInvertido}`;
}

console.log(invertirnumeroflecha(NumeroEvaluar));