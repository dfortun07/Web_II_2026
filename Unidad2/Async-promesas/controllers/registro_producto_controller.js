import { productService } from "../service/product-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productService.agregarProducto(nombre, precio, descripcion)
        .then(() => {
            window.location.href = "../screens/registro_completado.html";
        })
        .catch(err => console.log("Error:", err));
});