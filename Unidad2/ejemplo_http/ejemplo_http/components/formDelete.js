export const FormDelete = (function () {
    const slot = document.getElementById('slot-form');

    const render = () => {
        slot.innerHTML = `
            <div class="form-panel">
                <h3>Eliminar Post</h3>
                <input type="text" id="delete-id" placeholder="ID del post" class="input-field">
                <button class="btn btn-delete" id="btn-enviar-delete">Eliminar</button>
            </div>
        `;

        document.getElementById('btn-enviar-delete').addEventListener('click', () => {
            deleteData();
        });
    };

    return { render };
}());