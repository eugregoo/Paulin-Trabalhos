let valor1Input = document.querySelector("#valor1");
let valor2Input = document.querySelector("#valor2");
let valor3Input = document.querySelector("#valor3");
let valor4Input = document.querySelector("#valor4");
let calcularBtn = document.querySelector("#calcularBtn");
let resultadoOutput = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let valor1 = parseFloat(valor1Input.value);
    let valor2 = parseFloat(valor2Input.value);
    let valor3 = parseFloat(valor3Input.value);
    let valor4 = parseFloat(valor4Input.value);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
        resultadoOutput.textContent = "Valores";
    } else {
        let menorValor = valor1; //primeiro valor como o menor inicialmente

        if (valor2 < menorValor) {
            menorValor = valor2;
        }
        if (valor3 < menorValor) {
            menorValor = valor3;
        }
        if (valor4 < menorValor) {
            menorValor = valor4;
        }

        resultadoOutput.textContent = "O menor valor: " + menorValor;
    }
};
