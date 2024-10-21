const esperaFunc = (func, ...args) => {
    new Promise((resolve) => {
        func(...args) == 0 ? resolve() : null
    })
}
const escreveDialogo = (interlocutores, dialogo, parte = 0) => {
    const bot3 = document.getElementById("bot3")
    const bot4 = document.getElementById("bot4")
    const areaT = document.getElementById("transcT")
    const monitorT = document.getElementById("monitorT")

    if (parte === dialogo.length) {
        // Remove os ouvintes de eventos ao chegar no final do diálogo
        bot3.onclick = null
        bot4.onclick = null
        return 0
    }
    else {
        monitorT.innerHTML = interlocutores[parte].innerHTML
        areaT.scrollTop = 0
        areaT.innerHTML = dialogo[parte].innerHTML

        bot3.onclick = () => escreveDialogo(interlocutores, dialogo, parte + 1)
        bot4.onclick = parte === 0 ? null : () => escreveDialogo(interlocutores, dialogo, parte - 1)
    }
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

const fDia = (dia, trilha) => {
    fadeout();
    espera(cDia(dia+1)(trilha))
}

const dia2Chamado = new Event('dia2Chamado')
const dia3Chamado = new Event('dia3Chamado')
const dia4Chamado = new Event('dia4Chamado')

const cDia = (dia) => (trilha) => {
    espera(() => fadein())
    espera(() => {
        document.getElementById('Tdia').innerHTML = `'${dia}'`;
        dia === 2 ? dia2(trilha)
        : dia === 3 ? dia3(trilha)
        : dia4(trilha)
    })
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
const geraDilema = (interlocutores) => (textos) => (conseq) => {
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

    const processaDecisao = (escolha) => {
        //trava botões (impede mudança de decisão ou spam)
        bot1.onclick = null;
        bot2.onclick = null;
        //exibe diálogo correspondente à decisão
        monitorT.innerHTML = 'SISTEMA'
        areaT.scrollTop = 0;
        areaT.innerHTML = escolha === 'abrir' ? dilema.conseq.abrir.texto : dilema.conseq.matar.texto;
        escolha === 'abrir' ? b2A() : b1A();
        escolha === 'abrir' ? esc() : canh();
        //guarda decisão
        const passo = escolha === 'abrir' ? dilema.conseq.abrir.trilha : dilema.conseq.matar.trilha
        const trilhaAtt = [...trilha]
        trilhaAtt[numD] = passo
        //chama próx dia passando escolhasAtt
        espera5(() => fdia1())
    }
    areaT.innerHTML = '-TRANSMISSÃO EM ANDAMENTO-'
    monitorT.innerHTML = 'SISTEMA'
    bot1.onclick = () => processaDecisao('abrir');
    bot2.onclick = () => processaDecisao('matar');
    espera(() => {
        b1A(); b2A();
        escreveDialogo(dilema.interlocutores, dilema.textos, i);
    })
    
}