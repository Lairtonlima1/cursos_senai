// Funções básicas de cálculo (boas, não precisam de alteração)
function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  // Melhoria: Tratamento de erro para divisão por zero
  if (b === 0) {
    return 'Erro: Divisão por zero!';
  }
  return a / b;
}

// 1. Seleciona os elementos do HTML usando os IDs corretos
const form = document.getElementById('calculadoraForm');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operacaoSelect = document.getElementById('operacao');
const resultadoElement = document.getElementById('resultado');

// 2. Adiciona um "ouvinte" para o envio do formulário
// Essa é a maneira correta de ligar o JS ao HTML moderno
form.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao clicar em "Calcular"
    event.preventDefault(); 
    
    // Converte os valores para números (Float para decimais)
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operacao = operacaoSelect.value;
    
    let resultado = 0;

    // A lógica 'switch' do seu código JS, adaptada para o <select>
    switch (operacao) {
        case 'somar':
            resultado = soma(num1, num2);
            break;
        case 'subtrair':
            resultado = subtrai(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplica(num1, num2);
            break;
        case 'dividir':
            // Chama a função 'divide' que já tem a validação de zero
            resultado = divide(num1, num2);
            break;
        default:
            resultado = 'Erro: Operação inválida.';
    }

    // Exibe o resultado final
    resultadoElement.textContent = `Resultado: ${resultado}`;
});