const escreveTransc = () => {

}

const tarefas = [{texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 7 NAVES, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO ENTRE 3,5 E 2 KM, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 50 MIL PESSOAS NA NAVE-', resposta: 2}]
const passaTarefa = (tarefas, penaliza, nT = 0) => {
   const areaT = document.getElementById("transcT")
   const bot1 = document.getElementById("bot1")
   const bot2 = document.getElementById("bot2")
   
   if (nT <= tarefas.length) {

    areaT.innerHTML = tarefas[nT].texto

    const processaClique = (resposta) => {
        if (resposta === tarefas[nT].resposta) {
            passaTarefa(tarefas, nT+1)
        }
        else {
            penaliza();
            passaTarefa(tarefas, nT+1)
        }
    }

    bot1.onclick = processaClique(1)
    bot2.onclick = processaClique(2)
    }
}
passaTarefa(tarefas, marcaX)

const exibeDilema = () => {

}