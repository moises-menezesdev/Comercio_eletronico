const produtos = [
  {
    id: 1,
    nome: 'Combo Gamer – 0542 Bright',
    imagem: '/images/products/product-4.1.png',
    preco: 130.99,
  },
  {
    id: 2,
    nome: 'GPU NV GTX1650 VENTUS XS OC',
    imagem: '/images/products/product-5.1.png',
    preco: 920.89,
  },
  {
    id: 3,
    nome: 'Controle DualSense - Branco',
    imagem: '/images/products/product-6.1.png',
    preco: 389.89,
  },
  {
    id: 4,
    nome: 'Cadeira Gamer Profissional TGC12',
    imagem: '/images/products/product-7.1.png',
    preco: 1219.65,
  },
];

function FinalizarCompra() {
  // Simula a finalização da compra 
  console.log("Compra Finalizada!");

  // Calcula o total da compra
  const totalCompra = calcularTotalCarrinho();
  
  // Limpa o carrinho após a compra ser finalizada
  clearCart();
  
   // Exibe a mensagem de compra finalizada na tela, incluindo o valor total
   alert(`Compra Finalizada! Obrigado por escolher MundoTech!\nTotal: R$ ${totalCompra.toFixed(2)}`);

  // Atualiza a exibição do carrinho após a compra ser finalizada
  listarProdutosCarrinho();
}

// Adiciona um event listener ao botão "Finalizar Compra"
const finalizarCompraButton = document.querySelector('.primary-button');
finalizarCompraButton.addEventListener('click', FinalizarCompra);

// Adiciona um event listener ao elemento "Conta"
const contaElement = document.getElementById('conta');
contaElement.addEventListener('click', redirectToLogin);

// Função para redirecionar para a página de login
function redirectToLogin() {
    window.location.href = 'login.html'; // Substitua 'login.html' pelo caminho correto da sua página de login
}


let cart = [];

function addToCart(id) {
  const productSelected = produtos.find((produto) => produto.id === id);
  if (productSelected) {
    cart.push(productSelected);
  }

  console.log(cart);
  listarProdutosCarrinho();
}

function clearCart() {
  cart = []; // Limpa o carrinho
  listarProdutosCarrinho(); // Atualiza a exibição do carrinho
}

function calcularTotalCarrinho() {
  let total = 0;
  cart.forEach((item) => {
    total += item.preco;
  });
  return total;
}

function listarProdutosCarrinho() {
  const cartListEl = document.querySelector('.cart-list');
  cartListEl.innerHTML = '';

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.classList = 'cart-item';
    li.dataset['id'] = item.id;
    li.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="cart-item_content">
        <h4>${item.nome}</h4>
        <p>${item.preco}</p>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    `;

    cartListEl.appendChild(li);
  });

  const cartTotalEl = document.getElementById('cart-total');
  const total = calcularTotalCarrinho();
  cartTotalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function lista_prod() {
  const listaProdutos = document.getElementById('lista_prod');

  produtos.forEach((produto) => {
    const li = document.createElement('li');
    li.dataset['id'] = produto.id;
    li.innerHTML = `
      <div class="product">
        <img src="${produto.imagem}" alt="">
        <p class="product-name">${produto.nome}</p>
        <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
        <p class="product-price">${produto.preco} <span>R$</span></p>
        <button onclick="addToCart(${produto.id})" class="add-to-cart-button">Adicionar ao Carrinho</button>
      </div>
    `;

    listaProdutos.appendChild(li);
  });
}

const navbar = document.querySelector('.navbar');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show-menu');
});

lista_prod();

// Criação do botão "Limpar Lista" e configuração do evento de clique
const clearCartButton = document.getElementById('clear-cart-button');
clearCartButton.addEventListener('click', clearCart);