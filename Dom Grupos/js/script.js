const groupForm = document.getElementById("groupForm");
const groupTable = document.getElementById("groupTable");
const groupButton = document.getElementById("groupSave");

groupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const groupName = document.getElementById("groupName").value;
    const groupLeader = document.getElementById("groupLeader").value;
    const groupMembers = document.getElementById("groupMembers").value;

    if (groupButton.textContent == "Salvar Alterações") {
        if (event.submitter.textContent != "Cancelar"){
        const row = document.getElementById("groupRow").value;
        groupTable.rows[row].cells[0].textContent = groupName;
        groupTable.rows[row].cells[1].textContent = groupLeader;
        groupTable.rows[row].cells[2].textContent = groupMembers;
        }
        groupButton.textContent = "Cadastrar Grupo";
        document.getElementById("groupCancel").remove();

        document.getElementById("groupRow").value = "";
        groupForm.reset();
        return;
    }

    const newRow = document.createElement("tr");

    const tdName = document.createElement("td");
    const tdLeader = document.createElement("td");
    const tdMembers = document.createElement("td");

    tdName.appendChild(document.createTextNode(groupName));
    tdLeader.appendChild(document.createTextNode(groupLeader));
    tdMembers.appendChild(document.createTextNode(groupMembers));

    newRow.appendChild(tdName);
    newRow.appendChild(tdLeader);
    newRow.appendChild(tdMembers);

    const tdAction = document.createElement("td");

    const btEdit = document.createElement("button")
    btEdit.textContent = "Editar";
    btEdit.addEventListener("click", function () {
        const row = this.closest("tr").rowIndex;
        const groupName = groupTable.rows[row].cells[0].textContent;
        const groupLeader = groupTable.rows[row].cells[1].textContent;
        const groupMembers = groupTable.rows[row].cells[2].textContent;

        document.getElementById("groupName").value = groupName;
        document.getElementById("groupLeader").value = groupLeader;
        document.getElementById("groupMembers").value = groupMembers;

        if (document.getElementById("groupRow").value == "") {
            const btCancel = document.createElement("button")
            btCancel.textContent = "Cancelar";
            btCancel.id = "groupCancel";
            groupForm.appendChild(btCancel);
        }

        document.getElementById("groupRow").value = row;
        groupButton.textContent = "Salvar Alterações";
    })
    
    const btDelete = document.createElement("button")
    btDelete.textContent = "Remover";
    btDelete.addEventListener("click", function () {
        if (confirm("Confirma a exclusão do cadastro deste Grupo?")) {
            groupTable.deleteRow(this.closest("tr").rowIndex);
        }
    });

    tdAction.appendChild(btEdit);
    tdAction.appendChild(btDelete);

    newRow.appendChild(tdAction);

    groupTable.appendChild(newRow);

    groupForm.reset();
})
