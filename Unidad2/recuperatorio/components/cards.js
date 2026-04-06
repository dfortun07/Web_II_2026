export const cards = (function () {

    const update = (tasks) => {
        const taskCards = document.getElementById('taskCards');
        taskCards.innerHTML = '';

        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'task-card';
            card.innerHTML = `
                <p><strong>ID:</strong> ${task.id}</p>
                <p><strong>Nombre:</strong> ${task.nombre}</p>
                <p><strong>Curso:</strong> ${task.curso}</p>
            `;
            taskCards.appendChild(card);
        });
    };

    return { update };
})();