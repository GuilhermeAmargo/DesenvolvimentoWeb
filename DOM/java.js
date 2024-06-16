var n = 0;

function add() {
    n++;
    var ntabela = document.createElement("table");
    var linha1 = document.createElement("tr");
    linha1.id = "linha-" + n;
    var l1col1 = document.createElement("td");
    var l1col2 = document.createElement("td");
    var l1col3 = document.createElement("td");

    // Criação dos botões de Editar e Deletar
    var del = document.createElement("button");
    del.addEventListener("click", function () { deletar(linha1.id); });
    del.textContent = "Deletar";

    var edit = document.createElement("button");
    edit.addEventListener("click", function () { editar(linha1.id); });
    edit.textContent = "Editar";

    // Criação das células da tabela
    var cel11 = document.createTextNode(document.getElementById("bot1").value);
    var cel12 = document.createTextNode(document.getElementById("bot2").value);
    var cel13 = document.createTextNode(document.getElementById("bot3").value);

    l1col1.appendChild(cel11);
    l1col2.appendChild(cel12);
    l1col3.appendChild(cel13);

    linha1.appendChild(l1col1);
    linha1.appendChild(l1col2);
    linha1.appendChild(l1col3);

    ntabela.appendChild(linha1);

    l1col1.style.border = "1px solid #000";
    l1col2.style.border = "1px solid #000";
    l1col3.style.border = "1px solid #000";
    ntabela.style.border = "1px solid #000";

    // Adicionar botões à linha da tabela
    linha1.appendChild(edit);
    linha1.appendChild(del);

    document.body.appendChild(ntabela);
}

function editar(id) {
    var linha = document.getElementById(id);
    var celulas = linha.getElementsByTagName("td");

    var novoValor1 = prompt("Insira o novo valor para a primeira célula:");
    var novoValor2 = prompt("Insira o novo valor para a segunda célula:");
    var novoValor3 = prompt("Insira o novo valor para a terceira célula:");

    celulas[0].textContent = novoValor1;
    celulas[1].textContent = novoValor2;
    celulas[2].textContent = novoValor3;
}

function deletar(id) {
    var linha = document.getElementById(id);
    linha.remove();
}
