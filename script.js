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
        "O texto foi alterado! Clique novamente se quiser.";
}
function mudarCorTexto() {
    const texto = document.getElementById("texto");
    texto.style.color = texto.style.color === "red" ? "black" : "red";
}


