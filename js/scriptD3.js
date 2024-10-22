const cdia3 = () => {
    espera(() => {
        fadein();
    });
    espera(() => {
        document.getElementById('Tdia').innerHTML = '3'; d3C1()
    });
}
//monologo do sistema
const d3C1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot3.disabled = false;

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-BEM VINDO DE VOLTA OFICIAL, SUA FREQUÊNCIA FOI ATUALIZADA COM SUCESSO, HOJE SOMENTE FROTAS MERCANTES SERÃO PERMITIDAS, NENHUMA NAVE QUE NÃO TRANSPORTE MERCADORIAS PODE ENTRAR. SIRVA BEM, VIVA BEM. ATIVIDADE FRONTEIRIÇA ALTA, AGUARDANDO SEU COMANDO-'

    bot3.onclick = d3t1
}
//tarefas
const d3t1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    bot1.disabled = false;
    b1A();
    bot2.disabled = false;
    b2A();

    areaT.innerHTML = tarefasD3[0].texto;

    bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d3t2);esc()};
    bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d3t2);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const d3t2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD3[1].texto;

    bot1.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d3d1);esc()};
    bot2.onclick = () => {AS();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d3d1);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
//dialogo preparando dilema
const d3d1 = () => {
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
    areaT.innerHTML = 'Sentido Senhor Oficial! Só fazendo algumas inspeções rotineiras na sala, o sistema ficará desativado momentaneamente, enquanto eu realizo meus serviços, agradeço pela sua paciência Senhor Oficial.'

    bot3.onclick = d3d2
}
const d3d2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = false;
    bot4.disabled = false;
    des();

    areaT.innerHTML = 'Ei, Oficial, ficou sabendo do que houve com o antigo Servitor Mecânico? Ele foi acusado e executado por traição, estou substituindo ele agora. Ouvi dizer que o Senhor conhecia ele, que ele tinha vindo aqui ontem, imagino que o senhor tenha ficado preocupado com isso, mas não se preocupe, seu segredo esta guardado comigo.'

    bot3.onclick = d3d3
    bot4.onclick = d3d1
}
const d3d3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot3.disabled = false;
    bot4.disabled = false;

    areaT.innerHTML = 'Um passarinho me contou que um planeta próximo de nós foi tomado por selvagens, uma frota enorme de refugiados está vindo para cá, porém todas suas características estão quebrando o regulamento, lhe peço que tenha clemência, deixe os refugiados entrarem, tentaram uma nova vida aqui, se tornaram mão de obra barata para o império em troca de serem salvos, decida com cuidado Oficial.'

    bot3.onclick = d3d4
    bot4.onclick = d3d2
}
const d3d4 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    ati()

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-SISTEMAS 100 POR CENTO FUNCIONAIS NOVAMENTE, VOLTANDO A OBRIGAÇÕES DIÁRIAS-';
    espera5(d3t3)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const d3t3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false;
    bot2.disabled = false;

    areaT.innerHTML = tarefasD3[2].texto;

    bot1.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(d3t4);esc()};
    bot2.onclick = () => {AS();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(d3t4);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const d3t4 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD2[3].texto;

    bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema3);esc()};
    bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema3);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    areaT.innerHTML = '-TRANSMISSÃO EM ADAMENTO-';
    espera(dilema31)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema31 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false
    bot2.disabled = false
    bot3.disabled = false

    monitorT.innerHTML = 'Capitão de nave genérica'
    areaT.innerHTML = 'Sumo Oficial, eu lhe imploro, permita-nos entrar. Nosso planeta foi devastado por selvagens e não temos mais para onde ir, antigamente esse planeta tinha uma rota comercial conosco mas depois da troca de poder a rota foi cortada, tudo que peço é que nos dê a chance de tentar a vida aqui, podemos trabalhar para vocês, podemos receber menos que a média enquanto trabalhamos mais que a média, contanto que nos deixem entrar. Por favor Oficial, não temos mais para onde ir.'

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema3H);esc()};
    bot2.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema3D);canh()};
    bot3.onclick = dilema32;
    bot4.disabled = true;
}
const dilema32 = () => {
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
    areaT.innerHTML = '-DENTRE TODAS AS 814 NAVES, NENHUMA SEGUE O REGULAMENTO. PERMITIR ACESSO A ELES NÃO É ACONSELHADO-'

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema3H);esc()};
    bot2.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema3D);canh()};
    bot3.disabled = true;
    bot4.onclick = dilema21;
}
const dilema3H = () => {
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
    const f2 = localStorage.getItem('f2');
    const f3 = f2-1;
    localStorage.setItem('f3', f3);

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-QUANTIDADE DE NAVES ENTRANDO MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera5(fdia3)
}
const dilema3D = () => {
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
    const f2 = localStorage.getItem('f2');
    const f3 = parseInt(f2) + 1;
    localStorage.setItem('f3', f3);

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-QUANTIDADE DE DESTROÇOS EM ORBITA MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera5(fdia3)
}
//função para puxar próximo dia 
const fdia3 = () => {
    const f3 = localStorage.getItem('f3');
    fadeout();
    espera(cdia4());
    console.log(f3)
}