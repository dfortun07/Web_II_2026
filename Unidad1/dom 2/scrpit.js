import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
(() => {
    const btn = document.querySelector('[data-form-btn]');
    console.log(btn);

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';

        const contTask = document.createElement('div');
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;

        contTask.appendChild(checkComplete());
        contTask.appendChild(titleTask);
        task.appendChild(contTask);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    }

    btn.addEventListener('click', createTask);

    const checkComplete = () => {
        const i = document.createElement('i');
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener('click', color); 
        return i; 
    }

    const color = (evento) => {
        const element = evento.target;
        element.classList.add('fas');
        element.classList.remove('far');
        element.classList.add('completeIcon');
    }

    const deleteIcon = () => {
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
        i.addEventListener('click', deleteTask); 
        return i;
    }

    const deleteTask = (evento) => {
        const parent = evento.target.parentElement;
        parent.remove();
    }
})();