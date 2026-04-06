const deleteData = () => {
    fetch(`${API_URL}/1`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Http error estado: ${response.status}`);
        }
        showResult({
            message: "Post eliminado correctamente",
            status: response.status
        });
    })
    .catch(error => showResult(error.message, true));
}