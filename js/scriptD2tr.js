const dialogoMecanico = {
    interlocutores: document.getElementsByClassName("interlocMec2"),
    textos: document.getElementsByClassName("dialogoMec2")
}
const dilema2 = (document.getElementsByClassName("interlocsD2"))(document.getElementsByClassName("textosD2"))
(geraConseq(
    {
        texto: '-QUANTIDADE DE NAVES ENTRANDO MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-',
        trilha: -1
    },
    {
        texto: '-QUANTIDADE DE DESTROÇOS EM ORBITA MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-',
        trilha: 1
    }
))

const dia2 = (trilha) => {
    const monologoSistema = {
        interlocutores: document.getElementsByClassName("interlocSis2"),
        textos: document.getElementsByClassName("monoSisD2")
    }  

    
    escreveDialogo(monologoSistema.interlocutores, monologoSistema.textos)
}