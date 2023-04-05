function sumar(){
    const foorma = document.getElementById('forma');
    let operandoA = foorma['operandoA'];
    let operandoB = foorma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    document.getElementById('resultado').innerHTML = 'Resultado de la suma: ' + resultado;
}

function resta(){
    const foorma = document.getElementById('forma');
    let operandoA = foorma['operandoA'];
    let operandoB = foorma['operandoB'];
    let resultado_r = parseInt(operandoA.value) - parseInt(operandoB.value);
    document.getElementById('resultado_resta').innerHTML = 'Resultado de la resta: ' + resultado_r; 
}

function mult(){
    const foorma = document.getElementById('forma');
    let operandoA = foorma['operandoA'];
    let operandoB = foorma['operandoB'];
    let resultado_m = parseInt(operandoA.value) * parseInt(operandoB.value);
    document.getElementById('resultado_m').innerHTML = 'Resultado de la multiplicación: ' + resultado_m;
}

function division(){
    const foorma = document.getElementById('forma');
    let operandoA = foorma['operandoA'];
    let operandoB = foorma['operandoB'];
    let resultado_d = parseInt(operandoA.value) / parseInt(operandoB.value);
    document.getElementById('resultado_d').innerHTML = 'Resultado de la división: ' + resultado_d;
}