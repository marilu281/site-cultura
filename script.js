const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1)Qual desses países é conhecido por suas festividades de Carnaval?",
        alternativas: [
            {
            texto: "a) Itália",
            afirmacao: "1) Incorreto."
            },
            {
            texto:"b) Brasil",
            afirmacao: "1) Correto."
            }
    ]
    },

    {
        enunciado: "2) Qual desses escritores é famoso por suas obras sobre a Revolução Russa?",
        alternativas: [
            {
            texto:"a) Leon Tolstói",
            afirmacao: "2) Incorreto."
            },
            {
            texto: "b) George Orwell",
            afirmacao: "2) Correto."
            }
        ]
           
    },
    {
        enunciado: "3) Qual desses alimentos é tradicional na culinária italiana?",
        alternativas: [
            {
            texto:"a) Sushi",
            afirmacao: "3) Incorreto."
        },
         {   
            texto: "b) Pizza",
            afirmacao: "3) Correto."
         }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
    caixaAternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Conhecer culturas enriquece nossa perspectiva e promove empatia. Através da diversidade, construímos pontes e entendemos melhor o mundo e as pessoas ao nosso redor.  Seu Resultado :)";
        textoResultado.textContent = historiaFinal;
        caixaAternativas.textContent = "";
    }

    
    mostraPergunta();

    