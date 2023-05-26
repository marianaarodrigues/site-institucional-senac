function calcularPercapita() {

    // Cálculo da idade
    const hoje = new Date()
    const nasc = new Date(document.getElementById("datanasc").value)
    let anosCompletos = hoje.getFullYear() - nasc.getFullYear()
    const mes = hoje.getMonth() - nasc.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        anosCompletos--
    }

    // Cálculo da renda per capita

    let rendatot = parseFloat(document.getElementById('renda').value)
    let morador = parseFloat(document.getElementById('moradores').value)
    if (morador == 0) {
        resultadodiv = 'Dados inválidos'
        document.getElementById('resdivisao').innerHTML = resultadodiv
    }
    else {
        let resdiv = (parseFloat(a / b)).toFixed(2)
        result = 'Resultado: ' + resdiv
        document.getElementById('resdivisao').innerHTML = result
    }

}