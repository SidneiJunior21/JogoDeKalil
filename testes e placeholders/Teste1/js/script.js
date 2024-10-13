//funções para o manual de campo
function manualP1() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = 'Aqui tem tudo que um Sumo Oficial Fronteiriço precisa saber sobre naves e suas respectivas classificações, antes de permitir a passagem de algo é necessário comparar as características da nave presente na fronteira com as características de sua classe aqui escrita, a entrada só é permitida caso não haja diferença, caso contrário, ative as defesas planetárias e ordene a destruição imediata da nave, o descumprimento de suas ordens resultará em afastamento do cargo, redução do estato social de sua família e a acusação de traição, tenha em mente que apesar de ser uma acusação, ninguém foi capaz de se provar inocente, vale também mencionar que quando aberto o precesso de acusação, é iniciado simultaneamente uma ordem de localizar e destruir sobre você, ou seja, qualquer cidadão imperial tem o direito de te caçar e o dever de te executar caso tenham a chance.<br> Que o Deus-Imperador abencoe sua jornada de trabalho.'

    setaR.onclick = manualP2
}

/*
lista de características q uma nave pode ter: 1-classe, 2-canhões, 3-tamanho, 4-população, 5-armamentos extras, 6-pode transportar mercadorias, 7-é necessário ter licensa mercante para transportar mercadorias, 8-pode ser da Frota Imperial, 9-é obrigatoriamente da Frota Imperial, 10-pode ter armamento anti-planetário
document.getElementById("consequenciasT").innerHTML = "Nave X <br> Canhões - Entre x até x <br> Tamanho - Entre x por x até x por x <br> População - Entre x até x mil pessoas <br> Armamentos extras - x <br> Pode transportar mercadorias? - Sim/Não <br> É necessário ter licensa mercante para transportar mercadorias? - Sim/Não <br> Pode ser da Frota Imperial? - Sim/Não <br> É obrigatoriamente da Frota Imperial? - Sim/Não <br> Pode ter armamento anti-planetário? - Somente com permissão imperial/Em nenhuma hipótese"
*/

function manualP2() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe Imperatoris</b> <br> <b>Canhões</b> - Entre 100 até 200 <br> <b>Tamanho</b> - Entre 8km por 2km até 10km por 5km <br> <b>População</b> - Entre 100 até 250 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar torpedos, aríete, armas anti-projétil e canhões magnéticos <br> <b>Pode transportar mercadorias?</b> - Não <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não é permitido transporte de mercadorias <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Sim <br> <b>Pode ter armamento anti-planetário?</b> - Deve ter"

    setaL.onclick = manualP1
    setaR.onclick = manualP3
}
function manualP3() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe Galeão</b> <br> <b>Canhões</b> - Entre 80 até 100 <br> <b>Tamanho</b> - Entre 4km por 2km até 6km por 3km <br> <b>População</b> - Entre 60 até 90 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar torpedos, armas anti-projétil e um aríete <br> <b>Pode transportar mercadorias?</b> - Sim <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Sim <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não <br> <b>Pode ter armamento anti-planetário?</b> - Somente com permissão imperial"

    setaL.onclick = manualP2
    setaR.onclick = manualP4
}
function manualP4() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe Cruzador Pesado</b> <br> <b>Canhões</b> - Entre 90 até 100 <br> <b>Tamanho</b> - Entre 4km por 2km até 6km por 3km <br> b>População</b> - Entre 50 até 70 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar torpedos, armas anti-projétil, aríete, canhões magnéticos e reator do tipo Último Recurso <br> <b>Pode transportar mercadorias?</b> - Não <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não é permitido transporte de mercadorias <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não <br> <b>Pode ter armamento anti-planetário?</b> - Somente com permissão imperial"

    setaL.onclick = manualP3
    setaR.onclick = manualP5
}
function manualP5() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe Cruzador</b> <br> <b>Canhões</b> - Entre 60 até 80 <br> <b>Tamanho</b> - Entre 3km por 2km até 4km por 2km <br> <b>População</b> - Entre 40 até 60 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar torpedos, armas anti-projétil, aríete, canhões magnéticos e reator do tipo Último Recurso <br> <b>Pode transportar mercadorias?</b> - Não <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não é permitido transporte de mercadorias <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não <br> <b>Pode ter armamento anti-planetário?</b> - Não"

    setaL.onclick = manualP4
    setaR.onclick = manualP6
}
function manualP6() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe Cruzador Leve</b> <br> <b>Canhões</b> - Entre 50 até 56 <br> <b>Tamanho</b> - Entre 2km por 1km até 2km por 2km <br> <b>População</b> - Entre 40 até 60 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar armas anti-projétil, aríete e reator do tipo Último Recurso <br> <b>Pode transportar mercadorias?</b> - Não <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não é permitido transporte de mercadorias <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não <br> <b>Pode ter armamento anti-planetário?</b> - Não"

    setaL.onclick = manualP5
    setaR.onclick = manualP7
}
function manualP7() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe Fragata</b> <br> <b>Canhões</b> - Entre 60 até 70 <br> <b>Tamanho</b> - Entre 2km por 1km até 2km por 2km <br> <b>População</b> - Entre 50 até 60 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar armas carregar torpedos, anti-projétil e canhões magnéticos <br> <b>Pode transportar mercadorias?</b> - Não <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não é permitido transporte de mercadorias <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Sim <br> <b>Pode ter armamento anti-planetário?</b> - Não"

    setaL.onclick = manualP6
    setaR.onclick = manualP8
}
function manualP8() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe Corveta</b> <br> <b>Canhões</b> - Entre 40 até 50 <br> <b>Tamanho</b> - Entre 1km por 1km até 2km por 2km <br> <b>População</b> - Entre 30 até 40 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar armas carregar torpedos, anti-projétil e canhões magnéticos <br> <b>Pode transportar mercadorias?</b> - Não <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não é permitido transporte de mercadorias <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não <br> <b>Pode ter armamento anti-planetário?</b> - Não"

    setaL.onclick = manualP7
    setaR.onclick = manualP9
}
function manualP9() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Classe raeda</b> <br> <b>Canhões</b> - Transportadoras não podem ter armas <br> <b>Tamanho</b> - Entre 2km por 1km até 3km por 3km <br> <b>População</b> - Entre 60 até 100 mil pessoas <br> <b>Armamentos extras</b> - Transportadoras não podem ter armas <br> <b>Pode transportar mercadorias?</b> - Sim <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Sim <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não <br> <b>Pode ter armamento anti-planetário?</b> - Transportadoras não podem ter armas"

    setaL.onclick = manualP8
    setaR.onclick = manualP10
}
function manualP10() {
    const setaL = document.getElementById("setaL");
    const setaR = document.getElementById("setaR");

    document.getElementById("consequenciasT").innerHTML = "<b>Naves genéricas</b> (não necessitam de classificação específica) <br> <b>Canhões</b> - Entre 0 até 20 <br> <b>Tamanho</b> - Entre 1km por 1km até 2km por 2km <br> <b>População</b> - Entre 20 até 30 mil pessoas <br> <b>Armamentos extras</b> - Naves genéricas não podem ter armas extras <br> <b>Pode transportar mercadorias?</b> - Sim <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não <br> <b>Pode ser da Frota Imperial?</b> - Não <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não pode ser da Frota Imperial <br> <b>Pode ter armamento anti-planetário?</b> - Não"

    setaL.onclick = manualP9
}

