function exibirDados(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "") {
        alert("Você deve preencher o nome.");
    } else if (email === "") {
        alert("Você deve preencher o email.");
    } else {
        alert(`Obrigado por se inscrever no Clube de Descontos, ${nome}!\nVocê irá receber uma notificação no email: ${email}!`)
    }
}

function exibirAlerta() {
    alert("Preencha os dados para se inscrever!");
}