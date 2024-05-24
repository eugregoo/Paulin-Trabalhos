let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");
let num3Input = document.querySelector("#num3");
let calcularBtn = document.querySelector("#calcularBtn");
let mediaAritmeticaOutput = document.querySelector("#mediaAritmetica");
let mediaPonderadaOutput = document.querySelector("#mediaPonderada");
let somaMediasOutput = document.querySelector("#somaMedias");
let mediaDasMediasOutput = document.querySelector("#mediaDasMedias");

calcularBtn.onclick = function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let num3 = parseFloat(num3Input.value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        mediaAritmeticaOutput.textContent = "valor.";
        mediaPonderadaOutput.textContent = "";
        somaMediasOutput.textContent = "";
        mediaDasMediasOutput.textContent = "";
        return;
    }

    let mediaAritmetica = (num1 + num2 + num3) / 3;
    mediaAritmeticaOutput.textContent = "Média Aritmética: " + mediaAritmetica.toFixed(2);

    let mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5) / (3 + 2 + 5);
    mediaPonderadaOutput.textContent = "Média Ponderada: " + mediaPonderada.toFixed(2);

    let somaMedias = mediaAritmetica + mediaPonderada;
    somaMediasOutput.textContent = "Soma das Médias: " + somaMedias.toFixed(2);

    let mediaDasMedias = (mediaAritmetica + mediaPonderada) / 2;
    mediaDasMediasOutput.textContent = "Média das Médias: " + mediaDasMedias.toFixed(2);
};
