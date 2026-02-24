const numeroEvaluar = 50;
function decimalABinario(numero) {
    if (numero === 0) 
        return "0";
    let binario = "";
    while (numero > 0) {
        let residuo = numero % 2;
        binario = residuo + binario;
        numero = Math.floor(numero / 2);
    }
    return `El número ${numeroEvaluar} en binario es: ${binario}`;
}
console.log(decimalABinario(numeroEvaluar));