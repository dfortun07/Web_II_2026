function ContarParesImpares(numeros){
    let pares = 0;
    let impares = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares++;
        } else {
            impares++;
        }
    }
    return `Pares: ${pares}, Impares: ${impares}`;
}
console.log(ContarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));