let codigoInput = document.querySelector("#codigoInput");
let buscarBtn = document.querySelector("#buscarBtn");
let resultadoOutput = document.querySelector("#resultado");

buscarBtn.onclick = function() {
    let codigo = codigoInput.value;

    if (codigo === "001") {
        resultadoOutput.textContent = "Parafuso";
    } else if (codigo === "002") {
        resultadoOutput.textContent = "Porca";
    } else if (codigo === "003") {
        resultadoOutput.textContent = "Prego";
    } else {
        resultadoOutput.textContent = "Diversos";
    }
};
