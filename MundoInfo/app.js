const produtos = [
    {
      id: 1,
      nome: 'Combo Gamer – 0542 Bright',
      imagem: "/images/products/product-4.1.png",
      preco:130.99,
    },
    {
      id: 2,
      nome: 'GPU NV GTX1650 VENTUS XS OC',
      imagem: '/images/products/product-5.1.png',
      preco:920.89,
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
  let cart = []
  function addToCart(id){
    const productSelected = produtos.find(produto => produto.id === id)
    if(productSelected){
      cart.push(productSelected)
    }
  
    console.log(cart)
    listarProdutosCarrinho()
  }
  function lista_prod(){
    const listaProdutos = document.getElementById("lista_prod");
  
  produtos.forEach(produto => {
      const li = document.createElement('li');
      li.dataset['id'] = produto.id
  li.innerHTML = `
  <div class="product">
              <img src="${produto.imagem}" alt="">
              <p class="product-name">${produto.nome}</p>
               <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
               <p class="product-price">${produto.preco} <span>R$</span></p>
               <button onclick="addToCart(${produto.id})" class="add-to-cart-button" onclick="addToCart('Combo Gamer – 0542 Bright', '130.00')">Adicionar ao Carrinho</button>
            </div>
  ` 
        
      listaProdutos.appendChild(li);
  });
  }
  
  
      const navbar = document.querySelector(".navbar");
      const menuButton = document.querySelector(".menu-button");
  
      menuButton.addEventListener('click', () => {
        navbar.classList.toggle("show-menu");
      });
      lista_prod()

      function listarProdutosCarrinho() {
        const cartListEl = document.querySelector(".cart-list")
        cartListEl.innerHTML = ""
        cart.forEach((item) => {
          const li = document.createElement("li")
            li.classList = "cart-item"
            li.dataset["id"] = item.id
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
            `
          cartListEl.appendChild(li)
        })
      }
      
      listarProdutosCarrinho()