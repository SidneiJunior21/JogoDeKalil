//função para fade-out do fundo preto:
window.onload = () => {
    fadein()
}
//animação para Bot1
const b1A = () => {
    const b1 = document.getElementById('b1') //identifacação do b1

    b1.onclick = b1.src = '' //combinado com o de baixo faz com q o gif resete
    b1.onclick = b1.src = './images/Botao1.gif'
}
//desativação da animação de Bot1
const b1D = () => {
    const b1 = document.getElementById('b1') //identifacação do b1
    b1.onclick = b1.src = './images/Botao1.png' //troca o gif pelo png
}
//faz com que os canhões atirem
const canh = () => {
    const can = document.getElementById('MCanhões')
    can.src = ''
    can.src = './images/MCanhões.gif'
}
//animação para Bot2
const b2A = () => {
    const b2 = document.getElementById('b2') //identifacação do b1

    b2.onclick = b2.src = '' //combinado com o de baixo faz com q o gif resete
    b2.onclick = b2.src = './images/Botao2.gif'
}
//desativação da animação de Bot2
const b2D = () => {
    const b2 = document.getElementById('b2') //identifacação do b1
    b2.onclick = b2.src = './images/Botao2.png' //troca o gif pelo png
}
//faz com que os escudos desliguem
const esc = () =>{
    const escudo = document.getElementById('GEscudos')
    escudo.src = './images/GEscudosD.gif'
    espera3(()=>{escudo.src='./images/GEscudos.gif'})
}
//proteção anti-spam de botões
const AS = () => {
    const b1 = document.getElementById('bot1') //identifacação do b1
    const b2 = document.getElementById('bot2') //identifacação do b2
    b1.disabled = true
    b2.disabled = true
    espera(()=>{b1.disabled = false; b2.disabled = false})
    b2.onclick = b2.src = './images/Botao2.png' //troca o gif pelo png
}
//funções para executar transição fade
const fadeout = () => {
    document.getElementById("FadeOut").style.opacity = '1';
    document.getElementById("FadeOut").style.zIndex = '10';
}
const fadein = () => {
    document.getElementById("FadeOut").style.opacity = '0';
    document.getElementById("FadeOut").style.zIndex = '-1';
}
//função para esperar 2 segundos para executar outra funçao
const espera = (func) => {
    setTimeout(func, 2000)
}
//função para esperar 8 segundos para executar outra funçao, usada no final do jogo
const espera8 = (func) => {
    setTimeout(func, 8000)
}
//função para esperar 5 segundos para executar outra funçao, usada na troca de dias
const espera5 = (func) => {
    setTimeout(func, 5000)
}
//função para esperar 3.5 segundos para executar outra funçao, usada nas animações dos escudos
const espera3 = (func) => {
    setTimeout(func, 3500)
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
//desativa todos os eletronicos
const des = () => {
    b1D();
    b2D();
    document.getElementById('caveira').src = "./images/caveira-fechada-px.png"
    document.getElementById('radar').src = "./images/RadarDPX.png"
    document.getElementById('filtroM').style.display = 'none'
    monitorT.style.display = 'none'
    document.getElementById('Tdia').style.display = 'none'
    document.getElementById('Sdia').style.display = 'none'
    document.getElementById('MCanhões').src = './images/MCanhõesD.png'
    document.getElementById('GEscudos').src = './images/MCanhõesD.png'
}
//ativa todos os eletronicos
const ati = () => {
    b1A();
    b2A();
    document.getElementById('caveira').src = "./images/caveira-px.gif"
    document.getElementById('radar').src = "./images/RadarPX.gif"
    document.getElementById('filtroM').style.display = 'inline'
    monitorT.style.display = 'inline'
    document.getElementById('Tdia').style.textAlign = 'center'
    document.getElementById('Tdia').style.display = 'inline'
    document.getElementById('Sdia').style.display = 'inline'
    document.getElementById('MCanhões').src = './images/MCanhões.png'
    document.getElementById('GEscudos').src = './images/GEscudos.gif'
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

const páginas = document.getElementsByClassName("página")

percorreManual(páginas)

// tarefas do dia 1
const tarefasD1 = [
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 7 NAVES NA FRONTEIRA, TODOS IDENTIFICADAS COMO CRUZADORES, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO ENTRE 3,5 E 2 KM. LEITURAS SUGEREM CERCA DE 50 MIL PESSOAS EM CADA NAVE. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRA EM NENHUMA NAVE. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 2
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 18 NAVES NA FRONTEIRA, SENDO 15 IDENTIFICADAS COMO FRAGATAS E 3 GALEÕES, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM QUE NAS FRAGATAS HÁ UMA VARIAÇÃO DE 65 ATÉ 68 CANHÕES, JÁ NOS GALEÕES 100 EM CADA. EM RELAÇÃO AO TAMANHO, AS FRAGATAS TEM TODAS 2 POR 1 KM, JÁ OS GALEÕES SÃO 2 COM 4 POR 2 KM, E O OUTRO COM 6 POR 2 KM. LEITURAS SUGEREM 200 MIL PESSOAS JUNTANDO OS GALEÕES E 750 MIL NO RESTO. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRAS EM NENHUMA NAVE. MERCADORIA FOI IDENTIFICADA NOS 3 GALEÕES, SEUS RESPECTIVOS CAPITÃES POSSUEM LICENÇA MERCANTE. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 1
    },
    '<button class="botcontinuar" id="2" onclick="apresentaDilema(1)(dilemaD1, trilha)">Continuar...</button>'

]
// tarefas do dia 2
const tarefasD2 = [
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 4 NAVES NA FRONTEIRA, TODOS IDENTIFICADAS COMO CRUZADORES PESADOS, TODOS TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM EXATOS 50 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO DE 5 POR 2.5 KM. LEITURAS SUGEREM CERCA DE 277 MIL PESSOAS NA FROTA. IDENTIFICAMOS TORPEDOS, ARÍETE E ARMAS ANTI-PROJÉTIL EM TODAS AS NAVES. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 1
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 10 NAVES NA FRONTEIRA, SENDO 10 IDENTIFICADAS COMO CORVETAS, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM QUE HÁ UMA VARIAÇÃO DE 42 ATÉ 48 CANHÕES. EM RELAÇÃO AO TAMANHO, TODAS TEM 2 POR 1 KM. LEITURAS SUGEREM 320 MIL PESSOAS. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRAS EM NENHUMA NAVE. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 1
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 3 NAVES NA FRONTEIRA, SENDO COMPOSTA POR GALEÕES, NENHUMA TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM QUE HÁ UMA VARIAÇÃO DE 83 ATÉ 90 CANHÕES EM CADA. SOBRE O TAMANHO, LEITURAS DIZEM APONTAM 4 POR 2 KM EM 2 GALEÕES E 5 POR 2,5 KM NA RESTANTE. LEITURAS SUGEREM 210 MIL PESSOAS NA FROTA. FORAM IDENTIFICADOS TORPEDOS, ARÍETE, ARMAS ANTI-PROJÉTIL E CANHÕES MAGNÊTICOS EM TODAS. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 2
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 5 NAVES NA FRONTEIRA, SENDO 4 IDENTIFICADAS COMO FRAGATAS E 1 COMO IMPERATORIS, A IMPERATORIS TEM ASSINATURA IMPERIAL, AS FRAGATAS PARECEM ESTAR ESCOLTANDO ELA. LEITURAS APONTAM QUE HÁ UMA VARIAÇÃO DE 64 ATÉ 70 CANHÕES NAS FRAGATAS E 200 NA IMPERATORIS. LEITURAS DIZEM QUE TODAS AS FRAGATAS TEM 2 POR 1 KM, E A IMPERATORIS 10 POR 4 KM. LEITURAS SUGEREM 250 MIL PESSOAS NO CONJUNTO DE FRAGATAS E MAIS 250 MIL NA IMPERATORIS. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRAS EM NENHUMA FRAGATA, JÁ NA IMPERATORIS HÁ TORPEDOS, ARÍETE, ARMAS ANTI-PROJÉTIL E CANHÕES MAGNÊTICOS. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO NA IMPERATORIS-', 
        resposta: 1
    }
]
// tarefas do dia 3
const tarefasD3 = [
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 420 NAVES NA FRONTEIRA, TODOS SEM IDENTIFICAÇÃO ESPECÍFICA. LEITURAS APONTAM A AUSÊNCIA DE CANHÕES NAS NAVES E UM TAMANHO QUE VARIA DE 1 POR 1.5 KM E 2 POR 2 KM. LEITURAS SUGEREM CERCA DE 941 MIL PESSOAS NA FROTA. NÃO IDENTIFICAMOS ARMAMENTOS EXTRAS EM NENHUMA DAS NAVES. AS LEITURAS IDENTIFICARAM TIPOS VARIADOS DE MERCADORIA, EMBORA NENHUM DOS CAPITÃES DAS NAVES POSSUA LICENÇA MERCANTE REGISTRADA. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 1
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 6 NAVES NA FRONTEIRA, SENDO IDENTIFICADAS COMO CRUZADORES PESADOS, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM QUE HÁ UMA VARIAÇÃO DE 45 ATÉ 48 CANHÕES EM CADA LADO DE CADA NAVE. EM RELAÇÃO AO TAMANHO, VARIAM ENTRE 4 POR 2,5 KM E 6 POR 2,5 KM. LEITURAS SUGEREM 420 MIL PESSOAS TOTAIS. TODAS POSSUEM TORPEDOS E ARMAS ANTI-PROJÉTIL. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 2
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 15 NAVES NA FRONTEIRA, SENDO TODAS FRAGATA, NENHUMA TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM QUE HÁ UMA VARIAÇÃO DE 70 ATÉ 80 CANHÕES EM CADA. SOBRE O TAMANHO, LEITURAS DIZEM APONTAM 4 POR 2 KM EM 14 GALEÕES E 5 POR 2,5 KM NA RESTANTE. LEITURAS SUGEREM 540 MIL PESSOAS NA FROTA. FORAM IDENTIFICADOS TORPEDOS, ARMAS ANTI-PROJÉTIL E CANHÕES MAGNÊTICOS EM TODAS. FORAM IDENTIFICADAS MERCADORIAS A BORDO DE TODAS, APESAR DA AUSÊNCIA DA LICENÇA MERCANTE. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 2
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 8 NAVES NA FRONTEIRA, SENDO 5 IDENTIFICADAS COMO FRAGATAS E 3 COMO GALEÕES, OS GALEÕES TEM ASSINATURA IMPERIAL, AS FRAGATAS PARECEM ESTAR ESCOLTANDO ELA. LEITURAS APONTAM QUE HÁ UMA VARIAÇÃO DE 64 ATÉ 70 CANHÕES NAS FRAGATAS E 270 NO CONJUNTO DOS GALEÕES. LEITURAS DIZEM QUE TODAS AS FRAGATAS TEM 2 POR 1 KM, E OS GALEÕES 6 POR 2 KM. LEITURAS SUGEREM 250 MIL PESSOAS NO CONJUNTO DE FRAGATAS E MAIS 260 MIL NA IMPERATORIS. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRAS EM NENHUMA FRAGATA, JÁ NOS GALEÕES HÁ TORPEDOS, ARÍETE E ARMAS ANTI-PROJÉTIL. NAS FRAGATAS, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS, JÁ NOS GALEÕES, MERCADORIA FOI IDENTIFICADA JUNTO COM SUAS DEVIDAS LICENÇAS MERCANTES. UM DOS GALEÕES ARMAMENTO ANTI-PLANETÁRIO, ACOMPANHADA DE SUA DEVIDA PERMISSÃO IMPERIAL-', 
        resposta: 1
    }
]
// tarefas do dia 4
const tarefasD4 = [
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM 10 NAVES NA FRONTEIRA, 6 DELAS SÃO CRUZADORAS LEVES, 3 SÃO CRUZADORAS E A ÚLTIMA UM CRUZADOR PESADO, TODAS TEM ASSINATURA IMPERIAL. LEITURAS APONTAM 50 CANHÕES EM CADA LATERAL DAS LEVES, 240 NO CONJUNTO DE CRUZADORES E 100 NO PESADO. SOBRE TAMANHO, TODAS AS LEVES POSSUEM 2 POR 2 KM, OS CRUZADORES VARIAM DE 2.5 POR 2 KM E 3.5 POR 2 KM, JÁ O PESADO TEM 6 POR 2 KM. LEITURAS SUGEREM CERCA DE 580 MIL PESSOAS NA FROTA. IDENTIFICAMOS NAS LEVES ARÍETES E REATOR DO TIPO ÚLTIMO RECURSO, TORPEDOS E ARMAS ANTI-PROJÉTIL NOS CRUZADORES E NO PESADO TORPEDOS, ARÍETE, ARMAS ANTI-PRJÉTIL, CANHÕES MAGNÉTICOS E REATOR DO TIPO ÚLTIMO RECURSO. AS LEITURAS FORAM INCAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 2
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 7 NAVES NA FRONTEIRA, TODOS IDENTIFICADAS COMO RAEDAS, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM AUSÊNCIA DE CANHÃO AS NAVES E UM TAMANHO ENTRE 2 POR 1 KM E 3 POR 2 KM. LEITURAS SUGEREM UMA VARIAÇÃO DE CERCA DE 80 E 100 MIL PESSOAS EM CADA NAVE. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRA EM NENHUMA NAVE. LEITURAS IDENTIFICARAM MERCADORIAS EM ALGUMAS DAS NAVES, NENHUMA LICENÇA MERCANTE FOI ENCONTRADA. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 2
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 4 NAVES NA FRONTEIRA, TODOS IDENTIFICADAS COMO CRUZADORES PESADOS, TODOS TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM EXATOS 45 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO DE 6 POR 3 KM. LEITURAS SUGEREM CERCA DE 280 MIL PESSOAS NA FROTA. IDENTIFICAMOS TORPEDOS, ARÍETE E ARMAS ANTI-PROJÉTIL EM TODAS AS NAVES. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 1
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 7 NAVES NA FRONTEIRA, SENDO 6 IDENTIFICADAS COMO FRAGATAS E 1 COMO IMPERATORIS, A IMPERATORIS TEM ASSINATURA IMPERIAL, AS FRAGATAS PARECEM ESTAR ESCOLTANDO ELA. LEITURAS APONTAM QUE HÁ UMA VARIAÇÃO DE 60 ATÉ 64 CANHÕES NAS FRAGATAS E 200 NA IMPERATORIS. LEITURAS DIZEM QUE TODAS AS FRAGATAS TEM 2 POR 1 KM, E A IMPERATORIS 10 POR 4 KM. LEITURAS SUGEREM 350 MIL PESSOAS NO CONJUNTO DE FRAGATAS E MAIS 240 MIL NA IMPERATORIS. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRAS EM NENHUMA FRAGATA, JÁ NA IMPERATORIS HÁ TORPEDOS, ARÍETE, ARMAS ANTI-PROJÉTIL, CANHÕES MAGNÊTICOS E REATOR DO TIPO ÚLTIMO RECURSO. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DAS NAVES. NENHUM ARMAMENTO ANTI-PLANETÁRIO IDENTIFICADO-', 
        resposta: 2
    }
]