const tutorial = () => {
    const areaT = document.getElementById("transcT")
    const monitorT = document.getElementById("monitorT")
    const bot1 = document.getElementById("bot1")
    const bot2 = document.getElementById("bot2")

    areaT.innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 20 NAVES, TODOS TENDO ASSINATURAS DE GALEÕES DA CASA VON VELANCIUS, LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO IGUAL AO DO REGULAMENTO IMPERIAL, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 70 MIL PESSOAS NA NAVE, PASSAGEM PRIORITÁRIA IDENTIFICADA-';
    monitorT.innerHTML = "SISTEMA"
    b1A(); b2A();

    bot1.onclick = () => {AS(); b1A(); areaT.innerHTML = '-ACESSO LIBERADO-'; espera(() => passaTarefas(marcaX, tarefasD1))}
    bot2.onclick = () => {AS(); b2A(); areaT.innerHTML = '-ORDEM DE DISPARO NEGADA, PASSAGEM PROPRITÁRIA IDENTIFICADA, PERMITA A ENTRADA-'; espera(() => tutorial())}

}

const escreveDialogo = (dialogo, parte = 0) => {
    const bot3 = document.getElementById("bot3")
    const bot4 = document.getElementById("bot4")
    const areaT = document.getElementById("transcT")

    if (parte === dialogo.length) {
        // Remove os ouvintes de eventos ao chegar no final do diálogo
        bot3.onclick = null
        bot4.onclick = null
        return
    }

    areaT.innerHTML = dialogo[parte].innerHTML

    bot3.onclick = () => escreveDialogo(dialogo, parte + 1)
    bot4.onclick = parte === 0 ? null : () => escreveDialogo(dialogo, parte - 1)
}

const passaTarefas = (penalidade, tarefas, nT = 0) => {
   const areaT = document.getElementById("transcT")
   const textoMonitor = document.getElementById("monitorT")
   const bot1 = document.getElementById("bot1")
   const bot2 = document.getElementById("bot2")
   
   if (nT < tarefas.length) {
        areaT.innerHTML = tarefas[nT].texto
        textoMonitor.innerHTML = 'SISTEMA'

        const processaClique = (resposta) => {
            areaT.innerHTML = resposta === 1 ? '-ACESSO PERMITIDO-' : '-ACESSO NEGADO-'
            AS();
            resposta === 1 ? b1A() : b2A()
            resposta === 1 ? null : canh()
            
            if (resposta === tarefas[nT].resposta) {
                espera(() => passaTarefas(penalidade, tarefas, nT+1))
            }
            else {
                penalidade();
                espera(() => passaTarefas(penalidade, tarefas, nT+1))
            }
        }

        bot1.onclick = () => processaClique(1)
        bot2.onclick = () => processaClique(2)
    }
    else {Dbot(bot1, bot2); b1D(); b2D(); return}
}