// Funções que guiam a introdução
const dialogoIntro = document.getElementsByClassName("intro")
const interlocIntro = document.getElementsByClassName("interlocIntro")

const dialogoTut = document.getElementsByClassName("tut")
const interlocTut = document.getElementsByClassName("interlocTut")
const continuar = document.getElementsByClassName("botcontinuar")

const tutorial = () => {
    const areaT = document.getElementById("transcT")
    const monitorT = document.getElementById("monitorT")
    const bot1 = document.getElementById("bot1")
    const bot2 = document.getElementById("bot2")

    areaT.scrollTop = 0
    areaT.innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 20 NAVES, TODOS TENDO ASSINATURAS DE GALEÕES DA CASA VON VELANCIUS, LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO IGUAL AO DO REGULAMENTO IMPERIAL, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 70 MIL PESSOAS NA NAVE, PASSAGEM PRIORITÁRIA IDENTIFICADA-';
    monitorT.innerHTML = "SISTEMA"
    b1A(); b2A();

    bot1.onclick = () => {AS(); b1A(); esc(); areaT.innerHTML = '-ACESSO LIBERADO. ANALISE AS PROXIMAS SOLICITAÇÕES-'; espera(() => passaTarefas(marcaX, tarefasD1))}
    bot2.onclick = () => {AS(); b2A(); areaT.innerHTML = '-ORDEM DE DISPARO NEGADA, PASSAGEM PROPRITÁRIA IDENTIFICADA, PERMITA A ENTRADA-'; espera(() => tutorial())}

}

escreveDialogo(interlocIntro, dialogoIntro)
    .then()


//dilema do dia
const trilha = [0, 0, 0, 0]

const dilema1 = geraDilema(document.getElementsByClassName("interlocsD1"))(document.getElementsByClassName("textosD1"))
(geraConseq(
    {
        texto: '-OBRIGAÇÕES DIÁRIAS CONCLUÍDAS, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ. SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-', 
        trilha: -1
    },
    {
        texto: '-QUANTIDADE DE DESTROÇOS EM ORBITA MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ. SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-', 
        trilha: 1
    }
))

//função para puxar próximo dia 
const fdia1 = () => {
    fadeout();
    espera(cdia2())
}