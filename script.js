const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
{
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera textos e imagens. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre o tema. No fim de uma aula ela pede que você faça uma pesquisa sobre o uso da IA na história. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que você entenda.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi discutido o futuro do trabalho com a IA. Como você se posiciona?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, a professora pediu para que cada aluno criasse uma imagem no computador que representasse o que pensam sobre o futuro da IA. O que você faz?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA para expressar as ideias de forma rápida e visual.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Usar um programa de desenho tradicional ou fazer um esboço à mão para expressar a sua criatividade sem ajuda da IA.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de Biologia para entregar na próxima semana, o andamento do trabalho está um pouco atrasado e um membro do grupo decidiu usar a IA para fazer a pesquisa. Como você reage?",
        alternativas: [
            {
                texto: "Aceitar o texto gerado pela IA, mas revisar e verificar se as informações estão corretas antes de entregar.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Achar que utilizar a IA para um trabalho escolar não é ético e preferir refazer a pesquisa manualmente usando livros e sites confiáveis.",
                afirmacao: "afirmacao"
            }
        ]
    }
];
]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
if(atual >= perguntas.length){
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas){
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada){
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}

function mostraResultado(){
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();