const NumerosEvaluar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function esPrimo(numero) {
    if (numero <= 1) {
            return false
    }
        for(let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
        
        
            }     
        }
        return true;  

    }
    function obtenerNumerosPrimos(numeros) {
        let numerosPrimos = [];
        for(let i= 0; i < numeros.length; i++) {
            if (esPrimo(numeros[i])) {
                numerosPrimos.push(numeros[i]);
            }
        }
        return ` Los números primos son: ${numerosPrimos.join(", ")}`;
    }
    console.log(obtenerNumerosPrimos(NumerosEvaluar));
     


