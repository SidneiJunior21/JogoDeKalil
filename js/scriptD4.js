const cdia4 = () => {
    espera(() => {
        fadein();
    });
    espera(() => {
        document.getElementById('Tdia').innerHTML = '4'; d4C1()
    });
}
//monologo do sistema
const d4C1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot3.disabled = false;

    monitorT.innerHTML = 'SISTEMA'
    
    areaT.scrollTop = 0
    areaT.innerHTML = '-BEM VINDO DE VOLTA OFICIAL, SUA FREQUÊNCIA FOI ATUALIZADA COM SUCESSO, HOJE É PÁSCOA, DIA DE CELEBRAR A IMORTALIDADE DE NOSSO PROPRIETÁRIO, O DEUS-IMPERADOR. SIRVA BEM, VIVA BEM. ATIVIDADE FRONTEIRIÇA ALTA, AGUARDANDO SEU COMANDO-'

    bot3.onclick = d4t1
}
//tarefas
const d4t1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    bot1.disabled = false;
    b1A();
    bot2.disabled = false;
    b2A();

    
    areaT.scrollTop = 0
    areaT.innerHTML = tarefasD4[0].texto;

    bot1.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d4t2);esc()};
    bot2.onclick = () => {AS();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d4t2);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const d4t2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    bot1.disabled = false;
    b1A();
    bot2.disabled = false;
    b2A();

    
    areaT.scrollTop = 0
    areaT.innerHTML = tarefasD4[1].texto;

    bot1.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d4t3);esc()};
    bot2.onclick = () => {AS();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d4t3);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const d4t3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    bot1.disabled = false;
    b1A();
    bot2.disabled = false;
    b2A();

    areaT.scrollTop = 0
    areaT.innerHTML = tarefasD4[2].texto;

    bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d4t4);esc()};
    bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d4t4);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const d4t4 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    bot1.disabled = false;
    b1A();
    bot2.disabled = false;
    b2A();

    
    areaT.scrollTop = 0
    areaT.innerHTML = tarefasD4[3].texto;

    bot1.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema4);esc()};
    bot2.onclick = () => {AS();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema4);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
//quarto dilema
const dilema4 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    
    areaT.scrollTop = 0
    areaT.innerHTML = '-TRANSMISSÃO EM ADAMENTO-';
    espera(dilema41)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema41 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    areaT.scrollTop = 0
    areaT.innerHTML = '-UMA NAVE ESTA PEDINDO ACESSO À FRONTEIRA POR DENTRO, ELA QUER SAIR DO PLANETA-';
    espera(dilema42)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema42 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false
    bot2.disabled = false
    bot3.disabled = false

    monitorT.innerHTML = '??? de Classe Fragata'
    
    areaT.scrollTop = 0
    areaT.innerHTML = 'Sumo Oficial, pelo amor do Deus-Imperador, LIBERE O ACESSO! Algo de muito errado está acontecendo aqui dentro. A Lady Theodora, ela esta construindo um Canhão Estelar aqui! Ela quer construir uma arma capaz de destruir estrelas com um único disparo, destruindo sistemas solares inteiros em um apertar de um botão. Não quero fazer parte dessa loucura. Por favor Oficial, libere o acesso, deixe-me fugir desse mundo insano.'

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema4H);esc()};
    bot2.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema4D);canh()};
    bot3.onclick = dilema43;
    bot4.disabled = true;
}
const dilema43 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false
    bot2.disabled = false
    bot4.disabled = false

    monitorT.innerHTML = 'SISTEMA'
    
    areaT.scrollTop = 0
    areaT.innerHTML = '-O REGULAMENTO PROIBE QUALQUER UM DE SAIR DO PLANETA SEM A PERMISSÃO DA LADY THEODORA VON VELANCIUS. DESTRUA A NAVE IMEDIATAMENTE-'

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema4H);esc()};
    bot2.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema4D);canh()};
    bot3.disabled = true;
    bot4.onclick = dilema42;
}
const dilema4H = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    const f3 = localStorage.getItem('f3');
    const f4 = f3-2;
    localStorage.setItem('f4', f4);

    analisaFinal(f4)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema4D = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    const f3 = localStorage.getItem('f3');
    const f4 = parseInt(f3) + 2;
    localStorage.setItem('f4', f4);

    analisaFinal(f4)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const analisaFinal = (f4) => {
    console.log(f4);;
    if (f4 > 0){
        finalD()
    } else {finalH()}
}
//final Herege
const finalH = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    monitorT.innerHTML = '??? de Classe Fragata'
    
    areaT.scrollTop = 0
    areaT.innerHTML = 'Ouvi falar bem de você Oficial, um passarinho me contou que você é uma boa pessoa. Você também deve sair desse planeta condenado a liderança insana da Casa Von Velancius, há espaço na minha nave, venha comigo Oficial. Não se preocupe, não irão caçar você, você é substituível, se continuasse aqui morreria e seria reposto por outro Oficial, assim como foi com o antigo Servitor Mecânico da sua sala de controle.';
    espera5(finalH1)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const finalH1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    monitorT.innerHTML = 'SISTEMA'
    
    areaT.scrollTop = 0
    areaT.innerHTML = '-SUMO OFICIAL FRONTEIRIÇO SAINDO DA SALA DE CONTROLE, VOLTE IMEDIATAMENTE E CUMPRA SEU DEVER CASO CONTR...-';
    espera5(des())
    espera5(finalG)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
