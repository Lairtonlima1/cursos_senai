function obtenhaMensagem(valor) {
    if (valor < 0) {
        return "Número inválido";
    }
    if (valor === 0) {
        return "Você não tem nenhum item em sua lista de compras";
    }
    if (valor === 1) {
        return "Você tem 1 item em sua lista de compras";
    }
    if (valor > 1) {
        return "Você tem mais de 1 item em sua lista de compras";
    }
}

let itemsCount = document.querySelector("#dv-items-count");

function dvRenderizaMensagem() {
    let value = Number.parseInt(itemsCount.value, 10);
    // Se o valor for NaN ou vazio, assume 0
    if (isNaN(value)) {
        value = 0;
        itemsCount.value = 0;
    }
    let message = obtenhaMensagem(value);
    document.querySelector("#dv-message").textContent = message;
}

// Inicializa a mensagem ao carregar a página
dvRenderizaMensagem();

document.querySelector("#dv-add-item").addEventListener("click", () => {
    let value = Number.parseInt(itemsCount.value, 10) || 0; // Evita NaN
    itemsCount.value = value + 1;
    dvRenderizaMensagem();
});

document.querySelector("#dv-sub-item").addEventListener("click", () => {
    let value = Number.parseInt(itemsCount.value, 10) || 0; // Evita NaN
    if (value > 0) { // Evita números negativos
        itemsCount.value = value - 1;
    }
    dvRenderizaMensagem();
});