//const responsavel por definir o final do jogo
const f = 0;
const preIntro = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Devido a acusações de traição, o antigo oficial foi... Afastado do serviço, se é que podemos falar assim. Mas não se preocupe Oficial, se não quiser ter o mesmo final que o antigo teve, faça diferente, tome as decisões certas e as coisas vão dar certo no final, o Deus-Imperador garantirá que vai dar certo.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou do seu juramento.";

    // Remove event listeners anteriores e adiciona os novos
    bot3.onclick = introT1;
    bot4.onclick = null;
}
const introT1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'E não se esqueça do juramento que você fez, "Vivo para servir, servirei até a morte. e se o imperador pedir, mesmo morto vou servir". Imagino que você saiba das responsabilidades que um Sumo Oficial Fronteiriço tem, mas mesmo assim irei relembra-lo, você decide tudo que entra e sai desse planeta, permitindo a passagem de quem deve e usando das anti-aéreas em quem tiver a entrada negada.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou do seu juramento.";

    // Remove event listeners anteriores e adiciona os novos
    bot3.onclick = introT2;
    bot4.onclick = preIntro;
}

const introT2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Lembre-se, ninguém que tenha a entrada negada pode simplesmente fugir, ter a entrada negada quer dizer que o Deus-Imperador nunca quis sua presença aqui e ter vindo aqui sabendo disso é heresia, e você sabe bem o que acontece com hereges, Oficial, de certo modo tem seu emprego por conta da heresia dos outros.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou das consequências de suas ações.";

    // Configura os próximos passos
    bot3.onclick = tutorial1;
    bot4.onclick = introT1;
}

const tutorial1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Imagino que já tenha se familiarizado com a mesa de controle, o botão de cima faz com que a entrada seja permitida, o de baixo ordena as baterias anti-aéreas a disparar, e o botão com o símbolo imperial à esquerda do radar abre seu manual de campo. Tenha em mente que não temos tempo para falhas, estamos em situação crítica e qualquer erro não será tolerado, não podemos dar chance aos hereges para que nos derrubem. O que eu estou dizendo é que não há confirmação para os botões, um clique é o necessário para ter sua mensagem passada, somente aperte o botão quando tiver certo do que fazer.';

    bot3.onclick = tutorial2;
    bot4.onclick = introT2;
}

const tutorial2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Nos próximos momentos uma frota trazendo mais soldados da guarda da casa Von Velancius chegará para garantir a ordem, permita as entradas deles, e permita assim que eles aparecerem, esses soldados são de extrema importância, em hipótese alguma dispare as baterias na frota, será executado se fizer isso. Estarei deixando você sozinho agora, sirva bem e viva bem, adeus Oficial.';

    bot3.onclick = () => {tutorial3(); b1A(); b2A()};
    bot4.onclick = tutorial1;
}

const tutorial3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 20 NAVES, TODOS TENDO ASSINATURAS DE GALEÕES DA CASA VON VELANCIUS, LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO IGUAL AO DO REGULAMENTO IMPERIAL, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 70 MIL PESSOAS NA NAVE, PASSAGEM PRIORITÁRIA IDENTIFICADA-';
    document.getElementById("monitorT").innerHTML = "SISTEMA"

    bot1.onclick = () => {AS();b1A();entrada1();esc()};
    bot2.onclick = () => {AS();b2A();negada1()};
    bot3.disabled = true;
    bot4.disabled = true;
}

const negada1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = '-ORDEM DE DISPARO NEGADA, PASSAGEM PROPRITÁRIA IDENTIFICADA, PERMITA A ENTRADA-';
    espera(tutorial3)

    bot1.onclick = () => {AS();b1A();entrada1()}
    bot2.onclick = () => {AS();b2A();negada1()}
    bot3.disabled = true;
    bot4.disabled = true;
}

const entrada1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = '-ENTRADA PERMITIDA-';
    espera(tarefa1);

    bot1.onclick = entrada1;
    bot1.onclick = entrada1;
    bot3.disabled = true;
    bot4.disabled = true;
}
const tarefa1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD1[0].texto;

    bot1.onclick = () => {AS(); marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(tarefa2);esc()};
    bot2.onclick = () => {AS(); areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(tarefa2);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const tarefa2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD1[1].texto;

    bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema1);esc()};
    bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema1); canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
//dilema do dia
const dilema1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    areaT.innerHTML = '-TRANSMISSÃO EM ADAMENTO-';
    espera(dilema11)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema11 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false
    bot2.disabled = false

    monitorT.innerHTML = 'Capitão de Classe Raeda'
    areaT.innerHTML = 'Não atire! Por favor, nos escute, somos antigos soldados da casa RavenHawk, a casa que tinha controle do planeta antes da Lady Theodora tomar controle, estamos sem ter para onde ir, depois de nosso líder ter sido acusado e morto por traição não conseguimos encontrar trabalho em lugar nenhum, sei que somos de casas rivais e que suas ordens devem ser de atirar em nós, mas por favor tenha piedade, nossa frota esta de acordo com o regulamento, se você nós deixar entrar o sistema não irá te punir, não iremos contar para ninguém do que você fez! Por favor, tenha misericórdia e nós de a chance de encontrar abrigo no planeta novamente.'

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema1H);esc()};
    bot2.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema1D);canh()};
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema1H = () => {
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
    const f1 = f-1;
    localStorage.setItem('f1', f1);

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-OBRIGAÇÕES DIÁRIAS CONCLUÍDAS, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera5(fdia1)
}
const dilema1D = () => {
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
    const f1 = f + 1;
    localStorage.setItem('f1', f1);

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-QUANTIDADE DE DESTROÇOS EM ORBITA MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera5(fdia1)
}
//função para puxar próximo dia 
const fdia1 = () => {
    const f1 = localStorage.getItem('f1');
    console.log(f1)
    fadeout();
    espera(cdia2())
}