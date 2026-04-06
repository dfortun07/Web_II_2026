import { cards } from './cards.js';

export const tabla = (function () {

    const cuerpoTabla = document.getElementById('taskTable')
        .getElementsByTagName('tbody')[0];

    const addTask = (Task) => {
        const nuevaFila = cuerpoTabla.insertRow();
        nuevaFila.dataset.id = Task.id;

        nuevaFila.insertCell(0).textContent = Task.id;
        nuevaFila.insertCell(1).textContent = Task.nombre;
        nuevaFila.insertCell(2).textContent = Task.curso;
    };

    const renderAll = (usuarios) => {
        cuerpoTabla.innerHTML = '';
        usuarios.forEach(u => addTask(u));
        cards.update(usuarios);
    };

    const getTasks = () => {
        return Array.from(cuerpoTabla.rows).map(row => ({
            id: row.cells[0].textContent,
            nombre: row.cells[1].textContent,
            curso: row.cells[2].textContent,
        }));
    };

    return { addTask, renderAll, getTasks };
})();