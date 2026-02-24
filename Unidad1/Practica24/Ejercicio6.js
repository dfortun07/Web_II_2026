
const numerosEvaluar = [2, 3, 2, 5, 3, 3, 7, 2, 3, 8, 3, 9, 3];
function numeroMasRepetido(numeros) {
    let contador = {};
    let maxRepeticiones = 0;
    let numeroFrecuente = numeros[0];
    
    for (let i = 0; i < numeros.length; i++) {
        let numeroActual = numeros[i];
        
        if (contador[numeroActual]) {
            contador[numeroActual]++;
        } else {
            contador[numeroActual] = 1;
        }
        
        if (contador[numeroActual] > maxRepeticiones) {
            maxRepeticiones = contador[numeroActual];
            numeroFrecuente = numeroActual;
        }
    }
    
    return {
        numero: numeroFrecuente,
        repeticiones: maxRepeticiones
        
    };

}

let resultado = numeroMasRepetido(numerosEvaluar);
console.log(`El número que más se repite es: ${resultado.numero} con ${resultado.repeticiones} repeticiones.`);
