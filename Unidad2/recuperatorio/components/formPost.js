import { postData } from '../js/post.js';

export const FormPost = (function () {
    const slot = document.getElementById('slot-form');

    const render = () => {
        slot.innerHTML = `
            <div class="form-panel">
                <h3>Crear Usuario</h3>
                <input type="text" id="post-nombre" placeholder="Nombre" class="input-field">
                <input type="text" id="post-curso" placeholder="Curso" class="input-field">
                <button type="button" class="btn btn-post" id="btn-enviar-post">Enviar</button>
            </div>
        `;

        document.getElementById('btn-enviar-post').addEventListener('click', postData);
    };

    return { render };
}());