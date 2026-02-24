const numerosEvaluar = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];
const contarParesImparesFlecha = (numeros) => {
    let resultado = {
        pares: 0,
        impares: 0
    };
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            resultado.pares++;
        } else {
            resultado.impares++;
        }
    }
    
    return `Pares: ${resultado.pares}, Impares: ${resultado.impares}`;
};
console.log(contarParesImparesFlecha(numerosEvaluar));