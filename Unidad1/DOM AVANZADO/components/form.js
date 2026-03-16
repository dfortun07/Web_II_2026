export const Form = (function () {
    const form = document.querySelector('[data-form]');
    const inputTask = form.querySelector('[data-input-task]');
    const inputDescription = form.querySelector('[data-input-descripcion]');
    const inputFecha = form.querySelector('[data-input-fecha]');
    const inputPriority = form.querySelector('[data-input-prioridad]');
    const inputResponsable = form.querySelector('[data-input-responsable]');
    const inputEstado = form.querySelector('[data-input-estado]');
    const inputCategoria = form.querySelector('[data-input-categoria]');

    const DatosFormulario = () => {
        return {
            task: inputTask.value.trim(),
            description: inputDescription.value.trim(),
            fecha: inputFecha.value.trim(),
            priority: inputPriority.value.trim(),
            responsable: inputResponsable.value.trim(),
            estado: inputEstado.value.trim(),
            categoria: inputCategoria.value.trim()
        };
    }

    const reset = () => {
        inputTask.value = '';
        inputDescription.value = '';
        inputFecha.value = '';
        inputPriority.value = '';
        inputResponsable.value = '';
        inputEstado.value = '';
        inputCategoria.value = '';
    }

    const setDatos = (callback) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            callback(DatosFormulario());
            reset();
        });
    }

    return { setDatos };

}());