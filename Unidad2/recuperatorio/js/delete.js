import { showResult } from './ui.js';
import { getData } from './get.js';

const API_URL = 'http://localhost:3004/usuarios';

export const deleteData = () => {
    const id = document.getElementById('delete-id').value;

    if (!id) {
        showResult('Ingresa el ID del usuario a eliminar', true);
        return;
    }

    fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Http error estado: ${response.status}`);
        }
        showResult({
            message: 'Usuario eliminado correctamente',
            status: response.status
        });
        getData();
    })
    .catch(error => showResult(error.message, true));
};