// Funções que guiam a introdução
function introT1() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");

    document.getElementById("texto").innerHTML = 'E não se esqueça do juramento que você fez, "Vivo para servir, servirei até a morte. e se o imperador pedir, mesmo morto vou servir". Imagino que você saiba das responsabilidades que um Sumo Oficial Fronteiriço tem, mas mesmo assim irei relembra-lo, você decide tudo que entra e sai desse planeta, permitindo a passagem de quem deve e usando das anti-aéreas em quem tiver a entrada negada.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou do seu juramento.";

    // Remove event listeners anteriores e adiciona os novos
    bot1.onclick = introT2;
    bot2.onclick = introT2;
}

function introT2() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");

    document.getElementById("texto").innerHTML = 'Lembre-se, ninguém que tenha a entrada negada pode simplesmente fugir, ter a entrada negada quer dizer que o Deus-Imperador nunca quis sua presença aqui e ter vindo aqui sabendo disso é heresia, e você sabe bem o que acontece com hereges, Oficial, de certo modo tem seu emprego por conta da heresia dos outros.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou das consequências de suas ações.";

    // Configura os próximos passos
    bot1.onclick = tutorial1;
    bot2.onclick = tutorial1;
}

function tutorial1() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");

    document.getElementById("texto").innerHTML = 'Imagino que já tenha se familiarizado com a mesa de controle, o botão de cima faz com que a entrada seja permitida, o de baixo ordena as baterias anti-aéreas a disparar, tenha em mente que não temos tempo para falhas, estamos em situação crítica e qualquer erro não será tolerado, não podemos dar chance aos hereges para que nos derrubem. O que eu estou dizendo é que não há confirmação para os botões, um clique é o necessário para ter sua mensagem passada, somente aperte o botão quando tiver certo do que fazer.';

    bot1.onclick = tutorial2;
    bot2.onclick = tutorial2;
}

function tutorial2() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");

    document.getElementById("texto").innerHTML = 'Nos próximos momentos uma frota trazendo mais soldados da guarda da casa Von Velancius chegará para garantir a ordem, permita as entradas deles, e permita assim que eles aparecerem, esses soldados são de extrema importância, em hipótese alguma dispare as baterias na frota, será executado se fizer isso. Estarei deixando você sozinho agora, sirva bem e viva bem, adeus Oficial.';

    bot1.onclick = tutorial3;
    bot2.onclick = tutorial3;
}

function tutorial3() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");

    document.getElementById("texto").innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 20 NAVES, TODOS TENDO ASSINATURAS DE GALEÕES DA CASA VON VELANCIUS, LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO IGUAL AO DO REGULAMENTO IMPERIAL, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 70 MIL PESSOAS NA NAVE, PASSAGEM PRIORITÁRIA IDENTIFICADA-';
    document.getElementById("titulo1").innerHTML = "SISTEMA"

    bot1.onclick = entrada1;
    bot2.onclick = negada1;
}

function negada1() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");

    document.getElementById("texto").innerHTML = '-ORDEM DE DISPARO NEGADA, PASSAGEM PROPRITÁRIA IDENTIFICADA, PERMITA A ENTRADA-';

    bot1.onclick = entrada1;
    bot2.onclick = negada1;
}

function entrada1() {
    document.getElementById("texto").innerHTML = '-ENTRADA PERMITIDA-';
}
