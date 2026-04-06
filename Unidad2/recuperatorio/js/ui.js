export const showResult = (data, isError = false) => {
    const statusDiv = document.getElementById('status');
    const resultPre = document.getElementById('result');

    if (isError) {
        statusDiv.innerHTML = '<span style="color: red;">❌ Error:</span>';
        resultPre.textContent = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    } else {
        statusDiv.innerHTML = '<span style="color: green;">✅ Éxito:</span>';
        resultPre.textContent = JSON.stringify(data, null, 2);
    }
};
