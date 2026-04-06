export const FormPost = (function () {
    const slot = document.getElementById('slot-form');

    const render = () => {
        slot.innerHTML = `
            <div class="form-panel">
                <h3>Crear Post</h3>
                <input type="text" id="post-titulo" placeholder="Titulo" class="input-field">
                <input type="text" id="post-descripcion" placeholder="Descripcion" class="input-field">
                <button class="btn btn-post" id="btn-enviar-post">Enviar</button>
            </div>
        `;

        document.getElementById('btn-enviar-post').addEventListener('click', () => {
            postData();
        });
    };

    return { render };
}());