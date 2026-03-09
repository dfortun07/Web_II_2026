const validar = (input) => {
    if (input.value === '') {
        alert('El campo no puede estar vacío');
        return false;
    }
    if (input.value.length < 3) {
        alert('El campo debe tener al menos 3 caracteres');
        return false;
    }
    if (input.value.length > 50) {
        alert('El campo no puede tener más de 50 caracteres');
        return false;
    }
    return true;
}

export default validar;