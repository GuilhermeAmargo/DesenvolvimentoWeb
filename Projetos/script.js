var elementos = document.getElementsByClassName("main");

function mat() {
    if (elementos.length > 0)
        elementos[0].innerHTML = '';

    var novoIframe = document.createElement('iframe');

    novoIframe.src = 'Matematica/matematica.html';
    novoIframe.name = 'iframeGame';
    novoIframe.classList.add('iframe');

    elementos[0].appendChild(novoIframe);
}

function inss() {
    if (elementos.length > 0)
        elementos[0].innerHTML = '';

    var novoIframe = document.createElement('iframe');

    novoIframe.src = 'INSS/inss.html';
    novoIframe.name = 'iframeGame';
    novoIframe.classList.add('iframe');

    elementos[0].appendChild(novoIframe);
}

function createIframe() {
    if (elementos.length > 0)
        elementos[0].innerHTML = '';

    var novoIframe = document.createElement('iframe');
    novoIframe.src = 'Simulation/simu.html';
    novoIframe.name = 'iframeSimu';
    novoIframe.classList.add('iframe');

    elementos[0].appendChild(novoIframe);
}
