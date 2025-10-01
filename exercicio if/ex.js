function obterMensagemDeVoto() {
    // Pega o valor do input e converte para número
    let idade = parseInt(document.getElementById('idade').value);

    // Verifica se a idade é válida
    if (isNaN(idade)) {
        document.getElementById('resultado').innerText = "Por favor, digite uma idade válida.";
        return;
    }

    // Verifica se pode votar
    if (idade >= 16) {
        document.getElementById('resultado').innerText = "Você pode votar.";
    } else {
        document.getElementById('resultado').innerText = "Você não pode votar.";
    }
}