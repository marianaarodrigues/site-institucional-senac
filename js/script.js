function calcularIdade() {

    const hoje = new Date()
    const nasc = new Date(document.getElementById('datanasc').value)
    let anosCompletos = hoje.getFullYear() - nasc.getFullYear()
    const mes = hoje.getMonth() - nasc.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        anosCompletos--
    }

    return anosCompletos
}

function calcularPerCapita() {

    let rendaTotal = parseFloat(document.getElementById('renda').value)
    let quantMoradores = parseFloat(document.getElementById('moradores').value)
    if (quantMoradores <= 0) {
        mensagem = 'Dados inválidos'
        document.getElementById('resposta').innerHTML = mensagem
        return
    }
    let perCapita = (parseFloat(rendaTotal / quantMoradores)).toFixed(2)

    return perCapita
}

function verificarPrematricula() {

    let idade = calcularIdade()
    let rendapc = calcularPerCapita()

    if (idade >= 16 && rendapc <= 1.5 * 1320) {
        mensagem = 'Pré-matrícula aprovada, favor entrar em contato através do número (XX) XXXX-XXXX.'
        document.getElementById('resposta').innerHTML = mensagem
    }
    else {
        mensagem = 'Você não poderá se matricular, pois não atende aos critérios do Programa SENAC de Gratuidade.'
        document.getElementById('resposta').innerHTML = mensagem
    }
}

function calcularMedia() {

    let n1 = parseFloat(document.getElementById('nota1').value)
    let n2 = parseFloat(document.getElementById('nota2').value)
    let n3 = parseFloat(document.getElementById('nota3').value)
    let media = (n1 + n2 + n3) / 3

    return media
}