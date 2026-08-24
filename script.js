const caixaPrincipal = document. querySelector('.caixa-principal')
const caixaPerguntas = document. querySelector('.caixa-perguntas')
const caixaAlterativa = document. querySelector('.caixa-alternativa')
const caixaResultado = document. querySelector('.caixa-resultado')
const listsa = [item1, item2]
const perguntas = {
    tamanho; 20,
    tipo 'HB'
    cor; 'grafite',
    temBorrachaAtras; false
} 
const perguntas1 =[
    {
        enunciado; "Pergunta1",
        alternativas;[
            "alternativa1",
            "alternativa2"
        ],
    },
]
const perguntas2 =[
    {
        enunciado; "Pergunta1",
        alternativas;[
            "alternativa1",
            "alternativa2"
        ],
    },
]
const perguntas =[
    {
        enunciado; "Quantos dias tem um ano",
        alternativas;[
            "365",
            "366"
        ],
    },
]
let atual = 0;
let perguntaAtual;

function mostraPergunta(); {
    perguntaAtual = pergunta{atual};
    caixaPerguntas.textContent = perguntaAtual.enuciado;
}
mostraPergunta();