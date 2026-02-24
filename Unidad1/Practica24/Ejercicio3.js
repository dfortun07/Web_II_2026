const numeroEvaluar = 123456789
let numeroString = numeroEvaluar.toString();
let numeroInvertido = "";
for (let i = numeroString.length - 1; i >= 0; i--) {
    numeroInvertido += numeroString[i];
}
console.log(`El número invertido es: ${numeroInvertido}`);
