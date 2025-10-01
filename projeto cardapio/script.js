// Dados simulados do cardápio
const menu = [
    { nome: 'Pizza Margherita', preco: 30.00, descricao: 'Molho de tomate, mussarela e manjericão.' },
    { nome: 'Hambúrguer Clássico', preco: 25.00, descricao: 'Carne, queijo, alface e tomate.' },
    { nome: 'Salada Caesar', preco: 20.00, descricao: 'Alface, frango, croutons e molho.' },
    { nome: 'Suco de Laranja', preco: 8.00, descricao: 'Natural e fresco.' }
];

// Usuários simulados
const users = {
    'teste': 'teste',
    'cliente2': 'abc456'
};

// Array para armazenar pedidos
let order = [];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (users[username] && users[username] === password) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('menu-section').style.display = 'block';
        displayMenu();
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos!';
    }
}

function displayMenu() {
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';

    menu.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <div>
                <strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)}<br>
                ${item.descricao}
            </div>
            <button onclick="addToOrder(${index})">Adicionar ao Pedido</button>
        `;
        menuItems.appendChild(div);
    });
}

function addToOrder(index) {
    order.push(menu[index]);
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    const orderSummary = document.getElementById('order-summary');

    orderItems.innerHTML = '';
    let total = 0;

    order.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('order-item');
        div.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        orderItems.appendChild(div);
        total += item.preco;
    });

    orderTotal.textContent = `R$ ${total.toFixed(2)}`;
    orderSummary.style.display = order.length > 0 ? 'block' : 'none';
}

function clearOrder() {
    order = [];
    updateOrderSummary();
}

function logout() {
    document.getElementById('menu-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').textContent = '';
    order = []; // Limpa o pedido ao sair
    updateOrderSummary();
}
// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
	<h2>Lista de Compras</h2>
    <button id="dv-sub-item" class="btn btn-accent"
		> - </button>
    <input type="number" id="dv-items-count" value="0" 
		readonly class="textbox" />
    <button id="dv-add-item" class="btn btn-accent"
		> + </button>
    <p id="dv-message">
		</p>
</div>
`)
