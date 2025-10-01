// 1. Armazenamento de dados
let todosOsJogadores = []; // Lista principal de todos que estão jogando
let jogadoresRestantes = []; // Lista para o sorteio atual (quem ainda não foi sorteado)

// 2. Lista de Tarefas/Prendas (pode expandir MUITO!)
const tarefas = [
    "Beba 2 goles.",
    "Beba 1 shot.",
    "Bebe quem não tiver a cor da roupa do sorteado.",
    "Pule sua vez. O próximo jogador bebe 1 gole e você joga de novo!",
    "Escolha alguém para beber 2 goles.",
    "Desafio: Fique de pé até o próximo sorteio (se cair, bebe 3 goles).",
    "Você se safou! Próximo jogador.",
    "Todos que usam óculos bebem 1 gole.",
    "Beba mais 1 gole por cada letra do seu nome."
];

// 3. Funções de Manipulação de Jogadores

function adicionarJogador() {
    const input = document.getElementById('nome-jogador');
    const nome = input.value.trim();

    if (nome && !todosOsJogadores.includes(nome)) {
        todosOsJogadores.push(nome);
        jogadoresRestantes.push(nome); // Adiciona na lista principal e na restante
        
        // Atualiza a interface
        exibirJogadores();
        
        // Limpa o campo e habilita o botão de sorteio
        input.value = '';
        document.getElementById('btn-sortear').disabled = todosOsJogadores.length < 2; // Habilita se tiver 2 ou mais
    }
}

function exibirJogadores() {
    const listaDiv = document.getElementById('lista-jogadores');
    listaDiv.innerHTML = ''; // Limpa antes de reconstruir

    if (todosOsJogadores.length === 0) {
        listaDiv.innerHTML = 'Nenhum jogador adicionado.';
        return;
    }
    
    // Cria um "chip" para cada nome
    todosOsJogadores.forEach(nome => {
        listaDiv.innerHTML += `<span class="tag-jogador">${nome}</span>`;
    });
}

// 4. Função Principal do Jogo

function sortear() {
    // 1. Verifica se precisa resetar o loop (todos já foram sorteados)
    if (jogadoresRestantes.length === 0) {
        // Reinicia a lista de restantes com todos os jogadores
        jogadoresRestantes = [...todosOsJogadores]; 
        console.log("Todos jogaram! Lista de sorteio resetada.");
    }

    // 2. Sorteia o Jogador
    const indiceJogador = Math.floor(Math.random() * jogadoresRestantes.length);
    const jogadorSorteado = jogadoresRestantes[indiceJogador];
    
    // Remove o jogador da lista de restantes (GARANTE A NÃO REPETIÇÃO)
    jogadoresRestantes.splice(indiceJogador, 1); 

    // 3. Sorteia a Tarefa
    const indiceTarefa = Math.floor(Math.random() * tarefas.length);
    const tarefaSorteada = tarefas[indiceTarefa];

    // 4. Exibe o Resultado
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = `
        <h3>🎉 JOGADOR SORTEADO: ${jogadorSorteado} 🎉</h3>
        <p><strong>TAREFA/PRENDA:</strong> ${tarefaSorteada}</p>
        <p>Restam ${jogadoresRestantes.length} jogadores para o próximo loop.</p>
    `;

    // Lógica para o "Pule Sua Vez" (se a tarefa for essa, o jogador sorteia de novo)
    if (tarefaSorteada.includes("Pule sua vez")) {
        console.log("Tarefa 'Pule sua vez' ativada! Jogador sorteia novamente.");
        // O jogador sorteia novamente APÓS o resultado, então a próxima rodada será dele.
        // Não precisamos fazer nada aqui além de mostrar o resultado, 
        // pois o botão de sorteio ainda está disponível.
        // Poderíamos adicionar uma mensagem de destaque na tela.
    }
}

// Chama a função inicial para garantir que o display está correto ao carregar
document.addEventListener('DOMContentLoaded', exibirJogadores);