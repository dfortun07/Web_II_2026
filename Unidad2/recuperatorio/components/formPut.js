import { putData } from '../js/put.js';

export const FormPut = (function () {

    const render = () => {
        const slot = document.getElementById('slot-form');
        slot.innerHTML = `
            <div class="form-panel">
                <h3>Actualizar Usuario</h3>
                <input type="text" id="put-id" placeholder="ID del usuario" class="input-field" />
                <input type="text" id="put-nombre" placeholder="Nombre" class="input-field" />
                <input type="text" id="put-curso" placeholder="Curso" class="input-field" />
                <button type="button" class="btn btn-put" id="btn-enviar-put">Actualizar</button>
            </div>
        `;

        document.getElementById('btn-enviar-put').addEventListener('click', putData);
    };

    return { render };
})();