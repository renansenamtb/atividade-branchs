console.log("Projeto iniciado!");
function mudarFundo() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "#f0f0f0" : "lightblue";
}
function mostrarDataHora() {
    const agora = new Date();
    document.getElementById("data-hora").innerHTML = "Agora: " + agora.toLocaleString();
}
function mudarTexto() {
    document.getElementById("texto").innerHTML =
        "O texto foi alterado!";
}
function alternarVisibilidade() {
    const p = document.getElementById("texto-toggle");
    p.style.display = (p.style.display === "none") ? "block" : "none";
}


