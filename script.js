const nomeInput = document.getElementById('nomeInput');
const numeroInput = document.getElementById('numeroInput');
const addBtn = document.getElementById('addBtn');
const listaNomes = document.getElementById('listaNomes');
const btnSortear = document.getElementById('btnSortear');
const numero = document.getElementById('numero');
const nomeSorteado = document.getElementById('nomeSorteado');

let pessoas = [];

// Adicionar pessoa manualmente
addBtn.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    const numeroEscolhido = parseInt(numeroInput.value);

    if (nome === '') return alert('Digite um nome!');
    if (!numeroEscolhido || numeroEscolhido < 1 || numeroEscolhido > 100) {
        return alert('Escolha um número entre 1 e 100.');
    }

    // Verifica se o número já está ocupado
    const existe = pessoas.find(p => p.numero === numeroEscolhido);
    if (existe) return alert(`O número ${numeroEscolhido} já está ocupado por ${existe.nome}.`);

    // Adiciona
    pessoas.push({ nome, numero: numeroEscolhido });

    nomeInput.value = '';
    numeroInput.value = '';

    atualizarLista();
});

// Atualiza a lista visual
function atualizarLista() {
    pessoas.sort((a, b) => a.numero - b.numero);
    listaNomes.innerHTML = '';
    pessoas.forEach(p => {
        const div = document.createElement('div');
        div.textContent = `${p.numero}. ${p.nome}`;
        listaNomes.appendChild(div);
    });
}

// Função principal do sorteio
btnSortear.addEventListener('click', () => {
    btnSortear.disabled = true;
    numero.classList.add('embaralhando');
    nomeSorteado.textContent = 'Sorteando...';

    let contagem = 0;
    const intervalo = setInterval(() => {
        const aleatorio = Math.floor(Math.random() * 100) + 1; // de 1 a 100
        numero.textContent = aleatorio;

        const encontrado = pessoas.find(p => p.numero === aleatorio);
        nomeSorteado.textContent = encontrado ? encontrado.nome : 'Sem nome';

        contagem++;
    }, 100); // Troca rápida de 0.1s

    // Após 10 segundos, para
    setTimeout(() => {
        clearInterval(intervalo);
        numero.classList.remove('embaralhando');

        const vencedor = Math.floor(Math.random() * 100) + 1;
        numero.textContent = vencedor;

        const pessoa = pessoas.find(p => p.numero === vencedor);
        nomeSorteado.textContent = pessoa ? pessoa.nome : 'Sem nome';

        btnSortear.disabled = false;
    }, 10000); // 10 segundos
});
