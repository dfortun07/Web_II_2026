import { tabla } from './tabla.js';

export const cards = (function () {
    const taskCards = document.getElementById('taskCards');

    const update = () => {
        const tasks = tabla.getTasks();
        taskCards.innerHTML = '';
        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'task-card';
            card.innerHTML = `
                <p><strong>Tarea:</strong> ${task.task}</p>
                <p><strong>Descripción:</strong> ${task.description}</p>
                <p><strong>Fecha:</strong> ${task.fecha}</p>
                <p><strong>Prioridad:</strong> ${task.priority}</p>
                <p><strong>Responsable:</strong> ${task.responsable}</p>
                <p><strong>Estado:</strong> ${task.estado}</p>
                <p><strong>Categoría:</strong> ${task.categoria}</p>
            `;
            taskCards.appendChild(card);
        });
    };

    return { update };

}());