//função generica para animações dos botões
const animaBotao = (BotId, imgSrc, reset = true) => {
    const botao = document.getElementById(botId);
    if (reset) botao.src = ''; //reseta o gif
    botao.src = imgSrc; //atribui a nova src
}
//desativação de botoes
const desativaBotao = (botId, imgSrc) => {
    document.getElementById(botId).src = imgSrc;
}
// Funções para os botões
const b1A = () => animaBotao('b1', './images/Botao1.gif');
const b1D = () => desativaBotao('b1', './images/Botao1.png');
const b2A = () => animaBotao('b2', './images/Botao2.gif');
const b2D = () => desativaBotao('b2', './images/Botao2.png');

//animação para "X"s e resetar o jogo caso a função seja chamada 4 vezes (4 erros)
const marcaX = () => {
    const xs = ['x1', 'x2', 'x3']
    const xVisivel =xs.find(id => document.getElementById(id).style.display !== 'inline')

    if (xvisivel) {
        document.getElementById(xVisivel).style.display = 'inline'
    } else {
        const fadeOut = document.getElementByid('FadeOut');
        fadeOut.style.opacity ='1';
        fadeOut.stily.zIndex = '10';
        setTimeout(() => location.reload(true), 2000);
    }
};

// Função para manipular a comporta
const abremanual = () => {
    const botC = document.getElementById('botC');
    const botCGif = document.getElementById('botCGif');
    const compA = document.getElementById('comportaA');
    const compB = document.getElementById('comportaB');

    if (compA.style.display !== 'inline') {
        botC.disabled = true;
        animaBotao('botCGif', './images/BotaoC.gif');
        compA.style.display = 'inline';
        compB.style.display = 'none';
        animaBotao('comportaA', './images/Comporta-do-Manual-abrindo.gif', false);
        compB.src = '';
        setTimeout(() => {
            compA.style.zIndex = 3;
            botC.disabled = false;
        }, 420);
    } else {
        botC.disabled = true;
        animaBotao('botCGif', './images/BotaoC.gif');
        compA.style.zIndex = 9;
        compA.style.display = 'none';
        compB.style.display = 'inline';
        animaBotao('comportaB', './images/Comporta-do-Manual-fechando.gif', false);
        setTimeout(() => botC.disabled = false, 420);
    }
};

// Função para percorrer páginas do manual
const percorreManual = (pgs, p = 0) => {
    const setaL = document.getElementById('setaL1');
    const setaR = document.getElementById('setaR1');

    pgs.forEach(pg => pg.style.display = 'none');
    pgs[p].style.display = 'block';

    setaL.onclick = () => percorreManual(pgs, (p === 0) ? pgs.length - 1 : p - 1);
    setaR.onclick = () => percorreManual(pgs, (p === pgs.length - 1) ? 0 : p + 1);
};

const páginas = document.getElementsByClassName("página");
percorreManual(páginas);
   
// Funções para a introdução (mantém a mesma lógica)
const preIntro = () => {
    const [bot3, bot4] = [document.getElementById("bot3"), document.getElementById("bot4")];
    document.getElementById("transcT").innerHTML = 'Devido a acusações de traição...';
    bot3.onclick = introT1;
    bot4.onclick = nadakk;
};

const introT1 = () => {
    const [bot3, bot4] = [document.getElementById("bot3"), document.getElementById("bot4")];
    document.getElementById("transcT").innerHTML = 'E não se esqueça do juramento...';
    bot3.onclick = introT2;
    bot4.onclick = preIntro;
};

// Funções tutorial seguem o mesmo padrão
const tutorial1 = () => {
    document.getElementById("transcT").innerHTML = 'Imagino que já tenha se familiarizado com a mesa...';
    document.getElementById("bot3").onclick = tutorial2;
};

const tutorial2 = () => {
    document.getElementById("transcT").innerHTML = 'Nos próximos momentos uma frota...';
    document.getElementById("bot3").onclick = tutorial3;
};

const tutorial3 = () => {
    animaBotao('b1', './images/Botao1.gif');
    animaBotao('b2', './images/Botao2.gif');
    document.getElementById("transcT").innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA...';
    document.getElementById("bot1").onclick = () => { animaBotao('b1', './images/Botao1.gif'); entrada1(); };
    document.getElementById("bot2").onclick = () => { animaBotao('b2', './images/Botao2.gif'); negada1(); };
};