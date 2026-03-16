import { tabla } from './components/tabla.js';
import { cards } from './components/cards.js';
import { Form } from './components/form.js';

Form.setDatos((task) => {
    tabla.addTask(task);
    cards.update();
});