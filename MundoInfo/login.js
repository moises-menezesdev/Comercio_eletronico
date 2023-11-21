function changeTab(tabName) {
    if (tabName === 'login') {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
    } else if (tabName === 'signup') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    }
}

function exibirMensagem(mensagem) {
    const mensagemElement = document.createElement('div');
    mensagemElement.classList.add('mensagem');
    mensagemElement.textContent = mensagem;
    document.body.appendChild(mensagemElement);

    // Limpa a mensagem após alguns segundos (opcional)
    setTimeout(() => {
        mensagemElement.remove();
    }, 5000); // 5000 milissegundos = 5 segundos
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Exibe a mensagem de login realizado
    exibirMensagem('Login realizado com sucesso!');
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Exibe a mensagem de cadastro realizado
    exibirMensagem('Cadastro realizado com sucesso!');
});

const voltarBtn = document.getElementById('voltarBtn');

if (voltarBtn) {
    voltarBtn.addEventListener('click', function () {
        // Redirecione para a página principal
        window.location.href = 'index.html';
    });
}