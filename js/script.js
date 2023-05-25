function calcularIdade() {
    const hoje = new Date()
    const nasc = new Date(document.getElementById("datanasc").value)
    let anosCompletos = hoje.getFullYear() - nasc.getFullYear()
    const mes = hoje.getMonth() - nasc.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        anosCompletos--
    }
    let resposta = "Sua idade é " + anosCompletos + " anos"
    console.log(resposta)
    document.getElementById("suaidade").innerText = resposta
}