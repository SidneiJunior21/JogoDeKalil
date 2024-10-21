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
    
    areaT.scrollTop = 0
    areaT.innerHTML = dialogo[parte].innerHTML

    bot3.onclick = () => escreveDialogo(dialogo, parte + 1)
    bot4.onclick = parte === 0 ? null : () => escreveDialogo(dialogo, parte - 1)
}

const passaTarefas = (penalidade, tarefas, nT = 0) => {
   const areaT = document.getElementById("transcT")
   const textoMonitor = document.getElementById("monitorT")
   const bot1 = document.getElementById("bot1")
   const bot2 = document.getElementById("bot2")
   
   if (nT < tarefas.length-1) {
        areaT.scrollTop = 0
        areaT.innerHTML = tarefas[nT].texto
        textoMonitor.innerHTML = 'SISTEMA'

        const processaClique = (resposta) => {
            areaT.innerHTML = resposta === 1 ? '-ACESSO PERMITIDO-' : '-ACESSO NEGADO-'
            AS();
            resposta === 1 ? b1A() : b2A()
            resposta === 1 ? esc() : canh()
            
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
    else {
        areaT.scrollTop = 0
        areaT.innerHTML = tarefas[nT]
        AS(); b1D(); b2D()
        return
    }
}

/*
    estrutura do dilema:
        - interlocutor(es) (varia)
        - texto(s) (varia)
        - decisão (Herege - negativo, ou Dogmático - positivo)
*/
const geraConseq = (abrir, matar) => {
    const consequência = {
        abrir: {
            texto: abrir.texto,
            trilha: abrir.trilha
        },
        matar: {
            texto: matar.texto,
            trilha: matar.trilha
        }
    }
    return {...consequência}
}
const geraDilema = (...interlocutores) => (...textos) => (conseq) => {
    const dilema = {
        interlocutores: interlocutores,
        textos: textos,
        conseq: {
            abrir: {
                texto: conseq.abrir.texto,
                trilha: conseq.abrir.trilha
            },
            matar: {
                texto: conseq.matar.texto,
                trilha: conseq.matar.trilha
            }
        }
    }
    return {...dilema}
}

const apresentaDilema = (numD) => (dilema, trilha, i = 0) => {
    const areaT = document.getElementById("transcT")
    const monitorT = document.getElementById("monitorT")
    const bot1 = document.getElementById("bot1")
    const bot2 = document.getElementById("bot2")
    const bot3 = document.getElementById("bot3")
    const bot4 = document.getElementById("bot4")

    const processaDecisao = (escolha) => {
        //exibe diálogo correspondente à decisão
        monitorT.innerHTML = 'SISTEMA'
        areaT.innerHTML = escolha === 'abrir' ? dilema.conseq.abrir.texto : dilema.conseq.matar.texto
        escolha === 'abrir' ? b2A() : b1A()
        escolha === 'abrir' ? esc() : canh()
        //guarda decisão
        const passo = escolha === 'abrir' ? dilema.conseq.abrir.trilha : dilema.conseq.matar.trilha
        const trilhaAtt = [...trilha]
        trilhaAtt[numD] = passo
        //chama próx dia passando escolhasAtt
    }

    if (i === 0) {
        monitorT.innerHTML = 'SISTEMA'
        areaT.innerHTML = '-TRANSMISSÃO EM ANDAMENTO-'

        espera(() => {
            monitorT.innerHTML = dilema.interlocutores[i]
            areaT.innerHTML = dilema.textos[i]
            b1A(); b2A();

            bot3.onclick = i === dilema.interlocutores.length-1 ? null : () => apresentaDilema(dilema, i+1)
            bot4.onclick = null
            bot1.onclick = () => processaDecisao('abrir')
            bot2.onclick = () => processaDecisao('matar')
        })
    } else {
        monitorT.innerHTML = dilema.interlocutores[i]
        areaT.innerHTML = dilema.textos[i]
        b1A(); b2A();

        bot3.onclick = i === dilema.interlocutores.length-1 ? null : () => apresentaDilema(dilema, i+1)
        bot4.onclick = () => apresentaDilema(dilema, i-1)
        bot1.onclick = () => processaDecisao('abrir')
        bot1.onclick = () => processaDecisao('matar')
    }
    
}