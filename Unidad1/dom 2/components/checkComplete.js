const color = (evento) => {
    const element = evento.target;
    element.classList.add('fas');
    element.classList.remove('far');
    element.classList.add('completeIcon');
}

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', color);
    return i;
}

export default checkComplete;