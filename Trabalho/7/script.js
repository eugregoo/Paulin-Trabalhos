let numeroInput = document.querySelector("#numeroInput");
let verificarBtn = document.querySelector("#verificarBtn");
let resultadoOutput = document.querySelector("#resultado");

verificarBtn.onclick = function() {
    let numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        resultadoOutput.textContent = "valor";
    } else {
        if (numero % 2 !== 0) {
            resultadoOutput.textContent = "O número " + numero + " é ímpar.";
        } else {
            resultadoOutput.textContent = "O número " + numero + " não é ímpar.";
        }
    }
};
