const fraseEvaluar ="Hola como estas hoy";
const palabraMasLarga = (frase) => {
    const palabras = frase.split(" ");
    let palabraMasLarga = "";
    for(let i = 0; i < palabras.length; i++){
        if(palabras[i].length > palabraMasLarga.length){
            palabraMasLarga = palabras[i];
        }
    }
    return `La palabra mas larga es: ${palabraMasLarga}`;
};
console.log(palabraMasLarga(fraseEvaluar));
