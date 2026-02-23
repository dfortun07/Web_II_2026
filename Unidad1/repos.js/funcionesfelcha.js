const saludar = () => {
    console.log("funcion flecha");
}
saludar();

const duplicar = numero => {
    return numero * 2;
}
console.log(duplicar(5));

const suma = (a, b) => {
    return a + b;
};
console.log(suma(2, 3));

const crearUsuario = (nombre, edad) => ({ nombre: nombre, edad: edad });
console.log(crearUsuario("juan", 28));

const numero1 = [3, 2, 4, 5, 6, 20];
const procesarNumeros = (Numeros) => {
    return Numeros
        .filter(numero => numero > 10)
        .map(numero => numero * 2)
};
const resultado = procesarNumeros(numero1);
console.log(resultado);

const usuarios = [
    { nombre: "Luis", edad: 20 },
    { nombre: "Maria", edad: 25 },
    { nombre: "Santy", edad: 90 },
    { nombre: "Felipe", edad: 43 }
];
const procesarUsuario = (usuarios) => {
    return usuarios
        .filter(usuario => usuario.edad > 18)
        .map(usuario => {
            const { nombre } = usuario;
            return nombre.length > 5 ? nombre.toUpperCase() : nombre.toLowerCase();
        });
};
const result2 = procesarUsuario(usuarios);
console.log(result2);