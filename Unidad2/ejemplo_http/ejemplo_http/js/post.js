const postData = () => {
    const titulo = document.getElementById("post-titulo").value;
    const descripcion = document.getElementById("post-descripcion").value;

    if (!titulo || !descripcion) {
        showResult("Completa todos los campos", true);
        return;
    }

    const newPost = {
        titulo: titulo,
        descipcion: descripcion,
        fecha: new Date().toISOString()
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Http error estado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showResult(data))
    .catch(error => showResult(error.message, true));
};