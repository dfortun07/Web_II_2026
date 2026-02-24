const productosEvaluar = [
       { nombre: "Iphone", precio: 500 },
    { nombre: "tablet", precio: 100 },
    { nombre: "airpods", precio: 300 },
    { nombre: "tablet", precio: 250 },
    { nombre: "computadora", precio: 800 }
];

function sumarPropiedad(arrayObjetos, propiedad) {
    let sumaTotal = 0;
    
    for (let i = 0; i < arrayObjetos.length; i++) {
        sumaTotal = sumaTotal + arrayObjetos[i][propiedad];
    }
    
    return sumaTotal;
}

console.log("Lista de productos:");
for (let i = 0; i < productosEvaluar.length; i++) {
    console.log(productosEvaluar[i].nombre, "-", productosEvaluar[i].precio);
}
let sumaPrecios = sumarPropiedad(productosEvaluar, "precio");
console.log("Suma total de precios:", sumaPrecios);
