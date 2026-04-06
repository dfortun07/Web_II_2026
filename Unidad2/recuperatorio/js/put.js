import { showResult } from './ui.js';
import { getData } from './get.js';

const API_URL = 'http://localhost:3004/usuarios';

export const putData = () => {
    const id = document.getElementById('put-id').value;
    const updateData = {
        nombre: document.getElementById('put-nombre').value,
        curso: document.getElementById('put-curso').value,
    };

    if (!id || !updateData.nombre || !updateData.curso) {
        showResult('Completa todos los campos, incluyendo ID', true);
        return;
    }

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(updateData)
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