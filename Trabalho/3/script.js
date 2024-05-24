let saldoInput = document.querySelector("#saldoInput");
let calcularBtn = document.querySelector("#calcularBtn");
let resultado = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let saldo = parseFloat(saldoInput.value);

    if (isNaN(saldo)) {
        resultado.textContent = "valores";
    } else {
        let saldoReajustado = saldo * 1.01; // Reajuste de 1%
        resultado.textContent = "Saldo com reajuste: R$" + saldoReajustado.toFixed(2);
    }
};
