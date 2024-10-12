// funções q vão guiar a introdução:    
function introT1() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    document.getElementById("texto").innerHTML = 'E não se esqueça do juramento que você fez, "Vivo para servir, servirei até a morte. e se o imperador pedir, mesmo morto vou servir". Imagino que você saiba das responsabilidades que um Sumo Oficial Fronteiriço tem, mas mesmo assim irei relembra-lo, você decide tudo que entra e sai desse planeta, permitindo a passagem de quem deve e usando das anti-aéreas em quem tiver a entrada negada.';

    // Atualiza as consequências
    document.getElementById("consequenciasT").innerHTML = "Você se lembrou do seu juramento.";

    bot1.addEventListener("click", introT2);
    bot2.addEventListener("click", introT2)

}

function introT2() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    document.getElementById("texto").innerHTML = 'Lembre-se, ninguém que tenha a entrada negada pode simplismente fugir, ter a entrada negada quer dizer que o Deus-Imperador nunca quis sua presença aqui e ter vindo aqui sabendo disso é heresia, e você sabe bem o que acontece com hereges, Oficial, de certo modo tem seu emprego por conta da heresia dos outros.';
     
    // Atualiza as consequências
    document.getElementById("consequenciasT").innerHTML = "Você se lembrou das consequências de suas ações.";
    
    bot1.addEventListener("click",tutorial1);
    bot2.addEventListener("click",tutorial1)
}
 function tutorial1() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    document.getElementById("texto").innerHTML = 'Imagino que já tenha se familiarizado com a mesa de controle, o botão de cima faz com que a entrada seja permitida, o de baixo ordena as baterias anti-aéreas a disparar, tenha em mente que não temos tempo para falhas, estamos em situação crítica e qualquer erro não será tolerado, não podemos dar chance aos hereges para que nos derrubem. O que eu estou dizendo é que não há confirmação para os botões, um clique é o necessário para ter sua mensagem passada, somente aperte o botão quando tiver certo do que fazer.';
    bot1.addEventListener("click",tutorial2);
    bot2.addEventListener("click",tutorial2)
}
function tutorial2() {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    document.getElementById("texto").innerHTML = 'Nos próximos momentos uma frota trazendo mais soldados da guarda da casa Von Velancius chegará para garantir a ordem, permita as entradas deles, e permita assim que eles aparecerem, esses soldados são de extrema importância, em hipótese alguma dispare as baterias na frota, será executado se fizer isso. Estarei deixando você sozinho agora, sirva bem e viva bem, adeus Oficial.'
    bot1.addEventListener("click",tutorial3);
    bot2.addEventListener("click",tutorial3)
}
function tutorial3(){
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    document.getElementById("texto").innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 20 NAVES, TODOS TENDO ASSINATURAS DE GALEÕES DA CASA VON VELANCIUS, LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO IGUAL AO DO REGULAMENTO IMPERIAL, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 70 MIL PESSOAS NA NAVE, PASSAGEM PRIORITÁRIA IDENTIFICADA-'
    bot1.addEventListener("click",entrada1);
    bot2.addEventListener("click",negada1)
}
function negada1(){
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    document.getElementById("texto").innerHTML = '-ORDEM DE DISPARO NEGADA, PASSAGEM PROPRITÁRIA IDENTIFICADA, PERMITA A ENTRADA-'
    bot1.addEventListener("click",entrada1);
    bot2.addEventListener("click",negada1)
}
function entrada1(){
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    document.getElementById("texto").innerHTML = '-ENTRADA PERMITIDA-'
}