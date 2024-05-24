let valor1Input = document.querySelector("#valor1");
let valor2Input = document.querySelector("#valor2");
let calcularBtn = document.querySelector("#calcularBtn");
let resultadoOutput = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let valor1 = parseFloat(valor1Input.value);
    let valor2 = parseFloat(valor2Input.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoOutput.textContent = "valores.";
    } else {
        if (valor1 > valor2) {
            resultadoOutput.textContent = " maior valor : " + valor1;
        } else if (valor2 > valor1) {
            resultadoOutput.textContent = " maior valor : " + valor2;
        } else {
            resultadoOutput.textContent = "Os valores são iguais.";
        }
    }
};
