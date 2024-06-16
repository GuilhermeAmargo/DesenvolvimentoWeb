const Botao = document.querySelector('#Enviar');

Botao.addEventListener("click", (evento) => {
    evento.preventDefault();

    const User = document.getElementById('User').value;
    const Senha = document.querySelector('#Senha').value;

    if ((User === '12345678900' || User === 'usuario@email.com') && Senha === 'senha123') {
        window.location.href = 'pagina_nova.html';
    } else {
        alert('CPF/Email ou senha incorretos. Por favor, tente novamente.');
    }
});
