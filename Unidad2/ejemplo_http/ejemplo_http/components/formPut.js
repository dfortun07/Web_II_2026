export const FormPut = (function () {
    const slot = document.getElementById('slot-form');

    const render = () => {
        slot.innerHTML = `
            <div class="form-panel">
                <h3>Actualizar Post</h3>
                <input type="text" id="put-id" placeholder="ID del post" class="input-field">
                <input type="text" id="put-titulo" placeholder="Nuevo titulo" class="input-field">
                <input type="text" id="put-descripcion" placeholder="Nueva descripcion" class="input-field">
                <button class="btn btn-put" id="btn-enviar-put">Actualizar</button>
            </div>
        `;

        document.getElementById('btn-enviar-put').addEventListener('click', () => {
            putData();
        });
    };

    return { render };
}());