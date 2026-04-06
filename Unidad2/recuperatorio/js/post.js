import { showResult } from './ui.js';
import { getData } from './get.js';

const API_URL = 'http://localhost:3004/usuarios';

export const postData = () => {
    const nombre = document.getElementById('post-nombre').value;
    const curso = document.getElementById('post-curso').value;

    if (!nombre || !curso) {
        showResult('Completa todos los campos', true);
        return;
    }

    const nuevoUsuario = { nombre, curso };

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(nuevoUsuario)
    })
        .then(response => {
            if (!response.ok) throw new Error(`Http error estado: ${response.status}`);
            return response.json();
        })
        .then(data => {
            showResult(data);
            getData();
        })
        .catch(error => showResult(error.message, true));
};