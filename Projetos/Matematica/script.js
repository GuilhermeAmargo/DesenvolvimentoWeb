var number =  document.getElementById('result');
var historico = document.getElementById('historico');
var numberPilha = [], opePilha = [];

function clearResult() {
    number.value = '';
    numberPilha = [];
    opePilha = [];
    historico.textContent = '';
}

function appendToResult(value) {
    number.value = number.value + value;
}

function calculateResult() {
    if(document.getElementById('infixa').checked) {
        try {
            historico.textContent = number.value;
            number.value = eval(number.value);
        } catch (error) {
            number.value = 'Erro';
            console.error('Erro ao avaliar a expressão:', error);
        }
    }

    if(document.getElementById('posfixa').checked) {
        try {
            let result = "";

            for(let j = 0; j < numberPilha.length; j++) 
                historico.textContent += numberPilha[j];   
            
            for(let k = 0; k < numberPilha.length - 1; k++) 
                historico.textContent += opePilha[k]; 

            for(let i = 0; i < numberPilha.length; i++) {
                result += numberPilha[i];
                if(i < (numberPilha.length-1))
                    result += opePilha[i];
            }
                
            number.value = eval(result);
            numberPilha = [];
            opePilha = [];
            
        } catch (error) {
            number.value = 'Erro';
            console.error('Erro ao avaliar a expressão:', error);
        }
    }
}

function insert() {
    var operations = ['/', '*', '+', '-'];

    if(!isNaN(parseFloat(number.value)) && isFinite(number.value)) 
        numberPilha.push(number.value);

    for(let i = 0; i < operations.length; i++) {
        if(number.value == operations[i]) 
            opePilha.push(number.value);
    }

    number.value = '';
}
