function verificarPrematricula() {

    //Calcular idade

    const hoje = new Date()
    const nasc = new Date(document.getElementById('datanasc').value)
    let anosCompletos = hoje.getFullYear() - nasc.getFullYear()
    const mes = hoje.getMonth() - nasc.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        anosCompletos--
    }

    //Calcular renda per capita

    let rendaTotal = parseFloat(document.getElementById('renda').value)
    let quantMoradores = parseFloat(document.getElementById('moradores').value)
    if (quantMoradores <= 0) {
        mensagem = 'Dados inválidos'
        document.getElementById('resposta').innerHTML = mensagem
        return
    }
    let perCapita = (parseFloat(rendaTotal / quantMoradores)).toFixed(2)

    //Verificar critérios

    if (anosCompletos >= 16 && perCapita <= 1.5 * 1320) {
        mensagem = 'Pré-matrícula aprovada, favor entrar em contato através do número (62) 3333-3333'
        document.getElementById('resposta').innerHTML = mensagem
    }
    else {
        mensagem = 'Você não atende aos critérios do Programa SENAC de Gratuidade'
        document.getElementById('resposta').innerHTML = mensagem
    }
}