//final Dogmático
const finalD = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    b1D();
    b2D();

    monitorT.innerHTML = 'SISTEMA'
    
    areaT.scrollTop = 0
    areaT.innerHTML = '-LADY THEODORA VON VELANCIUS EXIGINDO ENTRADA NA SALA DE CONTROLE, ABRINDO COMPORTAS-';
    espera(finalD1)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const finalD1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    
    espera(()=>{document.getElementById('caveira').src = "./images/caveira-fechada-px.png"});
    espera3(()=>{document.getElementById('radar').src = "./images/RadarDPX.png"});

    monitorT.innerHTML = 'Theodora V. Velancius'
    
    areaT.scrollTop = 0
    areaT.innerHTML = 'Deve ter sido uma bela explosão, como fogos de artifício no céu, vai se misturar bem com o show de fogos em homenagem ao Deus-Imperador, Feliz páscoa Oficial!';
    espera5(finalD2)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const finalD2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    document.getElementById('Tdia').style.display = 'none'
    document.getElementById('Sdia').style.display = 'none'
    espera(()=>{document.getElementById('caveira').src = "./images/caveira-fechada-px.png"});
    espera3(()=>{document.getElementById('radar').src = "./images/RadarDPX.png"});

    monitorT.innerHTML = 'Theodora V. Velancius'
    
    areaT.scrollTop = 0
    areaT.innerHTML = 'Eu pessoalmente adoro a páscoa, relembra a todos de que o Deus-Imperador é imortal, e por consequência, todo o Império.';
    espera8(finalD3)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const finalD3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    espera(()=>{document.getElementById('filtroM').style.display = 'none'; monitorT.style.display = 'none'});
    espera3(()=>{document.getElementById('MCanhões').src = './images/MCanhõesD.png'; document.getElementById('GEscudos').src = './images/MCanhõesD.png'});

    monitorT.innerHTML = 'Theodora V. Velancius'
    
    areaT.scrollTop = 0
    areaT.innerHTML = 'Acredita no que ele disse? Sobre o Canhão Estelar? Pois é verdade, projetei esse canhão muito antes de ter dominado esse planeta, a dominção foi só uma parte do que eu planejava.';
    espera8(finalD4)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const finalD4 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    monitorT.innerHTML = 'Theodora V. Velancius'
    
    areaT.scrollTop = 0
    areaT.innerHTML = 'Um planeta somente para minerações, o lugar perfeito para esconder a construção do canhão, e ele estar a beira de uma revolução só tornou mais fácil a conquista.';
    espera8(finalD5)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const finalD5 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    const tiro = new Audio('./audio/Tiros.mp3')
    espera(()=>{tiro.play()})

    monitorT.innerHTML = 'Theodora V. Velancius'
    
    areaT.scrollTop = 0
    areaT.innerHTML = 'Você serviu bem, Sumo Oficial Fronteiriço. Garantirei que sua família fique bem após sua morte. No registro irá constar como ataque cardiaco, sua família não terá o desgosto de ter você morto por traição.';
    espera8(finalG)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const finalG = () => {
    espera5(()=>{location.reload(true)})
}