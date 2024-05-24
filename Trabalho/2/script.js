let ipvalor1 = document.querySelector("#ipvalor1");
let ipquantidade = document.querySelector("#ipquantidade");
let btsomar = document.querySelector("#btsomar");
let resultado = document.querySelector("#resultado");

btsomar.onclick = function() {
    let valorPorQuilo = parseFloat(ipvalor1.value);
    let quantidade = parseFloat(ipquantidade.value);

    if (isNaN(valorPorQuilo) || isNaN(quantidade)) {
        resultado.textContent = "valores";
    } else {
        let valorFinal = valorPorQuilo * quantidade;
        resultado.textContent = "Total a ser pago: R$" + valorFinal.toFixed(2);
    }
};


