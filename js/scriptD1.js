// Funções que guiam a introdução
const dialogoIntro = document.getElementsByClassName("intro")
const dialogoTut = document.getElementsByClassName("tut")
const continuar = document.getElementsByClassName("botcontinuar")

escreveDialogo(dialogoIntro)

// const tutorial2 = () => {
//     const bot1 = document.getElementById("bot1");
//     const bot2 = document.getElementById("bot2");
//     const bot3 = document.getElementById("bot3");
//     const bot4 = document.getElementById("bot4");

//     document.getElementById("transcT").innerHTML = 'Nos próximos momentos uma frota trazendo mais soldados da guarda da casa Von Velancius chegará para garantir a ordem, permita as entradas deles, e permita assim que eles aparecerem, esses soldados são de extrema importância, em hipótese alguma dispare as baterias na frota, será executado se fizer isso. Estarei deixando você sozinho agora, sirva bem e viva bem, adeus Oficial.';

//     bot3.onclick = () => {tutorial3(); b1A(); b2A()};
//     bot4.onclick = tutorial1;
// }

// const tutorial3 = () => {
//     const bot1 = document.getElementById("bot1");
//     const bot2 = document.getElementById("bot2");
//     const bot3 = document.getElementById("bot3");
//     const bot4 = document.getElementById("bot4");

//     document.getElementById("transcT").innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 20 NAVES, TODOS TENDO ASSINATURAS DE GALEÕES DA CASA VON VELANCIUS, LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO IGUAL AO DO REGULAMENTO IMPERIAL, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 70 MIL PESSOAS NA NAVE, PASSAGEM PRIORITÁRIA IDENTIFICADA-';
//     document.getElementById("monitorT").innerHTML = "SISTEMA"

//     bot1.onclick = () => {AS();b1A();entrada1()};
//     bot2.onclick = () => {AS();b2A();negada1()};
//     bot3.disabled = true;
//     bot4.disabled = true;
// }

// const negada1 = () => {
//     const bot1 = document.getElementById("bot1");
//     const bot2 = document.getElementById("bot2");
//     const bot3 = document.getElementById("bot3");
//     const bot4 = document.getElementById("bot4");

//     document.getElementById("transcT").innerHTML = '-ORDEM DE DISPARO NEGADA, PASSAGEM PROPRITÁRIA IDENTIFICADA, PERMITA A ENTRADA-';
//     espera(tutorial3)

//     bot1.onclick = () => {AS();b1A();entrada1()}
//     bot2.onclick = () => {AS();b2A();negada1()}
//     bot3.disabled = true;
//     bot4.disabled = true;
// }

// const entrada1 = () => {
//     const bot1 = document.getElementById("bot1");
//     const bot2 = document.getElementById("bot2");
//     const bot3 = document.getElementById("bot3");
//     const bot4 = document.getElementById("bot4");

//     document.getElementById("transcT").innerHTML = '-ENTRADA PERMITIDA-';
//     espera(tarefa1)
//     Dbot(bot1, bot2, bot3, bot4);

//     bot1.onclick = entrada1;
//     bot1.onclick = entrada1;
//     bot3.disabled = true;
//     bot4.disabled = true;
// }
// const tarefa1 = () => {
//     const bot1 = document.getElementById("bot1");
//     const bot2 = document.getElementById("bot2");
//     const bot3 = document.getElementById("bot3");
//     const bot4 = document.getElementById("bot4");
//     const areaT = document.getElementById("transcT");

//     areaT.innerHTML = tarefasD1[0].texto;

//     bot1.onclick = () => {AS(); marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(tarefa2)};
//     bot2.onclick = () => {AS(); areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(tarefa2);canh()};
//     bot3.disabled = true;
//     bot4.disabled = true;
// }
// const tarefa2 = () => {
//     const bot1 = document.getElementById("bot1");
//     const bot2 = document.getElementById("bot2");
//     const bot3 = document.getElementById("bot3");
//     const bot4 = document.getElementById("bot4");
//     const areaT = document.getElementById("transcT");

//     areaT.innerHTML = tarefasD1[1].texto;

//     bot1.onclick = () => {AS();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema1)};
//     bot2.onclick = () => {AS();marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema1); canh()};
//     bot3.disabled = true;
//     bot4.disabled = true;
// }
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

    bot1.onclick = () => {AS();monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema1H)};
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

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-QUANTIDADE DE DESTROÇOS EM ORBITA MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera5(fdia1)
}
//função para puxar próximo dia 
const fdia1 = () => {
    fadeout();
    espera(cdia2())
}