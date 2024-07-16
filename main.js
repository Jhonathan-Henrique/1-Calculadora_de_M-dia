const form = document.getElementById('formulario')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanRerovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima:"))

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    atividades.push(nomeAtividade.value)
    notas.push(parseFloat(notaAtividade.value))

    let linha = '<tr>';
    linha += `<td>${nomeAtividade.value}</td>`
    linha += `<td>${notaAtividade.value}</td>`
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha
    notaAtividade.value = ''
    nomeAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal (){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanRerovado

}

function calculaMediaFinal() {
    let somaDasNotas = 0
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}