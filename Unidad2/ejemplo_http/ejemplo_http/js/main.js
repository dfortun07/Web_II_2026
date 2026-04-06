import { FormPost } from '../components/formPost.js';
import { FormPut } from '../components/formPut.js';
import { FormDelete } from '../components/formDelete.js';

document.getElementById('btn-get').addEventListener('click', () => {
    document.getElementById('slot-form').innerHTML = '';
    getData();
});

document.getElementById('btn-post').addEventListener('click', () => {
    FormPost.render();
});

document.getElementById('btn-put').addEventListener('click', () => {
    FormPut.render();
});

document.getElementById('btn-delete').addEventListener('click', () => {
    FormDelete.render();
});