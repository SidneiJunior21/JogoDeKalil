const cdia2 = () => {
    espera(() => {
        fadein();
    });
    espera(() => {
        document.getElementById('Tdia').innerHTML = '2'; d2C1()
    });
}
//monologo do sistema
const d2C1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot3.disabled = false;

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-BEM VINDO DE VOLTA OFICIAL, SUA FREQUÊNCIA FOI ATUALIZADA COM SUCESSO, MANTENHA A SUA FREQUÊNCIA COMO O ESPERADO POR 5 DIAS E TERÁ UM BÔNUS DE 1 MINUTO E MEIO EM SEU HORÁRIO DE INTERVALO, SIRVA BEM, VIVA BEM. ATIVIDADE FRONTEIRIÇA ALTA, AGUARDANDO SEU COMANDO-'

    bot3.onclick = d2t1
}
//tarefas
const d2t1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    bot1.disabled = false;
    b1A();
    bot2.disabled = false;
    b2A();

    areaT.innerHTML = tarefasD2[0].texto;

    bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d2t2)};
    bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d2t2)};
    bot3.disabled = true;
    bot4.disabled = true;
}
const d2t2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD2[1].texto;

    bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d2d1)};
    bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d2d1)};
    bot3.disabled = true;
    bot4.disabled = true;
}
//dialogo preparando dilema
const d2d1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = false;

    monitorT.innerHTML = 'Servitor Mecânico'
    areaT.innerHTML = 'Licença Senhor Oficial, só fazendo algumas inspeções rotineiras na sala, o sistema ficará desativado momentaneamente, enquanto eu realizo meus serviços, agradeço pela sua paciência Senhor Oficial.'

    bot3.onclick = d2d2
}
const d2d2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = true;
    b1D();
    bot2.disabled = true;
    b2D();
    bot3.disabled = false;
    bot4.disabled = false;
    document.getElementById('caveira').src = "./images/caveira-fechada-px.png"
    document.getElementById('radar').src = "./images/RadarDPX.png"
    document.getElementById('filtroM').style.display = 'none'
    monitorT.style.display = 'none'
    document.getElementById('Tdia').style.display = 'none'
    document.getElementById('Sdia').style.display = 'none'

    areaT.innerHTML = 'Ei, Oficial, me escute enquanto o há tempo, perdoe-me por o que vou dizer, mas preciso de um favor seu, ouvi dizer que a frota mercante que vinha trazendo suprimentos foi roubada por piratas, pelo que eu ouvi roubaram sua documentação junto com a carga, mas ainda são eles, devem chegar ainda hoje, por favor Oficial, deixe eles entrarem, as cidades estão sem suprimentos, o povo está com fome.'

    bot3.onclick = d2d3
    bot4.onclick = d2d1
}
const d2d3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot3.disabled = false;
    bot4.disabled = false;

    areaT.innerHTML = 'Não se preocupe com Eles, não podem nos ouvir, não enquanto o sistema está desligado, pense bem no que eu disse Oficial, o povo conta com o senhor.'

    bot3.onclick = d2d4
    bot4.onclick = d2d2
}
const d2d4 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    b1A();
    b2A();
    document.getElementById('caveira').src = "./images/caveira-px.gif"
    document.getElementById('radar').src = "./images/RadarPX.gif"
    document.getElementById('filtroM').style.display = 'inline'
    monitorT.style.display = 'inline'
    document.getElementById('Tdia').style.textAlign = 'center'
    document.getElementById('Tdia').style.display = 'inline'
    document.getElementById('Sdia').style.display = 'inline'


    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-SISTEMAS 100 POR CENTO FUNCIONAIS NOVAMENTE, VOLTANDO A OBRIGAÇÕES DIÁRIAS-';
    espera5(d2t3)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const d2t3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false;
    bot2.disabled = false;

    areaT.innerHTML = tarefasD2[2].texto;

    bot1.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d2t4)};
    bot2.onclick = () => {AS();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d2t4)};
    bot3.disabled = true;
    bot4.disabled = true;
}
const d2t4 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD2[3].texto;

    bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema2)};
    bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema2)};
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    areaT.innerHTML = '-TRANSMISSÃO EM ADAMENTO-';
    espera(dilema21)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema21 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false
    bot2.disabled = false
    bot3.disabled = false

    monitorT.innerHTML = 'Capitão de Classe Galeão'
    areaT.innerHTML = 'Sumo Oficial, escute o que nós temos a dizer, nossa frota foi saqueada por piratas enquanto vinha até seu planeta, roubaram parte de nossa carga e toda documentação. Ainda temos carga o bastante para suprir as necessidades básicas do planeta, lhe imploro para permitir nossa entrada. Caso negue, sairemos prejudicados também, pois não tem quem compre o que restou de nossa carga, seremos obrigados a descartar ela.'

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema2H)};
    bot2.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema2D)};
    bot3.onclick = dilema22;
    bot4.disabled = true;
}
const dilema22 = () => {
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
    areaT.innerHTML = '-RETIRANDO A FALTA DE DOCUMENTAÇÃO, TODAS AS 57 NAVES DA FROTA SEGUEM O REGULAMENTO-'

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema2H)};
    bot2.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema2D)};
    bot3.disabled = true;
    bot4.onclick = dilema21;
}
const dilema2H = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = true;
    b1D();
    bot2.disabled = true;
    b2D();

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-QUANTIDADE DE NAVES ENTRANDO MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera5(fdia2)
}
const dilema2D = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = true;
    b1D();
    bot2.disabled = true;
    b2D();

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-QUANTIDADE DE DESTROÇOS EM ORBITA MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera5(fdia2)
}
//função para puxar próximo dia 
const fdia2 = () => {
    fadeout();
    espera(cdia3())
}