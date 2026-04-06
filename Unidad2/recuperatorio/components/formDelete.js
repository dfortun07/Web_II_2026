import { deleteData } from '../js/delete.js';

export const FormDelete = (function () {

    const render = () => {
        const slot = document.getElementById('slot-form');
        slot.innerHTML = `
            <div class="form-panel">
                <h3>Eliminar Usuario</h3>
                <input type="text" id="delete-id" placeholder="ID del usuario" class="input-field" />
                <button type="button" class="btn btn-delete" id="btn-enviar-delete">Eliminar</button>
            </div>
        `;

        document.getElementById('btn-enviar-delete').addEventListener('click', deleteData);
    };

    return { render };
})();