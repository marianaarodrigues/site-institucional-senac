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
    let media = ((n1 + n2 + n3) / 3).toFixed(2)

    return media
}

function calcularPresenca() {
    let d1 = document.querySelector('input[name="dia1"]:checked').value;
    let d2 = document.querySelector('input[name="dia2"]:checked').value;
    let d3 = document.querySelector('input[name="dia3"]:checked').value;
    let d4 = document.querySelector('input[name="dia4"]:checked').value;
    let d5 = document.querySelector('input[name="dia5"]:checked').value;
    let d6 = document.querySelector('input[name="dia6"]:checked').value;
    let d7 = document.querySelector('input[name="dia7"]:checked').value;
    let d8 = document.querySelector('input[name="dia8"]:checked').value;
    let d9 = document.querySelector('input[name="dia9"]:checked').value;
    let d10 = document.querySelector('input[name="dia10"]:checked').value;
    let d11 = document.querySelector('input[name="dia11"]:checked').value;
    let d12 = document.querySelector('input[name="dia12"]:checked').value;

    let presenca = (d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12) / 12

    return presenca
}

function verificarAprovacao() {

    let vlmedia = calcularMedia()
    let vlpresenca = calcularPresenca()

    if (vlmedia >= 6.0 && vlpresenca >= 0.75) {
        document.getElementById('resposta').innerHTML = 'Estudante aprovada(o).'
    }
    else {
        document.getElementById('resposta').innerHTML = 'Estudante reprovada(o).'
    }
}