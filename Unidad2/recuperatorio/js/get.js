import { showResult } from './ui.js';

const API_URL = 'http://localhost:3004/usuarios';

export const getData = () => {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! estado: ${response.status}`);
            return response.json();
        })
        .then(data => {
            showResult(data);
            window.tabla.renderAll(data);
        })
        .catch(error => showResult(error.message, true));
};