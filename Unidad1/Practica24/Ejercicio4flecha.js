const NumerosEvaluar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const esPrimoFlecha = (numero) => {
    if (numero <= 1)
        return false;
    for(let i=2; i< numero; i++) {
        if (numero % i === 0) {
            return false;
    
        }
    }
    return true;
};

const obtenerNumerosPrimosFlecha = (numeros) => {
    let numerosPrimos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (esPrimoFlecha(numeros[i])) {
            numerosPrimos.push(numeros[i]);
        }
    }
    return `Los números primos son: ${numerosPrimos.join(", ")}`;
};
console.log(obtenerNumerosPrimosFlecha(NumerosEvaluar));