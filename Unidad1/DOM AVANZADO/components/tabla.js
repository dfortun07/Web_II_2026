export const tabla = (function () {
    const cuerpoTabla = document.getElementById('taskTable').getElementsByTagName('tbody')[0];

    const addTask = (Task) => {
        const nuevafila = cuerpoTabla.insertRow();
        nuevafila.insertCell(0).textContent = Task.task;
        nuevafila.insertCell(1).textContent = Task.description;
        nuevafila.insertCell(2).textContent = Task.fecha;
        nuevafila.insertCell(3).textContent = Task.priority;
        nuevafila.insertCell(4).textContent = Task.responsable;
        nuevafila.insertCell(5).textContent = Task.estado;
        nuevafila.insertCell(6).textContent = Task.categoria;
        const accionesCell = nuevafila.insertCell(7);
        const acciones = document.createElement('div');
        acciones.className = 'actions';

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Hecho';
        completeButton.className = 'view';
        completeButton.addEventListener('click', () => {
            nuevafila.classList.toggle('completed');
        });
        acciones.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            cuerpoTabla.deleteRow(nuevafila.rowIndex - 1);
        });
        acciones.appendChild(deleteButton);
        accionesCell.appendChild(acciones);
    };

    const getTasks = () => {
        return Array.from(cuerpoTabla.rows).map(row => ({
            task: row.cells[0].textContent,
            description: row.cells[1].textContent,
            fecha: row.cells[2].textContent,
            priority: row.cells[3].textContent,
            responsable: row.cells[4].textContent,
            estado: row.cells[5].textContent,
            categoria: row.cells[6].textContent,
            complete: row.classList.contains('completed')
        }));
    };

    return { addTask, getTasks };

}());