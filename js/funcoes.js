//animação para Bot1
const b1A = () => {
    const b1 = document.getElementById('b1') //identifacação do b1

    b1.onclick = b1.src = '' //combinado com o de baixo faz com q o gif resete
    b1.onclick = b1.src = './images/Botao1.gif'
}
//desativação do Bot1
const b1D = () => {
    const b1 = document.getElementById('b1') //identifacação do b1
        b1.onclick = b1.src = './images/Botao1.png' //troca o gif pelo png
}
//animação para Bot2
const b2A = () => {
    const b1 = document.getElementById('b2') //identifacação do b1

    b1.onclick = b2.src = '' //combinado com o de baixo faz com q o gif resete
    b1.onclick = b2.src = './images/Botao2.gif'
}
//desativação do Bot2
const b2D = () => {
    const b2 = document.getElementById('b2') //identifacação do b1
        b2.onclick = b2.src = './images/Botao2.png' //troca o gif pelo png
}

//animação para "X"s e resetar o jogo caso a função seja chamada 4 vezes (4 erros)
const marcaX = () => {
    if(document.getElementById('x3').style.display != 'inline'){document.getElementById('x3').style.display = 'inline'}
    else if (document.getElementById('x2').style.display != 'inline'){document.getElementById('x2').style.display = 'inline'}
    else if (document.getElementById('x1').style.display != 'inline'){document.getElementById('x1').style.display = 'inline'}
    else {
        document.getElementById("FadeOut").style.opacity = '1';
        document.getElementById("FadeOut").style.zIndex = '10';
        setTimeout(()=>location.reload(true),2000)
    }
}

//animação para a comporta do manual:
const abremanual = () => {
    document.getElementById('comportaF').style.display = 'none' //esconde a imagem estática da comporta fechada

    //define partes importantes para a função como constantes mais fáceis de serem chamadas:
    const botC = document.getElementById('botC')
    const botCGif = document.getElementById('botCGif')
    const compA = document.getElementById('comportaA')  
    const compB = document.getElementById('comportaB')

    //animação:
    if(compA.style.display != 'inline') {   //checa se o gif de abertura não está visível
        botC.disabled = true //desativa o botão (anti-spam de cliques)
        botCGif.src = '' //combinado com o de baixo faz com q o gif resete
        botCGif.src = './images/BotaoC.gif'
        compA.style.display = 'inline' //prepara para mostrar o gif da comporta abrindo
        compB.style.display = 'none' //esconde o gif da comporta fechando
        compA.src = './images/Comporta-do-Manual-abrindo.gif' //mostra o gif da comporta abrindo (forçando a recarregar pela troca do src)
        compB.src = '' //muda a src do gif da comporta fechando p forçar o recarregamento quando ele for chamado
        setTimeout(() => {compA.style.zIndex = 3; botC.disabled = false}, 420) //enquanto o gif da comporta abrindo estiver sendo reproduzido ele é exibido acima do texto (linha 33), porém ao terminar, o coloca abaixo do texto e o botão volta a ser clicável
    } else { //se o gif de abertura estiver visível, então o gif a ser reproduzido é o da comporta fechando
        botC.disabled = true //desativa o botão (anti-spam de cliques)
        botCGif.src = '' //combinado com o de baixo faz com q o gif resete
        botCGif.src = './images/BotaoC.gif'
        compA.style.zIndex = 9 //eleva o gif da comporta abrindo para a próxima chamada
        compA.style.display = 'none' //esconde o gif da comporta abrindo
        compB.style.display = 'inline' //prepara para mostrar o gif da comporta abrindo
        compA.src = '' //muda a src do gif de abertura para forçar o recarregamento na próxima chamada
        compB.src = './images/Comporta-do-Manual-fechando.gif' //exibe o gif da comporta fechando
        setTimeout(()=>{botC.disabled = false}, 420 ) //deixa o botão não clicável enquanto o gif é reproduzido

    }
}

//função para percorrer as páginas do manual:
const percorreManual = (pgs, p = 0) => {
    const setaL = document.getElementById("setaL1")
    const setaR = document.getElementById("setaR1")

    pgs[p].style.display = 'block'

    if (p === 0) {
        setaL.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, pgs.length-1);
        }
        setaR.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p+1);
        }
    }
    else if (p === pgs.length-1) {
        setaL.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p-1);
        }
        setaR.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, 0);
        }
    }
    else {
        setaL.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p-1);
        }
        setaR.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p+1);
        }
    }
}

const finalização = new Event('fim')

const escreveDialogo = (dialogo, parte = 0) => {
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT")

    if (parte === dialogo.length-1) {
        areaT.textContent = dialogo[parte].textContent
        bot4.onclick = () => escreveDialogo(dialogo, parte-1)
        bot3.onclick = document.dispatchEvent(finalização)
    }
    else if (parte === 0) {
        areaT.textContent = dialogo[parte].textContent
        bot3.onclick = () => escreveDialogo(dialogo, parte+1)
    }
    else {
        areaT.textContent = dialogo[parte].textContent
        bot4.onclick = () => escreveDialogo(dialogo, parte-1)
        bot3.onclick = () => escreveDialogo(dialogo, parte+1)
    }
}