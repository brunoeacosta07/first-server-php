function solicitarAlServidor() {
    fetch("server.php")
        .then(response => response.text())
        .then(data => {
            console.log(data);
            document.getElementById("respuesta").innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
